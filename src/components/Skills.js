import React from 'react';
import './Skills.css';
import Footer from './Footer';

const Skills = () => (
  <>
  <section className="skills" id="skills">
    <h2>Technical Skills</h2>
    <div className="skills-grid">
      <div className="skill-category">
        <h3>Programming Languages</h3>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>C</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3>Frameworks & Libraries</h3>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Flutter</li>
          <li>Express.js</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3>Tools & Technologies</h3>
        <ul>
          <li>Docker</li>
          <li>MongoDB</li>
          <li>RabbitMQ</li>
          <li>Cloud Telephony</li>
        </ul>
      </div>
      <div className="skill-category">
        <h3>Soft Skills</h3>
        <ul>
          <li>Problem Solving</li>
          <li>Teamwork</li>
          <li>Time Management</li>
          <li>Microsoft Office Suite</li>
        </ul>
      </div>
    </div>
  </section>
  <Footer /> {/* Add Footer at the bottom */}
  </>
);

export default Skills;
