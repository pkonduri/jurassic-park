import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import GlowSeparator from './components/GlowSeparator';
import Divider from './components/Divider';
import Problem from './components/Problem';
import Vision from './components/Vision';
import Science from './components/Science';
import Market from './components/Market';
import Business from './components/Business';
import Roadmap from './components/Roadmap';
import WhyNow from './components/WhyNow';
import Moat from './components/Moat';
import Closing from './components/Closing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Fixed background layers */}
      <ParticleCanvas />
      <div className="fixed top-[-30%] left-1/2 -translate-x-1/2 w-[200%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(212,148,60,0.04)_0%,transparent_60%)] pointer-events-none z-0" />
      <div className="fixed top-[30%] right-[-20%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(122,0,223,0.03)_0%,transparent_60%)] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main>
        <Hero />
        <StatsBar />
        <GlowSeparator />
        <Problem />
        <Divider />
        <Vision />
        <GlowSeparator />
        <Science />
        <Divider />
        <Market />
        <GlowSeparator />
        <Business />
        <Divider />
        <Roadmap />
        <GlowSeparator />
        <WhyNow />
        <Divider />
        <Moat />
        <GlowSeparator />
        <Closing />
      </main>

      <Footer />
    </>
  );
}

export default App;
