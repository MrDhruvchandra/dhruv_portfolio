import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { id: 1, title: "Home", link: "/#" },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  }
];
const Footer = () => {
  return (
    <>
      <div id="contact" className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div data-aos="fade" className="container">
          <div className="grid md:grid-cols-3 py-4">
            {/* company Details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                My Social Media Handles
              </h1>
              <p className="text-sm">
              Check out my social media and developer profiles for updates on projects, insights, and professional connections. Let's connect!
              </p>
              <br />

             

             
            </div>

            {/* Footer Links section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                           target="blank"
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                  {/* social handle */}
              <div className="flex flex-col items-center gap-6 py-4 mt-6">
                <a href="https://github.com/MrDhruvchandra" target="_blank">
                  <FaGithub className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://www.instagram.com/dhruv.0.1.1.0/" target="_blank">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/dhruvchandra-m-b71155229/" target="_blank">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>


              </div>
              <div>
                 {/* contact section */}
              <div>
                <div className="flex items-center py-8 gap-3">
                  <FaLocationArrow />
                  <p>Lucknow, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+91 7985010058</p>
                </div>
              </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
