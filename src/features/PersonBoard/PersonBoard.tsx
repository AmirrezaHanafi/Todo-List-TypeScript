import { useParams } from 'react-router-dom'
import UsersData from '../../Data/users-data.ts'

export default function PersonBoard() {
  const { id } = useParams()

  const user = UsersData.find(u => u.id === Number(id))

  if (!user) return <div>کاربر پیدا نشد</div>

  return (
    <div>
      <h1>برد شخصی {user.name}</h1>

      <h2>تسک‌ها</h2>
      <ul>
        {user.listTodo.todo.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  )
}
