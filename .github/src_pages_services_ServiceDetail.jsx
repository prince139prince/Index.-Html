import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Button from '../../components/common/Button'
import { services } from '../../services/mockData'
import { useBookingStore } from '../../store/bookingStore'

const ServiceDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const service = services.find(s => s.id === parseInt(id))
  const [selectedImage, setSelectedImage] = useState(0)
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Service not found</p>
      </div>
    )
  }
  
  return (
    <div className="pb-24">
      <Header showBack onBack={() => navigate(-1)} />
      
      {/* Image Gallery */}
      <div className="relative">
        <img 
          src={service.gallery[selectedImage]} 
          alt={service.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {service.gallery.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                selectedImage === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="container-custom mt-4">
        {/* Title and Price */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 font-semibold">{service.rating}</span>
              </div>
              <span className="text-gray-400">({service.reviews} reviews)</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-primary">₹{service.price}</span>
              <span className="text-sm text-gray-400 line-through ml-2">₹{service.originalPrice}</span>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>
        
        {/* What's Included */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">What's Included</h3>
          <ul className="space-y-2">
            {service.includes.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Service Details */}
        <div className="mb-6 p-4 bg-gray-50 rounded-xl">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="font-semibold text-gray-900">{service.duration}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Warranty</p>
              <p className="font-semibold text-gray-900">{service.warranty}</p>
            </div>
          </div>
        </div>
        
        {/* Technician Section */}
        <div className="mb-6 p-4 bg-gray-50 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-3">Your Technician</h3>
          <div className="flex items-center space-x-3">
            <img 
              src={service.technician.image} 
              alt={service.technician.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{service.technician.name}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>⭐ {service.technician.rating}</span>
                <span>•</span>
                <span>{service.technician.experience} experience</span>
              </div>
              <p className="text-sm text-gray-500">{service.technician.completedJobs}+ jobs completed</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-lg">
        <div className="container-custom">
          <Button 
            onClick={() => navigate(`/booking/${service.id}`)}
            className="w-full"
            size="lg"
          >
            Book Now - ₹{service.price}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail