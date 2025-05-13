import { getCookie } from 'cookies-next';
import { Api } from '@/services';
import { Cookies } from '@/enums';
import { IServiceConstructorData } from '@/services';

export function getTokenFn() {
  const token = getCookie(Cookies.USER_TOKEN);
  return token as string;
}

export function getTokenTypeFn() {
  const tokenType = getCookie(Cookies.TOKEN_TYPE);
  return tokenType as string;
}

export function getRoleFn() {
  const role = getCookie(Cookies.USER_ROLE);
  return role as string;
}

export class Model {
  static api: Api;
  static path: string;

  static setup(
    modelConfig: IServiceConstructorData = {
      path: '',
      baseUrl: '',
    },
  ) {
    const { path, baseUrl } = modelConfig;
    this.api = new Api({
      path,
      baseUrl: baseUrl || process.env.APP_END_POINT,
      getTokenFn,
      getTokenTypeFn,
      getRoleFn,
    });
    this.path = path;
  }
}
