import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <header class="header">
      <img src="assets/Evans_Mwaura_Image.jpg" alt="Evans Mwaura" class="profile-img" />
      <h1>Evans Mwaura Mburu</h1>
      <p class="tagline">Software Developer • Backend & Full‑Stack • Final Year CS Student</p>
      <div class="contact">
        <p>Nairobi, Kenya</p>
        <p>Email: mwauraevans2003@gmail.com</p>
        <p>Phone: +254 715 431 785</p>
        <p>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a> |
          <a href="https://github.com" target="_blank">GitHub</a> |
          <a href="https://your-portfolio-link.com" target="_blank">Portfolio</a>
        </p>
      </div>
    </header>

    <section class="section">
      <h2>Projects</h2>
      <div class="card">
        <h3>Multi‑Chama Management System (Final Stages)</h3>
        <ul>
          <li>Handles multiple chamas (groups) with contributions tracking.</li>
          <li>Includes a full loan management module.</li>
          <li>Integrated email notifications for updates and approvals.</li>
          <li>Working on M‑Pesa API integration for automated payments.</li>
        </ul>

        <h3>Employee Management System (Under Development)</h3>
        <ul>
          <li>Managing employees, roles, and access levels.</li>
          <li>Focus on backend workflows & secure data operations.</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2>Technical Skills</h2>
      <div class="card skills">
        <ul>
          <li><strong>Languages:</strong> Java, C, JavaScript, HTML, CSS, SCSS, TypeScript</li>
          <li><strong>Frameworks:</strong> Angular, Spring Boot, Node.js (beginner)</li>
          <li><strong>Tools:</strong> Git/GitHub, MySQL, PostgreSQL (beginner)</li>
          <li><strong>Networking:</strong> Troubleshooting, LAN/WAN, Basic Cybersecurity</li>
          <li><strong>Other:</strong> API Integration, SDLC, Team Collaboration</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2>Experience</h2>
      <div class="card">
        <h3>Kenya Power – IT Department (Nyeri) | Attachment</h3>
        <p>Jan – Apr 2024</p>
        <ul>
          <li>Troubleshooted and resolved IT issues for 50+ staff users.</li>
          <li>Hands‑on networking and cybersecurity exposure.</li>
        </ul>

        <h3>EM Tech Hub – Remote Internship</h3>
        <p>Feb – Apr 2024</p>
        <ul>
          <li>Built Angular + Spring Boot + MySQL applications.</li>
          <li>Worked on e‑commerce prototype and API integrations.</li>
        </ul>

        <h3>University Internal Attachment Project</h3>
        <p>Jan – May 2023</p>
        <ul>
          <li>Led Online Shopping System development.</li>
          <li>Implemented user management, product listing & order tracking.</li>
        </ul>
      </div>
    </section>

  
  </div>
  `,
  styles: [`
    :host {
      display: block;
      background: #0a0f1a;
      color: #e0e7ff;
      padding: 20px;
      font-family: 'Segoe UI', sans-serif;
    }

    .container {
      max-width: 900px;
      margin: auto;
    }

    .header {
      text-align: center;
      margin-bottom: 40px;
    }

    .profile-img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 3px solid #00eaff;
      box-shadow: 0 0 15px #00eaff;
      object-fit: cover;
    }

    h1 {
      margin-top: 15px;
      font-size: 32px;
      color: #00eaff;
      text-shadow: 0 0 10px #00eaff;
    }

    .tagline {
      color: #9bb8ff;
      margin-bottom: 10px;
    }

    .contact a {
      color: #00eaff;
      text-decoration: none;
    }
    .contact a:hover {
      text-shadow: 0 0 10px #00eaff;
    }

    .section {
      margin-top: 40px;
    }

    h2 {
      color: #00eaff;
      border-left: 5px solid #00eaff;
      padding-left: 10px;
      margin-bottom: 15px;
      text-shadow: 0 0 10px #00eaff;
    }

    .card {
      background: #111827;
      border: 1px solid #1f2937;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0, 238, 255, 0.1);
    }

    ul {
      margin-left: 20px;
    }
    li {
      margin-bottom: 8px;
    }

    @media (max-width: 600px) {
      h1 { font-size: 26px; }
      .card { padding: 15px; }
    }
  `]
})
export class AppComponent {}
