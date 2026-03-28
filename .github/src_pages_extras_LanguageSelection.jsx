import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Button from '../../components/common/Button'

const LanguageSelection = () => {
  const navigate = useNavigate()
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  
  const languages = [
    { name: 'English', code: 'en' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Bengali', code: 'bn' },
    { name: 'Tamil', code: 'ta' },
    { name: 'Telugu', code: 'te' },
    { name: 'Marathi', code: 'mr' }
  ]
  
  return (
    <div>
      <Header title="Language" showBack onBack={() => navigate(-1)} />
      
      <div className="container-custom mt-4">
        <div className="card divide-y">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.name)}
              className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-900 font-medium">{lang.name}</span>
              {selectedLanguage === lang.name && (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
        
        <Button 
          onClick={() => navigate(-1)} 
          variant="primary" 
          className="w-full mt-4"
        >
          Save Language
        </Button>
      </div>
    </div>
  )
}

export default LanguageSelection