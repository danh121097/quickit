import { Socket } from 'socket.io-client';

interface IGlobalState {
  ioStore: {
    socket?: Socket;
    authenticated?: boolean;
  };
  defaultPath: string;
}

export const useGlobalStore = defineStore('global', {
  state: (): IGlobalState => ({
    ioStore: {},
    defaultPath: 'home',
  }),
  getters: {
    //
  },
  actions: {
    setSocket(io: { socket?: Socket; authenticated?: boolean }) {
      this.ioStore = { ...this.ioStore, ...io };
    },
  },
});
