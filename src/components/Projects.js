import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import g1 from "../assets/g1.jpeg"
import g2 from "../assets/g2.jpeg"
import g3 from "../assets/g3.jpeg"
import g4 from "../assets/g4.jpeg"
import '@fortawesome/fontawesome-free/css/all.min.css';



const projects = [
  {
    name: "E-commerce Grocery App",
    description:
      "Created a Flutter app for online grocery shopping, integrated with Razorpay for payments and Firebase for data management.",
    projType: "app",
    images: [
      g1, g2, g3, g4
    ],
    tech: ["Flutter", "Provider", "Firebase", "Razorpay"],
    link: "https://github.com/SumanthGaneshan/Ecommerce-multi-vendor-grocery-app",
  },
  {
    name: "Chat Application",
    description:
      "Developed a one-to-one chat app using Flutter and Firebase with an attractive, intuitive UI.",
    projType: "app",
    images: [c1, c2, c3, c4],
    tech: ["Flutter", "Provider", "Firebase"],
    link: "https://github.com/SumanthGaneshan/chat-app-flutter",
  },
];

const Projects = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const typeEffect = (text) => {
    let index = 0;
    let data = "";
    const interval = setInterval(() => {
      if (index < text.length) {
        data = data + text[index];
        setTypedText(data);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  const handleProjectClick = (project) => {
    setShowTerminal(true);
    setSelectedProject(project);
    setTypedText("");
    const command = `>> showProject("${project.name}")`;
    typeEffect(command);
  };

  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="text-green-400 font-mono px-4 mt-40">
      <div className="max-w-4xl mx-auto">
      <h2 className="text-center text-white text-3xl font-bold mb-6">
        <span className="text-purple-500">&lt;</span>
        Projects
        <span className="text-purple-500">/&gt;</span>
      </h2>

        {/* Project Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#121214] text-white p-6 rounded-lg shadow-lg w-60 cursor-pointer hover:scale-105 transform transition"
              onClick={() => handleProjectClick(project)}
            >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm text-gray-400 mt-2">
                Click to view details
              </p>
            </motion.div>
          ))}
        </div>

        {/* Terminal View */}
        {showTerminal && selectedProject && (
          <div className="border border-gray-700 rounded-lg p-6 mt-8 shadow-lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="whitespace-pre-wrap"
            >
              {typedText}
            </motion.div>
            {typedText.includes(selectedProject.name) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-4 text-white"
              >
                {/* Carousel Section */}
                <div className="mt-4">
                  <Slider {...carouselSettings}>
                    {selectedProject.images.map((image, idx) => (

                      <img
                        key={idx}
                        src={image}
                        alt={`Screenshot ${idx + 1}`}
                        className="h-[400px] my-1 w-auto object-contain rounded-lg shadow-lg"
                      />
                    ))}
                  </Slider>
                </div>
                <h3 className="text-2xl mt-4">{selectedProject.name}</h3>
                <p className="text-gray-300 mt-2">
                  Description: {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mt-4">
                  <h4 className="text-base text-green-400">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gray-800 text-white py-2 px-6 rounded-lg text-sm font-semibold hover:bg-gray-800 transition duration-300"
                >
                  <i className="fab fa-github mr-2"></i> View on GitHub
                </a>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
