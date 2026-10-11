import { usePageContent } from '../lib/usePageContent';
import { parseContentList } from '../lib/content-defaults';

const SKILL_ICONS = [
  ['fa-solid fa-palette', '#38bdf8'],
  ['fa-brands fa-laravel', '#ff2d20'],
  ['fa-solid fa-database', '#06b6d4'],
  ['fa-brands fa-figma', '#a855f7'],
  ['fa-solid fa-video', '#f59e0b'],
];

export default function About() {
  const content = usePageContent('about');
  const contact = usePageContent('contact');
  const skills = parseContentList(content.skills).map((line) => {
    const [name, description, percentage] = line.split('|').map((part) => part.trim());
    return { name, description, percentage: Number(percentage) || 0 };
  }).filter((skill) => skill.name);

  return (
    <>
      <div className="container">
        <h1 className="page-banner-title">{content?.title || <><span className="gradient-text">Tentang Kami</span></>}</h1>
        <p className="page-banner-subtitle">
          {content.subtitle}
        </p>
        <div className="breadcrumb">
          <a href="/">Home</a>
          <i className="fa-solid fa-angle-right" style={{ margin: '0 10px' }}></i>
          <span className="current">About</span>
        </div>
      </div>

      <main>
        <section className="about-section" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <div className="container">
            {/* Main About Grid (Profile Image + Biodata) */}
            <div className="about-grid">
              {/* Left Column: Portrait Photo with Glow */}
              <div className="about-image-wrapper">
                <div className="about-image-card">
                  <img src={content.profileImage} alt={content.profileName} className="about-img" id="profileImage" />
                  <div className="about-image-badge"></div>
                </div>
              </div>

              {/* Right Column: Bio & Biodata Details */}
              <div className="about-details">
                {/* Biodata Grid Table (Positioned ON TOP) */}
                <div className="biodata-grid" style={{ marginBottom: '28px' }}>
                  <div className="biodata-item">
                    <span className="bio-label"><i className="fa-solid fa-id-card"></i> Nama Lengkap</span>
                    <span className="bio-value">{content.profileName}</span>
                  </div>
                  <div className="biodata-item">
                    <span className="bio-label"><i className="fa-solid fa-user-gear"></i> Profesi</span>
                    <span className="bio-value">{content.profession}</span>
                  </div>
                  <div className="biodata-item">
                    <span className="bio-label"><i className="fa-solid fa-location-dot"></i> Lokasi</span>
                    <span className="bio-value">{contact?.address || 'Bekasi, Jawa Barat, Indonesia'}</span>
                  </div>
                  <div className="biodata-item">
                    <span className="bio-label"><i className="fa-solid fa-envelope"></i> Email</span>
                    <span className="bio-value">{contact?.email || 'paulussianipar@gmail.com'}</span>
                  </div>
                  <div className="biodata-item">
                    <span className="bio-label"><i className="fa-solid fa-phone"></i> No. Handphone / WA</span>
                    <span className="bio-value">{contact?.whatsapp || '+62 85162744708 (WA Only)'}</span>
                  </div>
                  <div className="biodata-item">
                    <span className="bio-label"><i className="fa-solid fa-circle-check" style={{ color: 'var(--emerald, #10b981)' }}></i> Status Freelance</span>
                    <span className="bio-value text-emerald" style={{ color: 'var(--emerald, #10b981)' }}>Available</span>
                  </div>
                </div>

                {/* Profile Heading & Description Text (Positioned BELOW) */}
                <h3 className="about-heading">
                  {content.profileHeading}
                </h3>
                {content?.description ? (
                  <div className="about-text" dangerouslySetInnerHTML={{ __html: content.description }} />
                ) : (
                  <p className="about-text">
                    Saya memfokuskan karir profesional saya untuk membantu perusahaan dan pemangku kepentingan membangun
                    produk digital berskala industri. Berbekal pemahaman arsitektur perangkat lunak yang matang serta dorongan
                    estetika visual, saya percaya setiap karya desain dan baris kode harus berdampak langsung pada kecepatan,
                    kenyamanan, dan kepuasan pengguna.
                  </p>
                )}
                
                {content?.vision && (
                  <div style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--text-color)' }}>Visi:</strong> {content.vision}
                  </div>
                )}
                {content?.mission && (
                  <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--text-color)' }}>Misi:</strong> {content.mission}
                  </div>
                )}

                {/* Action Buttons Group */}
                <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>

                  <a href="/contact" className="btn btn-outline">
                    <i className="fa-solid fa-comments"></i> Diskusi Proyek
                  </a>
                </div>
              </div>
            </div>

            {/* Technical Skills Bar Section */}
            <div style={{ marginTop: '70px' }}>
              <div className="section-title-wrap text-center">
                <span className="section-subtitle">Keahlian Utama</span>
                <h2 className="section-title">{content.skillHeading}</h2>
              </div>

              <div className="skills-grid">
                {skills.map((skill, index) => {
                  const [icon, color] = SKILL_ICONS[index % SKILL_ICONS.length];
                  const percentage = Math.min(100, Math.max(0, skill.percentage));
                  return (
                    <div key={`${skill.name}-${index}`} className="glass-card skill-card">
                      <div className="skill-header">
                        <div className="skill-name-wrap">
                          <div className="skill-icon-box">
                            <i className={icon} style={{ color }}></i>
                          </div>
                          <div className="skill-title-group">
                            <h4 className="skill-name">{skill.name}</h4>
                            <p className="skill-subtext">{skill.description}</p>
                          </div>
                        </div>
                        <div className="skill-percentage">{percentage}%</div>
                      </div>
                      <div className="skill-bar-bg">
                        <div className="skill-bar-fill" style={{ width: `${percentage}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
