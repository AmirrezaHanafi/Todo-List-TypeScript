import type { List } from '../Types/list.ts'

export type User = {
  id: number
  name: string
  email: string
  password: string
  role: string
  section: string
  avatarUrl: string | null
  listTodo: List
}

const randomTasks = (): List => ({
  todo: ['مطالعه فصل جدید تایپ‌اسکریپت', 'طراحی کامپوننت جدید', 'مرور کدهای قبلی پروژه', 'نوشتن لیست کارهای روز', 'یادگیری کتابخانه جدید']
    .slice(0, Math.floor(Math.random() * 3) + 2)
    .map(t => ({ id: crypto.randomUUID(), title: t })),

  doing: ['پیاده‌سازی Drag & Drop', 'تمرین Zustand', 'تست عملکرد UI', 'نوشتن تست یونیت']
    .slice(0, Math.floor(Math.random() * 2) + 1)
    .map(t => ({ id: crypto.randomUUID(), title: t })),

  done: ['راه‌اندازی پروژه', 'نصب Tailwind', 'بهینه‌سازی استایل', 'رفع باگ‌های جزئی', 'مرتب‌سازی ساختار پوشه‌ها']
    .slice(0, Math.floor(Math.random() * 3) + 1)
    .map(t => ({ id: crypto.randomUUID(), title: t }))
})

export const rolesBySection: Record<string, string[]> = {
  FrontEnd: ['توسعه‌دهنده فرانت‌اند', 'طراح رابط کاربری', 'مهندس UI', 'مسئول فرانت‌'],
  BackEnd: ['توسعه‌دهنده بک‌اند', 'مهندس Node.js', 'مدیر پایگاه داده', 'برنامه‌نویس سرور'],
  NetworkSecurity: ['کارشناس امنیت', 'ادمین شبکه', 'تحلیل‌گر آسیب‌پذیری', 'ناظر امنیت'],
  DataAnalysis: ['تحلیل‌گر داده', 'متخصص PowerBI', 'مدل‌ساز داده', 'کارشناس آمار'],
  HumanResources: ['کارشناس منابع انسانی', 'مدیر تیم', 'پشتیبان کارکنان', 'مدیر آموزش'],
  Design: ['طراح UI/UX', 'گرافیست ارشد', 'طراح تجربه کاربر', 'انیماتور']
}

const namesFirst = [
  'امیر',
  'سجاد',
  'شایان',
  'مریم',
  'نیلوفر',
  'مهسا',
  'پارسا',
  'زهرا',
  'میلاد',
  'ریحانه',
  'حسین',
  'الهام',
  'یاسین',
  'حمید',
  'کیان',
  'مبینا',
  'آراد',
  'سپهر'
]
const namesLast = ['کریمی', 'بهزادی', 'مرادی', 'شریفی', 'یزدانی', 'موسوی', 'اکبری', 'محمدی', 'جعفری', 'فرجی', 'نیکفر', 'قاسمی', 'رحمانی']

export const sections = ['FrontEnd', 'BackEnd', 'NetworkSecurity', 'DataAnalysis', 'HumanResources', 'Design']

const generateUser = (id: number, section: string): User => {
  const f = namesFirst[Math.floor(Math.random() * namesFirst.length)]
  const l = namesLast[Math.floor(Math.random() * namesLast.length)]
  const roleList = rolesBySection[section]
  const role = roleList[Math.floor(Math.random() * roleList.length)]

  return {
    id,
    name: `${f} ${l}`,
    email: `${f.toLowerCase()}${id}@gmail.com`,
    password: `${f}@${id}#${Math.floor(Math.random() * 900 + 100)}`,
    avatarUrl: null,
    section,
    role,
    listTodo: randomTasks()
  }
}

let currentId = 5
const UsersData: User[] = [
  {
    id: 1,
    name: 'امیررضا حنفی',
    email: 'amirreza168@gmail.com',
    password: 'Amir@1234',
    avatarUrl: null,
    section: 'FrontEnd',
    role: 'مسئول فرانت اند',
    listTodo: randomTasks()
  },
  {
    id: 2,
    name: 'سهیل مجبوریان',
    email: 'soheil@gmail.com',
    password: 'soheil#2024',
    avatarUrl: null,
    role: 'لیدر شبکه',
    section: 'NetworkSecurity',
    listTodo: randomTasks()
  },
  {
    id: 3,
    name: 'افروز بهروزنیک',
    email: 'afrooz@gmail.com',
    password: 'Afrooz*778',
    avatarUrl: null,
    section: 'NetworkSecurity',
    role: 'مسئول امنیت',
    listTodo: randomTasks()
  },
  {
    id: 4,
    name: 'شایان علمی',
    email: 'shayan@mail.com',
    password: 'shayan@999',
    avatarUrl: null,
    section: 'FrontEnd',
    role: 'مسئول فرانت اند',
    listTodo: randomTasks()
  }
]
for (const section of sections) {
  const numberOfPeople = section === 'FrontEnd' || section === 'BackEnd' ? 10 : section === 'NetworkSecurity' || section === 'DataAnalysis' ? 8 : 7

  for (let i = 0; i < numberOfPeople; i++) {
    UsersData.push(generateUser(currentId++, section))
  }
}

export default UsersData
