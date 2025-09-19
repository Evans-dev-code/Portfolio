import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header class="header">
        <div class="profile-section">
          <img src="assets/Evans_Mwaura_Image.jpg" alt="Evans Mwaura" class="profile-pic" onerror="this.src='assets/placeholder-profile.jpg'">
          <h1 class="name">Evans Mwaura</h1>
          <h2 class="title">Web Developer | Computer Science Student</h2>
          <a href="assets/Evans_Mwaura_Mburu_resume.pdf" target="_blank" class="resume-btn" download="Evans_Mwaura_Resume.pdf">
            <span class="icon"></span>
            Download Resume
          </a>
        </div>
      </header>

      <section class="quote-section">
        <blockquote class="quote">
          "Code is like humor. When you have to explain it, it's bad."
        </blockquote>
      </section>

      <section class="about-section">
        <h2 class="section-title">About Me</h2>
        <div class="content">
          <p>
            Hi, I'm Evans! I'm passionate about building clean, modern, and user-friendly web applications.
            Currently pursuing my Bachelor's in Computer Science, I'm always learning and experimenting with new technologies.
            I'm also passionate about Cyber Security, Docker, and Kubernetes.
          </p>
        </div>
      </section>

      <section class="projects-section">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-icon"></div>
            <h3>Multi-Chama System</h3>
            <p>A system for managing savings groups (chamas), contributions, and member tracking.</p>
          </div>
          <div class="project-card">
            <div class="project-icon"></div>
            <h3>Employee Management System</h3>
            <p>A platform for managing employees, attendance, and payroll.</p>
          </div>
          <div class="project-card">
            <div class="project-icon"></div>
            <h3>Portfolio Website</h3>
            <p>This Angular-based portfolio website showcasing my skills and projects.</p>
          </div>
        </div>
      </section>

      <section class="contact-section">
        <h2 class="section-title">Contact Me</h2>
        <div class="contact-info">
          <div class="contact-item">
  <span class="contact-icon"></span>
  <a href="mailto:mwauraevans2003@gmail.com">mwauraevans2003@gmail.com</a>
</div>
          <div class="social-links">
            <a href="https://github.com/Evans-dev-code" target="_blank" class="social-link github">
              <span class="social-icon"></span>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/evans-mburu-8224b7341/" target="_blank" class="social-link linkedin">
              <span class="social-icon"></span>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer class="footer">
        <p>&copy; 2025 Evans Mwaura. Built with Angular.</p>
      </footer>
    </div>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .header {
      text-align: center;
      padding: 40px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: -20px -20px 40px -20px;
      border-radius: 20px 20px 0 0;
      color: white;
    }

    .profile-section {
      position: relative;
    }

    .profile-pic {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 20px;
      border: 5px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    }

    .profile-pic:hover {
      transform: scale(1.05);
    }

    .name {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 10px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .title {
      font-size: 1.4rem;
      font-weight: 300;
      margin-bottom: 30px;
      opacity: 0.9;
    }

    .resume-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 30px;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 500;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .resume-btn:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .quote-section {
      text-align: center;
      margin-bottom: 50px;
    }

    .quote {
      font-size: 1.5rem;
      font-style: italic;
      color: #666;
      background: #f8f9fa;
      padding: 30px;
      border-radius: 15px;
      border-left: 5px solid #667eea;
      position: relative;
    }

    .quote::before {
      content: '"';
      font-size: 4rem;
      color: #667eea;
      position: absolute;
      top: -10px;
      left: 20px;
      opacity: 0.3;
    }

    .section-title {
      font-size: 2.2rem;
      margin-bottom: 25px;
      color: #333;
      position: relative;
      padding-bottom: 10px;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 2px;
    }

    .about-section {
      margin-bottom: 50px;
    }

    .content p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #555;
      background: #f8f9fa;
      padding: 25px;
      border-radius: 15px;
    }

    .projects-section {
      margin-bottom: 50px;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
    }

    .project-card {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 1px solid #eee;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    .project-icon {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }

    .project-card h3 {
      font-size: 1.3rem;
      margin-bottom: 15px;
      color: #333;
    }

    .project-card p {
      color: #666;
      line-height: 1.6;
    }

    .contact-section {
      margin-bottom: 30px;
    }

    .contact-info {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 15px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 1.1rem;
      margin-bottom: 20px;
    }

    .contact-icon {
      font-size: 1.5rem;
    }

    .social-links {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 25px;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }

    .social-icon {
      font-size: 1.2rem;
    }

    .footer {
      text-align: center;
      padding: 20px 0;
      color: #666;
      border-top: 1px solid #eee;
      margin-top: 30px;
    }

    @media (max-width: 768px) {
      .container {
        margin: 10px;
        padding: 15px;
      }

      .name {
        font-size: 2.5rem;
      }

      .title {
        font-size: 1.2rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .social-links {
        flex-direction: column;
        align-items: center;
      }

      .quote {
        font-size: 1.2rem;
        padding: 20px;
      }
    }
  `]
})
export class AppComponent {
  title = 'evans-mwaura-portfolio';
}