import axios, { AxiosError } from 'axios';
import { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { IAPIResponseError } from '@types';
import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

enum ContentType {
  'application/json' = 'application/json',
}

interface AxiosConfigHeaders {
  'Content-Type': ContentType;
  ctime?: number;
  sig?: string;
  authorization?: string;
}

const api = axios.create({
  baseURL: `${process.env.API_END_POINT}/${process.env.API_PREFIX}`,
  withCredentials: true,
});

api.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    setHeaders(config);
    deleteEmptyValues(config);

    return config as InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>;
  },
  function (error) {
    return Promise.reject(error instanceof Error ? error : new Error(String(error)));
  },
);

api.interceptors.response.use(
  (response) => {
    if (response.data.status === 'success') return response.data;
    if (response.data.error_code === 401) {
      LocalStorage.clear();
      location.reload();
    }
    const errorData = response?.data || { data: undefined };
    return Promise.reject(new Error(JSON.stringify(errorData)));
  },
  async (error: AxiosError<IAPIResponseError>) => {
    return Promise.reject(new Error(JSON.stringify(error.response?.data) || 'Network Error'));
  },
);

function deleteEmptyValues(config: AxiosRequestConfig) {
  if (config.data) config.data = deleteEmptyValue(config.data as Record<string, unknown>);

  if (config.params) config.params = deleteEmptyValue(config.params as Record<string, unknown>);
}

function deleteEmptyValue(data: Record<string, unknown>) {
  Object.keys(data).map((k) => {
    data[k] == void 0 && delete data[k];
  });
  return data;
}

function setHeaders(config: AxiosRequestConfig) {
  const token = LocalStorage.getItem(`${process.env.APP_NAME}_TOKEN`);

  config.headers = {
    ...generateHMACSignature(config),
    ...config.headers,
  };
  if (token && typeof token === 'string')
    (config.headers as AxiosConfigHeaders).authorization = `Bearer ${token}`;
}

function generateHMACSignature(config: AxiosRequestConfig) {
  const headers: AxiosConfigHeaders = {
    'Content-Type': ContentType['application/json'],
    ctime: +new Date(),
  };

  let path = config.url || '';
  if (!path.startsWith('/')) path = '/' + path;

  const method = config.method?.toUpperCase() || '';
  const contentType = headers['Content-Type'];
  const ctime = headers['ctime'] || '';

  const stringToSign = `${method}\n${contentType}\n${ctime}\n${path}\n`;

  headers.sig = Base64.stringify(HmacSHA256(stringToSign, process.env.HMAC_SECRET || ''));

  return headers;
}

export { api };
