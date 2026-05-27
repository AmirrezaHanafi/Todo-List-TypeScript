import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useEffect } from 'react'
import { useAuthService } from '../../auth/chech-auth.ts'

const loginSchema = z.object({
  email: z.email('ایمیل معتبر نیست این چه طرز ایمیل وارد کردنه!'),
  password: z.string().min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
})

type LoginFormInputs = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [loginError, setLoginError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema)
  })

  const { login } = useAuthService()

  // مدیریت ناپدید شدن Toast بعد از 4 ثانیه
  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => {
        setLoginError('')
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [loginError])

  const onSubmit = (data: LoginFormInputs) => {
    const success = login(data)

    if (success) {
      console.log('ورود موفقیت‌آمیز!')
      window.location.reload()
    } else {
      setLoginError('ایمیل یا رمز عبور اشتباه است !')
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-card min-w-75 max-w-150 w-1/4 rounded-lg p-4">
          <h1 className="text-center font-DanaDemiBold text-2xl">خوش آمدید</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-3 flex flex-col gap-y-3" dir="ltr">
            <label htmlFor="email-input">
              <span className="text-red-500">*</span>ایمیل
            </label>
            <div className={`bg-white/20 rounded-lg p-2 ${errors.email ? 'border border-red-500' : ''}`}>
              <input {...register('email')} id="email-input" placeholder="example@gmail.com" className="w-full bg-transparent outline-none" />
            </div>
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

            <label>
              <span className="text-red-500">*</span>رمز عبور
            </label>
            <div className={`bg-white/20 rounded-lg p-2 ${errors.password ? 'border border-red-500' : ''}`}>
              <input {...register('password')} placeholder="********" type="password" className="w-full bg-transparent outline-none" />
            </div>
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

            <button type="submit" className="bg-blue-500 text-white p-2 cursor-pointer transition-all hover:bg-blue-600 rounded-lg mt-2">
              ورود
            </button>
          </form>
        </div>
      </div>

      <div
        id="toast"
        className={`fixed top-10 right-10 transition-all duration-500 ease-in-out transform 
          ${
            loginError ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
          } bg-rose-600 text-white p-4 rounded-md shadow-lg z-50`}
      >
        {loginError}
      </div>
      <div
        id="guide-line"
        className={`fixed top-10 left-10 transition-all duration-500 ease-in-out transform 
          bg-card text-white p-4 rounded-md shadow-lg z-50`}
      >
        <div className="flex flex-col justify-center items-center gap-y-3">
          <span className="font-DanaMedium  text-center text-2xl w-full">راهنمایی</span>
          <div className="text-sm">
            <div className="mb-3">
              <span className="text-sm"> برای دستیابی به رول ادمین</span>
              <div dir="ltr">
                <span className="block">Email: amirreza@gmail.com</span>
                <span className="block">Password :123456789</span>
              </div>
            </div>
            <div>
              <span> برای دستیابی به رول یوزر</span>
              <div dir="ltr">
                <span className="block">shayan@mail.com</span>
                <span className="block">Password :shayan@999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
