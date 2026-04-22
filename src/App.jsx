import React, { useState, useEffect } from 'react';
import './App.css';

// === 1. 导入本地图片 (确保路径与你文件夹一致) ===

// Cyclopes 项目图片 (00-07)
import cyc00 from './assets/cyclopes/00.png';
import cyc01 from './assets/cyclopes/01.png';
import cyc02 from './assets/cyclopes/02.png';
import cyc03 from './assets/cyclopes/03.png';
import cyc04 from './assets/cyclopes/04.png';
import cyc05 from './assets/cyclopes/05.png';
import cyc06 from './assets/cyclopes/06.png';
import cyc07 from './assets/cyclopes/07.png';

// Mira 项目图片 (01-13)
import mira01 from './assets/mira/01.png';
import mira02 from './assets/mira/02.png';
import mira03 from './assets/mira/03.png';
import mira04 from './assets/mira/04.png';
import mira05 from './assets/mira/05.png';
import mira06 from './assets/mira/06.png';
import mira07 from './assets/mira/07.png'; // 封面图
import mira08 from './assets/mira/08.png';
import mira09 from './assets/mira/09.png';
import mira10 from './assets/mira/10.png';
import mira11 from './assets/mira/11.png';
import mira12 from './assets/mira/12.png';
import mira13 from './assets/mira/13.png';

