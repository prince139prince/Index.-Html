import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'

const NotificationSettings = () => {
  const navigate = useNavigate()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    bookingReminders: true,
    promotionalEmails: false,
    serviceUpdates: true
  })
  
  const toggleSetting = (key) => {
    setSettings({...settings, [key]: !settings[key]})
  }
  
  return (
    <div>
      <Header title="Notifications" showBack onBack={() => navigate(-1)} />
      
      <div className="container-custom mt-4">
        <div className="card divide-y">
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive updates via email</p>
            </div>
            <button
              onClick={() => toggleSetting('emailNotifications')}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.emailNotifications ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}></div>
            </button>
          </div>
          
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">SMS Notifications</p>
              <p className="text-sm text-gray-500">Receive updates via SMS</p>
            </div>
            <button
              onClick={() => toggleSetting('smsNotifications')}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.smsNotifications ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}></div>
            </button>
          </div>
          
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Push Notifications</p>
              <p className="text-sm text-gray-500">Receive push notifications</p>
            </div>
            <button
              onClick={() => toggleSetting('pushNotifications')}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.pushNotifications ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}></div>
            </button>
          </div>
          
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Booking Reminders</p>
              <p className="text-sm text-gray-500">Reminders before your booking</p>
            </div>
            <button
              onClick={() => toggleSetting('bookingReminders')}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.bookingReminders ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.bookingReminders ? 'translate-x-6' : 'translate-x-1'
              }`}></div>
            </button>
          </div>
          
          <div className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Promotional Emails</p>
              <p className="text-sm text-gray-500">Offers and deals via email</p>
            </div>
            <button
              onClick={() => toggleSetting('promotionalEmails')}
              className={`w-12 h-6 rounded-full transition-colors ${
                settings.promotionalEmails ? 'bg-primary' : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.promotionalEmails ? 'translate-x-6' : 'translate-x-1'
              }`}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationSettings