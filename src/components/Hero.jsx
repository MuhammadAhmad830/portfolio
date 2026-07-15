import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></span>
        ))}
      </div>

      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">
          Muhammad <span className="highlight">Ahmad</span>
        </h1>
        <div className="hero-typewriter">
          <span className="typewriter-text">Full Stack | Gen AI | Agentic AI Developer</span>
        </div>
        <p className="hero-description">
          CS Student at UET Lahore | Building AI-powered applications with .NET, React, LLMs & Agentic Systems
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Go</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">12+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat">
            <span className="stat-number">1+</span>
            <span className="stat-label">Year Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-window">
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="code-title">developer.js</span>
          </div>
          <pre className="code-body">
{`const ahmad = {
  roles: ["Full Stack", "Gen AI", "Agentic AI"],
  university: "UET Lahore",
  skills: ["C#", ".NET", "React",
           "Python", "LLM", "RAG"],
  passion: "Building AI-powered systems",
  status: "Open to opportunities"
};`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
