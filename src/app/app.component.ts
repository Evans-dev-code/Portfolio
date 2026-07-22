import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">

    <!-- HEADER -->
    <header class="header">
      <img src="assets/Evans_Mwaura_Image.jpg" alt="Evans Mwaura" class="profile-img" />
      <h1>Evans Mwaura Mburu</h1>
      <p class="tagline">Software Developer &amp; Cybersecurity Enthusiast</p>

      <div class="badges">
        <span class="badge badge-ok">B.Sc. Computer Science — DeKUT, 2026</span>
        <span class="badge badge-warn">Cyber Security Certificate (IPSE) — In Progress</span>
        <span class="badge badge-live">Open to Opportunities</span>
      </div>

      <p class="summary">
        I design and build reliable software systems, and I'm growing a parallel foundation
        in cybersecurity — from understanding how systems are attacked to how they're defended
        and how findings are communicated clearly to the people who need to act on them.
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
          I'm a Computer Science graduate of Dedan Kimathi University of Technology, with
          practical experience building complete software products — from backend systems and
          APIs to the interfaces people actually use. My work spans fintech-style payment
          integrations, multi-tenant business platforms, and collaborative team projects.
        </p>
        <p>
          I'm currently expanding into cybersecurity through a Cyber Security Certificate at
          IPSE, focused on how systems are assessed for weaknesses and how those findings are
          reported in a way that's genuinely useful to decision-makers — not just technical
          detail for its own sake. I enjoy roles where clear thinking, structured problem-solving,
          and continuous learning matter more than any single tool.
        </p>
      </div>
    </section>

    <!-- AREAS OF EXPERTISE -->
    <section class="section">
      <span class="eyebrow">Capabilities</span>
      <h2>Areas of Expertise</h2>

      <div class="tabs">
        <button class="tab" [class.active]="activeTab === 'dev'" (click)="setTab('dev')">
          Software Development
        </button>
        <button class="tab" [class.active]="activeTab === 'security'" (click)="setTab('security')">
          Cybersecurity
        </button>
      </div>

      <div class="card skills-grid" *ngIf="activeTab === 'dev'">
        <div class="skill-group">
          <h4>Backend Development</h4>
          <p class="skill-note">Building the logic and data layer that applications run on.</p>
          <div class="tech-row">
            <span class="tech">Java</span><span class="tech">Spring Boot</span><span class="tech">PHP</span>
            <span class="tech">REST APIs</span><span class="tech">Authentication &amp; Authorization</span>
          </div>
        </div>
        <div class="skill-group">
          <h4>Frontend Development</h4>
          <p class="skill-note">Turning designs and requirements into usable interfaces.</p>
          <div class="tech-row">
            <span class="tech">Angular</span><span class="tech">TypeScript</span><span class="tech">Responsive UI/UX</span>
          </div>
        </div>
        <div class="skill-group">
          <h4>Data &amp; Integrations</h4>
          <p class="skill-note">Storing data reliably and connecting systems that need to talk to each other.</p>
          <div class="tech-row">
            <span class="tech">MySQL</span><span class="tech">PostgreSQL</span><span class="tech">Payment API Integration</span>
          </div>
        </div>
        <div class="skill-group">
          <h4>Ways of Working</h4>
          <p class="skill-note">How I approach delivering software as part of a team.</p>
          <div class="tech-row">
            <span class="tech">Agile Collaboration</span><span class="tech">Git Version Control</span><span class="tech">Software Development Lifecycle</span>
          </div>
        </div>
      </div>

      <div class="card skills-grid" *ngIf="activeTab === 'security'">
        <p class="security-note">
          Developed through structured coursework at IPSE and self-directed practice in
          controlled, ethical environments. Presented here at the level of what I understand
          and can apply — not as a claim of professional certification.
        </p>
        <div class="skill-group">
          <h4>Reconnaissance &amp; OSINT</h4>
          <p class="skill-note">Gathering and organizing publicly available information to understand an organization's exposure.</p>
        </div>
        <div class="skill-group">
          <h4>Vulnerability Assessment</h4>
          <p class="skill-note">Identifying, categorizing, and prioritizing weaknesses in systems and applications.</p>
        </div>
        <div class="skill-group">
          <h4>Penetration Testing Fundamentals</h4>
          <p class="skill-note">Understanding how authorized, ethical testing is planned and scoped to evaluate real-world risk.</p>
        </div>
        <div class="skill-group">
          <h4>Security Reporting &amp; Visualization</h4>
          <p class="skill-note">Turning technical findings into clear reports and visual summaries for both technical and non-technical audiences.</p>
        </div>
        <div class="skill-group">
          <h4>Network &amp; Systems Security</h4>
          <p class="skill-note">Networking fundamentals, LAN/WAN troubleshooting, and foundational security best practices.</p>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="section">
      <span class="eyebrow">Work</span>
      <h2>Featured Projects</h2>

      <div class="project-card featured">
        <div class="project-top">
          <span class="tag tag-featured">Featured · SaaS Platform</span>
          <span class="status status-live">Live</span>
        </div>
        <h3>Enterprise Performance Management System</h3>
        <p class="project-desc">
          A multi-tenant, role-based platform that helps organizations track performance,
          run continuous feedback, and keep individual goals aligned with company strategy.
        </p>
        <button class="details-btn" (click)="toggle('pms')">
          {{ expanded['pms'] ? 'Hide details' : 'View details' }}
        </button>
        <div class="details" *ngIf="expanded['pms']">
          <ul>
            <li>Separate, secure dashboards for Super Admins, Organization Admins, Managers, and Employees</li>
            <li>KPI and OKR tracking with visual progress indicators and real-time charts</li>
            <li>360° performance reviews and structured manager–employee check-ins</li>
            <li>Automated, secure subscription billing through the M-Pesa mobile payment network</li>
            <li>Backend APIs built with authentication safeguards and activity logging for accountability</li>
          </ul>
          <div class="tech-row">
            <span class="tech">PHP</span><span class="tech">MySQL</span><span class="tech">Secure Authentication</span>
            <span class="tech">Bootstrap 5</span><span class="tech">Data Visualization</span><span class="tech">Mobile Payments</span>
          </div>
          <p class="links"><a href="https://pms.cidarsec.co.ke" target="_blank">View Live Demo →</a></p>
        </div>
      </div>

      <div class="project-card">
        <div class="project-top">
          <span class="tag">Business Platform</span>
          <span class="status status-live">Live</span>
        </div>
        <h3>ChamaHub — Digital Group Savings Platform</h3>
        <p class="project-desc">
          A platform that digitizes how savings groups ("chamas") manage contributions, loans,
          and approvals.
        </p>
        <button class="details-btn" (click)="toggle('chama')">
          {{ expanded['chama'] ? 'Hide details' : 'View details' }}
        </button>
        <div class="details" *ngIf="expanded['chama']">
          <ul>
            <li>Support for multiple independent groups, each with their own access permissions</li>
            <li>Contribution and loan tracking with automated email notifications</li>
            <li>Mobile payment integration for automated, verifiable member payments</li>
          </ul>
          <div class="tech-row">
            <span class="tech">Angular</span><span class="tech">Spring Boot</span><span class="tech">MySQL</span><span class="tech">Mobile Payments</span>
          </div>
          <p class="links"><a href="https://chama-hub-frontend-1e8s.vercel.app/" target="_blank">View Live Demo →</a></p>
        </div>
      </div>

      <div class="project-card">
        <div class="project-top">
          <span class="tag">Business Platform</span>
          <span class="status status-live">Live</span>
        </div>
        <h3>MakaoSafe — Property &amp; Housing Management</h3>
        <p class="project-desc">
          A platform that simplifies property management and tenant interactions, including
          secure bookings and payments.
        </p>
        <button class="details-btn" (click)="toggle('makao')">
          {{ expanded['makao'] ? 'Hide details' : 'View details' }}
        </button>
        <div class="details" *ngIf="expanded['makao']">
          <ul>
            <li>Centralized property and tenant records</li>
            <li>Secure booking workflow backed by reliable backend processes</li>
            <li>Mobile payment integration for rent and booking payments</li>
          </ul>
          <div class="tech-row">
            <span class="tech">Angular</span><span class="tech">Spring Boot</span><span class="tech">Mobile Payments</span>
          </div>
          <p class="links"><a href="https://makao-safe-frontend.vercel.app/" target="_blank">View Live Demo →</a></p>
        </div>
      </div>

      <div class="project-card">
        <div class="project-top">
          <span class="tag">Team Project</span>
        </div>
        <h3>Online Shopping System</h3>
        <p class="project-desc">
          A collaborative e-commerce build completed with two other developers.
        </p>
        <button class="details-btn" (click)="toggle('shop')">
          {{ expanded['shop'] ? 'Hide details' : 'View details' }}
        </button>
        <div class="details" *ngIf="expanded['shop']">
          <ul>
            <li>Contributed core e-commerce features as part of a 3-person team</li>
            <li>Built backend logic for managing products, orders, and users</li>
            <li>Designed and styled 8+ responsive interface pages</li>
          </ul>
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
          <p class="time">Feb – Apr 2024 · Remote</p>
          <ul>
            <li>Built web applications end-to-end using Angular, Spring Boot, and MySQL</li>
            <li>Integrated third-party APIs into a prototype e-commerce system</li>
            <li>Collaborated with a small team using agile working practices</li>
          </ul>
        </div>

        <div class="timeline-item">
          <h3>Kenya Power <span class="role">— IT Department, Industrial Attachment</span></h3>
          <p class="time">Jan – Apr 2024 · Nyeri</p>
          <ul>
            <li>Provided IT support and troubleshooting for a staff base of 50+ users</li>
            <li>Gained direct exposure to enterprise networking infrastructure</li>
            <li>Built foundational awareness of workplace cybersecurity practices</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section class="section">
      <span class="eyebrow">Foundation</span>
      <h2>Education &amp; Certifications</h2>
      <div class="card">
        <div class="edu-row">
          <div>
            <h4>B.Sc. Computer Science</h4>
            <p class="skill-note">Dedan Kimathi University of Technology</p>
          </div>
          <span class="time">Graduated 2026</span>
        </div>
        <div class="edu-row">
          <div>
            <h4>Cyber Security Certificate</h4>
            <p class="skill-note">IPSE</p>
          </div>
          <span class="time">In Progress</span>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <p>© 2026 Evans Mwaura Mburu</p>
    </footer>

  </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

    :host {
      display: block;
      background: linear-gradient(160deg, #0a0f1a, #0d1420 55%, #0a0f1a);
      color: #dbe3ee;
      padding: 28px 20px 60px;
      font-family: 'Inter', -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    .container { max-width: 840px; margin: auto; }

    /* HEADER */
    .header { text-align: center; margin-bottom: 52px; }

    .profile-img {
      width: 120px; height: 120px;
      border-radius: 50%;
      border: 3px solid #38bdf8;
      box-shadow: 0 0 18px rgba(56, 189, 248, 0.35);
      object-fit: cover;
    }

    h1 {
      margin: 18px 0 4px;
      font-size: 30px;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #f1f5f9;
    }

    .tagline {
      color: #93c5fd;
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 16px;
    }

    .badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 20px; }

    .badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid;
    }

    .badge-ok { color: #93c5fd; border-color: rgba(147,197,253,0.35); background: rgba(147,197,253,0.06); }
    .badge-warn { color: #fbbf24; border-color: rgba(251,191,36,0.35); background: rgba(251,191,36,0.06); }
    .badge-live { color: #4ade80; border-color: rgba(74,222,128,0.35); background: rgba(74,222,128,0.06); }

    .summary { max-width: 600px; margin: 0 auto 20px; color: #aab4c4; line-height: 1.65; }

    .contact p { margin: 6px 0; color: #8b96a8; font-size: 14px; }
    .contact .links { margin-top: 14px; }

    .contact a {
      display: inline-block;
      margin: 4px 6px;
      padding: 9px 18px;
      color: #38bdf8;
      text-decoration: none;
      font-weight: 500;
      font-size: 14px;
      border: 1px solid rgba(56,189,248,0.35);
      border-radius: 8px;
      transition: all 0.2s ease;
    }

    .contact a:hover { background: rgba(56,189,248,0.08); transform: translateY(-1px); }

    .contact a.cta {
      background: linear-gradient(135deg, #38bdf8, #0ea5e9);
      color: #041322;
      border: none;
      font-weight: 700;
    }

    /* SECTIONS */
    .section { margin-top: 46px; }

    .eyebrow {
      display: block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 0.1em;
      color: #64748b;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    h2 {
      color: #f1f5f9;
      font-size: 21px;
      font-weight: 700;
      border-left: 3px solid #38bdf8;
      padding-left: 12px;
      margin-bottom: 18px;
    }

    .card {
      background: #0f1826;
      border: 1px solid #1e293b;
      padding: 22px;
      border-radius: 12px;
      margin-bottom: 18px;
      line-height: 1.7;
    }

    .card p { color: #c3cbd8; margin-bottom: 12px; }
    .card p:last-child { margin-bottom: 0; }

    /* TABS */
    .tabs { display: flex; gap: 8px; margin-bottom: 4px; }

    .tab {
      font-family: 'Inter', sans-serif;
      font-size: 13.5px;
      font-weight: 600;
      padding: 10px 18px;
      border-radius: 8px 8px 0 0;
      border: 1px solid #1e293b;
      border-bottom: none;
      background: #0a1220;
      color: #7c8798;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .tab:hover { color: #cbd5e1; }

    .tab.active {
      background: #0f1826;
      color: #38bdf8;
      border-color: #1e293b;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      border-top-left-radius: 0;
    }

    .security-note {
      grid-column: 1 / -1;
      font-size: 13px;
      color: #94a3b8;
      font-style: italic;
      border-bottom: 1px solid #1e293b;
      padding-bottom: 14px;
      margin-bottom: 4px !important;
    }

    .skill-group h4 { color: #f1f5f9; font-size: 14.5px; font-weight: 700; margin: 0 0 6px; }
    .skill-note { color: #8b96a8; font-size: 13.5px; margin-bottom: 8px !important; line-height: 1.5; }

    .tech-row { display: flex; flex-wrap: wrap; gap: 7px; margin: 6px 0 4px; }

    .tech {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #93c5fd;
      background: rgba(56,189,248,0.08);
      border: 1px solid rgba(56,189,248,0.2);
      padding: 4px 10px;
      border-radius: 6px;
    }

    /* PROJECT CARDS */
    .project-card {
      background: #0f1826;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 22px;
      margin-bottom: 18px;
      transition: border-color 0.2s ease;
    }

    .project-card.featured { border-color: rgba(56,189,248,0.4); }
    .project-card:hover { border-color: rgba(56,189,248,0.35); }

    .project-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }

    .tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #93c5fd;
      background: rgba(147,197,253,0.08);
      border: 1px solid rgba(147,197,253,0.25);
      padding: 4px 10px;
      border-radius: 6px;
    }

    .tag-featured {
      color: #041322;
      background: linear-gradient(135deg, #38bdf8, #0ea5e9);
      border: none;
      font-weight: 600;
    }

    .status {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      padding: 3px 9px;
      border-radius: 999px;
    }

    .status-live { color: #4ade80; background: rgba(74,222,128,0.08); border: 1px solid rgba(74,222,128,0.3); }

    .project-card h3 { color: #f1f5f9; font-size: 17px; font-weight: 700; margin: 0 0 8px; }
    .project-desc { color: #a9b3c4; margin-bottom: 14px; line-height: 1.6; }

    .details-btn {
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 600;
      color: #38bdf8;
      background: transparent;
      border: 1px solid rgba(56,189,248,0.35);
      padding: 7px 14px;
      border-radius: 7px;
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .details-btn:hover { background: rgba(56,189,248,0.08); }

    .details { margin-top: 16px; padding-top: 16px; border-top: 1px solid #1e293b; }
    .details ul { margin: 0 0 14px 20px; }
    .details li { margin-bottom: 7px; color: #c3cbd8; line-height: 1.55; }

    .links a { color: #38bdf8; font-weight: 600; font-size: 14px; text-decoration: none; }
    .links a:hover { text-decoration: underline; }

    /* TIMELINE */
    .timeline-item {
      position: relative;
      padding: 4px 0 4px 22px;
      border-left: 2px solid #1e293b;
      margin-bottom: 24px;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -6px; top: 6px;
      width: 10px; height: 10px;
      border-radius: 50%;
      background: #38bdf8;
    }

    .timeline-item h3 { color: #f1f5f9; font-size: 15.5px; font-weight: 700; margin: 0 0 4px; }
    .role { color: #64748b; font-weight: 400; font-size: 13.5px; }
    .timeline-item .time {
      font-family: 'JetBrains Mono', monospace;
      color: #64748b; font-size: 11.5px; margin-bottom: 10px;
    }
    .timeline-item ul { margin-left: 20px; }
    .timeline-item li { margin-bottom: 7px; color: #c3cbd8; line-height: 1.55; }

    /* EDUCATION */
    .edu-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 0; border-bottom: 1px solid #1e293b;
    }
    .edu-row:last-child { border-bottom: none; padding-bottom: 0; }
    .edu-row h4 { color: #f1f5f9; font-size: 15px; font-weight: 700; margin: 0 0 2px; }
    .edu-row .time { font-family: 'JetBrains Mono', monospace; color: #64748b; font-size: 12px; white-space: nowrap; }

    /* FOOTER */
    .footer { text-align: center; margin-top: 60px; color: #4b5568; font-size: 13px; font-family: 'JetBrains Mono', monospace; }

    /* RESPONSIVE */
    @media (max-width: 640px) {
      h1 { font-size: 25px; }
      .card, .project-card { padding: 16px; }
      .skills-grid { grid-template-columns: 1fr; }
      .tabs { flex-wrap: wrap; }
    }
  `]
})
export class AppComponent {
  activeTab: 'dev' | 'security' = 'dev';
  expanded: { [key: string]: boolean } = {};

  setTab(tab: 'dev' | 'security') {
    this.activeTab = tab;
  }

  toggle(id: string) {
    this.expanded[id] = !this.expanded[id];
  }
}
