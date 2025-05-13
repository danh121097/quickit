import { useMutation, useQuery } from '@tanstack/react-query';
import { IHttpError, Model, QueryOptions } from '@/services';
import { ILoginPayload, IUser } from '@/types';

const modelConfig = {
  path: '',
};

export class AuthModel extends Model {
  static login(payload: ILoginPayload) {
    return this.api.postFormUrlencoded<IUser>({
      url: '/login',
      data: payload,
    });
  }

  static me() {
    return this.api.get<IUser>({
      url: '/me',
    });
  }

  static logout() {
    return this.api.post({
      url: '/logout',
    });
  }
}

AuthModel.setup(modelConfig);

export const AUTH_GET_ME_QUERY = 'AUTH_GET_ME_QUERY';
export function useGetMeQuery(
  options: Omit<QueryOptions<IUser>, 'queryKey'> = {},
) {
  return useQuery<IUser, IHttpError>({
    queryKey: [AUTH_GET_ME_QUERY],
    queryFn: () => AuthModel.me().then((r) => r.data),
    ...options,
  });
}

export const AUTH_LOGIN_MUTATION = 'AUTH_LOGIN_MUTATION';
export function useLoginMutation() {
  return useMutation<IUser, IHttpError, ILoginPayload>({
    mutationKey: [AUTH_LOGIN_MUTATION],
    mutationFn: (payload: ILoginPayload) => {
      return AuthModel.login(payload).then((r) => r.data);
    },
  });
}

export const AUTH_LOGOUT_MUTATION = 'AUTH_LOGOUT_MUTATION';
export function useLogoutMutation() {
  return useMutation<unknown, IHttpError>({
    mutationKey: [AUTH_LOGOUT_MUTATION],
    mutationFn: () => {
      return AuthModel.logout().then((r) => r.data);
    },
  });
}
