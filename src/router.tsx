import { Routes, Route } from 'react-router-dom'
import { DefaultsLayout } from './layouts/DefaultsLayout'
import { Usuarios } from './pages/Usuarios'
import { Home } from './pages/Home'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultsLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/usuario" element={<Usuarios />} />
      </Route>
    </Routes>
  )
}
