import { create } from "zustand"
import { persist } from "zustand/middleware"
import { User } from "../gql/graphql"

interface UserState {
  id: number | undefined
  avatarUrl: string | null
  fullName: string
  email?: string
  updateProfileImage: (image: string) => void
  updateUsername: (name: string) => void
  setUser: (user: User) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      id: undefined,
      fullName: "",
      email: "",
      avatarUrl: null,

      updateProfileImage: (image: string) => set({ avatarUrl: image }),
      updateUsername: (name: string) => set({ fullName: name }),
      setUser: (user) =>
        set({
          id: user.id || undefined,
          avatarUrl: user.avatarUrl,
          fullName: user.fullName,
          email: user.email,
        }),
    }),
    {
      name: "user-store",
    }
  )
)