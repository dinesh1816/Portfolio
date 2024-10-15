import React from 'react';
import './About.css';
import Footer from './Footer'; // Import Footer

const About = () => (
  <>
    <section className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate software developer with expertise in full-stack development
        and cloud telephony.
      </p>
    </section>
    <Footer /> {/* Add Footer at the bottom */}
  </>
);

export default About;
