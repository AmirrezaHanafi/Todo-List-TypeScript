import UsersData from '../../../Data/users-data.ts'
import Cart from './Cart.tsx'

export default function RootBoard() {
  return (
    <div className=" flex items-center justify-between  mx-auto px-10 mt-20">
      <div className="min-h-100 bg-line rounded-lg  py-6 px-3">
        <h2 className="font-DanaDemiBold text-2xl"> کارت های شخصی</h2>
        <div className="grid grid-cols-2 gap-4 mt-3">
          {UsersData.map(user => (
            <Cart name={user.name} id={user.id} />
          ))}
        </div>
      </div>
      <span className="bg-border w-px h-100"></span>
      <div className=" min-h-100 bg-line rounded-lg  py-6 px-3 ">
        <h2 className="font-DanaDemiBold text-2xl"> کارت های گروهی</h2>{' '}
      </div>

      {/*<h1>لیست بردهای کاربران</h1>*/}
    </div>
  )
}
