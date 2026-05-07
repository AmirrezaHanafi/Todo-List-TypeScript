import { Routes, Route } from 'react-router-dom'
import RootLayout from './layout/RootLayout.tsx'
import RootBoard from './features/RootBoard/components/RootBoard.tsx'
import PersonBoard from './features/PersonBoard/PersonBoard.tsx'
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<RootBoard />} />
          <Route path="/board/:id" element={<PersonBoard />} />

          <Route />
        </Route>
      </Routes>
    </>
  )
}
