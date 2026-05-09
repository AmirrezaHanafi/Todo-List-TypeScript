import { sections } from '../../../Data/users-data.ts'
import SectionCart from '../../GroupBoard/SectionCart.tsx'

export default function RootBoard() {
  return (
    <div className=" border-2 border-border min-h-100 bg-line mx-6 rounded-lg p-6 space-y-4 ">
      <h1 className="font-MorabbaBold text-3xl"> کدوم بخش بریم؟</h1>
      <div className="flex flex-wrap space-x-2  mt-15 ">
        {sections.map((section, index) => (
          <SectionCart key={index} section={section} />
        ))}
      </div>
    </div>
  )
}
99
