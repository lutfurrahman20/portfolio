import { useState } from "react";
import SkillsHeading from "./SkillsHeading";

const skillsData = {
  Web: [
    { name: "React", percentage: 90 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "Next.JS", percentage: 75 },
    { name: "Node JS", percentage: 80 },
    { name: "Express JS", percentage: 90 },
    { name: "MongoDB", percentage: 90 },
    { name: "MySQL", percentage: 85 },
  ],
  Others: [
    { name: "Photoshop", percentage: 70 },
    { name: "Figma", percentage: 85 },
    { name: "Illustrator", percentage: 75 },
    { name: "Slack", percentage: 80 },
  ],
  Programming: [
    { name: "JavaScript", percentage: 95 },
    { name: "Python", percentage: 90 },
    { name: "C++", percentage: 85 },
    { name: "C", percentage: 85 },
  ],
  Tools: [
    { name: "Git", percentage: 90 },
    { name: "Github", percentage: 85 },
    { name: "VS Code", percentage: 95 },
    { name: "DevTools", percentage: 80 },
  ],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web");

  return (
    <div id="skills">
      <SkillsHeading />
      <div className="bg-lightNavy text-white py-10 px-5 mb-5 mt-10">
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-start space-x-4 mb-6">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm sm:text-base md:text-lg lg:text-xl ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-lightestNavy hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData[selectedCategory].map((skill) => (
            <div
              key={skill.name}
              className="bg-lightestNavy rounded-lg p-4 flex justify-between items-center"
            >
              <span className="text-lg font-semibold">{skill.name}</span>
              <div className="w-2/3">
                <div className="bg-gray-700 rounded-full h-2 w-full">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm mt-1 inline-block">
                  {skill.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
