import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
  {
    name: "Travel website",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
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
    description: "Developed a website of remote sensing application center, during my internship there. It shows various data of roads and bridges in uttar pradesh. This website is build using HTML,CSS, and javascript and for map integration I used openlayer.js which is a javascript library.",
    aosDelay: "500",
  },
  {
    name: "Shoping app- Shopna",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "https://shopna-shoping.netlify.app" ,
    description: "Shopna is an online clothing e-shop. In this app, there are a variety of garments available for all age groups. It is built using React.js and designed using Tailwind CSS.",
    aosDelay: "700",
  },
];

const Projects = () => {
  return (
    <>
      <div id="projects" className="container py-14 sm:min-h-[600px]">
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
