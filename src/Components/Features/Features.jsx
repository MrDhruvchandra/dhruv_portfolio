import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { FaMoneyBillWave, FaShoppingCart,FaUtensils, FaBlog, FaPlaneDeparture } from "react-icons/fa";

const FeaturesData = [
  {
    name: "Travel website",
    icon: (
      <FaPlaneDeparture className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "https://travellogo-shaw-travels.netlify.app/",
    description: "Developed a web application that displays the places to visit. Here you can hire a tour guide and plan trip with family or solo. It offers various places in India and forein also. it is a frontent websit build using react.js and designed using tailwind css. ",
    aosDelay: "300",
  },
  {
    name: "RSAC website",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "https://mrdhruvchandra.github.io/pr1/",
    description: "It's dynamic website showcasing detailed data on roads and bridges across Uttar Pradesh. Built with HTML, CSS, and JavaScript, the site offers a user-friendly experience, with interactive maps integrated using OpenLayers.js- a powerful JavaScript library for geospatial data visualization. The website seamlessly presents complex infrastructure data, making it accessible and easy to explore.",
    aosDelay: "500",
  },
  {
    name: "Shoping app- Shopna",
    icon: (
      <FaShoppingCart className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "https://shopna-shoping.netlify.app" ,
    description: "Shopna is an online clothing e-shop offering a wide range of garments for all age groups. Built using React.js for a fast and interactive user experience, the app is styled with Tailwind CSS to ensure a modern, responsive, and visually appealing design. Whether you're looking for trendy outfits or classic pieces, Shopna has something for everyone!",
    aosDelay: "700",
  },
  {
    name: "Kitchen business website",
    icon: (
      <FaUtensils className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "https://maurya-modular-kitchen.netlify.app/" ,
    description: " This website showcases various modular kitchen designs, services, and solutions. It features a gallery of kitchen layouts, client testimonials, and detailed descriptions of their offerings, emphasizing functionality, style, and customization. The site aims to attract homeowners looking to modernize their kitchens with high-quality, aesthetically pleasing designs.",
     aosDelay: "700",
  },
  {
    name: "Bloging Website",
    icon: (
      <FaBlog className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "https://dhruv-blogs.netlify.app/" ,
    description: "It is user-friendly bloging platform for writers and readers. Share your stories, explore diverse topics, and engage with a like-minded community. Enjoy features like a seamless text editor, personalized dashboard, interactive comments, and mobile-friendly design. Create, customize, and connect—whether you're a seasoned writer or just starting your blogging journey.   ",
      aosDelay: "700",
  },
  {
    name: "D_pay",
    icon: (
      <FaMoneyBillWave className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "https://d-pay.netlify.app/" ,
    description: "D-Pay is a secure and feature-rich payment application designed to streamline online transactions and enhance user convenience. Built with modern technologies, it provides a seamless and intuitive interface for users to manage their payments efficiently. ",
      aosDelay: "700",
  },
];

const Projects = () => {
  return (
    <>
      <div id="projects" className="container py-14 sm:min-h-[600px] ">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Projects
          </h1>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p>{data.description}</p>
                <a
                  href={data.link} target="blank"
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
                >
                  Live
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
