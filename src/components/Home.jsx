import { createElement, useEffect, useState } from 'react'
import {
  FaBrain,
  FaChartLine,
  FaCode,
  FaDocker,
  FaEnvelope,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import projects from '../data/projects.js'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', Icon: FaReact },
      { name: 'JavaScript', Icon: FaJs },
      { name: 'HTML5', Icon: FaHtml5 },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    skills: [{ name: 'Node.js', Icon: FaNodeJs }],
  },
  {
    title: 'AI & Data',
    skills: [
      { name: 'Python', Icon: FaPython },
      { name: 'Data Science', Icon: FaChartLine },
      { name: 'Machine Learning', Icon: FaBrain },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Docker', Icon: FaDocker },
      { name: 'Git', Icon: FaGitAlt },
    ],
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full-Stack', value: 'full-stack' },
  { label: 'AI & Data', value: 'ai-data' },
]

const petals = ['petal-one', 'petal-two', 'petal-three', 'petal-four', 'petal-five']

function Home() {
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const visibleProjects = projects.filter(
    (project) => activeFilter === 'all' || project.filter === activeFilter,
  )

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="navigation page-shell" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="Soumia Amari, home">
            <span className="wordmark-mark" aria-hidden="true">
              SA
            </span>
            <span>Soumia Amari</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a className="nav-contact" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="petals" aria-hidden="true">
            {petals.map((petal) => (
              <span className={`petal ${petal}`} key={petal} />
            ))}
          </div>
          <div className="hero-art" aria-hidden="true" />
          <div className="hero-content page-shell">
            <p className="eyebrow">Where logic meets art</p>
            <h1 id="hero-title">
              Hello, I&apos;m <span>Soumia Amari</span>
            </h1>
            <p className="hero-roles">
              Full-Stack Developer <span aria-hidden="true">·</span> AI &amp; Data
              Science Student
            </p>
            <p className="hero-tagline">
              I build full-stack applications and add intelligence to them.
            </p>
            <p className="availability">
              <span className="availability-dot" aria-hidden="true" />
              Open to PFE internship in AI / Data Science
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Let&apos;s connect
              </a>
              <a className="button button-outline" href="#projects">
                Explore projects
              </a>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to About">
            <span aria-hidden="true" />
          </a>
        </section>

        <section className="section page-shell about-section" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">A little about me</p>
            <h2>Curious by nature, thoughtful in my work.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy reveal">
              <p>
                I&apos;m Soumia, a full-stack developer and an AI &amp; Data Science
                student. I enjoy bringing useful ideas to life—from the first
                interface to the data and intelligence behind it.
              </p>
              <p>
                I&apos;m currently looking for a final-year PFE internship where I can
                keep learning and contribute to meaningful AI or data science work.
              </p>
              <blockquote>
                I build software the way I paint: structure first, then a little
                soul on top.
              </blockquote>
            </div>
            <div className="code-card reveal" aria-label="A code-style introduction">
              <div className="code-card-top" aria-hidden="true">
                <span />
                <span />
                <span />
                <small>soumia.js</small>
              </div>
              <pre>
                <code>
                  <span className="code-keyword">const</span> soumia = {'{'}
                  {'\n'}  roles: [
                  {'\n'}    <span className="code-string">
                      &quot;Full-Stack Developer&quot;
                    </span>
                  ,
                  {'\n'}    <span className="code-string">
                      &quot;AI &amp; Data Science Student&quot;
                    </span>
                  ,
                  {'\n'}  ],
                  {'\n'}  stack: [
                  {'\n'}    <span className="code-string">
                      &quot;React&quot;
                    </span>
                  , <span className="code-string">&quot;Node.js&quot;</span>,{' '}
                  <span className="code-string">&quot;Python&quot;</span>,
                  {'\n'}    <span className="code-string">
                      &quot;Machine Learning&quot;
                    </span>
                  ,
                  {'\n'}  ],
                  {'\n'}
                  {'}'};
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="page-shell">
            <div className="section-heading reveal">
              <p className="eyebrow">My toolkit</p>
              <h2>Skills I build with</h2>
              <p className="section-intro">
                A growing toolkit across web development, data, and machine
                learning.
              </p>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article className="skill-group reveal" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map(({ name, Icon }) => (
                      <li className="skill-item" key={name}>
                        {createElement(Icon, {
                          'aria-hidden': true,
                          focusable: false,
                        })}
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-shell projects-section" id="projects">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected work</p>
            <h2>Projects with purpose</h2>
            <p className="section-intro">
              A selection of projects from my public GitHub repositories, spanning
              interactive applications, data, and AI.
            </p>
          </div>
          <div className="project-filters reveal" aria-label="Filter projects">
            {filters.map(({ label, value }) => (
              <button
                aria-pressed={activeFilter === value}
                className={activeFilter === value ? 'filter-button is-active' : 'filter-button'}
                key={value}
                onClick={() => setActiveFilter(value)}
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
          <div className="project-grid" aria-live="polite">
            {visibleProjects.map((project, index) => (
              <article
                className="project-card reveal"
                key={project.slug}
                style={{ '--card-order': index }}
              >
                <div className="project-card-top">
                  <span className="project-category">{project.category}</span>
                  <FaCode aria-hidden="true" className="project-icon" />
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-role">
                  <strong>Role:</strong> {project.role}
                </p>
                <ul className="project-tags" aria-label="Technologies">
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.repository}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Code <span aria-hidden="true">↗</span>
                  </a>
                  {project.demo && (
                    <a href={project.demo} rel="noreferrer" target="_blank">
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="github-cta reveal">
            <a
              className="button button-primary"
              href="https://github.com/somiaamari"
              rel="noreferrer"
              target="_blank"
            >
              More on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="page-shell contact-content reveal">
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Building something thoughtful?</h2>
            <p>
              I&apos;m open to a PFE internship in AI or data science, and always
              happy to connect about good ideas.
            </p>
            <div className="contact-links">
              <a className="button button-primary" href="mailto:amarisoumia11405@gmail.com">
                <FaEnvelope aria-hidden="true" />
                Email
              </a>
              <a
                className="button button-outline"
                href="https://www.linkedin.com/in/amari-soumia-5a2521291"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
              <a
                className="button button-outline"
                href="https://github.com/somiaamari"
                rel="noreferrer"
                target="_blank"
              >
                <FaCode aria-hidden="true" />
                GitHub
              </a>
            </div>
            <p className="cv-note">
              <strong>CV:</strong> TODO — add a downloadable CV when a file is
              available.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-content">
          <p>Soumia Amari</p>
          <p>Code is my medium, and the screen is my canvas.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default Home
