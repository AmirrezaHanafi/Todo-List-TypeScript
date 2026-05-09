# 📝 React Todo App

یک اپلیکیشن مدیریت وظایف (To-Do List) مدرن با React، TypeScript و Zustand

## ✨ ویژگی‌ها

- ✅ افزودن، ویرایش و حذف وظایف
- 🔄 انتقال وظایف بین سه حالت: Todo، Doing، Done
- 📱 رابط کاربری ریسپانسیو با Tailwind CSS
- 🎯 مدیریت state با Zustand
- ✔️ اعتبارسنجی فرم با Zod و React Hook Form
- 🎨 Modal های native برای افزودن وظایف
- ⌨️ پشتیبانی از کلیدهای میانبر (Enter برای ذخیره، Escape برای لغو)
- 💾 ذخیره‌سازی خودکار در localStorage

- در حال توسعه :
  *افزودن و حذف کردن کارکنان هر بخش
   
## 🚀 نصب و راه‌اندازی

### پیش‌نیازها

- Node.js (نسخه 16 یا بالاتر)
- npm، pnpm یا yarn

### مراحل نصب

1. کلون کردن پروژه:
```bash
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app

2. نصب وابستگی‌ها:
bash
npm install
# یا
pnpm install
# یا
yarn install

3. اجرای پروژه:
bash
npm run dev
# یا
pnpm dev
# یا
yarn dev

4. باز کردن در مرورگر:

http://localhost:5173

## 🛠️ تکنولوژی‌های استفاده شده

- **React 18** - کتابخانه UI
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Zustand** - State Management
- **Zod** - Schema Validation
- **React Hook Form** - Form Management
- **Tailwind CSS** - Styling
- **React Router** - Routing

#

## 🎯 نحوه استفاده

### افزودن وظیفه جدید
1. روی دکمه "افزودن وظیفه" کلیک کنید
2. عنوان وظیفه را وارد کنید (حداقل 1 و حداکثر 100 کاراکتر)
3. Enter بزنید یا روی "ذخیره" کلیک کنید

### ویرایش وظیفه
1. روی آیکون ویرایش (✏️) کلیک کنید
2. متن جدید را وارد کنید
3. Enter بزنید یا خارج از input کلیک کنید

### انتقال وظیفه
- از **Todo** به **Doing**: روی آیکون انتقال کلیک کنید
- از **Doing** به **Done**: روی آیکون انتقال کلیک کنید

### حذف وظیفه
روی آیکون حذف (🗑️) کلیک کنید

## 🔧 تنظیمات

### Zustand Store

Store شامل متدهای زیر است:

- `addItem(userId, listType, title)` - افزودن وظیفه جدید
- `updateItem(userId, listType, itemId, newTitle)` - ویرایش وظیفه
- `deleteItem(userId, listType, itemId)` - حذف وظیفه
- `transferItem(userId, currentListType, overListType, itemId)` - انتقال وظیفه

### Validation Schema

typescript
const taskSchema = z.object({
  title: z
.string()
.min(1, 'عنوان نمی‌تواند خالی باشد')
.max(100, 'عنوان نمی‌تواند بیشتر از 100 کاراکتر باشد')
})

## 🤝 مشارکت

برای مشارکت در این پروژه:

1. Fork کنید
2. یک branch جدید بسازید (`git checkout -b feature/amazing-feature`)
3. تغییرات خود را commit کنید (`git commit -m 'Add some amazing feature'`)
4. به branch خود push کنید (`git push origin feature/amazing-feature`)
5. یک Pull Request باز کنید





- [React](https://reactjs.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Zod](https://github.com/colinhacks/zod)
- [Tailwind CSS](https://tailwindcss.com/)
