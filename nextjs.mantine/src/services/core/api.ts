import { Cookies } from '@/enums';
import { AUTH_PATH } from '@/routes';
import { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from 'axios';
import { IHttpError } from '@/services';
import { deleteCookie } from 'cookies-next';
import axios, { AxiosError } from 'axios';

export interface IServiceConstructorData {
  path: string;
  baseUrl?: string;

  getRoleFn?: () => string | null | undefined;
  getTokenFn?: () => string | null | undefined;
  getTokenTypeFn?: () => string | null | undefined;
}

export class Api {
  http: AxiosInstance = axios.create();

  path = '';

  constructor(config: IServiceConstructorData) {
    const { path, baseUrl, getTokenFn, getTokenTypeFn } = config;
    this.path = path;

    const instanceConfig: CreateAxiosDefaults = {
      baseURL: baseUrl || process.env.APP_END_POINT,
      url: path,
      withCredentials: false,
    };

    this.http = axios.create(instanceConfig);
    this.http.interceptors.request.use((request) => {
      const token = getTokenFn && getTokenFn();
      const tokenType = getTokenTypeFn && getTokenTypeFn();
      request.headers.Authorization = `${tokenType || 'Bearer'} ${token}`;
      request.headers.ctime = Date.now();
      return request;
    });
    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.status === 401) {
          if (window.location.pathname !== AUTH_PATH.LOGIN) {
            deleteCookie(Cookies.USER_TOKEN);
            deleteCookie(Cookies.TOKEN_TYPE);
            deleteCookie(Cookies.USER_ROLE);
            window.location.reload();
          }
        }
        return this.handleError(error);
      },
    );
  }

  handleError(err: AxiosError<IHttpError>) {
    const finalError: IHttpError = {
      status: err.response?.status,
      message:
        err.message || err.response?.data.message || 'Something went wrong!',
    };

    return Promise.reject(finalError);
  }

  get<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, ...requestConfig } = config;
    return this.http.get<T>(url, requestConfig);
  }

  post<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...params } = config;
    return this.http.post<T>(url, data, params);
  }

  postFormData<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...params } = config;
    return this.http.postForm<T>(url, data, {
      ...params,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  postFormUrlencoded<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...params } = config;
    return this.http.post<T>(url, data, {
      ...params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  put<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...requestConfig } = config;
    return this.http.put<T>(url, data, requestConfig);
  }

  putFormData<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...params } = config;
    return this.http.putForm<T>(url, data, {
      ...params,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  putFormUrlencoded<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...params } = config;
    return this.http.put<T>(url, data, {
      ...params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  patch<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, data, ...requestConfig } = config;
    return this.http.patch<T>(url, data, requestConfig);
  }

  delete<T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, ...requestConfig } = config;
    return this.http.delete<T>(url, requestConfig);
  }
}
