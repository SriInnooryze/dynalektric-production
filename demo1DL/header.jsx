/* header.jsx — shared site header and mobile drawer */

const NAV_LINKS = [
  { id: 'home',       label: 'Home',                        href: './Dynalektric.html' },
  { id: 'about',      label: 'About',                       href: './about.html' },
  { id: 'products',   label: 'Products & Solutions',        href: './products-solutions.html' },
  { id: 'rnd',        label: 'Innovation Portfolio',         href: './innovation-rd.html' },
  { id: 'industries', label: 'Industries & Applications',   href: './industries-applications.html' },
  { id: 'export',     label: 'Export',                      href: './export.html' },
  { id: 'contact',    label: 'Contact',                     href: './contact.html' },
];

function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const currentPage = document.body.dataset.page || 'home';

  return (
    <>
      <header className="topbar" role="banner">
        <div className="topbar-inner">
          <a className="topbar-logo" href="./Dynalektric.html" aria-label="Dynalektric home">
            <img src={(window.__resources && window.__resources.dynaLogo) || "assets/dynalektric-logo.png"} alt="Dynalektric, Power Motion Safety" width="350" height="150" />
          </a>
          <nav className="topbar-nav" aria-label="Main navigation">
            {NAV_LINKS.map(n => (
              <a
                key={n.id}
                className="nav-link"
                href={n.href}
                aria-current={currentPage === n.id ? 'page' : undefined}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="topbar-cta">
            <a className="btn btn-primary" href="./contact.html" style={{ padding: '12px 22px' }} aria-label="Submit RFQ on contact page">
              Submit RFQ <span className="arrow" aria-hidden="true">→</span>
            </a>
            <button className="menu-btn" onClick={() => setDrawerOpen(true)} aria-label="Open menu">Menu</button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${drawerOpen ? 'is-open' : ''}`} role="dialog" aria-label="Mobile navigation" aria-hidden={!drawerOpen}>
        <button className="menu-btn close-btn" onClick={() => setDrawerOpen(false)} aria-label="Close menu">Close</button>
        {NAV_LINKS.map(n => (
          <a
            key={n.id}
            className="nav-link"
            href={n.href}
            aria-current={currentPage === n.id ? 'page' : undefined}
          >
            {n.label}
          </a>
        ))}
        <a className="btn btn-primary" href="./contact.html" style={{ marginTop: 24, alignSelf: 'flex-start' }}>
          Submit RFQ <span className="arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
}

window.Header = Header;
