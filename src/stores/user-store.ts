import { create } from 'zustand'
import UsersData, { type User } from '../Data/users-data'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type UseUserStore = {
  userData: User[]
  addUser: (user: User) => void
  removeUser: (id: number) => void
  editUser: (id: number) => void
  removeItem: (userId: number, listType: keyof User['listTodo'], itemId: string) => void
  addItem: (userId: number, item: string) => void
}

const STORAGE_KEY = 'user-data'

const getInitialUsers = (): User[] => {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (stored) {
    return JSON.parse(stored)
  }

  // generate users only first time
  const users: User[] = [...UsersData]

  localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
  return users
}

const initialUsers = getInitialUsers()

export const useUserStore = create<UseUserStore>()(
  persist(
    immer(set => ({
      userData: initialUsers,

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
      },
      removeItem(userId, listType, itemId) {
        set(state => {
          const user = state.userData.find(u => u.id === userId)
          if (user) {
            user.listTodo[listType] = user.listTodo[listType].filter(item => item.id !== itemId)
          }
        })
      },
      addItem(userId, item) {
        set(state => {
          const objOfItem = { id: globalThis.crypto.randomUUID(), title: item }
          const user = state.userData.find(u => u.id === userId)
          if (user) {
            user.listTodo.todo.push(objOfItem)
          }
        })
      }
    })),
    {
      name: 'user-data'
    }
  )
)
