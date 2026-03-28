import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import Header from '../../components/layout/Header'
import Button from '../../components/common/Button'

const Profile = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  
  const menuItems = [
    { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'My Bookings', path: '/my-bookings' },
    { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', label: 'Payments', path: '/payments' },
    { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', label: 'Settings', path: '/settings' },
    { icon: 'M8 11V7a4 4 0 118 0m-4 8v2m-6-4a8 8 0 1116 0 8 8 0 01-16 0z', label: 'Help Center', path: '/help-center' },
    { icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', label: 'Invite Friends', path: '/invite-friends' },
    { icon: 'M12 15v2m-6-4h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4V6a4 4 0 00-8 0v4h8z', label: 'Privacy Policy', path: '/privacy-policy' },
  ]
  
  return (
    <div>
      <Header />
      
      <div className="container-custom mt-4">
        {/* Profile Header */}
        <div className="card p-6 mb-4 text-center">
          <img 
            src={user?.avatar} 
            alt={user?.name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-4 border-primary"
          />
          <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>
          <p className="text-gray-500 text-sm">{user?.email}</p>
          <p className="text-gray-500 text-sm">{user?.phone}</p>
        </div>
        
        {/* Menu Items */}
        <div className="space-y-2 mb-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="w-full card p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="text-gray-700 font-medium">{item.label}</span>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
        
        {/* Logout Button */}
        <Button 
          onClick={logout} 
          variant="danger" 
          className="w-full mb-6"
        >
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Profile