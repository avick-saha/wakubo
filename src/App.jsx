import GrainOverlay from './components/GrainOverlay';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Motion from './components/Motion';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <GrainOverlay />
      <Header />
      <main>
        <Hero />
        <Work />
        <Motion />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
