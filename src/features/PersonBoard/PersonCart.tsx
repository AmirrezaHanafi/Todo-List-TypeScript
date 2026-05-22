import { Link } from 'react-router-dom'
import AvatarIcon from '../../components/icons/AvatarIcon.tsx'
import type { User } from '../../Data/users-data.ts'
import DeleteIcon from '../../components/icons/DeleteIcon.tsx'
import { useUserStore } from '../../stores/user-store.ts'

type CartProps = {
  user: User
  section?: string | undefined
}

export default function PersonCart({ user, section }: CartProps) {
  const total = user.listTodo.todo.length + user.listTodo.doing.length + user.listTodo.done.length
  const doingOrDone = user.listTodo.doing.length + user.listTodo.done.length
  const progressPercent = Math.round((user.listTodo.done.length / total) * 100)

  const removeUser = useUserStore(state => state.removeUser)

  return (
    <Link to={`/${section}/${user.id}`}>
      <div className="p-4 group shadow-dark  min-h-30 min-w-60  hover:bg-hover-item flex flex-col justify-between  transition-colors duration-300 bg-card text-text-primary  rounded-md">
        <div className="flex gap-x-1 items-center justify-between ">
          <div className="flex items-center space-x-4  ">
            <span className="font-DanaDemiBold text-xl inline-block">{user.name} </span>
            <button
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                removeUser(user.id)
              }}
              className="text-text-secondary/50 p-2 transition-colors hover:bg-action-delete hover:text-white rounded-full cursor-pointer "
            >
              <DeleteIcon className="size-5" />
            </button>
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
