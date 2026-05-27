import { useState } from 'react'
import LoginPage from './features/login/LoginPage.tsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import PersonsBoard from './features/PersonBoard/PersonsBoard.tsx'
import GroupBoard from './features/GroupBoard/GroupBoard.tsx'
import NotFound from './features/404/NotFound.tsx'
import RootBoard from './features/RootBoard/components/RootBoard.tsx'
import RootLayout from './layout/RootLayout.tsx'
import ProtectedRoute from './features/protect/ProtectedRoute.tsx'
import usersData from './Data/users-data.ts'
import AccessDenied from './components/AccessDenied.tsx'

export interface AuthType {
  id: number
  role: string
  isAuthenticated?: boolean
}

export default function App() {
  const [auth] = useState<AuthType>(() => JSON.parse(localStorage.getItem('auth') || '{}'))

  if (!auth.isAuthenticated) return <LoginPage />

  if (auth.role !== 'Admin') {
    const user = usersData.find(u => u.id === auth.id)
    if (user && window.location.pathname === '/') {
      return <Navigate to={`/${user.section}/${user.id}`} replace />
    }
  }

  return (
    <Routes>
      <Route element={<RootLayout />}>
        {auth.role === 'Admin' && <Route index element={<RootBoard />} />}

        <Route
          path="/:section/:id"
          element={
            <ProtectedRoute>
              <PersonsBoard />
            </ProtectedRoute>
          }
        />

        <Route path="/:section" element={auth.role === 'Admin' ? <GroupBoard /> : <Navigate to="/404" />} />

        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
