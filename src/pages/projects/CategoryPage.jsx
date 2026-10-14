import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProjects } from '@/lib/api'
import { parseServiceLines } from '@/lib/content-defaults'
import { usePageContent } from '@/lib/usePageContent'
import { useStoreSync } from '@/lib/useStoreSync'
import ProjectPlaceholders from '@/components/ProjectPlaceholders'

const SERVICE_ICONS = {
  design: ['fa-id-card', 'fa-print', 'fa-mobile', 'fa-book-open', 'fa-shirt', 'fa-image'],
  media: ['fa-camera', 'fa-video', 'fa-wand-magic-sparkles', 'fa-film', 'fa-music', 'fa-cube'],
  web: ['fa-globe', 'fa-cart-shopping', 'fa-table-columns', 'fa-server', 'fa-magnifying-glass', 'fa-mobile-screen'],
  security: ['fa-camera', 'fa-wifi', 'fa-mobile-screen', 'fa-rotate', 'fa-network-wired', 'fa-shield-halved'],
}

export default function CategoryPage({ section, category, icon, breadcrumbTitle }) {
  const content = usePageContent(section)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const loadProjects = useCallback(async () => {
    const { data, error } = await fetchProjects({ category, status: 'published', pageSize: 20 })
    if (error) {
      console.error(`Gagal memuat project kategori "${category}":`, error)
      setProjects([])
    } else {
      setProjects(data || [])
    }
    setLoading(false)
  }, [category])

  useEffect(() => {
    loadProjects()
  }, [loadProjects])
  useStoreSync(loadProjects)

  const services = parseServiceLines(content.services)
  const tools = String(content.tools || '').split(',').map((tool) => tool.trim()).filter(Boolean)
  const serviceIcons = SERVICE_ICONS[section] || []
  const showPlaceholders = projects.length === 0 || projects.every((project) => project.is_placeholder)

  return (
    <>
      <div className="container">
        <h1 className="page-banner-title"><span className="gradient-text">{content.title}</span></h1>
        <p className="page-banner-subtitle">{content.subtitle}</p>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right" style={{ margin: '0 10px' }}></i>
          <Link to="/project">Project</Link>
          <i className="fa-solid fa-angle-right" style={{ margin: '0 10px' }}></i>
          <span className="current">{breadcrumbTitle || content.title}</span>
        </div>
      </div>

      <main>
        <section style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <div className="container">
            <div className="section-title-wrap text-center" style={{ marginBottom: '3rem' }}>
              <span className="section-subtitle" style={{ color: 'var(--brand-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {content.servicesEyebrow}
              </span>
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {content.servicesTitle}
              </h2>
              <p style={{ color: '#6b7280', maxWidth: '500px', margin: '0 auto' }}>
                {content.servicesIntro}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
              {services.map((service, index) => (
                <div key={`${service.title}-${index}`} className="glass-card" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', background: 'var(--surface-color)' }}>
                  <div style={{ fontSize: '1.75rem', color: 'var(--brand-primary)', marginBottom: '0.75rem' }}>
                    <i className={`fa-solid ${serviceIcons[index % serviceIcons.length] || icon}`}></i>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.6 }}>{service.description}</p>
                </div>
              ))}
            </div>

            <div className="glass-card" style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border-color)', marginBottom: '4rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                <i className={`fa-solid ${icon}`} style={{ color: 'var(--brand-primary)', marginRight: '0.5rem' }}></i>
                {content.toolsTitle}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {tools.map((tool) => (
                  <span key={tool} className="tag" style={{ background: 'var(--brand-primary)', color: 'white', padding: '0.35rem 0.9rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 500 }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="section-title-wrap" style={{ marginBottom: '2rem' }}>
              <h2 className="section-title" style={{ fontSize: '1.75rem' }}>{content.projectsTitle}</h2>
            </div>

            {loading ? (
              <div style={{ textAlign: 'center', padding: '3rem 0', color: '#6b7280' }}>
                <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}></i>
                Memuat proyek...
              </div>
            ) : showPlaceholders ? (
              <ProjectPlaceholders category={category} />
            ) : (
              <div className="projects-grid">
                {projects.map((project) => (
                  <Link key={project.id} to={project.slug ? `/project/${project.slug}` : '/project'} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <article className="glass-card project-card">
                      {project.image_url && (
                        <div className="project-img-box">
                          <img src={project.image_url} alt={project.title} loading="lazy" />
                        </div>
                      )}
                      <div className="project-body">
                        <h3 className="project-title">{project.title}</h3>
                        {project.client && <p style={{ color: 'var(--brand-primary)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{project.client}</p>}
                        <p className="project-snippet">{project.description}</p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
