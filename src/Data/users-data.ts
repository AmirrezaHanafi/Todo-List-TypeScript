import type { List } from '../Types/list.ts'

export type User = {
  id: number
  name: string
  email: string
  password: string
  listTodo: List
}

const UserData: User = {}
