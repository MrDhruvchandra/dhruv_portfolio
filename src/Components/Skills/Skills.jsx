import React from "react";
import { FaRobot, FaCode, FaBug, FaBrain, FaFlask, FaGlobe } from "react-icons/fa";
import { SiSelenium, SiPostman, SiPlaywright } from "react-icons/si";
import { TbTestPipe } from "react-icons/tb";

const SkillsData = [
  {
    category: "Test Automation",
    icon: <FaCode className="text-4xl text-primary" />,
    skills: [
      { name: "Selenium WebDriver", icon: <SiSelenium className="text-2xl" />, level: "Advanced" },
      { name: "Playwright", icon: <SiPlaywright className="text-2xl" />, level: "Advanced" },
      { name: "TestNG/JUnit", icon: <FaFlask className="text-2xl" />, level: "Advanced" },
      { name: "Cucumber BDD", icon: <TbTestPipe className="text-2xl" />, level: "Intermediate" }
    ],
    aosDelay: "100"
  },
  {
    category: "API Testing",
    icon: <FaGlobe className="text-4xl text-primary" />,
    skills: [
      { name: "Postman", icon: <SiPostman className="text-2xl" />, level: "Advanced" },
      { name: "Karate Framework", icon: <FaGlobe className="text-2xl" />, level: "Advanced" },
      { name: "RestAssured", icon: <FaGlobe className="text-2xl" />, level: "Advanced" },
      { name: "HTTP Client", icon: <FaGlobe className="text-2xl" />, level: "Advanced" }
    ],
    aosDelay: "300"
  },
  {
    category: "AI & Machine Learning",
    icon: <FaBrain className="text-4xl text-primary" />,
    skills: [
      { name: "LangChain", icon: <FaBrain className="text-2xl" />, level: "Advanced" },
      { name: "LangGraph", icon: <FaBrain className="text-2xl" />, level: "Advanced" },
      { name: "Agentic AI", icon: <FaRobot className="text-2xl" />, level: "Advanced" },
      { name: "AI-Driven Testing", icon: <FaBug className="text-2xl" />, level: "Advanced" }
    ],
    aosDelay: "500"
  },
  {
    category: "Manual Testing",
    icon: <FaBug className="text-4xl text-primary" />,
    skills: [
      { name: "Test Case Design", icon: <FaFlask className="text-2xl" />, level: "Advanced" },
      { name: "Bug Tracking", icon: <FaBug className="text-2xl" />, level: "Advanced" },
      { name: "Regression Testing", icon: <TbTestPipe className="text-2xl" />, level: "Advanced" },
      { name: "Performance Testing", icon: <FaCode className="text-2xl" />, level: "Intermediate" }
    ],
    aosDelay: "700"
  }
];

const Skills = () => {
  return (
    <>
      <div id="skills" className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Technical Skills & Expertise
          </h1>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SkillsData.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                data-aos="fade-up"
                data-aos-delay={category.aosDelay}
                className="bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300 p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-semibold">{category.category}</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 duration-300"
                    >
                      <div className="text-primary group-hover:text-black">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm opacity-80">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Highlight */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Current Role</h2>
              <p className="text-lg mb-2">
                <strong>Software Development Engineer in Test (SDET)</strong>
              </p>
              <p className="text-lg mb-4">
                <strong>Paytm</strong> • 9 months experience
              </p>
              <p className="text-base opacity-90">
                Specializing in test automation, API testing, and AI-driven testing approaches 
                to ensure robust software quality and delivery excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
