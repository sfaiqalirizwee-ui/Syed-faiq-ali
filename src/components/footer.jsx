import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} syed faiq ali</span>
        <span className="muted">Built with React</span>
      </div>
    </footer>
  );
}