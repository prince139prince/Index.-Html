import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import Header from '../../components/layout/Header'
import Button from '../../components/common/Button'
import { services } from '../../services/mockData'
import { useBookingStore } from '../../store/bookingStore'
import { useAuthStore } from '../../store/authStore'

const Booking = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const service = services.find(s => s.id === parseInt(serviceId))
  const { user } = useAuthStore()
  const { addBooking } = useBookingStore()
  
  const [formData, setFormData] = useState({
    address: user?.address || '',
    date: format(new Date(), 'yyyy-MM-dd'),
    time: '10:00',
    notes: ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const booking = {
      id: Date.now(),
      serviceId: service.id,
      serviceName: service.name,
      serviceImage: service.image,
      date: formData.date,
      time: formData.time,
      status: 'Pending',
      address: formData.address,
      price: service.price,
      technician: service.technician.name,
      notes: formData.notes
    }
    
    addBooking(booking)
    navigate(`/payment/${booking.id}`)
  }
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Service not found</p>
      </div>
    )
  }
  
  return (
    <div>
      <Header title="Confirm Booking" showBack onBack={() => navigate(-1)} />
      
      <div className="container-custom mt-4">
        {/* Static Map UI */}
        <div className="relative mb-6 rounded-2xl overflow-hidden h-48">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop" 
            alt="Map location"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Booking Details Card */}
          <div className="card p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Service Details</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Service</p>
                <p className="font-medium text-gray-900">{service.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Price</p>
                <p className="font-bold text-primary">₹{service.price}</p>
              </div>
            </div>
          </div>
          
          {/* Address */}
          <div className="card p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Service Address</h3>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              placeholder="Enter your full address"
              rows="3"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          
          {/* Date & Time */}
          <div className="card p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Date & Time</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  min={format(new Date(), 'yyyy-MM-dd')}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Time</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>12:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Notes */}
          <div className="card p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Additional Notes (Optional)</h3>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              placeholder="Any specific instructions for the technician"
              rows="3"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <Button type="submit" variant="primary" className="w-full mb-6" size="lg">
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Booking