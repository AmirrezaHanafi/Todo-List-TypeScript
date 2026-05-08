import { create } from 'zustand'
import UsersData, { type User } from '../Data/users-data'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type UseUserStore = {
  userData: User[]
  addUser: (user: User) => void
  removeUser: (id: number) => void
  editUser: (id: number) => void
}

export const useUserStore = create<UseUserStore>()(
  persist(
    immer(set => ({
      userData: UsersData,

      addUser(user) {
        set(state => {
          state.userData.push(user)
        })
      },

      removeUser(id) {
        set(state => {
          const index = state.userData.findIndex(item => item.id === id)
          if (index !== -1) {
            state.userData.splice(index, 1)
          }
        })
      },

      editUser(id) {
        console.log(id)
      }
    })),
    {
      name: 'user-data'
    }
  )
)
