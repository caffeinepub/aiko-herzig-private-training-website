import { Hero } from './components/Hero';
import { Practice } from './components/Practice';
import { Foundations } from './components/Foundations';
import { Location } from './components/Location';
import { Confidentiality } from './components/Confidentiality';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Practice />
        <Foundations />
        <Location />
        <Confidentiality />
        <Contact />
        <About />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
