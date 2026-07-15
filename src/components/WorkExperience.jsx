import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Pizza Palace",
      position: "Software Developer",
      duration: "Mar 2026 – Present",
      location: "Faisalabad, Pakistan",
      description: "Deployed and managing a custom-built Restaurant Management System in active production use at Pizza Palace. Handling order management, inventory tracking, sales reporting, and receipt generation on a daily basis. Providing ongoing technical support, maintenance, and staff training for smooth business operations.",
      technologies: ["ASP.NET Core Blazor", "C#", "PostgreSQL"],
    },
  ];

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight">Work</span> Experience
        </h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="position">{exp.position}</p>
                </div>
                <div className="experience-meta">
                  <div className="meta-item">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="tech-stack">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
