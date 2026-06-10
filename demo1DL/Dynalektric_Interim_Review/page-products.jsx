/* page-products.jsx — interactive product explorer */

function PageProducts({ navigate, focusId }) {
  useReveal();

  // active group + sub-category state
  const initialGroup = (focusId && PRODUCTS.find(p => p.id === focusId)) ? focusId : PRODUCTS[0].id;
  const [activeGroup, setActiveGroup] = React.useState(initialGroup);
  const [activeSubByGroup, setActiveSubByGroup] = React.useState(() =>
    PRODUCTS.reduce((acc, p) => { acc[p.id] = p.subcategories[0].code; return acc; }, {})
  );

  const group = PRODUCTS.find(p => p.id === activeGroup) || PRODUCTS[0];
  const activeSubCode = activeSubByGroup[group.id];
  const sub = group.subcategories.find(s => s.code === activeSubCode) || group.subcategories[0];
  const subDetail = (window.SUBCAT_DETAIL || SUBCAT_DETAIL)[sub.code] || {};

  React.useEffect(() => {
    if (focusId && focusId !== activeGroup && PRODUCTS.find(p => p.id === focusId)) {
      setActiveGroup(focusId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusId]);

  const selectGroup = (id) => {
    setActiveGroup(id);
    // scroll to the explorer top
    const el = document.getElementById('product-explorer');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const selectSub = (code) => {
    setActiveSubByGroup(s => ({ ...s, [group.id]: code }));
    // scroll to detail panel on mobile
    if (window.matchMedia('(max-width: 1000px)').matches) {
      const el = document.getElementById('subcat-detail');
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        setTimeout(() => window.scrollTo({ top, behavior: 'smooth' }), 80);
      }
    }
  };

  return (
    <main className="page-enter">
      {/* HERO — single H1 */}
      <section className="page-hero page-hero--split">
        <div className="container">
          <div className="page-hero-copy">
            <div className="mono">PRODUCTS AND SOLUTIONS</div>
            <h1>Electrical and electronics products for industrial applications.</h1>
            <p className="lead">
              Custom magnetics, power systems, control panels and integrated assemblies, engineered for industrial requirements across six sectors. Select a product group to explore specifications.
            </p>
          </div>
          <div className="page-hero-visual">
            <img
              src="./assets/card-control.jpg"
              alt="Dynalektric control panel and power electronics manufacturing"
              width="720"
              height="540"
            />
          </div>
        </div>
      </section>

      {/* EXPLORER */}
      <section className="section" id="product-explorer">
        <div className="container">

          {/* Mobile-only horizontal group tabs */}
          <nav className="prodx-tabs" aria-label="Select product group">
            {PRODUCTS.map(p => (
              <button
                key={p.id}
                className={`prodx-tab ${activeGroup === p.id ? 'is-active' : ''}`}
                onClick={() => selectGroup(p.id)}
                aria-current={activeGroup === p.id ? 'true' : undefined}
              >
                <span className="mono num">{p.num}</span>
                <span>{p.name}</span>
              </button>
            ))}
          </nav>

          <div className="prodx-layout">

            {/* LEFT — Group nav */}
            <aside className="prodx-rail" aria-label="Product groups">
              <div className="prodx-rail-head">
                <div className="mono" style={{ color: 'var(--ink-muted)' }}>Product groups</div>
                <div className="mono" style={{ color: 'var(--accent)', fontWeight: 600 }}>{PRODUCTS.length}</div>
              </div>
              {PRODUCTS.map(p => (
                <button
                  key={p.id}
                  className={`prodx-rail-item ${activeGroup === p.id ? 'is-active' : ''}`}
                  onClick={() => selectGroup(p.id)}
                  aria-current={activeGroup === p.id ? 'true' : undefined}
                >
                  <span className="num">{p.num}</span>
                  <span className="name">{p.name}</span>
                  <span className="count mono">{p.subcategories.length}</span>
                </button>
              ))}

              <div className="prodx-rail-cta">
                <div className="mono" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>Need help choosing?</div>
                <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('contact')}>
                  Talk to engineering
                </button>
              </div>
            </aside>

            {/* RIGHT — Group overview + sub-cat explorer + detail */}
            <div className="prodx-main">

              {/* Group header */}
              <header className="prodx-group-head">
                <div className="prodx-group-num">{group.num}</div>
                <div className="prodx-group-meta">
                  <div className="mono" style={{ color: 'var(--accent)', fontWeight: 600 }}>Product group {group.num}</div>
                  <h2>{group.name}</h2>
                  <p className="lead">{group.tagline}</p>
                </div>
              </header>

              <div className="prodx-group-body">
                <div className="prodx-group-overview">
                  <div className="mono" style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: 8 }}>Overview</div>
                  <p>{group.overview}</p>
                </div>
                <div className="prodx-group-image">
                  <image-slot
                    id={`product-detail-${group.id}`}
                    placeholder={`Drop ${group.name} image`}
                    shape="rect"
                  ></image-slot>
                </div>
              </div>

              {/* Group-level placeholders */}
              <div className="prodx-group-specs">
                <div className="mono" style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: 16 }}>Specification placeholders for {group.name}</div>
                <div className="prodx-spec-row">
                  {group.placeholders.map(s => (
                    <div className="prodx-spec-cell" key={s.k}>
                      <div className="k">{s.k}</div>
                      <div className="v">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SUB-CATEGORY EXPLORER */}
              <div className="prodx-subcat">
                <div className="prodx-subcat-head">
                  <div>
                    <div className="mono" style={{ color: 'var(--ink-muted)' }}>Sub-category explorer</div>
                    <h3 style={{ marginTop: 6 }}>Select a sub-category</h3>
                  </div>
                  <div className="mono" style={{ color: 'var(--ink-muted)' }}>
                    {group.subcategories.length} items in {group.name}
                  </div>
                </div>

                <div className="prodx-subcat-grid">
                  {group.subcategories.map(s => {
                    const isActive = s.code === activeSubCode;
                    return (
                      <button
                        key={s.code}
                        className={`prodx-subcat-card ${isActive ? 'is-active' : ''}`}
                        onClick={() => selectSub(s.code)}
                        aria-pressed={isActive}
                      >
                        <div className="code mono">{s.code}</div>
                        <div className="name">{s.name}</div>
                        <div className="detail">{s.detail}</div>
                        <div className="card-foot">
                          <span className="mono">{isActive ? 'Showing' : 'View details'}</span>
                          <span className="arrow">→</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SUB-CATEGORY DETAIL PANEL */}
              <article id="subcat-detail" className="prodx-detail" aria-live="polite">
                <header className="prodx-detail-head">
                  <div className="prodx-detail-crumbs">
                    <span className="mono">Selected</span>
                    <span className="mono crumb-group">{group.name}</span>
                    <span className="mono sep">/</span>
                    <span className="mono crumb-sub">{sub.name}</span>
                  </div>
                  <h3>{sub.name}</h3>
                  <p>{subDetail.description || sub.detail}</p>
                </header>

                <div className="prodx-detail-body">
                  {/* Applications */}
                  <section className="prodx-detail-block">
                    <h4>Typical applications</h4>
                    <ul className="prodx-list">
                      {(subDetail.applications || []).map((a, i) => (
                        <li key={i}><span className="mono">+</span> <span>{a}</span></li>
                      ))}
                    </ul>
                  </section>

                  {/* Specifications */}
                  <section className="prodx-detail-block prodx-detail-specs">
                    <h4>Specification placeholders</h4>
                    <div className="prodx-spec-row prodx-spec-row-dense">
                      {(subDetail.specs || []).map(s => (
                        <div className="prodx-spec-cell" key={s.k}>
                          <div className="k">{s.k}</div>
                          <div className="v">{s.v}</div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Relevant industries */}
                  <section className="prodx-detail-block">
                    <h4>Relevant industries</h4>
                    <div className="prodx-ind-chips">
                      {(subDetail.industries || []).map(iid => {
                        const ind = INDUSTRIES.find(x => x.id === iid);
                        if (!ind) return null;
                        return (
                          <button
                            key={iid}
                            className="prodx-ind-chip"
                            onClick={() => navigate('industries', iid)}
                          >
                            {ind.name} →
                          </button>
                        );
                      })}
                    </div>
                  </section>
                </div>

                {/* Detail CTAs */}
                <footer className="prodx-detail-cta">
                  <button className="btn btn-primary" onClick={() => navigate('contact')}>
                    Submit RFQ for {sub.name} <span className="arrow">→</span>
                  </button>
                  <button className="btn btn-secondary" onClick={() => navigate('contact')}>
                    Request datasheet
                  </button>
                  <span className="mono prodx-detail-note">Datasheet on request. Final specification subject to engineering review.</span>
                </footer>
              </article>

              {/* INTERNAL LINKS to industries + export + contact */}
              <div className="prodx-links">
                <div>
                  <div className="mono" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>Where it is used</div>
                  <div className="prodx-link-row">
                    {group.industries.slice(0, 4).map(iid => {
                      const ind = INDUSTRIES.find(x => x.id === iid);
                      return ind ? (
                        <a key={iid} onClick={() => navigate('industries', iid)} className="prodx-link">
                          {ind.name} <span className="arrow">→</span>
                        </a>
                      ) : null;
                    })}
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>Procurement support</div>
                  <div className="prodx-link-row">
                    <a onClick={() => navigate('export')} className="prodx-link">Export readiness <span className="arrow">→</span></a>
                    <a onClick={() => navigate('contact')} className="prodx-link">Submit RFQ <span className="arrow">→</span></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA navigate={navigate} />
      <Footer navigate={navigate} />
    </main>
  );
}

window.PageProducts = PageProducts;
