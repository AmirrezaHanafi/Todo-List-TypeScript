import { Link } from 'react-router-dom'
import AvatarIcon from '../../components/icons/AvatarIcon.tsx'

type CartProps = {
  id: number
  name: string
  avatarUrl: string | null
  role: string
}

export default function Cart({ id, name, avatarUrl, role }: CartProps) {
  return (
    <div>
      <div className="p-4 min-h-30  hover:bg-text-muted flex flex-col justify-between  transition-colors duration-300 bg-card text-text-primary  rounded-md">
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-2 ">
            <span className="font-DanaDemiBold text-lg">{name} </span>
            <span className="text-text-secondary text-xs">({role})</span>
          </div>
          {avatarUrl ? (
            <img src={avatarUrl} alt="person-avatar" />
          ) : (
            <span>
              <AvatarIcon className={'size-8'} />
            </span>
          )}
        </div>
        <Link
          to={`/board/${id}`}
          className="text-blue-600 duration-300 group-hover:text-blue-400 transition-colors mt-5"
        >
          {' '}
          مشاهده
        </Link>
      </div>
    </div>
  )
}
