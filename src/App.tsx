import { Routes, Route, useParams, Navigate } from 'react-router-dom'
import RootLayout from './layout/RootLayout.tsx'
import RootBoard from './features/RootBoard/components/RootBoard.tsx'
import PersonsBoard from './features/PersonBoard/PersonsBoard.tsx'
import GroupBoard from './features/GroupBoard/GroupBoard.tsx'
import NotFound from './features/404/NotFound.tsx'

const validSections = ['FrontEnd', 'BackEnd', 'NetworkSecurity', 'DataAnalysis', 'HumanResources', 'Design']

function GroupBoardWrapper() {
  const { section } = useParams()
  return validSections.includes(section!) ? <GroupBoard /> : <Navigate to="/404" />
}

function PersonsBoardWrapper() {
  const { section } = useParams()
  return validSections.includes(section!) ? <PersonsBoard /> : <Navigate to="/404" />
}

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<RootBoard />} />
        <Route path="/:section" element={<GroupBoardWrapper />} />
        <Route path="/:section/:id" element={<PersonsBoardWrapper />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
