import { useGlobalStore, useUserStore } from '@stores';
import Base64 from 'crypto-js/enc-base64';
import HmacSHA256 from 'crypto-js/hmac-sha256';
import { throttle } from 'lodash';
import io from 'socket.io-client';

const storeGlobal = useGlobalStore();
const storeUser = useUserStore();

const { ioStore } = storeToRefs(storeGlobal);
const { token } = storeToRefs(storeUser);

function signHeader() {
  const ctime = +new Date();
  const method = 'GET';
  const contentType = 'application/json';
  const path = '/socket';

  const stringToSign = [method, contentType, ctime, path, ''].join('\n');
  const sig = Base64.stringify(HmacSHA256(stringToSign, process.env.HMAC_SECRET || ''));

  return {
    sig,
    ctime,
  };
}

export function useSocket(onConnected?: () => unknown) {
  const URL = process.env.API_END_POINT || '';

  const socket = io(URL, {
    auth: {
      token: `Bearer ${token.value || ''}`,
      role: 'user',
      ...signHeader(),
    },
    transports: ['websocket'],
    withCredentials: true,
    autoConnect: false,
    forceBase64: true,
  });

  const reConnect = () => {
    destroySocket();
    connectSocket();
  };
  const throttleReConnect = throttle(reConnect, 2000);

  const onConnectError = (e: Error) => {
    if (e.message === 'Unauthorized!') {
      storeGlobal.setSocket({ authenticated: false });
    }
    throttleReConnect();
  };

  const throttleOnConnectError = throttle(onConnectError, 1000);

  socket.on('authenticated', () => {
    if (onConnected) onConnected();
  });

  socket.on('connect_error', throttleOnConnectError);
  socket.on('unauthorized', () => {
    destroySocket();
  });

  function destroySocket() {
    socket.disconnect();
    storeGlobal.setSocket({ socket: socket });
  }

  function connectSocket() {
    socket.auth = {
      token: `Bearer ${token.value || ''}`,
      role: 'admin',
      ...signHeader(),
    };
    socket.connect();
    storeGlobal.setSocket({ authenticated: true, socket: socket });
  }

  onMounted(() => {
    connectSocket();
  });

  onBeforeUnmount(() => {
    destroySocket();
  });

  return {
    socket,
    authenticated: !!ioStore.value?.authenticated,
    connectSocket,
    destroySocket,
  };
}

export function useIo() {
  if (!ioStore.value.socket) {
    const { socket, authenticated } = useSocket(void 0);
    return {
      socket,
      authenticated,
    };
  }

  return {
    socket: ioStore.value.socket,
    authenticated: ioStore.value.authenticated,
  };
}
