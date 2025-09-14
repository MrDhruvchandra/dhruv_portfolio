import React from "react";
import { FaBuilding, FaCalendarAlt, FaCode, FaBug, FaRobot, FaTrophy, FaChartLine, FaUsers, FaClock, FaGlobe, FaFlask, FaBrain } from "react-icons/fa";
import { SiSelenium, SiPostman, SiPlaywright } from "react-icons/si";

const ExperienceDashboard = () => {
  const stats = [
    {
      icon: <FaBuilding className="text-3xl" />,
      title: "Current Company",
      value: "Paytm",
      description: "Leading fintech company"
    },
    {
      icon: <FaCalendarAlt className="text-3xl" />,
      title: "Experience",
      value: "Jan 2025 to Present",
      description: "SDET role"
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: "Automation Tools",
      value: "8+",
      description: "Technologies mastered"
    },
    {
      icon: <FaTrophy className="text-3xl" />,
      title: "Test Coverage",
      value: "95%+",
      description: "Critical features"
    }
  ];

  const techStack = [
    { name: "Selenium", icon: <SiSelenium className="text-2xl" />, level: "Advanced", category: "Automation" },
    { name: "Playwright", icon: <SiPlaywright className="text-2xl" />, level: "Advanced", category: "Automation" },
    { name: "Postman", icon: <SiPostman className="text-2xl" />, level: "Advanced", category: "API Testing" },
    { name: "Karate", icon: <FaGlobe className="text-2xl" />, level: "Advanced", category: "API Testing" },
    { name: "RestAssured", icon: <FaGlobe className="text-2xl" />, level: "Advanced", category: "API Testing" },
    { name: "LangChain", icon: <FaBrain className="text-2xl" />, level: "Advanced", category: "AI/ML" }
  ];

  const achievements = [
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "80%+ Automation",
      description: "Successfully automated majority of regression test cases"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "60% Time Reduction",
      description: "Reduced manual testing time through automation"
    },
    {
      icon: <FaRobot className="text-2xl" />,
      title: "40% Efficiency Gain",
      description: "AI-driven test case generation implementation"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Team Mentoring",
      description: "Guided junior members on automation best practices"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Experience Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Overview of my professional journey as an SDET at Paytm
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary"
          >
            <div className="flex items-center gap-4">
              <div className="text-primary">{stat.icon}</div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.title}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaCode className="text-primary" />
          Technology Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <div className="text-primary group-hover:text-white mb-2">
                {tech.icon}
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">{tech.name}</div>
                <div className="text-xs opacity-75">{tech.level}</div>
                <div className="text-xs opacity-60">{tech.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaTrophy className="text-primary" />
          Key Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg"
            >
              <div className="text-primary mt-1">{achievement.icon}</div>
              <div>
                <h4 className="font-semibold text-lg">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Role Highlight */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Current Role: SDET at Paytm</h3>
          <p className="text-lg mb-6 opacity-90">
            Specializing in test automation, API testing, and AI-driven testing approaches 
            to ensure robust software quality and delivery excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">9+</div>
              <div className="text-sm opacity-90">Months Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-sm opacity-90">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%+</div>
              <div className="text-sm opacity-90">Test Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDashboard;
