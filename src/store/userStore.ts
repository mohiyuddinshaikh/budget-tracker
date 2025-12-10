import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { User } from 'firebase/auth';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  getCurrentUser: () => User | null;
  isAuthenticated: () => boolean;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set, get) => ({
        user: null,

        setUser: (user) => {
          set({ user });
        },

        clearUser: () => {
          set({ user: null });
        },

        getCurrentUser: () => {
          const current = get().user;
          return current;
        },

        isAuthenticated: () => {
          const auth = get().user !== null;
          return auth;
        },
      }),
      {
        name: "user-store", 
      }
    )
  )
);

export default useUserStore;
