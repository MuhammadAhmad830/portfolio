import React from 'react';
import { FaCode, FaRobot, FaDatabase, FaDesktop } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Full Stack Web Development",
      description: "Building modern, responsive web applications using .NET 8, Blazor, React, and Node.js with clean architecture and best practices.",
    },
    {
      icon: <FaRobot />,
      title: "Gen AI Development",
      description: "Developing AI-powered applications using generative models, prompt engineering, and advanced AI integration techniques.",
    },
    {
      icon: <FaDatabase />,
      title: "Agentic AI Development",
      description: "Building autonomous AI agents with decision-making capabilities, context awareness, and multi-step task orchestration.",
    },
    {
      icon: <FaDesktop />,
      title: "Desktop Application Development",
      description: "Creating Windows desktop applications with C# and .NET Framework including inventory systems, POS, and management tools.",
    },
  ];

  return (
    <section id="services" className="section services-section">
      <h2 className="section-title">
        &lt;<span>Services</span>/&gt;
      </h2>
      <p className="section-subtitle">What I can do for you</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
