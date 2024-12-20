import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Quotes from "./Components/Quotes/Quotes";
import About from "./Components/Banner/About";
import Banner2 from "./Components/Banner/Banner2";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
<main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
<Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero togglePlay={togglePlay} />
                <Quotes />
                <About togglePlay={togglePlay} />
                <Banner2 togglePlay={togglePlay} />
                <Features />
              </>
            } 
          />
          <Route path="/about" element={<About togglePlay={togglePlay} />} />
          <Route path="/projects" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
