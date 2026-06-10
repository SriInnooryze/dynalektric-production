/* page-export.jsx — Export page: supplier qualification for global industrial buyers
   Nine sections. One H1. Montserrat throughout. Priority weight on Trust, Certifications,
   Destination-Market Clearance. No invented certificate or registration numbers. */

function PageExport({ navigate }) {
  useReveal();

  /* scroll-depth analytics */
  React.useEffect(() => {
    const fired = {};
    function onScroll() {
      const sc = document.scrollingElement || document.documentElement;
      const pct = (sc.scrollTop + sc.clientHeight) / sc.scrollHeight;
      if (pct >= 0.5 && !fired['50']) { fired['50'] = 1; exportTrack('export_page_scroll_50'); }
      if (pct >= 0.9 && !fired['90']) { fired['90'] = 1; exportTrack('export_page_scroll_90'); }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="page-enter" data-screen-label="Export">

      {/* ===== SECTION 1 — HERO ===== */}
      <section className="page-hero export-hero">
        <div className="container">
          <div className="export-hero-grid">
            <div>
              <div className="mono">EXPORT CAPABILITY</div>
              <h1>Engineered in India. Prepared for global industrial requirements.</h1>
              <p className="lead">
                Dynalektric supplies magnetics, DC power systems, control panels and engineered assemblies with structured documentation, testing coordination and export support for international industrial buyers.
              </p>
              <div className="export-hero-cta">
                <button className="btn btn-primary" onClick={() => { exportTrack('export_rfq_start', { from: 'hero' }); navigate('contact'); }}>
                  Request an Export Quote <span className="arrow" aria-hidden="true">→</span>
                </button>
                <button className="btn btn-secondary" onClick={() => { exportTrack('supplier_qualification_click'); navigate('contact'); }}>
                  Start Supplier Qualification
                </button>
              </div>
              <div className="export-trust-row">
                {EXP_TRUST.map(t => (
                  <span className={`export-trust-chip ${t.state === 'cond' ? 'is-cond' : ''}`} key={t.label}>
                    <span className="export-trust-mark" aria-hidden="true" />
                    <span className="export-trust-label">{t.label}</span>
                    <span className="export-trust-note">{t.note}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="page-hero-visual">
              <img
                src="./assets/card-integrated.jpg"
                alt="Dynalektric integrated and assembled engineered systems"
                width="720"
                height="540"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 — SELF-SELECTION ===== */}
      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Global reach, sectors and portfolio</span></div>
            <div>
              <h2>Find the right export path by region, sector and product group.</h2>
              <p className="export-sub">Select a region, sector and product group to see the indicative HS heading, rating range, documentation and customisation for your requirement.</p>
            </div>
          </div>
          <ExportSelfSelect navigate={navigate} />
        </div>
      </section>

      {/* ===== SECTION 3 — TRUST AND VERIFICATION (priority) ===== */}
      <section className="section reveal export-priority" style={{ background: 'var(--panel-dark)', color: 'var(--on-dark)' }}>
        <div className="container">
          <div className="section-head" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <div className="eyebrow"><span className="mono" style={{ color: 'rgba(244,244,241,0.6)' }}>Priority · Trust and verification</span></div>
            <div>
              <h2 style={{ color: 'var(--on-dark)' }}>Verify Dynalektric as a supplier.</h2>
              <p className="export-sub" style={{ color: 'rgba(244,244,241,0.72)' }}>Legal identity, independent verification and financial readiness for procurement onboarding. Values shown as placeholders are confirmed with client-approved data.</p>
            </div>
          </div>

          <div className="export-verify-grid">
            <div className="export-verify-panel">
              <div className="mono export-verify-title">Legal identity</div>
              <div className="exp-spec-rows on-dark">
                {EXP_LEGAL.map(f => (
                  <div className="exp-spec-row" key={f.k}><span className="exp-label">{f.k}</span><span className="exp-spec-val">{f.v}</span></div>
                ))}
              </div>
              <div className="export-map" aria-label="Registered address map placeholder">
                <span className="mono">Registered address map</span>
              </div>
            </div>
            <div className="export-verify-side">
              <div className="export-verify-panel">
                <div className="mono export-verify-title">Financial readiness</div>
                <div className="exp-spec-rows on-dark">
                  {EXP_FINANCIAL.map(f => (
                    <div className="exp-spec-row" key={f.k}><span className="exp-label">{f.k}</span><span className="exp-spec-val">{f.v}</span></div>
                  ))}
                </div>
              </div>
              <div className="export-verify-panel">
                <div className="mono export-verify-title">Social proof</div>
                <p className="export-verify-p">Approved customer logos, anonymous case studies and approved testimonials are shared once the supplier qualification request is reviewed.</p>
                <div className="export-logo-row">
                  {[1, 2, 3, 4].map(i => <span className="export-logo-slot" key={i}>Approved logo</span>)}
                </div>
              </div>
              <div className="export-verify-actions">
                <button className="btn btn-primary" onClick={() => exportTrack('company_verification_download')}>Download Company Verification Pack <span className="arrow" aria-hidden="true">→</span></button>
                <button className="btn btn-ghost on-dark" onClick={() => exportTrack('clearance_scheme_view', { action: 'view_address' })}>View Registered Address</button>
                <button className="btn btn-ghost on-dark" onClick={() => { exportTrack('supplier_qualification_click'); navigate('contact'); }}>Submit Supplier Qualification Request</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4 — CERTIFICATIONS MATRIX (priority) ===== */}
      <section className="section reveal export-priority" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Priority · Certifications and standards</span></div>
            <div>
              <h2>Certifications and standards by product and market.</h2>
              <p className="export-sub">A three-status view across management systems and product or market standards. Status reflects current position and is confirmed with certificate references on request.</p>
            </div>
          </div>
          <CertMatrix />
        </div>
      </section>

      {/* ===== SECTION 5 — DESTINATION-MARKET CLEARANCE (priority) ===== */}
      <section className="section reveal export-priority">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Priority · Destination-market clearance</span></div>
            <div>
              <h2>Destination-market clearance guidance.</h2>
              <p className="export-sub">Select a destination country and product group to view a likely compliance path. Schemes shown are indicative and confirmed per product and order.</p>
            </div>
          </div>
          <ClearanceSelector navigate={navigate} />
          <div className="export-testing-note">
            <div className="mono export-verify-title" style={{ color: 'var(--accent-2)' }}>Testing support</div>
            <ul className="export-tick-list export-tick-blue">
              {EXP_TESTING_SUPPORT.map((t, i) => <li key={i}><span aria-hidden="true">›</span><span>{t}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6 — QUALITY, MANUFACTURING, INSPECTION ===== */}
      <section className="section reveal" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Quality and inspection readiness</span></div>
            <div>
              <h2>Engineering, quality and inspection readiness.</h2>
              <p className="export-sub">In-house engineering and documented quality discipline, built around your inspection plan and qualification programme.</p>
            </div>
          </div>
          <div className="export-quality-grid">
            <div className="export-quality-list">
              <ul className="export-tick-list">
                {EXP_QUALITY.map((q, i) => <li key={i}><span aria-hidden="true">›</span><span>{q}</span></li>)}
              </ul>
              <div className="export-inspect-callout">
                <span className="mono">Inspection</span>
                <p>We welcome customer inspection, third-party inspection and Factory Acceptance Tests based on agreed project requirements.</p>
              </div>
            </div>
            <div className="export-doc-cards">
              {EXP_QUALITY_DOCS.map(d => (
                <div className="export-doc-card2" key={d.code}>
                  <div className="mono num">{d.code}</div>
                  <div>
                    <h3>{d.title}</h3>
                    <p>{d.note}</p>
                  </div>
                  <button className="exp-textlink" onClick={() => exportTrack('certificate_download', { doc: d.title })}>Preview <span aria-hidden="true">→</span></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7 — TRADE COMPLIANCE, ESG, IP ===== */}
      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Trade compliance, ESG and IP</span></div>
            <div>
              <h2>Trade compliance, ESG and IP protection.</h2>
              <p className="export-sub">Screening, review and protection processes with clear status indicators. Items shown as under review or based on requirement are confirmed per order.</p>
            </div>
          </div>
          <div className="export-compliance-grid">
            <div className="export-compliance-col">
              <h3 className="export-col-title">Trade compliance and IP</h3>
              <div className="export-status-list">
                {EXP_TRADE.map(item => (
                  <div className="export-status-row" key={item.k}>
                    <span>{item.k}</span>
                    <span className={`export-chip ${EXP_STATUS_CHIP[item.s].cls}`}>{EXP_STATUS_CHIP[item.s].label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="export-compliance-col">
              <h3 className="export-col-title">ESG readiness</h3>
              <div className="export-status-list">
                {EXP_ESG.map(item => (
                  <div className="export-status-row" key={item.k}>
                    <span>{item.k}</span>
                    <span className={`export-chip ${EXP_STATUS_CHIP[item.s].cls}`}>{EXP_STATUS_CHIP[item.s].label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8 — PROCESS, DOCS, LOGISTICS ===== */}
      <section className="section reveal" style={{ background: 'var(--panel-dark)', color: 'var(--on-dark)' }}>
        <div className="container">
          <div className="section-head" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <div className="eyebrow"><span className="mono" style={{ color: 'rgba(244,244,241,0.6)' }}>From RFQ to delivery</span></div>
            <div>
              <h2 style={{ color: 'var(--on-dark)' }}>From RFQ to delivery.</h2>
              <p className="export-sub" style={{ color: 'rgba(244,244,241,0.72)' }}>A structured export workflow with confirmed Incoterms, documentation and logistics support.</p>
            </div>
          </div>

          <ol className="export-timeline">
            {EXP_PROCESS.map(s => (
              <li className="export-timeline-step" key={s.n}>
                <span className="export-timeline-num mono">{s.n}</span>
                <span className="export-timeline-text">{s.t}</span>
              </li>
            ))}
          </ol>

          <div className="export-trade-grid">
            <div className="export-trade-card">
              <div className="mono export-verify-title">Incoterms</div>
              <div className="export-incoterm-row">
                {EXP_INCOTERMS.map(t => <span className="export-incoterm" key={t}>{t}</span>)}
              </div>
              <p className="export-verify-p">Final Incoterms, payment terms and delivery responsibilities are confirmed in the quotation.</p>
            </div>
            <div className="export-trade-card">
              <div className="mono export-verify-title">Documentation provided</div>
              <div className="export-doc-cols">
                <div>
                  <div className="export-doc-subhead">Standard</div>
                  <ul className="export-tick-list on-dark">
                    {EXP_DOCS_STD.map((d, i) => <li key={i}><span aria-hidden="true">›</span><span>{d}</span></li>)}
                  </ul>
                </div>
                <div>
                  <div className="export-doc-subhead">Where applicable</div>
                  <ul className="export-tick-list on-dark">
                    {EXP_DOCS_APP.map((d, i) => <li key={i}><span aria-hidden="true">›</span><span>{d}</span></li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="export-trade-card">
              <div className="mono export-verify-title">Logistics support</div>
              <ul className="export-tick-list on-dark">
                {EXP_LOGISTICS2.map((d, i) => <li key={i}><span aria-hidden="true">›</span><span>{d}</span></li>)}
              </ul>
              <p className="export-verify-p">Indicative lead time is shared by product family. Fixed dates are confirmed at order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9 — AFTER-SALES, FAQ, EXPORT RFQ ===== */}
      <section className="section reveal" style={{ paddingBottom: 'calc(var(--section-y) * 1.1)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="mono">Start an export RFQ</span></div>
            <div>
              <h2>Start an export RFQ.</h2>
              <p className="export-sub">A short multi-step enquiry. After-sales terms and common questions are below.</p>
            </div>
          </div>

          <div className="export-final-grid">
            <div className="export-rfq-wrap">
              <ExportRfq />
            </div>
            <div className="export-final-side">
              <div className="export-aftersales">
                <div className="mono export-verify-title">After-sales</div>
                <ul className="export-tick-list">
                  {EXP_AFTERSALES.map((a, i) => <li key={i}><span aria-hidden="true">›</span><span>{a}</span></li>)}
                </ul>
              </div>
            </div>
          </div>

          <div className="export-faq-block">
            <h3 className="export-faq-title">Frequently asked questions</h3>
            <ExportFaq />
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </main>
  );
}

window.PageExport = PageExport;
