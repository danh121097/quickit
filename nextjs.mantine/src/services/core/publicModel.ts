import { Api, getTokenFn, getTokenTypeFn } from '@/services';
import { IServiceConstructorData } from '@/services';

export class PublicModel {
  static api: Api;

  static path: string;

  static setup(
    modelConfig: IServiceConstructorData = {
      path: '',
      getTokenFn: getTokenFn,
      getTokenTypeFn: getTokenTypeFn,
    },
  ) {
    const { path } = modelConfig;

    this.api = new Api({
      path,
      baseUrl: process.env.APP_END_POINT,
      getTokenFn: getTokenFn,
      getTokenTypeFn: getTokenTypeFn,
    });
    this.path = path;
  }
}
