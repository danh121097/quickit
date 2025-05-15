import { useCookies } from 'vue3-cookies';

interface IUserState {
  token: string | null;
}

const { cookies } = useCookies();

export const useUserStore = defineStore('user', {
  state: (): IUserState => ({
    token: cookies.get(`${import.meta.env.VITE_APP_NAME}_TOKEN`) || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    //
  },
});
