import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Management System (Web)",
      description: "Full-stack web application for managing restaurant operations including order management, menu handling, and real-time updates using Blazor Server.",
      tech: ["Blazor Server", "C#", ".NET 8", "PostgreSQL", "Entity Framework Core"],
      category: "Web App",
      status: "Completed",
      github: "https://github.com/MuhammadAhmad830/RestaurantManagementSystem-Web",
      liveDemo: "https://pizzapalace-demo.com"
    },
    {
      title: "Restaurant Management System (Desktop)",
      description: "Desktop application with role-based access, inventory tracking, billing system, and comprehensive reporting dashboard.",
      tech: ["C#", "WinForms", ".NET", "SQL Server"],
      category: "Desktop App",
      status: "Completed",
      github: "https://github.com/MuhammadAhmad830/RestaurantManagementSystem-Desktop"
    },
    {
      title: "Second Brain ChatBot",
      description: "AI-powered productivity chatbot with task capture, audio transcription, and intelligent task classification. Built with FastAPI backend and Groq LLM integration for context-aware responses.",
      tech: ["Python", "FastAPI", "Groq API", "OpenAI Whisper", "Uvicorn"],
      category: "AI/ML",
      status: "Completed",
      github: "https://github.com/MuhammadAhmad830/SecondBrainChatBot"
    },
    {
      title: "Facial Recognition Attendance System",
      description: "Automated attendance system using facial recognition technology. Captures and identifies faces in real-time for marking attendance.",
      tech: ["Python", "OpenCV", "Deep Learning", "NumPy"],
      category: "AI/ML",
      status: "Completed",
      github: "https://github.com/MuhammadAhmad830/FacialRecognitionSystem"
    }
  ];

  return (
    <section className="projects-section section" id="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-tag">&lt;</span>
          Projects
          <span className="title-tag">/&gt;</span>
        </h2>
        <p className="section-subtitle">Things I've built</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer" className="project-link">
                    🚀 Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
