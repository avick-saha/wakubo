import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#work', label: 'The work' },
  { href: '#motion', label: 'Motion' },
  { href: '#process', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="wrap">
        <nav>
          <a href="#top" className="logo">
            wakubo
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
            <a href="#start" className="btn btn-solid">
              Free test look
            </a>
            <button
              className={`menu-toggle${open ? ' open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
