import { Link } from 'react-router-dom'

type CartProps = {
  id: number
  name: string
}

export default function Cart({ id, name }: CartProps) {
  return (
    <Link key={id} to={`/board/${id}`}>
      <div className="p-4 min-h-30 group hover:bg-text-muted justify-between transition-colors duration-300 flex flex-col items-center bg-card text-text-primary  rounded-md">
        <span>{name}</span>
        <span className="text-blue-600 duration-300 group-hover:text-blue-400 transition-colors mt-5">
          {' '}
          مشاهده
        </span>
      </div>
    </Link>
  )
}
