import { Link } from 'react-router-dom'
import { PROJECT_PLACEHOLDERS } from '@/lib/project-placeholders'

export default function ProjectPlaceholders({ category }) {
  const projects = PROJECT_PLACEHOLDERS[category] || []

  return (
    <div className="project-placeholder-section">
      {projects.some((project) => !project.image_url) && (
        <div className="project-placeholder-note">
          <span className="project-placeholder-note-icon">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          </span>
          <div>
            <strong>Preview portofolio</strong>
            <p>Ini contoh konsep tampilan. Proyek asli akan ditampilkan di sini setelah dipublikasikan.</p>
          </div>
        </div>
      )}

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="glass-card project-card project-placeholder-card" key={project.title}>
            {project.image_url ? (
              <div className="project-placeholder-photo">
                <img src={project.image_url} alt={project.title} loading="lazy" />
              </div>
            ) : (
              <div
                className="project-placeholder-art"
                style={{ '--placeholder-accent': project.accent }}
                aria-hidden="true"
              >
                <span className="project-placeholder-orbit project-placeholder-orbit-one"></span>
                <span className="project-placeholder-orbit project-placeholder-orbit-two"></span>
                <span className="project-placeholder-counter">0{index + 1} / CONCEPT</span>
                <div className="project-placeholder-artwork">
                  <i className={`fa-solid ${project.icon}`}></i>
                  <span>{project.mark}</span>
                </div>
                <span className="project-placeholder-demo-label">CONTOH DEMO</span>
              </div>
            )}

            <div className="project-body">
              <span className="project-placeholder-type">{project.type}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-snippet">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="project-placeholder-cta">
        <div>
          <h3>Punya proyek serupa?</h3>
          <p>Ceritakan kebutuhan Anda, kami siap membantu dari ide hingga implementasi.</p>
        </div>
        <Link to="/contact" className="btn btn-primary">
          <i className="fa-solid fa-comments"></i>
          Diskusikan Proyek
        </Link>
      </div>
    </div>
  )
}
