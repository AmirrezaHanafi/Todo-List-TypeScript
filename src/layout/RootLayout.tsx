import Header from '../components/Header.tsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.tsx'
export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col  overflow-x-hidden">
      <Header />

      <main className="mt-20 flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
