import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Button from '../../components/common/Button'
import { useAuthStore } from '../../store/authStore'

const Settings = () => {
  const navigate = useNavigate()
  const { user, updateUser } = useAuthStore()
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  })
  
  const handleUpdate = () => {
    updateUser(formData)
    navigate('/profile')
  }
  
  return (
    <div>
      <Header title="Settings" showBack onBack={() => navigate(-1)} />
      
      <div className="container-custom mt-4">
        <div className="card p-4 mb-4">
          <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <button
            onClick={() => navigate('/notification-settings')}
            className="w-full card p-4 flex items-center justify-between hover:bg-gray-50"
          >
            <span className="text-gray-700">Notification Settings</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button
            onClick={() => navigate('/language')}
            className="w-full card p-4 flex items-center justify-between hover:bg-gray-50"
          >
            <span className="text-gray-700">Language</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-sm">English</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
        
        <Button onClick={handleUpdate} variant="primary" className="w-full mb-6">
          Save Changes
        </Button>
      </div>
    </div>
  )
}

export default Settings