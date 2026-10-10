import { useEffect, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaCode } from 'react-icons/fa'
import projects from '../data/projects.js'

const skillGroups = [
  {
    title: 'ML & Deep Learning',
    skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'Pandas'],
  },
  {
    title: 'ML Algorithms',
    skills: [
      'Linear Regression',
      'Logistic Regression',
      'Naïve Bayes',
      'KNN',
      'SVM',
      'Decision Trees',
      'Random Forest',
      'Gradient Boosting',
      'XGBoost',
      'K-Means',
      'Hierarchical Clustering',
      'DBSCAN',
      'PCA',
      'Kernel PCA',
      'SVD',
      'NMF',
      'Cross-validation',
      'Regularization',
    ],
  },
  {
    title: 'Deep Learning Models',
    skills: [
      'MLP',
      'CNN (ResNet, MobileNet, EfficientNet)',
      'RNN',
      'LSTM',
      'GRU',
      'Autoencoders',
      'GAN',
      'Transfer Learning',
      'Adam optimizer',
      'Batch Normalization',
    ],
  },
  {
    title: 'NLP & RAG',
    skills: [
      'RNN',
      'LSTM',
      'BERT',
      'BART',
      'LlamaIndex',
      'RAG',
      'Vector embeddings',
      'Reranking',
      'Tokenization',
      'Lemmatization',
      'NER',
      'POS tagging (HMM, Viterbi)',
      'Bag of Words',
      'Word embeddings',
      'Seq2seq',
      'Attention mechanisms',
      'Neural machine translation',
    ],
  },
  {
    title: 'Computer Vision',
    skills: ['Image classification', 'Object detection', 'Image segmentation'],
  },
  {
    title: 'MLOps',
    skills: [
      'Flask',
      'Model deployment via REST API',
      'MLflow',
      'TensorFlow Serving',
      'CI/CD',
    ],
  },
  {
    title: 'Programming & Web',
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'SQL',
      'React',
      'Node.js',
      'Express.js',
      'HTML/CSS',
      'Tailwind',
      'Streamlit',
    ],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Neo4j', 'Qdrant', 'Cassandra'],
  },
  {
    title: 'Tools & Design',
    skills: ['Docker', 'Git', 'Postman', 'Figma', 'Adobe Illustrator', 'Photoshop'],
  },
]

const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'Full-Stack', value: 'full-stack' },
  { label: 'AI & Data', value: 'ai-data' },
  { label: 'UI / UX Design', value: 'design' },
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
            <a className="nav-cv" href="/Soumia-Amari-CV.pdf" download>
              CV
            </a>
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
              Open to opportunities in AI / Data Science
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
            <h2>A little about me</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy reveal">
              <p>
                I&apos;m Soumia, a full-stack developer and an AI &amp; Data Science
                student. I enjoy bringing useful ideas to life—from the first
                interface to the data and intelligence behind it.
              </p>
              <p>
                I&apos;m eager to keep learning and contribute to meaningful AI or
                data science work.
              </p>
              <blockquote>
                I build software the way I paint: structure first, then a little
                soul on top.
              </blockquote>
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
                    {group.skills.map((skill) => (
                      <li className="skill-item" key={skill}>
                        <span>{skill}</span>
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
            <p className="eyebrow">All my work</p>
            <h2>Projects</h2>
            <p className="section-intro">
              Academic and personal projects, including work currently in progress.
            </p>
          </div>
          <div className="project-filters reveal" aria-label="Filter projects">
            {projectFilters.map(({ label, value }) => (
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
                  {project.status && (
                    <span className="project-status">{project.status}</span>
                  )}
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
                  {project.repository && (
                    <a
                      href={project.repository}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Code <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} rel="noreferrer" target="_blank">
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="page-shell contact-content reveal">
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Building something thoughtful?</h2>
            <p>
              I&apos;m always happy to connect about good ideas and thoughtful
              projects.
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
              <a
                className="button button-outline"
                href="/Soumia-Amari-CV.pdf"
                download
              >
                Download CV
              </a>
            </div>
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
