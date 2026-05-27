import { Navigate, useParams } from 'react-router-dom'
import type { ReactNode } from 'react'

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { id } = useParams()
  const auth = JSON.parse(localStorage.getItem('auth') || '{}')

  // دسترسی ادمین همیشه باز است
  if (auth.role === 'Admin') return children

  // اگر کاربر عادی است، فقط اجازه دارد به ID خودش دسترسی داشته باشد
  if (auth.id === Number(id)) {
    return children
  }

  // اگر سعی کرد دسترسی غیرمجاز داشته باشد
  return <Navigate to={`/access-denied`} />
}
