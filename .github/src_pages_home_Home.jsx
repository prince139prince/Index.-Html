import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import Header from '../../components/layout/Header'
import CategoryCard from '../../components/service/CategoryCard'
import ServiceCard from '../../components/service/ServiceCard'
import Button from '../../components/common/Button'
import { categories, services } from '../../services/mockData'

const Home = () => {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const popularServices = services.slice(0, 4)
  
  return (
    <div className="pb-20">
      <Header />
      
      <div className="container-custom mt-4">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop" 
            alt="Electrician service"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-center">
            <h2 className="text-white text-2xl font-bold mb-2">All Electrician Services Available</h2>
            <p className="text-white/90 text-sm mb-4">Fast Service at Your Home in 20 Minutes</p>
            <Button 
              onClick={() => navigate('/services')} 
              size="sm" 
              className="w-32"
            >
              Book Now
            </Button>
          </div>
        </div>
        
        {/* Service Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Service Categories</h3>
          <div className="grid grid-cols-4 gap-4">
            {categories.map(category => (
              <CategoryCard 
                key={category.id} 
                category={category}
                onClick={() => navigate('/services')}
              />
            ))}
          </div>
        </div>
        
        {/* Popular Services */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Popular Services</h3>
            <button 
              onClick={() => navigate('/services')}
              className="text-primary text-sm font-semibold"
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {popularServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home