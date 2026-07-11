import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        <motion.p
          className="lede"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
        I am a passionate Frontend Developer currently learning React.js and modern web development. 
I enjoy building responsive and user-friendly websites. 
I am improving my skills daily by creating projects and uploading them on GitHub.
        </motion.p>

        <div className="pills">
          <span className="pill">React</span>
          <span className="pill">Next.js</span>
          <span className="pill">Framer Motion</span>
          <span className="pill">Tailwind/CSS</span>
        </div>
      </div>
    </div>
  );
}