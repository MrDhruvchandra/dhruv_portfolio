import React from "react";
import ExperienceDashboard from "./ExperienceDashboard";
import { FaTachometerAlt, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dashboardItems = [
    {
      icon: <FaUser className="text-3xl" />,
      title: "About Me",
      description: "Learn more about my background and journey",
      link: "/about",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Skills",
      description: "Technical skills and expertise",
      link: "/#skills",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaBriefcase className="text-3xl" />,
      title: "Experience",
      description: "Professional experience and achievements",
      link: "/experience",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaProjectDiagram className="text-3xl" />,
      title: "Projects",
      description: "Portfolio of completed projects",
      link: "/projects",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Contact",
      description: "Get in touch with me",
      link: "/contact",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <div className="container py-14">
      {/* Dashboard Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <FaTachometerAlt className="text-primary" />
          Portfolio Dashboard
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Welcome to my professional portfolio dashboard
        </p>
      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {dashboardItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group"
          >
            <div className={`bg-gradient-to-r ${item.color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-white/90 text-sm">{item.description}</p>
              <div className="mt-4 flex items-center text-sm font-medium">
                <span>Explore</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Experience Dashboard Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
        <ExperienceDashboard />
      </div>

      {/* Quick Stats */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-gradient-to-r from-primary to-secondary text-white rounded-lg">
          <div className="text-3xl font-bold mb-2">9+</div>
          <div className="text-sm opacity-90">Months Experience</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg">
          <div className="text-3xl font-bold mb-2">8+</div>
          <div className="text-sm opacity-90">Technologies</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg">
          <div className="text-3xl font-bold mb-2">95%+</div>
          <div className="text-sm opacity-90">Test Coverage</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg">
          <div className="text-3xl font-bold mb-2">6+</div>
          <div className="text-sm opacity-90">Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
