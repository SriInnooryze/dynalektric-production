/* shared.jsx — shared data, components, hooks for Dynalektric prototype */

const PRODUCTS = [
  {
    id: 'magnetics',
    num: '01',
    name: 'Magnetics',
    tagline: 'Transformers, reactors and magnetic components for industrial, utility and renewable installations.',
    overview: 'LV and MV transformers, K-rated transformers and a full reactor family covering air-core, oil-cooled and de-tuned types. Engineered for power conversion, harmonic mitigation and reactive compensation across industrial, utility, traction and renewable applications.',
    subcategories: [
      { code: '01.1', name: 'LV Transformers',          detail: 'Low-voltage distribution and isolation transformers' },
      { code: '01.2', name: 'MV Transformers',          detail: 'Cast resin and oil-filled, voltage classes up to 36 kV' },
      { code: '01.3', name: 'K-Rated Transformers',     detail: 'For non-linear and harmonic-rich load profiles' },
      { code: '01.4', name: 'Air-Core Reactor',         detail: 'Dry-type linear reactors for harmonic filtering and current limiting' },
      { code: '01.5', name: 'Oil-Cooled Reactors',      detail: 'Higher-rating reactors with oil cooling' },
      { code: '01.6', name: 'De-tuned Reactor',         detail: 'Reactor banks for capacitor de-tuning' },
    ],
    placeholders: [
      { k: 'Rating range',    v: '50 VA to 5 MVA' },
      { k: 'Voltage class',   v: 'up to 36 kV' },
      { k: 'Insulation',      v: 'Class B, F or H' },
      { k: 'Cooling',         v: 'AN, AF, ONAN, OFAF' },
      { k: 'Enclosure',       v: 'Indoor or outdoor IP rated' },
      { k: 'Standards',       v: 'IEC 60076, IS 2026, IEC 60289' },
    ],
    applications: ['Industrial substations', 'Renewable inverter stations', 'Traction power supply', 'Harmonic mitigation', 'Reactive compensation', 'Power conditioning'],
    industries: ['railways', 'renewables', 'powergrid', 'heavy', 'datacenter'],
  },
  {
    id: 'control-panels',
    num: '02',
    name: 'Control Panel Assemblies',
    tagline: 'Engineered control and power distribution panels for rolling stock and industrial installations.',
    overview: 'Locomotive control panels, driver desk consoles, power distribution units and main power panels. Designed, wired and tested in-house to IEC 61439 with full mechanical, electrical and FAT documentation.',
    subcategories: [
      { code: '02.1', name: 'Locomotive Panels',  detail: 'Onboard control panels for rolling stock and traction' },
      { code: '02.2', name: 'Driver Desk Panels', detail: 'Operator-facing consoles and HMI assemblies' },
      { code: '02.3', name: 'PDUs',               detail: 'Power distribution units for industrial and rail use' },
      { code: '02.4', name: 'Power Panels',       detail: 'LV and MV main and sub-distribution panels' },
    ],
    placeholders: [
      { k: 'Standard',         v: 'IEC 61439-1 and 61439-2' },
      { k: 'Form',             v: 'Form 2, 3b or 4b' },
      { k: 'Current ratings',  v: 'up to 6300 A' },
      { k: 'Enclosure',        v: 'IP rated, custom layouts' },
      { k: 'Tests',            v: 'Routine and type tested' },
      { k: 'Documentation',    v: 'GA drawings, BoM, QAP, FAT' },
    ],
    applications: ['Locomotive control cabinets', 'Driver desk consoles', 'Industrial automation', 'MCC and PCC distribution', 'Process control'],
    industries: ['railways', 'heavy', 'powergrid', 'datacenter'],
  },
  {
    id: 'power-electronics',
    num: '03',
    name: 'Power Electronics Systems',
    tagline: 'Industrial battery chargers and power conversion systems for fleet, utility and special applications.',
    overview: 'High-frequency MHE chargers, float and boost chargers for utility battery banks and battery chargers for special applications. Designed for industrial duty cycles, multi-chemistry compatibility and integration with fleet or substation management systems.',
    subcategories: [
      { code: '03.1', name: 'MHE Battery Chargers',                detail: 'For forklifts, AGVs and warehouse fleets' },
      { code: '03.2', name: 'Float Cum Boost Chargers',            detail: 'For substation and utility battery banks' },
      { code: '03.3', name: 'Special Application Battery Chargers', detail: 'Custom chargers for traction, marine and defence use' },
    ],
    placeholders: [
      { k: 'Output voltage',   v: '24 V to 220 V DC' },
      { k: 'Output current',   v: 'up to 400 A' },
      { k: 'Chemistries',      v: 'Lead-acid, Li-ion, NiCd' },
      { k: 'Connectivity',     v: 'CAN, Modbus, RS485' },
      { k: 'Enclosure',        v: 'IP rated industrial' },
      { k: 'Tests',            v: 'Routine and type tested' },
    ],
    applications: ['Forklift fleets', 'AGV depots', 'Substation auxiliary supply', 'Marine and defence', 'Industrial DC backup'],
    industries: ['mhe', 'powergrid', 'railways', 'datacenter'],
  },
  {
    id: 'cross-segment',
    num: '04',
    name: 'Cross-Segment Solutions',
    tagline: 'Components and sub-systems used across rolling stock, industrial and power applications.',
    overview: 'Specialised components that complement the main product families. Engineered for OEM integration with custom configurations, tested to customer specifications and supplied with full documentation.',
    subcategories: [
      { code: '04.1', name: 'Busbars',                 detail: 'Insulated and bare copper busbar systems' },
      { code: '04.2', name: 'Cable Harnessing',        detail: 'Engineered cable assemblies for rolling stock and panels' },
      { code: '04.3', name: 'UPS',                     detail: 'Uninterruptible power supplies for critical loads' },
      { code: '04.4', name: "Driver's Display Unit",   detail: 'Onboard display and HMI units for traction' },
      { code: '04.5', name: 'Current Sensors',         detail: 'Hall-effect and shunt-based current sensing modules' },
      { code: '04.6', name: 'DC-DC Converters',        detail: 'Isolated and non-isolated DC-DC conversion modules' },
      { code: '04.7', name: 'Fire Detection Unit',     detail: 'Onboard fire detection for rolling stock and panels' },
      { code: '04.8', name: 'Maximum Voltage Relay',   detail: 'Overvoltage protection relays for traction and utility' },
    ],
    placeholders: [
      { k: 'Customisation',    v: 'OEM-specific designs' },
      { k: 'Standards',        v: 'IEC, IS, IRS as applicable' },
      { k: 'Voltage range',    v: 'LV to MV configurations' },
      { k: 'Applications',     v: 'Rolling stock, industrial, utility' },
      { k: 'Tests',            v: 'Per customer QAP' },
      { k: 'Documentation',    v: 'Datasheets available on request' },
    ],
    applications: ['Rolling stock onboard systems', 'Industrial control', 'Critical load backup', 'Sensing and protection', 'OEM integration'],
    industries: ['railways', 'heavy', 'powergrid', 'mhe', 'renewables', 'datacenter'],
  },
];

