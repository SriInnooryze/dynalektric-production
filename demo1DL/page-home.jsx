/* page-home.jsx */

/* ============================================================
   Capability flip carousel (Home — "What we engineer")
   ============================================================ */
const CAPABILITIES = [
  {
    num: '01', productId: 'magnetics', slotId: 'cap-magnetics',
    resKey: 'cardMagnetics', img: 'assets/card-magnetics.jpg',
    title: 'Power Transformation and Magnetics',
    back: 'Transformers, reactors and magnetic components engineered for power conversion, distribution, harmonic control and specialised industrial applications.',
    labels: ['Application-specific engineering', 'Manufacturing and testing', 'Industrial and infrastructure use'],
    cta: 'Explore Magnetics',
    imgPlaceholder: 'Replace with Dynalektric Magnetics manufacturing image',
    imgAlt: 'Industrial transformer manufacturing at Dynalektric',
  },
  {
    num: '02', productId: 'control-panels', slotId: 'cap-control',
    resKey: 'cardControl', img: 'assets/card-control.jpg',
    title: 'Control, Distribution and Panel Engineering',
    back: 'Panel and distribution assemblies developed around control, operating, safety and application requirements for railway, power and industrial equipment.',
    labels: ['Control integration', 'Assembly and wiring', 'Testing and documentation'],
    cta: 'Explore Panel Engineering',
    imgPlaceholder: 'Replace with Dynalektric Panel Engineering image',
    imgAlt: 'Electrical control panel assembly at Dynalektric',
  },
  {
    num: '03', productId: 'power-electronics', slotId: 'cap-power',
    resKey: 'cardPower', img: 'assets/card-power.jpg',
    title: 'DC Power and Electronic Systems',
    back: 'DC power, charging and electronic systems configured for equipment duty, operational environments and specialised industrial applications.',
    labels: ['Duty-specific design', 'Power conversion', 'Validation and testing'],
    cta: 'Explore Power Electronics',
    imgPlaceholder: 'Replace with Dynalektric Power Electronics image',
    imgAlt: 'Battery charger and power electronics assembly at Dynalektric',
  },
  {
    num: '04', productId: 'cross-segment', slotId: 'cap-integrated',
    resKey: 'cardIntegrated', img: 'assets/card-integrated.jpg',
    title: 'Integrated Components and Assemblies',
    back: 'Supporting electrical and electronic components integrated into railway, power, equipment and cross-sector industrial systems.',
    labels: ['Component integration', 'Custom assemblies', 'Cross-sector applications'],
    cta: 'Explore Integrated Solutions',
    imgPlaceholder: 'Replace with Dynalektric Integrated Components image',
    imgAlt: 'Dynalektric technician assembling integrated electrical components',
  },
];

