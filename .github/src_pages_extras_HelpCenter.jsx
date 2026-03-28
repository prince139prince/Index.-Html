import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import { faqs } from '../../services/mockData'

const HelpCenter = () => {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! How can I help you today?' }
  ])
  
  const sendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { type: 'user', text: message }])
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          type: 'bot', 
          text: 'Thank you for your message. Our support team will get back to you shortly.' 
        }])
      }, 1000)
      setMessage('')
    }
  }
  
  return (
    <div>
      <Header title="Help Center" showBack onBack={() => navigate(-1)} />
      
      <div className="container-custom mt-4">
        {/* FAQs */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Frequently Asked Questions</h3>
          <div className="space-y-2">
            {faqs.map(faq => (
              <div key={faq.id} className="card">
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full p-4 text-left flex items-center justify-between"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === faq.id && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat Support */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Chat with Support</h3>
          <div className="card p-4">
            <div className="h-64 overflow-y-auto mb-4 space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl ${
                    msg.type === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={sendMessage}
                className="px-4 bg-primary text-white rounded-xl hover:bg-orange-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter