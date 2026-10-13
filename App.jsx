
import './App.css'
import manjuImg from './assets/manjuimage.jpeg'

const projects = [
  {
    title: 'SLEEP DISORDER CLASSIFICATION',
    category: 'MACHINE LEARNING & GENETIC ALGORITHM',
    year: 'MCA PROJECT',
    image:
      'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=85',
    description:
      'A machine learning project that classifies sleep disorders using optimized models.',
    link: 'https://github.com/Manju0006/YOUR-SLEEP-PROJECT-REPO',
  },
  {
    title: 'METRO EXPLAINER BOT',
    category: 'PYTHON & STREAMLIT',
    year: 'PERSONAL PROJECT',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85',
    description:
      'An interactive bot designed to explain metro rail passenger guidance and operations.',
    link: 'https://github.com/Manju0006/metro_explainer_bot',
  },
  {
    title: 'DATA ANALYSIS PROJECTS',
    category: 'PYTHON, PANDAS & VISUALIZATION',
    year: 'PRACTICE PROJECTS',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
    description:
      'Exploring datasets, cleaning data, and communicating insights through analysis.',
    link: 'https://github.com/Manju0006',
  },
]

const services = [
  [
    '⌘',
    'PYTHON PROGRAMMING',
    'Writing Python code for data analysis, automation, and problem-solving.',
  ],
  [
    '▥',
    'DATA ANALYSIS',
    'Working with data using Pandas, NumPy, SQL, and visualization tools.',
  ],
  [
    '◇',
    'MACHINE LEARNING',
    'Exploring classification models, model evaluation, and optimization.',
  ],
  [
    '✧',
    'CREATIVE PROJECTS',
    'Turning ideas into practical projects and user-friendly digital experiences.',
  ],
]

const achievements = [
  [
    'DATA SCIENCE COURSE COMPLETION',
    'Successfully completed a Data Science course covering Python, data analysis, and machine learning.',
    '🎓',
  ],
  [
    '8.84 CGPA',
    'Earned an overall CGPA of 8.84 in Master of Computer Applications.',
    '🎓',
  ],
  [
    'ACADEMIC MEDAL',
    'Received a medal in recognition of academic achievement.',
    '🥇',
  ],
  [
    'SPECIAL STUDENT CERTIFICATE',
    'Received a Special Student Certificate for academic achievement.',
    '📜',
  ],
]

function SectionHeading({ children }) {
  return (
    <div className="section-heading">
      <span className="heading-line" />
      <h2>{children}</h2>
      <span className="heading-line" />
    </div>
  )
}

function App() {
  return (
    <main className="portfolio">
      <header className="hero" id="home">
        <div className="topline">
          <span>PERSONAL PORTFOLIO</span>
          <i className="topline-rule" />
          <span className="topline-right">
            DATA SCIENCE
            <br />
            PYTHON &amp; AI
          </span>
        </div>

        <h1 className="hero-title">PORTFOLIO</h1>

        <div className="ornament">────────◇────────</div>

        <div className="hero-copy">
          <p className="eyebrow">
            ASPIRING DATA SCIENTIST &amp; PYTHON DEVELOPER
          </p>

          <p className="intro">
            Hello, I'm Manju Bhargavi.
            <br />
            An MCA graduate passionate
            <br />
            about Python, data science,
            <br />
            machine learning, and learning
            <br />
            through meaningful projects.
          </p>

          <p className="signature">Manju Bhargavi</p>
          <p className="location">BASED IN INDIA</p>

          <a className="hero-link" href="#projects">
            EXPLORE MY WORK ↗
          </a>
        </div>

        <div className="portrait">
          <img src={manjuImg} alt="Portrait of Manju Bhargavi" />
          <span className="portrait-decoration">✧</span>
        </div>
      </header>

      <section className="featured" id="projects">
        <SectionHeading>FEATURED PROJECTS</SectionHeading>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={
                    project.title === 'SLEEP DISORDER CLASSIFICATION'
                      ? 'Sleep health and sleep disorder analysis'
                      : project.title
                  }
                  loading="lazy"
                />
              </div>

              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <span>{project.year}</span>

              <p className="project-description">
                {project.description}
              </p>

              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="details">
        <div className="detail-column" id="skills">
          <SectionHeading>WHAT I DO</SectionHeading>

          {services.map(([icon, title, description]) => (
            <article className="service" key={title}>
              <div className="service-icon">{icon}</div>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="detail-column achievements" id="achievements">
          <SectionHeading>ACHIEVEMENTS</SectionHeading>

          {achievements.map(([title, description, icon]) => (
            <article className="achievement" key={title}>
              <div className="laurel">{icon}</div>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education" id="education">
        <SectionHeading>EDUCATION</SectionHeading>

        <div className="education-card">
          <p className="education-label">MASTER'S DEGREE</p>
          <h3>Master of Computer Applications (MCA)</h3>
          <p>QIS College of Engineering &amp; Technology</p>
          <p className="education-score">8.84 CGPA</p>

          <p className="education-note">
            October 2023 – October 2025
          </p>
        </div>
      </section>

      <section className="brands">
        <SectionHeading>MY SKILLS &amp; INTERESTS</SectionHeading>

        <div className="brand-list">
          <span>
            PYTHON
            <small>PROGRAMMING</small>
          </span>
          <span>
            PANDAS
            <small>DATA ANALYSIS</small>
          </span>
          <span>
            ML
            <small>MACHINE LEARNING</small>
          </span>
          <span>
            SQL
            <small>DATABASES</small>
          </span>
          <span>
            NUMPY
            <small>DATA TOOLS</small>
          </span>
          <span>
            AI
            <small>PROJECTS</small>
          </span>
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="footer-portrait">
          <img src={manjuImg} alt="Manju Bhargavi" />
          <span>Let's Connect</span>
        </div>

        <div className="contact-info">
          <h2>LET'S BUILD SOMETHING MEANINGFUL</h2>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manjubhargavitalluri@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            ✉ &nbsp; manjubhargavitalluri@gmail.com
          </a>

          <p>⌖ &nbsp; India</p>

          <a
            href="https://github.com/Manju0006"
            target="_blank"
            rel="noreferrer"
          >
            ◈ &nbsp; GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            ◎ &nbsp; LinkedIn
          </a>
        </div>

        <blockquote>
          <span className="quote-mark">“</span>
          Every new skill begins
          <br />
          with curiosity, grows
          <br />
          through practice, and
          <br />
          becomes meaningful work.
          <cite>— MY JOURNEY</cite>
        </blockquote>

        <div className="footer-bottom">
          ✦ &nbsp; CURIOSITY. LEARNING. GROWTH. &nbsp; ✦
        </div>
      </footer>
    </main>
  )
}

export default App
