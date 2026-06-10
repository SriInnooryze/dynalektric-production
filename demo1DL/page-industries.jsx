/* page-industries.jsx */

function PageIndustries({ navigate, focusId }) {
  useReveal();
  const [activeRow, setActiveRow] = React.useState(focusId || INDUSTRIES[0].id);
  const [activeCol, setActiveCol] = React.useState(null);

  React.useEffect(() => {
    if (focusId) setActiveRow(focusId);
  }, [focusId]);

  const activeIndustry = INDUSTRIES.find(i => i.id === activeRow) || INDUSTRIES[0];

  return (
    <main className="page-enter">
      <section className="page-hero page-hero--split">
        <div className="container">
          <div className="page-hero-copy">
            <div className="mono">INDUSTRIES AND APPLICATIONS</div>
            <h1>Applications across railways, renewables, utilities and industrial sectors.</h1>
            <p className="lead">
              Six sectors served across Power, Motion and Safety. Use the matrix to see which product groups apply to each industry, then jump into a detailed view of applications and buyer profile.
            </p>
          </div>
          <div className="page-hero-visual">
            <img
              src="./assets/industry-railways.jpg"
              alt="Railway infrastructure — Dynalektric traction and industrial applications"
              width="720"
              height="540"
            />
          </div>
        </div>
      </section>

      {/* MATRIX */}
      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Capability matrix</span></div>
            <div>
              <h2>Product group to industry fit.</h2>
            </div>
          </div>

          <div className="matrix-intro">
            <div className="matrix-intro-copy">
              <h4>Interactive capability map</h4>
              <p>Select an industry row to see relevant product groups and applications. Hover a product group column to see all industries it covers.</p>
            </div>
            <div className="matrix-legend">
              <div className="matrix-legend-item">
                <span className="mark filled"></span>
                <span>Active fit</span>
              </div>
              <div className="matrix-legend-item">
                <span className="mark"></span>
                <span>Not currently mapped</span>
              </div>
            </div>
          </div>

          <div className="matrix-wrap">
            <div className="matrix-table matrix-4col">
              {/* Header row */}
              <div className="matrix-cell head">Industry · Product group</div>
              {PRODUCTS.map(p => (
                <div
                  key={p.id}
                  className={`matrix-cell head ${activeCol === p.id ? 'is-active-col' : ''}`}
                  onMouseEnter={() => setActiveCol(p.id)}
                  onMouseLeave={() => setActiveCol(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {p.num}<br />{p.name}
                </div>
              ))}

              {/* Body rows */}
              {INDUSTRIES.map(ind => (
                <React.Fragment key={ind.id}>
                  <div
                    className={`matrix-cell row-head ${activeRow === ind.id ? 'is-active-row' : ''}`}
                    onClick={() => setActiveRow(ind.id)}
                  >
                    <span className="num">{ind.num}</span>
                    <span>{ind.name}</span>
                  </div>
                  {PRODUCTS.map(p => {
                    const on = p.industries.includes(ind.id);
                    return (
                      <div
                        key={`${ind.id}-${p.id}`}
                        className={`matrix-cell ${on ? 'is-on' : ''} ${activeRow === ind.id ? 'is-active-row' : ''} ${activeCol === p.id ? 'is-active-col' : ''}`}
                        onClick={() => { setActiveRow(ind.id); setActiveCol(p.id); }}
                      >
                        <span className="mark"></span>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>

            {/* Detail panel */}
            <aside className="industry-detail">
              <div className="num">Selected industry</div>
              <h3>{activeIndustry.name}</h3>
              <p>{activeIndustry.body}</p>
              <div className="apps-label">Application examples</div>
              <ul className="apps">
                {activeIndustry.applications.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
              <div className="apps-label">Typical buyer need</div>
              <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6, marginTop: 4 }}>{activeIndustry.buyer}</p>
              {activeIndustry.qa && (
                <>
                  <div className="apps-label">Quality or testing consideration</div>
                  <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6, marginTop: 4 }}>{activeIndustry.qa}</p>
                </>
              )}
              <div className="apps-label">Relevant product groups</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {PRODUCTS.filter(p => p.industries.includes(activeRow)).map(p => (
                  <button
                    key={p.id}
                    onClick={() => navigate('products', p.id)}
                    style={{ background: 'var(--bg-alt)', border: '1px solid var(--rule)', padding: '8px 14px', fontSize: 12, cursor: 'pointer', borderRadius: 2, fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', textTransform: 'uppercase', transition: 'all 200ms' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--bg)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-alt)'; e.currentTarget.style.color = 'var(--ink)'; }}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
              <button className="btn btn-primary" style={{ marginTop: 32, width: '100%', justifyContent: 'center' }} onClick={() => navigate('contact')}>
                Submit RFQ for this application <span className="arrow">→</span>
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* DETAILED CARDS */}
      <section className="section reveal" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Industry deep dive</span></div>
            <div>
              <h2>Six sectors, one engineering approach.</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-soft)' }}>
                Detailed view of each industry served: applications, relevant product groups and how to start a conversation.
              </p>
            </div>
          </div>

          <div className="industry-cards">
            {INDUSTRIES.map(ind => (
              <article className="industry-card reveal" key={ind.id} id={`industry-${ind.id}`}>
                <div className="num">{ind.num}</div>
                <div>
                  <h3>{ind.name}</h3>
                  <p className="body" style={{ marginTop: 12 }}>{ind.body}</p>
                  <div className="apps-label" style={{ marginTop: 20 }}>Typical buyer need</div>
                  <p className="body" style={{ marginTop: 4, fontSize: 13 }}>{ind.buyer}</p>
                  {ind.qa && (
                    <div className="qa-note">
                      <div className="case-label">Quality or testing consideration</div>
                      <div className="case-value">{ind.qa}</div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="apps-label">Application examples</div>
                  <ul className="apps">
                    {ind.applications.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                </div>
                <div className="cta-col">
                  <div className="apps-label">Relevant product groups</div>
                  {PRODUCTS.filter(p => p.industries.includes(ind.id)).map(p => (
                    <button key={p.id} style={{ background: 'none', border: 0, borderBottom: '1px solid var(--rule)', padding: '10px 0', fontSize: 13, cursor: 'pointer', textAlign: 'left', width: '100%', color: 'var(--ink)', fontWeight: 500 }} onClick={() => navigate('products', p.id)}>
                      {p.name} →
                    </button>
                  ))}
                  <button className="btn btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }} onClick={() => navigate('contact')}>
                    Submit RFQ <span className="arrow">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA navigate={navigate} />
      <Footer navigate={navigate} />
    </main>
  );
}

window.PageIndustries = PageIndustries;
