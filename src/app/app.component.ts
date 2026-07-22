import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">

    <header class="header">
      <img src="assets/Evans_Mwaura_Image.jpg" alt="Evans Mwaura" class="profile-img" />
      <h1>Evans Mwaura Mburu</h1>
      <p class="tagline">Backend &amp; Full-Stack Software Developer</p>

      <div class="badges">
        <span class="badge badge-ok">B.Sc. Computer Science — DeKUT, June 2026</span>
        <span class="badge badge-warn">Studying Cyber Security @ IPSE</span>
        <span class="badge badge-live">Open to Opportunities</span>
      </div>

      <p class="aspiration">
        I build scalable backend systems and clean, user-focused web applications —
        turning real-world problems into reliable, production-ready software.
      </p>

      <div class="contact">
        <p>📍 Nairobi, Kenya &nbsp;·&nbsp; 📧 mwauraevans2003@gmail.com &nbsp;·&nbsp; 📞 +254 715 431 785</p>
        <p class="links">
          <a href="https://www.linkedin.com/in/evans-mburu-8224b7341/" target="_blank">LinkedIn</a>
          <a href="https://github.com/Evans-dev-code" target="_blank">GitHub</a>
          <a class="cta" href="assets/Evans_Mwaura_Mburu_resume.pdf" download="Evans_Mwaura_Mburu_resume.pdf">Download CV</a>
        </p>
      </div>
    </header>

    <!-- ABOUT -->
    <section class="section">
      <span class="eyebrow">About</span>
      <h2>About Me</h2>
      <div class="card">
        <p>
          I'm a Computer Science graduate of Dedan Kimathi University of Technology (June 2026),
          with hands-on experience across backend and full-stack development. I enjoy working with
          Java (Spring Boot), PHP, and TypeScript (Angular) to build secure, maintainable, and
          scalable systems — from fintech integrations to multi-tenant SaaS platforms.
        </p>
        <p>
          My interests include backend architecture, API design, fintech systems, and
          AI-assisted software solutions. I'm currently deepening my security fundamentals through
          a Cyber Security Certificate at IPSE, and I thrive in collaborative, agile environments
          where I can keep learning.
        </p>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="section">
      <span class="eyebrow">Work</span>
      <h2>Featured Projects</h2>

      <div class="term-card featured">
        <div class="term-bar">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
          <span class="term-path">~/projects/enterprise-pms</span>
          <span class="status status-live">● LIVE</span>
        </div>
        <div class="term-body">
          <div class="project-head">
            <h3>Enterprise Performance Management System <span class="role">— SaaS, Full-Stack</span></h3>
            <span class="pill pill-featured">Featured</span>
          </div>
          <p class="project-desc">
            A multi-tenant, role-based SaaS platform for corporate performance tracking, continuous
            feedback, and strategic goal alignment across organizations.
          </p>
          <ul>
            <li>Role-based architecture with dedicated dashboards for Super Admins, Org Admins, Managers, and Employees</li>
            <li>KPI &amp; OKR tracking with interactive progress sliders and real-time Chart.js visualizations</li>
            <li>360° appraisals and weekly 1-on-1 workspaces for manager–employee communication</li>
            <li>M-Pesa Daraja API (STK Push) integration for real-time, secure subscription billing</li>
            <li>Custom PHP REST APIs with JWT authentication, PDO/MySQL, and automated audit logging</li>
          </ul>
          <div class="tech-row">
            <span class="tech">PHP</span><span class="tech">MySQL</span><span class="tech">JWT</span>
            <span class="tech">Bootstrap 5</span><span class="tech">Chart.js</span><span class="tech">M-Pesa API</span>
          </div>
          <p class="links">
            <a href="https://pms.cidarsec.co.ke" target="_blank">Live Demo →</a>
          </p>
        </div>
      </div>

      <div class="term-card">
        <div class="term-bar">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
          <span class="term-path">~/projects/chamahub</span>
          <span class="status status-live">● LIVE</span>
        </div>
        <div class="term-body">
          <h3>ChamaHub <span class="role">— Digital Chama Management Platform</span></h3>
          <p class="project-desc">
            A multi-chama management system designed to digitize group savings, contributions, and
            loan management.
          </p>
          <ul>
            <li>Multi-group (chama) support with role-based access</li>
            <li>Contributions and loan tracking modules</li>
            <li>Email notifications for approvals and updates</li>
            <li>M-Pesa API integration for automated payments</li>
          </ul>
          <div class="tech-row">
            <span class="tech">Angular</span><span class="tech">Spring Boot</span><span class="tech">MySQL</span><span class="tech">M-Pesa API</span>
          </div>
          <p class="links">
            <a href="https://chama-hub-frontend-1e8s.vercel.app/" target="_blank">Live Demo →</a>
          </p>
        </div>
      </div>

      <div class="term-card">
        <div class="term-bar">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
          <span class="term-path">~/projects/makaosafe</span>
          <span class="status status-live">● LIVE</span>
        </div>
        <div class="term-body">
          <h3>MakaoSafe <span class="role">— Property &amp; Housing Management System</span></h3>
          <p class="project-desc">
            A web platform aimed at simplifying property management and tenant interactions.
          </p>
          <ul>
            <li>Property and tenant records management</li>
            <li>Secure backend workflows</li>
            <li>Modern Angular UI focused on usability</li>
            <li>Secure house booking and payments via M-Pesa</li>
          </ul>
          <div class="tech-row">
            <span class="tech">Angular</span><span class="tech">Spring Boot</span><span class="tech">M-Pesa API</span>
          </div>
          <p class="links">
            <a href="https://makao-safe-frontend.vercel.app/" target="_blank">Live Demo →</a>
          </p>
        </div>
      </div>

      <div class="term-card">
        <div class="term-bar">
          <span class="dot"></span><span class="dot"></span><span class="dot"></span>
          <span class="term-path">~/projects/online-shopping-system</span>
          <span class="status status-team">TEAM</span>
        </div>
        <div class="term-body">
          <h3>Online Shopping System <span class="role">— Team Project (3 members)</span></h3>
          <ul>
            <li>Built core e-commerce features in a 3-member team</li>
            <li>Implemented CRUD backend logic for multiple entities</li>
            <li>Designed and styled 8+ responsive UI pages</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section">
      <span class="eyebrow">Stack</span>
      <h2>Technical Skills</h2>
      <div class="card skills-grid">
        <div class="skill-group">
          <h4>Backend</h4>
          <div class="tech-row">
            <span class="tech">Java</span><span class="tech">Spring Boot</span><span class="tech">PHP</span>
            <span class="tech">REST APIs</span><span class="tech">JWT</span><span class="tech">PDO</span>
          </div>
        </div>
        <div class="skill-group">
          <h4>Frontend</h4>
          <div class="tech-row">
            <span class="tech">Angular</span><span class="tech">TypeScript</span><span class="tech">HTML</span>
            <span class="tech">CSS/SCSS</span><span class="tech">Bootstrap 5</span>
          </div>
        </div>
        <div class="skill-group">
          <h4>Databases</h4>
          <div class="tech-row">
            <span class="tech">MySQL</span><span class="tech">PostgreSQL</span>
          </div>
        </div>
        <div class="skill-group">
          <h4>Integrations &amp; Tools</h4>
          <div class="tech-row">
            <span class="tech">M-Pesa Daraja API</span><span class="tech">Chart.js</span>
            <span class="tech">Git/GitHub</span><span class="tech">Linux</span>
          </div>
        </div>
        <div class="skill-group">
          <h4>Networking &amp; Security</h4>
          <div class="tech-row">
            <span class="tech">LAN/WAN Troubleshooting</span><span class="tech">Cybersecurity Fundamentals</span>
          </div>
        </div>
        <div class="skill-group">
          <h4>Practices</h4>
          <div class="tech-row">
            <span class="tech">Agile</span><span class="tech">SDLC</span><span class="tech">API Integration</span>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="section">
      <span class="eyebrow">Journey</span>
      <h2>Experience</h2>

      <div class="timeline">
        <div class="timeline-item">
          <h3>EM Tech Hub <span class="role">— Software Development Intern</span></h3>
          <p class="time">Feb – Apr 2024 · Remote (Tatu City)</p>
          <ul>
            <li>Developed web applications using Angular, Spring Boot, and MySQL</li>
            <li>Integrated APIs into a prototype e-commerce system</li>
            <li>Worked in an agile, collaborative development environment</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h3>Kenya Power <span class="role">— IT Department (Attachment)</span></h3>
          <p class="time">Jan – Apr 2024 · Nyeri</p>
          <ul>
            <li>Provided IT support and troubleshooting for 50+ staff users</li>
            <li>Worked with networking infrastructure and basic cybersecurity practices</li>
            <li>Gained experience working in a large enterprise IT environment</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <p>© 2026 Evans Mwaura Mburu · Built with Angular</p>
    </footer>

  </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

    :host {
      display: block;
      background: radial-gradient(ellipse 1200px 600px at 50% -10%, rgba(56,189,248,0.10), transparent),
                  linear-gradient(160deg, #020617, #060b16 55%, #0a0f1a);
      color: #dbe3ee;
      padding: 28px 20px 60px;
      font-family: 'Inter', -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    .container {
      max-width: 880px;
      margin: auto;
    }

    /* ---------- HEADER ---------- */
    .header {
      text-align: center;
      margin-bottom: 56px;
    }

    .profile-img {
      width: 128px;
      height: 128px;
      border-radius: 50%;
      border: 3px solid #38bdf8;
      box-shadow: 0 0 24px rgba(56, 189, 248, 0.45);
      object-fit: cover;
    }

    h1 {
      margin: 18px 0 4px;
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #f1f5f9;
    }

    .tagline {
      color: #38bdf8;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      margin-bottom: 20px;
    }

    .badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid;
      letter-spacing: 0.01em;
    }

    .badge-ok { color: #93c5fd; border-color: rgba(147,197,253,0.35); background: rgba(147,197,253,0.06); }
    .badge-warn { color: #fbbf24; border-color: rgba(251,191,36,0.35); background: rgba(251,191,36,0.06); }
    .badge-live { color: #4ade80; border-color: rgba(74,222,128,0.35); background: rgba(74,222,128,0.06); }

    .aspiration {
      max-width: 620px;
      margin: 0 auto 20px;
      color: #aab4c4;
      line-height: 1.6;
    }

    .contact p { margin: 6px 0; color: #8b96a8; font-size: 14.5px; }

    .contact .links { margin-top: 14px; }

    .contact a {
      display: inline-block;
      margin: 4px 6px;
      padding: 9px 18px;
      color: #38bdf8;
      text-decoration: none;
      font-weight: 500;
      font-size: 14px;
      border: 1px solid rgba(56,189,248,0.4);
      border-radius: 8px;
      transition: all 0.2s ease;
      background: transparent;
    }

    .contact a:hover {
      background: rgba(56,189,248,0.1);
      box-shadow: 0 0 14px rgba(56, 189, 248, 0.35);
      transform: translateY(-1px);
    }

    .contact a.cta {
      background: linear-gradient(135deg, #38bdf8, #0ea5e9);
      color: #041322;
      border: none;
      font-weight: 700;
    }

    .contact a.cta:hover {
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.6);
    }

    /* ---------- SECTIONS ---------- */
    .section { margin-top: 48px; }

    .eyebrow {
      display: block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11.5px;
      letter-spacing: 0.12em;
      color: #64748b;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    h2 {
      color: #f1f5f9;
      font-size: 22px;
      font-weight: 700;
      border-left: 3px solid #38bdf8;
      padding-left: 12px;
      margin-bottom: 20px;
    }

    .card {
      background: #08101f;
      border: 1px solid #1e293b;
      padding: 24px;
      border-radius: 14px;
      margin-bottom: 20px;
      box-shadow: 0 0 24px rgba(56, 189, 248, 0.06);
      line-height: 1.7;
    }

    .card p { color: #c3cbd8; margin-bottom: 12px; }
    .card p:last-child { margin-bottom: 0; }

    /* ---------- TERMINAL PROJECT CARDS ---------- */
    .term-card {
      background: #08101f;
      border: 1px solid #1e293b;
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 22px;
      box-shadow: 0 0 24px rgba(56, 189, 248, 0.05);
      transition: border-color 0.2s ease, transform 0.2s ease;
    }

    .term-card:hover {
      border-color: rgba(56,189,248,0.4);
      transform: translateY(-2px);
    }

    .term-card.featured {
      border-color: rgba(56,189,248,0.5);
      box-shadow: 0 0 32px rgba(56, 189, 248, 0.12);
    }

    .term-bar {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 10px 16px;
      background: #0c1526;
      border-bottom: 1px solid #1e293b;
    }

    .dot {
      width: 9px; height: 9px;
      border-radius: 50%;
      background: #334155;
    }

    .term-path {
      margin-left: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: #64748b;
      flex: 1;
    }

    .status {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      letter-spacing: 0.06em;
      padding: 3px 9px;
      border-radius: 999px;
    }

    .status-live { color: #4ade80; background: rgba(74,222,128,0.08); border: 1px solid rgba(74,222,128,0.3); }
    .status-team { color: #93c5fd; background: rgba(147,197,253,0.08); border: 1px solid rgba(147,197,253,0.3); }

    .term-body { padding: 22px 24px; }

    .project-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
    }

    .pill-featured {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      color: #041322;
      background: linear-gradient(135deg, #38bdf8, #0ea5e9);
      padding: 3px 10px;
      border-radius: 999px;
      font-weight: 600;
      white-space: nowrap;
    }

    .term-body h3 {
      color: #7dd3fc;
      font-size: 17px;
      font-weight: 700;
      margin: 0 0 10px;
    }

    .role {
      color: #64748b;
      font-weight: 400;
      font-size: 14px;
    }

    .project-desc { color: #a9b3c4; margin-bottom: 12px; line-height: 1.6; }

    .term-body ul { margin: 0 0 14px 20px; }
    .term-body li { margin-bottom: 7px; color: #c3cbd8; line-height: 1.55; }

    .tech-row {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      margin: 6px 0 14px;
    }

    .tech {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #93c5fd;
      background: rgba(56,189,248,0.08);
      border: 1px solid rgba(56,189,248,0.22);
      padding: 4px 10px;
      border-radius: 6px;
    }

    .links a {
      color: #38bdf8;
      font-weight: 600;
      font-size: 14px;
      text-decoration: none;
    }
    .links a:hover { text-decoration: underline; }

    /* ---------- SKILLS ---------- */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 22px;
    }

    .skill-group h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #64748b;
      margin: 0 0 10px;
    }

    /* ---------- TIMELINE ---------- */
    .timeline-item {
      position: relative;
      padding: 4px 0 4px 24px;
      border-left: 2px solid #1e293b;
      margin-bottom: 26px;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -6px;
      top: 6px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #38bdf8;
      box-shadow: 0 0 10px rgba(56,189,248,0.6);
    }

    .timeline-item h3 {
      color: #f1f5f9;
      font-size: 16px;
      font-weight: 700;
      margin: 0 0 4px;
    }

    .timeline-item .time {
      font-family: 'JetBrains Mono', monospace;
      color: #64748b;
      font-size: 12px;
      margin-bottom: 10px;
    }

    .timeline-item ul { margin-left: 20px; }
    .timeline-item li { margin-bottom: 7px; color: #c3cbd8; line-height: 1.55; }

    /* ---------- FOOTER ---------- */
    .footer {
      text-align: center;
      margin-top: 64px;
      color: #4b5568;
      font-size: 13px;
      font-family: 'JetBrains Mono', monospace;
    }

    /* ---------- RESPONSIVE ---------- */
    @media (max-width: 640px) {
      h1 { font-size: 26px; }
      .card, .term-body { padding: 18px; }
      .skills-grid { grid-template-columns: 1fr; }
      .project-head { flex-direction: column; align-items: flex-start; }
    }
  `]
})
export class AppComponent {}
