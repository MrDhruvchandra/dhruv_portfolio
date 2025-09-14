import React from "react";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaBug, FaRobot, FaGlobe, FaUsers, FaTrophy, FaLightbulb, FaBrain } from "react-icons/fa";
import { SiSelenium, SiPostman, SiPlaywright, SiJavascript } from "react-icons/si";

const ExperienceData = [
  {
    id: 1,
    company: "Paytm",
    position: "Software Development Engineer in Test (SDET)",
    duration: "From Jan 2025 to Present",
    location: "Noida, India",
    startDate: "2025",
    endDate: "Present",
    type: "Full-time",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Paytm-Logo.png",
    description: "Working as an SDET focusing on test automation, API testing, and AI-driven testing approaches to ensure robust software quality and delivery excellence.",
    responsibilities: [
      "Develop and maintain automated test suites using Selenium WebDriver and Playwright",
      "Design and execute comprehensive API testing strategies using Postman and Karate framework",
      "Implement AI-driven testing solutions using LangChain and LangGraph frameworks",
      "Collaborate with development teams to ensure quality standards and best practices",
      "Perform manual testing and bug tracking for critical features",
      "Optimize test execution and improve test coverage across multiple platforms"
    ],
    technologies: [
      { name: "Selenium", icon: <SiSelenium className="text-2xl" />, category: "Automation" },
      { name: "Playwright", icon: <SiPlaywright className="text-2xl" />, category: "Automation" },
      { name: "Postman", icon: <SiPostman className="text-2xl" />, category: "API Testing" },
      { name: "Karate", icon: <FaGlobe className="text-2xl" />, category: "API Testing" },
      { name: "RestAssured", icon: <FaGlobe className="text-2xl" />, category: "API Testing" },
      { name: "LangChain", icon: <FaBrain className="text-2xl" />, category: "AI/ML" },
      { name: "Java", icon: <FaCode className="text-2xl" />, category: "Programming" },
      { name: "JavaScript", icon: <SiJavascript className="text-2xl" />, category: "Programming" }
    ],
    achievements: [
      "Successfully automated 80%+ of regression test cases",
      "Reduced manual testing time by 60% through automation",
      "Implemented AI-driven test case generation reducing test design time by 40%",
      "Achieved 95%+ test coverage for critical payment flows",
      "Mentored junior team members on automation best practices"
    ],
    aosDelay: "100"
  }
];

const Experience = () => {
  return (
    <>
      <div id="experience" className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Professional Experience
          </h1>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {ExperienceData.map((experience, index) => (
              <div
                key={experience.id}
                data-aos="fade-up"
                data-aos-delay={experience.aosDelay}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow duration-300"
              >
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
                      <FaBuilding className="text-3xl text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-primary">{experience.company}</h2>
                      <h3 className="text-xl font-semibold">{experience.position}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1">
                      <FaCalendarAlt />
                      <span>{experience.startDate} - {experience.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-1">
                      <FaMapMarkerAlt />
                      <span>{experience.location}</span>
                    </div>
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {experience.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  {experience.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FaCode className="text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FaBug className="text-primary" />
                    Technologies & Tools
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {experience.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                        <div className="text-primary group-hover:text-white">
                          {tech.icon}
                        </div>
                        <div>
                          <div className="font-medium">{tech.name}</div>
                          <div className="text-sm opacity-75">{tech.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FaTrophy className="text-primary" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experience.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                        <FaLightbulb className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-12 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Experience Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">9+</div>
                <div className="text-lg opacity-90">Months Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">80%+</div>
                <div className="text-lg opacity-90">Test Automation</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%+</div>
                <div className="text-lg opacity-90">Test Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
