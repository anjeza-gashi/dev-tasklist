import React from 'react'

export default function Navbar(){
  return (
    <nav className="bg-slate-700">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="/" className="rounded-md hover:bg-slate-800 px-3 py-2 text-sm font-medium text-white">Bookings</a>
                  <a href="/new-booking" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">New Booking</a>
                </div>
              </div>
            </div>
          </div>
    </nav>
  )
}
