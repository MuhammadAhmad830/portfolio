import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "React.js", level: 75 },
      { name: "Blazor", level: 85 },
      { name: "Bootstrap", level: 85 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "C#/.NET", level: 90 },
      { name: "Node.js", level: 70 },
      { name: "Python", level: 80 },
      { name: "ASP.NET Core", level: 85 },
    ]
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "SQL Server", level: 80 },
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 65 },
    ]
  },
  {
    category: "AI & ML",
    skills: [
      { name: "LLM Integration", level: 75 },
      { name: "RAG Systems", level: 70 },
      { name: "Computer Vision", level: 70 },
      { name: "NLP", level: 65 },
    ]
  },
  {
    category: "Agentic AI & Gen AI",
    skills: [
      { name: "Agentic AI Systems", level: 80 },
      { name: "Gen AI Development", level: 85 },
      { name: "OpenAI/Claude APIs", level: 85 },
      { name: "AI Prompt Engineering", level: 80 },
    ]
  },
  {
    category: "AI APIs & Frameworks",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Groq API", level: 80 },
      { name: "OpenAI Whisper", level: 75 },
      { name: "Uvicorn", level: 80 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <h2 className="section-title">
          My <span className="highlight">Skills</span>
        </h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
