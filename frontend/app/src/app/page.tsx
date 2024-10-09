import BookingList from '@/components/BookingList';
import Navbar from '@/components/Navbar';

async function getBookings() {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store', mode: 'no-cors' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Home: React.FC = async () => {

  const bookings = await getBookings()

  return (
    <div>
      <Navbar />
      <div className="m-5 px-4 sm:px-0 flex justify-center">
        <h3 className="text-2xl font-semibold leading-7 text-gray-900 mb-4">Bookings List</h3>
      </div>
      <div className="mt-6 border-t border-gray-200">
        <BookingList bookings={bookings}/>
      </div>
    </div>
  );
};

export default Home;
