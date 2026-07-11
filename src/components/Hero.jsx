import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "React JS Developer", "UI Animator"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1200,
  });

  return (
    <div className="section hero">
      <div className="container hero-grid">
        <div>
          <motion.p
            className="kicker"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Assalam-o-Alaikum, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            syed faiq ali
          </motion.h1>

          <motion.h2
            className="subtitle"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {text}
            <Cursor cursorStyle="|" />
          </motion.h2>

          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
           I build responsive and modern web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS.
Currently looking for Frontend Developer Internship opportunities.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="#contact">Hire Me</a>
          </motion.div>
        </div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="blob" />
          <div className="hero-mini">
            <p className="small">Available for Freelance</p>
            <p className="small">React • Animations • UI</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}