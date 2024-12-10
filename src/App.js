import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Certification from './components/Certification';
import { motion } from 'framer-motion';
import Footer from './components/Footer';
import Experience from './components/Expierence';
import About from './components/About';

function App() {

  return (
    <div className="min-h-screen  text-white">
      {/* <Navbar /> */}
      <div className="fixed top-0 right-0 flex justify-end items-center z-50 p-4">
        <a
          href="https://github.com/SumanthGaneshan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mx-2 hover:text-gray-400 transition"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sumanth-ganeshan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl mx-2 hover:text-gray-400 transition"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <CodeBackground />
      {/* <AnimatedGradientBackground/> */}
      <main className="">
        <Hero />
        <About/>
        <Experience />
        <Skills />
        
        <Education />
        <Projects />
        <Certification />
        <Contact />

      </main>
      <Footer />


    </div>
  );
}



export default App;


const CodeBackground = () => {
  const generateCodeElements = () => {
    const elements = [];
    const codeSnippets = [
      '</>',
      '{ }',
      '[ ]',
      '/* */',
      '->',
      '=>',
      '==',
      '===',
      '&&',
      '||',
      'function',
      'const',
      'return',
      'import',
      'export'
    ];

    for (let i = 0; i < 100; i++) {
      const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

      elements.push(
        <div
          key={i}
          className="absolute text-white text-opacity-5 select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            transform: `rotate(${Math.random() * 40 - 20}deg)`,
            userSelect: 'none'
          }}
        >
          {snippet}
        </div>
      );
    }
    return elements;
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] font-mono">
      {generateCodeElements()}
    </div>
  );
};