const INDUSTRIES = [
  {
    id: 'railways',
    num: '01',
    name: 'Railway & Traction',
    short: 'Onboard and trackside power for rolling stock OEMs and rail operators.',
    body: 'Vibration-tolerant magnetics, traction-grade transformers, locomotive and driver-desk panels, onboard converters and protection relays. Designed and tested against IRS, RDSO and IEC requirements.',
    applications: ['Traction transformers and reactors', 'Locomotive control panels', 'Driver desk consoles', 'Auxiliary converter magnetics', 'Onboard protection and display'],
    buyer: 'Rolling stock OEMs, traction integrators, signalling contractors and rail operators.',
    qa: 'Vibration, impulse and temperature rise tests where applicable. IRS, RDSO and IEC conformance based on tender requirement.',
    products: ['magnetics', 'control-panels', 'power-electronics', 'cross-segment'],
  },
  {
    id: 'renewables',
    num: '02',
    name: 'Renewable Sectors',
    short: 'Inverter-grade magnetics and grid-tie components for solar, wind and storage plants.',
    body: 'Inverter chokes, harmonic filter reactors, grid-tie transformers and balance-of-plant components for utility-scale solar, wind and battery storage. Designed for 25-year project life and full type testing.',
    applications: ['Solar inverter magnetics', 'String-level chokes', 'Wind converter components', 'Grid-tie transformers', 'Substation panels and protection'],
    buyer: 'Renewable EPC contractors, inverter OEMs, IPP owners and utilities.',
    qa: 'Routine tests on every unit. Type tests for thermal endurance and partial discharge, where applicable. Documentation aligned with EPC handover requirements.',
    products: ['magnetics', 'cross-segment'],
  },
  {
    id: 'powergrid',
    num: '03',
    name: 'Power & Utilities',
    short: 'Distribution transformers, reactors and protective panels for utilities and EPC contractors.',
    body: 'Type-tested transformers, reactors, distribution panels, float and boost chargers and protection assemblies meeting IEC and IS requirements for distribution networks, industrial substations and captive power plants.',
    applications: ['MV distribution transformers', 'Harmonic filter reactors', 'Substation panels and PDUs', 'Float cum boost chargers', 'Auxiliary supply systems'],
    buyer: 'Utilities, T&D EPC contractors and industrial substation owners.',
    qa: 'IEC 60076 and IEC 61439 routine tests. Type tests through accredited labs, where applicable. Third-party inspection ready.',
    products: ['magnetics', 'control-panels', 'power-electronics', 'cross-segment'],
  },
  {
    id: 'heavy',
    num: '04',
    name: 'Heavy Industries',
    short: 'Power and control packages for steel, cement, mining and process industries.',
    body: 'Isolation transformers, MV switchgear interfaces, drive cabinets and PDUs for plant electrification. Engineered for heavy duty cycles and built to customer QAP frameworks.',
    applications: ['Drive and motor control cabinets', 'Isolation transformers', 'Plant PDUs', 'Servo power supplies', 'Process automation panels'],
    buyer: 'Process plant owners, machine builders and EPC contractors for heavy industry.',
    qa: 'Customer QAP and stage inspection. Routine tests on every assembly. Material traceability available on request.',
    products: ['magnetics', 'control-panels', 'cross-segment'],
  },
  {
    id: 'mhe',
    num: '05',
    name: 'Material Handling & Warehousing',
    short: 'Chargers and power electronics for forklift, AGV and warehouse fleets.',
    body: 'High-frequency chargers and battery management systems for 24 / 7 fleet operations. Built for opportunity charging, multi-chemistry compatibility and fleet management integration.',
    applications: ['Forklift fleet charging', 'AGV depots', 'Cold-chain warehousing', 'E-commerce fulfilment centres'],
    buyer: 'Material handling equipment OEMs, fleet operators and warehouse logistics providers.',
    qa: 'Functional, efficiency and burn-in tests, where applicable. Conformance to chemistry-specific charging profiles. Optional third-party inspection.',
    products: ['power-electronics', 'cross-segment'],
  },
  {
    id: 'datacenter',
    num: '06',
    name: 'Data Centers',
    short: 'Distribution, UPS interface and critical-load backup for data centre infrastructure.',
    body: 'K-rated transformers, IT-grade PDUs, UPS units and busbar systems for data centre power chains. Supplied with documentation aligned to customer reliability and audit requirements.',
    applications: ['K-rated isolation transformers', 'IT power distribution', 'UPS and battery backup', 'Busbar trunking', 'Auxiliary protection'],
    buyer: 'Data centre operators, colocation providers and critical-power EPC contractors.',
    qa: 'IEC 61439 routine tests on assemblies. K-factor verification on magnetics, where applicable. Documentation prepared for audit and acceptance.',
    products: ['magnetics', 'control-panels', 'power-electronics', 'cross-segment'],
  },
];

