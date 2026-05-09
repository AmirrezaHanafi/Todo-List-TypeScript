import PencilIcon from '../../components/icons/PencilIcon.tsx'
import TickIcon from '../../components/icons/TickIcon.tsx'
import DeleteIcon from '../../components/icons/DeleteIcon.tsx'
import { useUserStore } from '../../stores/user-store.ts'
import { useParams } from 'react-router-dom'
import type { List } from '../../Types/list.ts'
import { useState } from 'react'
import type { User } from '../../Data/users-data.ts'

type ItemCartProps = {
  list: string
  listType: keyof List
  itemId: string
}

export default function ItemCart({ list, listType, itemId }: ItemCartProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(list)

  const handleEdit = () => {
    setIsEditing(true)
    setEditValue(list)
  }

  const handleSave = () => {
    if (editValue.trim()) {
      updateItem(userId, listType, itemId, editValue.trim())
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditValue(list)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }
  let targetList: keyof User['listTodo']
  switch (listType) {
    case 'todo':
      targetList = 'doing'
      break
    case 'doing':
      targetList = 'done'
      break
  }

  const removeItem = useUserStore(state => state.removeItem)
  const updateItem = useUserStore(state => state.updateItem)
  const transferItem = useUserStore(state => state.transferItem)
  const { id } = useParams()
  const userId = +id!

  return (
    <li className={'bg-line px-4 py-4 rounded-md flex items-center justify-between'}>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={e => {
            setEditValue(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          autoFocus
          className="flex-1 bg-hover-item border border-border rounded px-2 py-1 outline-none text-text-primary"
        />
      ) : (
        <span className="text-xs md:text-base">{list}</span>
      )}

      <div className="gap-x-2 ">
        <button onClick={handleEdit} className="p-px md:p-2 bg-transparent hover:bg-action-edit transition-colors rounded-md cursor-pointer">
          <PencilIcon className="  size-3 md:size-4  text-white" />
        </button>
        <button
          onClick={() => transferItem(userId, listType, targetList, itemId)}
          className={`${listType === 'done' ? 'hidden' : ''} p-px mx-2 md:p-2 bg-transparent hover:bg-primary transition-colors rounded-md cursor-pointer`}
        >
          <TickIcon className="  size-3 md:size-4  text-white" />
        </button>
        <button
          onClick={() => removeItem(userId, listType, itemId)}
          className="p-px md:p-2 bg-transparent hover:bg-action-delete transition-colors rounded-md cursor-pointer"
        >
          <DeleteIcon className="  size-3 md:size-4  text-white" />
        </button>
      </div>
    </li>
  )
}
