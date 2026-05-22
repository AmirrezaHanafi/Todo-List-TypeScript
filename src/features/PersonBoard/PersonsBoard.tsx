import { Link, useParams } from 'react-router-dom'
import { useUserStore } from '../../stores/user-store.ts'
import ArrowLeft from '../../components/icons/ArrowLeft.tsx'
import ItemCart from './ItemCart.tsx'
import PlusIcon from '../../components/icons/PlusIcon.tsx'
import { useRef } from 'react'
import CreateItemModal from '../../components/Modals/CreateItemModal.tsx'

export default function PersonsBoard() {
  const UsersData = useUserStore(state => state.userData)
  const { id, section } = useParams()
  const modalRef = useRef<HTMLDialogElement | null>(null)
  const user = UsersData.find(u => u.id === Number(id))

  if (!user) return <div>کاربر پیدا نشد</div>

  return (
    <div className="  border-2 border-border  bg-line mx-6 rounded-lg p-6   ">
      <div className=" flex items-center justify-between mb-5 gap-x-1 ">
        <span className="font-DanaDemiBold text-lg md:text-3xl">صفحه برنامه ریزی {user.name}</span>
        <Link to={`/${section}`} className="flex text-sm items-center gap-x-2 px-2 md:px-4 py-2 bg-card/50 rounded-md transition-all hover:bg-card/90 ">
          بازگشت به بخش <ArrowLeft className="size-5 md:size-6" />
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-2 ">
        <div className="bg-card rounded-xl p-4 min-h-100">
          <div className=" flex items-center justify-between gap-x-3">
            <button
              onClick={() => {
                modalRef.current?.showModal()
              }}
              className="p-2 cursor-pointer rounded-full hover:bg-hover-item transition-colors "
            >
              {' '}
              <PlusIcon className="size-6" />
            </button>
            <span className="text-left font-InterExtraBold text-lg md:text-2xl">ToDo</span>
          </div>
          <ul className="mt-3 space-y-2">
            {user.listTodo.todo.map((listItem, index) => (
              <ItemCart key={index} list={listItem.title} itemId={listItem.id} listType={'todo'} />
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-xl p-4 min-h-100">
          <div className="text-left">
            <span className="text-left font-InterExtraBold text-lg md:text-2xl">Doing</span>
          </div>
          <ul className="mt-3 space-y-2">
            {user.listTodo.doing.map((doingItem, index) => (
              <ItemCart key={index} list={doingItem.title} itemId={doingItem.id} listType={'doing'} />
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-xl p-4 min-h-100">
          <div className="text-left">
            <span className="text-left font-InterExtraBold text-lg md:text-2xl">Done</span>
          </div>
          <ul className="mt-3 space-y-2">
            {user.listTodo.done.map((doneItem, index) => (
              <ItemCart key={index} list={doneItem.title} itemId={doneItem.id} listType={'done'} />
            ))}
          </ul>
        </div>
      </div>
      <CreateItemModal ref={modalRef} />
    </div>
  )
}
