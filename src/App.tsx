import { Routes, Route, Link } from 'react-router-dom'
import RootLayout from './layout/RootLayout.tsx'
import RootBoard from './components/RootBoard.tsx'
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<RootBoard />} />
          <Route path="" element={<PersonBoard />} />

          <Route />
        </Route>
      </Routes>
    </>
  )
}
