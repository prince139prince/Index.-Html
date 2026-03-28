import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'

const PrivacyPolicy = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <Header title="Privacy Policy" showBack onBack={() => navigate(-1)} />
      
      <div className="container-custom mt-4">
        <div className="card p-6">
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Information We Collect</h3>
              <p>We collect information you provide directly to us, such as your name, email address, phone number, and service details when you book our services.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How We Use Your Information</h3>
              <p>We use the information to provide, maintain, and improve our services, process your bookings, communicate with you, and protect against fraud.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Information Sharing</h3>
              <p>We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Security</h3>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
              <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@electrofix.com for any privacy-related concerns.</p>
            </div>
            
            <div className="pt-4 text-sm text-gray-400">
              <p>Last updated: January 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy