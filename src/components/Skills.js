import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "HTML & CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" mt-40">
      <h2 className="text-center text-white text-3xl font-bold mb-6">
        <span className="text-purple-500">&lt;</span>
        Technical Skills
        <span className="text-purple-500">/&gt;</span>
      </h2>
      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 gap-1 md:px-16 max-w-7xl m-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 hover:shadow-lg transition-shadow duration-200 bg-[#151518]"
            variants={itemVariants}
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="h-10 w-10 mb-4"
            />
            <p className="text-white text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
