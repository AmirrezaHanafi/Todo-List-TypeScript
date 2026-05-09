import type { RefObject } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import XIcon from '../icons/XIcon.tsx'
import { useUserStore } from '../../stores/user-store.ts'
import { useParams } from 'react-router-dom'

const taskSchema = z.object({
  title: z.string().min(3, 'عنوان تسک الزامی است').max(100, 'عنوان نباید بیشتر از ۱۰۰ کاراکتر باشد')
})

type TaskFormData = z.infer<typeof taskSchema>

type CreateModalProps = {
  ref: RefObject<HTMLDialogElement | null>
}

export default function CreateModal({ ref }: CreateModalProps) {
  const { id } = useParams()
  const finalId = +id!
  const addItem = useUserStore(state => state.addItem)
  const closeModal = () => {
    ref.current?.close()
    reset()
  }
  const handleCloseByBackDrop = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    e.stopPropagation()
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema)
  })

  const onSubmit = (data: TaskFormData) => {
    addItem(finalId, data.title)
    closeModal()
  }

  return (
    <dialog
      onMouseDown={handleCloseByBackDrop}
      ref={ref}
      className="w-full m-auto max-w-md rounded-2xl bg-zinc-900 p-6 text-text-primary shadow-xl backdrop:bg-black/60"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-DanaDemiBold">ساخت تسک جدید</h2>
        <button
          onClick={closeModal}
          className="cursor-pointer p-1 hover:bg-white/10 transition-colors rounded-full text-sm text-zinc-400 hover:text-text-primary"
        >
          <XIcon className="size-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register('title')}
            type="text"
            placeholder="عنوان تسک..."
            className={`w-full font-Dana rounded-lg border ${errors.title ? 'border-action-delete' : 'border-border'} bg-hover-item px-3 py-2 outline-none`}
          />
          {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>}
        </div>

        <div className="mt-4 flex font-DanaMedium justify-end gap-2">
          <button type="button" onClick={closeModal} className="cursor-pointer transition-colors hover:bg-zinc-600 rounded-lg bg-zinc-700 px-4 py-2">
            انصراف
          </button>
          <button type="submit" className="rounded-lg cursor-pointer transition-colors hover:bg-blue-500 bg-blue-600 px-4 py-2 text-text-primary">
            ذخیره
          </button>
        </div>
      </form>
    </dialog>
  )
}
