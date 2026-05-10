import { Link, useParams } from 'react-router-dom'
import PersonCart from '../PersonBoard/PersonCart.tsx'
import ArrowLeft from '../../components/icons/ArrowLeft.tsx'
import { useUserStore } from '../../stores/user-store.ts'
import PlusIcon from '../../components/icons/PlusIcon.tsx'
import CreateUserModal from '../../components/Modals/CreateUserModal.tsx'
import { useRef } from 'react'

type GroupBoardProps = {}

export default function GroupBoard({}: GroupBoardProps) {
  const { section } = useParams()
  const userModalRef = useRef<HTMLDialogElement | null>(null)
  const UsersData = useUserStore(state => state.userData)
  const usersOfThisSection = UsersData.filter(user => user.section === section)
  return (
    <>
      <div className=" border-2 border-border min-h-100 bg-line mx-6 rounded-lg p-6 space-y-4  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <h1 className="font-MorabbaBold text-3xl">اعضای بخش {section}</h1>
            <button onClick={() => userModalRef.current?.showModal()} className="p-2 transition-colors hover:bg-white/10 cursor-pointer rounded-full ">
              <PlusIcon className="size-6" />
            </button>
          </div>
          {/*<ArrowLeft className="size-6" />*/}
          <Link to={'/'} className="flex items-center gap-x-2 px-4 py-2 bg-card/50 rounded-md transition-all hover:bg-card/90 ">
            بازگشت <ArrowLeft className="size-6" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2 space-y-2  mt-15 ">
          {usersOfThisSection.map(user => (
            <PersonCart key={user.id} user={user} section={section} />
          ))}
        </div>
      </div>
      <CreateUserModal ref={userModalRef} />
    </>
  )
}
