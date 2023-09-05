import { create } from "zustand";

interface User {
  name: string;
}

interface AuthStore {
  user: User;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: {} as User,
  login: (username) =>
    set((store) => ({ user: { ...store.user, name: username } })),
  logout: () => set(() => ({ user: {} as User })),
}));

export default useAuthStore;
