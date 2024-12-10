import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CertificationCard = ({ title, issuer, link }) => {
  return (
    <div
      className="bg-[#151518] p-4 rounded-lg flex items-center "
    >

      <div>
        <h3 className="text-base font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{issuer}</p>
        <a href={link} target='_blank' className="text-blue-500 text-sm">certificate link</a>

      </div>
    </div>
  );
};

const CertificationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Flutter & Dart - The Complete Guide",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-0fc47d40-f570-4b7d-b832-7fcf6bcc2055/"

    },
    {
      title: "Introduction to Data Science in Python",
      issuer: "Coursera(University of Michigan)",
      link: "https://www.coursera.org/account/accomplishments/certificate/34MEFSLFHHL2"

    },
    {
      title: "Authentication Server using MongoDB and NodeJs",
      issuer: "DevTown",
      link: "https://www.cert.devtown.in/verify/29KgRd"

    }, {
      title: "Real Estate Price Prediction",
      issuer: "DevTown",
      link: "https://www.cert.devtown.in/verify/Z64eLu"

    }, {
      title: "Network Security",
      issuer: "Great Learning",
      link: "https://www.mygreatlearning.com/certificate/IFABEVPS"
    }
  ];

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

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      className="mt-40 px-4"
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-center text-white text-3xl font-bold mb-6">
          <span className="text-purple-500">&lt;</span>
          Certifications
          <span className="text-purple-500">/&gt;</span>
        </h2>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CertificationSection;