import PencilIcon from '../../components/icons/PencilIcon.tsx'
import TickIcon from '../../components/icons/TickIcon.tsx'
import DeleteIcon from '../../components/icons/DeleteIcon.tsx'
import { useUserStore } from '../../stores/user-store.ts'
import { useParams } from 'react-router-dom'
import type { List } from '../../Types/list.ts'

type ItemCartProps = {
  list: string
  listType: keyof List
  listId: string
}

export default function ItemCart({ list, listType, listId }: ItemCartProps) {
  const removeItem = useUserStore(state => state.removeItem)
  const { id } = useParams()
  const userId = +id!

  return (
    <li className={'bg-line px-4 py-4 rounded-md flex items-center justify-between'}>
      <span>{list}</span>
      <div className="gap-x-2 ">
        <button className="p-2 bg-transparent hover:bg-action-edit transition-colors rounded-md cursor-pointer">
          <PencilIcon className="  size-4  text-white" />
        </button>
        <button className="p-2 bg-transparent hover:bg-primary transition-colors rounded-md cursor-pointer">
          <TickIcon className="  size-4  text-white" />
        </button>
        <button
          onClick={() => removeItem(userId, listType, listId)}
          className="p-2 bg-transparent hover:bg-action-delete transition-colors rounded-md cursor-pointer"
        >
          <DeleteIcon className="  size-4  text-white" />
        </button>
      </div>
    </li>
  )
}
