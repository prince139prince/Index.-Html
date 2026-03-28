import React from 'react'
import { useAuthStore } from '../../store/authStore'

const Header = ({ title, showBack = false, onBack }) => {
  const { user } = useAuthStore()
  
  return (
    <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {showBack && (
              <button onClick={onBack} className="text-gray-600 p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {title && <h1 className="text-xl font-bold text-gray-900">{title}</h1>}
          </div>
          {!title && (
            <div className="flex items-center space-x-3">
              <div>
                <p className="text-sm text-gray-500">Welcome back,</p>
                <p className="font-semibold text-gray-900">{user?.name}</p>
              </div>
              <img 
                src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'} 
                alt={user?.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header