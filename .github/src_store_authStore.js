import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      login: (userData) => set({ user: userData }),
      logout: () => set({ user: null }),
      updateUser: (userData) => set((state) => ({ 
        user: { ...state.user, ...userData } 
      }))
    }),
    {
      name: 'auth-storage'
    }
  )
)