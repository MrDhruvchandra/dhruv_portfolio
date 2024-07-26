import React from "react";
import Aboutpng from "../../assets/dhruv1.png";
 
const About = ({ togglePlay }) => {
  return (
    <div id="about" className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false">
            <img src={Aboutpng} style={{   borderEndStartRadius:'35px', borderBottomRightRadius:'35px' }} alt="" className="w-full max-w-[400px]" />
          </div>
          {/* text content section */}
          <div className=" lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                Tech Enthusiast  Proficient in Javascript{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                 MERN stack Developer
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
              I persuing Bachelor of Technology in Electronics and Communication Engineering from Institute of Engineering & Technology Lucknow. Skilled in Javascript, React.js, C++, HTML, CSS, UI/UX desing, Tailwind CSS and various tools and platforms, I have developed several Frontend projects like Travel website, Shoping and food odering wesites.
              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                  
                >
                  <a href="https://www.linkedin.com/in/dhruvchandra-m-b71155229/" target="blank">Hire me</a>
                </button>
                 
              </div>
            </div>
            {/* backgrond color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
