import { useState, useEffect, useRef } from 'react';
import './home.css';

const skills = [
  'C Programming',
  'JavaScript',
  'React.js',
  'HTML & CSS',
  'Bootstrap',
  'Django',
  'Python',
  'Basic AI & Machine Learning',
  'Cybersecurity Fundamentals',
];

const projects = [
  {
    title: 'Smart Blind Stick',
    category: 'Assistive Technology',
    summary:
      'Developed an intelligent assistive system for visually impaired individuals using ultrasonic sensors, water detection, and voice feedback for real-time navigation and safety.',
    focus: 'Raspberry Pi Pico · Ultrasonic Sensors · Water Sensor · Bluetooth Audio · IoT',
  },
  {
    title: 'HCMS (Hostel Complaint Management System)',
    category: 'Web Application',
    summary:
      'Developed a centralized digital platform to streamline hostel complaint registration, tracking, and resolution, improving communication between students and administration.',
    focus: 'Web Development · Database Management · User Authentication · CRUD Operations',
  },
  {
    title: 'Library Management System',
    category: 'Database Application',
    summary:
      'Designed and developed a digital system to manage book inventory, user records, and borrowing processes, enabling efficient tracking, reduced manual effort, and improved data organization.',
    focus: 'Database Management · CRUD Operations · User Authentication · System Design',
  },
];

const achievements = [
  {
    emoji: '🏆',
    title: 'SUSTAIN-A-THON 2026',
    category: 'Hackathon — 1st Prize',
    summary:
      'Secured 1st Prize by developing EcoVision AI, an AI-powered waste monitoring system with a role-based Android application enabling efficient interaction between citizens and municipal authorities for smarter urban waste management.',
  },
  {
    emoji: '🥉',
    title: 'CodeForge 3.0 Hackathon (IEEE)',
    category: 'Hackathon — 3rd Place',
    summary:
      'Achieved 3rd Place in a 24-hour IEEE hackathon by collaborating in a team to design and develop a functional solution under strict time constraints, demonstrating strong problem-solving, teamwork, and rapid prototyping skills.',
  },
  {
    emoji: '🏆',
    title: 'Frontend Frontier – Web Development Competition',
    category: 'Competition — 1st Prize',
    summary:
      'Secured 1st Prize in a competitive frontend development event, designing and building a responsive, user-centric interface using modern UI/UX principles and web technologies.',
  },
];

function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);

  useEffect(() => {
    const sections = [projectsRef.current, achievementsRef.current].filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-lift--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -6% 0px', threshold: 0.08 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="home-page">
      <nav className="site-nav">
        <a href="#home" className="brand">Akshay Kumar P A</a>
        <ul>
          <li><a href="/#home">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#achievements">Achievements</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="home" className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Portfolio</span>
          <h1>Building real-world solutions through AI, ML, NLP, and Innovation.</h1>
          <p>
            Computer Engineering student with a passion for web development, AI, and cybersecurity.
            I enjoy building projects that solve real-world problems and continuously improving my technical skills.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">View Work</a>
            <a href="#contact" className="button button-secondary">Contact</a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <span>Focus Area</span>
            <strong>Core Specialization</strong>
            <p><strong>AI, Machine Learning, NLP, Robotics &amp; Intelligent Systems Development</strong></p>
          </div>

          <div className="hero-stats">
            <div>
              <strong>3+</strong>
              <span>Projects Built</span>
            </div>
            <div>
              <strong>9+</strong>
              <span>Technologies Used</span>
            </div>
          </div>
        </div>
      </header>

      <main id="about" className="page-content">
        <section className="section-panel">
          <div className="section-copy">
            <h2>About Me</h2>
            <p>
              I am a passionate Computer Engineering student focused on building real-world solutions
              using AI, Machine Learning, NLP, and robotics. I enjoy transforming ideas into practical
              systems that solve meaningful problems, especially in areas like healthcare and assistive
              technology.
            </p>
            <p>
              My core areas of interest include Artificial Intelligence, Cybersecurity, and Full Stack
              Web Development. I have worked on projects like intelligent threat detection systems,
              AI-based solutions, and web platforms that aim to solve practical problems.
            </p>
            <p>
              I am currently focused on developing impactful final year projects and participating in
              hackathons to improve my skills and gain real-world experience.
            </p>
          </div>
        </section>

        <section className="section-panel">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        <section className="section-panel">
          <h2>Education</h2>
          <div className="edu-list">
            <div className="edu-item">
              <span className="edu-badge">Diploma</span>
              <p>Diploma in Computer Engineering</p>
            </div>
            <div className="edu-item">
              <span className="edu-badge edu-badge--active">B.Tech</span>
              <p>B.Tech in Computer Science <em>(Pursuing)</em></p>
            </div>
          </div>
        </section>
      </main>

      <main ref={projectsRef} id="projects" className="projects-page scroll-lift">
        <div className="section-header">
          <h2>Projects</h2>
          <p>A selection of real-world solutions I have built.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-eyebrow">{project.category}</div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <span className="project-focus">{project.focus}</span>
            </article>
          ))}
        </div>
      </main>

      <main ref={achievementsRef} id="achievements" className="achievements-page scroll-lift">
        <div className="section-header">
          <h2>Hackathons &amp; Achievements</h2>
          <p>Awards and recognition from competitive events.</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <article key={item.title} className="achievement-card">
              <div className="achievement-emoji">{item.emoji}</div>
              <div className="achievement-eyebrow">{item.category}</div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </main>

      <main id="contact" className="contact-page">
        <div className="contact-grid">
          <section className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Have a project idea, collaboration, or just want to say hi?
              Feel free to reach out through the form or directly via the links below.
            </p>

            <div className="contact-links">
              <a href="mailto:akshaykumarachusmn@gmail.com" className="contact-link">
                <span className="contact-link-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>akshaykumarachusmn@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/aksHayk2255"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon">🐙</span>
                <div>
                  <strong>GitHub</strong>
                  <p>aksHayk2255</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/akshay-kumar-p-a-13282b24a"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-icon">💼</span>
                <div>
                  <strong>LinkedIn</strong>
                  <p>Akshay Kumar P A</p>
                </div>
              </a>
            </div>
          </section>

          <section className="contact-form-panel">
            {submitted ? (
              <div className="form-success">
                <span>🎉</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </section>
        </div>
      </main>

      <footer className="site-footer">
        <span>© 2026 Akshay Kumar P A</span>
      </footer>
    </div>
  );
}

export default Home;
