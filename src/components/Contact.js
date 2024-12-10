import React from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    question: "How can I email you?",
    answer: "You can email me at sumanthganeshan@gmail.com",
  },
  {
    question: "What’s your LinkedIn?",
    answer: (
      <div className="flex items-center justify-center gap-2 flex-wrap">
        Connect with me on
        <a
          href="https://www.linkedin.com/in/sumanth-ganeshan/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 max-w-fit text-white px-3 py-2 rounded-full flex items-center "
        >
          <i className="fab fa-linkedin text-base"></i> LinkedIn
        </a>
      </div>
    ),
  },
  {
    question: "Where can I see your work?",
    answer: (
      <div className="flex items-center justify-center gap-2 flex-wrap">
        Check out my
        <a
          href="https://github.com/SumanthGaneshan"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 max-w-fit text-white px-3 py-2 rounded-full flex items-center"
        >
          <i className="fab fa-github text-base"></i> GitHub
        </a>
      </div>
    ),
  },
];

const chatBubbleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <div className="text-white font-mono mt-40 px-4">
      <h2 className="text-center text-4xl font-bold mb-8">
        <h2 className="text-center text-white text-3xl font-bold mb-6">
          <span className="text-purple-500">&lt;</span>
          Contact
          <span className="text-purple-500">/&gt;</span>
        </h2>
      </h2>

      {/* Make the container take only the width of content */}
      <div className="max-w-2xl mx-auto border border-gray-700 rounded-lg shadow-lg">
        {/* Chat UI */}
        <div className="p-4 space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="space-y-4">
              {/* User Question (left-aligned) */}
              <motion.div
                className="bg-purple-500 text-sm max-w-fit text-white rounded-full px-4 py-2 "
                initial="hidden"
                animate="visible"
                variants={chatBubbleVariants}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                {info.question}
              </motion.div>

              {/* Reply (right-aligned) */}
              <motion.div
                className="text-white text-sm text-center rounded-full bg-[#151518] p-3 max-w-fit ml-auto shadow-lg break-words whitespace-pre-wrap"
                initial="hidden"
                animate="visible"
                variants={chatBubbleVariants}
                transition={{ duration: 0.3, delay: index * 0.3 }}
              >
                {info.answer}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
