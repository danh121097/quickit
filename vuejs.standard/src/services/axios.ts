import axios, {
  type AxiosRequestHeaders,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import { HmacSHA256 } from 'crypto-js';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  withCredentials: true,
});

function setHeaders(config: InternalAxiosRequestConfig): AxiosRequestHeaders {
  return Object.assign({}, generateHMACSignature(config), config.headers);
}

function removeCookies() {
  cookies.keys().forEach((key) => {
    cookies.remove(key);
  });
}

function generateHMACSignature(config: InternalAxiosRequestConfig<any>) {
  let path = config.url || '';
  if (!path.startsWith('/')) path = '/' + path;

  const method = config.method?.toUpperCase() || '';
  const contentType = config.headers['Content-Type'];
  const ctime = +new Date();

  const stringToSign = [method, contentType, ctime, path].join('\n');

  const sig = HmacSHA256(stringToSign, import.meta.env.VITE_HMAC_SECRET || '').toString();

  return { sig, ctime };
}

api.interceptors.request.use((config) => {
  try {
    config.headers = setHeaders(config);

    const token = cookies.get(`${import.meta.env.VITE_APP_NAME}_TOKEN`);
    if (token) config.headers.authorization = `Bearer ${token.toString()}`;

    return config;
  } catch (error) {
    console.error(error);
    return config;
  }
});

api.interceptors.response.use(
  async (response: AxiosResponse<any>) => {
    if (response.data.status === 'success') {
      return response.data;
    }
    if (response.data.error_code === 401 || response.data.error_code === 403) {
      removeCookies();
      window.location.href = '/login';
    }

    return Promise.reject(new Error(response.data.message || 'An error occurred'));
  },
  async (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      removeCookies();
      window.location.href = '/login';
    }
    if (error.response?.status === 500) {
      return Promise.reject(new Error('Internal server error'));
    }

    return Promise.reject(new Error(error.response?.data?.message || 'An error occurred'));
  },
);
