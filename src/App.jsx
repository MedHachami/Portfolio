import { BrowserRouter } from "react-router-dom";

import { About, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* bg-hero-pattern */}
        <div
        className="hero"
        style={{'width':'100%'}}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Experience />

        </div>
        <Tech />
        <div className='relative z-0'>
          <Works />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;