// ELCHK 项目图片 (01-12)
import el01 from './assets/elchk/01.png';
import el02 from './assets/elchk/02.png'; // 封面图
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

  // 开启弹窗并锁定滚动
  const openModal = (id) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  // 关闭弹窗
  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="portfolio-container">
      {/* 漂浮背景装饰 */}
      <div className="floating-bg">
        <div className="shape circle-1"></div>
        <div className="shape circle-2"></div>
        <div className="shape circle-3"></div>
      </div>

      {/* 导航栏 */}
      <nav>
        <div className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>ZQ.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero 区域 */}
      <div className="slide-container hero-slide" id="hero">
        <h1>Zeng Qing <span className="wave-emoji">👋</span></h1>
        <p className="subtitle">Digital Product & UI/UX Designer ✨</p>
        <p style={{ maxWidth: '600px', marginBottom: '40px', color: 'var(--text-muted)' }}>
          拥有5年经验的 UI/UX 设计师，擅长将心理学洞察与现代视觉美学结合，打造以人为本的数字化产品体验。
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#projects" className="btn">查看项目作品</a>
          <a href="#contact" className="btn" style={{ background: 'white', color: 'var(--primary)', border: '2px solid var(--primary)' }}>联系我</a>
        </div>
      </div>

      {/* 技能标签区域 */}
      <div className="slide-container" id="about">
        <h2 className="slide-title">Core Competencies</h2>
        <div className="grid-2">
          <div>
            <p style={{ fontSize: '18px', marginBottom: '25px' }}>
              我热衷于通过优雅的设计解决复杂问题。专注于打造流畅的用户旅程，助力商业增长与用户满意度。🚀
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
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '5px' }}>使用 Figma 和 Sketch 产出高保真 UI 与交互原型。</p>
            </div>
            <div className="about-card">
              <div style={{ width: '56px', height: '56px', background: '#f3e8ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                <i className="fa-solid fa-vial" style={{ fontSize: '24px', color: '#9333ea' }}></i>
              </div>
              <h4>UX Testing</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '5px' }}>通过可用性测试验证并迭代设计概念。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 工作经历 */}
      <div className="slide-container" id="experience">
        <h2 className="slide-title">Career Journey</h2>
        <div className="exp-item">
          <span>2023.09 - 2025.08</span>
          <h3>UI/UX Designer @ 汇丰环球 (HSBC)</h3>
          <p>主导 Abacus Mobile 项目设计，负责从用户调研到最终交付的全流程。</p>
        </div>
        <div className="exp-item">
          <span>2022.02 - 2025.02</span>
          <h3>Senior UI Designer @ 绿蕃茄软件</h3>
          <p>重构核心移动端模块，建立设计系统支持产品的快速规模化。</p>
        </div>
        <div className="exp-item">
          <span>2020.08 - 2022.01</span>
          <h3>Visual Designer @ 瀚像影业</h3>
          <p>专注于数字化营销的视觉叙事与社交媒体内容策划。</p>
        </div>
      </div>

      {/* 项目展示 */}
      <div className="slide-container" id="projects">
        <h2 className="slide-title">Featured Work</h2>
        <div className="projects-grid">
          {/* 项目 1 */}
          <div className="project-card" onClick={() => openModal('cyclopes')}>
            <div className="project-img">
              <img src={cyc07} alt="Cyclopes Cover" />
            </div>
            <div className="project-info">
              <h3>Cyclopes Portal <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '12px', marginLeft: '5px', color: 'var(--primary)' }}></i></h3>
              <p>连接全球雇主与留学生的 B2B 招聘生态系统。</p>
            </div>
          </div>
          
          {/* 项目 2 */}
          <div className="project-card" onClick={() => openModal('mira')}>
            <div className="project-img">
              <img src={mira07} alt="Mira Cover" />
            </div>
            <div className="project-info">
              <h3>Mira Mall App <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '12px', marginLeft: '5px', color: 'var(--primary)' }}></i></h3>
              <p>专注于个性化 O2O 体验的智能商场 App 设计提案。</p>
            </div>
          </div>

          {/* 项目 3 */}
          <div className="project-card" onClick={() => openModal('elchk')}>
            <div className="project-img">
              <img src={el02} alt="ELCHK Cover" />
            </div>
            <div className="project-info">
              <h3>ELCHK Charity <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '12px', marginLeft: '5px', color: 'var(--primary)' }}></i></h3>
              <p>为青少年打造的响应式公益“长腿叔叔”树洞平台。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 教育背景 */}
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
              <td><strong>Monash University (莫纳什大学)</strong></td>
              <td>Master of Interaction Design (交互设计硕士)</td>
              <td>2020 - 2021</td>
            </tr>
            <tr>
              <td><strong>淮北师范大学</strong></td>
              <td>应用心理学本科</td>
              <td>2014 - 2018</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 联系方式 */}
      <footer className="slide-container" id="contact" style={{ textAlign: 'center', alignItems: 'center' }}>
        <h2 style={{ fontSize: '56px', marginBottom: '20px', color: 'var(--primary)' }}>Let's Collaborate.</h2>
        <p style={{ fontSize: '20px', color: 'var(--text-muted)', marginBottom: '50px' }}>
          寻找全职机会或创意项目合作。
        </p>
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'left' }}>
            <p className="contact-label">Email Me</p>
            <p className="contact-value">961282846@qq.com</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p className="contact-label">Call Me</p>
            <p className="contact-value">136 5882 9938</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p className="contact-label">Location</p>
            <p className="contact-value">Kunming, China</p>
          </div>
        </div>
        <p style={{ marginTop: '100px', fontSize: '14px', color: '#94a3b8' }}>&copy; 2026 ZQ. Designed with heart.</p>
      </footer>

      {/* === 弹窗 (Modals) === */}
      {activeModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="modal-close" onClick={closeModal}><i className="fa-solid fa-xmark"></i></button>
              
              {activeModal === 'cyclopes' && (
                <>
                  <h2 className="modal-title">Cyclopes Recruitment Platform</h2>
                  <p className="modal-desc">专为留学生与全球雇主定制的招聘平台。具备响应式设计，提供流畅的桌面与移动端体验。</p>
                  <div className="modal-tags">
                    <span className="modal-tag">UX/UI Design</span><span className="modal-tag">Responsive Web</span>
                  </div>
                </>
              )}

              {activeModal === 'mira' && (
                <>
                  <h2 className="modal-title">Mira Shopping Mall App</h2>
                  <p className="modal-desc">旨在打破物理零售与数字化便利之间的隔阂，提供个性化导航、奖励机制与策划方案。</p>
                  <div className="modal-tags">
                    <span className="modal-tag">UX Strategy</span><span className="modal-tag">Persona</span><span className="modal-tag">UI System</span>
                  </div>
                </>
              )}

              {activeModal === 'elchk' && (
                <>
                  <h2 className="modal-title">ELCHK Charity Platform</h2>
                  <p className="modal-desc">为教会设计的响应式公益网站，作为青少年与儿童的心理支持安全空间。</p>
                  <div className="modal-tags">
                    <span className="modal-tag">UX/UI Design</span><span className="modal-tag">Charity</span><span className="modal-tag">Youth Support</span>
                  </div>
                </>
              )}
            </div>

            <div className="modal-body">
              {/* Cyclopes 项目内容 */}
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

              {/* Mira 项目内容 (UX 叙事结构) */}
              {activeModal === 'mira' && (
                <>
                  <div className="ux-section">
                    <h3 className="ux-section-title">01 / Discover & Persona</h3>
                    <p className="ux-text">通过定义用户画像来确定 O2O 商场导航中的痛点，确保功能能解决用户查找门店及跟踪会员奖励的真实需求。</p>
                    <div className="modal-images">
                      <div className="scrollable-img-wrapper"><img src={mira01} alt="01" /></div>
                      <div className="scrollable-img-wrapper"><img src={mira02} alt="02" /></div>
                    </div>
                  </div>
                  <div className="ux-section">
                    <h3 className="ux-section-title">02 / Design System & Wireframes</h3>
                    <p className="ux-text">确立了现代且充满活力的视觉语言。早期的线框图侧重于直观的信息架构，确保促销信息和会员中心易于触达。</p>
                    <div className="modal-images">
                      <div className="scrollable-img-wrapper"><img src={mira03} alt="03" /></div>
                      <div className="scrollable-img-wrapper"><img src={mira04} alt="04" /></div>
                      <div className="scrollable-img-wrapper"><img src={mira05} alt="05" /></div>
                      <div className="scrollable-img-wrapper"><img src={mira06} alt="06" /></div>
                    </div>
                  </div>
                  <div className="ux-section"><h3 className="ux-section-title">03 / Layout Strategy</h3><p className="ux-text">优先考虑清晰度和视觉层级，利用模块化栅格系统确保界面在不同设备上的可扩展性。</p></div>
                  <div className="ux-section">
                    <h3 className="ux-section-title">04 / Visualizing the Experience</h3>
                    <p className="ux-text">最终的高保真 UI 将首页打造为一个动态中心，通过个性化推荐融合实体购物与数字便利。</p>
                    <div className="modal-images">
                      <div className="scrollable-img-wrapper"><img src={mira07} alt="07" /></div>
                      <div className="image-group">
                        <div className="scrollable-img-wrapper"><img src={mira08} alt="08" /></div>
                        <div className="scrollable-img-wrapper"><img src={mira09} alt="09" /></div>
                      </div>
                      <div className="image-group">
                        <div className="scrollable-img-wrapper"><img src={mira10} alt="10" /></div>
                        <div className="scrollable-img-wrapper"><img src={mira11} alt="11" /></div>
                      </div>
                      <div className="image-group">
                        <div className="scrollable-img-wrapper"><img src={mira12} alt="12" /></div>
                        <div className="scrollable-img-wrapper"><img src={mira13} alt="13" /></div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* ELCHK 项目内容 (非对称网格) */}
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