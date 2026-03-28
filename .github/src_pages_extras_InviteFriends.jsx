import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Button from '../../components/common/Button'

const InviteFriends = () => {
  const navigate = useNavigate()
  const [referralCode] = useState('ELECFIX2024')
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div>
      <Header title="Invite Friends" showBack onBack={() => navigate(-1)} />
      
      <div className="container-custom mt-4">
        <div className="card p-6 text-center mb-4">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Invite Friends, Get Rewards</h3>
          <p className="text-gray-600 mb-4">Share your referral code and earn ₹100 for every friend who books their first service</p>
          
          <div className="bg-gray-50 p-3 rounded-xl mb-4">
            <div className="flex items-center justify-between">
              <code className="text-lg font-mono font-bold text-primary">{referralCode}</code>
              <button
                onClick={copyToClipboard}
                className="text-primary font-semibold text-sm"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Button variant="primary" className="w-full">
              Share via WhatsApp
            </Button>
            <Button variant="outline" className="w-full">
              Share via Message
            </Button>
          </div>
        </div>
        
        <div className="card p-4">
          <h4 className="font-semibold text-gray-900 mb-2">How it works</h4>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">1</span>
              <p>Share your unique referral code with friends</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">2</span>
              <p>Friend signs up and books their first service</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">3</span>
              <p>Get ₹100 credit in your wallet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InviteFriends