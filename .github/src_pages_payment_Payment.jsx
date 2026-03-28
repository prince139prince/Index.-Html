import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Button from '../../components/common/Button'
import { useBookingStore } from '../../store/bookingStore'

const Payment = () => {
  const { bookingId } = useParams()
  const navigate = useNavigate()
  const { bookings, updateBookingStatus } = useBookingStore()
  const booking = bookings.find(b => b.id === parseInt(bookingId))
  
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })
  const [processing, setProcessing] = useState(false)
  
  const handlePayment = () => {
    setProcessing(true)
    setTimeout(() => {
      updateBookingStatus(parseInt(bookingId), 'Confirmed')
      navigate('/my-bookings')
      setProcessing(false)
    }, 2000)
  }
  
  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Booking not found</p>
      </div>
    )
  }
  
  return (
    <div>
      <Header title="Payment" showBack onBack={() => navigate(-1)} />
      
      <div className="container-custom mt-4">
        {/* Amount Summary */}
        <div className="card p-4 mb-4">
          <h3 className="font-semibold text-gray-900 mb-3">Payment Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">{booking.serviceName}</span>
              <span className="font-medium">₹{booking.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service Charge</span>
              <span className="font-medium">₹0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">GST</span>
              <span className="font-medium">₹{Math.round(booking.price * 0.18)}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Total Amount</span>
                <span className="font-bold text-primary text-lg">₹{booking.price + Math.round(booking.price * 0.18)}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-3">Select Payment Method</h3>
          <div className="space-y-2">
            {[
              { id: 'upi', label: 'UPI', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
              { id: 'card', label: 'Card', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
              { id: 'wallet', label: 'Wallet', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z' },
              { id: 'cash', label: 'Cash', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
            ].map(method => (
              <button
                key={method.id}
                onClick={() => setPaymentMethod(method.id)}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === method.id
                    ? 'border-primary bg-orange-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <svg className={`w-6 h-6 ${paymentMethod === method.id ? 'text-primary' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={method.icon} />
                  </svg>
                  <span className={`font-medium ${paymentMethod === method.id ? 'text-primary' : 'text-gray-700'}`}>
                    {method.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Card Form */}
        {paymentMethod === 'card' && (
          <div className="card p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-3">Card Details</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={cardDetails.name}
                  onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">CVV</label>
                  <input
                    type="password"
                    placeholder="123"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Pay Button */}
        <Button 
          onClick={handlePayment} 
          variant="primary" 
          className="w-full mb-6"
          size="lg"
          disabled={processing}
        >
          {processing ? 'Processing Payment...' : `Pay ₹${booking.price + Math.round(booking.price * 0.18)}`}
        </Button>
      </div>
    </div>
  )
}

export default Payment