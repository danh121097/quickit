import { api } from '@/services';

export const apisAuth = {
  logout: () => {
    return api.post('/logout');
  },
};
