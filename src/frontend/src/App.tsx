import { Toaster } from "@/components/ui/sonner";
import { About } from "./components/About";
import { Confidentiality } from "./components/Confidentiality";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Foundations } from "./components/Foundations";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Practice } from "./components/Practice";
import { Session } from "./components/Session";

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Practice />
        <Session />
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
