import { useUserStore } from '../../../stores/user-store.ts'
import { sections } from '../../../Data/users-data.ts'
import SectionCart from '../../GroupBoard/SectionCart.tsx'

export default function RootBoard() {
  const UsersData = useUserStore(state => state.userData)
  const usersOfFrontEnd = UsersData.filter(user => user.section === 'FrontEnd')
  const usersOfBackEnd = UsersData.filter(user => user.section === 'BackEnd')
  const usersOfNetworkSecurity = UsersData.filter(user => user.section === 'NetworkSecurity')
  const usersOfDataAnalysis = UsersData.filter(user => user.section === 'DataAnalysis')
  const usersOfHumanResources = UsersData.filter(user => user.section === 'HumanResources')
  const usersOfDesign = UsersData.filter(user => user.section === 'Design')
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
