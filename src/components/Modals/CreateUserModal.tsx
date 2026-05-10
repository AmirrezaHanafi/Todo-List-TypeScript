import XIcon from '../icons/XIcon.tsx'
import type { RefObject } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useParams } from 'react-router-dom'
import { useUserStore } from '../../stores/user-store.ts'
import type { List } from '../../Types/list.ts'
import { rolesBySection } from '../../Data/users-data.ts'

const userSchema = z.object({
  firstName: z.string().min(3, 'اسم را کامل وارد کنید.').max(50, 'بیشتر 50 کاراکتر مجاز نیست.'),
  lastName: z.string().min(3, 'اسم را کامل وارد کنید.').max(50, 'بیشتر 50 کاراکتر مجاز نیست.'),
  email: z.email('ایمیل معتبر وارد کنید.'),
  password: z.string().min(8, 'رمز عبور حداقل ۸ کاراکتر باشد.'),
  role: z.string().min(5).max(40)
})

type UserFormData = z.infer<typeof userSchema>

type CreateUserModalProps = {
  ref: RefObject<HTMLDialogElement | null>
}

export default function CreateUserModal({ ref }: CreateUserModalProps) {
  const { section } = useParams()
  const addUser = useUserStore(state => state.addUser)
  const userData = useUserStore(state => state.userData)

  // ✅ hooks must be inside the component
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema)
  })

  const emptyList: List = {
    todo: [],
    doing: [],
    done: []
  }

  const handleCloseByBackDrop = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    e.stopPropagation()
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const closeModal = () => {
    ref.current?.close()
    reset()
  }

  // ✅ correct type, actual values passed to addUser
  const onSubmit = (data: UserFormData) => {
    addUser({
      id: userData.length + 1,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
      role: data.role,
      section: section ?? '',
      avatarUrl: null,
      listTodo: emptyList
    })
    closeModal()
  }

  // ✅ get roles for the current section, fallback to empty array
  const currentRoles = section ? (rolesBySection[section] ?? []) : []

  return (
    <dialog
      onMouseDown={handleCloseByBackDrop}
      ref={ref}
      className="w-full m-auto max-w-md rounded-2xl bg-zinc-900 p-6 text-text-primary shadow-xl backdrop:bg-black/60"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-DanaDemiBold">ساخت یوزر جدید</h2>
        <button
          onClick={closeModal}
          className="cursor-pointer p-1 hover:bg-white/10 transition-colors rounded-full text-sm text-zinc-400 hover:text-text-primary"
        >
          <XIcon className="size-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div>
            <input
              {...register('firstName')}
              type="text"
              placeholder="نام"
              className={`w-full font-Dana rounded-lg border ${errors.firstName ? 'border-action-delete' : 'border-border'} bg-hover-item px-3 py-2 outline-none`}
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>}
          </div>

          <div>
            <input
              {...register('lastName')}
              type="text"
              placeholder="نام خانوادگی"
              className={`w-full font-Dana rounded-lg border ${errors.lastName ? 'border-action-delete' : 'border-border'} bg-hover-item px-3 py-2 outline-none`}
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>}
          </div>

          <div>
            <input
              {...register('email')}
              type="email"
              placeholder="ایمیل"
              className={`w-full font-Dana rounded-lg border ${errors.email ? 'border-action-delete' : 'border-border'} bg-hover-item px-3 py-2 outline-none`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <input
              {...register('password')}
              type="password"
              placeholder="رمز عبور"
              className={`w-full font-Dana rounded-lg border ${errors.password ? 'border-action-delete' : 'border-border'} bg-hover-item px-3 py-2 outline-none`}
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <div>
            <select
              {...register('role')}
              className={`w-full font-Dana rounded-lg border ${errors.role ? 'border-action-delete' : 'border-border'} bg-hover-item px-3 py-2 outline-none`}
            >
              <option value="">انتخاب نقش</option>
              {/* ✅ valid JSX map over current section's roles */}
              {currentRoles.map(role => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>}
          </div>
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
