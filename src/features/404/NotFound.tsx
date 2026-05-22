import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="font-InterBold text-4xl text-center gap-y-7   flex items-center flex-col justify-center  mx-30 p-4   mt-60">
      <span className="inline-block">404 Not found</span>
      <Link className="py-2 px-4 font-DanaMedium text-lg  transition-all bg-white/10 rounded-lg hover:bg-white/20 " to={'/'}>
        برگشت به صفحه اصلی
      </Link>
    </div>
  )
}
