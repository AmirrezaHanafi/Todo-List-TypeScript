import type { List } from '../Types/list.ts'

export type User = {
  id: number
  name: string
  email: string
  password: string
  listTodo: List
}

const UsersData: User[] = [
  {
    id: 1,
    name: 'امیررضا حنفی',
    email: 'amirreza168@gmail.com',
    password: 'Amir@1234',
    listTodo: {
      todo: ['مطالعه فصل جدید تايب‌اسکریپت', 'طراحی کامپوننت کارت تسک', 'چک کردن لیست خرید'],
      doing: ['پیاده‌سازی Drag & Drop'],
      done: ['نصب TailwindCSS', 'راه‌اندازی پروژه با Vite']
    }
  },

  {
    id: 2,
    name: 'سهیل مجبوریان',
    email: 'soheil@gmail.com',
    password: 'soheil#2024',
    listTodo: {
      todo: ['نوشتن محتوای بلاگ جدید', 'ویرایش عکس‌ها برای اینستاگرام', 'برنامه‌ریزی هفتگی'],
      doing: ['آماده‌سازی ارائه دانشگاه'],
      done: ['پاسخ به ایمیل‌های مشتری‌ها', 'آپلود مقاله جدید در سایت']
    }
  },

  {
    id: 3,
    name: 'افروز بهروزنیک',
    email: 'afrooz@gmail.com',
    password: 'Afrooz*778',
    listTodo: {
      todo: ['تمرین ریکت', 'ساخت یک پروژه کوچک Todo', 'مطالعه Next.js'],
      doing: ['یادگیری Zustand'],
      done: ['مرور جاوااسکریپت', 'دیدن ویدیو دوره UI/UX']
    }
  },

  {
    id: 4,
    name: 'شایان علمی',
    email: 'shayan@mail.com',
    password: 'shayan@999',
    listTodo: {
      todo: ['خرید وسایل خانه', 'نوشتن لیست کارهای فردا', 'مرتب‌سازی پوشه‌های لپ‌تاپ'],
      doing: ['خواندن کتاب روانشناسی'],
      done: ['ورزش صبحگاهی', 'مرتب کردن اتاق', 'آپدیت اپلیکیشن‌ها']
    }
  }
]

export default UsersData
