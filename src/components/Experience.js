// src/components/Experience.js
import React from 'react';
import './Experience.css';
import Footer from './Footer';

const Experience = () => (
  <>
  <section className="experience" id="experience">
    <h2>Experience</h2>
    <div className="job">
      <h3>Software Development Engineer</h3>
      <h4>Ten20InfoMedia</h4>
      <p>
        Developed core features for Alohaa cloud telephony platform, improving call routing efficiency.
        Gained experience working with Node.js, MongoDB, and Docker.
      </p>
    </div>
    <div className="job">
      <h3>Internship - Software Development</h3>
      <h4>Office Administration & Cloud Apps</h4>
      <p>
        Assisted in software development and office administration, enhancing organizational and technical skills.
      </p>
    </div>
  </section>
  <Footer /> {/* Add Footer at the bottom */}
  </>
);

export default Experience;
