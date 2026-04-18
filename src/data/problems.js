// ─── STEP SCHEMA ──────────────────────────────────────────────────────────────
// level:   'local' | 'state' | 'central' | 'escalate'
// action:  'call'  | 'web'   | 'app'     | 'visit'
// en / hi: label text
// contact: phone number string OR full URL (null if varies by city/state)
// ──────────────────────────────────────────────────────────────────────────────

// ── Shared reusable steps ────────────────────────────────────────────────────
const CPGRAMS     = { level:'central',  action:'web',   en:'CPGRAMS — National Grievance Portal',          hi:'CPGRAMS — राष्ट्रीय शिकायत पोर्टल',           contact:'https://pgportal.gov.in' }
const NAGAR_NIGAM = { level:'local',    action:'call',  en:'Nagar Nigam / Municipal Corporation',          hi:'नगर निगम / नगर पालिका',                        contact:null,  note:{en:'Find your city helpline at your municipal website',hi:'नगर पालिका की वेबसाइट पर शहर का नंबर लें'} }
const WARD_OFFICE = { level:'local',    action:'visit', en:'Visit Ward Office / Jan Seva Kendra',           hi:'वार्ड कार्यालय / जन सेवा केंद्र जाएं',          contact:null }
const GRAM_PANCH  = { level:'local',    action:'visit', en:'Gram Panchayat Office',                         hi:'ग्राम पंचायत कार्यालय',                          contact:null }
const STATE_DEPT  = { level:'state',    action:'web',   en:'State Govt. Grievance Portal (varies by state)',hi:'राज्य सरकार शिकायत पोर्टल (राज्य अनुसार)',      contact:null }
const DISCOM_CALL = { level:'local',    action:'call',  en:'DISCOM 24hr Helpline',                          hi:'DISCOM 24 घंटे हेल्पलाइन',                       contact:'1912' }
const JAL_BOARD   = { level:'local',    action:'call',  en:'Jal Board / Water Board Helpline',              hi:'जल बोर्ड हेल्पलाइन',                             contact:'1916' }
const POLICE_112  = { level:'local',    action:'call',  en:'Police Emergency',                              hi:'पुलिस आपातकाल',                                  contact:'112' }
const RTI         = { level:'escalate', action:'web',   en:'File RTI Application — Get info on your complaint', hi:'RTI आवेदन दाखिल करें — शिकायत की जानकारी लें', contact:'https://rtionline.gov.in' }

