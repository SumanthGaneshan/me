import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';

const EducationCard = ({ institution, duration, degree, cgpa }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className="bg-[#151518] rounded-lg p-4 flex items-center relative overflow-hidden"
    >

      <div className="flex-grow">
        <h3 className="text-lg font-bold text-white">
          {degree}
        </h3>
        <p className="text-gray-400 flex text-sm items-center mt-1">
          <BookOpen size={16} className="mr-2 text-gray-500" />
          {institution}
        </p>
        <p className="text-sm text-gray-400 flex items-center mt-0.5">
          <Calendar size={16} className="mr-2 text-gray-600" />
          {duration}
        </p>
        <p className="text-sm text-gray-400 flex items-center mt-0.5">
          <Award size={16} className="mr-2 text-gray-600" />
          CGPA - {cgpa}
        </p>
      </div>
    </motion.div>
  );
};

const EducationSection = () => {
  const educations = [
    {
      institution: "SIES College of Arts, Science & Commerce",
      duration: "Aug 2020 - Jun 2023",
      degree: "Bachelor of Science, Computer Science",
      cgpa: "9.3/10",
    }
  ];

  return (
    <section className="mt-40 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-center text-white text-3xl font-bold mb-6">
          <span className="text-purple-500">&lt;</span>
          Education
          <span className="text-purple-500">/&gt;</span>
        </h2>

        <div className="space-y-6">
          {educations.map((edu, index) => (
            <div key={index}>
              <EducationCard {...edu} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;