import Clock from './Clock.tsx'

export default function Header() {
  return (
    <div className="w-9/10 pt-5 font-MorabbaBold text-center mx-auto text-4xl p-2 relative">
      <h1>ثانیه هات تعیین کننده آینده تو هستن.</h1>
      <div className="absolute size-5 text-base text-gray-700 left-0 top-0 " dir={'ltr'}>
        <Clock />
      </div>
    </div>
  )
}