// ─────────────────────────────────────────────────────────────────────────────
export const PROBLEMS = [

  // ══════════════════════════════════════════════════════════════════════
  //  BIJLI / ELECTRICITY
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'bijli-gul', cat:'bijli',
    en:{ title:'No electricity / power cut',          sub:'Report outage & get DISCOM helpline' },
    hi:{ title:'बिजली नहीं आई / गुल है',              sub:'आउटेज रिपोर्ट करें और DISCOM हेल्पलाइन पाएं' },
    type:'hybrid', tags:['bijli','electricity','light','andhera','band','nahi','gul','power','cut','outage'],
    steps:[
      DISCOM_CALL,
      { level:'local',   action:'app',  en:'Use your DISCOM mobile app (BSES/BESCOM/MSEDCL)',    hi:'अपना DISCOM मोबाइल ऐप इस्तेमाल करें',               contact:null },
      { level:'local',   action:'web',  en:'DISCOM Online Complaint Portal',                      hi:'DISCOM ऑनलाइन शिकायत पोर्टल',                        contact:'https://www.bsesdelhi.com' },
      { level:'state',   action:'web',  en:'State Electricity Regulatory Commission',              hi:'राज्य विद्युत नियामक आयोग',                           contact:'https://cercind.gov.in' },
      { level:'central', action:'web',  en:'National Power Portal — outage tracker',               hi:'राष्ट्रीय पावर पोर्टल — आउटेज ट्रैकर',               contact:'https://vidyut.org' },
      CPGRAMS,
    ],
  },
  {
    id:'bijli-bill', cat:'bijli',
    en:{ title:'Electricity bill too high',           sub:'File bill dispute with your DISCOM' },
    hi:{ title:'बिजली बिल बहुत ज़्यादा आया',           sub:'अपने DISCOM में बिल विवाद दर्ज करें' },
    type:'hybrid', tags:['bijli','bill','zyada','high','charge','paisa','electricity','amount'],
    steps:[
      DISCOM_CALL,
      { level:'local',   action:'web',  en:'DISCOM Portal — Bill Dispute Form',                   hi:'DISCOM पोर्टल — बिल विवाद फॉर्म',                    contact:'https://www.bsesdelhi.com' },
      { level:'state',   action:'web',  en:'State Electricity Ombudsman',                          hi:'राज्य विद्युत ओम्बड्समैन',                            contact:null,  note:{en:'Search "state electricity ombudsman [your state]"',hi:'"[आपका राज्य] विद्युत ओम्बड्समैन" खोजें'} },
      { level:'central', action:'call', en:'CERC Consumer Helpline',                               hi:'CERC उपभोक्ता हेल्पलाइन',                             contact:'1800-180-3333' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'bijli-voltage', cat:'bijli',
    en:{ title:'Voltage fluctuation / low voltage',   sub:'Report to DISCOM — can damage appliances' },
    hi:{ title:'वोल्टेज कम-ज़्यादा होता है',            sub:'DISCOM को रिपोर्ट करें — उपकरण खराब हो सकते हैं' },
    type:'hybrid', tags:['bijli','voltage','fluctuation','current','high','low','electricity'],
    steps:[
      DISCOM_CALL,
      { level:'local',   action:'web',  en:'DISCOM Complaint Portal',                             hi:'DISCOM शिकायत पोर्टल',                                contact:'https://www.mahadiscom.in' },
      { level:'state',   action:'web',  en:'State Electricity Regulatory Commission',              hi:'राज्य विद्युत नियामक आयोग',                           contact:'https://cercind.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'bijli-meter', cat:'bijli',
    en:{ title:'Wrong / faulty meter reading',        sub:'Apply for meter test & correction via DISCOM' },
    hi:{ title:'मीटर रीडिंग गलत है',                   sub:'DISCOM से मीटर जांच और सुधार के लिए आवेदन करें' },
    type:'hybrid', tags:['bijli','meter','reading','wrong','galat','faulty','electricity'],
    steps:[
      DISCOM_CALL,
      { level:'local',   action:'web',  en:'Apply for meter test on DISCOM portal',               hi:'DISCOM पोर्टल पर मीटर जांच आवेदन',                   contact:'https://www.bsesdelhi.com' },
      { level:'local',   action:'visit',en:'Visit DISCOM Division Office personally',              hi:'DISCOM डिवीजन ऑफिस जाएं',                             contact:null },
      { level:'state',   action:'web',  en:'State Electricity Ombudsman (if unresolved in 30 days)', hi:'30 दिन में हल न हो तो राज्य विद्युत ओम्बड्समैन',   contact:null },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'bijli-connection', cat:'bijli',
    en:{ title:'Apply for new electricity connection', sub:'Apply online via state DISCOM portal' },
    hi:{ title:'नया बिजली कनेक्शन चाहिए',              sub:'राज्य DISCOM पोर्टल पर ऑनलाइन आवेदन करें' },
    type:'redirect', tags:['bijli','connection','naya','new','apply','electricity'],
    steps:[
      { level:'local',   action:'web',  en:'Apply on DISCOM Online Portal',                       hi:'DISCOM ऑनलाइन पोर्टल पर आवेदन करें',                  contact:'https://saubhagya.gov.in' },
      { level:'local',   action:'visit',en:'Visit DISCOM Customer Care Centre',                   hi:'DISCOM ग्राहक सेवा केंद्र जाएं',                       contact:null },
      { level:'central', action:'web',  en:'Saubhagya — PM Rural Electrification Scheme',         hi:'सौभाग्य — PM ग्रामीण विद्युतीकरण योजना',              contact:'https://saubhagya.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'bijli-transformer', cat:'bijli',
    en:{ title:'Transformer damaged / sparking',      sub:'Emergency — report to DISCOM immediately' },
    hi:{ title:'ट्रांसफार्मर खराब / चिनगारी निकल रही है', sub:'आपातकाल — तुरंत DISCOM को रिपोर्ट करें' },
    type:'urgent', tags:['bijli','transformer','sparking','fire','smoke','electricity','kharab'],
    steps:[
      DISCOM_CALL,
      { level:'local',   action:'call', en:'Fire Department — if active sparks / fire',           hi:'अग्निशमन विभाग — चिनगारी / आग हो तो',                 contact:'101' },
      { level:'local',   action:'web',  en:'DISCOM Emergency Complaint',                          hi:'DISCOM आपातकालीन शिकायत',                              contact:'https://www.bsesdelhi.com' },
      CPGRAMS,
    ],
  },
  {
    id:'bijli-theft', cat:'bijli',
    en:{ title:'Report electricity theft in area',   sub:'Report to DISCOM vigilance + police' },
    hi:{ title:'बिजली चोरी की शिकायत',               sub:'DISCOM विजिलेंस + पुलिस को रिपोर्ट करें' },
    type:'redirect', tags:['bijli','theft','chori','illegal','katiya','electricity'],
    steps:[
      DISCOM_CALL,
      { level:'local',   action:'web',  en:'DISCOM Vigilance — Anti-Theft Portal',                hi:'DISCOM विजिलेंस — एंटी-थेफ्ट पोर्टल',                contact:'https://www.bsesdelhi.com' },
      { level:'local',   action:'call', en:'Local Police Station',                                hi:'स्थानीय पुलिस स्टेशन',                                contact:'112' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  PANI / WATER
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'pani-supply', cat:'pani',
    en:{ title:'No water supply',                    sub:'Jal board complaint + helpline 1916' },
    hi:{ title:'पानी नहीं आ रहा',                    sub:'जल बोर्ड शिकायत + हेल्पलाइन 1916' },
    type:'hybrid', tags:['pani','water','supply','nahi','aa','raha','pipe','board'],
    steps:[
      JAL_BOARD,
      NAGAR_NIGAM,
      { level:'local',   action:'web',  en:'Delhi Jal Board Online Complaint',                    hi:'दिल्ली जल बोर्ड ऑनलाइन शिकायत',                       contact:'https://delhijalboard.delhi.gov.in' },
      { level:'state',   action:'web',  en:'State Jal Board Grievance Portal',                    hi:'राज्य जल बोर्ड शिकायत पोर्टल',                        contact:null },
      { level:'central', action:'web',  en:'Jal Shakti Ministry Complaint',                       hi:'जल शक्ति मंत्रालय शिकायत',                            contact:'https://ejalshakti.gov.in' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'pani-leak', cat:'pani',
    en:{ title:'Water pipe burst / leak',            sub:'Emergency — report with exact location' },
    hi:{ title:'पानी की नली टूटी / लीक हो रही है',  sub:'आपातकाल — सटीक जगह के साथ रिपोर्ट करें' },
    type:'urgent', tags:['pani','leak','pipe','burst','toot','water','emergency','nali'],
    steps:[
      JAL_BOARD,
      NAGAR_NIGAM,
      { level:'local',   action:'web',  en:'Jal Board Emergency Complaint',                      hi:'जल बोर्ड आपातकालीन शिकायत',                           contact:'https://delhijalboard.delhi.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'pani-dirty', cat:'pani',
    en:{ title:'Dirty / contaminated water',         sub:'Health hazard — report to Jal Board + PCB' },
    hi:{ title:'पानी गंदा / बीमार कर रहा है',        sub:'स्वास्थ्य खतरा — जल बोर्ड + PCB को रिपोर्ट करें' },
    type:'urgent', tags:['pani','dirty','ganda','contaminated','quality','bimari','water'],
    steps:[
      JAL_BOARD,
      { level:'local',   action:'call', en:'Municipal Health Department',                         hi:'नगर पालिका स्वास्थ्य विभाग',                           contact:null },
      { level:'state',   action:'web',  en:'State Pollution Control Board',                       hi:'राज्य प्रदूषण नियंत्रण बोर्ड',                        contact:null },
      { level:'central', action:'web',  en:'CPCB — Central Pollution Control Board',              hi:'CPCB — केंद्रीय प्रदूषण नियंत्रण बोर्ड',             contact:'https://cpcb.nic.in' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'pani-pump', cat:'pani',
    en:{ title:'Hand pump / boring not working',     sub:'Gram Panchayat / municipal complaint' },
    hi:{ title:'हैंडपंप / बोरिंग खराब है',           sub:'ग्राम पंचायत / नगर पालिका शिकायत' },
    type:'hybrid', tags:['pani','handpump','boring','pump','kharab','water','gram','panchayat'],
    steps:[
      GRAM_PANCH,
      NAGAR_NIGAM,
      JAL_BOARD,
      { level:'central', action:'web',  en:'Jal Jeevan Mission — rural water supply',             hi:'जल जीवन मिशन — ग्रामीण जल आपूर्ति',                  contact:'https://ejalshakti.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'pani-connection', cat:'pani',
    en:{ title:'Apply for new water connection',    sub:'Apply via local Jal Board portal' },
    hi:{ title:'नया पानी कनेक्शन चाहिए',             sub:'स्थानीय जल बोर्ड पोर्टल से आवेदन करें' },
    type:'redirect', tags:['pani','water','connection','naya','new','apply'],
    steps:[
      { level:'local',   action:'web',  en:'Jal Board Online New Connection Application',         hi:'जल बोर्ड ऑनलाइन नए कनेक्शन आवेदन',                   contact:'https://delhijalboard.delhi.gov.in' },
      { level:'local',   action:'visit',en:'Visit Jal Board Office / Jan Seva Kendra',            hi:'जल बोर्ड कार्यालय / जन सेवा केंद्र जाएं',             contact:null },
      NAGAR_NIGAM, CPGRAMS,
    ],
  },
  {
    id:'pani-bill', cat:'pani',
    en:{ title:'Water bill dispute / wrong bill',   sub:'Contest via Jal Board grievance portal' },
    hi:{ title:'पानी बिल में गड़बड़ी / गलत बिल',     sub:'जल बोर्ड शिकायत पोर्टल से विरोध करें' },
    type:'redirect', tags:['pani','water','bill','zyada','high','wrong','galat'],
    steps:[
      JAL_BOARD,
      { level:'local',   action:'web',  en:'Jal Board Billing Grievance Portal',                  hi:'जल बोर्ड बिलिंग शिकायत पोर्टल',                       contact:'https://delhijalboard.delhi.gov.in' },
      { level:'local',   action:'visit',en:'Visit Jal Board Office with bill copy',               hi:'बिल की कॉपी लेकर जल बोर्ड कार्यालय जाएं',             contact:null },
      CPGRAMS, RTI,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  SADAK / ROADS
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'sadak-pothole', cat:'sadak',
    en:{ title:'Pothole / broken road',             sub:'Upload photo + file complaint with municipality' },
    hi:{ title:'सड़क टूटी / गड्ढा है',              sub:'फोटो अपलोड करें + नगर पालिका में शिकायत करें' },
    type:'hybrid', tags:['sadak','pothole','road','tuta','broken','gaddha','raasta'],
    steps:[
      NAGAR_NIGAM,
      WARD_OFFICE,
      { level:'local',   action:'app',  en:'City App (MyBBMP / 311 / Fix My Street)',             hi:'शहर का ऐप (MyBBMP / 311 / Fix My Street)',             contact:null },
      { level:'state',   action:'web',  en:'State PWD / Public Works Dept Grievance',             hi:'राज्य PWD / लोक निर्माण विभाग शिकायत',                contact:null },
      { level:'central', action:'call', en:'NHAI Helpline (National Highways only)',               hi:'NHAI हेल्पलाइन (राष्ट्रीय राजमार्ग के लिए)',           contact:'1033' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'sadak-light', cat:'sadak',
    en:{ title:'Street light not working',          sub:'Ward office + municipal complaint' },
    hi:{ title:'स्ट्रीट लाइट बंद है',               sub:'वार्ड कार्यालय + नगर पालिका शिकायत' },
    type:'hybrid', tags:['sadak','street','light','lamp','band','andhera','nahi'],
    steps:[
      NAGAR_NIGAM,
      WARD_OFFICE,
      { level:'local',   action:'web',  en:'Municipal Online Complaint Portal',                   hi:'नगर पालिका ऑनलाइन शिकायत पोर्टल',                     contact:'https://pgportal.gov.in' },
      { level:'state',   action:'web',  en:'State Urban Development Dept',                        hi:'राज्य नगर विकास विभाग',                                contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'sadak-nali', cat:'sadak',
    en:{ title:'Drain / sewage blocked or overflowing', sub:'Municipal sanitation complaint' },
    hi:{ title:'नाली / सीवर बंद / ओवरफ्लो हो रहा है', sub:'नगर पालिका स्वच्छता शिकायत' },
    type:'hybrid', tags:['sadak','nali','drain','sewage','block','overflow','band','ganda'],
    steps:[
      NAGAR_NIGAM,
      WARD_OFFICE,
      { level:'local',   action:'app',  en:'Swachh Bharat Urban App',                             hi:'स्वच्छ भारत अर्बन ऐप',                                 contact:'https://swachhbharaturban.gov.in' },
      { level:'state',   action:'web',  en:'State Urban Development / Sanitation Dept',           hi:'राज्य नगर विकास / स्वच्छता विभाग',                    contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'sadak-footpath', cat:'sadak',
    en:{ title:'Footpath broken or missing',        sub:'Municipality / PWD complaint' },
    hi:{ title:'फुटपाथ टूटा / नहीं है',             sub:'नगर पालिका / PWD शिकायत' },
    type:'redirect', tags:['sadak','footpath','pavement','tuta','missing','road'],
    steps:[
      NAGAR_NIGAM, WARD_OFFICE,
      { level:'state',   action:'web',  en:'State PWD Complaint Portal',                         hi:'राज्य PWD शिकायत पोर्टल',                              contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'sadak-bridge', cat:'sadak',
    en:{ title:'Bridge / flyover dangerous condition', sub:'NHAI / state PWD — urgent report' },
    hi:{ title:'पुल / फ्लाईओवर खतरनाक हालत में है', sub:'NHAI / राज्य PWD — तुरंत रिपोर्ट करें' },
    type:'urgent', tags:['sadak','bridge','flyover','pul','dangerous','kharab','crack'],
    steps:[
      { level:'local',   action:'call', en:'NHAI Helpline',                                       hi:'NHAI हेल्पलाइन',                                       contact:'1033' },
      { level:'local',   action:'call', en:'Police — if immediate danger to life',                hi:'पुलिस — जान का खतरा हो तो',                           contact:'112' },
      { level:'state',   action:'web',  en:'State PWD / Bridges Department',                     hi:'राज्य PWD / पुल विभाग',                                contact:null },
      { level:'central', action:'web',  en:'NHAI Grievance Portal',                               hi:'NHAI शिकायत पोर्टल',                                   contact:'https://nhai.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'sadak-encroach', cat:'sadak',
    en:{ title:'Illegal encroachment on road / footpath', sub:'File complaint with local municipal body' },
    hi:{ title:'सड़क / फुटपाथ पर अवैध कब्ज़ा',      sub:'स्थानीय नगर निकाय में शिकायत दर्ज करें' },
    type:'redirect', tags:['sadak','encroachment','qabza','illegal','road','footpath'],
    steps:[
      NAGAR_NIGAM, WARD_OFFICE, POLICE_112, CPGRAMS, RTI,
    ],
  },
  {
    id:'sadak-signboard', cat:'sadak',
    en:{ title:'Road sign missing / damaged',       sub:'Report to PWD / traffic police' },
    hi:{ title:'सड़क संकेत गायब / टूटा हुआ है',     sub:'PWD / ट्रैफिक पुलिस को रिपोर्ट करें' },
    type:'redirect', tags:['sadak','sign','signboard','missing','road','traffic'],
    steps:[
      { level:'local',   action:'call', en:'Traffic Police Control Room',                         hi:'ट्रैफिक पुलिस कंट्रोल रूम',                           contact:'112' },
      NAGAR_NIGAM,
      { level:'state',   action:'web',  en:'State PWD / Transport Dept',                          hi:'राज्य PWD / परिवहन विभाग',                             contact:null },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  SAFAI / SANITATION
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'safai-kachra', cat:'safai',
    en:{ title:'Garbage not collected',             sub:'Multiple channels to get it resolved fast' },
    hi:{ title:'कचरा नहीं उठाया',                  sub:'जल्दी हल के लिए कई रास्ते' },
    type:'hybrid', tags:['safai','kachra','garbage','waste','nahi','uthaya','collection'],
    steps:[
      NAGAR_NIGAM,
      WARD_OFFICE,
      { level:'local',   action:'app',  en:'Swachh Bharat Urban App — Lodge Complaint',           hi:'स्वच्छ भारत अर्बन ऐप — शिकायत दर्ज करें',            contact:'https://sbmurban.org' },
      { level:'local',   action:'call', en:'Safai Seva Helpline (city-level, varies)',             hi:'सफाई सेवा हेल्पलाइन (शहर स्तर, अलग-अलग)',             contact:null },
      { level:'state',   action:'web',  en:'State Sanitation / Urban Dev Portal',                 hi:'राज्य स्वच्छता / नगर विकास पोर्टल',                   contact:null },
      { level:'central', action:'web',  en:'Swachh Bharat Mission Portal',                        hi:'स्वच्छ भारत मिशन पोर्टल',                             contact:'https://swachhbharaturban.gov.in' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'safai-dump', cat:'safai',
    en:{ title:'Illegal garbage dumping nearby',    sub:'Photo + GPS complaint on Swachh Bharat' },
    hi:{ title:'पास में अवैध कचरा डंप है',          sub:'स्वच्छ भारत पर फोटो + GPS शिकायत' },
    type:'hybrid', tags:['safai','garbage','dump','illegal','kachra','ganda','swachh'],
    steps:[
      NAGAR_NIGAM,
      { level:'local',   action:'app',  en:'Swachh Bharat App — Photo + GPS upload',              hi:'स्वच्छ भारत ऐप — फोटो + GPS अपलोड करें',             contact:'https://sbmurban.org' },
      WARD_OFFICE,
      { level:'central', action:'web',  en:'Swachh Bharat Mission Portal',                        hi:'स्वच्छ भारत मिशन पोर्टल',                             contact:'https://swachhbharaturban.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'safai-toilet', cat:'safai',
    en:{ title:'Public toilet dirty / locked',      sub:'Swachh Bharat Mission complaint' },
    hi:{ title:'सार्वजनिक शौचालय गंदा / बंद है',   sub:'स्वच्छ भारत मिशन शिकायत' },
    type:'redirect', tags:['safai','toilet','bathroom','sauchalay','ganda','band','public'],
    steps:[
      NAGAR_NIGAM, WARD_OFFICE,
      { level:'central', action:'web',  en:'SBM Urban — Toilet Feedback',                         hi:'SBM अर्बन — शौचालय फीडबैक',                            contact:'https://sbmurban.org' },
      CPGRAMS,
    ],
  },
  {
    id:'safai-smell', cat:'safai',
    en:{ title:'Bad smell / stench in neighbourhood', sub:'Municipal health + sanitation complaint' },
    hi:{ title:'मोहल्ले में बदबू आ रही है',          sub:'नगर पालिका स्वास्थ्य + स्वच्छता शिकायत' },
    type:'redirect', tags:['safai','badbu','smell','stink','ganda','garbage','nali'],
    steps:[
      NAGAR_NIGAM, WARD_OFFICE,
      { level:'state',   action:'web',  en:'State PCB — if industrial source',                    hi:'राज्य PCB — यदि औद्योगिक स्रोत हो',                   contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'safai-drain', cat:'safai',
    en:{ title:'Open drain / sewage in street',     sub:'File complaint — serious health hazard' },
    hi:{ title:'खुली नाली / सड़क पर सीवेज',          sub:'शिकायत दर्ज करें — गंभीर स्वास्थ्य खतरा' },
    type:'hybrid', tags:['safai','drain','sewage','open','nali','ganda','road'],
    steps:[
      NAGAR_NIGAM, WARD_OFFICE,
      { level:'local',   action:'app',  en:'Swachh Bharat App — Open Drain Report',               hi:'स्वच्छ भारत ऐप — खुली नाली रिपोर्ट',                  contact:'https://sbmurban.org' },
      { level:'central', action:'web',  en:'NMCG — National Mission Clean Ganga (rivers)',        hi:'NMCG — राष्ट्रीय स्वच्छ गंगा मिशन (नदियों के लिए)',  contact:'https://nmcg.nic.in' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  BANK / BANKING
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'bank-deduct', cat:'bank',
    en:{ title:'Money deducted but not credited',   sub:'Bank complaint → RBI Ombudsman if unresolved' },
    hi:{ title:'पैसा कट गया, खाते में नहीं आया',   sub:'बैंक शिकायत → हल न हो तो RBI ओम्बड्समैन' },
    type:'hybrid', tags:['bank','paisa','deduct','cut','kat','account','nahi','money'],
    steps:[
      { level:'local',   action:'call', en:'Your Bank Customer Care (24hr)',                      hi:'आपका बैंक कस्टमर केयर (24 घंटे)',                      contact:null, note:{en:'Check back of your debit card for the number',hi:'डेबिट कार्ड के पीछे नंबर देखें'} },
      { level:'local',   action:'web',  en:'Bank Branch Complaint / Net Banking Grievance',       hi:'बैंक शाखा शिकायत / नेट बैंकिंग शिकायत',               contact:null },
      { level:'local',   action:'visit',en:'Visit Branch with transaction proof',                 hi:'लेनदेन प्रमाण लेकर शाखा जाएं',                        contact:null },
      { level:'central', action:'web',  en:'RBI CMS — Banking Ombudsman (if unresolved in 30d)', hi:'RBI CMS — 30 दिन में हल न हो तो बैंकिंग ओम्बड्समैन', contact:'https://cms.rbi.org.in' },
      { level:'central', action:'call', en:'RBI Helpline',                                        hi:'RBI हेल्पलाइन',                                        contact:'14448' },
      CPGRAMS,
    ],
  },
  {
    id:'bank-fraud', cat:'bank',
    en:{ title:'UPI / Online fraud — money stolen',  sub:'CALL 1930 IMMEDIATELY — every minute matters' },
    hi:{ title:'UPI / ऑनलाइन फ्रॉड हो गया',          sub:'तुरंत 1930 कॉल करें — हर मिनट ज़रूरी है' },
    type:'urgent', tags:['bank','upi','fraud','online','paisa','chori','stolen','scam','thagi'],
    steps:[
      { level:'local',   action:'call', en:'Cyber Fraud Helpline — CALL NOW',                     hi:'साइबर फ्रॉड हेल्पलाइन — अभी कॉल करें',               contact:'1930' },
      { level:'local',   action:'call', en:'Your Bank — Block UPI / Card immediately',            hi:'आपका बैंक — UPI / कार्ड तुरंत ब्लॉक करें',            contact:null },
      { level:'central', action:'web',  en:'Cybercrime.gov.in — File Online Complaint',           hi:'Cybercrime.gov.in — ऑनलाइन शिकायत दर्ज करें',         contact:'https://cybercrime.gov.in' },
      { level:'central', action:'web',  en:'RBI CMS — Banking Fraud Report',                      hi:'RBI CMS — बैंकिंग फ्रॉड रिपोर्ट',                     contact:'https://cms.rbi.org.in' },
      POLICE_112, CPGRAMS,
    ],
  },
  {
    id:'bank-atm', cat:'bank',
    en:{ title:'ATM did not dispense cash',          sub:'File dispute with bank within 30 days' },
    hi:{ title:'ATM ने पैसे नहीं दिए',               sub:'30 दिनों में बैंक में विवाद दर्ज करें' },
    type:'hybrid', tags:['bank','atm','cash','machine','paisa','nahi','dispense'],
    steps:[
      { level:'local',   action:'call', en:'Your Bank Customer Care (24hr)',                      hi:'आपका बैंक कस्टमर केयर',                                contact:null },
      { level:'local',   action:'visit',en:'Visit ATM-owning bank branch with ATM slip',          hi:'ATM स्लिप लेकर बैंक शाखा जाएं',                       contact:null },
      { level:'central', action:'web',  en:'RBI CMS — if bank does not resolve in 30 days',      hi:'RBI CMS — बैंक 30 दिन में हल न करे तो',               contact:'https://cms.rbi.org.in' },
      CPGRAMS,
    ],
  },
  {
    id:'bank-loan', cat:'bank',
    en:{ title:'Loan / EMI / recovery agent harassment', sub:'RBI CMS portal for banking grievance' },
    hi:{ title:'लोन / EMI / रिकवरी एजेंट परेशान कर रहा', sub:'बैंकिंग शिकायत के लिए RBI CMS पोर्टल' },
    type:'redirect', tags:['bank','loan','emi','interest','recovery','agent','paisa','bank'],
    steps:[
      { level:'local',   action:'call', en:'Bank Nodal Officer / Customer Care',                  hi:'बैंक नोडल ऑफिसर / कस्टमर केयर',                       contact:null },
      { level:'central', action:'web',  en:'RBI CMS — Loan / Recovery Complaint',                hi:'RBI CMS — लोन / रिकवरी शिकायत',                        contact:'https://cms.rbi.org.in' },
      { level:'central', action:'web',  en:'SACHET — Illegal Lending Complaint',                  hi:'SACHET — अवैध ऋण देने की शिकायत',                     contact:'https://sachet.rbi.org.in' },
      POLICE_112, CPGRAMS,
    ],
  },
  {
    id:'bank-frozen', cat:'bank',
    en:{ title:'Bank account frozen / blocked',      sub:'Branch complaint + RBI Ombudsman' },
    hi:{ title:'बैंक खाता फ्रीज / बंद हो गया',      sub:'शाखा शिकायत + RBI ओम्बड्समैन' },
    type:'hybrid', tags:['bank','account','freeze','block','band','nahi','chalana'],
    steps:[
      { level:'local',   action:'visit',en:'Visit Bank Branch — ask for written reason',          hi:'बैंक शाखा जाएं — लिखित कारण मांगें',                  contact:null },
      { level:'central', action:'web',  en:'RBI CMS Banking Ombudsman',                           hi:'RBI CMS बैंकिंग ओम्बड्समैन',                           contact:'https://cms.rbi.org.in' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'bank-open', cat:'bank',
    en:{ title:'Bank refusing to open account',      sub:'PM Jan Dhan — zero-balance account is your right' },
    hi:{ title:'बैंक खाता नहीं खोल रहा',             sub:'PM जन धन — जीरो बैलेंस खाते का अधिकार है' },
    type:'redirect', tags:['bank','account','open','refuse','nahi','jan','dhan','khata'],
    steps:[
      { level:'local',   action:'web',  en:'PM Jan Dhan Yojana — Apply Online',                   hi:'PM जन धन योजना — ऑनलाइन आवेदन',                       contact:'https://www.pmjdy.gov.in' },
      { level:'local',   action:'visit',en:'Any scheduled bank must open zero-balance account',   hi:'कोई भी अनुसूचित बैंक जीरो बैलेंस खाता खोलने के लिए बाध्य है', contact:null },
      { level:'central', action:'web',  en:'RBI CMS — Bank Refusing Complaint',                   hi:'RBI CMS — बैंक मना करे तो शिकायत',                    contact:'https://cms.rbi.org.in' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  POLICE / LAW
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'police-fir', cat:'police',
    en:{ title:'Register FIR / police complaint',   sub:'Online FIR on state police portal or dial 112' },
    hi:{ title:'FIR / पुलिस शिकायत दर्ज करनी है',  sub:'राज्य पुलिस पोर्टल पर ऑनलाइन FIR या 112 डायल करें' },
    type:'hybrid', tags:['police','fir','complaint','shikayat','crime','darj','register'],
    steps:[
      { level:'local',   action:'call', en:'Police Emergency — if ongoing crime',                 hi:'पुलिस आपातकाल — अपराध जारी हो तो',                   contact:'112' },
      { level:'local',   action:'web',  en:'Digital Police — Online FIR',                         hi:'डिजिटल पुलिस — ऑनलाइन FIR',                           contact:'https://digitalpolice.gov.in' },
      { level:'local',   action:'visit',en:'Visit Nearest Police Station',                        hi:'नजदीकी पुलिस स्टेशन जाएं',                            contact:null },
      { level:'state',   action:'web',  en:'State Police Online FIR Portal (varies)',              hi:'राज्य पुलिस ऑनलाइन FIR पोर्टल (अलग-अलग)',            contact:null },
      { level:'central', action:'web',  en:'SP / DIG / IGP Office Complaint (escalation)',        hi:'SP / DIG / IGP कार्यालय शिकायत (एस्केलेशन)',          contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'police-harass', cat:'police',
    en:{ title:'Harassment / eve-teasing / abuse',   sub:'Police 112 + NCW women helpline 1091' },
    hi:{ title:'उत्पीड़न / छेड़छाड़ / दुर्व्यवहार',  sub:'पुलिस 112 + NCW महिला हेल्पलाइन 1091' },
    type:'urgent', tags:['police','harassment','abuse','mahila','woman','teasing','pareshan'],
    steps:[
      POLICE_112,
      { level:'local',   action:'call', en:'Women Helpline',                                       hi:'महिला हेल्पलाइन',                                      contact:'1091' },
      { level:'central', action:'web',  en:'NCW — National Commission for Women',                  hi:'NCW — राष्ट्रीय महिला आयोग',                           contact:'https://ncw.nic.in' },
      { level:'local',   action:'visit',en:'Visit Police Station — Mahila Thana',                  hi:'पुलिस स्टेशन — महिला थाना जाएं',                      contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'police-consumer', cat:'police',
    en:{ title:'Consumer fraud / product cheating',  sub:'Consumer forum eDaakhil — free online filing' },
    hi:{ title:'उपभोक्ता धोखाधड़ी / खरीदी में ठगी', sub:'उपभोक्ता फोरम eDaakhil — मुफ़्त ऑनलाइन दाखिल' },
    type:'redirect', tags:['consumer','fraud','cheating','dhoka','product','complaint','thagi'],
    steps:[
      { level:'central', action:'web',  en:'eDaakhil — File Consumer Court Complaint',            hi:'eDaakhil — उपभोक्ता अदालत शिकायत दाखिल करें',         contact:'https://edaakhil.nic.in' },
      { level:'central', action:'call', en:'National Consumer Helpline',                           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन',                        contact:'1800-11-4000' },
      { level:'local',   action:'visit',en:'District Consumer Disputes Redressal Forum',           hi:'जिला उपभोक्ता विवाद निवारण फोरम',                      contact:null },
      POLICE_112, CPGRAMS,
    ],
  },
  {
    id:'police-missing', cat:'police',
    en:{ title:'Missing person report',              sub:'Act fast — call 112 + file online report' },
    hi:{ title:'कोई गुम हो गया है',                  sub:'जल्दी करें — 112 कॉल + ऑनलाइन रिपोर्ट' },
    type:'urgent', tags:['police','missing','gum','kho','person','baccha','child','lost'],
    steps:[
      POLICE_112,
      { level:'local',   action:'visit',en:'Visit nearest police station — file missing report',  hi:'नजदीकी पुलिस स्टेशन — मिसिंग रिपोर्ट दर्ज करें',    contact:null },
      { level:'central', action:'web',  en:'Track the Missing Child Portal',                      hi:'ट्रैक द मिसिंग चाइल्ड पोर्टल',                        contact:'https://trackthemissingchild.gov.in' },
      { level:'central', action:'call', en:'Child Helpline (for missing children)',                hi:'बाल हेल्पलाइन (बच्चों के लिए)',                        contact:'1098' },
      CPGRAMS,
    ],
  },
  {
    id:'police-cyber', cat:'police',
    en:{ title:'Cyber crime / online cheating',      sub:'1930 + cybercrime.gov.in immediately' },
    hi:{ title:'साइबर अपराध / ऑनलाइन ठगी',          sub:'1930 + cybercrime.gov.in तुरंत' },
    type:'urgent', tags:['cyber','crime','online','fraud','cheating','hacking','thagi','internet'],
    steps:[
      { level:'central', action:'call', en:'Cyber Fraud Helpline',                                hi:'साइबर फ्रॉड हेल्पलाइन',                               contact:'1930' },
      { level:'central', action:'web',  en:'Cybercrime.gov.in — File Complaint',                  hi:'Cybercrime.gov.in — शिकायत दर्ज करें',                contact:'https://cybercrime.gov.in' },
      { level:'local',   action:'visit',en:'Nearest Cyber Cell / Police Station',                 hi:'नजदीकी साइबर सेल / पुलिस स्टेशन',                    contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'police-domestic', cat:'police',
    en:{ title:'Domestic violence',                  sub:'Call 112 / 181 — legal protection exists' },
    hi:{ title:'घरेलू हिंसा / मार-पीट',              sub:'112 / 181 कॉल करें — कानूनी सुरक्षा है' },
    type:'urgent', tags:['domestic','violence','maar','peet','husband','wife','family','abuse'],
    steps:[
      POLICE_112,
      { level:'local',   action:'call', en:'Mahila Helpline',                                      hi:'महिला हेल्पलाइन',                                      contact:'181' },
      { level:'local',   action:'visit',en:'Visit Mahila Thana / One Stop Centre',                hi:'महिला थाना / वन स्टॉप सेंटर जाएं',                    contact:null },
      { level:'central', action:'web',  en:'NCW — National Commission for Women',                  hi:'NCW — राष्ट्रीय महिला आयोग',                           contact:'https://ncw.nic.in' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  HEALTH
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'health-ambulance', cat:'health',
    en:{ title:'Need ambulance urgently',            sub:'Call 108 now — share exact GPS location' },
    hi:{ title:'तुरंत एम्बुलेंस चाहिए',              sub:'अभी 108 कॉल करें — सटीक GPS जगह शेयर करें' },
    type:'urgent', tags:['health','ambulance','108','accident','hospital','emergency','jaldi'],
    steps:[
      { level:'local',   action:'call', en:'National Ambulance Service — CALL NOW',               hi:'राष्ट्रीय एम्बुलेंस सेवा — अभी कॉल करें',             contact:'108' },
      { level:'local',   action:'call', en:'CATS Ambulance (Delhi)',                               hi:'CATS एम्बुलेंस (दिल्ली)',                              contact:'102' },
      { level:'local',   action:'call', en:'Police / Emergency',                                   hi:'पुलिस / आपातकाल',                                      contact:'112' },
    ],
  },
  {
    id:'health-hospital', cat:'health',
    en:{ title:'Hospital / doctor misconduct',       sub:'File with NMC + state health dept' },
    hi:{ title:'अस्पताल / डॉक्टर की लापरवाही',      sub:'NMC + राज्य स्वास्थ्य विभाग में शिकायत' },
    type:'redirect', tags:['health','hospital','doctor','negligence','complaint','medical','laparwahi'],
    steps:[
      { level:'local',   action:'web',  en:'Hospital Grievance Cell / Superintendent',            hi:'अस्पताल शिकायत सेल / सुपरिंटेंडेंट',                  contact:null },
      { level:'state',   action:'web',  en:'State Medical Council',                               hi:'राज्य चिकित्सा परिषद',                                  contact:null },
      { level:'central', action:'web',  en:'NMC — National Medical Commission',                   hi:'NMC — राष्ट्रीय चिकित्सा आयोग',                        contact:'https://www.nmc.org.in' },
      { level:'central', action:'web',  en:'Clinical Establishments Complaint',                   hi:'क्लिनिकल स्थापना शिकायत',                               contact:'https://ceo.gov.in' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'health-medicine', cat:'health',
    en:{ title:'Cheap medicine not available',       sub:'Jan Aushadhi store — up to 90% cheaper' },
    hi:{ title:'सस्ती दवाई नहीं मिल रही',            sub:'जन औषधि स्टोर — 90% तक सस्ती दवाई' },
    type:'redirect', tags:['health','medicine','dawai','cheap','sasti','jan','aushadhi','generic'],
    steps:[
      { level:'central', action:'web',  en:'Jan Aushadhi — Find Nearest Store',                   hi:'जन औषधि — नजदीकी स्टोर खोजें',                        contact:'https://janaushadhi.gov.in' },
      { level:'local',   action:'call', en:'Jan Aushadhi Helpline',                               hi:'जन औषधि हेल्पलाइन',                                    contact:'1800-180-8080' },
      { level:'central', action:'web',  en:'PMBJP — PM Bhartiya Jan Aushadhi Pariyojana',         hi:'PMBJP — PM भारतीय जन औषधि परियोजना',                  contact:'https://janaushadhi.gov.in' },
    ],
  },
  {
    id:'health-mental', cat:'health',
    en:{ title:'Mental health / severe distress',    sub:'iCall, Vandrevala, NIMHANS — free & confidential' },
    hi:{ title:'मानसिक स्वास्थ्य / बहुत तनाव है',   sub:'iCall, Vandrevala, NIMHANS — मुफ़्त और गोपनीय' },
    type:'solve', tags:['health','mental','tension','stress','depression','suicide','pareshan','tanav'],
    steps:[
      { level:'central', action:'call', en:'iCall (TISS) — Mental Health Helpline',               hi:'iCall (TISS) — मानसिक स्वास्थ्य हेल्पलाइन',           contact:'9152987821' },
      { level:'central', action:'call', en:'Vandrevala Foundation Helpline (24hr)',                hi:'Vandrevala फाउंडेशन हेल्पलाइन (24 घंटे)',              contact:'1860-2662-345' },
      { level:'central', action:'call', en:'National Mental Health Helpline',                      hi:'राष्ट्रीय मानसिक स्वास्थ्य हेल्पलाइन',                 contact:'14416' },
      { level:'central', action:'web',  en:'NIMHANS Online Services',                              hi:'NIMHANS ऑनलाइन सेवाएं',                                contact:'https://nimhans.ac.in' },
    ],
  },
  {
    id:'health-fake', cat:'health',
    en:{ title:'Fake / quack doctor complaint',      sub:'Report to NMC + state medical council' },
    hi:{ title:'झोलाछाप / नकली डॉक्टर की शिकायत',  sub:'NMC + राज्य चिकित्सा परिषद को रिपोर्ट' },
    type:'redirect', tags:['health','fake','jhola','quack','doctor','fraud','nali'],
    steps:[
      POLICE_112,
      { level:'state',   action:'web',  en:'State Medical Council — Complaint',                   hi:'राज्य चिकित्सा परिषद — शिकायत',                        contact:null },
      { level:'central', action:'web',  en:'NMC — National Medical Commission',                   hi:'NMC — राष्ट्रीय चिकित्सा आयोग',                        contact:'https://www.nmc.org.in' },
      CPGRAMS,
    ],
  },
  {
    id:'health-blood', cat:'health',
    en:{ title:'Need blood / find blood bank',       sub:'National Blood Bank directory — search by city' },
    hi:{ title:'खून चाहिए / ब्लड बैंक ढूंढना है',   sub:'राष्ट्रीय ब्लड बैंक निर्देशिका — शहर से खोजें' },
    type:'redirect', tags:['health','blood','bank','khoon','donor','emergency','hospital'],
    steps:[
      { level:'central', action:'web',  en:'eRaktKosh — National Blood Bank Portal',              hi:'eRaktKosh — राष्ट्रीय ब्लड बैंक पोर्टल',              contact:'https://eraktkosh.mohfw.gov.in' },
      { level:'central', action:'web',  en:'NHP Blood Bank Directory',                            hi:'NHP ब्लड बैंक निर्देशिका',                             contact:'https://www.nhp.gov.in/blood-bank' },
      { level:'local',   action:'call', en:'Nearest Government Hospital Blood Bank',              hi:'नजदीकी सरकारी अस्पताल ब्लड बैंक',                     contact:null },
    ],
  },
  {
    id:'health-insurance', cat:'health',
    en:{ title:'Ayushman / health insurance claim rejected', sub:'PMJAY grievance — escalate claim' },
    hi:{ title:'आयुष्मान / बीमा क्लेम अस्वीकार हुआ', sub:'PMJAY शिकायत — क्लेम बढ़ाएं' },
    type:'redirect', tags:['health','ayushman','insurance','claim','pmjay','rejected','hospital'],
    steps:[
      { level:'central', action:'call', en:'PMJAY Helpline',                                       hi:'PMJAY हेल्पलाइन',                                      contact:'14555' },
      { level:'central', action:'web',  en:'PMJAY — Grievance Portal',                             hi:'PMJAY — शिकायत पोर्टल',                                contact:'https://pmjay.gov.in' },
      { level:'state',   action:'web',  en:'SHA — State Health Agency Office',                     hi:'SHA — राज्य स्वास्थ्य एजेंसी कार्यालय',               contact:null },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  TRANSPORT
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'transport-train', cat:'transport',
    en:{ title:'Train complaint / Rail Madad',       sub:'Rail Madad app or helpline 139' },
    hi:{ title:'ट्रेन की शिकायत / रेल मदद',          sub:'रेल मदद ऐप या हेल्पलाइन 139' },
    type:'redirect', tags:['transport','train','railway','irctc','ticket','rail','complaint'],
    steps:[
      { level:'local',   action:'call', en:'Rail Madad Helpline',                                  hi:'रेल मदद हेल्पलाइन',                                    contact:'139' },
      { level:'central', action:'app',  en:'Rail Madad App',                                       hi:'रेल मदद ऐप',                                           contact:'https://railmadad.indianrailways.gov.in' },
      { level:'central', action:'web',  en:'PG Portal — Railway Ministry',                         hi:'PG पोर्टल — रेलवे मंत्रालय',                           contact:'https://pgportal.gov.in' },
      { level:'central', action:'web',  en:'IRCTC Customer Care',                                  hi:'IRCTC कस्टमर केयर',                                    contact:'https://www.irctc.co.in' },
      CPGRAMS,
    ],
  },
  {
    id:'transport-auto', cat:'transport',
    en:{ title:'Auto / taxi overcharged',            sub:'State transport authority complaint' },
    hi:{ title:'ऑटो / टैक्सी ने ज़्यादा पैसे लिए',  sub:'राज्य परिवहन प्राधिकरण शिकायत' },
    type:'hybrid', tags:['transport','auto','taxi','cab','zyada','overcharge','paisa','driver'],
    steps:[
      { level:'local',   action:'call', en:'Traffic Police Helpline',                              hi:'ट्रैफिक पुलिस हेल्पलाइन',                              contact:'112' },
      { level:'state',   action:'web',  en:'State Transport Authority Complaint',                  hi:'राज्य परिवहन प्राधिकरण शिकायत',                        contact:null },
      { level:'central', action:'web',  en:'Parivahan Grievance Portal',                           hi:'परिवहन शिकायत पोर्टल',                                 contact:'https://parivahan.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'transport-bus', cat:'transport',
    en:{ title:'Bus service complaint',              sub:'State RTC / roadways complaint portal' },
    hi:{ title:'बस सेवा की शिकायत',                  sub:'राज्य RTC / रोडवेज शिकायत पोर्टल' },
    type:'hybrid', tags:['transport','bus','roadways','rtc','complaint','driver','service'],
    steps:[
      { level:'local',   action:'call', en:'State RTC / Roadways Helpline (varies)',               hi:'राज्य RTC / रोडवेज हेल्पलाइन (अलग-अलग)',              contact:null },
      { level:'state',   action:'web',  en:'State Transport Corporation Grievance',                hi:'राज्य परिवहन निगम शिकायत',                             contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'transport-dl', cat:'transport',
    en:{ title:'Driving licence / RC problem',       sub:'Parivahan portal — apply, renew, update' },
    hi:{ title:'ड्राइविंग लाइसेंस / RC की समस्या',  sub:'परिवहन पोर्टल — आवेदन, नवीकरण, अपडेट' },
    type:'redirect', tags:['transport','dl','license','rc','driving','parivahan','renew'],
    steps:[
      { level:'central', action:'web',  en:'Parivahan / Sarathi — DL / RC Portal',                hi:'परिवहन / सारथी — DL / RC पोर्टल',                     contact:'https://parivahan.gov.in' },
      { level:'local',   action:'visit',en:'Visit RTO — Regional Transport Office',               hi:'RTO — क्षेत्रीय परिवहन कार्यालय जाएं',                 contact:null },
      { level:'state',   action:'web',  en:'State Transport Grievance Portal',                    hi:'राज्य परिवहन शिकायत पोर्टल',                           contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'transport-challan', cat:'transport',
    en:{ title:'Traffic challan dispute',            sub:'Check & contest via Parivahan e-challan portal' },
    hi:{ title:'ट्रैफिक चालान गलत कटा',              sub:'परिवहन e-challan पोर्टल से जांच और विरोध करें' },
    type:'redirect', tags:['transport','challan','fine','traffic','police','wrong','echallan'],
    steps:[
      { level:'central', action:'web',  en:'eChallan — Check & Pay / Dispute',                    hi:'eChallan — जांच, भुगतान / विवाद',                      contact:'https://echallan.parivahan.gov.in' },
      { level:'local',   action:'visit',en:'Visit Traffic Court / Traffic Police Office',         hi:'ट्रैफिक कोर्ट / ट्रैफिक पुलिस कार्यालय जाएं',         contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'transport-fastag', cat:'transport',
    en:{ title:'FASTag not working / wrong deduction', sub:'NETC FASTag portal — dispute & recharge' },
    hi:{ title:'FASTag काम नहीं / गलत कटौती',         sub:'NETC FASTag पोर्टल — विवाद और रिचार्ज' },
    type:'redirect', tags:['transport','fastag','toll','highway','deduction','nahi','nhai'],
    steps:[
      { level:'central', action:'web',  en:'FASTag Customer Portal — Dispute',                    hi:'FASTag ग्राहक पोर्टल — विवाद',                         contact:'https://fastag.ihmcl.com' },
      { level:'local',   action:'call', en:'Your issuing bank FASTag helpline',                   hi:'आपके बैंक की FASTag हेल्पलाइन',                        contact:null },
      { level:'central', action:'call', en:'NHAI Helpline',                                       hi:'NHAI हेल्पलाइन',                                       contact:'1033' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  GOVT SERVICES
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'govt-aadhaar', cat:'govt',
    en:{ title:'Aadhaar card problem / update',      sub:'UIDAI portal + helpline 1947' },
    hi:{ title:'आधार कार्ड में गड़बड़ी / अपडेट',     sub:'UIDAI पोर्टल + हेल्पलाइन 1947' },
    type:'redirect', tags:['govt','aadhaar','uid','update','biometric','card','address'],
    steps:[
      { level:'central', action:'web',  en:'myAadhaar — Update Online',                           hi:'myAadhaar — ऑनलाइन अपडेट',                             contact:'https://myaadhaar.uidai.gov.in' },
      { level:'central', action:'call', en:'UIDAI Helpline',                                       hi:'UIDAI हेल्पलाइन',                                      contact:'1947' },
      { level:'local',   action:'visit',en:'Nearest Aadhaar Enrolment Centre',                    hi:'नजदीकी आधार नामांकन केंद्र',                           contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'govt-pan', cat:'govt',
    en:{ title:'PAN card problem / apply',           sub:'NSDL / UTI portal for PAN application' },
    hi:{ title:'PAN कार्ड की समस्या / आवेदन',        sub:'PAN आवेदन के लिए NSDL / UTI पोर्टल' },
    type:'redirect', tags:['govt','pan','card','tax','income','nsdl','apply'],
    steps:[
      { level:'central', action:'web',  en:'NSDL — PAN Application / Correction',                hi:'NSDL — PAN आवेदन / सुधार',                             contact:'https://www.onlineservices.nsdl.com' },
      { level:'central', action:'web',  en:'UTI ITSL — PAN Services',                             hi:'UTI ITSL — PAN सेवाएं',                                contact:'https://www.pan.utiitsl.com' },
      { level:'central', action:'web',  en:'Income Tax e-Filing — PAN Link / Issues',             hi:'आयकर e-Filing — PAN लिंक / समस्याएं',                  contact:'https://eportal.incometax.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'govt-ration', cat:'govt',
    en:{ title:'Ration not received / card problem', sub:'NFSA beneficiary check + state grievance' },
    hi:{ title:'राशन नहीं मिला / कार्ड में समस्या',  sub:'NFSA लाभार्थी जांच + राज्य शिकायत' },
    type:'hybrid', tags:['govt','ration','card','anaj','pds','food','nahi','mila'],
    steps:[
      { level:'local',   action:'visit',en:'Visit FPS (Fair Price Shop) dealer',                  hi:'FPS (उचित मूल्य दुकान) डीलर के पास जाएं',               contact:null },
      { level:'local',   action:'call', en:'District Supply Officer',                              hi:'जिला आपूर्ति अधिकारी',                                  contact:null },
      { level:'central', action:'call', en:'PDS Helpline',                                         hi:'PDS हेल्पलाइन',                                        contact:'1967' },
      { level:'central', action:'web',  en:'NFSA — Check Beneficiary List',                       hi:'NFSA — लाभार्थी सूची जांचें',                          contact:'https://nfsa.gov.in' },
      { level:'state',   action:'web',  en:'State Food & Civil Supplies Grievance',               hi:'राज्य खाद्य एवं नागरिक आपूर्ति शिकायत',               contact:null },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'govt-pension', cat:'govt',
    en:{ title:'Pension stopped / not received',     sub:'Jeevan Pramaan + state pension portal' },
    hi:{ title:'पेंशन रुक गई / नहीं मिली',           sub:'जीवन प्रमाण + राज्य पेंशन पोर्टल' },
    type:'hybrid', tags:['govt','pension','old','age','boodha','nahi','payment','stopped'],
    steps:[
      { level:'central', action:'web',  en:'Jeevan Pramaan — Renew Life Certificate',             hi:'जीवन प्रमाण — जीवन प्रमाण पत्र नवीकरण',               contact:'https://jeevanpramaan.gov.in' },
      { level:'local',   action:'visit',en:'Visit your District Treasury Office',                 hi:'अपने जिला कोषागार कार्यालय जाएं',                      contact:null },
      { level:'state',   action:'web',  en:'State Pension Department Portal',                     hi:'राज्य पेंशन विभाग पोर्टल',                             contact:null },
      { level:'central', action:'web',  en:'EPFO — for salaried employees pension',               hi:'EPFO — वेतनभोगी कर्मचारियों की पेंशन',                contact:'https://www.epfindia.gov.in' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'govt-scholarship', cat:'govt',
    en:{ title:'Scholarship not received',           sub:'NSP — National Scholarship Portal' },
    hi:{ title:'छात्रवृत्ति नहीं मिली',               sub:'NSP — राष्ट्रीय छात्रवृत्ति पोर्टल' },
    type:'redirect', tags:['govt','scholarship','nsp','student','padhai','education','nahi'],
    steps:[
      { level:'central', action:'web',  en:'NSP — National Scholarship Portal',                   hi:'NSP — राष्ट्रीय छात्रवृत्ति पोर्टल',                  contact:'https://scholarships.gov.in' },
      { level:'local',   action:'visit',en:'Visit School / College to check application status',  hi:'स्कूल / कॉलेज जाएं — आवेदन स्थिति जांचें',            contact:null },
      { level:'state',   action:'web',  en:'State Scholarship Dept / Samaj Kalyan',               hi:'राज्य छात्रवृत्ति विभाग / समाज कल्याण',               contact:null },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'govt-birth-death', cat:'govt',
    en:{ title:'Birth / death certificate',          sub:'Apply online via civil registration portal' },
    hi:{ title:'जन्म / मृत्यु प्रमाण पत्र',          sub:'सिविल रजिस्ट्रेशन पोर्टल से ऑनलाइन आवेदन करें' },
    type:'redirect', tags:['govt','birth','death','certificate','janam','mrityu','praman'],
    steps:[
      { level:'central', action:'web',  en:'CRS — Civil Registration System (Online)',            hi:'CRS — नागरिक पंजीकरण प्रणाली (ऑनलाइन)',               contact:'https://crsorgi.gov.in' },
      { level:'local',   action:'visit',en:'Visit Municipal / Panchayat Registration Office',    hi:'नगर पालिका / पंचायत पंजीकरण कार्यालय जाएं',           contact:null },
      { level:'local',   action:'visit',en:'Hospital where birth/death occurred',                 hi:'जहां जन्म/मृत्यु हुई उस अस्पताल में जाएं',             contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'govt-passport', cat:'govt',
    en:{ title:'Passport — apply / renew / tatkaal', sub:'Passport Seva portal — book appointment online' },
    hi:{ title:'पासपोर्ट — आवेदन / नवीकरण / तत्काल', sub:'पासपोर्ट सेवा पोर्टल — ऑनलाइन अपॉइंटमेंट बुक करें' },
    type:'redirect', tags:['govt','passport','tatkaal','apply','renew','seva'],
    steps:[
      { level:'central', action:'web',  en:'Passport Seva Portal — Apply / Renew',                hi:'पासपोर्ट सेवा पोर्टल — आवेदन / नवीकरण',               contact:'https://passportindia.gov.in' },
      { level:'local',   action:'visit',en:'PSK — Passport Seva Kendra (nearest)',                hi:'PSK — पासपोर्ट सेवा केंद्र (नजदीकी)',                  contact:null },
      { level:'central', action:'call', en:'Passport Helpline',                                    hi:'पासपोर्ट हेल्पलाइन',                                   contact:'1800-258-1800' },
      CPGRAMS,
    ],
  },
  {
    id:'govt-voter', cat:'govt',
    en:{ title:'Voter ID — apply / update / download', sub:'Voters Portal — NVSP / EPIC download' },
    hi:{ title:'मतदाता पहचान — आवेदन / अपडेट / डाउनलोड', sub:'मतदाता पोर्टल — NVSP / EPIC डाउनलोड' },
    type:'redirect', tags:['govt','voter','id','card','epic','nvsp','election','apply'],
    steps:[
      { level:'central', action:'web',  en:'Voters Portal / NVSP',                                hi:'मतदाता पोर्टल / NVSP',                                 contact:'https://voters.eci.gov.in' },
      { level:'local',   action:'visit',en:'BLO — Booth Level Officer',                           hi:'BLO — बूथ स्तरीय अधिकारी',                             contact:null },
      { level:'state',   action:'web',  en:'State CEO — Chief Electoral Officer',                 hi:'राज्य CEO — मुख्य निर्वाचन अधिकारी',                  contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'govt-income-tax', cat:'govt',
    en:{ title:'Income tax / ITR filing problem',   sub:'e-Filing portal — ITR, refund, PAN' },
    hi:{ title:'इनकम टैक्स / ITR दाखिल करने में समस्या', sub:'e-Filing पोर्टल — ITR, रिफंड, PAN' },
    type:'redirect', tags:['govt','income','tax','itr','filing','refund','pan','return'],
    steps:[
      { level:'central', action:'web',  en:'IT e-Filing Portal',                                  hi:'IT e-Filing पोर्टल',                                   contact:'https://eportal.incometax.gov.in' },
      { level:'central', action:'call', en:'Income Tax Helpline',                                 hi:'आयकर हेल्पलाइन',                                       contact:'1800-103-0025' },
      { level:'local',   action:'visit',en:'Visit your jurisdictional Income Tax Office',         hi:'अपने क्षेत्राधिकार के आयकर कार्यालय जाएं',             contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'govt-grievance', cat:'govt',
    en:{ title:'General government dept complaint',  sub:'CPGRAMS — central/state dept grievance' },
    hi:{ title:'किसी भी सरकारी विभाग की शिकायत',    sub:'CPGRAMS — केंद्र / राज्य विभाग के खिलाफ' },
    type:'redirect', tags:['govt','complaint','shikayat','cpgrams','department','government','general'],
    steps:[
      CPGRAMS,
      { level:'state',   action:'web',  en:'State Govt. Grievance Portal',                        hi:'राज्य सरकार शिकायत पोर्टल',                            contact:null },
      { level:'local',   action:'visit',en:'Collector / SDM Office',                              hi:'कलेक्टर / SDM कार्यालय',                               contact:null },
      RTI,
    ],
  },
  {
    id:'govt-digilocker', cat:'govt',
    en:{ title:'Download / access government documents', sub:'DigiLocker — Aadhaar, DL, marksheets' },
    hi:{ title:'सरकारी दस्तावेज़ देखें / डाउनलोड करें', sub:'DigiLocker — आधार, DL, मार्कशीट, सभी दस्तावेज़' },
    type:'redirect', tags:['govt','digilocker','document','aadhaar','pan','dl','marksheet','certificate'],
    steps:[
      { level:'central', action:'web',  en:'DigiLocker Portal',                                   hi:'DigiLocker पोर्टल',                                    contact:'https://digilocker.gov.in' },
      { level:'central', action:'app',  en:'DigiLocker Mobile App',                               hi:'DigiLocker मोबाइल ऐप',                                 contact:'https://digilocker.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'govt-pmkisan', cat:'govt',
    en:{ title:'PM Kisan payment not received',      sub:'Check status + eKYC on PM Kisan portal' },
    hi:{ title:'PM किसान पेमेंट नहीं मिली',          sub:'PM किसान पोर्टल पर स्थिति + eKYC जांचें' },
    type:'redirect', tags:['govt','pmkisan','farmer','kisan','payment','nahi','benefit'],
    steps:[
      { level:'central', action:'web',  en:'PM Kisan Portal — Status / eKYC',                    hi:'PM किसान पोर्टल — स्थिति / eKYC',                      contact:'https://pmkisan.gov.in' },
      { level:'central', action:'call', en:'PM Kisan Helpline',                                   hi:'PM किसान हेल्पलाइन',                                   contact:'155261' },
      { level:'local',   action:'visit',en:'Visit Patwari / Lekhpal / Agriculture Dept',          hi:'पटवारी / लेखपाल / कृषि विभाग जाएं',                   contact:null },
      CPGRAMS, RTI,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  TELECOM
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'telecom-signal', cat:'telecom',
    en:{ title:'No mobile signal / network issue',   sub:'TRAI complaint + operator customer care' },
    hi:{ title:'मोबाइल में नेटवर्क / सिग्नल नहीं है', sub:'TRAI शिकायत + ऑपरेटर कस्टमर केयर' },
    type:'hybrid', tags:['telecom','signal','network','mobile','phone','nahi','issue','coverage'],
    steps:[
      { level:'local',   action:'call', en:'Your Operator Customer Care',                          hi:'आपका ऑपरेटर कस्टमर केयर',                              contact:null, note:{en:'Jio: 198, Airtel: 121, Vi: 199, BSNL: 1800-180-1503',hi:'Jio: 198, Airtel: 121, Vi: 199, BSNL: 1800-180-1503'} },
      { level:'central', action:'web',  en:'TRAI MyCall / MySpeed App — Lodge Complaint',         hi:'TRAI MyCall / MySpeed ऐप — शिकायत दर्ज करें',         contact:'https://trai.gov.in' },
      { level:'central', action:'web',  en:'TRAI Complaint Registration Portal',                  hi:'TRAI शिकायत पंजीकरण पोर्टल',                           contact:'https://trai.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'telecom-internet', cat:'telecom',
    en:{ title:'Internet very slow / not working',   sub:'Speed test + ISP complaint + TRAI escalation' },
    hi:{ title:'इंटरनेट बहुत धीमा / काम नहीं कर रहा', sub:'स्पीड टेस्ट + ISP शिकायत + TRAI एस्केलेशन' },
    type:'hybrid', tags:['telecom','internet','slow','broadband','wifi','speed','network','data'],
    steps:[
      { level:'local',   action:'call', en:'Your ISP / Operator Customer Care',                   hi:'आपका ISP / ऑपरेटर कस्टमर केयर',                        contact:null },
      { level:'central', action:'app',  en:'TRAI MySpeed App — Report Slow Internet',             hi:'TRAI MySpeed ऐप — धीमा इंटरनेट रिपोर्ट',              contact:'https://trai.gov.in' },
      { level:'central', action:'web',  en:'TRAI Complaint Portal',                               hi:'TRAI शिकायत पोर्टल',                                   contact:'https://trai.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'telecom-sim-fraud', cat:'telecom',
    en:{ title:'SIM card fraud / cloning',           sub:'Sanchar Saathi portal + cybercrime report' },
    hi:{ title:'SIM कार्ड फ्रॉड / क्लोनिंग',        sub:'संचार साथी पोर्टल + साइबर क्राइम रिपोर्ट' },
    type:'urgent', tags:['telecom','sim','fraud','clone','mobile','number','porting','chori'],
    steps:[
      { level:'central', action:'web',  en:'Sanchar Saathi — Block Mobile / SIM',                hi:'संचार साथी — मोबाइल / SIM ब्लॉक करें',                contact:'https://sancharsaathi.gov.in' },
      { level:'central', action:'call', en:'Cyber Fraud Helpline',                                hi:'साइबर फ्रॉड हेल्पलाइन',                               contact:'1930' },
      { level:'central', action:'web',  en:'Cybercrime.gov.in — File Complaint',                  hi:'Cybercrime.gov.in — शिकायत दर्ज करें',                contact:'https://cybercrime.gov.in' },
      POLICE_112, CPGRAMS,
    ],
  },
  {
    id:'telecom-spam', cat:'telecom',
    en:{ title:'Spam calls / promotional SMS',       sub:'Register on DND — TRAI portal / SMS 1909' },
    hi:{ title:'स्पैम कॉल / प्रचार SMS आ रहे हैं',   sub:'DND में रजिस्टर करें — TRAI पोर्टल / 1909 SMS' },
    type:'redirect', tags:['telecom','spam','call','sms','promo','dnd','trai','message'],
    steps:[
      { level:'local',   action:'call', en:'SMS DND to 1909 to activate Do Not Disturb',          hi:'1909 पर DND SMS करें — परेशान न करें सेवा',           contact:'1909' },
      { level:'central', action:'web',  en:'TRAI DND Portal — Register / Report',                 hi:'TRAI DND पोर्टल — रजिस्टर / रिपोर्ट',                contact:'https://trai.gov.in/dnd' },
      { level:'central', action:'app',  en:'TRAI DND App — Block + Report Spam',                  hi:'TRAI DND ऐप — ब्लॉक + स्पैम रिपोर्ट',                contact:'https://trai.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'telecom-bill', cat:'telecom',
    en:{ title:'Mobile / broadband bill too high',   sub:'Operator complaint + TRAI escalation' },
    hi:{ title:'मोबाइल / ब्रॉडबैंड बिल बहुत ज़्यादा', sub:'ऑपरेटर शिकायत + TRAI एस्केलेशन' },
    type:'hybrid', tags:['telecom','mobile','bill','zyada','broadband','internet','charge','phone'],
    steps:[
      { level:'local',   action:'call', en:'Your Operator Customer Care',                          hi:'आपका ऑपरेटर कस्टमर केयर',                              contact:null },
      { level:'central', action:'web',  en:'TRAI — File Tariff Complaint',                        hi:'TRAI — टैरिफ शिकायत दाखिल करें',                       contact:'https://trai.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'telecom-lost-mobile', cat:'telecom',
    en:{ title:'Lost / stolen mobile — block IMEI',  sub:'Sanchar Saathi — block your phone immediately' },
    hi:{ title:'मोबाइल खो गया / चोरी हुआ — IMEI ब्लॉक', sub:'संचार साथी — तुरंत अपना फोन ब्लॉक करें' },
    type:'urgent', tags:['telecom','mobile','lost','stolen','imei','block','phone','kho','chori'],
    steps:[
      { level:'central', action:'web',  en:'Sanchar Saathi — CEIR: Block Stolen Mobile',         hi:'संचार साथी — CEIR: चोरी मोबाइल ब्लॉक',               contact:'https://sancharsaathi.gov.in' },
      POLICE_112,
      { level:'local',   action:'visit',en:'File FIR at nearest police station',                  hi:'नजदीकी पुलिस स्टेशन में FIR दर्ज करें',               contact:null },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  ENVIRONMENT
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'env-air', cat:'env',
    en:{ title:'Air pollution / industrial smoke',   sub:'CPCB / State PCB complaint portal' },
    hi:{ title:'वायु प्रदूषण / औद्योगिक धुआं',      sub:'CPCB / राज्य PCB शिकायत पोर्टल' },
    type:'redirect', tags:['env','pollution','air','smoke','dhuan','factory','dust','aqi'],
    steps:[
      { level:'local',   action:'call', en:'Local Municipal Health Officer',                      hi:'स्थानीय नगर पालिका स्वास्थ्य अधिकारी',               contact:null },
      { level:'state',   action:'web',  en:'State Pollution Control Board — Complaint',           hi:'राज्य प्रदूषण नियंत्रण बोर्ड — शिकायत',               contact:null },
      { level:'central', action:'web',  en:'CPCB Grievance Portal',                               hi:'CPCB शिकायत पोर्टल',                                   contact:'https://cpcb.nic.in' },
      { level:'central', action:'app',  en:'SAMEER App — Air Quality + Complaint',                hi:'SAMEER ऐप — वायु गुणवत्ता + शिकायत',                  contact:'https://app.cpcbccr.com' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'env-noise', cat:'env',
    en:{ title:'Noise pollution (DJ / loudspeaker)',  sub:'Police complaint + Pollution Control Board' },
    hi:{ title:'ध्वनि प्रदूषण (DJ / लाउडस्पीकर)',   sub:'पुलिस शिकायत + प्रदूषण नियंत्रण बोर्ड' },
    type:'hybrid', tags:['env','noise','sound','shor','dj','loudspeaker','music','loud'],
    steps:[
      POLICE_112,
      { level:'local',   action:'call', en:'Local Police Station',                                hi:'स्थानीय पुलिस स्टेशन',                                contact:'112' },
      { level:'state',   action:'web',  en:'State PCB — Noise Pollution Complaint',               hi:'राज्य PCB — ध्वनि प्रदूषण शिकायत',                    contact:null },
      { level:'central', action:'web',  en:'CPCB — Noise Pollution',                              hi:'CPCB — ध्वनि प्रदूषण',                                contact:'https://cpcb.nic.in' },
      CPGRAMS,
    ],
  },
  {
    id:'env-tree', cat:'env',
    en:{ title:'Illegal tree cutting',               sub:'Forest dept + local municipality complaint' },
    hi:{ title:'अवैध पेड़ काटना',                    sub:'वन विभाग + स्थानीय नगर पालिका शिकायत' },
    type:'redirect', tags:['env','tree','ped','cutting','illegal','forest','jungle','environment'],
    steps:[
      POLICE_112,
      NAGAR_NIGAM,
      { level:'state',   action:'web',  en:'State Forest Department',                             hi:'राज्य वन विभाग',                                        contact:null },
      { level:'central', action:'web',  en:'MoEFCC — Ministry of Environment Grievance',          hi:'MoEFCC — पर्यावरण मंत्रालय शिकायत',                    contact:'https://envfor.nic.in' },
      CPGRAMS,
    ],
  },
  {
    id:'env-water-pollution', cat:'env',
    en:{ title:'River / pond / lake water pollution', sub:'CPCB / SPCB — report with location & photo' },
    hi:{ title:'नदी / तालाब / झील में प्रदूषण',      sub:'CPCB / SPCB — जगह और फोटो के साथ रिपोर्ट' },
    type:'redirect', tags:['env','water','river','pond','lake','pollution','nadi','ganda','waste'],
    steps:[
      { level:'state',   action:'web',  en:'State PCB — Water Pollution Complaint',               hi:'राज्य PCB — जल प्रदूषण शिकायत',                       contact:null },
      { level:'central', action:'web',  en:'CPCB Water Portal',                                   hi:'CPCB जल पोर्टल',                                       contact:'https://cpcb.nic.in' },
      { level:'central', action:'web',  en:'NMCG — Ganga / River Pollution',                      hi:'NMCG — गंगा / नदी प्रदूषण',                           contact:'https://nmcg.nic.in' },
      CPGRAMS, RTI,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  EDUCATION
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'edu-fees', cat:'edu',
    en:{ title:'School charging excess fees',        sub:'State fee regulatory committee complaint' },
    hi:{ title:'स्कूल ने ज़्यादा फीस ली है',          sub:'राज्य शुल्क नियामक समिति शिकायत' },
    type:'redirect', tags:['edu','school','fees','zyada','high','charge','complaint','paisa'],
    steps:[
      { level:'local',   action:'visit',en:'School Principal / Management Committee',             hi:'स्कूल प्रधानाचार्य / प्रबंधन समिति',                   contact:null },
      { level:'state',   action:'web',  en:'State Fee Regulatory Committee',                      hi:'राज्य शुल्क नियामक समिति',                             contact:null },
      { level:'state',   action:'web',  en:'District Education Officer (DEO)',                    hi:'जिला शिक्षा अधिकारी (DEO)',                             contact:null },
      { level:'central', action:'web',  en:'CBSE Grievance (if CBSE school)',                     hi:'CBSE शिकायत (CBSE स्कूल हो तो)',                       contact:'https://www.cbse.gov.in' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'edu-scholarship-nsp', cat:'edu',
    en:{ title:'Scholarship not received / check status', sub:'NSP — National Scholarship Portal' },
    hi:{ title:'छात्रवृत्ति नहीं मिली / स्थिति देखें', sub:'NSP — राष्ट्रीय छात्रवृत्ति पोर्टल' },
    type:'redirect', tags:['edu','scholarship','nsp','student','money','nahi','mila'],
    steps:[
      { level:'central', action:'web',  en:'NSP — Check Status / Renewal',                        hi:'NSP — स्थिति जांचें / नवीकरण',                         contact:'https://scholarships.gov.in' },
      { level:'local',   action:'visit',en:'School / College Nodal Officer',                      hi:'स्कूल / कॉलेज नोडल ऑफिसर',                            contact:null },
      { level:'state',   action:'web',  en:'State Social Welfare / Scholarship Dept',             hi:'राज्य समाज कल्याण / छात्रवृत्ति विभाग',               contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'edu-affiliation', cat:'edu',
    en:{ title:'College degree / affiliation issue', sub:'UGC / AICTE / state university complaint' },
    hi:{ title:'कॉलेज डिग्री / संबद्धता की समस्या',  sub:'UGC / AICTE / राज्य विश्वविद्यालय शिकायत' },
    type:'redirect', tags:['edu','college','degree','university','ugc','affiliation','aicte'],
    steps:[
      { level:'local',   action:'visit',en:'University / College Exam Cell',                      hi:'विश्वविद्यालय / कॉलेज परीक्षा सेल',                    contact:null },
      { level:'state',   action:'web',  en:'State University / Affiliating University',           hi:'राज्य विश्वविद्यालय / संबद्ध विश्वविद्यालय',           contact:null },
      { level:'central', action:'web',  en:'UGC Grievance Portal',                               hi:'UGC शिकायत पोर्टल',                                    contact:'https://www.ugc.gov.in' },
      { level:'central', action:'web',  en:'AICTE (for engineering / technical courses)',        hi:'AICTE (इंजीनियरिंग / तकनीकी पाठ्यक्रम के लिए)',       contact:'https://www.aicte-india.org' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'edu-midday', cat:'edu',
    en:{ title:'Mid-day meal not provided in school', sub:'PM POSHAN / state education dept complaint' },
    hi:{ title:'स्कूल में मध्याह्न भोजन नहीं मिला',  sub:'PM POSHAN / राज्य शिक्षा विभाग शिकायत' },
    type:'redirect', tags:['edu','midday','meal','school','food','khana','nahi','poshan'],
    steps:[
      { level:'local',   action:'visit',en:'School Principal / Head Teacher',                     hi:'स्कूल प्रधानाचार्य / प्रधान शिक्षक',                   contact:null },
      { level:'local',   action:'visit',en:'Block Education Officer (BEO)',                       hi:'खंड शिक्षा अधिकारी (BEO)',                              contact:null },
      { level:'state',   action:'web',  en:'State Education Dept — MDM Complaint',               hi:'राज्य शिक्षा विभाग — MDM शिकायत',                      contact:null },
      { level:'central', action:'web',  en:'PM POSHAN (Mid-Day Meal) Portal',                    hi:'PM POSHAN (मध्याह्न भोजन) पोर्टल',                     contact:'https://pmposhan.education.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'edu-rte', cat:'edu',
    en:{ title:'RTE admission denied / problem',     sub:'State education dept + RTE portal' },
    hi:{ title:'RTE प्रवेश नहीं मिला / समस्या है',   sub:'राज्य शिक्षा विभाग + RTE पोर्टल' },
    type:'hybrid', tags:['edu','rte','admission','school','denied','nahi','mila','right'],
    steps:[
      { level:'local',   action:'visit',en:'Block Education Office (BEO)',                        hi:'खंड शिक्षा कार्यालय (BEO)',                             contact:null },
      { level:'state',   action:'web',  en:'State RTE Portal / Education Dept',                   hi:'राज्य RTE पोर्टल / शिक्षा विभाग',                      contact:null },
      { level:'central', action:'web',  en:'RTE Resource Support System',                         hi:'RTE संसाधन सहायता प्रणाली',                            contact:'https://rte25.nic.in' },
      CPGRAMS, RTI,
    ],
  },
]
