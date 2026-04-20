// ─── STEP SCHEMA ──────────────────────────────────────────────────────────────
// level:   'local' | 'state' | 'central' | 'escalate'
// action:  'call'  | 'web'   | 'app'     | 'visit'
// en / hi: label text
// contact: phone number string OR full URL (null if varies by city/state)
// ──────────────────────────────────────────────────────────────────────────────

// ── Shared reusable steps ────────────────────────────────────────────────────
const CPGRAMS     = { level:'central',  action:'web',   en:'CPGRAMS — National Grievance Portal',          hi:'CPGRAMS — राष्ट्रीय शिकायत पोर्टल',           contact:'https://pgportal.gov.in/Home/LodgeGrievance' }
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
      { level:'local',   action:'web',  en:'Municipal Online Complaint Portal',                   hi:'नगर पालिका ऑनलाइन शिकायत पोर्टल',                     contact:'https://pgportal.gov.in/Home/LodgeGrievance' },
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
      { level:'central', action:'web',  en:'PG Portal — Railway Ministry',                         hi:'PG पोर्टल — रेलवे मंत्रालय',                           contact:'https://pgportal.gov.in/Home/LodgeGrievance' },
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
  {
    id:'edu-certificate', cat:'edu',
    en:{ title:'Degree / certificate not issued',    sub:'College or university not releasing documents' },
    hi:{ title:'डिग्री / सर्टिफिकेट नहीं मिल रहा',  sub:'कॉलेज या विश्वविद्यालय दस्तावेज़ नहीं दे रहा' },
    type:'hybrid', tags:['edu','degree','certificate','marksheet','document','nahi','mila','college','university'],
    steps:[
      { level:'local',   action:'visit',en:'College / University Exam Controller',                hi:'कॉलेज / यूनिवर्सिटी परीक्षा नियंत्रक से मिलें',        contact:null },
      { level:'state',   action:'web',  en:'State University Grievance Cell',                     hi:'राज्य विश्वविद्यालय शिकायत सेल',                        contact:null },
      { level:'central', action:'web',  en:'UGC Grievance Portal — for affiliated colleges',      hi:'UGC शिकायत पोर्टल — संबद्ध कॉलेजों के लिए',            contact:'https://grievance.ugc.ac.in' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'edu-college-refund', cat:'edu',
    en:{ title:'College / coaching fee refund',      sub:'Refund after leaving — college must refund' },
    hi:{ title:'कॉलेज / कोचिंग फीस वापसी चाहिए',    sub:'छोड़ने के बाद रिफंड — कॉलेज वापस करना होगा' },
    type:'hybrid', tags:['edu','college','fees','refund','wapas','coaching','paisa','return'],
    steps:[
      { level:'local',   action:'visit',en:'College Principal — written refund request',          hi:'कॉलेज प्रिंसिपल — लिखित रिफंड आवेदन',                  contact:null },
      { level:'state',   action:'web',  en:'State Education Department / AICTE nodal office',     hi:'राज्य शिक्षा विभाग / AICTE नोडल ऑफिस',                 contact:null },
      { level:'central', action:'web',  en:'AICTE Grievance Portal',                              hi:'AICTE शिकायत पोर्टल',                                   contact:'https://grievances.aicte-india.org' },
      { level:'central', action:'web',  en:'National Consumer Helpline — consumer forum option',  hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — उपभोक्ता फोरम विकल्प', contact:'https://consumerhelpline.gov.in' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  CONSUMER / REFUND
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'consumer-defective', cat:'consumer',
    en:{ title:'Defective product / service complaint', sub:'File complaint at National Consumer Helpline 1800-11-4000' },
    hi:{ title:'खराब प्रोडक्ट / सेवा की शिकायत',       sub:'राष्ट्रीय उपभोक्ता हेल्पलाइन 1800-11-4000' },
    type:'hybrid', helpline:'1800-11-4000',
    tags:['consumer','product','defective','kharab','complaint','broken','faulty','warranty','guarantee'],
    steps:[
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000 (free)',    hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000 (मुफ़्त)',  contact:'1800-11-4000' },
      { level:'local',   action:'web',  en:'Consumer Online Portal — consumerhelpline.gov.in',    hi:'उपभोक्ता ऑनलाइन पोर्टल',                               contact:'https://consumerhelpline.gov.in' },
      { level:'central', action:'web',  en:'E-DAAKHIL — file consumer court case online',         hi:'E-DAAKHIL — उपभोक्ता अदालत में ऑनलाइन केस दर्ज करें', contact:'https://edaakhil.nic.in' },
      CPGRAMS,
    ],
  },
  {
    id:'consumer-refund', cat:'consumer',
    en:{ title:'Refund not received',                   sub:'Consumer forum + brand escalation' },
    hi:{ title:'रिफंड नहीं मिला',                       sub:'उपभोक्ता फोरम + ब्रांड एस्केलेशन' },
    type:'hybrid', helpline:'1800-11-4000',
    tags:['refund','nahi','mila','paisa','wapas','money','return','consumer','payment'],
    steps:[
      { level:'local',   action:'call', en:'Brand/Company Customer Care first',                   hi:'पहले ब्रांड / कंपनी कस्टमर केयर',                      contact:null },
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'central', action:'web',  en:'consumerhelpline.gov.in — file online complaint',     hi:'consumerhelpline.gov.in — ऑनलाइन शिकायत',              contact:'https://consumerhelpline.gov.in' },
      { level:'central', action:'web',  en:'E-DAAKHIL — consumer court online',                   hi:'E-DAAKHIL — उपभोक्ता अदालत ऑनलाइन',                   contact:'https://edaakhil.nic.in' },
      CPGRAMS,
    ],
  },
  {
    id:'consumer-fake-website', cat:'consumer',
    en:{ title:'Fake website / online purchase fraud',  sub:'Cyber crime + consumer helpline' },
    hi:{ title:'फर्जी वेबसाइट / ऑनलाइन खरीद में ठगी', sub:'साइबर क्राइम + उपभोक्ता हेल्पलाइन' },
    type:'urgent', helpline:'1930',
    tags:['fake','website','fraud','online','scam','ठगी','dhoka','shopping','purchase','cyber'],
    steps:[
      { level:'local',   action:'call', en:'Cyber Crime Helpline — 1930 (report immediately)',    hi:'साइबर क्राइम हेल्पलाइन — 1930 (तुरंत रिपोर्ट)',       contact:'1930' },
      { level:'local',   action:'web',  en:'cybercrime.gov.in — file online fraud report',        hi:'cybercrime.gov.in — ऑनलाइन फ्रॉड रिपोर्ट',            contact:'https://cybercrime.gov.in' },
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'central', action:'web',  en:'consumerhelpline.gov.in — consumer complaint',        hi:'consumerhelpline.gov.in — उपभोक्ता शिकायत',            contact:'https://consumerhelpline.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'consumer-overcharge', cat:'consumer',
    en:{ title:'Overcharging / MRP violation',          sub:'Price more than MRP — file with Legal Metrology' },
    hi:{ title:'MRP से ज़्यादा दाम लिया',               sub:'MRP से अधिक चार्ज — कानूनी माप विज्ञान में शिकायत' },
    type:'hybrid',
    tags:['mrp','overcharge','price','daam','zyada','legal','metrology','consumer'],
    steps:[
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'state',   action:'visit',en:'State Legal Metrology Department',                    hi:'राज्य कानूनी माप विज्ञान विभाग',                        contact:null },
      { level:'central', action:'web',  en:'consumerhelpline.gov.in — price complaint',           hi:'consumerhelpline.gov.in — मूल्य शिकायत',               contact:'https://consumerhelpline.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'consumer-ecom-delivery', cat:'consumer',
    en:{ title:'Online order not delivered',            sub:'E-commerce complaint — Amazon / Flipkart / Meesho' },
    hi:{ title:'ऑनलाइन ऑर्डर नहीं मिला',               sub:'ई-कॉमर्स शिकायत — Amazon / Flipkart / Meesho' },
    type:'hybrid', helpline:'1800-11-4000',
    tags:['order','delivery','amazon','flipkart','meesho','online','nahi','mila','ecommerce','parcel'],
    steps:[
      { level:'local',   action:'web',  en:'Raise dispute on platform (Amazon / Flipkart / app)', hi:'प्लेटफॉर्म पर विवाद उठाएं (Amazon / Flipkart / app)',  contact:null },
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'central', action:'web',  en:'consumerhelpline.gov.in — e-commerce complaint',      hi:'consumerhelpline.gov.in — ई-कॉमर्स शिकायत',            contact:'https://consumerhelpline.gov.in' },
      { level:'central', action:'web',  en:'E-DAAKHIL — consumer court if value > ₹1 lakh',      hi:'E-DAAKHIL — ₹1 लाख से ज़्यादा पर उपभोक्ता अदालत',     contact:'https://edaakhil.nic.in' },
      CPGRAMS,
    ],
  },
  {
    id:'consumer-wrong-product', cat:'consumer',
    en:{ title:'Wrong / damaged product received',      sub:'Return, replacement or refund from seller' },
    hi:{ title:'गलत / टूटा हुआ प्रोडक्ट मिला',         sub:'विक्रेता से वापसी, बदलाव या रिफंड' },
    type:'hybrid',
    tags:['wrong','product','damaged','return','replacement','galat','toota','ecommerce','consumer'],
    steps:[
      { level:'local',   action:'web',  en:'Raise return / replacement on platform within window', hi:'प्लेटफॉर्म पर वापसी / बदलाव विंडो में दर्ज करें',     contact:null },
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'central', action:'web',  en:'consumerhelpline.gov.in',                             hi:'consumerhelpline.gov.in',                               contact:'https://consumerhelpline.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'consumer-return-rejected', cat:'consumer',
    en:{ title:'Return / exchange request rejected',    sub:'Platform refusing valid return — escalate' },
    hi:{ title:'वापसी / एक्सचेंज मना कर दिया',          sub:'प्लेटफॉर्म वैध वापसी मना कर रहा है — एस्केलेट करें' },
    type:'hybrid',
    tags:['return','rejected','exchange','mana','refused','consumer','ecommerce','refund'],
    steps:[
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'central', action:'web',  en:'consumerhelpline.gov.in',                             hi:'consumerhelpline.gov.in',                               contact:'https://consumerhelpline.gov.in' },
      { level:'central', action:'web',  en:'E-DAAKHIL — District Consumer Forum',                 hi:'E-DAAKHIL — जिला उपभोक्ता फोरम',                       contact:'https://edaakhil.nic.in' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  CORRUPTION / BRIBE (GHOOS)
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'corrupt-bribe', cat:'corrupt',
    en:{ title:'Government officer asking for bribe',   sub:'Report to Vigilance / CVC / Lokpal — 1064' },
    hi:{ title:'सरकारी अधिकारी रिश्वत माँग रहा है',    sub:'विजिलेंस / CVC / लोकपाल को रिपोर्ट करें — 1064' },
    type:'urgent', helpline:'1064',
    tags:['bribe','ghoos','riswat','corruption','officer','government','demand','paisa','maang'],
    steps:[
      { level:'central', action:'call', en:'CVC Anti-Corruption Helpline — 1064',                hi:'CVC भ्रष्टाचार विरोधी हेल्पलाइन — 1064',               contact:'1064' },
      { level:'central', action:'web',  en:'CVC Online Complaint — cvc.gov.in',                  hi:'CVC ऑनलाइन शिकायत — cvc.gov.in',                       contact:'https://cvc.gov.in/complaint.html' },
      { level:'central', action:'web',  en:'Lokpal — lokpal.gov.in (for Group A officers)',       hi:'लोकपाल — lokpal.gov.in (Group A अधिकारियों के लिए)',   contact:'https://lokpal.gov.in' },
      { level:'state',   action:'web',  en:'State Vigilance / ACB — file complaint',             hi:'राज्य विजिलेंस / ACB — शिकायत दर्ज करें',              contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'corrupt-work-stalled', cat:'corrupt',
    en:{ title:'Government work not done without bribe', sub:'File vigilance complaint — it is illegal to demand bribe' },
    hi:{ title:'रिश्वत दिए बिना सरकारी काम नहीं होता', sub:'विजिलेंस शिकायत करें — रिश्वत माँगना अपराध है' },
    type:'hybrid', helpline:'1064',
    tags:['bribe','ghoos','work','nahi','ho','raha','sarkari','corruption','government'],
    steps:[
      { level:'central', action:'call', en:'CVC Helpline — 1064',                                hi:'CVC हेल्पलाइन — 1064',                                 contact:'1064' },
      { level:'central', action:'web',  en:'CVC Online Complaint Portal',                        hi:'CVC ऑनलाइन शिकायत पोर्टल',                             contact:'https://cvc.gov.in/complaint.html' },
      { level:'state',   action:'web',  en:'State Anti-Corruption Bureau (ACB)',                  hi:'राज्य भ्रष्टाचार निरोधक ब्यूरो (ACB)',                 contact:null },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'corrupt-anon', cat:'corrupt',
    en:{ title:'Report corruption anonymously',          sub:'Whistle-blower protection — report without identity' },
    hi:{ title:'गुमनाम रूप से भ्रष्टाचार रिपोर्ट करें', sub:'व्हिसल-ब्लोअर सुरक्षा — पहचान छिपाकर रिपोर्ट करें' },
    type:'hybrid',
    tags:['anonymous','corruption','report','whistle','blower','secret','hidden','bribe'],
    steps:[
      { level:'central', action:'web',  en:'CVC Anonymous Complaint — cvc.gov.in',               hi:'CVC गुमनाम शिकायत — cvc.gov.in',                       contact:'https://cvc.gov.in/complaint.html' },
      { level:'central', action:'web',  en:'Lokpal Complaint Portal',                             hi:'लोकपाल शिकायत पोर्टल',                                 contact:'https://lokpal.gov.in' },
      { level:'central', action:'web',  en:'CBI Anti-Corruption — cbi.gov.in',                   hi:'CBI भ्रष्टाचार विरोधी — cbi.gov.in',                   contact:'https://cbi.gov.in/complaints.php' },
      { level:'state',   action:'call', en:'State ACB / Vigilance helpline',                     hi:'राज्य ACB / विजिलेंस हेल्पलाइन',                       contact:null },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  JOB / SALARY
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'job-salary', cat:'job',
    en:{ title:'Salary not paid / delayed',             sub:'Labour department + EPF helpline' },
    hi:{ title:'वेतन नहीं मिला / देरी हो रही है',       sub:'श्रम विभाग + EPF हेल्पलाइन' },
    type:'hybrid', helpline:'1800-180-5412',
    tags:['salary','nahi','mila','payment','delayed','wages','naukri','job','paisa','employer'],
    steps:[
      { level:'local',   action:'visit',en:'Labour Commissioner Office — file wage complaint',    hi:'श्रम आयुक्त कार्यालय — वेतन शिकायत दर्ज करें',         contact:null },
      { level:'central', action:'call', en:'Shramik Sahayata Helpline — 1800-180-5412',          hi:'श्रमिक सहायता हेल्पलाइन — 1800-180-5412',              contact:'1800-180-5412' },
      { level:'central', action:'web',  en:'Shram Suvidha Portal — Labour Grievance',            hi:'श्रम सुविधा पोर्टल — श्रम शिकायत',                     contact:'https://shramsuvidha.gov.in' },
      { level:'central', action:'web',  en:'EPFO Grievance Portal (for PF members)',              hi:'EPFO शिकायत पोर्टल (PF सदस्यों के लिए)',                contact:'https://epfigms.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'job-termination', cat:'job',
    en:{ title:'Wrongful termination / unfair dismissal', sub:'Labour court + state labour department' },
    hi:{ title:'गलत तरीके से नौकरी से निकाला',          sub:'श्रम अदालत + राज्य श्रम विभाग' },
    type:'hybrid',
    tags:['termination','fired','dismissed','nikala','job','naukri','unfair','wrong','retrenchment'],
    steps:[
      { level:'local',   action:'visit',en:'Labour Commissioner — file wrongful termination',     hi:'श्रम आयुक्त — गलत निकासी की शिकायत',                   contact:null },
      { level:'central', action:'web',  en:'Shram Suvidha Portal — Labour dispute',               hi:'श्रम सुविधा पोर्टल — श्रम विवाद',                      contact:'https://shramsuvidha.gov.in' },
      { level:'state',   action:'visit',en:'Industrial Tribunal / Labour Court',                  hi:'औद्योगिक न्यायाधिकरण / श्रम अदालत',                    contact:null },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'job-pf', cat:'job',
    en:{ title:'PF / EPF not received or stuck',         sub:'EPFO helpline + grievance portal' },
    hi:{ title:'PF / EPF नहीं मिला या रुका हुआ है',    sub:'EPFO हेल्पलाइन + शिकायत पोर्टल' },
    type:'hybrid', helpline:'1800-118-005',
    tags:['pf','epf','provident','fund','nahi','mila','stuck','employer','withdrawal'],
    steps:[
      { level:'central', action:'call', en:'EPFO Toll-Free Helpline — 1800-118-005',             hi:'EPFO टोल-फ्री हेल्पलाइन — 1800-118-005',               contact:'1800-118-005' },
      { level:'central', action:'web',  en:'EPFO Grievance Portal — epfigms.gov.in',             hi:'EPFO शिकायत पोर्टल — epfigms.gov.in',                  contact:'https://epfigms.gov.in' },
      { level:'central', action:'web',  en:'UMANG App — EPF passbook & withdrawal',              hi:'UMANG ऐप — EPF पासबुक और निकासी',                      contact:'https://web.umang.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'job-offer-fraud', cat:'job',
    en:{ title:'Fake job offer / placement fraud',       sub:'Cyber crime + consumer helpline' },
    hi:{ title:'फर्जी नौकरी का ऑफर / प्लेसमेंट ठगी',  sub:'साइबर क्राइम + उपभोक्ता हेल्पलाइन' },
    type:'urgent', helpline:'1930',
    tags:['fake','job','offer','fraud','placement','scam','naukri','dhoka','ठगी','letter','company'],
    steps:[
      { level:'local',   action:'call', en:'Cyber Crime Helpline — 1930',                        hi:'साइबर क्राइम हेल्पलाइन — 1930',                        contact:'1930' },
      { level:'local',   action:'web',  en:'cybercrime.gov.in — report online fraud',             hi:'cybercrime.gov.in — ऑनलाइन फ्रॉड रिपोर्ट',            contact:'https://cybercrime.gov.in' },
      { level:'local',   action:'call', en:'Local Police FIR — job fraud is a criminal offence', hi:'स्थानीय पुलिस FIR — नौकरी फ्रॉड अपराध है',            contact:'100' },
      { level:'central', action:'web',  en:'consumerhelpline.gov.in — if money taken',           hi:'consumerhelpline.gov.in — यदि पैसे लिए गए',            contact:'https://consumerhelpline.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'job-internship-scam', cat:'job',
    en:{ title:'Internship scam / stipend not paid',     sub:'Labour dept + consumer helpline' },
    hi:{ title:'इंटर्नशिप ठगी / स्टाइपेंड नहीं मिला',  sub:'श्रम विभाग + उपभोक्ता हेल्पलाइन' },
    type:'hybrid',
    tags:['internship','scam','stipend','nahi','mila','fake','fraud','student','job'],
    steps:[
      { level:'central', action:'call', en:'National Consumer Helpline — 1800-11-4000',          hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',          contact:'1800-11-4000' },
      { level:'central', action:'web',  en:'Shram Suvidha Portal — unpaid internship',           hi:'श्रम सुविधा पोर्टल — अवैतनिक इंटर्नशिप',              contact:'https://shramsuvidha.gov.in' },
      { level:'local',   action:'call', en:'Police FIR — if money deducted fraudulently',        hi:'पुलिस FIR — धोखे से पैसे काटे जाएं तो',               contact:'100' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  HOUSING / RENT
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'housing-deposit', cat:'housing',
    en:{ title:'Security deposit not returned',          sub:'Consumer forum + rent agreement' },
    hi:{ title:'सिक्योरिटी डिपॉजिट वापस नहीं मिली',    sub:'उपभोक्ता फोरम + किरायानामा' },
    type:'hybrid',
    tags:['deposit','security','rent','wapas','nahi','landlord','tenant','agreement','housing'],
    steps:[
      { level:'local',   action:'visit',en:'Send legal notice via lawyer (District Court)',       hi:'वकील के ज़रिए कानूनी नोटिस भेजें (जिला अदालत)',        contact:null },
      { level:'central', action:'call', en:'National Consumer Helpline — 1800-11-4000',          hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',          contact:'1800-11-4000' },
      { level:'local',   action:'visit',en:'Rent Control Tribunal / Rent Authority',             hi:'किराया नियंत्रण न्यायाधिकरण / किराया प्राधिकरण',        contact:null },
      { level:'central', action:'web',  en:'E-DAAKHIL — District Consumer Forum',                hi:'E-DAAKHIL — जिला उपभोक्ता फोरम',                       contact:'https://edaakhil.nic.in' },
      CPGRAMS,
    ],
  },
  {
    id:'housing-eviction', cat:'housing',
    en:{ title:'Illegal eviction by landlord',           sub:'Rent Control Act protects tenants — approach tribunal' },
    hi:{ title:'मकान मालिक द्वारा अवैध बेदखली',          sub:'किराया नियंत्रण अधिनियम किरायेदारों की रक्षा करता है' },
    type:'urgent',
    tags:['eviction','illegal','forceful','landlord','house','rent','nikalo','housing'],
    steps:[
      { level:'local',   action:'visit',en:'Rent Control Tribunal — stay eviction',              hi:'किराया नियंत्रण न्यायाधिकरण — बेदखली रोकें',            contact:null },
      { level:'local',   action:'call', en:'Police — if forceful eviction (call 112)',           hi:'पुलिस — जबरदस्ती बेदखली हो तो 112 डायल करें',          contact:'112' },
      { level:'local',   action:'visit',en:'District Collector / SDM for emergency relief',     hi:'जिलाधीश / SDM — आपातकालीन राहत',                       contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'housing-builder', cat:'housing',
    en:{ title:'Builder / real estate fraud / flat issue', sub:'RERA complaint — state RERA authority' },
    hi:{ title:'बिल्डर / रियल एस्टेट फ्रॉड / फ्लैट समस्या', sub:'RERA शिकायत — राज्य RERA प्राधिकरण' },
    type:'hybrid',
    tags:['builder','fraud','flat','rera','possession','delay','cheating','housing','real estate'],
    steps:[
      { level:'state',   action:'web',  en:'State RERA Complaint Portal (search "[state] RERA")', hi:'राज्य RERA शिकायत पोर्टल',                             contact:'https://rera.rajasthan.gov.in' },
      { level:'central', action:'call', en:'National Consumer Helpline — 1800-11-4000',          hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',          contact:'1800-11-4000' },
      { level:'central', action:'web',  en:'E-DAAKHIL — Real estate consumer case',              hi:'E-DAAKHIL — रियल एस्टेट उपभोक्ता केस',                 contact:'https://edaakhil.nic.in' },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'housing-society', cat:'housing',
    en:{ title:'Housing society / RWA complaint',        sub:'Maintenance overcharging, not providing services' },
    hi:{ title:'हाउसिंग सोसाइटी / RWA शिकायत',          sub:'रखरखाव शुल्क अधिक या सेवाएं नहीं मिल रहीं' },
    type:'hybrid',
    tags:['society','rwa','maintenance','charge','housing','flat','apartment','complaint'],
    steps:[
      { level:'local',   action:'visit',en:'Registrar of Cooperative Societies (RCS)',           hi:'सहकारी समितियों के रजिस्ट्रार (RCS)',                   contact:null },
      { level:'state',   action:'web',  en:'State Housing / Urban Development Dept',             hi:'राज्य आवास / शहरी विकास विभाग',                         contact:null },
      { level:'central', action:'call', en:'National Consumer Helpline — 1800-11-4000',          hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',          contact:'1800-11-4000' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  ADDITIONAL PROBLEMS — existing categories (gaps filled)
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'police-blackmail', cat:'police',
    en:{ title:'Threat / blackmail / extortion',         sub:'Police FIR + cyber crime if online' },
    hi:{ title:'धमकी / ब्लैकमेल / जबरन वसूली',          sub:'पुलिस FIR + साइबर क्राइम अगर ऑनलाइन हो' },
    type:'urgent', helpline:'112',
    tags:['threat','blackmail','extortion','dhaki','dhaman','paisa','maang','online','phone'],
    steps:[
      POLICE_112,
      { level:'local',   action:'visit',en:'Nearest Police Station — file FIR under IPC 383',   hi:'नज़दीकी पुलिस स्टेशन — IPC 383 के तहत FIR दर्ज करें',  contact:null },
      { level:'local',   action:'call', en:'Cyber Crime — 1930 (if threat is online)',           hi:'साइबर क्राइम — 1930 (ऑनलाइन धमकी हो तो)',             contact:'1930' },
      { level:'central', action:'web',  en:'cybercrime.gov.in — online blackmail/threat',        hi:'cybercrime.gov.in — ऑनलाइन ब्लैकमेल / धमकी',          contact:'https://cybercrime.gov.in' },
      CPGRAMS,
    ],
  },
  {
    id:'health-overcharge', cat:'health',
    en:{ title:'Hospital / clinic overcharging',         sub:'File with state health dept + consumer forum' },
    hi:{ title:'अस्पताल / क्लिनिक ने अधिक पैसे लिए',   sub:'राज्य स्वास्थ्य विभाग + उपभोक्ता फोरम' },
    type:'hybrid', helpline:'14555',
    tags:['hospital','overcharge','bill','health','doctor','fees','zyada','paisa','medical'],
    steps:[
      { level:'local',   action:'call', en:'National Health Authority Helpline — 14555',         hi:'राष्ट्रीय स्वास्थ्य प्राधिकरण हेल्पलाइन — 14555',      contact:'14555' },
      { level:'state',   action:'visit',en:'State Medical Council — overcharging complaint',     hi:'राज्य चिकित्सा परिषद — अधिक शुल्क की शिकायत',          contact:null },
      { level:'central', action:'call', en:'National Consumer Helpline — 1800-11-4000',          hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',          contact:'1800-11-4000' },
      { level:'central', action:'web',  en:'E-DAAKHIL — consumer forum for hospital bill',       hi:'E-DAAKHIL — अस्पताल बिल के लिए उपभोक्ता फोरम',         contact:'https://edaakhil.nic.in' },
      CPGRAMS,
    ],
  },
  {
    id:'health-negligence', cat:'health',
    en:{ title:'Medical negligence by doctor / hospital', sub:'State Medical Council + consumer court' },
    hi:{ title:'डॉक्टर / अस्पताल की लापरवाही',           sub:'राज्य चिकित्सा परिषद + उपभोक्ता अदालत' },
    type:'hybrid',
    tags:['negligence','doctor','hospital','laparvahi','mistake','wrong','treatment','medical','malpractice'],
    steps:[
      { level:'state',   action:'visit',en:'State Medical Council — doctor negligence complaint', hi:'राज्य चिकित्सा परिषद — डॉक्टर लापरवाही शिकायत',       contact:null },
      { level:'central', action:'web',  en:'National Medical Commission — NMC portal',           hi:'राष्ट्रीय चिकित्सा आयोग — NMC पोर्टल',                contact:'https://www.nmc.org.in' },
      { level:'central', action:'web',  en:'E-DAAKHIL — consumer court for negligence',          hi:'E-DAAKHIL — लापरवाही के लिए उपभोक्ता अदालत',           contact:'https://edaakhil.nic.in' },
      CPGRAMS,
    ],
  },
  {
    id:'bank-upi-unauthorized', cat:'bank',
    en:{ title:'Unauthorized UPI / card transaction',    sub:'Block card + report to bank + cyber helpline 1930' },
    hi:{ title:'बिना अनुमति UPI / कार्ड लेनदेन हुआ',    sub:'कार्ड ब्लॉक करें + बैंक को रिपोर्ट करें + 1930' },
    type:'urgent', helpline:'1930',
    tags:['upi','unauthorized','transaction','fraud','card','debit','credit','paisa','gaya','nahi'],
    steps:[
      { level:'local',   action:'call', en:'Call your bank IMMEDIATELY — block card + raise dispute', hi:'तुरंत बैंक को कॉल करें — कार्ड ब्लॉक करें + विवाद',  contact:null },
      { level:'local',   action:'call', en:'Cyber Crime Helpline — 1930 (report within 24 hrs)', hi:'साइबर क्राइम हेल्पलाइन — 1930 (24 घंटे में रिपोर्ट)', contact:'1930' },
      { level:'local',   action:'web',  en:'cybercrime.gov.in — financial fraud report',          hi:'cybercrime.gov.in — वित्तीय धोखाधड़ी रिपोर्ट',         contact:'https://cybercrime.gov.in' },
      { level:'central', action:'call', en:'RBI Ombudsman — 14448',                              hi:'RBI लोकपाल — 14448',                                   contact:'14448' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  DOCUMENT LOST / URGENT HELP
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'docs-aadhaar-lost', cat:'docs',
    en:{ title:'Aadhaar card lost or damaged',           sub:'Download e-Aadhaar instantly from UIDAI' },
    hi:{ title:'आधार कार्ड खो गया या खराब हो गया',       sub:'UIDAI से तुरंत e-Aadhaar डाउनलोड करें' },
    type:'redirect', helpline:'1947',
    tags:['aadhaar','lost','khoya','document','id','uid','card','damaged','reprint'],
    steps:[
      { level:'central', action:'web',  en:'UIDAI — Download e-Aadhaar (myaadhaar.uidai.gov.in)', hi:'UIDAI — e-Aadhaar डाउनलोड करें (myaadhaar.uidai.gov.in)', contact:'https://myaadhaar.uidai.gov.in' },
      { level:'central', action:'call', en:'UIDAI Helpline — 1947 (free, 24×7)',                  hi:'UIDAI हेल्पलाइन — 1947 (मुफ़्त, 24×7)',                contact:'1947' },
      { level:'central', action:'web',  en:'Order Aadhaar PVC card (₹50) — resident.uidai.gov.in', hi:'Aadhaar PVC कार्ड ऑर्डर करें (₹50)',                   contact:'https://resident.uidai.gov.in/get-aadhaar' },
      { level:'central', action:'app',  en:'mAadhaar App — virtual Aadhaar always available',     hi:'mAadhaar ऐप — वर्चुअल Aadhaar हमेशा उपलब्ध',          contact:'https://myaadhaar.uidai.gov.in' },
    ],
  },
  {
    id:'docs-pan-lost', cat:'docs',
    en:{ title:'PAN card lost or damaged',               sub:'Apply for duplicate PAN on NSDL / UTI' },
    hi:{ title:'PAN कार्ड खो गया या खराब हुआ',           sub:'NSDL / UTI पर डुप्लीकेट PAN के लिए आवेदन करें' },
    type:'redirect',
    tags:['pan','lost','khoya','card','income','tax','document','damaged','duplicate'],
    steps:[
      { level:'central', action:'web',  en:'NSDL — Apply duplicate PAN online (onlineservices.nsdl.com)', hi:'NSDL — ऑनलाइन डुप्लीकेट PAN आवेदन',              contact:'https://onlineservices.nsdl.com/paam/endUserRegisterContact.html' },
      { level:'central', action:'web',  en:'UTI ITSL — Alternative PAN application portal',      hi:'UTI ITSL — PAN आवेदन का दूसरा विकल्प',                contact:'https://www.utiitsl.com/UTIITSL_SITE/pan' },
      { level:'central', action:'call', en:'Income Tax Helpline — 1800-103-0025',                 hi:'आयकर हेल्पलाइन — 1800-103-0025',                      contact:'1800-103-0025' },
    ],
  },
  {
    id:'docs-dl-lost', cat:'docs',
    en:{ title:'Driving licence lost or damaged',        sub:'Apply for duplicate DL on Parivahan' },
    hi:{ title:'ड्राइविंग लाइसेंस खो गया',               sub:'Parivahan पर डुप्लीकेट DL के लिए आवेदन करें' },
    type:'redirect',
    tags:['driving','licence','license','dl','lost','khoya','duplicate','parivahan','document'],
    steps:[
      { level:'central', action:'web',  en:'Parivahan — Apply duplicate DL online (sarathi.parivahan.gov.in)', hi:'Parivahan — डुप्लीकेट DL ऑनलाइन',            contact:'https://sarathi.parivahan.gov.in' },
      { level:'local',   action:'visit',en:'Visit RTO with FIR copy + Form LLD-1 for duplicate DL', hi:'FIR कॉपी + Form LLD-1 लेकर RTO जाएं',              contact:null },
      { level:'local',   action:'visit',en:'File FIR at police station first (required for DL)',  hi:'पहले पुलिस स्टेशन में FIR करें — DL के लिए ज़रूरी',  contact:null },
    ],
  },
  {
    id:'docs-sim-lost', cat:'docs',
    en:{ title:'SIM card lost or stolen',                sub:'Block SIM + check all SIMs on your Aadhaar' },
    hi:{ title:'SIM कार्ड खो गया या चोरी हुआ',           sub:'SIM ब्लॉक करें + अपने Aadhaar पर SIM चेक करें' },
    type:'urgent', helpline:'1800-110-420',
    tags:['sim','lost','khoya','stolen','chori','mobile','number','block','telecom'],
    steps:[
      { level:'local',   action:'call', en:'Call your operator IMMEDIATELY to block SIM',         hi:'तुरंत अपने ऑपरेटर को call करें — SIM ब्लॉक कराएं',    contact:null, note:{en:'Jio: 198 | Airtel: 121 | Vi: 199 | BSNL: 1503',hi:'Jio: 198 | Airtel: 121 | Vi: 199 | BSNL: 1503'} },
      { level:'central', action:'web',  en:'Sanchar Saathi TAFCOP — check all SIMs on your Aadhaar', hi:'Sanchar Saathi TAFCOP — Aadhaar पर सभी SIM चेक करें', contact:'https://sancharsaathi.gov.in/sfc' },
      { level:'central', action:'call', en:'DOT Helpline — 1800-110-420',                         hi:'DOT हेल्पलाइन — 1800-110-420',                         contact:'1800-110-420' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  EMERGENCY SITUATIONS (Non-call based)
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'emergency-missing', cat:'emergency',
    en:{ title:'Missing person',                         sub:'File missing report with police immediately' },
    hi:{ title:'व्यक्ति लापता हो गया',                   sub:'पुलिस में तुरंत लापता रिपोर्ट दर्ज करें' },
    type:'urgent',
    tags:['missing','person','lapata','gum','child','adult','emergency','police','report'],
    steps:[
      POLICE_112,
      { level:'local',   action:'call', en:'Child Helpline — 1098 (if missing person is a child)', hi:'चाइल्ड हेल्पलाइन — 1098 (बच्चा लापता हो तो)',         contact:'1098' },
      { level:'local',   action:'visit',en:'Nearest police station — file Missing Person Report',  hi:'नज़दीकी पुलिस स्टेशन — लापता रिपोर्ट दर्ज करें',     contact:null },
      { level:'central', action:'web',  en:'TrackChild.gov.in — national missing child portal',    hi:'TrackChild.gov.in — राष्ट्रीय लापता बच्चे पोर्टल',    contact:'https://trackchild.gov.in' },
      { level:'central', action:'web',  en:'CPGRAMS — if police is not acting',                    hi:'CPGRAMS — पुलिस कार्रवाई न करे तो',                    contact:'https://pgportal.gov.in/Home/LodgeGrievance' },
    ],
  },
  {
    id:'emergency-stolen-phone', cat:'emergency',
    en:{ title:'Phone stolen / lost',                    sub:'Block IMEI + file police complaint' },
    hi:{ title:'मोबाइल फोन चोरी हो गया',                sub:'IMEI ब्लॉक करें + पुलिस में शिकायत करें' },
    type:'urgent',
    tags:['phone','stolen','chori','lost','mobile','imei','block','emergency'],
    steps:[
      { level:'local',   action:'visit',en:'Nearest police station — file FIR for theft',         hi:'नज़दीकी पुलिस स्टेशन — चोरी की FIR दर्ज करें',        contact:null },
      { level:'central', action:'web',  en:'Sanchar Saathi CEIR — block / trace stolen phone',    hi:'Sanchar Saathi CEIR — चोरी हुआ फोन ब्लॉक / ट्रेस',   contact:'https://sancharsaathi.gov.in/CEIR' },
      { level:'local',   action:'call', en:'Call your operator — block SIM immediately',           hi:'ऑपरेटर को call करें — SIM तुरंत ब्लॉक कराएं',         contact:null, note:{en:'Jio: 198 | Airtel: 121 | Vi: 199 | BSNL: 1503',hi:'Jio: 198 | Airtel: 121 | Vi: 199 | BSNL: 1503'} },
      { level:'central', action:'call', en:'DOT Helpline — 1800-110-420',                         hi:'DOT हेल्पलाइन — 1800-110-420',                         contact:'1800-110-420' },
    ],
  },
  {
    id:'emergency-harassment', cat:'emergency',
    en:{ title:'Harassment / threatening behaviour',     sub:'Police complaint + women safety helpline' },
    hi:{ title:'परेशान किया जा रहा है / धमकी मिल रही है', sub:'पुलिस शिकायत + महिला सुरक्षा हेल्पलाइन' },
    type:'urgent',
    tags:['harassment','threat','threatening','bully','pareshan','dhamki','safety','emergency'],
    steps:[
      POLICE_112,
      { level:'local',   action:'call', en:'Women Safety Helpline — 1091',                        hi:'महिला सुरक्षा हेल्पलाइन — 1091',                      contact:'1091' },
      { level:'local',   action:'call', en:'Women Helpline (Domestic) — 181',                     hi:'महिला हेल्पलाइन (घरेलू) — 181',                       contact:'181' },
      { level:'local',   action:'visit',en:'Police station — file complaint / FIR',                hi:'पुलिस स्टेशन — शिकायत / FIR दर्ज करें',               contact:null },
      { level:'central', action:'web',  en:'NCW Online Complaint — ncw.nic.in',                   hi:'NCW ऑनलाइन शिकायत — ncw.nic.in',                      contact:'https://ncw.nic.in/complaint-registration' },
    ],
  },
  {
    id:'emergency-dv', cat:'emergency',
    en:{ title:'Domestic violence',                      sub:'NCW + police + one-stop centre' },
    hi:{ title:'घरेलू हिंसा',                            sub:'NCW + पुलिस + वन-स्टॉप सेंटर' },
    type:'urgent',
    tags:['domestic','violence','hinsa','abuse','wife','family','husband','emergency','safety'],
    steps:[
      { level:'local',   action:'call', en:'Women Helpline — 181 (24×7, free)',                   hi:'महिला हेल्पलाइन — 181 (24×7, मुफ़्त)',                 contact:'181' },
      POLICE_112,
      { level:'local',   action:'call', en:'One Stop Centre (Sakhi) Helpline — 7827170170',       hi:'वन-स्टॉप सेंटर (सखी) — 7827170170',                   contact:'7827170170' },
      { level:'central', action:'web',  en:'NCW — file complaint online at ncw.nic.in',           hi:'NCW — ncw.nic.in पर ऑनलाइन शिकायत करें',              contact:'https://ncw.nic.in/complaint-registration' },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  GOVERNMENT SERVICE DELAY
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'govtdelay-file-stuck', cat:'govtdelay',
    en:{ title:'File / application stuck in office',     sub:'CPGRAMS + RTI to get status' },
    hi:{ title:'फाइल / आवेदन कार्यालय में अटकी है',     sub:'CPGRAMS + RTI से स्थिति जानें' },
    type:'hybrid',
    tags:['file','stuck','ruka','application','office','pending','delay','govt','department'],
    steps:[
      CPGRAMS,
      { level:'state',   action:'web',  en:'CM Helpline / State grievance portal',                hi:'CM हेल्पलाइन / राज्य शिकायत पोर्टल',                   contact:null, note:{en:'UP: 1076 | Raj: 181 | MP: 181 | Haryana: 1100',hi:'UP: 1076 | Raj: 181 | MP: 181 | Haryana: 1100'} },
      { level:'local',   action:'visit',en:'Collector / SDM office — escalate stuck file',        hi:'कलेक्टर / SDM कार्यालय जाएं — फाइल एस्केलेट करें',    contact:null },
      RTI,
    ],
  },
  {
    id:'govtdelay-approval', cat:'govtdelay',
    en:{ title:'Certificate / approval not given',       sub:'File RTI + grievance with the department' },
    hi:{ title:'प्रमाणपत्र / अनुमोदन नहीं मिला',        sub:'RTI दाखिल करें + विभाग में शिकायत करें' },
    type:'hybrid',
    tags:['certificate','approval','nahi','mila','pending','delay','document','govt','jati','income'],
    steps:[
      { level:'local',   action:'visit',en:'Concerned department head — submit written complaint', hi:'संबंधित विभागाध्यक्ष — लिखित शिकायत दें',              contact:null },
      CPGRAMS,
      { level:'state',   action:'web',  en:'State Grievance Portal / CM Helpline',                hi:'राज्य शिकायत पोर्टल / CM हेल्पलाइन',                   contact:null },
      RTI,
    ],
  },
  {
    id:'govtdelay-pension', cat:'govtdelay',
    en:{ title:'Pension not received / delayed',         sub:'EPFO / state treasury + pensioner portal' },
    hi:{ title:'पेंशन नहीं मिली / देरी हो रही है',       sub:'EPFO / राज्य कोषागार + पेंशनर पोर्टल' },
    type:'hybrid', helpline:'1800-118-005',
    tags:['pension','nahi','mili','delay','epfo','retired','pensioner','old','age'],
    steps:[
      { level:'central', action:'web',  en:'EPFO Grievance Portal — epfigms.gov.in (EPS pension)',hi:'EPFO शिकायत पोर्टल — epfigms.gov.in (EPS पेंशन)',      contact:'https://epfigms.gov.in' },
      { level:'central', action:'call', en:'EPFO Helpline — 1800-118-005',                        hi:'EPFO हेल्पलाइन — 1800-118-005',                        contact:'1800-118-005' },
      { level:'central', action:'web',  en:'Bhavishya — Central Govt Pension Portal',             hi:'Bhavishya — केंद्र सरकार पेंशन पोर्टल',               contact:'https://bhavishya.nic.in' },
      { level:'state',   action:'visit',en:'State Treasury / Pension Disbursing Authority',       hi:'राज्य कोषागार / पेंशन वितरण प्राधिकरण',               contact:null },
      CPGRAMS, RTI,
    ],
  },
  {
    id:'govtdelay-license', cat:'govtdelay',
    en:{ title:'Licence / permit application pending',   sub:'Business licence, arms licence, building permit' },
    hi:{ title:'लाइसेंस / परमिट आवेदन लंबित है',         sub:'व्यापार लाइसेंस, हथियार लाइसेंस, भवन अनुमति' },
    type:'hybrid',
    tags:['licence','license','permit','pending','ruka','business','arms','building','nahi','mila'],
    steps:[
      { level:'local',   action:'visit',en:'Issuing authority — write complaint + demand status', hi:'जारी करने वाला कार्यालय — शिकायत लिखें + स्थिति मांगें', contact:null },
      CPGRAMS,
      { level:'state',   action:'web',  en:'State e-Services / Single Window Portal',             hi:'राज्य e-सेवा / सिंगल विंडो पोर्टल',                    contact:null },
      RTI,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  LEGAL HELP (Simplified)
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'legal-notice', cat:'legal',
    en:{ title:'Received a legal notice',                sub:'Free legal aid + District Legal Services Authority' },
    hi:{ title:'कानूनी नोटिस मिला है',                   sub:'नि:शुल्क कानूनी सहायता + जिला विधिक सेवा प्राधिकरण' },
    type:'redirect',
    tags:['legal','notice','received','court','kanoon','advocate','lawyer','dlsa','aid'],
    steps:[
      { level:'local',   action:'visit',en:'District Legal Services Authority (DLSA) — free legal aid', hi:'जिला विधिक सेवा प्राधिकरण (DLSA) — निःशुल्क कानूनी सहायता', contact:null },
      { level:'central', action:'web',  en:'NALSA — Free Legal Aid portal (nalsa.gov.in)',        hi:'NALSA — निःशुल्क कानूनी सहायता पोर्टल',               contact:'https://nalsa.gov.in' },
      { level:'central', action:'call', en:'NALSA Legal Aid Helpline — 15100',                    hi:'NALSA कानूनी सहायता हेल्पलाइन — 15100',               contact:'15100' },
    ],
  },
  {
    id:'legal-tenant', cat:'legal',
    en:{ title:'Tenant / landlord dispute',              sub:'Rent court + legal aid + consumer forum' },
    hi:{ title:'किरायेदार / मकान मालिक विवाद',           sub:'किराया अदालत + कानूनी सहायता + उपभोक्ता फोरम' },
    type:'hybrid',
    tags:['tenant','landlord','rent','dispute','eviction','kirayedar','makan','agreement','legal'],
    steps:[
      { level:'local',   action:'visit',en:'District Legal Services Authority — free legal advice',hi:'जिला विधिक सेवा प्राधिकरण — निःशुल्क कानूनी सलाह',   contact:null },
      { level:'local',   action:'visit',en:'Rent Control Authority / Rent Tribunal',               hi:'किराया नियंत्रण प्राधिकरण / किराया न्यायाधिकरण',      contact:null },
      { level:'central', action:'call', en:'NALSA Helpline — 15100 (free legal aid)',              hi:'NALSA हेल्पलाइन — 15100 (निःशुल्क)',                  contact:'15100' },
      CPGRAMS,
    ],
  },
  {
    id:'legal-online-harassment', cat:'legal',
    en:{ title:'Online harassment case',                 sub:'Cyber crime + police + NCW (women)' },
    hi:{ title:'ऑनलाइन उत्पीड़न का मामला',               sub:'साइबर क्राइम + पुलिस + NCW (महिलाएं)' },
    type:'urgent', helpline:'1930',
    tags:['online','harassment','cyber','abuse','threats','trolling','defamation','legal','social','media'],
    steps:[
      { level:'local',   action:'call', en:'Cyber Crime Helpline — 1930',                         hi:'साइबर क्राइम हेल्पलाइन — 1930',                       contact:'1930' },
      { level:'local',   action:'web',  en:'cybercrime.gov.in — file online harassment report',   hi:'cybercrime.gov.in — ऑनलाइन उत्पीड़न रिपोर्ट',         contact:'https://cybercrime.gov.in' },
      { level:'local',   action:'visit',en:'Police station — FIR under IT Act / IPC',             hi:'पुलिस स्टेशन — IT Act / IPC के तहत FIR',               contact:null },
      { level:'central', action:'web',  en:'NCW — for women facing online harassment',            hi:'NCW — महिलाओं के लिए ऑनलाइन उत्पीड़न पोर्टल',         contact:'https://ncw.nic.in/complaint-registration' },
    ],
  },
  {
    id:'legal-property', cat:'legal',
    en:{ title:'Property dispute / illegal possession',  sub:'Civil court + legal aid + SDM' },
    hi:{ title:'संपत्ति विवाद / अवैध कब्ज़ा',            sub:'सिविल कोर्ट + कानूनी सहायता + SDM' },
    type:'hybrid',
    tags:['property','dispute','zameen','land','illegal','possession','kabza','legal','court','registry'],
    steps:[
      { level:'local',   action:'visit',en:'District Legal Services Authority — free legal aid',  hi:'जिला विधिक सेवा प्राधिकरण — निःशुल्क कानूनी सहायता', contact:null },
      { level:'local',   action:'visit',en:'Sub-Divisional Magistrate (SDM) — illegal possession',hi:'SDM — अवैध कब्ज़े की शिकायत',                          contact:null },
      { level:'central', action:'call', en:'NALSA Helpline — 15100',                              hi:'NALSA हेल्पलाइन — 15100',                              contact:'15100' },
      RTI,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  LOCAL SHOP / MARKET ISSUES
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'localshop-overcharge', cat:'localshop',
    en:{ title:'Shopkeeper overcharging / MRP violation', sub:'Consumer helpline + food safety officer' },
    hi:{ title:'दुकानदार MRP से ज़्यादा पैसे मांग रहा है', sub:'उपभोक्ता हेल्पलाइन + खाद्य सुरक्षा अधिकारी' },
    type:'hybrid', helpline:'1800-11-4000',
    tags:['shop','overcharge','mrp','price','dukan','zyada','paisa','consumer','market'],
    steps:[
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'local',   action:'call', en:'GST Helpline — 1800-103-4786 (for excess billing)',   hi:'GST हेल्पलाइन — 1800-103-4786 (अधिक बिलिंग)',         contact:'1800-103-4786' },
      { level:'local',   action:'visit',en:'District Consumer Forum — complaint against shop',    hi:'जिला उपभोक्ता फोरम — दुकानदार के खिलाफ शिकायत',       contact:null },
      { level:'central', action:'web',  en:'consumerhelpline.gov.in — online complaint',          hi:'consumerhelpline.gov.in — ऑनलाइन शिकायत',              contact:'https://consumerhelpline.gov.in' },
    ],
  },
  {
    id:'localshop-no-bill', cat:'localshop',
    en:{ title:'No bill given / GST not charged properly', sub:'GST helpline — shops must issue bill' },
    hi:{ title:'बिल नहीं दिया / GST सही से नहीं लगाई',   sub:'GST हेल्पलाइन — दुकान को बिल देना ज़रूरी' },
    type:'hybrid', helpline:'1800-103-4786',
    tags:['bill','nahi','diya','gst','tax','shop','receipt','invoice','no bill','dukan'],
    steps:[
      { level:'central', action:'call', en:'GST Helpline — 1800-103-4786',                        hi:'GST हेल्पलाइन — 1800-103-4786',                        contact:'1800-103-4786' },
      { level:'central', action:'web',  en:'GST Self-Service Portal — gst.gov.in/reportissue',    hi:'GST पोर्टल — gst.gov.in पर समस्या रिपोर्ट करें',      contact:'https://www.gst.gov.in' },
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
    ],
  },
  {
    id:'localshop-fake-product', cat:'localshop',
    en:{ title:'Fake / duplicate / adulterated product',  sub:'Consumer helpline + FSSAI (food) + police' },
    hi:{ title:'नकली / डुप्लीकेट / मिलावटी उत्पाद',     sub:'उपभोक्ता हेल्पलाइन + FSSAI (खाना) + पुलिस' },
    type:'hybrid', helpline:'1800-11-4000',
    tags:['fake','duplicate','adulterated','milawat','product','food','medicine','consumer','naqli'],
    steps:[
      { level:'local',   action:'call', en:'FSSAI Food Safety Helpline — 1800-11-2100 (adulterated food)', hi:'FSSAI खाद्य सुरक्षा हेल्पलाइन — 1800-11-2100 (मिलावट)', contact:'1800-11-2100' },
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'local',   action:'visit',en:'Police station — FIR for fake/counterfeit goods',     hi:'पुलिस स्टेशन — नकली सामान की FIR दर्ज करें',           contact:null },
      { level:'central', action:'web',  en:'consumerhelpline.gov.in — fake product complaint',    hi:'consumerhelpline.gov.in — नकली उत्पाद शिकायत',         contact:'https://consumerhelpline.gov.in' },
    ],
  },
  {
    id:'localshop-service-denied', cat:'localshop',
    en:{ title:'Service denied / discriminatory treatment', sub:'Consumer forum + police (if caste/religion based)' },
    hi:{ title:'सेवा से मना किया / भेदभाव किया',          sub:'उपभोक्ता फोरम + पुलिस (जाति / धर्म आधारित हो तो)' },
    type:'hybrid',
    tags:['service','denied','discrimination','refuse','caste','bheda','bhav','consumer','shop'],
    steps:[
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'local',   action:'visit',en:'Police station — if discrimination is caste/religion based', hi:'पुलिस स्टेशन — जाति / धर्म आधारित भेदभाव हो तो', contact:null },
      { level:'local',   action:'visit',en:'District Consumer Forum — right to service complaint', hi:'जिला उपभोक्ता फोरम — सेवा के अधिकार की शिकायत',      contact:null },
      CPGRAMS,
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  DIGITAL PAYMENT / APP ISSUES
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'digital-payment-stuck', cat:'digital',
    en:{ title:'UPI / online payment stuck / pending',   sub:'NPCI helpline + bank dispute' },
    hi:{ title:'UPI / ऑनलाइन पेमेंट अटकी / pending है', sub:'NPCI हेल्पलाइन + बैंक डिस्प्यूट' },
    type:'hybrid', helpline:'1800-120-1740',
    tags:['upi','payment','stuck','pending','failed','gpay','phonepe','paytm','bhim','online','digital'],
    steps:[
      { level:'local',   action:'call', en:'NPCI UPI Helpline — 1800-120-1740',                  hi:'NPCI UPI हेल्पलाइन — 1800-120-1740',                   contact:'1800-120-1740' },
      { level:'local',   action:'call', en:'Call your bank — raise payment dispute',              hi:'अपने बैंक को call करें — पेमेंट डिस्प्यूट दर्ज करें', contact:null },
      { level:'local',   action:'app',  en:'Contact the UPI app support (GPay / PhonePe / Paytm)', hi:'UPI ऐप सपोर्ट से संपर्क करें (GPay / PhonePe / Paytm)', contact:null },
      { level:'central', action:'call', en:'RBI Ombudsman — 14448 (if bank doesn\'t resolve)',   hi:'RBI लोकपाल — 14448 (बैंक हल न करे तो)',               contact:'14448' },
    ],
  },
  {
    id:'digital-wallet', cat:'digital',
    en:{ title:'Wallet / Paytm / PhonePe not working',   sub:'Payment app support + NPCI + bank' },
    hi:{ title:'वॉलेट / Paytm / PhonePe काम नहीं कर रहा', sub:'पेमेंट ऐप सपोर्ट + NPCI + बैंक' },
    type:'hybrid',
    tags:['wallet','paytm','phonepe','gpay','bhim','app','not working','issue','payment','digital'],
    steps:[
      { level:'local',   action:'app',  en:'Contact app support directly — Paytm / PhonePe / GPay', hi:'सीधे ऐप सपोर्ट से संपर्क करें — Paytm / PhonePe / GPay', contact:null },
      { level:'local',   action:'call', en:'NPCI UPI Helpline — 1800-120-1740',                  hi:'NPCI UPI हेल्पलाइन — 1800-120-1740',                   contact:'1800-120-1740' },
      { level:'central', action:'call', en:'RBI Helpline — 14448 (if wallet holds bank funds)',   hi:'RBI हेल्पलाइन — 14448 (wallet में बैंक पैसे हों तो)', contact:'14448' },
      { level:'central', action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
    ],
  },
  {
    id:'digital-refund', cat:'digital',
    en:{ title:'Refund pending on Paytm / PhonePe / GPay', sub:'App support + NPCI + consumer helpline' },
    hi:{ title:'Paytm / PhonePe / GPay पर refund नहीं आया', sub:'ऐप सपोर्ट + NPCI + उपभोक्ता हेल्पलाइन' },
    type:'hybrid', helpline:'1800-11-4000',
    tags:['refund','pending','nahi','aaya','paytm','phonepe','gpay','wallet','digital','online','payment'],
    steps:[
      { level:'local',   action:'app',  en:'Raise refund dispute in the payment app',             hi:'पेमेंट ऐप में refund dispute दर्ज करें',               contact:null },
      { level:'local',   action:'call', en:'NPCI UPI Helpline — 1800-120-1740',                  hi:'NPCI UPI हेल्पलाइन — 1800-120-1740',                   contact:'1800-120-1740' },
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'central', action:'web',  en:'consumerhelpline.gov.in — digital payment refund',   hi:'consumerhelpline.gov.in — डिजिटल पेमेंट रिफंड',        contact:'https://consumerhelpline.gov.in' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  PERSONAL SAFETY
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'safety-stalking', cat:'safety',
    en:{ title:'Stalking — being followed / watched',    sub:'Police complaint + NCW (women)' },
    hi:{ title:'पीछा / निगरानी की जा रही है',            sub:'पुलिस शिकायत + NCW (महिलाएं)' },
    type:'urgent',
    tags:['stalking','peecha','follow','watch','safety','women','threat','police','emergency'],
    steps:[
      POLICE_112,
      { level:'local',   action:'call', en:'Women Safety Helpline — 1091',                        hi:'महिला सुरक्षा हेल्पलाइन — 1091',                      contact:'1091' },
      { level:'local',   action:'visit',en:'Police station — file complaint under IPC Section 354D', hi:'पुलिस स्टेशन — IPC Section 354D के तहत शिकायत',     contact:null },
      { level:'central', action:'web',  en:'NCW — complaint for women at ncw.nic.in',             hi:'NCW — महिलाओं के लिए ncw.nic.in पर शिकायत',           contact:'https://ncw.nic.in/complaint-registration' },
    ],
  },
  {
    id:'safety-threat-calls', cat:'safety',
    en:{ title:'Threatening / obscene phone calls',      sub:'Police + telecom operator blocking' },
    hi:{ title:'धमकी भरे / अश्लील फ़ोन कॉल आ रहे हैं',  sub:'पुलिस + टेलीकॉम ऑपरेटर से नंबर ब्लॉक कराएं' },
    type:'urgent',
    tags:['threat','call','threatening','obscene','phone','dhamki','number','block','police','safety'],
    steps:[
      POLICE_112,
      { level:'local',   action:'visit',en:'Police station — file complaint with call logs',      hi:'पुलिस स्टेशन — call log के साथ शिकायत दर्ज करें',     contact:null },
      { level:'local',   action:'call', en:'Your operator — request number block (Jio 198 / Airtel 121)', hi:'ऑपरेटर से नंबर ब्लॉक कराएं (Jio 198 / Airtel 121)', contact:null },
      { level:'central', action:'web',  en:'Sanchar Saathi — report fraud/spam calls',            hi:'Sanchar Saathi — स्पैम / फ्रॉड कॉल रिपोर्ट करें',     contact:'https://sancharsaathi.gov.in' },
    ],
  },
  {
    id:'safety-blackmail', cat:'safety',
    en:{ title:'Blackmail / extortion',                  sub:'Cyber crime helpline + police FIR' },
    hi:{ title:'ब्लैकमेल / जबरन पैसे मांगे जा रहे हैं', sub:'साइबर क्राइम हेल्पलाइन + FIR दर्ज करें' },
    type:'urgent',
    tags:['blackmail','extortion','threat','money','demand','photo','video','cyber','safety','paisa'],
    steps:[
      { level:'local',   action:'call', en:'Cyber Crime Helpline — 1930 (if online blackmail)',   hi:'साइबर क्राइम हेल्पलाइन — 1930 (ऑनलाइन ब्लैकमेल)',   contact:'1930' },
      POLICE_112,
      { level:'local',   action:'visit',en:'Police station — FIR under IPC 383 (extortion)',      hi:'पुलिस स्टेशन — IPC 383 (वसूली) के तहत FIR',           contact:null },
      { level:'central', action:'web',  en:'cybercrime.gov.in — online blackmail report',         hi:'cybercrime.gov.in — ऑनलाइन ब्लैकमेल रिपोर्ट',         contact:'https://cybercrime.gov.in' },
    ],
  },
  {
    id:'safety-online-abuse', cat:'safety',
    en:{ title:'Online abuse / defamation / morphed photos', sub:'Cyber crime + police + platform reporting' },
    hi:{ title:'ऑनलाइन गाली / बदनामी / फोटो एडिट',       sub:'साइबर क्राइम + पुलिस + प्लेटफ़ॉर्म रिपोर्ट' },
    type:'urgent', helpline:'1930',
    tags:['online','abuse','defamation','morphed','photo','fake','post','social','media','safety','cyber'],
    steps:[
      { level:'local',   action:'call', en:'Cyber Crime Helpline — 1930',                         hi:'साइबर क्राइम हेल्पलाइन — 1930',                       contact:'1930' },
      { level:'local',   action:'web',  en:'cybercrime.gov.in — report online abuse / defamation', hi:'cybercrime.gov.in — ऑनलाइन दुर्व्यवहार / बदनामी',    contact:'https://cybercrime.gov.in' },
      { level:'local',   action:'visit',en:'Police station — FIR under IT Act Section 67 / 66E', hi:'पुलिस स्टेशन — IT Act Section 67/66E के तहत FIR',      contact:null },
      { level:'central', action:'web',  en:'NCW for women — ncw.nic.in online complaint',         hi:'NCW — महिलाओं के लिए ncw.nic.in ऑनलाइन शिकायत',       contact:'https://ncw.nic.in/complaint-registration' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  INSURANCE PROBLEMS
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'insurance-claim-rejected', cat:'insurance',
    en:{ title:'Insurance claim rejected / denied',      sub:'IRDAI Bima Bharosa helpline + grievance' },
    hi:{ title:'बीमा क्लेम रिजेक्ट हो गया',              sub:'IRDAI बीमा भरोसा हेल्पलाइन + शिकायत' },
    type:'hybrid', helpline:'155255',
    tags:['insurance','claim','rejected','bima','nahi','mila','deny','policy','health','life','vehicle'],
    steps:[
      { level:'local',   action:'call', en:'IRDAI Helpline — 155255 (Bima Bharosa, free)',        hi:'IRDAI हेल्पलाइन — 155255 (बीमा भरोसा, मुफ़्त)',        contact:'155255' },
      { level:'central', action:'web',  en:'IRDAI Bima Bharosa Portal — bimabharosa.irdai.gov.in', hi:'IRDAI बीमा भरोसा पोर्टल',                             contact:'https://bimabharosa.irdai.gov.in' },
      { level:'central', action:'web',  en:'Insurance Ombudsman — grievances.irdai.gov.in',       hi:'बीमा लोकपाल — grievances.irdai.gov.in',                contact:'https://grievances.irdai.gov.in' },
      { level:'central', action:'web',  en:'E-DAAKHIL — consumer court if ombudsman fails',       hi:'E-DAAKHIL — ombudsman से हल न हो तो उपभोक्ता अदालत',  contact:'https://edaakhil.nic.in' },
    ],
  },
  {
    id:'insurance-delay', cat:'insurance',
    en:{ title:'Insurance claim approval delayed',       sub:'Insurer must settle health/life claim in 30 days' },
    hi:{ title:'बीमा क्लेम की मंज़ूरी में देरी हो रही है', sub:'बीमाकर्ता को 30 दिन में स्वास्थ्य / जीवन क्लेम देना होता है' },
    type:'hybrid', helpline:'155255',
    tags:['insurance','claim','delay','pending','approval','bima','slow','nahi','mila','time','30 days'],
    steps:[
      { level:'local',   action:'call', en:'IRDAI Helpline — 155255',                             hi:'IRDAI हेल्पलाइन — 155255',                             contact:'155255' },
      { level:'local',   action:'visit',en:'Visit insurer branch — submit written escalation',    hi:'बीमा कार्यालय जाएं — लिखित escalation दें',            contact:null },
      { level:'central', action:'web',  en:'IRDAI Bima Bharosa — bimabharosa.irdai.gov.in',       hi:'IRDAI बीमा भरोसा पोर्टल',                             contact:'https://bimabharosa.irdai.gov.in' },
      { level:'central', action:'web',  en:'Insurance Ombudsman — grievances.irdai.gov.in',       hi:'बीमा लोकपाल — grievances.irdai.gov.in',                contact:'https://grievances.irdai.gov.in' },
    ],
  },
  {
    id:'insurance-mis-sold', cat:'insurance',
    en:{ title:'Wrong / mis-sold insurance policy',      sub:'IRDAI + insurer + consumer forum' },
    hi:{ title:'गलत / धोखे से बेची गई बीमा पॉलिसी',     sub:'IRDAI + बीमाकर्ता + उपभोक्ता फोरम' },
    type:'hybrid', helpline:'155255',
    tags:['insurance','policy','mis-sold','wrong','fraud','bima','agent','sold','forced','nahi','chaha'],
    steps:[
      { level:'local',   action:'call', en:'IRDAI Helpline — 155255 (Bima Bharosa)',              hi:'IRDAI हेल्पलाइन — 155255 (बीमा भरोसा)',                contact:'155255' },
      { level:'local',   action:'call', en:'National Consumer Helpline — 1800-11-4000',           hi:'राष्ट्रीय उपभोक्ता हेल्पलाइन — 1800-11-4000',         contact:'1800-11-4000' },
      { level:'central', action:'web',  en:'Insurance Ombudsman — grievances.irdai.gov.in',       hi:'बीमा लोकपाल — grievances.irdai.gov.in',                contact:'https://grievances.irdai.gov.in' },
      { level:'central', action:'web',  en:'E-DAAKHIL — consumer court online',                   hi:'E-DAAKHIL — उपभोक्ता अदालत ऑनलाइन',                   contact:'https://edaakhil.nic.in' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  //  SOCIETY / LOCAL AREA ISSUES
  // ══════════════════════════════════════════════════════════════════════
  {
    id:'society-noise', cat:'society',
    en:{ title:'Noise complaint — loud music / construction', sub:'Police + Pollution Control Board' },
    hi:{ title:'शोर की शिकायत — तेज़ संगीत / निर्माण',   sub:'पुलिस + प्रदूषण नियंत्रण बोर्ड' },
    type:'hybrid',
    tags:['noise','loud','music','construction','pollution','shorgul','awaz','complaint','society','area'],
    steps:[
      POLICE_112,
      { level:'local',   action:'visit',en:'Local police station — file noise complaint',         hi:'स्थानीय पुलिस स्टेशन — शोर की शिकायत दर्ज करें',      contact:null },
      { level:'state',   action:'call', en:'State Pollution Control Board — noise pollution',      hi:'राज्य प्रदूषण नियंत्रण बोर्ड — ध्वनि प्रदूषण',        contact:null },
      NAGAR_NIGAM,
    ],
  },
  {
    id:'society-illegal-construction', cat:'society',
    en:{ title:'Illegal construction / encroachment',    sub:'Municipal corporation + collector' },
    hi:{ title:'अवैध निर्माण / अतिक्रमण हो रहा है',     sub:'नगर पालिका + जिला कलेक्टर' },
    type:'hybrid',
    tags:['illegal','construction','encroachment','building','nagar','nigam','municipal','atikraman','society'],
    steps:[
      NAGAR_NIGAM,
      { level:'local',   action:'visit',en:'Collector / SDM office — encroachment complaint',     hi:'कलेक्टर / SDM कार्यालय — अतिक्रमण शिकायत',            contact:null },
      { level:'state',   action:'web',  en:'State Urban Development Department grievance',        hi:'राज्य नगर विकास विभाग शिकायत',                         contact:null },
      CPGRAMS,
    ],
  },
  {
    id:'society-parking', cat:'society',
    en:{ title:'Parking dispute / vehicle blocking',     sub:'Traffic police + municipal authority' },
    hi:{ title:'पार्किंग विवाद / गाड़ी रास्ता रोक रही है', sub:'ट्रैफिक पुलिस + नगर पालिका' },
    type:'hybrid',
    tags:['parking','dispute','vehicle','blocked','traffic','society','area','car','bike','gaadi'],
    steps:[
      { level:'local',   action:'call', en:'Traffic Police Helpline — 103 or 112',               hi:'ट्रैफिक पुलिस हेल्पलाइन — 103 या 112',                 contact:'103' },
      NAGAR_NIGAM,
      { level:'local',   action:'visit',en:'RWA (Resident Welfare Association) — raise parking issue', hi:'RWA — पार्किंग समस्या उठाएं',                      contact:null },
    ],
  },
  {
    id:'society-stray', cat:'society',
    en:{ title:'Stray animal / dog bite issue',          sub:'Municipal corporation + animal welfare board' },
    hi:{ title:'आवारा जानवर / कुत्ते के काटने की समस्या', sub:'नगर पालिका + पशु कल्याण बोर्ड' },
    type:'hybrid',
    tags:['stray','dog','animal','bite','aawara','janwar','kutta','society','area','welfare'],
    steps:[
      NAGAR_NIGAM,
      { level:'local',   action:'call', en:'Animal Welfare Board / SPCA helpline of your city',   hi:'अपने शहर का Animal Welfare Board / SPCA helpline',     contact:null, note:{en:'Search "[your city] animal helpline number"',hi:'"[आपका शहर] animal helpline number" search करें'} },
      { level:'state',   action:'web',  en:'State Animal Welfare Board — grievance',              hi:'राज्य पशु कल्याण बोर्ड — शिकायत',                     contact:null },
      CPGRAMS,
    ],
  },
]
