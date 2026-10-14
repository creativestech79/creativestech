import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { UserCircle, Menu, X, ChevronDown } from 'lucide-react';
import { fetchSettings } from '../lib/api';
import { useStoreSync } from '../lib/useStoreSync';

const PROJECT_LINKS = [
  { to: '/project/creative-design', label: 'Creative Design' },
  { to: '/project/multimedia', label: 'Multimedia' },
  { to: '/project/it-solution', label: 'IT Consultant' },
  { to: '/project/web-development', label: 'Web Development' },
  { to: '/project/cctv-specialist', label: 'CCTV Specialist' },
];

const navLinkClass = ({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [siteName, setSiteName] = useState('Paul Design & IT Solution');
  const location = useLocation();

  const load = useCallback(async () => {
    const { data } = await fetchSettings();
    if (data?.siteName) setSiteName(data.siteName);
  }, []);

  useEffect(() => {
    load();
  }, [load]);
  useStoreSync(load);

  useEffect(() => {
    setIsOpen(false);
    setProjectsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="site-navbar" aria-label="Navigasi utama">
      <div className="site-navbar-inner">
        <Link to="/" className="site-logo" aria-label={`${siteName} - Beranda`}>
          <img src="/assets/images/logo.jpe" alt={siteName} />
        </Link>

        <button
          type="button"
          className="site-menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
        >
          {isOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>

        <div id="site-navigation" className={`site-navigation${isOpen ? ' is-open' : ''}`}>
          <NavLink to="/" end className={navLinkClass}>Beranda</NavLink>
          <NavLink to="/about" className={navLinkClass}>Tentang</NavLink>

          <div className={`site-nav-project${projectsOpen ? ' is-open' : ''}`}>
            <NavLink to="/project" className={navLinkClass}>Proyek</NavLink>
            <button
              type="button"
              className="site-project-toggle"
              onClick={() => setProjectsOpen((open) => !open)}
              aria-label="Tampilkan kategori proyek"
              aria-expanded={projectsOpen}
              aria-controls="project-submenu"
            >
              <ChevronDown size={16} aria-hidden="true" />
            </button>
            <div className="site-project-menu">
              {PROJECT_LINKS.map(({ to, label }) => (
                <NavLink key={to} to={to} className={navLinkClass}>{label}</NavLink>
              ))}
            </div>
            <div id="project-submenu" className={`site-project-mobile-menu${projectsOpen ? ' is-open' : ''}`}>
              {PROJECT_LINKS.map(({ to, label }) => (
                <NavLink key={to} to={to} className={navLinkClass}>{label}</NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className={navLinkClass}>Kontak</NavLink>
          <NavLink to="/login" className="site-login-link">
            <UserCircle size={18} aria-hidden="true" />
            Masuk
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
