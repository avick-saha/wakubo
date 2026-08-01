import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#image-studio', label: 'AI Image Studio' },
  { href: '#video-suite', label: 'AI Video Reels' },
  { href: '#pricing', label: 'Pricing & Costs' },
  { href: '#compare', label: 'Why AI Models' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="siteHeader" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap">
        <nav>
          <a href="#top" className="logo">
            waku<em>bo</em>
          </a>
          <ul className={`nav-links${open ? ' open' : ''}`}>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <a href="#pricing" className="btn btn-solid">
              See Pricing
            </a>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