const CERTIFICATIONS = [
  { code: 'ISO 9001',  label: 'Quality management' },
  { code: 'ISO 14001', label: 'Environmental management' },
  { code: 'ISO 45001', label: 'Occupational health and safety' },
  { code: 'IEC',       label: 'International standards' },
  { code: 'CE',        label: 'European conformity' },
];

const STATS = [
  { value: '40+',   label: 'Years of in-house engineering', sub: 'Established 1980' },
  { value: '500+',  label: 'Custom designs delivered',      sub: 'Magnetics, panels and systems' },
  { value: '15+',   label: 'Export markets served',         sub: 'Europe, Middle East, Asia' },
  { value: '1 day', label: 'Typical RFQ response time',     sub: 'For complete specifications' },
];

const HERO_HEADLINES = [
  {
    pre: 'Manufacturing partner · India · ISO 9001',
    main: 'Precision-engineered power solutions for industrial and export markets.',
    sub: 'Transformers, control panels, power electronics and cross-segment components, designed and tested in-house to IEC and IS standards. Supplied to OEMs, EPC contractors, utilities and procurement teams across Europe, the Middle East and Asia.',
  },
  {
    pre: 'Engineered to specification',
    main: 'Transformers, panels and power electronics for industrial OEMs and EPC projects.',
    sub: 'Forty years of in-house design, winding, panel build and testing. IEC and IS compliant. Type-tested with full QAP, FAT support and export documentation.',
  },
  {
    pre: 'Supplier qualification ready',
    main: 'A long-term manufacturing partner for power and motion systems.',
    sub: 'Four product groups covering magnetics, control panels, power electronics and cross-segment components. One engineering team from feasibility to series production.',
  },
];

/* ============================================================
   Sub-category detail map (keyed by code)
   ============================================================ */
