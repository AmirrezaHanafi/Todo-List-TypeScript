import { useUserStore } from '../stores/user-store.ts'

type LoginData = {
  email: string
  password: string
}

export const useAuthService = () => {
  const userData = useUserStore(state => state.userData)

  const login = (data: LoginData): boolean => {
    const user = userData.find(u => u.email === data.email && u.password === data.password)

    if (user) {
      localStorage.setItem(
        'auth',
        JSON.stringify({
          isAuthenticated: true,
          role: user.role,
          id: user.id
        })
      )
      return true
    }

    return false
  }

  return { login }
}
