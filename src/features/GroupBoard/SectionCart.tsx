import { Link } from 'react-router-dom'

type SectionCartProps = {
  section: { section: string; description: string }
}

export default function SectionCart({ section }: SectionCartProps) {
  return (
    <Link
      to={`/${section.section}`}
      className="flex-1 transition-all  duration-300 group px-4  py-4  min-h-50 flex flex-col justify-center items-center  text-center  backdrop-blur-sm border-white/30 hover:bg-gray-900 bg-card rounded-md"
    >
      <span className="font-InterBold inline-block text-xl  ">{section.section}</span>
      <span className="text-xs text-text-muted mt-4">{section.description}</span>
    </Link>
  )
}
