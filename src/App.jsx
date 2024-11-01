import './css/index.css';
import Header from './components/header';
import Hero from './components/hero';
import Appointment from './components/ui/appointment';
import ServiceSection from './components/service';
import HealNetStory from './components/story';
import PlatformSteps from './components/faq';
import Testimonial from './components/testimonial';
import BooksAppoinment from './components/booksapoitment';
import Helpdesk from './components/helpdesk'
import Footer from './components/footer';

function App() {
  return (
    <div className="mx-auto">
      {/* Header and Hero Section */}
      <div className="bg-[#f3fbff]">
        <Header />
        <Hero />
      </div>

      {/* Main Content Section */}
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-8">
        <Appointment />
        <ServiceSection />
        <HealNetStory />
        <PlatformSteps />
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 py-8">
        <Testimonial />
      </div>

      {/* Book Appointment Section */}
      <div className="bg-white py-8">
        <BooksAppoinment />
      </div>

      {/* Book Appointment Section */}
      <div className="bg-white py-8">
        <Helpdesk />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
