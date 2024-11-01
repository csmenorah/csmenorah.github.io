import AppContent from '../components/AppContent'
import AppSidebar from '../components/AppSidebar'
import AppFooter  from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import { Outlet } from 'react-router-dom'
import '../scss/adminconsole-style.scss'

const AdminDashboard = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper-admin d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body-admin flex-grow-1">
          <Outlet />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default AdminDashboard;
