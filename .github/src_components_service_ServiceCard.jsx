import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../common/Card'
import Button from '../common/Button'

const ServiceCard = ({ service }) => {
  const navigate = useNavigate()
  
  return (
    <Card onClick={() => navigate(`/service/${service.id}`)}>
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-semibold text-primary">
          ₹{service.price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{service.name}</h3>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">{service.rating}</span>
            <span className="text-sm text-gray-400">({service.reviews})</span>
          </div>
          <span className="text-sm text-gray-500 line-through">₹{service.originalPrice}</span>
        </div>
        <Button 
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/service/${service.id}`)
          }}
          size="sm"
          className="w-full"
        >
          Book Now
        </Button>
      </div>
    </Card>
  )
}

export default ServiceCard