function FlipCard({ cap, navigate }) {
  const [flipped, setFlipped] = React.useState(false);
  const frontBtnRef = React.useRef(null);
  const backBtnRef = React.useRef(null);

  // Move focus to the newly-revealed face's control for keyboard users.
  React.useEffect(() => {
    if (flipped) { backBtnRef.current && backBtnRef.current.focus(); }
  }, [flipped]);

  return (
    <div className="capcar-card">
      <div className="flip-inner" data-flipped={flipped}>
        {/* FRONT */}
        <div className="flip-face flip-front" aria-hidden={flipped} inert={flipped ? '' : undefined}>
          <image-slot
            id={`home-${cap.slotId}`}
            src={(window.__resources && window.__resources[cap.resKey]) || cap.img}
            fit="cover"
            position="50% 50%"
            placeholder={cap.imgPlaceholder}
            aria-label={cap.imgAlt}
            shape="rect"
          ></image-slot>
          <div className="flip-front-scrim"></div>
          <div className="flip-front-top">
            <span className="flip-front-num">{cap.num} / 04</span>
            <span className="flip-front-ind"><span className="pulse"></span>Capability</span>
          </div>
          <div className="flip-front-foot">
            <h3>{cap.title}</h3>
            <button
              ref={frontBtnRef}
              type="button"
              className="flip-trigger"
              aria-expanded={flipped}
              aria-label={`Show details for ${cap.title}`}
              onClick={() => setFlipped(true)}
            >
              Click to explore <span className="arrow">↻</span>
            </button>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-face flip-back" aria-hidden={!flipped} inert={!flipped ? '' : undefined}>
          <span className="flip-back-num">{cap.num} / 04</span>
          <h3>{cap.title}</h3>
          <p className="flip-back-text">{cap.back}</p>
          <div className="flip-back-labels">
            {cap.labels.map(l => <span className="lbl" key={l}>{l}</span>)}
          </div>
          <div className="flip-back-foot">
            <button
              type="button"
              className="flip-cta"
              onClick={() => navigate('products', cap.productId)}
            >
              {cap.cta} <span className="arrow">→</span>
            </button>
            <button
              ref={backBtnRef}
              type="button"
              className="flip-flipback"
              aria-label={`Show image for ${cap.title}`}
              onClick={() => { setFlipped(false); frontBtnRef.current && frontBtnRef.current.focus(); }}
            >
              <span aria-hidden="true">←</span> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilityCarousel({ navigate }) {
  const total = CAPABILITIES.length;
  const [index, setIndex] = React.useState(0);
  const [perPage, setPerPage] = React.useState(2);
  const trackRef = React.useRef(null);
  const [tx, setTx] = React.useState(0);

  // Responsive cards-per-view. <=720px is the stacked mobile layout (no transform).
  React.useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w <= 720) setPerPage(0);          // stacked
      else if (w <= 1080) setPerPage(1);    // tablet, one card + peek
      else setPerPage(2);                   // desktop, two cards + peek
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const maxIndex = perPage === 0 ? 0 : Math.max(0, total - perPage);

  // Clamp index when layout changes.
  React.useEffect(() => {
    setIndex(i => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Measure step (card width + gap) and translate accordingly.
  React.useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track || perPage === 0) { setTx(0); return; }
      const card = track.children[0];
      if (!card) return;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
      const step = card.getBoundingClientRect().width + gap;
      setTx(-(index * step));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [index, perPage]);

  const stacked = perPage === 0;
  const atStart = index <= 0;
  const atEnd = index >= maxIndex;

  return (
    <div className="capcar">
      <div className="capcar-viewport">
        <div
          className="capcar-track"
          ref={trackRef}
          style={{ transform: stacked ? 'none' : `translateX(${tx}px)` }}
        >
          {CAPABILITIES.map(cap => (
            <FlipCard key={cap.productId} cap={cap} navigate={navigate} />
          ))}
        </div>
      </div>

      <div className="capcar-controls">
        <div className="capcar-arrows">
          <button
            type="button"
            className="capcar-arrow"
            aria-label="Previous capability"
            disabled={atStart}
            onClick={() => setIndex(i => Math.max(0, i - 1))}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            type="button"
            className="capcar-arrow"
            aria-label="Next capability"
            disabled={atEnd}
            onClick={() => setIndex(i => Math.min(maxIndex, i + 1))}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="capcar-count" aria-live="polite">
          <b>{String(index + 1).padStart(2, '0')}</b> / {String(total).padStart(2, '0')}
        </div>
        <div className="capcar-foot">
          <button className="btn btn-ghost" onClick={() => navigate('products')}>
            Explore all products and solutions →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Industry stage (Home — "Industries and applications")
   One large, visitor-controlled image stage. Manual only, no autoplay.
   ============================================================ */
const HOME_INDUSTRIES = [
  {
    id: 'railways', num: '01', name: 'Railway & Traction',
    img: 'assets/industry-railways.jpg', resKey: 'indRailways',
    desc: 'Electrical and electronic systems supporting onboard, trackside and railway equipment applications.',
    labels: ['Traction equipment', 'Onboard systems', 'Control and auxiliary power'],
    cta: 'Explore Railway Applications',
    placeholder: 'Replace with approved Dynalektric Railway application image',
    alt: 'Modern electric railway and traction infrastructure',
  },
  {
    id: 'renewables', num: '02', name: 'Renewable Sectors',
    img: 'assets/industry-renewables.jpg', resKey: 'indRenewables',
    desc: 'Magnetics, reactors and power systems supporting conversion, grid integration and renewable-energy infrastructure.',
    labels: ['Solar and wind', 'Grid integration', 'Energy conversion'],
    cta: 'Explore Renewable Applications',
    placeholder: 'Replace with approved Dynalektric Renewable application image',
    alt: 'Renewable energy infrastructure with solar, wind and electrical systems',
  },
  {
    id: 'powergrid', num: '03', name: 'Power & Utilities',
    img: 'assets/industry-powergrid.jpg', resKey: 'indPowergrid',
    desc: 'Power conversion, distribution and control solutions supporting utilities, EPC contractors and infrastructure projects.',
    labels: ['Power distribution', 'Utility systems', 'EPC projects'],
    cta: 'Explore Power Applications',
    placeholder: 'Replace with approved Dynalektric Power & Utilities image',
    alt: 'Power utility substation and electrical transmission infrastructure',
  },
  {
    id: 'heavy', num: '04', name: 'Heavy Industries',
    img: 'assets/industry-heavy.jpg', resKey: 'indHeavy',
    desc: 'Electrical, magnetic and control solutions developed for demanding process and heavy-equipment environments.',
    labels: ['Steel and cement', 'Mining', 'Process industries'],
    cta: 'Explore Heavy Industry Applications',
    placeholder: 'Replace with approved Dynalektric Heavy Industries image',
    alt: 'Heavy industrial steel manufacturing and process equipment',
  },
  {
    id: 'mhe', num: '05', name: 'Material Handling & Warehousing',
    img: 'assets/industry-mhe.jpg', resKey: 'indMhe',
    desc: 'Charging, power electronics and control systems supporting forklifts, AGVs and warehouse equipment.',
    labels: ['Forklifts', 'AGVs', 'Charging systems'],
    cta: 'Explore Material Handling Applications',
    placeholder: 'Replace with approved Dynalektric Material Handling image',
    alt: 'Material handling and automated warehousing operations',
  },
  {
    id: 'datacenter', num: '06', name: 'Data Centers',
    img: 'assets/industry-datacenter.jpg', resKey: 'indDatacenter',
    desc: 'Distribution, UPS interface and critical-power support for data-centre infrastructure and operational continuity.',
    labels: ['Critical power', 'UPS interface', 'Distribution systems'],
    cta: 'Explore Data Center Applications',
    placeholder: 'Replace with approved Dynalektric Data Center power image',
    alt: 'Modern data center with server and critical power infrastructure',
  },
];

function IndustryStage({ navigate }) {
  const total = HOME_INDUSTRIES.length;
  const [active, setActive] = React.useState(0);
  const [preview, setPreview] = React.useState(null);
  const tabRefs = React.useRef([]);
  const touch = React.useRef({ x: 0, y: 0 });

  const shown = preview != null ? preview : active;
  const ind = HOME_INDUSTRIES[shown];

  const select = (i) => { setActive(i); setPreview(null); };
  const go = (dir) => setActive(i => {
    const n = i + dir;
    if (n < 0 || n > total - 1) return i;
    setPreview(null);
    return n;
  });

  // Roving keyboard nav across the selector rail.
  const onRailKey = (e, i) => {
    let n = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = Math.min(total - 1, i + 1);
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = Math.max(0, i - 1);
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = total - 1;
    if (n != null) {
      e.preventDefault();
      select(n);
      const el = tabRefs.current[n];
      el && el.focus();
    }
  };

  const onTouchStart = (e) => {
    const t = e.changedTouches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  };

  return (
    <div className="indstage">
      {/* Active image stage */}
      <div
        className="indstage-main"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {HOME_INDUSTRIES.map((it, i) => (
          <div className="indstage-img" data-active={i === shown} aria-hidden={i !== shown} key={it.id}>
            <image-slot
              id={`home-ind-${it.id}`}
              src={(window.__resources && window.__resources[it.resKey]) || it.img}
              fit="cover"
              position="50% 50%"
              placeholder={it.placeholder}
              aria-label={it.alt}
              shape="rect"
            ></image-slot>
          </div>
        ))}
        <div className="indstage-scrim"></div>

        <div className="indstage-content" key={shown} role="tabpanel" aria-live="polite">
          <span className="indstage-num mono">{ind.num} / 06</span>
          <h3>{ind.name}</h3>
          <p>{ind.desc}</p>
          <div className="indstage-labels">
            {ind.labels.map(l => <span className="indstage-chip" key={l}>{l}</span>)}
          </div>
          <button
            type="button"
            className="indstage-explore"
            onClick={() => navigate('industries', ind.id)}
          >
            {ind.cta} <span className="arrow">→</span>
          </button>
        </div>
      </div>

      {/* Selector rail */}
      <div className="indstage-rail" role="tablist" aria-label="Select an industry">
        {HOME_INDUSTRIES.map((it, i) => (
          <button
            key={it.id}
            type="button"
            role="tab"
            id={`indtab-${it.id}`}
            ref={el => (tabRefs.current[i] = el)}
            className="ind-sel"
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={e => onRailKey(e, i)}
            onMouseEnter={() => setPreview(i)}
            onMouseLeave={() => setPreview(null)}
          >
            <span className="ind-sel-bar" aria-hidden="true"></span>
            <span className="num">{it.num}</span>
            <span className="nm">{it.name}</span>
          </button>
        ))}
      </div>

      {/* Manual controls */}
      <div className="indstage-controls">
        <div className="indstage-arrows">
          <button
            type="button"
            className="indstage-arrow"
            aria-label="Previous industry"
            disabled={active <= 0}
            onClick={() => go(-1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            type="button"
            className="indstage-arrow"
            aria-label="Next industry"
            disabled={active >= total - 1}
            onClick={() => go(1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="indstage-count" aria-hidden="true">
          <b>{String(active + 1).padStart(2, '0')}</b> / {String(total).padStart(2, '0')}
        </div>
        <div className="indstage-foot">
          <button className="btn btn-ghost indstage-allbtn" onClick={() => navigate('industries')}>
            Explore All Industries and Applications →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Hero — credibility-led cinematic video experience.
   Poster slot (user-fillable, swap for <video> when footage lands).
   A subtle Ken Burns drift stands in for the loop and is driven by the
   custom play/pause control. Reduced-motion holds it on the poster.
   ============================================================ */
function HeroVideo({ navigate }) {
  const [playing, setPlaying] = React.useState(true);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
    const video = videoRef.current;

    const applyMotionPreference = () => {
      if (!video || !mq) return;

      if (mq.matches) {
        video.pause();
        setPlaying(false);
      } else {
        video.play()
          .then(() => setPlaying(true))
          .catch(() => setPlaying(false));
      }
    };

    applyMotionPreference();

    if (mq && typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', applyMotionPreference);
      return () => mq.removeEventListener('change', applyMotionPreference);
    }

    if (mq && typeof mq.addListener === 'function') {
      mq.addListener(applyMotionPreference);
      return () => mq.removeListener(applyMotionPreference);
    }
  }, []);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setPlaying(true);
      } else {
        video.pause();
        setPlaying(false);
      }
    } catch (error) {
      console.error('Unable to control hero video:', error);
      setPlaying(false);
    }
  };

  return (
    <section className="hero-video" data-playing={playing} aria-label="Dynalektric engineering and manufacturing">
      <div className="hero-video-media">
        <video
          ref={videoRef}
          className="hero-video-element"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={(window.__resources && window.__resources.heroPoster) || 'assets/hero-poster.jpg'}
          aria-label="Dynalektric factory, engineering and manufacturing"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={(event) => {
            console.error('Hero video failed to load:', event.currentTarget.currentSrc);
            setPlaying(false);
          }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover',
            objectPosition: '50% 50%',
          }}
        >
          <source src="./public/videos/Dynalektric_Hero.mp4" type="video/mp4" />
          Your browser does not support background video.
        </video>
      </div>
      <div className="hero-video-scrim"></div>

      <div className="container">
        <div className="hero-video-content">
          <div className="hero-video-eyebrow mono"><span className="hero-video-line" aria-hidden="true"></span>Engineered for industry</div>
          <h1>Engineering built for industrial progress.</h1>
          <p>In-house engineering, manufacturing and testing for infrastructure, mobility, energy and industrial applications.</p>
          <div className="hero-video-actions">
            <button className="btn btn-primary" onClick={() => navigate('about')}>
              Discover Dynalektric <span className="arrow">→</span>
            </button>
            <button type="button" className="hero-video-link" onClick={() => navigate('contact')}>
              Discuss Your Requirement <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero-video-toggle"
        aria-pressed={playing}
        aria-label={playing ? 'Pause background video' : 'Play background video'}
        onClick={toggleVideo}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6.5" y="5" width="3.6" height="14" rx="1"/><rect x="13.9" y="5" width="3.6" height="14" rx="1"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.54.84l10-6.5a1 1 0 0 0 0-1.68l-10-6.5A1 1 0 0 0 8 5.5z"/></svg>
        )}
      </button>
    </section>
  );
}

/* ============================================================
   Inside Dynalektric — organisation credibility section.
   Editorial split: real facility image + three capability statements
   and a restrained proof row. Calm, company-led, no counters.
   ============================================================ */
function OrgSection({ navigate }) {
  const caps = [
    { t: 'In-house engineering', d: 'Design, development and application review supported by cross-functional technical teams.' },
    { t: 'Manufacturing capability', d: 'Structured production across magnetics, panels, power electronics and engineered assemblies.' },
    { t: 'Testing and documentation', d: 'Inspection, validation and documentation aligned to product and project requirements.' },
  ];
  const proof = [
    { k: 'Since 1980', v: 'Engineering and manufacturing' },
    { k: 'In-house', v: 'Design, production and testing' },
    { k: 'Six sectors', v: 'Industries supported' },
    { k: 'Export ready', v: 'Documentation and delivery' },
  ];
  return (
    <section className="section reveal org-section">
      <div className="container">
        <div className="org-split">
          <div className="org-visual">
            <image-slot
              id="org-image"
              src={(window.__resources && window.__resources.cardMagnetics) || 'assets/card-magnetics.jpg'}
              fit="cover"
              position="50% 50%"
              placeholder="Replace with a Dynalektric factory floor, engineering team or testing image"
              aria-label="Dynalektric manufacturing facility and production floor"
              shape="rect"
            ></image-slot>
          </div>
          <div className="org-body">
            <div className="eyebrow"><span className="eyebrow-label">Inside Dynalektric</span></div>
            <h2>The organisation behind every engineered solution.</h2>
            <p className="lead">Dynalektric combines engineering teams, manufacturing capability, testing processes and application experience within one operating environment.</p>
            <ul className="org-caps">
              {caps.map(c => (
                <li key={c.t}>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </li>
              ))}
            </ul>
            <button className="btn btn-ghost org-cta" onClick={() => navigate('about')}>
              About Dynalektric <span className="arrow">→</span>
            </button>
          </div>
        </div>
        <div className="org-proof" aria-label="Company credentials">
          {proof.map(p => (
            <div className="org-proof-item" key={p.k}>
              <div className="mono num">{p.k}</div>
              <div className="org-proof-label">{p.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Featured case studies — manual carousel (3 cases). No autoplay.
   Image-led, representative application imagery (user-replaceable).
   ============================================================ */
const FEATURED_CASES = [
  {
    id: 'railway', industry: 'Railway & Traction',
    title: 'Magnetic components for demanding rolling-stock applications',
    challenge: 'Rolling-stock equipment required magnetic components able to hold performance under vibration, thermal load and constrained installation envelopes.',
    response: 'Dynalektric engineered application-specific magnetics, then manufactured and validated them against the relevant railway and IEC requirements before delivery.',
    capability: ['Application engineering', 'Manufacturing', 'Testing and documentation'],
    img: 'assets/industry-railways.jpg', resKey: 'indRailways',
    placeholder: 'Replace with approved Dynalektric railway project or product-in-application image',
    alt: 'Representative railway and traction application image',
    to: 'railways',
  },
  {
    id: 'renewable', industry: 'Renewable Energy',
    title: 'Reactor solution supporting renewable power conversion',
    challenge: 'A renewable power-conversion application needed reactors suited to harmonic conditions, grid-integration duty and a long project life.',
    response: 'Dynalektric developed reactor designs for the duty profile, then manufactured and tested them to the project and IEC requirements.',
    capability: ['Application engineering', 'Manufacturing', 'Testing and documentation'],
    img: 'assets/industry-renewables.jpg', resKey: 'indRenewables',
    placeholder: 'Replace with approved Dynalektric renewable-energy project image',
    alt: 'Representative renewable-energy application image',
    to: 'renewables',
  },
  {
    id: 'power', industry: 'Power & Utilities',
    title: 'Power equipment engineered for utility and infrastructure requirements',
    challenge: 'A utility and infrastructure application required power equipment built to distribution duty, documentation standards and inspection requirements.',
    response: 'Dynalektric engineered the equipment to the application, then manufactured and tested it with documentation aligned to the project handover.',
    capability: ['Application engineering', 'Manufacturing', 'Testing and documentation'],
    img: 'assets/industry-powergrid.jpg', resKey: 'indPowergrid',
    placeholder: 'Replace with approved Dynalektric utility or substation project image',
    alt: 'Representative power and utilities application image',
    to: 'powergrid',
  },
];

function FeaturedCases({ navigate }) {
  const total = FEATURED_CASES.length;
  const [idx, setIdx] = React.useState(0);
  const thumbRefs = React.useRef([]);
  const touch = React.useRef({ x: 0, y: 0 });
  const c = FEATURED_CASES[idx];

  const go = (dir) => setIdx(i => (i + dir + total) % total);

  const onThumbKey = (e, i) => {
    let n = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % total;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + total) % total;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = total - 1;
    if (n != null) { e.preventDefault(); setIdx(n); const el = thumbRefs.current[n]; el && el.focus(); }
  };

  const onTouchStart = (e) => { const t = e.changedTouches[0]; touch.current = { x: t.clientX, y: t.clientY }; };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x, dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  };

  return (
    <div className="cases">
      <div className="cases-stage">
        <div className="case-visual" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {FEATURED_CASES.map((it, i) => (
            <div className="case-img" data-active={i === idx} aria-hidden={i !== idx} key={it.id}>
              <image-slot
                id={`home-case-${it.id}`}
                src={(window.__resources && window.__resources[it.resKey]) || it.img}
                fit="cover"
                position="50% 50%"
                placeholder={it.placeholder}
                aria-label={it.alt}
                shape="rect"
              ></image-slot>
            </div>
          ))}
          <div className="case-img-scrim"></div>
          <span className="case-img-tag mono">Representative application image</span>
        </div>

        <div className="case-panel" key={idx}>
          <div className="case-panel-top">
            <span className="case-industry mono">{c.industry}</span>
            <span className="case-count mono" aria-hidden="true"><b>{String(idx + 1).padStart(2, '0')}</b> / {String(total).padStart(2, '0')}</span>
          </div>
          <h3>{c.title}</h3>
          <div className="case-row">
            <span className="case-k mono">Challenge</span>
            <p>{c.challenge}</p>
          </div>
          <div className="case-row">
            <span className="case-k mono">Dynalektric response</span>
            <p>{c.response}</p>
          </div>
          <div className="case-caps">
            {c.capability.map(l => <span className="case-chip" key={l}>{l}</span>)}
          </div>
          <div className="case-foot">
            <button type="button" className="case-readlink" onClick={() => navigate('industries', c.to)}>
              View Application <span className="arrow">→</span>
            </button>
            <div className="case-arrows">
              <button type="button" className="case-arrow" aria-label="Previous case study" onClick={() => go(-1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button type="button" className="case-arrow" aria-label="Next case study" onClick={() => go(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="case-thumbs" role="tablist" aria-label="Select a case study">
        {FEATURED_CASES.map((it, i) => (
          <button
            key={it.id}
            type="button"
            role="tab"
            ref={el => (thumbRefs.current[i] = el)}
            className="case-thumb"
            aria-selected={idx === i}
            tabIndex={idx === i ? 0 : -1}
            onClick={() => setIdx(i)}
            onKeyDown={e => onThumbKey(e, i)}
          >
            <span className="case-thumb-num mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="case-thumb-name">{it.industry}</span>
          </button>
        ))}
        <p className="case-note">Customer names and project details are shown only where approved.</p>
      </div>
    </div>
  );
}

function PageHome({ navigate, tweaks }) {
  useReveal();

  return (
    <main className="page-enter home-main">
      {/* HERO — cinematic video experience */}
      <HeroVideo navigate={navigate} />

      {/* INSIDE DYNALEKTRIC — organisation credibility */}
      <OrgSection navigate={navigate} />

      {/* WHAT WE ENGINEER — capability flip carousel */}
      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow-label">What we engineer</span></div>
            <div>
              <h2>Engineering systems that power, control and support industrial operations.</h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Dynalektric combines engineering, manufacturing and testing across four core capability areas serving demanding industrial applications.
              </p>
            </div>
          </div>

          <CapabilityCarousel navigate={navigate} />
        </div>
      </section>

      {/* INDUSTRIES STRIP */}
      <section className="section reveal" style={{ background: 'var(--panel-dark)', color: 'var(--on-dark)', margin: '0' }}>
        <div className="container">
          <div className="section-head" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="eyebrow"><span className="eyebrow-label on-dark">Industries &amp; applications</span></div>
            <div>
              <h2 style={{ color: 'var(--bg)' }}>Engineering capability applied across demanding industries.</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'rgba(244,244,241,0.7)', maxWidth: '60ch' }}>
                Dynalektric supports power, control and equipment applications across established infrastructure, mobility and industrial sectors.
              </p>
            </div>
          </div>

          <IndustryStage navigate={navigate} />
        </div>
      </section>

      {/* R&D TEASER */}
      <section className="section reveal" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="rnd-teaser">
            <div className="rnd-teaser-copy">
              <div className="eyebrow" style={{ marginBottom: 24 }}><span className="eyebrow-label">Engineering and NPD</span></div>
              <h2>Custom requirements engineered in-house.</h2>
              <p className="lead" style={{ marginTop: 24 }}>
                Our engineering and new product development teams take a customer specification through feasibility, design, prototyping, validation and pilot production. One team, one process.
              </p>
              <button className="btn btn-ghost" style={{ marginTop: 32 }} onClick={() => navigate('rnd')}>
                View engineering capability →
              </button>
            </div>
            <div className="rnd-teaser-visual">
              <div className="rnd-teaser-figure">
                <image-slot
                  id="home-engineering-npd"
                  src={(window.__resources && window.__resources.engineeringNpd) || 'assets/engineering-npd.jpg'}
                  fit="cover"
                  position="50% 50%"
                  placeholder="Replace with a Dynalektric in-house engineering and assembly image"
                  aria-label="Dynalektric engineers developing and assembling a custom electrical solution in-house"
                  shape="rect"
                ></image-slot>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / CERTS / STATS */}
      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow-label">Standards and testing</span></div>
            <div>
              <h2>Type-tested designs, full documentation, traceable processes.</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-soft)' }}>
                Every product ships with routine and type test reports, QAP documentation and material traceability. Designs validated against IEC, IS and customer specifications.
              </p>
            </div>
          </div>

          <div className="standards-grid">
            <div>
              <div className="mono" style={{ marginBottom: 24, color: 'var(--accent)', fontWeight: 600 }}>Certifications and standards</div>
              <div className="cert-row">
                {CERTIFICATIONS.map(c => (
                  <div className="cert-item" key={c.code}>
                    <div className="cert-code">{c.code}</div>
                    <div className="cert-label mono">{c.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16 }} className="mono">Certificate copies available on request</div>
            </div>
            <div className="qa-card">
              <div className="mono" style={{ marginBottom: 16, color: 'var(--accent)', fontWeight: 600 }}>Quality process</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ fontSize: 13, paddingBottom: 12, borderBottom: '1px solid var(--rule-soft)' }}>
                  <div style={{ fontWeight: 500, marginBottom: 4 }}>Routine testing</div>
                  <div style={{ color: 'var(--ink-soft)' }}>100% electrical validation on every unit</div>
                </li>
                <li style={{ fontSize: 13, paddingBottom: 12, borderBottom: '1px solid var(--rule-soft)' }}>
                  <div style={{ fontWeight: 500, marginBottom: 4 }}>Type testing</div>
                  <div style={{ color: 'var(--ink-soft)' }}>On-site labs plus accredited externals</div>
                </li>
                <li style={{ fontSize: 13, paddingBottom: 12, borderBottom: '1px solid var(--rule-soft)' }}>
                  <div style={{ fontWeight: 500, marginBottom: 4 }}>FAT support</div>
                  <div style={{ color: 'var(--ink-soft)' }}>Customer factory acceptance testing</div>
                </li>
                <li style={{ fontSize: 13 }}>
                  <div style={{ fontWeight: 500, marginBottom: 4 }}>Documentation</div>
                  <div style={{ color: 'var(--ink-soft)' }}>QAP, GA drawings, test reports, BoM</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="stats-row" style={{ marginTop: 56 }}>
            {STATS.map((s, i) => (
              <div className="stats-item reveal" key={i} style={{ transitionDelay: `${i * 80}ms`, textAlign: 'center' }}>
                <div className="big-num">
                  {s.value.includes('+')
                    ? <><Counter to={parseInt(s.value)} />+</>
                    : s.value
                  }
                </div>
                <div className="mono" style={{ marginTop: 12, color: 'var(--ink-muted)' }}>{s.sub}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES — featured carousel */}
      <section className="section reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow"><span className="eyebrow-label">Case studies</span></div>
            <div>
              <h2>Engineering outcomes from real applications.</h2>
              <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-soft)' }}>
                Selected examples of how Dynalektric applies engineering, manufacturing and testing capability across industrial applications.
              </p>
            </div>
          </div>
          <FeaturedCases navigate={navigate} />
        </div>
      </section>

      <FinalCTA
        navigate={navigate}
        eyebrow="Discuss your requirement"
        heading="Discuss your application or engineering requirement"
        body="Connect with the Dynalektric team to discuss your application, technical requirement or project context."
        primaryLabel="Discuss Your Requirement"
        primaryTo="contact"
        secondaryLabel="Explore Our Capabilities"
        secondaryTo="about"
        tertiaryLabel="Submit a Detailed RFQ"
        tertiaryTo="contact"
      />
      <Footer navigate={navigate} />
    </main>
  );
}

window.PageHome = PageHome;
