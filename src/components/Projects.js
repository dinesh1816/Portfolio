import React from 'react';
import './Projects.css';
import Footer from './Footer';

const projects = [
  { title: 'Quickern', description: 'Mobile quiz app developed with Flutter.', tech: 'Flutter' },
  { title: 'Brain Tumor Detection', description: '96% accuracy ML classifier.', tech: 'Python, TensorFlow' },
  { title: 'ICU Readmission Prediction', description: 'Built with Logistic Regression.', tech: 'Python, Flask' },
  { title: 'Real-Time Chat App', description: 'Node.js, RabbitMQ, Docker.', tech: 'Node.js, MongoDB' }
];

const Projects = () => (
  <>
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="project-list">
      {projects.map((project) => (
        <div className="project-card" key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.tech}</p>
        </div>
      ))}
    </div>
  </section>
  <Footer /> {/* Add Footer at the bottom */}
  </>
);

export default Projects;
