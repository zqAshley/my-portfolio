import React, { useState } from 'react';
import './App.css';

// === Image Imports ===
import cyc00 from './assets/cyclopes/00.png';
import cyc01 from './assets/cyclopes/01.png';
import cyc02 from './assets/cyclopes/02.png';
import cyc03 from './assets/cyclopes/03.png';
import cyc04 from './assets/cyclopes/04.png';
import cyc05 from './assets/cyclopes/05.png';
import cyc06 from './assets/cyclopes/06.png';
import cyc07 from './assets/cyclopes/07.png';

import mira01 from './assets/mira/01.png';
import mira02 from './assets/mira/02.png';
import mira03 from './assets/mira/03.png';
import mira04 from './assets/mira/04.png';
import mira05 from './assets/mira/05.png';
import mira06 from './assets/mira/06.png';
import mira07 from './assets/mira/07.png';
import mira08 from './assets/mira/08.png';
import mira09 from './assets/mira/09.png';
import mira10 from './assets/mira/10.png';
import mira11 from './assets/mira/11.png';
import mira12 from './assets/mira/12.png';
import mira13 from './assets/mira/13.png';

import el01 from './assets/elchk/01.png';
import el02 from './assets/elchk/02.png';
import el03 from './assets/elchk/03.png';
import el04 from './assets/elchk/04.png';
import el05 from './assets/elchk/05.png';
import el06 from './assets/elchk/06.png';
import el07 from './assets/elchk/07.png';
import el08 from './assets/elchk/08.png';
import el09 from './assets/elchk/09.png';
import el10 from './assets/elchk/10.png';
import el11 from './assets/elchk/11.png';
import el12 from './assets/elchk/12.png';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="portfolio-container">
      <div className="floating-bg">
        <div className="shape circle-1"></div>
        <div className="shape circle-2"></div>
        <div className="shape circle-3"></div>
      </div>

      <nav>
        <div className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>ZQ.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="slide-container hero-slide" id="hero">
        <h1>Zeng Qing <span className="wave-emoji">👋</span></h1>
        <p className="subtitle">Digital Product & UI/UX Designer ✨</p>
        <p style={{ maxWidth: '600px', marginBottom: '40px', color: 'var(--text-muted)' }}>
          5 years of experience in crafting intuitive, human-centered digital experiences. 
          Blending psychological insights with modern aesthetics.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn" style={{ background: 'white', color: 'var(--primary)', border: '2px solid var(--primary)' }}>Get in Touch</a>
        </div>
      </div>

      {/* About Section */}
      <div className="slide-container" id="about">
        <h2 className="slide-title">Core Competencies</h2>
        <div className="grid-2">
          <div>
            <p style={{ fontSize: '18px', marginBottom: '25px' }}>
              Passionate about solving complex problems through elegant design. I focus on creating seamless user journeys that drive business results and user satisfaction. 🚀
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span className="tag tag-blue"><i className="fa-solid fa-pen-nib"></i> UI Design</span>
              <span className="tag tag-purple"><i className="fa-solid fa-users-viewfinder"></i> UX Research</span>
              <span className="tag tag-yellow"><i className="fa-solid fa-mobile-screen"></i> Prototyping</span>
              <span className="tag tag-coral"><i className="fa-solid fa-cube"></i> 3D Modeling</span>
              <span className="tag tag-green"><i className="fa-solid fa-layer-group"></i> Design Systems</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="about-card">
              <div style={{ width: '56px', height: '56px', background: '#e0f2fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                <i className="fa-solid fa-pen-ruler" style={{ fontSize: '24px', color: 'var(--primary)' }}></i>
              </div>
              <h4>Visual Design</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '5px' }}>High-fidelity UI and interactive prototypes using Figma & Sketch.</p>
            </div>
            <div className="about-card">
              <div style={{ width: '56px', height: '56px', background: '#f3e8ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                <i className="fa-solid fa-vial" style={{ fontSize: '24px', color: '#9333ea' }}></i>
              </div>
              <h4>UX Testing</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '5px' }}>Conducting usability tests to validate and iterate design concepts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="slide-container" id="experience">
        <h2 className="slide-title">Career Journey</h2>
        <div className="exp-item">
          <span>2023.09 - 2025.08</span>
          <h3>UI/UX Designer @ HSBC Global</h3>
          <p>Led the design for Abacus Mobile. Managed end-to-end product lifecycles from stakeholder research to final developer handoff.</p>
        </div>
        <div className="exp-item">
          <span>2022.02 - 2025.02</span>
          <h3>Senior UI Designer @ Green Tomato Software</h3>
          <p>Redesigned core mobile modules and established a comprehensive design system for rapid product scaling.</p>
        </div>
        <div className="exp-item">
          <span>2020.08 - 2022.01</span>
          <h3>Visual Designer @ Hanxiang Pictures</h3>
          <p>Focused on digital marketing visual storytelling and community engagement strategies.</p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="slide-container" id="projects">
        <h2 className="slide-title">Featured Work</h2>
        <div className="projects-grid">
          <div className="project-card" onClick={() => openModal('cyclopes')}>
            <div className="project-img"><img src={cyc07} alt="Cyclopes Cover" /></div>
            <div className="project-info">
              <h3>Cyclopes Portal <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '12px', marginLeft: '5px', color: 'var(--primary)' }}></i></h3>
              <p>A B2B recruitment ecosystem connecting talents with global employers.</p>
            </div>
          </div>
          <div className="project-card" onClick={() => openModal('mira')}>
            <div className="project-img"><img src={mira07} alt="Mira Cover" /></div>
            <div className="project-info">
              <h3>Mira Mall App <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '12px', marginLeft: '5px', color: 'var(--primary)' }}></i></h3>
              <p>A smart shopping mall app design focusing on personalized O2O experiences.</p>
            </div>
          </div>
          <div className="project-card" onClick={() => openModal('elchk')}>
            <div className="project-img"><img src={el02} alt="ELCHK Cover" /></div>
            <div className="project-info">
              <h3>ELCHK Charity <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '12px', marginLeft: '5px', color: 'var(--primary)' }}></i></h3>
              <p>A responsive charity platform serving as a "Daddy Long Legs" safe space for youth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="slide-container" id="education">
        <h2 className="slide-title">Education</h2>
        <table>
          <thead>
            <tr>
              <th>University</th>
              <th>Degree</th>
              <th>Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Monash University</strong></td>
              <td>Master of Interaction Design</td>
              <td>2020 - 2021</td>
            </tr>
            <tr>
              <td><strong>Huaibei Normal University</strong></td>
              <td>Bachelor of Applied Psychology</td>
              <td>2014 - 2018</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Reverted Contact Section (First Version Style) */}
      <div className="slide-container" id="contact" style={{ textAlign: 'center', alignItems: 'center' }}>
        <h2 style={{ fontSize: '56px', marginBottom: '20px', color: 'var(--primary)' }}>Let's Collaborate.</h2>
        <p style={{ fontSize: '20px', color: 'var(--text-muted)', marginBottom: '50px' }}>
          Open to full-time opportunities or creative project partnerships.
        </p>
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontWeight: '700', fontSize: '12px', color: 'var(--primary)', textTransform: 'uppercase' }}>Email Me</p>
            <p style={{ fontSize: '22px' }}>961282846@qq.com</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontWeight: '700', fontSize: '12px', color: 'var(--primary)', textTransform: 'uppercase' }}>Call Me</p>
            <p style={{ fontSize: '22px' }}>+86 136 5882 9938</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontWeight: '700', fontSize: '12px', color: 'var(--primary)', textTransform: 'uppercase' }}>Location</p>
            <p style={{ fontSize: '22px' }}>Kunming, China</p>
          </div>
        </div>
        <p style={{ marginTop: '100px', fontSize: '14px', color: '#94a3b8' }}>&copy; 2026 ZQ. Designed with heart.</p>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="modal-close" onClick={closeModal}><i className="fa-solid fa-xmark"></i></button>
              
              {activeModal === 'cyclopes' && (
                <>
                  <h2 className="modal-title">Cyclopes Recruitment Platform</h2>
                  <p className="modal-desc">A comprehensive recruitment platform tailored specifically for international students and global employers. Responsive design for seamless cross-device experiences.</p>
                  <div className="modal-tags">
                    <span className="modal-tag">UX/UI Design</span><span className="modal-tag">Responsive Web</span>
                  </div>
                </>
              )}

              {activeModal === 'mira' && (
                <>
                  <h2 className="modal-title">Mira Shopping Mall App</h2>
                  <p className="modal-desc">Bridging the gap between physical retail and digital convenience, offering personalized navigation and reward systems.</p>
                  <div className="modal-tags">
                    <span className="modal-tag">UX Strategy</span><span className="modal-tag">Persona</span><span className="modal-tag">UI System</span>
                  </div>
                </>
              )}

              {activeModal === 'elchk' && (
                <>
                  <h2 className="modal-title">ELCHK Charity Platform</h2>
                  <p className="modal-desc">A responsive charity website acting as a "Daddy Long Legs" safe space for youth and teenagers.</p>
                  <div className="modal-tags">
                    <span className="modal-tag">UX/UI Design</span><span className="modal-tag">Charity</span><span className="modal-tag">Youth Support</span>
                  </div>
                </>
              )}
            </div>

            <div className="modal-body">
              {/* Cyclopes Content */}
              {activeModal === 'cyclopes' && (
                <div className="modal-images">
                  <div className="scrollable-img-wrapper"><img src={cyc00} alt="00" /></div>
                  <div className="image-group-asym">
                    <div className="scrollable-img-wrapper"><img src={cyc01} alt="01" /></div>
                    <div className="scrollable-img-wrapper"><img src={cyc02} alt="02" /></div>
                  </div>
                  <div className="image-group-asym">
                    <div className="scrollable-img-wrapper"><img src={cyc03} alt="03" /></div>
                    <div className="scrollable-img-wrapper"><img src={cyc04} alt="04" /></div>
                  </div>
                  <div className="scrollable-img-wrapper"><img src={cyc05} alt="05" /></div>
                  <div className="scrollable-img-wrapper"><img src={cyc06} alt="06" /></div>
                </div>
              )}

              {/* Mira Content (3-column Mobile Grid) */}
              {activeModal === 'mira' && (
                <>
                  <div className="ux-section">
                    <h3 className="ux-section-title">01 / Discover & Persona</h3>
                    <p className="ux-text">Understanding pain points in O2O mall navigation to ensure features address real user needs such as directory search and rewards tracking.</p>
                    <div className="modal-images">
                      <div className="scrollable-img-wrapper"><img src={mira01} alt="01" /></div>
                      <div className="scrollable-img-wrapper"><img src={mira02} alt="02" /></div>
                    </div>
                  </div>
                  <div className="ux-section">
                    <h3 className="ux-section-title">02 / Design System & Wireframes</h3>
                    <p className="ux-text">Establishing a modern visual language. Wireframes focus on intuitive information architecture and accessibility.</p>
                    <div className="modal-images">
                      <div className="scrollable-img-wrapper"><img src={mira03} alt="03" /></div>
                      <div className="scrollable-img-wrapper"><img src={mira04} alt="04" /></div>
                      <div className="scrollable-img-wrapper"><img src={mira05} alt="05" /></div>
                      <div className="scrollable-img-wrapper"><img src={mira06} alt="06" /></div>
                    </div>
                  </div>
                  <div className="ux-section"><h3 className="ux-section-title">03 / Layout Strategy</h3><p className="ux-text">Prioritizing clarity and visual hierarchy via modular grid systems across different devices.</p></div>
                  <div className="ux-section">
                    <h3 className="ux-section-title">04 / Visualizing the Experience</h3>
                    <p className="ux-text">The final UI acts as a dynamic hub, blending physical engagement with digital convenience.</p>
                    <div className="modal-images">
                      {/* 3-Column Mobile Layout for 07-13 */}
                      <div className="mira-mobile-grid">
                        {[mira07, mira08, mira09, mira10, mira11, mira12, mira13].map((img, i) => (
                          <div className="iphone-x-wrapper" key={i}>
                            <img src={img} alt={`mira-${i+7}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* ELCHK Content */}
              {activeModal === 'elchk' && (
                <div className="modal-images">
                  {[ 
                    {l: el01, r: el02}, {l: el03, r: el04}, {l: el05, r: el06},
                    {l: el07, r: el08}, {l: el09, r: el10}, {l: el11, r: el12}
                  ].map((pair, idx) => (
                    <div className="image-group-asym" key={idx}>
                      <div className="scrollable-img-wrapper"><img src={pair.l} alt={`el-${idx*2+1}`} /></div>
                      <div className="scrollable-img-wrapper"><img src={pair.r} alt={`el-${idx*2+2}`} /></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;