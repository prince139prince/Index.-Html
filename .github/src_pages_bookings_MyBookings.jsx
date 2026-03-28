import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import { useBookingStore } from '../../store/bookingStore'

const MyBookings = () => {
  const navigate = useNavigate()
  const { bookings } = useBookingStore()
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed':
        return 'bg-green-100 text-green-700'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700'
      case 'Confirmed':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }
  
  return (
    <div>
      <Header title="My Bookings" showBack onBack={() => navigate(-1)} />
      
      <div className="container-custom mt-4">
        {bookings.length > 0 ? (
          <div className="space-y-4">
            {bookings.map(booking => (
              <div key={booking.id} className="card p-4">
                <div className="flex space-x-3">
                  <img 
                    src={booking.serviceImage} 
                    alt={booking.serviceName}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {booking.serviceName}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <span>{booking.date}</span>
                      <span>•</span>
                      <span>{booking.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`badge ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                      <span className="font-bold text-primary">₹{booking.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500">No bookings yet</p>
            <button 
              onClick={() => navigate('/services')}
              className="mt-4 text-primary font-semibold"
            >
              Book a service
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyBookings