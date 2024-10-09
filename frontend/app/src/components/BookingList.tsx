import Link from 'next/link';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

interface Booking {
  id: number;
  date: string;
  start_time: string;
}

interface BookingListProps {
  bookings: Booking[];
}

export default function BookingList({ bookings }: BookingListProps) {
  return (
    <ul className="py-6 divide-y divide-gray-200">
      {bookings.map((booking) => (
        <li
          key={booking.id}
          className="flex justify-between items-center py-4 pl-7 hover:bg-gray-100 transition duration-200"
        >
          <Link
            href={`/booking/${booking.id}`}
            className="text-lg text-gray-800 font-medium"
          >
            {`Booking on ${formatDate(booking.date)} starting at ${booking.start_time}`}
          </Link>
        </li>
      ))}
    </ul>
  );
};

