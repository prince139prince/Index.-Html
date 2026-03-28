import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import Layout from './components/layout/Layout'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import ServiceDetail from './pages/services/ServiceDetail'
import Booking from './pages/booking/Booking'
import Payment from './pages/payment/Payment'
import Profile from './pages/profile/Profile'
import Settings from './pages/profile/Settings'
import MyBookings from './pages/bookings/MyBookings'
import NotificationSettings from './pages/extras/NotificationSettings'
import LanguageSelection from './pages/extras/LanguageSelection'
import PrivacyPolicy from './pages/extras/PrivacyPolicy'
import HelpCenter from './pages/extras/HelpCenter'
import InviteFriends from './pages/extras/InviteFriends'

function App() {
  const { user } = useAuthStore()

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        
        {/* Protected Routes */}
        <Route element={user ? <Layout /> : <Navigate to="/login" />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/booking/:serviceId" element={<Booking />} />
          <Route path="/payment/:bookingId" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/notification-settings" element={<NotificationSettings />} />
          <Route path="/language" element={<LanguageSelection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/invite-friends" element={<InviteFriends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App