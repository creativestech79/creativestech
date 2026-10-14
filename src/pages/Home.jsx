import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageContent } from '../lib/usePageContent';
import { parseContentList } from '../lib/content-defaults';

const SLIDES = [
  '/assets/images/slides/slide1.jpg',
  '/assets/images/slides/slide2.jpg',
  '/assets/images/slides/slide3.jpg',
];

const TEASER_CARDS = [
  { icon: 'fa-user-gear', path: '/about', buttonFallback: 'Buka Halaman About' },
  { icon: 'fa-cubes', path: '/project', buttonFallback: 'Buka Halaman Project' },
  { icon: 'fa-location-dot', path: '/contact', buttonFallback: 'Buka Halaman Contact' },
];

const PROJECT_TAGS = [
  ['fa-palette', 'Creative Design'],
  ['fa-film', 'Multimedia'],
  ['fa-headset', 'IT Consultant'],
  ['fa-code', 'Web Development'],
  ['fa-video', 'CCTV Specialist'],
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const content = usePageContent('home');
  const teaserCards = parseContentList(content.teaserCards)
    .map((line) => {
      const [title, description, button] = line.split('|').map((part) => part.trim());
      return { title, description, button };
    })
    .filter((card) => card.title);

  const nextSlide = () => setCurrentSlide((current) => (current + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((current) => (current - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="home-page-wrapper">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" aria-hidden="true" />
              <span>{content.heroBadge}</span>
            </div>

            <h1 className="hero-title" id="home-title">
              {content?.heroTitle || (
                <>
                  Membangun Solusi Digital
                  <span className="hero-title-highlight">Eksklusif &amp; Skalabel</span>
                </>
              )}
            </h1>

            <p className="hero-subtitle">
              Halo! Saya Paulus, seorang <span className="typewriter-text">IT Consultant</span>
            </p>
            <p className="hero-description">
              {content?.heroSubtitle || 'Menggabungkan keahlian pengembangan creative design dan full-stack web, arsitektur cloud, serta UI/UX modern untuk menciptakan pengalaman digital terbaik.'}
            </p>

            <div className="hero-cta-group">
              <Link to="/project" className="btn btn-primary hero-primary-cta">
                <i className="fa-solid fa-layer-group" aria-hidden="true" />
                {content?.heroButton || 'Lihat Portofolio Proyek'}
                <i className="fa-solid fa-arrow-right hero-cta-arrow" aria-hidden="true" />
              </Link>
              <Link to="/about" className="btn btn-outline hero-secondary-cta">
                Tentang Saya
              </Link>
            </div>

            <div className="hero-stats" aria-label="Ringkasan pengalaman">
              <div className="stat-item">
                <strong className="stat-number">{content.statProjects}<span>+</span></strong>
                <span className="stat-label">Proyek selesai</span>
              </div>
              <div className="stat-divider" aria-hidden="true" />
              <div className="stat-item">
                <strong className="stat-number">{content.statYears}<span>+</span></strong>
                <span className="stat-label">Tahun pengalaman</span>
              </div>
              <div className="stat-divider" aria-hidden="true" />
              <div className="stat-item">
                <strong className="stat-number">{content.statSatisfaction}<span>%</span></strong>
                <span className="stat-label">Kepuasan klien</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <figure className="hero-art-card" id="heroSlider">
              <div className="hero-slides" aria-label="Pilihan karya">
                {SLIDES.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    className={`hero-slide ${index === currentSlide ? 'is-active' : ''}`}
                    alt={`Karya Paulus, gambar ${index + 1} dari ${SLIDES.length}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    aria-hidden={index !== currentSlide}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={prevSlide}
                className="hero-slide-btn hero-slide-prev"
                aria-label="Lihat karya sebelumnya"
              >
                <i className="fa-solid fa-chevron-left" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="hero-slide-btn hero-slide-next"
                aria-label="Lihat karya berikutnya"
              >
                <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              </button>

              <div className="hero-slide-dots" aria-label="Pilih gambar karya">
                {SLIDES.map((slide, index) => (
                  <button
                    key={slide}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`hero-slide-dot ${index === currentSlide ? 'active' : ''}`}
                    aria-label={`Tampilkan gambar ${index + 1}`}
                    aria-current={index === currentSlide ? 'true' : undefined}
                  />
                ))}
              </div>

              <figcaption className="hero-art-overlay">
                {PROJECT_TAGS.map(([icon, label]) => (
                  <Link key={label} to="/project" className="hero-art-tag">
                    <i className={`fa-solid ${icon}`} aria-hidden="true" />
                    {label}
                  </Link>
                ))}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="home-teasers" aria-labelledby="teaser-title">
        <div className="container">
          <header className="section-title-wrap">
            <span className="section-subtitle">{content.teaserSubtitle}</span>
            <h2 className="section-title" id="teaser-title">{content.teaserTitle}</h2>
            {content?.aboutTeaser ? (
              <div className="section-description" dangerouslySetInnerHTML={{ __html: content.aboutTeaser }} />
            ) : (
              <p className="section-description">
                Jelajahi profil, proyek terbaru, serta informasi kontak dan lokasi studio.
              </p>
            )}
          </header>

          <div className="home-teaser-grid">
            {teaserCards.map((card, index) => {
              const preset = TEASER_CARDS[index] || TEASER_CARDS[0];
              return (
                <article key={`${card.title}-${index}`} className="glass-card teaser-card">
                  <div className="teaser-icon" aria-hidden="true">
                    <i className={`fa-solid ${preset.icon}`} />
                  </div>
                  <h3 className="teaser-title">{card.title}</h3>
                  <p className="teaser-desc">{card.description}</p>
                  <Link to={preset.path} className="teaser-link">
                    {card.button || preset.buttonFallback}
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
