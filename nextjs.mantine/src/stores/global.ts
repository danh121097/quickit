import { create } from 'zustand';
import { IUser } from '@/types';

type State = {
  user: IUser | null;
};

type Action = {
  setUser: (user: State['user']) => void;
};

export const useGlobalStore = create<State & Action>((set, get) => {
  return {
    user: null,
    setUser: (user) => set({ user }),
    isAuthenticated: () => !!get().user,
  };
});
