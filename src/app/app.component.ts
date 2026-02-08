import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">

    <!-- HEADER -->
    <header class="header">
      <img src="assets/Evans_Mwaura_Image.jpg" alt="Evans Mwaura" class="profile-img" />
      <h1>Evans Mwaura Mburu</h1>
      <p class="tagline">
        Backend & Full-Stack Software Developer • Computer Science Finalist
      </p>

      <p class="aspiration">
        I build scalable backend systems and clean, user-focused web applications.
        Passionate about turning real-world problems into reliable digital solutions.
      </p>

      <div class="contact">
        <p>📍 Nairobi, Kenya</p>
        <p>📧 mwauraevans2003@gmail.com</p>
        <p>📞 +254 715 431 785</p>
        <p>
          <a href="https://www.linkedin.com/in/evans-mburu-8224b7341/" target="_blank">LinkedIn</a> |
          <a href="https://github.com/Evans-dev-code" target="_blank">GitHub</a> |
          <a href="https://portfolio-five-ruddy-29.vercel.app/" target="_blank">Portfolio</a>
        </p>
      </div>
    </header>

    <!-- ABOUT -->
    <section class="section">
      <h2>About Me</h2>
      <div class="card">
        <p>
          I am a final-year Computer Science student at Dedan Kimathi University of Technology
          with hands-on experience in backend and full-stack development.
          I enjoy working with Java (Spring Boot) and TypeScript (Angular) to build
          secure, maintainable, and scalable systems.
        </p>
        <p>
          My interests include backend architecture, API development, fintech systems,
          and AI-assisted software solutions. I thrive in collaborative environments
          and enjoy continuously learning new technologies.
        </p>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="section">
      <h2>Featured Projects</h2>

      <div class="card project">
        <h3>ChamaHub – Digital Chama Management Platform</h3>
        <p class="project-desc">
          A multi-chama management system designed to digitize group savings,
          contributions, and loan management.
        </p>
        <ul>
          <li>Multi-group (chama) support with role-based access</li>
          <li>Contributions and loan tracking modules</li>
          <li>Email notifications for approvals and updates</li>
          <li>Planned M-Pesa API integration for automated payments</li>
        </ul>
        <p class="links">
          <a href="https://chama-hub-frontend-1e8s.vercel.app/" target="_blank">Live Demo</a>
        </p>
      </div>

      <div class="card project">
        <h3>MakaoSafe – Property & Housing Management System</h3>
        <p class="project-desc">
          A web platform aimed at simplifying property management and tenant interactions.
        </p>
        <ul>
          <li>Property and tenant records management</li>
          <li>Secure backend workflows</li>
          <li>Modern Angular UI focused on usability</li>
        </ul>
        <p class="links">
          <a href="https://makao-safe-frontend.vercel.app/" target="_blank">Live Demo</a>
        </p>
      </div>

      <div class="card project">
        <h3>Online Shopping System (Team Project)</h3>
        <ul>
          <li>Built core e-commerce features in a 3-member team</li>
          <li>Implemented CRUD backend logic for multiple entities</li>
          <li>Designed and styled 8+ responsive UI pages</li>
        </ul>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="section">
      <h2>Technical Skills</h2>
      <div class="card skills">
        <ul>
          <li><strong>Backend:</strong> Java, Spring Boot, REST APIs, MySQL</li>
          <li><strong>Frontend:</strong> Angular, TypeScript, HTML, CSS, SCSS</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL (Beginner)</li>
          <li><strong>Tools:</strong> Git, GitHub, Linux Basics</li>
          <li><strong>Networking:</strong> LAN/WAN troubleshooting, basic cybersecurity</li>
          <li><strong>Other:</strong> Agile teamwork, SDLC, API integration</li>
        </ul>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="section">
      <h2>Experience</h2>

      <div class="card">
        <h3>Kenya Power – IT Department (Attachment)</h3>
        <p class="time">Jan – Apr 2024 | Nyeri</p>
        <ul>
          <li>Provided IT support and troubleshooting for 50+ staff users</li>
          <li>Worked with networking infrastructure and basic cybersecurity practices</li>
          <li>Gained experience working in a large enterprise IT environment</li>
        </ul>
      </div>

      <div class="card">
        <h3>EM Tech Hub – Software Development Intern</h3>
        <p class="time">Feb – Apr 2024 | Remote (Tatu City)</p>
        <ul>
          <li>Developed web applications using Angular, Spring Boot, and MySQL</li>
          <li>Integrated APIs into a prototype e-commerce system</li>
          <li>Worked in an agile, collaborative development environment</li>
        </ul>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <p>© 2026 Evans Mwaura Mburu • Built with Angular</p>
    </footer>

  </div>
  `,
  styles: [`
    :host {
      display: block;
      background: linear-gradient(135deg, #020617, #0a0f1a);
      color: #e5e7eb;
      padding: 20px;
      font-family: 'Segoe UI', sans-serif;
    }

    .container {
      max-width: 950px;
      margin: auto;
    }

    .header {
      text-align: center;
      margin-bottom: 50px;
    }

    .profile-img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      border: 3px solid #38bdf8;
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.7);
      object-fit: cover;
    }

    h1 {
      margin-top: 15px;
      font-size: 34px;
      color: #38bdf8;
    }

    .tagline {
      color: #93c5fd;
      margin-bottom: 10px;
      font-weight: 500;
    }

    .aspiration {
      max-width: 700px;
      margin: 10px auto 20px;
      color: #c7d2fe;
    }

    .contact a {
      color: #38bdf8;
      text-decoration: none;
      margin: 0 5px;
    }

    .section {
      margin-top: 45px;
    }

    h2 {
      color: #38bdf8;
      border-left: 5px solid #38bdf8;
      padding-left: 12px;
      margin-bottom: 20px;
    }

    .card {
      background: #020617;
      border: 1px solid #1e293b;
      padding: 22px;
      border-radius: 14px;
      margin-bottom: 20px;
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.08);
    }

    .project h3 {
      color: #7dd3fc;
    }

    .project-desc {
      color: #cbd5f5;
      margin-bottom: 10px;
    }

    .links a {
      color: #38bdf8;
      font-weight: 500;
    }

    ul {
      margin-left: 20px;
    }

    li {
      margin-bottom: 8px;
    }

    .time {
      color: #94a3b8;
      font-size: 14px;
    }

    .footer {
      text-align: center;
      margin-top: 60px;
      color: #64748b;
      font-size: 14px;
    }

    @media (max-width: 600px) {
      h1 { font-size: 26px; }
      .card { padding: 16px; }
    }
  `]
})
export class AppComponent {}
