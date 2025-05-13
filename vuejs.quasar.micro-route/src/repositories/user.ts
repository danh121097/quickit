import { api } from '@/boot/axios';

export const USER = {
  logout: () => {
    return api.post('/user/logout');
  },
};
