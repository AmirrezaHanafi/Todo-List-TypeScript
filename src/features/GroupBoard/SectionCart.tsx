import { Link } from 'react-router-dom'

type SectionCartProps = {
  section: string
}

export default function SectionCart({ section }: SectionCartProps) {
  return (
    <Link
      to={`/board/${section}`}
      className="flex-1 transition-all  hover:scale-105 duration-300 group px-4  py-4  min-h-50 flex flex-col justify-center items-center  text-center  backdrop-blur-sm border-white/30 bg-card rounded-md"
    >
      <span className="font-InterBold inline-block text-xl  ">{section}</span>
    </Link>
  )
}
