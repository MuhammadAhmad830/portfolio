import React from 'react';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './About.css';

const About = () => {
  const codeLines = [
    { type: 'comment', content: '// Muhammad Ahmad — Full Stack | Gen AI | Agentic AI Developer' },
    { type: 'empty', content: '' },
    { type: 'keyword', content: 'const', variable: ' aboutMe', operator: ' = ', bracket: '{' },
    { type: 'property', key: '  location', value: '"Faisalabad, Pakistan"' },
    { type: 'property', key: '  university', value: '"UET Lahore (4th Semester)"' },
    { type: 'property', key: '  role', value: '"Software Developer @ Pizza Palace"' },
    { type: 'property', key: '  expertise', value: '["Full Stack", "Gen AI", "Agentic AI", "FastAPI"]' },
    { type: 'property', key: '  passion', value: '"Building AI-powered solutions that solve real problems"' },
    { type: 'property', key: '  mindset', value: '"Learner | Problem Solver | Innovator"' },
    { type: 'property', key: '  availability', value: '"Open to freelance & internships"' },
    { type: 'bracket', content: '};' },
  ];

  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">
        &lt;<span>About</span>/&gt;
      </h2>

      <div className="about-container">
        <div className="about-editor">
          <div className="editor-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="editor-title">about-me.js</span>
          </div>
          <div className="editor-body">
            {codeLines.map((line, i) => (
              <div key={i} className="code-line">
                <span className="line-number">{i + 1}</span>
                {line.type === 'comment' && (
                  <span className="code-comment">{line.content}</span>
                )}
                {line.type === 'empty' && <span>&nbsp;</span>}
                {line.type === 'keyword' && (
                  <span>
                    <span className="code-keyword">{line.content}</span>
                    <span className="code-variable">{line.variable}</span>
                    <span className="code-operator">{line.operator}</span>
                    <span className="code-bracket">{line.bracket}</span>
                  </span>
                )}
                {line.type === 'property' && (
                  <span>
                    <span className="code-key">{line.key}</span>
                    <span className="code-operator">: </span>
                    <span className="code-string">{line.value}</span>
                    <span className="code-operator">,</span>
                  </span>
                )}
                {line.type === 'bracket' && (
                  <span className="code-bracket">{line.content}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="about-info">
          <h3>Who Am I?</h3>
          <p>
            I'm a passionate Computer Science student at UET Lahore with hands-on
            experience building production-ready applications. Currently working as
            a Software Developer at Pizza Palace, where I've deployed a full
            Restaurant Management System handling daily operations.
          </p>
          <p>
            I love integrating AI into real-world apps and constantly exploring
            new technologies. From full-stack web development to LLM-powered
            assistants — I build things that make a difference.
          </p>

          <div className="about-cards">
            <div className="info-card">
              <FaGraduationCap className="info-icon" />
              <div>
                <h4>Education</h4>
                <p>BS CS — UET Lahore</p>
              </div>
            </div>
            <div className="info-card">
              <FaBriefcase className="info-icon" />
              <div>
                <h4>Experience</h4>
                <p>Software Dev @ Pizza Palace</p>
              </div>
            </div>
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Faisalabad, Pakistan</p>
              </div>
            </div>
            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>muhammadahmadcs830@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
