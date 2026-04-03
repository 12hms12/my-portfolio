import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="pixel-box" style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}>
        <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>

            <strong>Email:</strong> 
            <a href="mailto:hms12121212fgh@gmail.com" style={{ wordBreak: 'break-all' }}>hms12121212fgh@gmail.com</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>

            <strong>GitHub:</strong> 
            <a href="https://github.com/12hms12" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>github.com/12hms12</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>

            <strong>LinkedIn:</strong> 
            <a href="https://www.linkedin.com/in/harsh12shah/" target="_blank" rel="noopener noreferrer" style={{ wordBreak: 'break-all' }}>linkedin.com/in/harsh12shah/</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