const SUBCAT_DETAIL = {
  /* Magnetics */
  '01.1': {
    description: 'Low-voltage distribution and isolation transformers for industrial sub-distribution, control supply and signal isolation. Cast resin and dry-type options.',
    applications: ['Industrial sub-distribution', 'Control supply circuits', 'Signal and load isolation', 'Auxiliary supply for panels'],
    specs: [
      { k: 'Rating range',   v: '50 VA to 2.5 MVA' },
      { k: 'Voltage class',  v: 'up to 1.1 kV' },
      { k: 'Insulation',     v: 'Class B, F or H' },
      { k: 'Cooling',        v: 'AN or AF' },
      { k: 'Enclosure',      v: 'Indoor IP 21, outdoor up to IP 54' },
      { k: 'Tests',          v: 'Routine, type tests where applicable' },
      { k: 'Standards',      v: 'IEC 60076, IS 2026' },
      { k: 'Custom options', v: 'Tap changers, shielding, low-loss core' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['powergrid', 'heavy', 'datacenter', 'mhe'],
  },
  '01.2': {
    description: 'Medium-voltage distribution and special-purpose transformers for industrial substations, traction power and renewable inverter stations. Cast resin and oil-filled options.',
    applications: ['Industrial substations', 'Traction power supply', 'Renewable inverter stations', 'Captive power plants'],
    specs: [
      { k: 'Rating range',   v: '100 kVA to 5 MVA' },
      { k: 'Voltage class',  v: '3.3 kV to 36 kV' },
      { k: 'Insulation',     v: 'Cast resin or mineral oil' },
      { k: 'Cooling',        v: 'AN, AF, ONAN, ONAF' },
      { k: 'Enclosure',      v: 'Indoor or outdoor, IP rated' },
      { k: 'Tests',          v: 'Routine, type tests through accredited labs where applicable' },
      { k: 'Standards',      v: 'IEC 60076, IS 2026' },
      { k: 'Custom options', v: 'Off-load taps, special impedance, low losses' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['powergrid', 'renewables', 'railways', 'heavy'],
  },
  '01.3': {
    description: 'K-factor transformers for non-linear and harmonic-rich loads. Built for IT power chains, drive-fed circuits and harmonic-sensitive environments.',
    applications: ['Data centre IT power', 'Drive-fed loads', 'Harmonic-rich environments', 'UPS interface'],
    specs: [
      { k: 'Rating range',   v: '50 kVA to 2.5 MVA' },
      { k: 'K-factor',       v: 'K4, K13, K20 per application' },
      { k: 'Voltage class',  v: 'LV to 11 kV' },
      { k: 'Insulation',     v: 'Class F or H' },
      { k: 'Cooling',        v: 'AN or AF' },
      { k: 'Tests',          v: 'Routine plus K-factor verification, where applicable' },
      { k: 'Standards',      v: 'IEC 60076, IEEE C57.110 inputs' },
      { k: 'Custom options', v: 'Electrostatic shield, low-noise core' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['datacenter', 'heavy', 'powergrid'],
  },
  '01.4': {
    description: 'Dry-type air-core reactors for harmonic filtering, current limiting, damping and dv/dt protection. Stable inductance under fault and partial-saturation conditions.',
    applications: ['Harmonic filtering at the inverter station', 'Current limiting in substations', 'Damping for drive systems', 'dv/dt protection on motor circuits'],
    specs: [
      { k: 'Inductance',     v: '0.1 mH to 100 mH' },
      { k: 'Current rating', v: 'up to 4000 A' },
      { k: 'Insulation',     v: 'Class F or H' },
      { k: 'Cooling',        v: 'Natural air-cooled' },
      { k: 'Enclosure',      v: 'Indoor or outdoor mounting' },
      { k: 'Tests',          v: 'Routine, type tests where applicable' },
      { k: 'Standards',      v: 'IEC 60289 inputs' },
      { k: 'Custom options', v: 'Special inductance, low partial discharge' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['renewables', 'powergrid', 'railways', 'heavy'],
  },
  '01.5': {
    description: 'Oil-cooled reactors for higher current and voltage ratings. Used for grid damping, HVDC link applications and large industrial reactive compensation.',
    applications: ['Grid damping reactors', 'HVDC link reactors', 'Large reactive compensation', 'Utility substation use'],
    specs: [
      { k: 'Rating range',   v: 'up to 50 MVAR equivalent' },
      { k: 'Voltage class',  v: 'up to 36 kV' },
      { k: 'Insulation',     v: 'Mineral oil' },
      { k: 'Cooling',        v: 'ONAN, ONAF' },
      { k: 'Enclosure',      v: 'Outdoor tank, IP rated' },
      { k: 'Tests',          v: 'Routine, type tests through accredited labs where applicable' },
      { k: 'Standards',      v: 'IEC 60076-6 inputs' },
      { k: 'Custom options', v: 'Custom inductance and BIL' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['powergrid', 'renewables'],
  },
  '01.6': {
    description: 'De-tuned reactors for use with capacitor banks. Tuned away from dominant harmonic frequencies to protect capacitors and improve power factor stability.',
    applications: ['Power factor correction with harmonic protection', 'Capacitor bank de-tuning', 'Industrial reactive compensation', 'Harmonic-rich environments'],
    specs: [
      { k: 'Tuning frequency', v: '134 Hz, 189 Hz or 210 Hz' },
      { k: 'Rating range',     v: '5 kVAR to 600 kVAR per step' },
      { k: 'Voltage class',    v: 'LV to 11 kV' },
      { k: 'Insulation',       v: 'Class F or H' },
      { k: 'Cooling',          v: 'Natural air' },
      { k: 'Tests',            v: 'Routine, type tests where applicable' },
      { k: 'Standards',        v: 'IEC 60289 inputs' },
      { k: 'Custom options',   v: 'Combined choke and detune designs' },
      { k: 'Datasheet',        v: 'On request' },
    ],
    industries: ['heavy', 'powergrid', 'datacenter'],
  },

  /* Control Panel Assemblies */
  '02.1': {
    description: 'Onboard locomotive control panels for rolling stock OEMs. Engineered for traction power management, vehicle control logic and onboard protection.',
    applications: ['Traction propulsion control', 'Onboard auxiliary control', 'Protection and interlocking', 'Vehicle management interface'],
    specs: [
      { k: 'Voltage class',  v: 'LV with traction bus inputs' },
      { k: 'Enclosure',      v: 'IP rated, vibration-tolerant' },
      { k: 'Insulation',     v: 'Per EN 50155 inputs' },
      { k: 'Cooling',        v: 'Natural or forced air' },
      { k: 'Tests',          v: 'Routine plus vibration and EMC, where applicable' },
      { k: 'Standards',      v: 'IRS, RDSO, EN 50155 inputs' },
      { k: 'Custom options', v: 'Customer-specific HMI and protection logic' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways'],
  },
  '02.2': {
    description: 'Driver desk consoles and operator HMI assemblies for rolling stock cabs. Built for ergonomic, vibration and visibility requirements.',
    applications: ['Locomotive cab consoles', 'Metro driver desks', 'Train operator HMI', 'Onboard control terminals'],
    specs: [
      { k: 'Construction',   v: 'Welded sheet steel, powder coated' },
      { k: 'Enclosure',      v: 'IP rated, vibration-tolerant' },
      { k: 'Mounting',       v: 'Cab integration as per OEM drawing' },
      { k: 'Tests',          v: 'Routine plus vibration and EMC, where applicable' },
      { k: 'Standards',      v: 'IRS, RDSO, EN 50155 inputs' },
      { k: 'Custom options', v: 'Custom switch layouts and labelling' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways'],
  },
  '02.3': {
    description: 'Power distribution units for industrial, traction and IT applications. Engineered to IEC 61439 with custom layouts per buyer specification.',
    applications: ['Industrial power distribution', 'Onboard PDUs for traction', 'IT and data centre power', 'Auxiliary distribution'],
    specs: [
      { k: 'Current rating', v: 'up to 6300 A' },
      { k: 'Form',           v: 'Form 2, 3b or 4b' },
      { k: 'Enclosure',      v: 'IP 31 to IP 54' },
      { k: 'Tests',          v: 'Routine and type, IEC 61439' },
      { k: 'Standards',      v: 'IEC 61439-1, 61439-2' },
      { k: 'Custom options', v: 'Bus options, metering and protection layouts' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways', 'heavy', 'datacenter', 'powergrid'],
  },
  '02.4': {
    description: 'LV and MV main and sub-distribution power panels. Built, wired and tested to IEC 61439 with full GA, BoM and FAT documentation.',
    applications: ['Main and sub-distribution', 'Motor control centres', 'Industrial automation', 'Process plant electrification'],
    specs: [
      { k: 'Current rating', v: 'up to 6300 A' },
      { k: 'Voltage class',  v: 'LV up to 1.1 kV, MV variants on request' },
      { k: 'Form',           v: 'Form 2, 3b or 4b' },
      { k: 'Enclosure',      v: 'IP 31 to IP 54' },
      { k: 'Tests',          v: 'Routine and type tested assembly' },
      { k: 'Standards',      v: 'IEC 61439-1, 61439-2' },
      { k: 'Custom options', v: 'Custom layouts, drive and PLC integration' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['heavy', 'powergrid', 'datacenter', 'renewables'],
  },

  /* Power Electronics Systems */
  '03.1': {
    description: 'High-frequency battery chargers for material handling equipment. Built for forklift, AGV and warehouse fleet duty cycles with multi-chemistry support.',
    applications: ['Forklift fleet charging', 'AGV depot charging', 'Cold-chain warehousing', 'E-commerce fulfilment centres'],
    specs: [
      { k: 'Output voltage', v: '24 V to 96 V DC' },
      { k: 'Output current', v: 'up to 200 A' },
      { k: 'Chemistries',    v: 'Lead-acid, Li-ion, NiCd' },
      { k: 'Efficiency',     v: 'above 93% typical' },
      { k: 'Connectivity',   v: 'CAN, Modbus, RS485' },
      { k: 'Tests',          v: 'Functional, burn-in, efficiency' },
      { k: 'Standards',      v: 'IEC 62040 inputs, where applicable' },
      { k: 'Custom options', v: 'Opportunity charge profiles, fleet integration' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['mhe'],
  },
  '03.2': {
    description: 'Float cum boost chargers for substation auxiliary battery banks and utility DC backup. Designed for continuous-duty service.',
    applications: ['Substation auxiliary supply', 'Utility DC battery banks', 'Switchyard control supply', 'Industrial DC backup'],
    specs: [
      { k: 'Output voltage', v: '24 V to 220 V DC' },
      { k: 'Output current', v: '10 A to 400 A' },
      { k: 'Modes',          v: 'Float, boost, manual or auto' },
      { k: 'Connectivity',   v: 'Modbus or RS485' },
      { k: 'Tests',          v: 'Routine plus burn-in, where applicable' },
      { k: 'Standards',      v: 'IEEE 946 and IEC 60146 inputs' },
      { k: 'Custom options', v: 'Redundant modules, alarm contacts, remote signalling' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['powergrid', 'railways', 'heavy'],
  },
  '03.3': {
    description: 'Battery chargers for special applications such as traction, marine, defence and specialised industrial use. Engineered to customer specifications.',
    applications: ['Traction onboard charging', 'Marine vessel auxiliary', 'Defence platforms', 'Specialised industrial DC'],
    specs: [
      { k: 'Output voltage', v: 'per application, up to 750 V DC' },
      { k: 'Output current', v: 'per application' },
      { k: 'Topology',       v: 'IGBT or SiC based' },
      { k: 'Enclosure',      v: 'Ruggedised, application-specific' },
      { k: 'Tests',          v: 'Routine, type tests as per QAP' },
      { k: 'Standards',      v: 'EN 50155, MIL inputs, marine class as applicable' },
      { k: 'Custom options', v: 'Full engineering co-design with platform owner' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways', 'powergrid'],
  },

  /* Cross-Segment Solutions */
  '04.1': {
    description: 'Insulated and bare copper busbar systems for panels, DC links and high-current distribution. Configured to customer drawings.',
    applications: ['Panel internal busbars', 'DC link assemblies', 'High-current distribution', 'Substation auxiliary'],
    specs: [
      { k: 'Current rating', v: 'up to 6300 A' },
      { k: 'Voltage class',  v: 'LV to MV configurations' },
      { k: 'Construction',   v: 'Bare or insulated copper' },
      { k: 'Custom options', v: 'Insulation colour, custom bends, tapped connections' },
      { k: 'Tests',          v: 'Routine, conductivity verification' },
      { k: 'Standards',      v: 'IEC 61439 inputs' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways', 'heavy', 'datacenter', 'powergrid'],
  },
  '04.2': {
    description: 'Engineered cable harnesses for rolling stock, industrial panels and OEM integration. Built to drawing with full traceability.',
    applications: ['Rolling stock wiring looms', 'Panel internal harnesses', 'Industrial OEM integration', 'Specialised equipment wiring'],
    specs: [
      { k: 'Cable types',    v: 'EN 50306, IEC 60332 grades' },
      { k: 'Construction',   v: 'Crimped, soldered or hybrid' },
      { k: 'Identification', v: 'Heat-shrink labels, RFID where applicable' },
      { k: 'Tests',          v: 'Continuity, insulation resistance' },
      { k: 'Standards',      v: 'EN 50343 inputs for rail' },
      { k: 'Custom options', v: 'Customer-specific drawings and labelling' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways', 'heavy', 'mhe'],
  },
  '04.3': {
    description: 'Uninterruptible power supplies for critical loads in industrial, IT and onboard applications. Modular and standalone variants.',
    applications: ['Critical IT loads', 'Industrial control backup', 'Onboard auxiliary', 'Substation DC backup'],
    specs: [
      { k: 'Rating range',   v: '1 kVA to 200 kVA' },
      { k: 'Topology',       v: 'On-line double conversion' },
      { k: 'Battery type',   v: 'VRLA, Li-ion' },
      { k: 'Connectivity',   v: 'SNMP, Modbus' },
      { k: 'Tests',          v: 'Functional, burn-in, transfer time' },
      { k: 'Standards',      v: 'IEC 62040 inputs' },
      { k: 'Custom options', v: 'Parallel redundancy, custom runtime' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['datacenter', 'heavy', 'railways'],
  },
  '04.4': {
    description: 'Onboard driver display and HMI units for traction and specialised equipment. Built for cab integration, vibration and visibility requirements.',
    applications: ['Locomotive driver display', 'Metro cab HMI', 'Specialised vehicle display', 'Operator HMI'],
    specs: [
      { k: 'Display size',   v: '7 inch to 15 inch typical' },
      { k: 'Brightness',     v: 'Sunlight readable' },
      { k: 'Interfaces',     v: 'CAN, Ethernet, MVB inputs' },
      { k: 'Tests',          v: 'Vibration, EMC, temperature cycling' },
      { k: 'Standards',      v: 'EN 50155 inputs' },
      { k: 'Custom options', v: 'Customer HMI design, multi-language' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways'],
  },
  '04.5': {
    description: 'Hall-effect and shunt-based current sensing modules for protection, metering and feedback in power electronics and panels.',
    applications: ['Drive feedback', 'Protection relaying', 'Metering circuits', 'Battery management'],
    specs: [
      { k: 'Range',          v: '5 A to 4000 A' },
      { k: 'Topology',       v: 'Open or closed loop Hall, shunt-based' },
      { k: 'Accuracy class', v: 'Class 0.5 to Class 1' },
      { k: 'Output',         v: 'Analog, digital, isolated' },
      { k: 'Tests',          v: 'Calibration against traceable references' },
      { k: 'Standards',      v: 'IEC 60044, IEC 61869 inputs' },
      { k: 'Custom options', v: 'Custom housings, calibration certificates' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways', 'renewables', 'heavy', 'powergrid'],
  },
  '04.6': {
    description: 'Isolated and non-isolated DC-DC conversion modules for onboard, industrial and power-supply applications. Application-specific design and packaging.',
    applications: ['Onboard auxiliary supplies', 'Battery system DC-DC', 'Industrial control supply', 'Sensor power'],
    specs: [
      { k: 'Input voltage',  v: '24 V to 1500 V DC, application-specific' },
      { k: 'Output voltage', v: 'application-specific' },
      { k: 'Power range',    v: '50 W to 10 kW per module' },
      { k: 'Isolation',      v: 'Isolated or non-isolated topologies' },
      { k: 'Tests',          v: 'Functional, efficiency, burn-in' },
      { k: 'Standards',      v: 'EN 50155, IEC 61287 inputs' },
      { k: 'Custom options', v: 'Custom firmware, cooling and packaging' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways', 'heavy', 'renewables'],
  },
  '04.7': {
    description: 'Onboard fire detection units for rolling stock, panel cabinets and specialised installations. Multi-sensor configurations with fault and alarm outputs.',
    applications: ['Rolling stock onboard detection', 'Panel and switchgear cabinets', 'Critical equipment rooms', 'Specialised installations'],
    specs: [
      { k: 'Sensor types',   v: 'Smoke, heat, multi-criteria' },
      { k: 'Outputs',        v: 'Volt-free fault and alarm contacts' },
      { k: 'Power supply',   v: '24 V to 110 V DC, application-specific' },
      { k: 'Enclosure',      v: 'Vibration-tolerant, IP rated' },
      { k: 'Tests',          v: 'Functional plus environmental, where applicable' },
      { k: 'Standards',      v: 'EN 45545, EN 50155 inputs' },
      { k: 'Custom options', v: 'Custom interfaces and multi-zone logic' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways', 'heavy'],
  },
  '04.8': {
    description: 'Overvoltage protection relays for traction and utility applications. Built for fast response and reliable trip behaviour under transient conditions.',
    applications: ['Traction overvoltage protection', 'Utility transient protection', 'Critical load isolation', 'Battery system protection'],
    specs: [
      { k: 'Voltage range',  v: 'LV to MV, application-specific' },
      { k: 'Trip behaviour', v: 'Fast response, definite time' },
      { k: 'Outputs',        v: 'Volt-free trip contacts, signalling' },
      { k: 'Tests',          v: 'Functional, transient response' },
      { k: 'Standards',      v: 'IEC 60255 inputs' },
      { k: 'Custom options', v: 'Custom set points and signalling logic' },
      { k: 'Datasheet',      v: 'On request' },
    ],
    industries: ['railways', 'powergrid'],
  },
};

const QUALIFICATION = [
  { num: '01', title: 'Documentation pack',    body: 'QAP, GA drawings, BoM, datasheets, routine and type test reports, FAT protocol and material traceability on request.' },
  { num: '02', title: 'Standards compliance',  body: 'Designs and tests aligned with IEC 60076, IEC 61439, IEC 60068, IS 2026 and customer-specific specifications.' },
  { num: '03', title: 'In-house testing',      body: 'Routine testing on every unit. Type testing on-site for HV, partial discharge, temperature rise and impulse. Accredited external labs for type approvals.' },
  { num: '04', title: 'Export readiness',      body: 'Seaworthy packing, country of origin documentation, INCOTERMS support and CE marking pathway for European projects.' },
];

/* ============================================================
   Anonymous case study content (no project or client names)
   ============================================================ */
const CASE_STUDIES = [
  {
    tag: 'Railway equipment application',
    title: 'Auxiliary converter magnetics for metro rolling stock.',
    productGroup: 'Magnetics',
    buyerNeed: 'Vibration-tolerant magnetics on a fixed delivery schedule, qualified for onboard duty cycles.',
    quality: 'Type tests for vibration, impulse and temperature rise. Documentation aligned with rolling stock acceptance requirements.',
  },
  {
    tag: 'Renewable energy application',
    title: 'Harmonic filter reactors for a utility-scale solar plant.',
    productGroup: 'Magnetics',
    buyerNeed: 'Air-core reactor banks at the inverter station, validated for 25-year project life.',
    quality: 'Routine and type tests against IEC 60289 inputs. Documentation aligned with EPC handover. Subject to engineering review for site conditions.',
  },
  {
    tag: 'Power utility application',
    title: 'MV distribution transformers and substation panels.',
    productGroup: 'Magnetics + Control Panel Assemblies',
    buyerNeed: 'Type-tested transformers and IEC 61439 distribution panels for an industrial substation upgrade.',
    quality: 'Routine tests on every unit. Type tests through accredited external lab. Third-party witness inspection at hold points.',
  },
  {
    tag: 'Industrial automation application',
    title: 'Drive cabinets and isolation transformers for a heavy machine builder.',
    productGroup: 'Control Panel Assemblies + Magnetics',
    buyerNeed: 'Wired and tested cabinets with motor isolation, integrated with the customer drive platform.',
    quality: 'Stage inspection per customer QAP. FAT protocol agreed in advance. Material traceability supplied with dispatch.',
  },
  {
    tag: 'Material handling equipment application',
    title: 'High-frequency chargers for a multi-site forklift fleet.',
    productGroup: 'Power Electronics Systems',
    buyerNeed: 'Opportunity charging across two battery chemistries with fleet management integration.',
    quality: 'Functional, efficiency and burn-in tests. Documentation aligned with destination market requirements, where applicable.',
  },
  {
    tag: 'Data center power support application',
    title: 'K-rated isolation transformers and PDUs for an IT power chain.',
    productGroup: 'Magnetics + Control Panel Assemblies',
    buyerNeed: 'Harmonic-tolerant isolation transformers and audit-ready PDUs for a critical-load deployment.',
    quality: 'K-factor verification on magnetics, where applicable. IEC 61439 routine tests on assemblies. Documentation prepared for audit and acceptance.',
  },
];

/* ============================================================
   Reusable CaseStudyGrid component
   ============================================================ */
function CaseStudyGrid({ items = CASE_STUDIES, limit }) {
  const data = limit ? items.slice(0, limit) : items;
  return (
    <div className="case-grid">
      {data.map((c, i) => (
        <article className="case-card" key={i}>
          <div className="case-tag">{c.tag}</div>
          <h3>{c.title}</h3>
          <div className="case-section">
            <div className="case-label">Product group</div>
            <div className="case-value">{c.productGroup}</div>
          </div>
          <div className="case-section">
            <div className="case-label">Buyer need</div>
            <div className="case-value">{c.buyerNeed}</div>
          </div>
          <div className="case-section">
            <div className="case-label">Quality or documentation consideration</div>
            <div className="case-value">{c.quality}</div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ============================================================
   Reveal hook
   ============================================================ */
function useReveal() {
  React.useLayoutEffect(() => {
    let cancelled = false;
    let io = null;

    const setup = () => {
      if (cancelled) return;
      const els = document.querySelectorAll('.reveal:not(.is-visible)');
      if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('is-visible'));
        return;
      }
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          io.observe(el);
        }
      });
    };

    const raf1 = requestAnimationFrame(() => requestAnimationFrame(setup));

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      if (io) io.disconnect();
    };
  }, []);
}

/* ============================================================
   Animated counter
   ============================================================ */
function Counter({ to, suffix = '', duration = 1400 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStart(true); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return <span ref={ref} className="mono-num">{val}{suffix}</span>;
}

/* ============================================================
   Engineering abstract visual (SVG)
   ============================================================ */
function EngineeringVisual({ variant = 'grid' }) {
  return (
    <svg viewBox="0 0 600 660" className="eng-svg" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="dynaGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(14,17,22,0.06)" strokeWidth="1" />
        </pattern>
        <pattern id="dynaGridMajor" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(14,17,22,0.12)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="660" fill="var(--bg-card)" />
      <rect width="600" height="660" fill="url(#dynaGrid)" />
      <rect width="600" height="660" fill="url(#dynaGridMajor)" />
      <g transform="translate(300 330)" fill="none" stroke="var(--ink)" strokeWidth="1">
        <circle r="40" />
        <circle r="80" />
        <circle r="120" strokeOpacity="0.7" />
        <circle r="160" strokeOpacity="0.5" />
        <circle r="200" strokeOpacity="0.3" />
        <circle r="240" strokeOpacity="0.15" />
      </g>
      <g stroke="var(--accent)" strokeWidth="1.5" fill="none">
        <path d="M 60 330 L 180 330" />
        <path d="M 420 330 L 540 330" />
        <circle cx="180" cy="330" r="3" fill="var(--accent)" />
        <circle cx="420" cy="330" r="3" fill="var(--accent)" />
      </g>
      <path d="M 60 540 Q 105 500 150 540 T 240 540 T 330 540 T 420 540 T 510 540 T 540 540"
            fill="none" stroke="var(--accent-2)" strokeWidth="1.5" />
      <g stroke="var(--ink)" strokeWidth="1">
        <line x1="60" y1="60" x2="60" y2="80" />
        <line x1="60" y1="60" x2="80" y2="60" />
        <line x1="540" y1="60" x2="540" y2="80" />
        <line x1="540" y1="60" x2="520" y2="60" />
        <line x1="60" y1="600" x2="60" y2="580" />
        <line x1="60" y1="600" x2="80" y2="600" />
        <line x1="540" y1="600" x2="540" y2="580" />
        <line x1="540" y1="600" x2="520" y2="600" />
      </g>
      <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--ink-muted)" letterSpacing="1">
        <text x="60" y="50">FIG. 01 / CORE TOPOLOGY</text>
        <text x="60" y="640">f = 50 / 60 Hz</text>
        <text x="540" y="640" textAnchor="end">DYN-01.A</text>
      </g>
    </svg>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <img className="footer-logo" src={(window.__resources && window.__resources.dynaLogoReversed) || "assets/dynalektric-logo-reversed.png"} alt="Dynalektric logo" width="350" height="150" loading="lazy" />
            <p className="footer-tag">Magnetics, control panels, power electronics and cross-segment components. Engineered in India for industrial, power, railway, renewable and material handling applications worldwide.</p>
          </div>
          <div className="footer-col">
            <h4>Sitemap</h4>
            <nav aria-label="Footer navigation">
              <ul>
                <li><a href="./Dynalektric.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./products-solutions.html">Products &amp; Solutions</a></li>
                <li><a href="./innovation-rd.html">Innovation Portfolio</a></li>
                <li><a href="./industries-applications.html">Industries &amp; Applications</a></li>
                <li><a href="./export.html">Export</a></li>
                <li><a href="./contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer-col">
            <h4>Product groups</h4>
            <ul>
              {PRODUCTS.map(p => (
                <li key={p.id}><a href={`./products-solutions.html?focus=${p.id}`}>{p.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Enquiries</h4>
            <ul>
              <li><a>+91 (placeholder)</a></li>
              <li><a>sales01@dynalektric.com</a></li>
              <li><a>enquiry@dynalektric.com</a></li>
              <li><a href="./contact.html">Submit RFQ →</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} Dynalektric · Power · Motion · Safety</span>
          <span>Engineered in India · Exported worldwide</span>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Final CTA strip
   ============================================================ */
function FinalCTA({
  navigate,
  eyebrow = 'RFQ and enquiry',
  heading = 'Send a specification. Get an engineering response in one business day.',
  body = 'Share your application, ratings, environment and timeline. Our engineering team replies with feasibility, indicative pricing and the relevant datasheets.',
  primaryLabel = 'Submit RFQ',
  primaryTo = 'contact',
  secondaryLabel = 'Browse products',
  secondaryTo = 'products',
  tertiaryLabel = null,
  tertiaryTo = 'contact',
}) {
  return (
    <section className="section reveal" style={{ paddingTop: 'calc(var(--section-y) * 1.2)', paddingBottom: 'calc(var(--section-y) * 1.2)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
        <div className="mono" style={{ marginBottom: 24, color: 'var(--accent)' }}>{eyebrow}</div>
        <h2 style={{ marginBottom: 32 }}>{heading}</h2>
        <p className="lead" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
          {body}
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => navigate(primaryTo)}>
            {primaryLabel} <span className="arrow">→</span>
          </button>
          <button className="btn btn-secondary" onClick={() => navigate(secondaryTo)}>
            {secondaryLabel}
          </button>
        </div>
        {tertiaryLabel && (
          <div style={{ marginTop: 24 }}>
            <button
              className="mono"
              onClick={() => navigate(tertiaryTo)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-muted)', textDecoration: 'underline', textUnderlineOffset: 4, padding: 4, fontSize: 13 }}
            >
              {tertiaryLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* expose to window */
Object.assign(window, {
  PRODUCTS, INDUSTRIES, CERTIFICATIONS, STATS, HERO_HEADLINES, QUALIFICATION,
  CASE_STUDIES, SUBCAT_DETAIL,
  useReveal, Counter, EngineeringVisual, Footer, FinalCTA, CaseStudyGrid,
});
