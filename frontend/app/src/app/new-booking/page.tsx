"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

interface BookingFormData {
    service: string;
    doctor_name: string;
    start_time: string;
    end_time: string;
    date: string;
}

export default function BookingForm() {
    const [formData, setFormData] = useState<BookingFormData>({
        service: '',
        doctor_name: '',
        start_time: '',
        end_time: '',
        date: '',
    });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Error inserting booking');
      }

      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="m-5 px-4 sm:px-0 flex justify-center">
        <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-4">Booking Form</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700">Service</label>
          <input
            type="text"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md p-3 focus:ring-gray-800 focus:border-gray-800"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
          <input
            type="text"
            id="doctor_name"
            name="doctor_name"
            value={formData.doctor_name}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md p-3 focus:ring-gray-800 focus:border-gray-800"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Time</label>
          <input
            type="time"
            id="start_time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md p-3 focus:ring-gray-800 focus:border-gray-800"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Time</label>
          <input
            type="time"
            id="end_time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md p-3 focus:ring-gray-800 focus:border-gray-800"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-2 block w-full border border-gray-300 rounded-md p-3 focus:ring-gray-800 focus:border-gray-800"
            required
          />
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <button type="submit" className="mt-4 w-full bg-slate-700 text-white font-semibold p-3 rounded-md hover:bg-slate-800 transition duration-300">
          Book
        </button>
      </form>

    </div>
  );
};

