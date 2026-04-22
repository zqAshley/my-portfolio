import React, { useState } from 'react';
import './App.css'; // 引入刚刚创建的 CSS 文件

function App() {
  // 状态管理：控制当前打开的弹窗，null 表示关闭
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto'; // 恢复滚动
  };

  return (
    <div className="portfolio-container">
      {/* 浮动背景装饰 */}
      <div className="floating-bg">
        <div className="shape circle-1"></div>
        <div className="shape circle-2"></div>
        <div className="shape circle-3"></div>
      </div>

      {/* 导航栏 */}
      <nav>
        <div className="logo">ZQ.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* 1. 首页横幅 */}
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

      {/* 2. 核心技能 */}
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

      {/* 3. 工作经历 */}
      <div className="slide-container" id="experience">
        <h2 className="slide-title">Career Journey</h2>
        <div className="exp-item">
          <span>2023 - 2025</span>
          <h3>UI/UX Designer @ HSBC</h3>
          <p>Led the design for Abacus Mobile. Managed end-to-end product lifecycles from stakeholder research to final developer handoff.</p>
        </div>
        <div className="exp-item">
          <span>2022 - 2023</span>
          <h3>Senior UI Designer @ Green Tomato Software</h3>
          <p>Redesigned core mobile modules and established a comprehensive design system for rapid product scaling.</p>
        </div>
        <div className="exp-item">
          <span>2020 - 2022</span>
          <h3>Visual Designer @ Hanxiang Pictures</h3>
          <p>Focused on digital marketing visual storytelling and community engagement strategies.</p>
        </div>
      </div>

      {/* 4. 项目展示 */}
      <div className="slide-container" id="projects">
        <h2 className="slide-title">Featured Work</h2>
        <div className="projects-grid">
          {/* 项目 1 */}
          <div className="project-card" onClick={() => openModal('cyclopes')}>
            <div className="project-img">
              <img src="https://i.postimg.cc/YGzfsJVT/07.png" alt="Cyclopes Cover" />
            </div>
            <div className="project-info">
              <h3>Cyclopes Portal <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '12px', marginLeft: '5px', color: 'var(--primary)' }}></i></h3>
              <p>A B2B recruitment ecosystem connecting talents with global employers.</p>
            </div>
          </div>
          
          {/* 项目 2 */}
          <div className="project-card" onClick={() => openModal('mira')}>
            <div className="project-img">
              <img src="https://i.postimg.cc/1fSmcbcz/07.png" alt="Mira Cover" />
            </div>
            <div className="project-info">
              <h3>Mira Mall App <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '12px', marginLeft: '5px', color: 'var(--primary)' }}></i></h3>
              <p>A smart shopping mall app design focusing on personalized O2O experiences.</p>
            </div>
          </div>

          {/* 项目 3 */}
          <div className="project-card" onClick={() => openModal('elchk')}>
            <div className="project-img">
              <img src="https://i.postimg.cc/bdHpm3vS/02.png" alt="ELCHK Cover" />
            </div>
            <div className="project-info">
              <h3>ELCHK Charity <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '12px', marginLeft: '5px', color: 'var(--primary)' }}></i></h3>
              <p>A responsive charity platform serving as a "Daddy Long Legs" safe space for youth.</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>Interested in more? Scroll down for details or contact me.</p>
        </div>
      </div>

      {/* 5. 教育背景 */}
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

      {/* 6. 联系方式 */}
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

      {/* =========================================================
                             项目弹窗部分 (Modals)
          ========================================================= */}
      
      {/* 弹窗背景遮罩，点击遮罩关闭弹窗 */}
      {activeModal && (
        <div className="modal" onClick={closeModal}>
          {/* 阻止点击内部容器时关闭弹窗 */}
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="modal-close" onClick={closeModal}><i className="fa-solid fa-xmark"></i></button>
              
              {/* 根据状态渲染不同的头部信息 */}
              {activeModal === 'cyclopes' && (
                <>
                  <h2 className="modal-title">Cyclopes Recruitment Platform</h2>
                  <p className="modal-desc">A comprehensive recruitment platform tailored specifically for international students and global employers. This project features dedicated, bespoke portals for both the company (employer) and student sides.</p>
                  <div className="modal-tags">
                    <span className="modal-tag">UX/UI Design</span><span className="modal-tag">Responsive Web</span>
                  </div>
                </>
              )}
              {activeModal === 'mira' && (
                <>
                  <h2 className="modal-title">Mira Shopping Mall App</h2>
                  <p className="modal-desc">A comprehensive UX/UI design proposal for a modern shopping mall application. Mira aims to bridge the gap between physical retail and digital convenience.</p>
                  <div className="modal-tags">
                    <span className="modal-tag">UX Strategy</span><span className="modal-tag">User Persona</span><span className="modal-tag">O2O Commerce</span>
                  </div>
                </>
              )}
              {activeModal === 'elchk' && (
                <>
                  <h2 className="modal-title">ELCHK Charity Platform</h2>
                  <p className="modal-desc">A responsive charity website designed for a church, acting as a "Daddy Long Legs" safe space for teenagers and children.</p>
                  <div className="modal-tags">
                    <span className="modal-tag">UX/UI Design</span><span className="modal-tag">Charity</span><span className="modal-tag">Youth Support</span>
                  </div>
                </>
              )}
            </div>

            <div className="modal-body">
              {/* --- Cyclopes 内容 --- */}
              {activeModal === 'cyclopes' && (
                <div className="modal-images">
                  <img src="https://i.postimg.cc/F7R1M289/00.png" alt="00" />
                  <div className="image-group-asym">
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/Mcc7znLZ/01.png" alt="01" /></div>
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/XpJXRTmq/02.png" alt="02" /></div>
                  </div>
                  <div className="image-group-asym">
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/Yh9j5JZN/03.png" alt="03" /></div>
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/QHtV2Rw9/04.png" alt="04" /></div>
                  </div>
                  <img src="https://i.postimg.cc/QHtV2Rwm/05.png" alt="05" />
                  <img src="https://i.postimg.cc/2VK3r0NG/06.png" alt="06" />
                </div>
              )}

              {/* --- Mira 内容 --- */}
              {activeModal === 'mira' && (
                <>
                  <div className="ux-section">
                    <h3 className="ux-section-title">01 / Discover & Persona</h3>
                    <p className="ux-text">To create a seamless shopping experience, the project started by deeply understanding our target audience...</p>
                    <div className="modal-images">
                      <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/CnGFp4YK/01.png" alt="01" /></div>
                      <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/yWc6R7Rr/02.png" alt="02" /></div>
                    </div>
                  </div>
                  <div className="ux-section">
                    <h3 className="ux-section-title">02 / Design System & Wireframes</h3>
                    <p className="ux-text">Establishing a cohesive visual language was crucial...</p>
                    <div className="modal-images">
                      <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/8sMkvTvZ/03.png" alt="03" /></div>
                      <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/SjCQ9m91/04.png" alt="04" /></div>
                      <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/yWc6R7Rw/05.png" alt="05" /></div>
                      <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/Thg2bTmP/06.png" alt="06" /></div>
                    </div>
                  </div>
                  <div className="ux-section">
                    <h3 className="ux-section-title">03 / Layout Strategy</h3>
                    <p className="ux-text">The layout strategy prioritizes clarity and visual hierarchy...</p>
                  </div>
                  <div className="ux-section">
                    <h3 className="ux-section-title">04 / Visualizing the Experience</h3>
                    <p className="ux-text">The final high-fidelity UI brings the Mira experience to life...</p>
                    <div className="modal-images">
                      <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/1fSmcbcz/07.png" alt="07" /></div>
                      <div className="image-group">
                        <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/BXCqhNMT/08.png" alt="08" /></div>
                        <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/rK98hgQN/09.png" alt="09" /></div>
                      </div>
                      <div className="image-group">
                        <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/GHjcMzqv/10.png" alt="10" /></div>
                        <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/JGQ1TKPb/11.png" alt="11" /></div>
                      </div>
                      <div className="image-group">
                        <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/N5xgNbpp/12.png" alt="12" /></div>
                        <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/zVkJdpxN/13.png" alt="13" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="ux-section">
                    <h3 className="ux-section-title">05 / Interactive Scenarios</h3>
                    <p className="ux-text">Detailed interaction states and user flows were crafted to handle specific shopping scenarios...</p>
                  </div>
                </>
              )}

              {/* --- ELCHK 内容 --- */}
              {activeModal === 'elchk' && (
                <div className="modal-images">
                  <div className="image-group-asym">
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/JtWR39R4/01.png" alt="01" /></div>
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/bdHpm3vS/02.png" alt="02" /></div>
                  </div>
                  <div className="image-group-asym">
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/fkjD8Bby/03.png" alt="03" /></div>
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/Sj7kgDKK/04.png" alt="04" /></div>
                  </div>
                  <div className="image-group-asym">
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/G9JdXqp9/05.png" alt="05" /></div>
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/XXc4sQvk/06.png" alt="06" /></div>
                  </div>
                  <div className="image-group-asym">
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/BXSskH8D/07.png" alt="07" /></div>
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/svjyq7BZ/08.png" alt="08" /></div>
                  </div>
                  <div className="image-group-asym">
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/kBJ9zKVK/09.png" alt="09" /></div>
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/jLxKmPWy/10.png" alt="10" /></div>
                  </div>
                  <div className="image-group-asym">
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/Ln9RwLqx/11.png" alt="11" /></div>
                    <div className="scrollable-img-wrapper"><img src="https://i.postimg.cc/WhNjCgD9/12.png" alt="12" /></div>
                  </div>
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