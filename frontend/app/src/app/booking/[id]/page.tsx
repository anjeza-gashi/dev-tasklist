import Link from 'next/link';
import Navbar from '@/components/Navbar';

async function getBooking(id: string) {
  const res = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

interface BookingDetailsProps {
  params: {
    id: string;
  };
}

export default async function BookingDetails({ params }: BookingDetailsProps) {
  const booking = await getBooking(params.id);

  return (
    <div>
      <Navbar />
      <div className="mt-40 flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">Booking Details</h1>
          <p className="text-lg text-gray-600 mb-2">
            {`This booking is with ${booking.doctor_name} for ${booking.service}`}
          </p>
          <p className="text-lg text-gray-600 mb-6">{`It ends at ${booking.end_time}`}</p>
          <Link
            href="/"
            className="inline-block bg-slate-700 hover:bg-slate-800 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

