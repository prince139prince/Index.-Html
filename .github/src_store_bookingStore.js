import { create } from 'zustand'

export const useBookingStore = create((set) => ({
  bookings: [],
  currentBooking: null,
  addBooking: (booking) => set((state) => ({ 
    bookings: [booking, ...state.bookings],
    currentBooking: booking
  })),
  updateBookingStatus: (bookingId, status) => set((state) => ({
    bookings: state.bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status } : booking
    )
  })),
  clearCurrentBooking: () => set({ currentBooking: null })
}))