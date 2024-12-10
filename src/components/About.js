import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Smartphone,
    Code,
    BookOpen
} from 'lucide-react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const technologies = [
        {
            icon: <Smartphone className="w-10 h-10 text-blue-400" />,
            name: "Mobile Dev",
        },
        {
            icon: <Code className="w-10 h-10 text-green-400" />,
            name: "Web Dev",
        },
    ];

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="container mx-auto max-w-4xl px-3"
        >
            <h2 className="text-center text-white text-3xl font-bold mb-6 flex items-center justify-center">
                <span className="text-purple-500 mr-2">&lt;</span>
                About Me
                <span className="text-purple-500 ml-2">/&gt;</span>
            </h2>

            <motion.div
                variants={cardVariants}
                className="bg-[#151518] rounded-lg p-8 shadow-2xl"
            >
                <div>
                    {/* Text Description */}
                    <div className="text-white space-y-6">
                        <p className="text-base text-gray-300 leading-relaxed">
                            Hey there! I'm <span className="text-purple-400 font-semibold">Sumanth Ganeshan</span>, a Software Developer with 1 year of hands-on experience in Flutter and Dart, specializing in building high-quality mobile applications. Alongside mobile app development, I am also proficient in web development, with expertise in React JS, Redux Toolkit, HTML, CSS, JavaScript, Node.js, Express, and MongoDB.
                        </p>
                        <p className="text-base text-gray-300 leading-relaxed">
                            I'm passionate about creating innovative solutions, dedicated to continuous learning, and committed to delivering high-quality work that exceeds expectations.
                        </p>
                        <div className="flex items-center space-x-2 text-yellow-400">
                            <BookOpen className="w-4 h-4" />
                            <span className="text-sm">Currently diving deep into Data Structures and Algorithms</span>
                        </div>
                    </div>

                    {/* Technologies Grid */}
                    <div className="grid grid-cols-2 gap-4 mt-3">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="bg-[#1b1b1f] p-4 rounded-xl flex flex-col items-center text-center"
                            >
                                {tech.icon}
                                <h3 className="text-white mt-2 font-semibold">{tech.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default About;