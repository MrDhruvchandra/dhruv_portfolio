import React from "react";
import DhruvPng from "../../assets/dhruv2.png";
 
const Hero = ({ togglePlay }) => {
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 data-aos="fade-up" data className="text-4xl font-semibold">
              It's a pleasure to introduce,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                   Dhruvchandra Maurya
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
              I am a MERN Stack Developer, JavaScript Enthusiast, and Innovative Software Engineer. Passionate about leveraging cutting-edge technology, I continuously strive to create impactful and user-friendly web applications.              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                > <a href="https://drive.google.com/file/d/1Ps_L7dLBzIc6dpyEzkDd1XD6KK_spCPP/view?usp=drivesdk" target="_blank"> Download Resume</a>
                  
                </button>
                {/* <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={togglePlay}
                  className="flex items-center gap-2"
                >
                  {" "}
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button> */}
              </div>
            </div>
            {/* image section */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2 "
            >
              <img src={DhruvPng} alt="" className="" />
            </div>
          </div>

          {/* Animated Blob */}
          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
