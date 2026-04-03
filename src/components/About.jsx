import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="pixel-box">
        <p style={{ marginBottom: '15px' }}>
          Hello! I am Harsh, a curious developer passionate about
        </p>
        <ul style={{ paddingLeft: '40px', listStyleType: 'square', lineHeight: '2' }}>
          <li>Solving Problems & Puzzles</li>
          <li>Building cool stuff</li>
          <li>AI & it's applications</li>
          <li>Learning about Microprocessors & Sensors</li>
        </ul>

        <br />
        <p>
          I am also interested in
        </p>
        <ul style={{ paddingLeft: '40px', listStyleType: 'square', lineHeight: '2' }}>
          <li>Solving Sudokus & playing Matiks</li>
          <li>Reading news/books</li>
          <li>Personal Finance</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
