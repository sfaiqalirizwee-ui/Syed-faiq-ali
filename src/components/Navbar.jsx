import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={"nav " + (scrolled ? "nav-scrolled" : "")}
    >
      <div className="nav-inner">
        <div className="brand" onClick={() => go("home")}>
          syed faiq ali
        </div>

        <nav className="nav-links">
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("projects")}>Projects</button>
          <button onClick={() => go("contact")}>Contact</button>
        </nav>
      </div>
    </motion.header>
  );
}