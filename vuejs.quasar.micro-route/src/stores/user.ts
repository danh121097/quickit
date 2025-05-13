interface IUserState {
  token: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): IUserState => ({
    token: LocalStorage.getItem(`${process.env.APP_NAME}_TOKEN`) || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {},
});
