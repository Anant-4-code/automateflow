import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import GooeyNav from './ui/GooeyNav';
import logoLightMode from '../../../img/Black.png';
import logoDarkMode from '../../../img/White.png';

interface NavbarProps {
  theme?: string;
  toggleTheme?: () => void;
}

const CALENDLY_URL = 'https://calendly.com/sanyam-chhoriya/automate-flow-ai-demo?month=2026-05';

export default function AutomateFlowNavbar({ theme = 'dark', toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const logoSrc = theme === 'dark' ? logoDarkMode : logoLightMode;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 400ms cubic-bezier(0.16,1,0.3,1), backdrop-filter 400ms ease, border-color 400ms ease',
        ...(scrolled
          ? {
              background: theme === 'dark'
                ? 'rgba(8, 12, 18, 0.78)'
                : 'rgba(245, 248, 252, 0.82)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderBottom: theme === 'dark'
                ? '1px solid rgba(255,255,255,0.07)'
                : '1px solid rgba(0,0,0,0.08)',
            }
          : {}),
      }}
    >
      <div className="nav-shell">

        {/* ── LOGO (image-only) ── */}
        <a
          href="#home"
          aria-label="Automate Flow AI — Home"
          style={{ textDecoration: 'none' }}
        >
          <div className="logo-only">
            <img
              src={theme === 'dark' ? logoDarkMode : logoLightMode}
              alt="Automate Flow AI"
              className="logo-icon"
            />
          </div>
        </a>

        {/* ── CENTER PILL NAV (desktop only) ── */}
        <div className="nav-center">
          <GooeyNav items={navLinks} theme={theme} />

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="get-started-btn"
            id="nav-get-started-btn"
          >
            Get Started
            <ArrowUpRight style={{ width: 14, height: 14 }} />
          </a>
        </div>

        {/* ── RIGHT ACTIONS ── */}
        <div className="nav-actions">

          {/* Theme Toggle */}
          {toggleTheme && (
            <button
              id="nav-theme-toggle-btn"
              onClick={toggleTheme}
              className="nav-icon-btn"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun style={{ width: 17, height: 17 }} />
              ) : (
                <Moon style={{ width: 17, height: 17 }} />
              )}
            </button>
          )}

          {/* WhatsApp */}
          <a
            href="https://wa.me/919307783836"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-btn whatsapp"
            aria-label="Chat on WhatsApp"
            id="nav-whatsapp-btn"
          >
            <svg width="18" height="18" fill="#25D366" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>

          {/* Mobile Menu Toggle (hidden on desktop via CSS) */}
          <button
            id="nav-mobile-menu-btn"
            className="nav-icon-btn nav-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X style={{ width: 18, height: 18 }} />
            ) : (
              <Menu style={{ width: 18, height: 18 }} />
            )}
          </button>

        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      {mobileMenuOpen && (
        <div className="nav-mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-mobile-link${activeLink === link.href ? ' active' : ''}`}
              onClick={() => {
                setActiveLink(link.href);
                setMobileMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
            id="nav-mobile-get-started-btn"
          >
            Get Started
            <ArrowUpRight style={{ width: 14, height: 14 }} />
          </a>
        </div>
      )}
    </nav>
  );
}
