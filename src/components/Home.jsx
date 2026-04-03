import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section" style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div className="home-content" style={{ textAlign: 'center' }}>
        <h1 className="hero-title">Hello!</h1>
        <h1 className="hero-subtitle">I am Harsh</h1>
      </div>
    </section>
  );
};

export default Home;
