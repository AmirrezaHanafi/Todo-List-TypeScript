import { useParams } from 'react-router-dom'
import Cart from './Cart.tsx'
import { useUserStore } from '../../stores/user-store.ts'

export default function PersonsBoard() {
  const UsersData = useUserStore(state => state.userData)
  const { id } = useParams()

  const user = UsersData.find(u => u.id === Number(id))

  if (!user) return <div>کاربر پیدا نشد</div>

  return (
    <div className="grid grid-cols-2 gap-4 mt-3">
      {UsersData.map(user => (
        <Cart
          key={user.id}
          name={user.name}
          id={user.id}
          avatarUrl={user.avatarUrl}
          role={user.role}
        />
      ))}
    </div>
  )
}
