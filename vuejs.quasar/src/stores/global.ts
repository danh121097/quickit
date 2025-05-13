import { Socket } from 'socket.io-client';

interface IGlobalState {
  ioStore: {
    socket?: Socket;
    authenticated?: boolean;
  };
}

export const useGlobalStore = defineStore('global', {
  state: (): IGlobalState => ({
    ioStore: {},
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
