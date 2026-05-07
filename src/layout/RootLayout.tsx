import Header from '../components/Header.tsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.tsx'
export default function RootLayout() {
  return (
    <div className="min-h-screen relative  min-w-screen overflow-x-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
