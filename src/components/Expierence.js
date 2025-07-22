import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import t7eLogo from "../assets/t7e_logo.png";
import fivepaisaLogo from "../assets/fivePaisaLogo.png";


const experiences = [
  {
    title: "Flutter Developer (MT)",
    company: "5paisa Capital Ltd",
    logo: fivepaisaLogo,
    type: "Full-time - Mumbai",
    duration: "Jan 2025 to Jul 2025",
    description: [
      "Implemented the Position Grouping feature in the trading app, allowing users to organize positions by underlying or expiry, improving overall portfolio clarity.",
      "Improved the Mutual Fund payment flow by integrating UPI Intent for faster and more seamless transactions.",
      "Utilized Firebase Remote Config to dynamically control UI element visibility and ordering; integrated CleverTap to track user actions and support analytics-driven decisions.",
      "Led typography standardization across the app, resolved multiple UI inconsistencies, and enhanced overall design coherence.",
      "Developed features using Bloc with a repository-based architecture for robust state management and modular code structure.",
      "Maintained codebase and tracked tasks using Team Foundation Server (TFS) for version control and project management"
    ],
    technologies: ["Flutter", "Bloc", "dio", "Firebase", "Clevertap", "Postman", "TFS",],
  },
  {
    title: "Flutter Developer",
    company: "T7E Aftermarket Connect Pvt Ltd",
    logo: t7eLogo,
    type: "Full-time - Mumbai",
    duration: "Oct 2023 to Oct 2024",
    description: [
      "Worked on multiple mobile apps that are published on the Play Store and App Store, with most exceeding 1,000 downloads and some between 50,000 and 100,000 downloads.",
      "Improved user experience by seamlessly integrating advanced features like Google Maps and OCR. Also implemented Firebase for push notifications and analytics to enhance engagement and insights.",
      "Enhanced data security by implementing encryption protocols for API communication.",
      "Translated Figma design prototypes into responsive Flutter applications.",
      "Collaborated using Git, Bitbucket, and Jira, with daily stand-ups and sprint-based work schedules.",
    ],
    technologies: ["Flutter", "Kotlin", "GetX", "dio", "Postman", "Git", "Bitbucket", "Jira"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const parallaxVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="mt-40 px-4 md:px-8 lg:px-16">
      <h2 className="text-center text-white text-3xl font-bold mb-6">
        <span className="text-purple-500">&lt;</span>
        Professional Experience
        <span className="text-purple-500">/&gt;</span>
      </h2>
      <div className="relative mx-auto w-full max-w-4xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Timeline */}
          <div className="relative border-l border-gray-600 pl-4 sm:pl-6 lg:pl-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 bg-white w-4 h-4 rounded-full border-2 border-gray-600"></div>

                {/* Content */}
                <motion.div
                  variants={parallaxVariants}
                  className="p-4 sm:p-6 lg:p-8 rounded-lg shadow-md bg-[#121214]"
                >
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-7 h-7 object-contain rounded-sm"
                    />
                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl font-medium">
                      {exp.company} - {exp.type}
                    </p>
                  </div>
                  <p className="text-gray-500 mt-2 text-sm sm:text-base lg:text-lg">{exp.duration}</p>
                  <ul className="text-gray-300 mt-4 space-y-2 list-disc list-inside text-sm sm:text-base">
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <h4 className="text-gray-400 text-xs sm:text-sm lg:text-base uppercase">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs sm:text-sm lg:text-base"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
