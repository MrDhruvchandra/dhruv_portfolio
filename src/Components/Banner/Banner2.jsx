import React from "react";
import BannerPng from "../../assets/dhruv2.png";
import { BiPlayCircle } from "react-icons/bi";

const Banner2 = ({ togglePlay }) => {
  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* text content section */}
          <div className="order-2 sm:order-1  lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                Tech Enthusiast  Proficient in Javascript{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                 MERN Stack Web Developer 
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
               I worked in Octanet Pvt Ltd as a frontend web developer intern. And I really enjoyed my experience there.<br/>
               I also worked in Remote Sensing Application Center, which is a goverment organisation as a web developer intern. There I worked on Openlayes js and GIS project and I created a RSAC website using HTML, CSS, JAVASCRIPT and Openlayers javascript. I learned there how the data managed in real life projects. And I also learn teamwork, adatibility and time management<br/>
               I also obtained certificates of perticipation from IIT BOMBEY, SIH. And completed basic Android development course, web development course and Internship certificates.
              </p>
              <div className="flex  flex-wrap gap-6">
                <button>
                  <a data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                   href="https://drive.google.com/file/d/1uRBqLWdSjFB6ek9mCFy_45pjT-pmlOlI/view?usp=drivesdk" target="_blank" >IIT B Codeastra</a>
                  </button>
                
                <button>
                  <a data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                   href="https://drive.google.com/file/d/12HhDxIBVgoClbm7JRXpz-Lrlz0s0yDBB/view?usp=drivesdk" target="_blank" >SIH</a>
                  </button>
                
                <button>
                  <a data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                   href="https://drive.google.com/file/d/1_-xmdEvCmeYXC-BEfKddkVX7xHFQ8sZ4/view?usp=drivesdk" target="_blank" >Android Dev. </a>
                  </button>
                
                <button>
                  <a data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                   href="https://drive.google.com/file/d/1vJTgd0yNxxnRZkdF57yrBPhjsEWf61uY/view" target="_blank" >Web Dev. </a>
                  </button>
                
                <button>
                  <a data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                   href="https://drive.google.com/file/d/1nztUOWJtYT8LzxqF6EwMFbSRCNOm_7Hq/view?usp=drivesd" target="_blank" >Octanet Intern</a>
                  </button>
                
              </div>
              
            </div>
            {/* backgrond color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-200px] left-[300px] blur-3xl opacity-50 "></div>
          </div>

          {/* image section */}
          <div data-aos="fade-up" className="order-1 sm:order-2">
            <img src={BannerPng} style={{  borderEndStartRadius:'35px', borderBottomRightRadius:'35px' }} alt="" className="w-full max-w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
