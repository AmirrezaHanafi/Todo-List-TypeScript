import { Link } from 'react-router-dom'

type SectionCartProps = {
  section: string
}

export default function SectionCart({ section }: SectionCartProps) {
  return (
    <Link
      to={`/board/${section}`}
      className="flex-1 transition-all hover:scale-105 duration-300 group px-4 border-4 py-4 pb-6 min-h-40 flex flex-col justify-between items-center  text-center  backdrop-blur-sm border-white/30 bg-white/10 rounded-md"
    >
      <span className="font-InterBold inline-block text-xl  ">{section}</span>
      <span className="inline-block mt-4  text-lg text-blue-600 group-hover:text-blue-400 transition-colors ">
        مشاهده
      </span>
    </Link>
  )
}
