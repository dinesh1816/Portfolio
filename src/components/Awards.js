import React from 'react';
import './Awards.css';
import Footer from './Footer';

const Awards = () => (
  <>
  <section className="awards" id="awards">
    <h2>Awards & Achievements</h2>
    <ul className="awards-list">
      <li>
        <h3>4 Stars in Problem Solving</h3>
        <p>Achieved 4-star rating on HackerRank for outstanding problem-solving skills.</p>
      </li>
      <li>
        <h3>2nd Place in Web Development Competition</h3>
        <p>Secured second place in a college-level competition for developing an e-commerce platform.</p>
      </li>
      <li>
        <h3>Best Intern Award</h3>
        <p>Recognized as the best intern at Ten20InfoMedia for exceptional performance in software development.</p>
      </li>
    </ul>
  </section>
  <Footer /> {/* Add Footer at the bottom */}
  </>
);

export default Awards;
