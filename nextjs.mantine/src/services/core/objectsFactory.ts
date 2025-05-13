import { Api } from '@/services';
import { IServiceConstructorData, IPaginateResponse } from '@/services';
import { AxiosRequestConfig } from 'axios';

export class ObjectsFactory<T> {
  service: Api;

  path = '';

  static factory<M>(data: IServiceConstructorData) {
    return new ObjectsFactory<M>(data);
  }

  constructor({ path }: IServiceConstructorData) {
    this.service = new Api({ path });
    this.path = path;
  }

  findAll(config: AxiosRequestConfig = {}) {
    const { url = this.path, ...rest } = config;
    return this.service.get<IPaginateResponse<T>>({ ...rest, url });
  }

  paginate<U = T>(config: AxiosRequestConfig = {}) {
    const { url = this.path, ...rest } = config;
    return this.service.get<IPaginateResponse<U>>({ url, ...rest });
  }

  findOnePaginate(id: number | string, config: AxiosRequestConfig = {}) {
    const { url = `${this.path}/${id}`, ...rest } = config;
    return this.service.get<IPaginateResponse<T>>({ url, ...rest });
  }

  findOne(id: number | string, config: AxiosRequestConfig = {}) {
    const { url = `${this.path}/${id}`, ...rest } = config;
    return this.service.get<T>({ url, ...rest });
  }

  create(data: unknown, config: AxiosRequestConfig = {}) {
    const { url = this.path, ...rest } = config;
    return this.service.post<T>({ url, ...rest, data });
  }

  update(id: number | string, data: unknown, config: AxiosRequestConfig = {}) {
    const { url = `${this.path}/${id}`, ...rest } = config;
    return this.service.put<T>({ url, ...rest, data });
  }

  delete(id: number | string, config: AxiosRequestConfig = {}) {
    const { url = `${this.path}/${id}`, ...rest } = config;
    return this.service.delete({ url, ...rest });
  }
}
