import { Link } from 'react-router-dom'
import AvatarIcon from '../../components/icons/AvatarIcon.tsx'
import type { User } from '../../Data/users-data.ts'

type CartProps = {
  user: User
  section?: string | undefined
}

export default function PersonCart({ user, section }: CartProps) {
  const total = user.listTodo.todo.length + user.listTodo.doing.length + user.listTodo.done.length
  const doingOrDone = user.listTodo.doing.length + user.listTodo.done.length
  const progressPercent = Math.round((user.listTodo.done.length / total) * 100)
  return (
    <Link to={`/board/${section}/${user.id}`}>
      <div className="p-4 group shadow-dark  min-h-30 min-w-80  hover:bg-hover-item flex flex-col justify-between  transition-colors duration-300 bg-card text-text-primary  rounded-md">
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-2 ">
            <span className="font-DanaDemiBold text-xl">{user.name} </span>
          </div>
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt="person-avatar" />
          ) : (
            <span>
              <AvatarIcon className={'size-8'} />
            </span>
          )}
        </div>

        <span className="text-text-secondary font-Dana text-xs">({user.role})</span>
        <div className="mt-3 mb-1">
          <span className="text-sm block ">کل تسک ها: {total}</span>
          <span className="text-sm block ">تسک های انجام شده / درحال انجام: {doingOrDone}</span>
        </div>
        <div className="">
          <span className="text-sm ">میزان پیشروی:</span>
          <div className="w-full h-2 bg-white/40 rounded-full overflow-hidden mt-1">
            <div className="h-full bg-primary-hover transition-all duration-300" style={{ width: `${progressPercent}%` }} />
          </div>
          <span className="text-sm block mt-2">{progressPercent}%</span>
        </div>

        <span className="text-blue-600 text-center text-lg duration-300 group-hover:text-blue-400 transition-colors mt-5"> مشاهده</span>
      </div>
    </Link>
  )
}
