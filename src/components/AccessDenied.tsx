import { Link } from 'react-router-dom'
import type { AuthType } from '../App.tsx'
import usersData from '../Data/users-data.ts'

export default function AccessDenied() {
  const { id }: AuthType = JSON.parse(localStorage.getItem('auth') || '{}')
  const user = usersData.find(user => user.id === id)
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" flex-col items-center justify-center flex">
        <span className="text-center font-DanaDemiBold text-3xl block mb-5">شما به اینجا دسترسی نداری!</span>
        <Link className="px-3 py-2 bg-gray-800 rounded-lg transition-all hover:bg-gray-700 cursor-pointer" to={`/${user?.section}/${user?.id}`}>
          بریم به بخش خودم
        </Link>
      </div>
    </div>
  )
}
