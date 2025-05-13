import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
import { InternalAxiosRequestConfig } from 'axios';
import { IAPIResponseError } from '@types';
import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';

// API_END_POINT: 'https://api.example.com';
// API_PREFIX: 'v1';
const api = axios.create({
  baseURL: `${process.env.API_END_POINT}/${process.env.API_PREFIX}`,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  withCredentials: true,
});

function setHeaders(config: InternalAxiosRequestConfig): AxiosRequestHeaders {
  return Object.assign({}, generateHMACSignature(config), config.headers);
}

api.interceptors.request.use(
  function (config) {
    config.headers = setHeaders(config);

    const token = LocalStorage.getItem(`${process.env.APP_NAME}_TOKEN`) as string | undefined;

    if (token) config.headers.authorization = `Bearer ${token}`;

    return config;
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

function generateHMACSignature(config: InternalAxiosRequestConfig<any>) {
  let path = config.url || '';
  if (!path.startsWith('/')) path = '/' + path;

  const method = config.method?.toUpperCase() || '';
  const contentType = config.headers['Content-Type'] as string;
  const ctime = +new Date();

  const stringToSign = [method, contentType, ctime, path].join('\n');

  const sig = Base64.stringify(HmacSHA256(stringToSign, process.env.HMAC_SECRET || ''));

  return { sig, ctime };
}

export { api };
