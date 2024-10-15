import React from 'react';
import './Home.css';
import Footer from './Footer';

const Home = () => (
  <>
    <section className="home" id="home">
    <div className="home-content">
      <h1>Hello, I’m Sai Dineshchandra Devisetti</h1>
      <p>A passionate full-stack developer focusing on software development, ML, and cloud telephony.</p>
      <button className="cta-btn">Explore My Work</button>
    </div>
  </section>
  <Footer /> {/* Add Footer at the bottom */}
  </>
);

export default Home;
