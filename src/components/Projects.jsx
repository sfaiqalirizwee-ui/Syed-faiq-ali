import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const card = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i },
  }),
};

export default function Projects() {
  return (
    <div className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="card"
              variants={card}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>

              <div className="tech">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="card-actions">
                <a className="link" href={p.live} target="_blank" rel="noreferrer">Live</a>
                <a className="link" href={p.code} target="_blank" rel="noreferrer">Code</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
