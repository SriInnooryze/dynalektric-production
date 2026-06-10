/* page-rnd.jsx — Innovation & R&D Portfolio */

const FOCUS_AREAS = [
  {
    num: '01',
    title: 'Traction product development',
    body: 'Onboard converters, magnetics, panels and protection for rolling stock OEMs. Designed to IRS, RDSO and IEC requirements with type-test validation for vibration, thermal and electrical endurance.',
    deliverables: ['Auxiliary converter magnetics', 'Locomotive and driver desk panels', 'Onboard protection and display units', 'Type-tested traction transformers'],
  },
  {
    num: '02',
    title: 'Renewable product development',
    body: 'Inverter-grade magnetics, harmonic filter reactors and grid-tie components for solar, wind and battery storage. Engineered for 25-year project life and high-cycle duty.',
    deliverables: ['Solar inverter magnetics', 'Harmonic filter reactor banks', 'Grid-tie distribution transformers', 'Renewable substation panels'],
  },
  {
    num: '03',
    title: 'IOT and communication systems',
    body: 'Connected battery chargers, panel telemetry and onboard data acquisition. CAN, Modbus and RS485 interfaces with secure remote diagnostics for fleet and substation use.',
    deliverables: ['Connected MHE chargers', 'Panel telemetry modules', 'Onboard data acquisition', 'Fleet and substation dashboards'],
  },
  {
    num: '04',
    title: 'Power modules and IPS',
    body: 'Integrated power supplies and OEM power modules. Application-specific rectifiers, inverters, DC-DC converters and DC-link assemblies, co-engineered with platform owners.',
    deliverables: ['Integrated power supplies', 'Custom DC-DC modules', 'Rectifier and inverter blocks', 'Ruggedised power assemblies'],
  },
];

const PROCESS = [
  { num: '01', title: 'Brief and specification', body: 'Application, load profile, environment, lifecycle and compliance requirements.' },
  { num: '02', title: 'Feasibility and quote',   body: 'Topology, ratings, dimensions and indicative pricing within five to seven working days.' },
  { num: '03', title: 'Design and simulation',   body: 'Electromagnetic, mechanical and thermal co-design with FEM analysis.' },
  { num: '04', title: 'Prototype and test',      body: 'Prototype build, validation, type and routine testing, customer FAT.' },
  { num: '05', title: 'Series production',       body: 'Locked BoM, QAP, dispatch and commissioning support. We stay engaged for product life.' },
];

function PageRnd({ navigate }) {
  useReveal();
  return (
    <main className="page-enter">
      <section className="page-hero page-hero--split">
        <div className="container">
          <div className="page-hero-copy">
            <div className="mono">INNOVATION PORTFOLIO</div>
            <h1>Innovation and R&amp;D portfolio for custom power solutions.</h1>
            <p className="lead">
              Our R&amp;D portfolio covers traction, renewable energy, connected systems and integrated power modules. Each programme spans feasibility, design, prototype, validation and series production.
            </p>
          </div>
          <div className="page-hero-visual">
            <img
              src="./assets/engineering-npd.jpg"
              alt="Dynalektric engineering and product development"
              width="720"
              height="540"
            />
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="dot" /><span className="mono">Focus areas</span></div>
            <div>
              <h2>Four programmes, one engineering team.</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-soft)' }}>Hover any focus area to see programme deliverables in active development.</p>
            </div>
          </div>

          <div className="focus-grid">
            {FOCUS_AREAS.map(f => (
              <div className="cap-card reveal" key={f.num}>
                <div>
                  <div className="num">{f.num} / FOCUS AREA</div>
                  <h3>{f.title}</h3>
                  <p className="reveal-body">{f.body}</p>
                  <ul className="reveal-body focus-deliverables">
                    {f.deliverables.map((d, i) => (
                      <li key={i}><span className="mono">+</span> {d}</li>
                    ))}
                  </ul>
                </div>
                <div className="footer-mark">
                  <span>In-house engineering</span>
                  <span>+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal" style={{ background: 'var(--panel-dark)', color: 'var(--on-dark)' }}>
        <div className="container">
          <div className="section-head" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="eyebrow"><span className="dot" /><span className="mono" style={{ color: 'rgba(244,244,241,0.6)' }}>Engineering workflow</span></div>
            <div><h2 style={{ color: 'var(--bg)' }}>How a Dynalektric project moves.</h2></div>
          </div>
          <div className="process-flow">
            {PROCESS.map(s => (
              <div className="process-step" key={s.num}>
                <div className="num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
                <div className="mono" style={{ marginTop: 'auto', color: 'var(--ink-muted)', paddingTop: 24 }}>Step {s.num} of 05</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="mono" style={{ color: 'var(--accent)' }}>Custom engineering</div>
              <h2 style={{ marginTop: 16 }}>Have a non-standard requirement?</h2>
              <p className="lead" style={{ marginTop: 24 }}>Our engineers respond to custom and special-purpose enquiries within one business day with a feasibility view, indicative pricing and a path to prototype.</p>
              <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => navigate('contact')}>Submit RFQ <span className="arrow">→</span></button>
                <button className="btn btn-secondary" onClick={() => navigate('products')}>Browse products</button>
              </div>
            </div>
            <div className="placeholder-stripe" style={{ aspectRatio: '4/3' }}><span>Engineering bench, placeholder</span></div>
          </div>
        </div>
      </section>

      <Footer navigate={navigate} />
    </main>
  );
}

window.PageRnd = PageRnd;
