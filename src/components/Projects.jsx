import React, { useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'PCAPANA', 
      desc: [
        'CLI Tool to analyze network capture(.pcap) files',
        'analyzes visited domains, bandwidth consumption & protocol usage',
        'HTML report in tabular form',
        'Published as a python package on PyPI'
      ],
      source: 'https://pypi.org/project/pcapana/'
    },
    { 
      id: 2, 
      title: 'Ledgerly', 
      desc: [
        'Cross platform expense tracker app using React Native',
        'Firebase for Authentication & MongoDB for real time storage',
        'Graphs for category wise spending for better financial insights',
      ],
      source: 'https://github.com/12hms12/expense-tracker'
    },
    { 
      id: 3, 
      title: 'Fluxpay', 
      desc: [
        'Description pointer 1',
        'Description pointer 2',
        'Description pointer 3',
        'Description pointer 4'
      ],
      source: '#' 
    },
    { 
      id: 4, 
      title: 'Project Four', 
      desc: [
        'Description pointer 1',
        'Description pointer 2',
        'Description pointer 3',
        'Description pointer 4'
      ],
      source: '#' 
    },
  ];

  const scrollRef = useRef(null);

  const scrollAction = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 330;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-wrapper">
        <button className="pixel-btn nav-btn" onClick={() => scrollAction('left')}>&lt;</button>
        
        <div className="horizontal-scroller-container" ref={scrollRef}>
          <div className="horizontal-scroller">
            {projects.map((proj) => (
              <div key={proj.id} className="pixel-box project-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <h3>{proj.title}</h3>
                
                {Array.isArray(proj.desc) ? (
                  <ul style={{ paddingLeft: '20px', listStyleType: 'square', textAlign: 'left', lineHeight: '1.6', fontSize: '0.9rem', flexGrow: 1 }}>
                    {proj.desc.map((point, index) => (
                      <li key={index} style={{ marginBottom: '8px' }}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ flexGrow: 1 }}>{proj.desc}</p>
                )}

                {proj.source && (
                  <div style={{ marginTop: 'auto' }}>
                    <a href={proj.source} target="_blank" rel="noopener noreferrer" className="pixel-btn" style={{ display: 'inline-block', marginTop: '20px', fontSize: '0.8rem' }}>
                      View Source
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button className="pixel-btn nav-btn" onClick={() => scrollAction('right')}>&gt;</button>
      </div>
    </section>
  );
};

export default Projects;
