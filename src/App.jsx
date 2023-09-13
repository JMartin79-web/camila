import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/admin/DashboardEn'
import DashboardEs from './pages/admin/DashboardES'
import DashboardPort from './pages/admin/DashboardPort'
import AdminLogin from './pages/admin/AdminLogin'
import './styles/globals.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/admin/dashboard-en' element={<Dashboard />} />
      <Route path='/admin/dashboard-es' element={<DashboardEs />} />
      <Route path='/admin/dashboard-port' element={<DashboardPort />} />
    </Routes>
  )
}

export default App
