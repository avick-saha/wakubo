import GrainOverlay from './components/GrainOverlay';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import AIImageStudio from './components/AIImageStudio';
import PhotoSheet from './components/PhotoSheet';
import AIVideoSuite from './components/AIVideoSuite';
import VideoReels from './components/VideoReels';
import Process from './components/Process';
import Stats from './components/Stats';
import Compare from './components/Compare';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GrainOverlay />
      <Header />
      <main>
        <Hero />
        <hr className="divider" />
        <Products />
        <hr className="divider" />
        <AIImageStudio />
        <hr className="divider" />
        <PhotoSheet />
        <hr className="divider" />
        <AIVideoSuite />
        <hr className="divider" />
        <VideoReels />
        <hr className="divider" />
        <Process />
        <hr className="divider" />
        <Stats />
        <hr className="divider" />
        <Compare />
        <hr className="divider" />
        <Pricing />
        <hr className="divider" />
        <Testimonials />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
