export const categories = [
  {
    id: 1,
    name: 'Fan Repair',
    image: 'https://images.unsplash.com/photo-1573613214046-62fc0bc2de5b?w=400&h=400&fit=crop',
    description: 'Professional fan repair and maintenance'
  },
  {
    id: 2,
    name: 'Wiring',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop',
    description: 'Complete home and office wiring'
  },
  {
    id: 3,
    name: 'Switch Fix',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=400&fit=crop',
    description: 'Switch and socket replacement'
  },
  {
    id: 4,
    name: 'Lighting Setup',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop',
    description: 'LED and smart lighting installation'
  }
]

export const services = [
  {
    id: 1,
    name: 'Complete Fan Repair & Maintenance',
    price: 499,
    originalPrice: 799,
    rating: 4.8,
    reviews: 234,
    category: 'Fan Repair',
    image: 'https://images.unsplash.com/photo-1573613214046-62fc0bc2de5b?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1573613214046-62fc0bc2de5b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop'
    ],
    description: 'Professional fan repair service including motor replacement, capacitor check, blade balancing, and complete servicing. Our expert technicians ensure your fan works like new with warranty on parts and labor. We service all types of ceiling fans, table fans, pedestal fans, and exhaust fans.',
    includes: [
      'Motor inspection and repair',
      'Capacitor replacement if needed',
      'Blade balancing and cleaning',
      'Wiring check and repair',
      '30-day service warranty'
    ],
    technician: {
      name: 'Rajesh Kumar',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 4.9,
      experience: '8 years',
      completedJobs: 1247
    },
    duration: '1-2 hours',
    warranty: '30 days'
  },
  {
    id: 2,
    name: 'Complete Home Wiring',
    price: 1499,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 567,
    category: 'Wiring',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1573613214046-62fc0bc2de5b?w=800&h=600&fit=crop'
    ],
    description: 'Complete home wiring solution including concealed wiring, switchboard installation, and safety checks. We use high-quality copper wires and provide ISI-certified materials. Perfect for new homes or rewiring old properties.',
    includes: [
      'Complete wiring layout planning',
      'High-quality copper wires',
      'Switchboard installation',
      'Earthing and safety checks',
      '6-month service warranty'
    ],
    technician: {
      name: 'Amit Sharma',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      rating: 4.8,
      experience: '12 years',
      completedJobs: 2156
    },
    duration: '4-6 hours',
    warranty: '6 months'
  },
  {
    id: 3,
    name: 'Switch & Socket Replacement',
    price: 299,
    originalPrice: 499,
    rating: 4.7,
    reviews: 189,
    category: 'Switch Fix',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop'
    ],
    description: 'Professional switch and socket replacement service. We provide premium quality switches from top brands like Anchor, Legrand, and Havells with installation and testing. Upgrade your old switches to modern modular switches.',
    includes: [
      'Removal of old switches',
      'Installation of new switches',
      'Wiring check and connection',
      'Safety testing',
      '7-day service warranty'
    ],
    technician: {
      name: 'Suresh Patel',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      rating: 4.7,
      experience: '6 years',
      completedJobs: 892
    },
    duration: '30-60 minutes',
    warranty: '7 days'
  },
  {
    id: 4,
    name: 'LED Lighting Installation',
    price: 799,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 423,
    category: 'Lighting Setup',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1573613214046-62fc0bc2de5b?w=800&h=600&fit=crop'
    ],
    description: 'Complete LED lighting setup including design consultation, fixture installation, and smart lighting integration. Energy-efficient solutions for your home with modern aesthetics and smart controls.',
    includes: [
      'Lighting design consultation',
      'LED fixture installation',
      'Smart lighting setup',
      'Dimmer installation',
      '3-month service warranty'
    ],
    technician: {
      name: 'Vikram Singh',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      rating: 4.9,
      experience: '10 years',
      completedJobs: 1567
    },
    duration: '2-3 hours',
    warranty: '3 months'
  },
  {
    id: 5,
    name: 'Circuit Breaker Installation',
    price: 899,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 156,
    category: 'Wiring',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop'
    ],
    description: 'Professional circuit breaker installation and panel upgrade service. Ensure your home\'s electrical safety with our expert service. We install MCB, RCCB, and complete distribution boards.',
    includes: [
      'Circuit breaker selection',
      'Installation and wiring',
      'Load balancing',
      'Safety testing',
      '3-month service warranty'
    ],
    technician: {
      name: 'Ramesh Gupta',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 4.8,
      experience: '15 years',
      completedJobs: 2341
    },
    duration: '2-3 hours',
    warranty: '3 months'
  }
]

export const userBookings = [
  {
    id: 1,
    serviceId: 1,
    serviceName: 'Complete Fan Repair & Maintenance',
    serviceImage: 'https://images.unsplash.com/photo-1573613214046-62fc0bc2de5b?w=400&h=400&fit=crop',
    date: '2024-01-15',
    time: '10:00 AM',
    status: 'Completed',
    address: '123 Main Street, Bangalore - 560001',
    price: 499,
    technician: 'Rajesh Kumar'
  },
  {
    id: 2,
    serviceId: 2,
    serviceName: 'Complete Home Wiring',
    serviceImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop',
    date: '2024-01-20',
    time: '2:00 PM',
    status: 'Pending',
    address: '456 Oak Avenue, Mumbai - 400001',
    price: 1499,
    technician: 'Amit Sharma'
  }
]

export const faqs = [
  {
    id: 1,
    question: 'How quickly can I get a service?',
    answer: 'We provide service within 60 minutes of booking. Our technicians are strategically located across the city to ensure fast response times.'
  },
  {
    id: 2,
    question: 'Are the technicians verified?',
    answer: 'Yes, all our technicians undergo strict background verification, skill testing, and regular training to ensure quality service.'
  },
  {
    id: 3,
    question: 'What is your warranty policy?',
    answer: 'We provide service warranty ranging from 7 days to 6 months depending on the service type. Check service details for specific warranty period.'
  },
  {
    id: 4,
    question: 'Can I reschedule my booking?',
    answer: 'Yes, you can reschedule your booking up to 2 hours before the scheduled time without any charges.'
  }
]