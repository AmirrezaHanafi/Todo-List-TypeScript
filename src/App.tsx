import { Routes, Route } from 'react-router-dom'
import RootLayout from './layout/RootLayout.tsx'
import RootBoard from './features/RootBoard/components/RootBoard.tsx'
import PersonsBoard from './features/PersonBoard/PersonsBoard.tsx'
import GroupBoard from './features/GroupBoard/GroupBoard.tsx'
import NotFound from './features/404/NotFound.tsx'
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<RootBoard />} />
          <Route path="/:section" element={<GroupBoard />} />
          <Route path="/:section/:id" element={<PersonsBoard />} />

          <Route />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
