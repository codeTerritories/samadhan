// ─── Rich Portal Data ─────────────────────────────────────────────────────────
// Schema per portal entry:
// {
//   badge:   'first'|'direct'|'state'|'central'|'last'
//   name:    string  (display name)
//   desc:    { en, hi }
//   url:     string | null
//   phone:   string | null
//   callOnly: boolean   (no website, call only)
//   howto:   [{ en, hi }]  (numbered screen steps, max 5)
// }

export const BADGE_META = {
  first:   { en: 'Try here first',        hi: 'Sabse pehle yahan',       cls: 'badge-first'   },
  direct:  { en: 'Direct call only',      hi: 'Sirf call karein',        cls: 'badge-direct'  },
  state:   { en: 'State escalation',      hi: 'State level escalation',  cls: 'badge-state'   },
  central: { en: 'Central escalation',    hi: 'Central escalation',      cls: 'badge-central' },
  last:    { en: 'Last resort — national',hi: 'Antim upay — national',   cls: 'badge-last'    },
}

// ─── Shared reusable portals ──────────────────────────────────────────────────
const CPGRAMS = {
  badge: 'last',
  name: 'CPGRAMS — Central Government Portal',
  desc: { en: 'Ministry-level grievance portal managed by DARPG', hi: 'DARPG द्वारा संचालित केंद्रीय शिकायत पोर्टल' },
  url: 'https://pgportal.gov.in/grievance/public',
  phone: null,
  howto: [
    { en: 'Go to pgportal.gov.in → click "Lodge Grievance"', hi: 'pgportal.gov.in खोलें → "Lodge Grievance" दबाएं' },
    { en: 'Register/Login with mobile OTP', hi: 'Mobile OTP से register या login करें' },
    { en: 'Select Ministry/Department relevant to your complaint', hi: 'अपनी समस्या से जुड़ा Ministry/Department चुनें' },
    { en: 'Fill the form, attach proof, submit — note the Registration No.', hi: 'फॉर्म भरें, proof लगाएं, submit करें — Registration No. लिख लें' },
  ],
}

// ─── BIJLI (Electricity) ──────────────────────────────────────────────────────
const BIJLI_NATIONAL = [
  {
    badge: 'first',
    name: 'DISCOM Toll-Free Helpline',
    desc: { en: 'Call your local distribution company 24×7 for outages & complaints', hi: 'बिजली गुल, मीटर, बिल — 24×7 अपने DISCOM को call करें' },
    url: null,
    phone: '1912',
    callOnly: true,
    howto: [
      { en: 'Dial 1912 (universal DISCOM helpline, free)', hi: '1912 dial करें — यह सभी राज्यों का DISCOM helpline है' },
      { en: 'Say your area / account number for faster routing', hi: 'अपना area या account number बताएं — जल्दी मदद मिलेगी' },
      { en: 'Note the complaint reference number given by the agent', hi: 'Agent द्वारा दिया गया complaint reference number लिख लें' },
    ],
  },
  {
    badge: 'central',
    name: 'National Power Portal — Complaint Tracker',
    desc: { en: 'Ministry of Power outage tracking & escalation portal', hi: 'बिजली मंत्रालय का आउटेज ट्रैकिंग पोर्टल' },
    url: 'https://vidyut.org',
    phone: null,
    howto: [
      { en: 'Open vidyut.org → select your State & DISCOM', hi: 'vidyut.org खोलें → अपना State और DISCOM चुनें' },
      { en: 'Click "Report Outage" or "Consumer Grievance"', hi: '"Report Outage" या "Consumer Grievance" पर click करें' },
      { en: 'Fill your details, describe the problem, submit', hi: 'अपनी details भरें, समस्या describe करें, submit करें' },
      { en: 'Track status with the ticket number provided', hi: 'दिए गए ticket number से status track करें' },
    ],
  },
  {
    badge: 'state',
    name: 'State Electricity Regulatory Commission (SERC)',
    desc: { en: 'Unresolved DISCOM complaints escalate here — state regulator', hi: '30 दिन में हल न हो तो state regulator को complaint करें' },
    url: 'https://cercind.gov.in/serc_links.html',
    phone: '1800-180-3333',
    howto: [
      { en: 'Visit cercind.gov.in → click "SERC Links" → find your state', hi: 'cercind.gov.in → "SERC Links" → अपना state ढूंढें' },
      { en: 'Go to your state SERC website → Consumer Grievance section', hi: 'अपने state SERC की website पर → Consumer Grievance में जाएं' },
      { en: 'File a complaint with your DISCOM complaint reference number', hi: 'DISCOM का complaint reference number लेकर complaint दर्ज करें' },
      { en: 'SERC must respond within 60 days by regulation', hi: 'SERC को 60 दिन में जवाब देना होता है — यह regulation है' },
    ],
  },
  CPGRAMS,
]

// ─── PANI (Water) ─────────────────────────────────────────────────────────────
const PANI_NATIONAL = [
  {
    badge: 'first',
    name: 'Jal Jeevan Mission Helpline',
    desc: { en: 'Central helpline for drinking water supply complaints', hi: 'पेयजल आपूर्ति की शिकायत के लिए केंद्रीय helpline' },
    url: 'https://ejalshakti.gov.in/jjm/JJM/Public/JJM_ComplaintRegistration.aspx',
    phone: '1916',
    howto: [
      { en: 'Dial 1916 OR open ejalshakti.gov.in', hi: '1916 dial करें या ejalshakti.gov.in खोलें' },
      { en: 'Click "Complaint Registration" on the homepage', hi: 'Homepage पर "Complaint Registration" पर click करें' },
      { en: 'Select state, district, village and enter your complaint', hi: 'State, district, village चुनें और complaint enter करें' },
      { en: 'Submit and note the complaint ID for follow-up', hi: 'Submit करें — complaint ID note कर लें' },
    ],
  },
  {
    badge: 'direct',
    name: 'Local Jal Board Helpline',
    desc: { en: 'City water authority — call for supply interruption, leaks, quality', hi: 'शहर का जल बोर्ड — supply बंद, leak, गंदा पानी के लिए call करें' },
    url: null,
    phone: '1916',
    callOnly: true,
    howto: [
      { en: 'Dial 1916 (national water helpline)', hi: '1916 dial करें — यह national water helpline है' },
      { en: 'For city-specific number, search "[your city] jal board helpline"', hi: 'अपने शहर के लिए "[city name] jal board helpline" search करें' },
    ],
  },
  {
    badge: 'central',
    name: 'National Water Mission Grievance',
    desc: { en: 'Ministry of Jal Shakti escalation portal for water complaints', hi: 'जल शक्ति मंत्रालय का escalation portal' },
    url: 'https://jalshakti-ddws.gov.in',
    phone: null,
    howto: [
      { en: 'Open jalshakti-ddws.gov.in → click "Grievance"', hi: 'jalshakti-ddws.gov.in खोलें → "Grievance" पर click करें' },
      { en: 'Select your state and type of complaint', hi: 'अपना state और complaint type चुनें' },
      { en: 'Attach previous complaint reference if any', hi: 'पिछली complaint reference हो तो attach करें' },
      { en: 'Submit and track via the ticket number', hi: 'Submit करें और ticket number से track करें' },
    ],
  },
  CPGRAMS,
]

// ─── SAFAI (Sanitation / Garbage) ─────────────────────────────────────────────
const SAFAI_NATIONAL = [
  {
    badge: 'first',
    name: 'Swachh Bharat Mission — Citizen Complaint Portal',
    desc: { en: 'National portal for garbage, open defecation, and sanitation complaints', hi: 'कचरा, खुले में शौच, सफाई के लिए राष्ट्रीय शिकायत portal' },
    url: 'https://sbmurban.org/citizen-grievance',
    phone: null,
    howto: [
      { en: 'Open sbmurban.org → click "Citizen Grievance"', hi: 'sbmurban.org खोलें → "Citizen Grievance" पर जाएं' },
      { en: 'Select your state and ULB (Urban Local Body)', hi: 'अपना state और ULB (नगर निकाय) चुनें' },
      { en: 'Choose complaint type: Garbage, Drainage, Open Defecation etc.', hi: 'Complaint type चुनें: Garbage, Drainage, Open Defecation आदि' },
      { en: 'You can upload a photo — strong evidence helps faster resolution', hi: 'Photo upload करें — proof से जल्दी action होता है' },
    ],
  },
  {
    badge: 'direct',
    name: 'Municipal Corporation Helpline',
    desc: { en: 'Call your city municipal body for missed garbage pickup', hi: 'कचरा गाड़ी न आने पर नगर निगम को call करें' },
    url: null,
    phone: null,
    callOnly: true,
    howto: [
      { en: 'Search "[your city] nagar nigam helpline number"', hi: '"[अपना शहर] नगर निगम helpline number" search करें' },
      { en: 'For many cities dial 1533 (Swachh Bharat helpline)', hi: 'कई शहरों में 1533 dial करें — Swachh Bharat helpline है' },
    ],
  },
  {
    badge: 'state',
    name: 'State Urban Development Department Portal',
    desc: { en: 'State-level escalation for municipal service complaints', hi: 'नगरीय सेवाओं की शिकायत के लिए राज्य portal' },
    url: null,
    phone: null,
    howto: [
      { en: 'Search "[your state] urban development grievance portal"', hi: '"[आपका state] urban development grievance portal" search करें' },
      { en: 'Login with Aadhaar-linked mobile and file complaint', hi: 'Aadhaar-linked mobile से login करें और complaint दर्ज करें' },
      { en: 'Attach photos and previous complaint ticket number', hi: 'Photos और पिछले complaint ticket के साथ submit करें' },
    ],
  },
  CPGRAMS,
]

// ─── SADAK (Roads) ────────────────────────────────────────────────────────────
const SADAK_NATIONAL = [
  {
    badge: 'first',
    name: 'Pothole Reporting — MoRTH iRAD Portal',
    desc: { en: 'Ministry of Road Transport — national road accident & pothole portal', hi: 'Road Transport Ministry का national pothole report portal' },
    url: 'https://irad.cept.ac.in',
    phone: null,
    howto: [
      { en: 'Open irad.cept.ac.in → register or login', hi: 'irad.cept.ac.in खोलें → register या login करें' },
      { en: 'Click "Report" → select Pothole or Road Damage', hi: '"Report" click करें → Pothole या Road Damage चुनें' },
      { en: 'Allow location or enter address, add photo', hi: 'Location allow करें या address डालें, photo add करें' },
      { en: 'Submit — your report goes to PWD/NHAI directly', hi: 'Submit करें — report सीधे PWD/NHAI को जाता है' },
    ],
  },
  {
    badge: 'central',
    name: 'NHAI Helpline — National Highways',
    desc: { en: 'Report issues on National Highways — potholes, tolls, road damage', hi: 'National Highway पर pothole, toll, damage — NHAI को report करें' },
    url: 'https://onetouch.nhai.gov.in',
    phone: '1033',
    howto: [
      { en: 'Dial 1033 OR open onetouch.nhai.gov.in', hi: '1033 dial करें या onetouch.nhai.gov.in खोलें' },
      { en: 'Select "Lodge Grievance" → choose highway number', hi: '"Lodge Grievance" → highway number चुनें' },
      { en: 'Describe the location (km marker or nearest landmark)', hi: 'Location describe करें — km marker या पास का landmark बताएं' },
      { en: 'Submit with photo — NHAI must respond in 48 hours', hi: 'Photo के साथ submit करें — NHAI को 48 घंटे में respond करना है' },
    ],
  },
  {
    badge: 'state',
    name: 'State PWD / Lok Nirman Vibhag Portal',
    desc: { en: 'State Public Works Department for state road complaints', hi: 'State roads के लिए PWD / लोक निर्माण विभाग में complaint करें' },
    url: null,
    phone: null,
    howto: [
      { en: 'Search "[your state] PWD grievance portal" or call district collector office', hi: '"[आपका state] PWD grievance portal" search करें या District Collector को call करें' },
      { en: 'File complaint with road name, location, and photo', hi: 'Road name, location और photo के साथ complaint दर्ज करें' },
    ],
  },
  CPGRAMS,
]

// ─── POLICE / LAW ─────────────────────────────────────────────────────────────
const POLICE_NATIONAL = [
  {
    badge: 'first',
    name: 'National Police Helpline',
    desc: { en: 'Emergency police call — crime, accident, threat', hi: 'Police emergency — crime, accident, threat के लिए तुरंत call करें' },
    url: null,
    phone: '112',
    callOnly: true,
    howto: [
      { en: 'Dial 112 — available 24×7, pan-India', hi: '112 dial करें — 24×7, पूरे India में available है' },
      { en: 'State your location and nature of emergency clearly', hi: 'अपना location और emergency की nature clearly बताएं' },
    ],
  },
  {
    badge: 'first',
    name: 'Cyber Crime Complaint Portal',
    desc: { en: 'Report online fraud, phishing, cyberstalking — Ministry of Home Affairs', hi: 'Online fraud, phishing, cyberstalking report करें — Home Affairs Ministry' },
    url: 'https://cybercrime.gov.in/webform/createcyber.aspx',
    phone: '1930',
    howto: [
      { en: 'Dial 1930 for financial fraud (within 24 hrs of fraud for best results)', hi: 'Financial fraud हो तो तुरंत 1930 dial करें — 24 घंटे में call करना बेहतर' },
      { en: 'Open cybercrime.gov.in → click "Report Cyber Crime"', hi: 'cybercrime.gov.in → "Report Cyber Crime" पर click करें' },
      { en: 'Select crime type: Financial Fraud / Other Cyber Crime', hi: 'Crime type चुनें: Financial Fraud / Other Cyber Crime' },
      { en: 'Fill all details, attach screenshots/evidence, submit', hi: 'सभी details भरें, screenshots/proof attach करें, submit करें' },
    ],
  },
  {
    badge: 'state',
    name: 'State Police Online Complaint Portal',
    desc: { en: 'File FIR or complaint online with your state police', hi: 'अपने state police में online FIR या complaint दर्ज करें' },
    url: null,
    phone: null,
    howto: [
      { en: 'Search "[your state] police online complaint" (e.g. "UP police online complaint")', hi: '"[आपका state] police online complaint" search करें' },
      { en: 'Login with mobile OTP, fill complaint form', hi: 'Mobile OTP से login करें, complaint form भरें' },
      { en: 'Download the acknowledgment receipt', hi: 'Acknowledgment receipt download करें — जरूरी document है' },
    ],
  },
  CPGRAMS,
]

// ─── BANK / FINANCE ───────────────────────────────────────────────────────────
const BANK_NATIONAL = [
  {
    badge: 'first',
    name: 'RBI Integrated Ombudsman — Complaint Portal',
    desc: { en: 'File bank/NBFC complaint with RBI — unresolved issues get resolution in 30 days', hi: 'Bank/NBFC की unsolved complaint RBI को करें — 30 दिन में resolution' },
    url: 'https://cms.rbi.org.in',
    phone: '14448',
    howto: [
      { en: 'Open cms.rbi.org.in → click "File a Complaint"', hi: 'cms.rbi.org.in खोलें → "File a Complaint" पर click करें' },
      { en: 'Enter your bank name and complaint details', hi: 'अपने bank का नाम और complaint details डालें' },
      { en: 'Attach: bank rejection letter, previous complaint proof', hi: 'Bank का rejection letter और पिछली complaint proof attach करें' },
      { en: 'Submit — RBI Ombudsman must respond in 30 working days', hi: 'Submit करें — RBI Ombudsman को 30 working days में जवाब देना है' },
    ],
  },
  {
    badge: 'direct',
    name: 'RBI Helpline',
    desc: { en: 'Call RBI helpline for quick guidance on banking complaints', hi: 'Banking complaint guidance के लिए RBI helpline को call करें' },
    url: null,
    phone: '14448',
    callOnly: true,
    howto: [
      { en: 'Dial 14448 for RBI consumer helpdesk', hi: '14448 dial करें — RBI consumer helpdesk है' },
      { en: 'First complain to your bank, note reference number, then call RBI', hi: 'पहले bank में complain करें — reference number लें, फिर RBI को call करें' },
    ],
  },
  {
    badge: 'central',
    name: 'SEBI SCORES — Securities Complaint Portal',
    desc: { en: 'Mutual fund, stock broker, demat account — SEBI handles these', hi: 'Mutual fund, stock broker, demat — SEBI को complaint करें' },
    url: 'https://scores.sebi.gov.in',
    phone: '1800-266-7575',
    howto: [
      { en: 'Open scores.sebi.gov.in → Register/Login', hi: 'scores.sebi.gov.in → Register/Login करें' },
      { en: 'Click "Lodge Complaint" → select company/broker', hi: '"Lodge Complaint" → अपनी company/broker चुनें' },
      { en: 'Describe the complaint in detail, attach proofs', hi: 'Complaint विस्तार से describe करें, proofs attach करें' },
      { en: 'Track status — SEBI forwards to entity within 7 days', hi: 'Status track करें — SEBI 7 दिन में entity को forward करती है' },
    ],
  },
  CPGRAMS,
]

// ─── HEALTH ───────────────────────────────────────────────────────────────────
const HEALTH_NATIONAL = [
  {
    badge: 'first',
    name: 'National Health Helpline',
    desc: { en: 'Free 24×7 health helpline — Ayushman Bharat, hospital complaints', hi: 'Free 24×7 health helpline — hospital, Ayushman Bharat complaint' },
    url: 'https://nhp.gov.in',
    phone: '104',
    howto: [
      { en: 'Dial 104 (free, 24×7) for health guidance and complaints', hi: '104 dial करें — free, 24×7 health guidance और complaints' },
      { en: 'For Ayushman Bharat issues: 14555 helpline', hi: 'Ayushman Bharat की problem के लिए 14555 dial करें' },
    ],
  },
  {
    badge: 'central',
    name: 'Central Government Health Scheme Grievance',
    desc: { en: 'CGHS complaints for government employees & pensioners', hi: 'Sarkari employees/pensioners की CGHS complaint portal' },
    url: 'https://cghs.gov.in/grievancepublic.aspx',
    phone: '011-23061054',
    howto: [
      { en: 'Open cghs.gov.in → click "Grievance"', hi: 'cghs.gov.in → "Grievance" पर click करें' },
      { en: 'Select your CGHS city and beneficiary type', hi: 'अपना CGHS city और beneficiary type चुनें' },
      { en: 'Describe the issue with card number and date of incident', hi: 'Card number और incident date के साथ problem describe करें' },
      { en: 'Submit and note reference for follow-up', hi: 'Submit करें — reference number से follow-up करें' },
    ],
  },
  {
    badge: 'state',
    name: 'State Health Department Grievance Portal',
    desc: { en: 'Government hospital complaints — state health department', hi: 'Sarkari hospital complaint के लिए state health department portal' },
    url: null,
    phone: null,
    howto: [
      { en: 'Search "[your state] health department grievance portal"', hi: '"[आपका state] health department grievance portal" search करें' },
      { en: 'File complaint with hospital name, date, doctor name', hi: 'Hospital name, date, doctor name के साथ complaint करें' },
    ],
  },
  CPGRAMS,
]

// ─── TELECOM ──────────────────────────────────────────────────────────────────
const TELECOM_NATIONAL = [
  {
    badge: 'first',
    name: 'TRAI Consumer Complaint Portal',
    desc: { en: 'Unresolved telecom complaints — TRAI escalation (after operator fails)', hi: 'Operator से हल न हो तो TRAI को complaint करें' },
    url: 'https://consumerportal.trai.gov.in',
    phone: null,
    howto: [
      { en: 'First: complain to your operator (Jio/Airtel/Vi/BSNL)', hi: 'पहले अपने operator (Jio/Airtel/Vi/BSNL) को complaint करें' },
      { en: 'If unresolved in 10 days: open consumerportal.trai.gov.in', hi: '10 दिन में हल न हो: consumerportal.trai.gov.in खोलें' },
      { en: 'Login → "Register Complaint" → enter mobile number & operator', hi: 'Login → "Register Complaint" → mobile number और operator enter करें' },
      { en: 'Attach operator\'s rejection reply, submit to TRAI', hi: 'Operator का rejection reply attach करें, TRAI को submit करें' },
    ],
  },
  {
    badge: 'direct',
    name: 'DOT Sanchar Saathi Portal',
    desc: { en: 'Block stolen phone, check SIM in your name, report fraud calls', hi: 'Stolen phone block करें, SIM check करें, fraud call report करें' },
    url: 'https://sancharsaathi.gov.in',
    phone: '1800-110-420',
    howto: [
      { en: 'Open sancharsaathi.gov.in', hi: 'sancharsaathi.gov.in खोलें' },
      { en: 'CEIR: Block/Trace lost phone | TAFCOP: Check SIMs on your Aadhaar', hi: 'CEIR: Lost phone block/trace | TAFCOP: Aadhaar पर SIM check करें' },
      { en: 'For fraud call reporting: click "Report Suspected Fraud Communication"', hi: 'Fraud call report करने के लिए: "Report Suspected Fraud Communication" पर click करें' },
    ],
  },
  {
    badge: 'central',
    name: 'DoT Grievance Portal',
    desc: { en: 'Department of Telecommunications — ministry-level complaint', hi: 'Telecom Ministry में complaint दर्ज करें' },
    url: 'https://pgportal.gov.in',
    phone: null,
    howto: [
      { en: 'Open pgportal.gov.in → Lodge Grievance', hi: 'pgportal.gov.in → Lodge Grievance पर click करें' },
      { en: 'Select Ministry: "Department of Telecommunications"', hi: 'Ministry: "Department of Telecommunications" चुनें' },
      { en: 'Fill complaint details and attach previous complaint proofs', hi: 'Complaint details भरें, पिछले complaint proofs attach करें' },
    ],
  },
  CPGRAMS,
]

// ─── TRANSPORT ────────────────────────────────────────────────────────────────
const TRANSPORT_NATIONAL = [
  {
    badge: 'first',
    name: 'Indian Railways — Rail Madad Portal',
    desc: { en: 'Train delay, coach cleanliness, staff, meals — real-time complaint', hi: 'Train delay, coach गंदगी, staff, food — real-time complaint करें' },
    url: 'https://railmadad.indianrailways.gov.in',
    phone: '139',
    howto: [
      { en: 'Dial 139 (while on train) OR open railmadad.indianrailways.gov.in', hi: '139 dial करें (train में हों तो) या railmadad.indianrailways.gov.in खोलें' },
      { en: 'Enter PNR number to auto-fill train details', hi: 'PNR number डालें — train details auto-fill होंगी' },
      { en: 'Select complaint type: Cleanliness / Security / Catering etc.', hi: 'Complaint type चुनें: Cleanliness / Security / Catering आदि' },
      { en: 'Add photo if possible — rail staff will respond within 30 min', hi: 'हो सके तो photo add करें — rail staff 30 min में respond करते हैं' },
    ],
  },
  {
    badge: 'central',
    name: 'NHAI — National Highway Toll Complaint',
    desc: { en: 'Toll booth overcharging, receipt not given, barrier issue', hi: 'Toll excess charge, receipt न मिलना, barrier problem — NHAI complaint' },
    url: 'https://onetouch.nhai.gov.in',
    phone: '1033',
    howto: [
      { en: 'Dial 1033 OR open onetouch.nhai.gov.in', hi: '1033 dial करें या onetouch.nhai.gov.in खोलें' },
      { en: 'Select "Toll Related Complaint" and enter toll plaza name/number', hi: '"Toll Related Complaint" → toll plaza name/number enter करें' },
      { en: 'Attach photo of toll receipt or vehicle number for reference', hi: 'Toll receipt photo या vehicle number attach करें' },
    ],
  },
  {
    badge: 'state',
    name: 'State RTO / Transport Department',
    desc: { en: 'Driving licence, vehicle registration, bus service complaints', hi: 'Driving licence, vehicle registration, state bus complaint — RTO में करें' },
    url: 'https://parivahan.gov.in',
    phone: null,
    howto: [
      { en: 'Open parivahan.gov.in for central transport services', hi: 'parivahan.gov.in खोलें — central transport services यहाँ हैं' },
      { en: 'For state bus: search "[state] SRTC grievance" (e.g. "MSRTC grievance")', hi: 'State bus के लिए: "[state] SRTC grievance" search करें' },
      { en: 'File complaint with vehicle/bus number, route, and date', hi: 'Vehicle/bus number, route और date के साथ complaint करें' },
    ],
  },
  CPGRAMS,
]

// ─── GOVT SERVICES ────────────────────────────────────────────────────────────
const GOVT_NATIONAL = [
  {
    badge: 'first',
    name: 'CPGRAMS — Centralized Public Grievance Portal',
    desc: { en: 'For any central government service: passport, PAN, Aadhaar, pension, ration etc.', hi: 'Passport, PAN, Aadhaar, pension, ration — किसी भी सरकारी service की complaint यहाँ' },
    url: 'https://pgportal.gov.in/grievance/public',
    phone: '1800-111-555',
    howto: [
      { en: 'Open pgportal.gov.in → click "Lodge Grievance"', hi: 'pgportal.gov.in → "Lodge Grievance" पर click करें' },
      { en: 'Login with mobile OTP', hi: 'Mobile OTP से login करें' },
      { en: 'Select the Ministry/Department (e.g. UIDAI for Aadhaar, MEA for Passport)', hi: 'Ministry चुनें — UIDAI for Aadhaar, MEA for Passport, etc.' },
      { en: 'Describe your issue clearly, attach supporting documents', hi: 'Problem clearly describe करें, supporting documents attach करें' },
    ],
  },
  {
    badge: 'direct',
    name: 'DigiLocker — Document Grievance',
    desc: { en: 'Issues with digital documents: Aadhaar, driving licence, certificate fetch errors', hi: 'Digital document fetch error, Aadhaar update — DigiLocker support' },
    url: 'https://digilocker.gov.in',
    phone: '1800-891-3334',
    howto: [
      { en: 'Open digilocker.gov.in → Help → Submit a request', hi: 'digilocker.gov.in → Help → "Submit a request" पर click करें' },
      { en: 'Describe document fetch issue with your DigiLocker ID', hi: 'DigiLocker ID और document fetch error clearly describe करें' },
    ],
  },
  {
    badge: 'state',
    name: 'State CM Helpline / Jan Sunwai',
    desc: { en: 'Chief Minister helpline for state government service complaints', hi: 'State government service के लिए CM helpline या Jan Sunwai' },
    url: null,
    phone: null,
    howto: [
      { en: 'Search "[your state] CM helpline number" for the direct number', hi: '"[आपका state] CM helpline" search करें — direct number मिलेगा' },
      { en: 'Example: UP CM Helpline: 1076 | Rajasthan: 181 | Haryana: 1100', hi: 'UP: 1076 | Rajasthan: 181 | Haryana: 1100 | अपना state check करें' },
      { en: 'Explain your service complaint — reference number will be given', hi: 'Service complaint explain करें — reference number मिलेगा' },
    ],
  },
  CPGRAMS,
]

// ─── ENVIRONMENT ──────────────────────────────────────────────────────────────
const ENV_NATIONAL = [
  {
    badge: 'first',
    name: 'CPCB — National Green Helpline',
    desc: { en: 'Central Pollution Control Board — air, water, noise, industrial pollution', hi: 'Air, water, noise, industrial pollution — CPCB helpline' },
    url: 'https://cpcb.nic.in/grievance.php',
    phone: '1800-200-7086',
    howto: [
      { en: 'Open cpcb.nic.in → click "Grievance"', hi: 'cpcb.nic.in → "Grievance" पर click करें' },
      { en: 'Select pollution type: Air / Water / Noise / Hazardous Waste', hi: 'Pollution type चुनें: Air / Water / Noise / Hazardous Waste' },
      { en: 'Enter factory/source name and exact location', hi: 'Factory/source का नाम और exact location डालें' },
      { en: 'Upload photos or videos as evidence', hi: 'Photos या videos as evidence upload करें' },
    ],
  },
  {
    badge: 'state',
    name: 'State Pollution Control Board',
    desc: { en: 'Local factory pollution, burning, industrial discharge — state PCB', hi: 'Factory pollution, burning, industrial discharge — State PCB complaint' },
    url: null,
    phone: null,
    howto: [
      { en: 'Search "[your state] pollution control board complaint"', hi: '"[आपका state] pollution control board complaint" search करें' },
      { en: 'File with exact factory name/address, nature of pollution, date/time', hi: 'Factory नाम/address, pollution nature, date/time के साथ file करें' },
      { en: 'Attach photographic evidence — state PCB must inspect within 30 days', hi: 'Photo evidence attach करें — State PCB को 30 दिन में inspect करना है' },
    ],
  },
  {
    badge: 'central',
    name: 'MoEFCC — Ministry Environment Grievance',
    desc: { en: 'Environmental clearance violations, forest destruction — Ministry level', hi: 'Environmental clearance violation, forest destruction — Ministry complaint' },
    url: 'https://parivesh.nic.in',
    phone: null,
    howto: [
      { en: 'Open parivesh.nic.in → "Grievance" section', hi: 'parivesh.nic.in → "Grievance" section में जाएं' },
      { en: 'Select type: Forest clearance / EIA violation / others', hi: 'Type चुनें: Forest clearance / EIA violation / others' },
      { en: 'Describe violation with location, company name if known', hi: 'Location, company name के साथ violation describe करें' },
    ],
  },
  CPGRAMS,
]

// ─── EDUCATION ────────────────────────────────────────────────────────────────
const EDU_NATIONAL = [
  {
    badge: 'first',
    name: 'UDISE+ / CBSE Student Helpline',
    desc: { en: 'CBSE exam, result, mark sheet issues — 24×7 helpline', hi: 'CBSE exam, result, mark sheet problem — 24×7 helpline' },
    url: 'https://cbse.gov.in',
    phone: '1800-11-8002',
    howto: [
      { en: 'Dial 1800-11-8002 for CBSE student helpline (free, 24×7)', hi: '1800-11-8002 dial करें — free CBSE student helpline' },
      { en: 'Open cbse.gov.in → Student Services → Grievance', hi: 'cbse.gov.in → Student Services → Grievance में जाएं' },
      { en: 'Enter roll number / school code and describe the issue', hi: 'Roll number / school code enter करें, problem describe करें' },
      { en: 'Attach relevant documents (admit card, mark sheet, etc.)', hi: 'Admit card, mark sheet जैसे documents attach करें' },
    ],
  },
  {
    badge: 'central',
    name: 'AICTE / UGC Grievance Portal',
    desc: { en: 'College/university complaints: fee refund, admission fraud, degree issues', hi: 'College/university: fee refund, admission fraud, degree problem — UGC complaint' },
    url: 'https://grievance.aicte-india.org',
    phone: '011-29581000',
    howto: [
      { en: 'For Engineering/Technical: grievance.aicte-india.org', hi: 'Engineering/Technical ke liye: grievance.aicte-india.org' },
      { en: 'For all universities: ugc.gov.in → "Grievance Portal (SAMARTH)"', hi: 'Sab universities ke liye: ugc.gov.in → "Grievance Portal (SAMARTH)"' },
      { en: 'Login with email, fill complaint form with institution details', hi: 'Email se login karein, institution details ke saath complaint form bharein' },
      { en: 'Attach fee receipts or admission documents as proof', hi: 'Fee receipts ya admission documents proof ke saath attach karein' },
    ],
  },
  {
    badge: 'state',
    name: 'State Education Department Helpline',
    desc: { en: 'Government school teachers, mid-day meal, scholarship issues', hi: 'Sarkari school teacher, mid-day meal, scholarship problem — state complaint' },
    url: null,
    phone: null,
    howto: [
      { en: 'Search "[your state] education department grievance" portal', hi: '"[आपका state] education department grievance portal" search karein' },
      { en: 'For scholarship: search "[state] scholarship helpline"', hi: 'Scholarship ke liye: "[state] scholarship helpline" search karein' },
    ],
  },
  CPGRAMS,
]

// ─────────────────────────────────────────────────────────────────────────────
// NATIONAL PORTALS map — indexed by category id
// ─────────────────────────────────────────────────────────────────────────────
export const NATIONAL_PORTALS = {
  bijli:     BIJLI_NATIONAL,
  pani:      PANI_NATIONAL,
  safai:     SAFAI_NATIONAL,
  sadak:     SADAK_NATIONAL,
  police:    POLICE_NATIONAL,
  bank:      BANK_NATIONAL,
  health:    HEALTH_NATIONAL,
  telecom:   TELECOM_NATIONAL,
  transport: TRANSPORT_NATIONAL,
  govt:      GOVT_NATIONAL,
  env:       ENV_NATIONAL,
  edu:       EDU_NATIONAL,
}

// ─────────────────────────────────────────────────────────────────────────────
// STATE PORTALS  —  real, verified complaint URLs for major states
// Each state → each category → array of portal objects (same schema)
// ─────────────────────────────────────────────────────────────────────────────
export const STATE_PORTALS = {

  // ── Maharashtra ──────────────────────────────────────────────────────────
  Maharashtra: {
    police: [
      {
        badge: 'first',
        name: 'Maharashtra Police — Emergency & Helpline',
        desc: { en: 'Dial 100 for emergency. Maharashtra Police 24×7 control room.', hi: 'Emergency ke liye 100 dial karein — Maharashtra Police 24×7 control room.' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for any police emergency — available 24×7', hi: 'Kisi bhi emergency mein 100 dial karein — 24×7 available' },
          { en: 'Women in danger: Dial 1091 (Women Helpline)', hi: 'Mahila suraksha ke liye: 1091 dial karein' },
          { en: 'For cyber fraud: Dial 1930 immediately', hi: 'Cyber fraud ke liye: turant 1930 dial karein' },
        ],
      },
      {
        badge: 'first',
        name: 'Maharashtra Police Citizen Portal — Online Complaint',
        desc: { en: 'File online FIR, missing person report, lost article report — official Maharashtra Police portal', hi: 'Online FIR, missing person, lost article report — Maharashtra Police official portal' },
        url: 'https://citizen.mahapolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open citizen.mahapolice.gov.in → Click "Register Complaint"', hi: 'citizen.mahapolice.gov.in kholen → "Register Complaint" click karein' },
          { en: 'Select complaint type: FIR / Non-Cognizable / Lost Article / Missing Person', hi: 'Complaint type chunein: FIR / Non-Cognizable / Lost Article / Missing Person' },
          { en: 'Login with mobile OTP → fill complaint details with date, place, description', hi: 'Mobile OTP se login karein → date, jagah, description ke saath complaint bharein' },
          { en: 'Submit → download the acknowledgment receipt (important document)', hi: 'Submit karein → acknowledgment receipt download karein — yeh zaroori document hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Police Not Registering FIR? — Approach SP / SSP',
        desc: { en: 'If local police refuses to register FIR — escalate to Superintendent of Police', hi: 'Agar local police FIR nahi likh rahi — SP / SSP se milein ya online complaint karein' },
        url: 'https://citizen.mahapolice.gov.in',
        phone: null,
        howto: [
          { en: 'Write application to SP (Superintendent of Police) of your district', hi: 'Apne district ke SP (Superintendent of Police) ko application likhein' },
          { en: 'OR file complaint online at citizen.mahapolice.gov.in → SP Complaint', hi: 'Ya citizen.mahapolice.gov.in → SP Complaint section par online file karein' },
          { en: 'SP is legally bound to order FIR registration — Section 154(3) CrPC', hi: 'SP legally FIR register karane ke liye bound hai — CrPC Section 154(3)' },
          { en: 'Still refused? File complaint before Judicial Magistrate under Section 156(3)', hi: 'Phir bhi mana karein? Judicial Magistrate ke paas Section 156(3) ke tahat petition dein' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'MSEDCL — Consumer Self-Service & Complaint Portal',
        desc: { en: 'Maharashtra State Electricity Distribution — official online complaint', hi: 'MSEDCL official complaint portal — Maha Vitaran, Maharashtra' },
        url: 'https://wss.mahadiscom.in/wss/wss',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (free, 24×7) OR visit wss.mahadiscom.in', hi: '1912 dial karein (24×7 free) YA wss.mahadiscom.in kholen' },
          { en: 'Click "Consumer Self Service" → "Complaint Registration"', hi: '"Consumer Self Service" → "Complaint Registration" par click karein' },
          { en: 'Enter your CA Number (from electricity bill) and login via OTP', hi: 'Bill pe CA Number enter karein → OTP se login karein' },
          { en: 'Select complaint type: No Supply / Low Voltage / Bill / Meter → submit', hi: 'Complaint type select karein → submit karein — SMS confirmation aayega' },
        ],
      },
      {
        badge: 'state',
        name: 'MERC — Maharashtra Electricity Regulatory Commission',
        desc: { en: 'MSEDCL did not resolve in 30 days? Escalate to MERC — state regulator', hi: '30 din mein resolve nahi hua? MERC mein escalate karein — state regulator' },
        url: 'https://merc.gov.in',
        phone: '1800-200-4500',
        howto: [
          { en: 'Open merc.gov.in → "Consumer" → "Grievance Redressal"', hi: 'merc.gov.in → "Consumer" → "Grievance Redressal" mein jaayein' },
          { en: 'Fill grievance form with your MSEDCL complaint reference number', hi: 'MSEDCL complaint reference number ke saath grievance form bharein' },
          { en: 'MERC is the appellate authority — binding decision within 60 days', hi: 'MERC appellate authority hai — 60 din mein binding decision aata hai' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'BMC Complaint Portal — Water Supply (Mumbai)',
        desc: { en: 'Brihanmumbai Municipal Corporation water complaint portal', hi: 'BMC water supply complaint — Mumbai residents ke liye' },
        url: 'https://portal.mcgm.gov.in',
        phone: '1916',
        howto: [
          { en: 'Open portal.mcgm.gov.in → click "Complaints"', hi: 'portal.mcgm.gov.in → "Complaints" पर click करें' },
          { en: 'Register with mobile → select "Water Supply" category', hi: 'Mobile se register karein → "Water Supply" category chune' },
          { en: 'Enter your ward/area and describe the issue', hi: 'Ward/area enter karein aur problem describe karein' },
          { en: 'Note the complaint ID for tracking', hi: 'Complaint ID note kar lein — tracking ke liye zaroori hai' },
        ],
      },
      {
        badge: 'state',
        name: 'MWRRA — Maharashtra Water Resources Regulatory Authority',
        desc: { en: 'Water allocation, supply dispute escalation — state authority', hi: 'Water supply dispute escalation — Maharashtra state authority' },
        url: 'https://mwrra.org',
        phone: '020-22880577',
        howto: [
          { en: 'Open mwrra.org → Grievance section', hi: 'mwrra.org → Grievance section में जाएं' },
          { en: 'For cities other than Mumbai: approach your local municipal corporation first', hi: 'Mumbai ke alava: pehle apne local municipal corporation ko try karein' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'BMC Solid Waste Complaint Portal (Mumbai)',
        desc: { en: 'Mumbai garbage pickup, open dumping, sweeping complaints', hi: 'Mumbai garbage pickup, open dumping, sweeping — BMC complaint' },
        url: 'https://portal.mcgm.gov.in',
        phone: '1916',
        howto: [
          { en: 'Open portal.mcgm.gov.in → Complaints → Solid Waste Management', hi: 'portal.mcgm.gov.in → Complaints → Solid Waste Management chune' },
          { en: 'Select your Ward and describe the garbage issue with address', hi: 'Ward select karein, garbage issue describe karein with address' },
          { en: 'Upload photo for stronger evidence', hi: 'Photo upload karein — zyada strong complaint hogi' },
          { en: 'Complaint is assigned to local ward officer within 24 hrs', hi: 'Complaint 24 ghante mein local ward officer ko assign hoti hai' },
        ],
      },
    ],
  },

  // ── Delhi ────────────────────────────────────────────────────────────────
  Delhi: {
    police: [
      {
        badge: 'first',
        name: 'Delhi Police — Emergency',
        desc: { en: 'Delhi Police 24×7 emergency and control room helpline', hi: 'Delhi Police 24×7 emergency — control room helpline' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Delhi', hi: 'Delhi mein kisi bhi jagah police emergency ke liye 100 dial karein' },
          { en: 'PCR (Police Control Room) Delhi: 011-23490000', hi: 'Delhi PCR (Police Control Room): 011-23490000' },
          { en: 'Women helpline Delhi: 1091 | Anti-Stalking: 1096', hi: 'Delhi women helpline: 1091 | Anti-Stalking: 1096' },
        ],
      },
      {
        badge: 'first',
        name: 'Delhi Police — Online FIR & Complaint Portal',
        desc: { en: 'File e-FIR, lost property report, domestic violence complaint online', hi: 'Delhi Police — e-FIR, lost property, domestic violence — online complaint' },
        url: 'https://www.delhipolice.gov.in',
        phone: '011-23490000',
        howto: [
          { en: 'Open delhipolice.gov.in → "Online Services" → select complaint type', hi: 'delhipolice.gov.in → "Online Services" → complaint type select karein' },
          { en: 'For lost items/documents: select "Loss Report" — get police certificate instantly', hi: 'Khoyi cheez/document ke liye: "Loss Report" select karein — police certificate turant milega' },
          { en: 'For serious crime FIR: fill FIR form with incident details, time, location', hi: 'Serious crime FIR ke liye: FIR form mein incident details, time, location bharein' },
          { en: 'Submit → note FIR number / complaint number for tracking', hi: 'Submit karein → FIR number / complaint number note karein — tracking ke liye' },
        ],
      },
      {
        badge: 'state',
        name: 'Delhi Police Commissioner — Escalation',
        desc: { en: 'Police not acting? Escalate to Delhi Police Commissioner or vigilance', hi: 'Police action nahi le rahi? Delhi Police Commissioner ya vigilance ko escalate karein' },
        url: 'https://www.delhipolice.gov.in',
        phone: '011-23490000',
        howto: [
          { en: 'Write to DCP (Deputy Commissioner of Police) of your district', hi: 'Apne district ke DCP (Deputy Commissioner of Police) ko written complaint dein' },
          { en: 'Online: delhipolice.gov.in → "Public Grievance" section', hi: 'Online: delhipolice.gov.in → "Public Grievance" section mein jaayein' },
          { en: 'For police misconduct: Anti-Corruption Branch: 011-23490000', hi: 'Police misconduct ke liye: Anti-Corruption Branch: 011-23490000' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'BSES Rajdhani (BRPL) — South & West Delhi Complaint',
        desc: { en: 'BSES Rajdhani serves South & West Delhi — helpline 19123, 24×7', hi: 'South Delhi / West Delhi: BSES Rajdhani — 19123 ya online complaint' },
        url: 'https://www.bsesdelhi.com/web/brpl/no-supply-complaint',
        phone: '19123',
        howto: [
          { en: 'Dial 19123 (24×7 free) for South/West Delhi power complaints', hi: 'South/West Delhi bijli complaint ke liye 19123 dial karein (24×7)' },
          { en: 'Online: bsesdelhi.com/web/brpl/no-supply-complaint → "Lodge Complaint"', hi: 'Online: bsesdelhi.com → brpl → "No Supply Complaint" par click karein' },
          { en: 'Enter your CA Number from the bill → describe issue → submit', hi: 'Bill se CA Number enter karein → issue describe karein → submit karein' },
          { en: 'BRPL must restore supply within 4 hours (DERC regulation)', hi: 'BRPL ko 4 ghante mein supply restore karni hoti hai — DERC ka rule hai' },
        ],
      },
      {
        badge: 'first',
        name: 'BSES Yamuna (BYPL) — East Delhi Complaint',
        desc: { en: 'BSES Yamuna serves East Delhi — helpline 19122, 24×7', hi: 'East Delhi bijli: BSES Yamuna — 19122 ya online complaint' },
        url: 'https://www.bsesdelhi.com/web/bypl/contact-customer-care',
        phone: '19122',
        howto: [
          { en: 'Dial 19122 (24×7 free) for East Delhi power complaints', hi: 'East Delhi bijli complaint ke liye 19122 dial karein (24×7)' },
          { en: 'Online: bsesdelhi.com/web/bypl → "Lodge Complaint"', hi: 'Online: bsesdelhi.com/web/bypl → "Lodge Complaint" par click karein' },
          { en: 'Enter CA Number from bill → select complaint type → submit', hi: 'Bill se CA Number enter karein → complaint type select karein → submit karein' },
        ],
      },
      {
        badge: 'first',
        name: 'Tata Power DDL (TPDDL) — North & NW Delhi Complaint',
        desc: { en: 'Tata Power Delhi serves North & North-West Delhi — helpline 19124', hi: 'North Delhi / North-West Delhi: Tata Power DDL — 19124 ya online' },
        url: 'https://www.tatapower-ddl.com/CustomerCare',
        phone: '19124',
        howto: [
          { en: 'Dial 19124 (24×7) OR 011-66404040 for North/NW Delhi complaints', hi: 'North/NW Delhi ke liye 19124 (24×7) ya 011-66404040 dial karein' },
          { en: 'Online: tatapower-ddl.com → "Customer Care" → "Lodge a Complaint"', hi: 'tatapower-ddl.com → "Customer Care" → "Lodge a Complaint" karein' },
          { en: 'Enter your Account Number from bill → select issue → submit', hi: 'Bill se Account Number enter karein → issue select karein → submit' },
        ],
      },
      {
        badge: 'state',
        name: 'DERC — Delhi Electricity Regulatory Commission',
        desc: { en: 'BSES/TPDDL not resolving? Escalate to DERC — state regulator', hi: 'BSES/TPDDL resolve nahi kar raha? DERC mein escalate karein' },
        url: 'https://www.derc.gov.in',
        phone: '1800-200-1200',
        howto: [
          { en: 'Open derc.gov.in → "Consumer Grievance" section', hi: 'derc.gov.in → "Consumer Grievance" section mein jaayein' },
          { en: 'File with your DISCOM complaint number + all correspondence', hi: 'DISCOM complaint number aur saari correspondence ke saath file karein' },
          { en: 'DERC gives legally binding decision — DISCOMs must comply', hi: 'DERC ka decision legally binding hota hai — DISCOM ko manna padta hai' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'Delhi Jal Board — Online Complaint Portal',
        desc: { en: 'Delhi Jal Board official complaint portal for water supply issues', hi: 'Delhi Jal Board official complaint portal — water supply issues' },
        url: 'https://delhijalboard.in/complaint',
        phone: '1916',
        howto: [
          { en: 'Open delhijalboard.in → "Lodge a Complaint"', hi: 'delhijalboard.in → "Lodge a Complaint" karein' },
          { en: 'Register with mobile number → fill complaint form', hi: 'Mobile number se register karein → complaint form bharein' },
          { en: 'Select issue: No Supply / Leakage / Water Quality / Bill Dispute', hi: 'Issue select karein: No Supply / Leakage / Water Quality / Bill' },
          { en: 'DJB complaint officer must contact within 24 hours', hi: 'DJB complaint officer ko 24 ghante mein contact karna hota hai' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'MCD Online Complaint — Solid Waste Management',
        desc: { en: 'Municipal Corporation of Delhi — garbage, sweeping, open defecation', hi: 'MCD complaint — garbage pickup, sweeping, open defecation Delhi' },
        url: 'https://mcdonline.nic.in',
        phone: '1533',
        howto: [
          { en: 'Open mcdonline.nic.in → "Complaint" section', hi: 'mcdonline.nic.in → "Complaint" section mein jaayein' },
          { en: 'Select "Solid Waste Management" as department', hi: '"Solid Waste Management" department select karein' },
          { en: 'Enter your zone / ward / address details', hi: 'Zone / ward / address details enter karein' },
          { en: 'MCD officers are assigned per ward — expect contact in 48 hrs', hi: 'MCD officers ward wise assigned hain — 48 ghante mein contact' },
        ],
      },
    ],
  },

  // ── Karnataka ────────────────────────────────────────────────────────────
  Karnataka: {
    police: [
      {
        badge: 'first',
        name: 'Karnataka Police — Emergency & Helpline',
        desc: { en: 'Dial 100 for emergency. Women helpline: 1091. Bengaluru City Police: 080-22943322', hi: 'Emergency: 100 | Women: 1091 | Bengaluru City Police: 080-22943322' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency — 24×7 across Karnataka', hi: 'Police emergency ke liye 100 dial karein — 24×7 puri Karnataka mein' },
          { en: 'Bengaluru City Police control room: 080-22943322', hi: 'Bengaluru City Police control room: 080-22943322' },
          { en: 'Women helpline: 1091 | Cyber crime: 1930', hi: 'Women helpline: 1091 | Cyber crime: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Karnataka State Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person report online — KSP citizen portal', hi: 'Online FIR, complaint, missing person — KSP citizen portal Karnataka' },
        url: 'https://ksp.gov.in/grievances/',
        phone: '100',
        howto: [
          { en: 'Open ksp.gov.in → click "Citizen Services" → "Online Complaint"', hi: 'ksp.gov.in → "Citizen Services" → "Online Complaint" click karein' },
          { en: 'Register with mobile number → select complaint category', hi: 'Mobile number se register karein → complaint category select karein' },
          { en: 'Fill: incident date, place, description, your contact details', hi: 'Bharein: incident date, jagah, description, apni contact details' },
          { en: 'Submit → receive complaint number via SMS — track at ksp.gov.in', hi: 'Submit karein → SMS mein complaint number milega — ksp.gov.in par track karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Karnataka Police — Escalation: SP / IGP',
        desc: { en: 'Complaint ignored by local police? Escalate to SP or IGP of the range', hi: 'Local police ne complaint ignore ki? SP ya IGP ko escalate karein' },
        url: 'https://ksp.gov.in',
        phone: '080-22943322',
        howto: [
          { en: 'Open ksp.gov.in → "Grievance" → "Grievance to SP/IGP"', hi: 'ksp.gov.in → "Grievance" → "Grievance to SP/IGP" mein jaayein' },
          { en: 'Attach your previous complaint number and police response (or silence)', hi: 'Pichla complaint number aur police ka response (ya koi reply nahi) attach karein' },
          { en: 'IGP (Inspector General of Police) must respond within 15 days', hi: 'IGP ko 15 din mein respond karna hota hai' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'BESCOM — Online Complaint (Bangalore & 5 districts)',
        desc: { en: 'Bangalore Electricity Supply Company — Bengaluru, Tumkur, Chitradurga, Davanagere, Shivamogga', hi: 'BESCOM — Bengaluru aur surrounding 5 districts ke liye complaint portal' },
        url: 'https://bescom.karnataka.gov.in/page/Consumer+Helpdesk/Complaint+Registration/en',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) OR open BESCOM portal', hi: '1912 dial karein (24×7) ya BESCOM portal kholen' },
          { en: 'Click "Complaint Registration" → enter RR Number from bill', hi: '"Complaint Registration" → bill se RR Number enter karein' },
          { en: 'Select complaint: Power Failure / Low Voltage / Bill / Meter / New Connection', hi: 'Complaint select: Power Failure / Low Voltage / Bill / Meter chune' },
          { en: 'Submit → SMS confirmation with complaint number', hi: 'Submit karein → SMS mein complaint number milega' },
        ],
      },
      {
        badge: 'first',
        name: 'HESCOM / GESCOM / MESCOM / CESC — Other Districts',
        desc: { en: 'HESCOM (Hubli/North KA) | GESCOM (Gulbarga) | MESCOM (Mangalore) | CESC (Mysore)', hi: 'Hubli/North KA: HESCOM | Gulbarga: GESCOM | Mangalore: MESCOM | Mysore: CESC' },
        url: 'https://hescom.karnataka.gov.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 — routes to your area DISCOM automatically', hi: '1912 dial karein — automatically aapke area ke DISCOM par connect hoga' },
          { en: 'HESCOM (Hubli): hescom.karnataka.gov.in | GESCOM: gescom.in', hi: 'HESCOM (Hubli): hescom.karnataka.gov.in | GESCOM: gescom.in' },
          { en: 'MESCOM (Mangalore): mescom.in | CESC Mysore: cescmysore.karnataka.gov.in', hi: 'MESCOM (Mangalore): mescom.in | CESC Mysore: cescmysore.karnataka.gov.in' },
          { en: 'Go to your DISCOM website → Consumer Services → Complaint', hi: 'Apne DISCOM website → Consumer Services → Complaint mein jaayein' },
        ],
      },
      {
        badge: 'state',
        name: 'KERC — Karnataka Electricity Regulatory Commission',
        desc: { en: 'DISCOM not resolving? Escalate to KERC — state regulator', hi: 'DISCOM resolve nahi kar raha? KERC — state regulator mein escalate karein' },
        url: 'https://kerc.karnataka.gov.in',
        phone: '080-22208456',
        howto: [
          { en: 'Open kerc.karnataka.gov.in → "Consumer Grievance Redressal"', hi: 'kerc.karnataka.gov.in → "Consumer Grievance Redressal" mein jaayein' },
          { en: 'File with your DISCOM complaint reference number', hi: 'Apne DISCOM ke complaint reference number ke saath file karein' },
          { en: 'KERC is appellate authority — binding decision within 60 days', hi: 'KERC appellate authority hai — 60 din mein binding decision' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'BWSSB — Bangalore Water Supply Complaint Portal',
        desc: { en: 'Bangalore Water Supply and Sewerage Board — online complaint', hi: 'Bangalore water supply complaint — BWSSB portal' },
        url: 'https://bwssb.gov.in/eServices/OnlineComplaint',
        phone: '1916',
        howto: [
          { en: 'Open bwssb.gov.in → "eServices" → "Online Complaint"', hi: 'bwssb.gov.in → "eServices" → "Online Complaint" karein' },
          { en: 'Enter your BWSSB RR number from water bill', hi: 'Water bill se BWSSB RR number enter karein' },
          { en: 'Select complaint: No Water / Low Pressure / Leakage / Bill', hi: 'Complaint chune: No Water / Low Pressure / Leakage / Bill' },
          { en: 'BWSSB confirms resolution within 24-48 hours', hi: 'BWSSB 24-48 ghante mein resolution confirm karta hai' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'BBMP Sahaya — Garbage Complaint Portal',
        desc: { en: 'Bruhat Bengaluru Mahanagara Palike — solid waste complaints', hi: 'BBMP Sahaya portal — Bangalore garbage / sweeping complaint' },
        url: 'https://bbmpsahaya.karnataka.gov.in',
        phone: '080-22660000',
        howto: [
          { en: 'Open bbmpsahaya.karnataka.gov.in', hi: 'bbmpsahaya.karnataka.gov.in kholen' },
          { en: 'Click "New Complaint" → select "Solid Waste Management"', hi: '"New Complaint" → "Solid Waste Management" select karein' },
          { en: 'Enter ward number + address + photo of garbage', hi: 'Ward number + address + garbage ki photo enter karein' },
          { en: 'Complaint visible to ward officer immediately', hi: 'Complaint ward officer ko turant visible hoti hai' },
        ],
      },
    ],
  },

  // ── Tamil Nadu ───────────────────────────────────────────────────────────
  'Tamil Nadu': {
    police: [
      {
        badge: 'first',
        name: 'Tamil Nadu Police — Emergency',
        desc: { en: 'TN Police emergency — 100 or Chennai City Police: 044-28447777', hi: 'TN Police emergency — 100 ya Chennai City Police: 044-28447777' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Tamil Nadu', hi: 'Tamil Nadu mein kisi bhi jagah police emergency ke liye 100 dial karein' },
          { en: 'Chennai City Police: 044-28447777 (24×7)', hi: 'Chennai City Police: 044-28447777 (24×7)' },
          { en: 'Women helpline: 1091 | TNSAFE app for women safety in TN', hi: 'Women helpline: 1091 | Women safety ke liye TNSAFE app use karein' },
        ],
      },
      {
        badge: 'first',
        name: 'Tamil Nadu Police — e-Complaint Portal',
        desc: { en: 'File online FIR, lost property, cyber complaint — TN Police citizen services', hi: 'Online FIR, lost property, cyber complaint — TN Police citizen services' },
        url: 'https://eservices.tnpolice.gov.in/CCTNSNICSDC/Index.aspx',
        phone: '100',
        howto: [
          { en: 'Open eservices.tnpolice.gov.in → select your complaint type', hi: 'eservices.tnpolice.gov.in kholen → complaint type select karein' },
          { en: 'Register with Aadhaar-linked mobile → fill incident details', hi: 'Aadhaar-linked mobile se register karein → incident details bharein' },
          { en: 'Select the nearest police station for your area', hi: 'Apne area ka nearest police station select karein' },
          { en: 'Submit → you will receive a complaint reference number via SMS', hi: 'Submit karein → SMS mein complaint reference number milega' },
        ],
      },
      {
        badge: 'state',
        name: 'TN Police — Superintendent of Police (District Escalation)',
        desc: { en: 'Escalate to SP if station-level complaint is ignored', hi: 'Station level par ignore ho to SP (Superintendent of Police) ko escalate karein' },
        url: 'https://www.tnpolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open tnpolice.gov.in → "Grievance" → submit with previous complaint details', hi: 'tnpolice.gov.in → "Grievance" → pichli complaint details ke saath submit karein' },
          { en: 'Or visit SP office of your district with written complaint', hi: 'Ya apne district ke SP office mein written complaint lekar jaayein' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'TANGEDCO — Consumer Complaint Online Portal',
        desc: { en: 'Tamil Nadu Generation & Distribution Corporation — official complaint portal', hi: 'Tamil Nadu electricity complaint — TANGEDCO official portal' },
        url: 'https://app1.tangedco.org/nsconline/grievancestatus.xhtml',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) OR open app1.tangedco.org', hi: '1912 dial karein (24×7) ya app1.tangedco.org kholen' },
          { en: 'Click "Grievance Registration" → enter your Service Connection Number', hi: '"Grievance Registration" → bill se Service Connection Number enter karein' },
          { en: 'Select complaint: No Supply / Low Voltage / Bill Dispute / Meter Issue', hi: 'Complaint: No Supply / Low Voltage / Bill / Meter select karein' },
          { en: 'Submit and note complaint reference — check status at same portal', hi: 'Submit karein, reference note karein — status usi portal par track karein' },
        ],
      },
      {
        badge: 'state',
        name: 'TNERC — Tamil Nadu Electricity Regulatory Commission',
        desc: { en: 'TANGEDCO not resolving? Escalate to TNERC — state regulator', hi: 'TANGEDCO se haal nahi? TNERC — TN state electricity regulator mein jaayein' },
        url: 'https://www.tnerc.gov.in',
        phone: '044-28411376',
        howto: [
          { en: 'Open tnerc.gov.in → "Consumer Grievance Redressal" section', hi: 'tnerc.gov.in → "Consumer Grievance Redressal" mein jaayein' },
          { en: 'File petition with TANGEDCO complaint number and all evidence', hi: 'TANGEDCO complaint number aur evidence ke saath petition file karein' },
          { en: 'TNERC holds hearings — final decision is legally binding', hi: 'TNERC hearing karta hai — final decision legally binding hota hai' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'CMWSSB — Chennai Metro Water Complaint',
        desc: { en: 'Chennai Metropolitan Water Supply and Sewerage Board', hi: 'Chennai water supply complaint — CMWSSB official portal' },
        url: 'https://www.chennaimetrowater.tn.gov.in',
        phone: '044-45674567',
        howto: [
          { en: 'Open chennaimetrowater.tn.gov.in → Complaints section', hi: 'chennaimetrowater.tn.gov.in → Complaints section mein jaayein' },
          { en: 'Enter your Consumer Number and complaint details', hi: 'Consumer Number enter karein aur complaint details dein' },
          { en: 'For areas outside Chennai: contact your local municipality', hi: 'Chennai ke bahar ke areas: apne local municipality se contact karein' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'GCC — Greater Chennai Corporation Complaint',
        desc: { en: 'Greater Chennai Corporation solid waste / sanitation complaint', hi: 'Chennai garbage / sanitation complaint — GCC official portal' },
        url: 'https://www.chennaicorporation.gov.in',
        phone: '044-25384520',
        howto: [
          { en: 'Open chennaicorporation.gov.in → Citizens Services → Complaints', hi: 'chennaicorporation.gov.in → Citizens Services → Complaints mein jaayein' },
          { en: 'Select "Solid Waste Management" and enter your zone/ward', hi: '"Solid Waste Management" select karein, zone/ward enter karein' },
          { en: 'Describe the issue and upload photo evidence', hi: 'Issue describe karein aur photo evidence upload karein' },
        ],
      },
    ],
  },

  // ── Uttar Pradesh ────────────────────────────────────────────────────────
  'Uttar Pradesh': {
    police: [
      {
        badge: 'first',
        name: 'UP Police — Emergency & Helplines',
        desc: { en: 'UP Police 100 emergency | Women: 1090 | Anti-Corruption: 1064', hi: 'UP Police emergency: 100 | Women Helpline: 1090 | Anti-Corruption: 1064' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in UP', hi: 'UP mein kisi bhi jagah police emergency ke liye 100 dial karein' },
          { en: 'Women Power Line UP: 1090 (women specific helpline, very effective in UP)', hi: 'Women Power Line UP: 1090 — yeh UP ki mahila-vishesh helpline hai, bahut effective hai' },
          { en: 'Anti-Corruption Helpline UP: 1064', hi: 'Anti-Corruption Helpline UP: 1064' },
        ],
      },
      {
        badge: 'first',
        name: 'UPCOP — UP Police Citizen Portal',
        desc: { en: 'Online FIR, e-challan, missing person, character certificate — UP Police official portal', hi: 'Online FIR, missing person, character certificate — UP Police official portal' },
        url: 'https://upcop.gov.in',
        phone: '100',
        howto: [
          { en: 'Open upcop.gov.in → select "Citizen Services"', hi: 'upcop.gov.in kholen → "Citizen Services" select karein' },
          { en: 'For FIR: click "Register FIR" → login with mobile OTP', hi: 'FIR ke liye: "Register FIR" click karein → mobile OTP se login karein' },
          { en: 'Fill: complainant details, incident details, accused description (if known)', hi: 'Bharein: complainant details, incident details, accused ka description (agar pata ho)' },
          { en: 'Submit → FIR number milega — use to track at upcop.gov.in', hi: 'Submit karein → FIR number milega — upcop.gov.in par track karo' },
        ],
      },
      {
        badge: 'state',
        name: 'UP Jan Sunwai 1076 — Police Escalation',
        desc: { en: 'Police not registering FIR or taking action? Escalate via CM Helpline 1076', hi: 'FIR nahi likh rahi police? CM Helpline 1076 par escalate karein' },
        url: 'https://jansunwai.up.nic.in',
        phone: '1076',
        howto: [
          { en: 'Dial 1076 OR open jansunwai.up.nic.in', hi: '1076 dial karein ya jansunwai.up.nic.in kholen' },
          { en: 'Select department: "Uttar Pradesh Police"', hi: 'Department: "Uttar Pradesh Police" select karein' },
          { en: 'Describe police inaction with dates and station name — CM office monitors this', hi: 'Police ki inaction dates aur station name ke saath describe karein — CM office monitor karta hai' },
          { en: 'Complaint is escalated to SSP/DIG level within 24 hours', hi: 'Complaint 24 ghante mein SSP/DIG level par escalate hoti hai' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'UPPCL — Consumer Self-Service & Complaint Portal',
        desc: { en: 'UP Power Corporation Limited — online complaint, bill, outage 24×7', hi: 'Uttar Pradesh bijli complaint — UPPCL official portal, 24×7' },
        url: 'https://consumer.uppcl.org/wss/contact',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — works for all UP DISCOMs (PaVVNL/PuVVNL/DVVNL/MVVNL)', hi: '1912 dial karein (24×7) — sabhi UP DISCOMs ke liye kaam karta hai' },
          { en: 'Online: consumer.uppcl.org → login with Account Number + mobile OTP', hi: 'consumer.uppcl.org → Account Number + mobile OTP se login karein' },
          { en: 'Select: Power Cut / Billing / Meter / New Connection → submit', hi: 'Power Cut / Billing / Meter / New Connection select karein → submit' },
          { en: 'UPPCL resolves outage within 24 hrs, billing in 30 days', hi: 'UPPCL outage 24 ghante mein, billing complaint 30 din mein resolve karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'UPERC — Consumer Grievance Redressal Forum',
        desc: { en: 'UPPCL unresolved in 30 days? Escalate to CGRF at your DISCOM circle', hi: '30 din mein resolve nahi? UPERC Consumer Grievance Forum mein jaayein' },
        url: 'https://cgrf.uppcl.org',
        phone: '0522-2204540',
        howto: [
          { en: 'Open cgrf.uppcl.org → "File a Complaint" with UPPCL reference number', hi: 'cgrf.uppcl.org → "File a Complaint" → UPPCL reference number ke saath bharein' },
          { en: 'CGRF (Consumer Grievance Redressal Forum) must decide in 45 days', hi: 'CGRF 45 din mein decision deta hai' },
          { en: 'Still unresolved? Appeal to Electricity Ombudsman at uperc.org', hi: 'Phir bhi nahi? uperc.org par Electricity Ombudsman ko appeal karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'Jal Nigam UP — Consumer Complaint',
        desc: { en: 'Uttar Pradesh Jal Nigam — water supply grievance portal', hi: 'UP water supply complaint — Jal Nigam portal' },
        url: 'https://upjn.org',
        phone: '1916',
        howto: [
          { en: 'Open upjn.org → Consumer Services → Complaint', hi: 'upjn.org → Consumer Services → Complaint mein jaayein' },
          { en: 'For city-level: contact your Nagar Nigam (Lucknow: 0522-2622300)', hi: 'City level ke liye: apne Nagar Nigam ko contact karein' },
          { en: 'Mention connection ID / locality and problem type', hi: 'Connection ID / locality aur problem type mention karein' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'UP CM Helpline 1076 — Sanitation Complaint',
        desc: { en: 'Chief Minister Helpline 1076 — fastest way to report garbage in UP', hi: 'CM Helpline 1076 — UP mein garbage ki fastest complaint' },
        url: 'https://jansunwai.up.nic.in',
        phone: '1076',
        howto: [
          { en: 'Dial 1076 OR open jansunwai.up.nic.in', hi: '1076 dial karein ya jansunwai.up.nic.in kholen' },
          { en: 'Select department: "Nagar Palika / Nagar Nigam"', hi: 'Department select karein: "Nagar Palika / Nagar Nigam"' },
          { en: 'Describe garbage/sanitation problem with full address', hi: 'Garbage/sanitation problem full address ke saath describe karein' },
          { en: 'CM Helpline has 7-day resolution target — strictly monitored', hi: 'CM Helpline ka 7-din mein resolution target hota hai — strictly monitored' },
        ],
      },
    ],
  },

  // ── Rajasthan ────────────────────────────────────────────────────────────
  Rajasthan: {
    police: [
      {
        badge: 'first',
        name: 'Rajasthan Police — Emergency',
        desc: { en: 'Dial 100 | Women helpline: 1090 | Anti-Rowdy: 0141-2744000', hi: 'Emergency: 100 | Women helpline: 1090 | Anti-Rowdy: 0141-2744000' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Rajasthan', hi: 'Rajasthan mein kisi bhi jagah emergency ke liye 100 dial karein' },
          { en: 'Women helpline Rajasthan: 1090 (dedicated women cell)', hi: 'Rajasthan women helpline: 1090 (dedicated women cell)' },
          { en: 'Jaipur City Police: 0141-2744000', hi: 'Jaipur City Police: 0141-2744000' },
        ],
      },
      {
        badge: 'first',
        name: 'Rajasthan Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing report — official Rajasthan Police portal', hi: 'FIR, complaint, missing report — Rajasthan Police official portal' },
        url: 'https://police.rajasthan.gov.in',
        phone: '100',
        howto: [
          { en: 'Open police.rajasthan.gov.in → "Citizen Services" → "Online Complaint"', hi: 'police.rajasthan.gov.in → "Citizen Services" → "Online Complaint" par click karein' },
          { en: 'Login with mobile OTP → fill complaint form with full incident details', hi: 'Mobile OTP se login karein → puri incident details ke saath complaint form bharein' },
          { en: 'Upload evidence if available (photo/video)', hi: 'Evidence available ho to upload karein (photo/video)' },
          { en: 'Submit → note complaint ID — track at police.rajasthan.gov.in', hi: 'Submit karein → complaint ID note karein — police.rajasthan.gov.in par track karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Rajasthan Sampark 181 — Police Escalation',
        desc: { en: 'Police inaction? Escalate via Rajasthan CM Helpline 181 — strictly monitored', hi: 'Police action nahi? Rajasthan CM Helpline 181 par escalate karein — strictly monitored' },
        url: 'https://sampark.rajasthan.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 OR open sampark.rajasthan.gov.in', hi: '181 dial karein ya sampark.rajasthan.gov.in kholen' },
          { en: 'Select department: "Police" → describe complaint with station name and date', hi: 'Department: "Police" → station name aur date ke saath complaint describe karein' },
          { en: 'Complaint forwarded to district SP level — response within 7 days', hi: 'Complaint district SP level par forward hoti hai — 7 din mein response' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'JVVNL — Jaipur Vidyut Vitran Nigam (Jaipur Division)',
        desc: { en: 'JVVNL serves Jaipur, Bharatpur, Kota — helpline 1912 / 1800-180-6507', hi: 'Jaipur, Bharatpur, Kota: JVVNL — 1912 ya 1800-180-6507' },
        url: 'https://jvvnl.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — works for all 3 Rajasthan DISCOMs', hi: '1912 dial karein (24×7 free) — teen DISCOM mein se koi bhi ho' },
          { en: 'JVVNL helpline: 1800-180-6507 | AVVNL: 1800-180-6565 | JdVVNL: 1800-180-6045', hi: 'JVVNL: 1800-180-6507 | AVVNL (Ajmer): 1800-180-6565 | JdVVNL (Jodhpur): 1800-180-6045' },
          { en: 'Online: energy.rajasthan.gov.in → Consumer Services → Complaint', hi: 'energy.rajasthan.gov.in → Consumer Services → Complaint mein jaayein' },
          { en: 'Enter K No. (from bill) → select complaint type → submit', hi: 'Bill se K No. enter karein → complaint type → submit karein' },
        ],
      },
      {
        badge: 'state',
        name: 'RERC — Rajasthan Electricity Regulatory Commission',
        desc: { en: 'DISCOM not resolving? Escalate to RERC CGRF or Electricity Ombudsman', hi: 'DISCOM resolve nahi? RERC CGRF ya Electricity Ombudsman ko escalate karein' },
        url: 'https://www.rerc.rajasthan.gov.in',
        phone: '0141-2741956',
        howto: [
          { en: 'Open rerc.rajasthan.gov.in → "Consumer Grievance" → CGRF complaint', hi: 'rerc.rajasthan.gov.in → "Consumer Grievance" → CGRF complaint bharein' },
          { en: 'CGRF (Jaipur/Ajmer/Jodhpur) hears complaints within 45 days', hi: 'CGRF 45 din mein complaint sunti hai' },
          { en: 'For Ombudsman: appeal after CGRF order within 30 days', hi: 'Ombudsman ke liye: CGRF order ke 30 din ke andar appeal karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHED Rajasthan — Water Complaint Portal',
        desc: { en: 'Public Health Engineering Department — rural and urban water supply', hi: 'Rajasthan water supply complaint — PHED official portal' },
        url: 'https://phed.rajasthan.gov.in',
        phone: '1916',
        howto: [
          { en: 'Open phed.rajasthan.gov.in → Grievance/Complaint section', hi: 'phed.rajasthan.gov.in → Grievance/Complaint section mein jaayein' },
          { en: 'Select district and enter complaint with connection number', hi: 'District select karein, connection number ke saath complaint karein' },
          { en: 'For Jaipur city: contact JMC (Jaipur Municipal Corporation)', hi: 'Jaipur city ke liye: JMC (Jaipur Municipal Corporation) ko contact karein' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'Rajasthan Sampark — Sanitation Complaint',
        desc: { en: 'Rajasthan CM Helpline — fastest channel for municipal complaints', hi: 'Rajasthan CM Helpline — municipal service ki fastest complaint' },
        url: 'https://sampark.rajasthan.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 OR open sampark.rajasthan.gov.in', hi: '181 dial karein ya sampark.rajasthan.gov.in kholen' },
          { en: 'Select department: Nagar Palika / Nagar Nigam', hi: 'Department: Nagar Palika / Nagar Nigam select karein' },
          { en: 'Describe garbage/cleanliness issue with ward and address', hi: 'Ward aur address ke saath garbage/cleanliness issue describe karein' },
          { en: 'Complaint is tracked — Rajasthan Sampark has SLA monitoring', hi: 'Complaint track hoti hai — Rajasthan Sampark mein SLA monitoring hai' },
        ],
      },
    ],
  },

  // ── Gujarat ──────────────────────────────────────────────────────────────
  Gujarat: {
    police: [
      {
        badge: 'first',
        name: 'Gujarat Police — Emergency',
        desc: { en: 'Dial 100 | Women: 1091 | Ahmedabad City Police: 079-25630100', hi: 'Emergency: 100 | Women: 1091 | Ahmedabad City Police: 079-25630100' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Gujarat', hi: 'Gujarat mein emergency ke liye 100 dial karein' },
          { en: 'Ahmedabad City Police: 079-25630100', hi: 'Ahmedabad City Police: 079-25630100' },
          { en: 'Women helpline: 1091 | Cyber crime: 1930', hi: 'Women helpline: 1091 | Cyber crime: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Gujarat Police — e-Complaint Portal',
        desc: { en: 'Online FIR, lost article report, missing person — Gujarat Police citizen services', hi: 'Online FIR, lost article, missing person — Gujarat Police citizen services' },
        url: 'https://eservices.gujaratpolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open eservices.gujaratpolice.gov.in → select service type', hi: 'eservices.gujaratpolice.gov.in kholen → service type select karein' },
          { en: 'Register with mobile → fill FIR / complaint form', hi: 'Mobile se register karein → FIR / complaint form bharein' },
          { en: 'For lost documents (Aadhaar, DL, passport) — select "Loss Report"', hi: 'Khoye documents (Aadhaar, DL, passport) ke liye "Loss Report" select karein' },
          { en: 'Submit → get complaint number via SMS', hi: 'Submit karein → SMS mein complaint number milega' },
        ],
      },
      {
        badge: 'state',
        name: 'Gujarat Police — SP Level Escalation',
        desc: { en: 'Complaint not addressed? Reach SP office or Gujarat Police HQ grievance', hi: 'Complaint address nahi hui? SP office ya Gujarat Police HQ grievance mein jaayein' },
        url: 'https://www.gujaratpolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open gujaratpolice.gov.in → "Citizen Corner" → "Grievance"', hi: 'gujaratpolice.gov.in → "Citizen Corner" → "Grievance" mein jaayein' },
          { en: 'Fill grievance form with your previous complaint number', hi: 'Pichle complaint number ke saath grievance form bharein' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'GUVNL e-Vidhyut Seva — Unified Gujarat Bijli Portal',
        desc: { en: 'Single portal for all Gujarat DISCOMs: PGVCL/MGVCL/UGVCL/DGVCL', hi: 'Gujarat ke sabhi 4 DISCOMs ke liye ek unified portal — portal.guvnl.in' },
        url: 'https://portal.guvnl.in',
        phone: '1912',
        howto: [
          { en: 'Open portal.guvnl.in → Register/Login with mobile OTP', hi: 'portal.guvnl.in kholen → mobile OTP se register/login karein' },
          { en: 'Go to "Complaint Registration" → enter Consumer Number from bill', hi: '"Complaint Registration" → bill se Consumer Number enter karein' },
          { en: 'Select complaint type → submit', hi: 'Complaint type select karein → submit karein' },
          { en: 'Helplines: PGVCL (Surat): 19122 | MGVCL (Ahmedabad): 19124 | UGVCL (North): 19121 | DGVCL (Vadodara): 19123', hi: 'Helplines: PGVCL (Surat): 19122 | MGVCL (Ahmedabad): 19124 | UGVCL (North): 19121 | DGVCL (Vadodara): 19123' },
        ],
      },
      {
        badge: 'state',
        name: 'GERC — Gujarat Electricity Regulatory Commission',
        desc: { en: 'DISCOM complaint unresolved? Escalate to GERC grievance portal', hi: 'DISCOM resolve nahi? GERC — Gujarat state electricity regulator mein jaayein' },
        url: 'https://gercin.org/register-your-complaint-here',
        phone: '079-27661370',
        howto: [
          { en: 'Open gercin.org → "Register Your Complaint Here"', hi: 'gercin.org → "Register Your Complaint Here" par click karein' },
          { en: 'File with your DISCOM complaint number and documents', hi: 'DISCOM complaint number aur documents ke saath file karein' },
          { en: 'GERC binding decision — DISCOM must comply within 30 days', hi: 'GERC ka binding decision — DISCOM ko 30 din mein comply karna hota hai' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'AMC — Ahmedabad Municipal Water Complaint',
        desc: { en: 'Ahmedabad Municipal Corporation — water supply complaints', hi: 'Ahmedabad water supply complaint — AMC portal' },
        url: 'https://ahmedabadcity.gov.in',
        phone: '079-25391800',
        howto: [
          { en: 'Open ahmedabadcity.gov.in → Citizens Services → Complaint', hi: 'ahmedabadcity.gov.in → Citizens Services → Complaint mein jaayein' },
          { en: 'Select "Water Supply" and enter ward/area details', hi: '"Water Supply" select karein, ward/area details enter karein' },
          { en: 'For other Gujarat cities: contact your municipal corporation', hi: 'Gujarat ke dusre cities ke liye: apne municipal corporation ko contact karein' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'AMC Solid Waste Management Complaint',
        desc: { en: 'Ahmedabad Municipal Corporation — garbage complaint portal', hi: 'Ahmedabad garbage complaint — AMC portal' },
        url: 'https://ahmedabadcity.gov.in',
        phone: '079-25391800',
        howto: [
          { en: 'Open ahmedabadcity.gov.in → Complaints → Solid Waste', hi: 'ahmedabadcity.gov.in → Complaints → Solid Waste section' },
          { en: 'Enter your ward number and garbage pickup address', hi: 'Ward number aur garbage pickup address enter karein' },
          { en: 'Attach photo — AMC aims to resolve in 24-48 hours', hi: 'Photo attach karein — AMC 24-48 ghante mein resolve karta hai' },
        ],
      },
    ],
  },

  // ── West Bengal ──────────────────────────────────────────────────────────
  'West Bengal': {
    police: [
      {
        badge: 'first',
        name: 'West Bengal Police — Emergency',
        desc: { en: 'Dial 100 | Kolkata Police: 100 / 1090 | Women: 1091', hi: 'Emergency: 100 | Kolkata Police: 100 / 1090 | Women: 1091' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in West Bengal', hi: 'West Bengal mein police emergency ke liye 100 dial karein' },
          { en: 'Kolkata Police helpline: 1090', hi: 'Kolkata Police helpline: 1090' },
          { en: 'Women helpline: 1091 | Cyber crime: 1930', hi: 'Women helpline: 1091 | Cyber crime: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'West Bengal Police — Online Complaint',
        desc: { en: 'File FIR, missing person, online complaint — WB Police citizen portal', hi: 'FIR, missing person, online complaint — WB Police citizen portal' },
        url: 'https://wbpolice.gov.in/citizen-services',
        phone: '100',
        howto: [
          { en: 'Open wbpolice.gov.in → "Citizen Services" → select complaint type', hi: 'wbpolice.gov.in → "Citizen Services" → complaint type select karein' },
          { en: 'Fill online complaint form with incident date, place, details', hi: 'Online complaint form mein incident date, jagah, details bharein' },
          { en: 'For Kolkata: Kolkata Police portal: kolkatapolice.gov.in', hi: 'Kolkata ke liye: Kolkata Police portal: kolkatapolice.gov.in' },
          { en: 'Submit → note acknowledgment number for follow-up', hi: 'Submit karein → follow-up ke liye acknowledgment number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'WB Police — SP / DIG Level Escalation',
        desc: { en: 'Police ignoring complaint? Approach SP of district or file online grievance', hi: 'Police complaint ignore kar rahi? SP se milein ya online grievance karein' },
        url: 'https://wbpolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open wbpolice.gov.in → "Grievance" → submit with previous reference', hi: 'wbpolice.gov.in → "Grievance" → pichle reference ke saath submit karein' },
          { en: 'Or visit SP (Superintendent of Police) office of your district', hi: 'Ya apne district ke SP office mein visit karein' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'WBSEDCL — Online Complaint Portal (Non-Kolkata Areas)',
        desc: { en: 'WB State Electricity Distribution — serves rest of WB excluding Kolkata', hi: 'West Bengal (Kolkata ke bahar) electricity complaint — WBSEDCL portal' },
        url: 'https://portal.wbsedcl.in/irj/go/km/docs/bills/IFRAME/ComplaintRegistrationWithoutLogin.html',
        phone: '19121',
        howto: [
          { en: 'Dial 19121 (24×7 free) OR open WBSEDCL portal above', hi: '19121 dial karein (24×7) ya WBSEDCL portal kholen' },
          { en: 'Click "Complaint Registration" → enter Consumer ID from bill', hi: '"Complaint Registration" → bill se Consumer ID enter karein' },
          { en: 'Select complaint: No Supply / Low Voltage / Bill / Meter → submit', hi: 'No Supply / Low Voltage / Bill / Meter select karein → submit karein' },
          { en: 'WhatsApp complaints: +91 84337 19121', hi: 'WhatsApp par complaint: +91 84337 19121 par message karein' },
        ],
      },
      {
        badge: 'first',
        name: 'CESC — Complaint Portal (Kolkata City & Suburbs)',
        desc: { en: 'CESC serves Kolkata city and adjoining areas — helpline 19125', hi: 'Kolkata city aur adjoining areas: CESC complaint portal' },
        url: 'https://www.cesc.co.in/complaintlogin.aspx',
        phone: '19125',
        howto: [
          { en: 'Dial 19125 (24×7) for Kolkata electricity complaints', hi: 'Kolkata electricity complaint ke liye 19125 dial karein (24×7)' },
          { en: 'Online: cesc.co.in/complaintlogin.aspx → enter Consumer ID', hi: 'cesc.co.in/complaintlogin.aspx → Consumer ID se login karein' },
          { en: 'Select complaint type → submit → note complaint number', hi: 'Complaint type select karein → submit → complaint number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'WBERC — West Bengal Electricity Regulatory Commission',
        desc: { en: 'DISCOM not resolving? Escalate to WBERC CGRF', hi: 'DISCOM resolve nahi? WBERC — WB state electricity regulator mein jaayein' },
        url: 'https://www.wberc.gov.in',
        phone: '033-23390344',
        howto: [
          { en: 'Open wberc.gov.in → "Consumer Grievance" section', hi: 'wberc.gov.in → "Consumer Grievance" section mein jaayein' },
          { en: 'File with WBSEDCL/CESC complaint number and correspondence', hi: 'WBSEDCL/CESC complaint number aur correspondence ke saath file karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'KMC Water Supply Complaint (Kolkata)',
        desc: { en: 'Kolkata Municipal Corporation — water supply complaint portal', hi: 'Kolkata water supply complaint — KMC portal' },
        url: 'https://www.kmcgov.in',
        phone: '1916',
        howto: [
          { en: 'Open kmcgov.in → e-Services → Complaint Registration', hi: 'kmcgov.in → e-Services → Complaint Registration mein jaayein' },
          { en: 'Select "Water Supply" and fill your ward/borough details', hi: '"Water Supply" select karein, ward/borough details bharein' },
          { en: 'For KMDA areas outside KMC: contact KMDA 033-22861212', hi: 'KMC ke bahar KMDA areas ke liye: 033-22861212 call karein' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'KMC Solid Waste Complaint (Kolkata)',
        desc: { en: 'Kolkata garbage pickup, open dumping, sweeping complaints — KMC', hi: 'Kolkata garbage complaint — KMC portal' },
        url: 'https://www.kmcgov.in',
        phone: '033-22861000',
        howto: [
          { en: 'Open kmcgov.in → e-Services → Complaint → Solid Waste', hi: 'kmcgov.in → e-Services → Complaint → Solid Waste mein jaayein' },
          { en: 'Enter your borough and ward number with address', hi: 'Borough aur ward number with address enter karein' },
          { en: 'Attach photo and submit — KMC acts within 48 hours', hi: 'Photo attach karein, submit karein — KMC 48 ghante mein action leta hai' },
        ],
      },
    ],
  },

  // ── Haryana ──────────────────────────────────────────────────────────────
  Haryana: {
    police: [
      {
        badge: 'first',
        name: 'Haryana Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Faridabad/Gurugram: 0124-2580100', hi: 'Emergency: 100 | Women: 1091 | Gurugram Police: 0124-2580100' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Haryana', hi: 'Haryana mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline: 1091 | Cyber crime: 1930', hi: 'Women helpline: 1091 | Cyber crime helpline: 1930' },
          { en: 'Anti-Corruption Helpline Haryana: 1064', hi: 'Haryana Anti-Corruption Helpline: 1064' },
        ],
      },
      {
        badge: 'first',
        name: 'Haryana Police — Online Complaint Portal',
        desc: { en: 'File FIR, missing person, lost article, e-complaint — Haryana Police online', hi: 'FIR, missing person, lost article — Haryana Police online complaint portal' },
        url: 'https://haryanapolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open haryanapolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'haryanapolice.gov.in → "Citizen Services" → "Online Complaint" par click karein' },
          { en: 'Register with mobile OTP → select complaint type', hi: 'Mobile OTP se register karein → complaint type select karein' },
          { en: 'Fill: incident date, location, description, your contact details', hi: 'Bharein: incident date, jagah, description, contact details' },
          { en: 'Submit → note complaint reference number via SMS', hi: 'Submit karein → SMS mein complaint reference number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'CM Window Haryana — Police Escalation',
        desc: { en: 'Police not acting? Escalate via CM Window 1100 — strictly monitored', hi: 'Police action nahi? CM Window 1100 par escalate karein — strictly monitored' },
        url: 'https://cmwindow.haryana.gov.in',
        phone: '1100',
        howto: [
          { en: 'Dial 1100 OR open cmwindow.haryana.gov.in', hi: '1100 dial karein ya cmwindow.haryana.gov.in kholen' },
          { en: 'Select department: "Home / Police"', hi: 'Department: "Home / Police" select karein' },
          { en: 'Describe police inaction with station name and date', hi: 'Police station name aur date ke saath inaction describe karein' },
          { en: 'CM Window escalates to SP level within 24 hours — very effective', hi: 'CM Window 24 ghante mein SP level par escalate karta hai — bahut effective hai' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'UHBVN — North Haryana Bijli Complaint (Ambala/Karnal/Hisar)',
        desc: { en: 'Uttar Haryana Bijli Vitran Nigam — serves North Haryana', hi: 'UHBVN — North Haryana (Ambala, Karnal, Hisar, Rohtak) ke liye' },
        url: 'https://chs.uhbvn.org.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) for North Haryana electricity complaints', hi: 'North Haryana bijli complaint ke liye 1912 dial karein (24×7)' },
          { en: 'Online: chs.uhbvn.org.in → Consumer Services → Complaint', hi: 'chs.uhbvn.org.in → Consumer Services → Complaint mein jaayein' },
          { en: 'Enter Account Number from bill → select complaint type → submit', hi: 'Bill se Account Number enter karein → complaint type → submit karein' },
          { en: 'Power theft complaint: 1800-180-7332', hi: 'Bijli chori ki complaint: 1800-180-7332' },
        ],
      },
      {
        badge: 'first',
        name: 'DHBVN — South Haryana Bijli Complaint (Gurugram/Faridabad)',
        desc: { en: 'Dakshin Haryana Bijli Vitran Nigam — serves South Haryana', hi: 'DHBVN — South Haryana (Gurugram, Faridabad, Rewari) ke liye' },
        url: 'https://dhbvn.org.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) for South Haryana electricity complaints', hi: 'South Haryana bijli complaint ke liye 1912 dial karein' },
          { en: 'Online: dhbvn.org.in → Consumer Services → Complaint Registration', hi: 'dhbvn.org.in → Consumer Services → Complaint Registration karein' },
          { en: 'Enter Account Number from bill and describe the issue', hi: 'Bill se Account Number enter karein aur issue describe karein' },
        ],
      },
      {
        badge: 'state',
        name: 'HERC — Haryana Electricity Regulatory Commission',
        desc: { en: 'DISCOM not resolving? Escalate to HERC or CGRF', hi: 'DISCOM resolve nahi? HERC ya CGRF mein escalate karein' },
        url: 'https://herc.gov.in',
        phone: '0172-2704934',
        howto: [
          { en: 'Open herc.gov.in → "Consumer Grievance" / CGRF section', hi: 'herc.gov.in → "Consumer Grievance" / CGRF section mein jaayein' },
          { en: 'File with UHBVN/DHBVN complaint reference number', hi: 'UHBVN/DHBVN complaint reference number ke saath file karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'HSVP / PHD Haryana — Water Complaint',
        desc: { en: 'Haryana water supply complaint — Public Health Department', hi: 'Haryana water supply complaint — PHD portal' },
        url: 'https://phdharyana.gov.in',
        phone: '1916',
        howto: [
          { en: 'Open phdharyana.gov.in → Grievances section', hi: 'phdharyana.gov.in → Grievances section mein jaayein' },
          { en: 'Enter your district and complaint details', hi: 'District enter karein aur complaint details dein' },
          { en: 'For Gurugram: contact GMDA Water Department: 0124-4060000', hi: 'Gurugram ke liye: GMDA Water Department: 0124-4060000' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'GMDA Complaint Portal — Gurugram Garbage',
        desc: { en: 'Gurugram Metropolitan Development Authority — garbage & sanitation', hi: 'Gurugram garbage complaint — GMDA official portal' },
        url: 'https://services.gmda.gov.in',
        phone: '1800-180-1817',
        howto: [
          { en: 'Open services.gmda.gov.in → "Complaint Registration"', hi: 'services.gmda.gov.in → "Complaint Registration" mein jaayein' },
          { en: 'Select complaint type: Garbage Pickup / Open Dumping / Sweeping', hi: 'Complaint type: Garbage Pickup / Open Dumping / Sweeping select karein' },
          { en: 'Enter your sector/colony and house address', hi: 'Sector/colony aur house address enter karein' },
          { en: 'Upload photo — GMDA complaint officer contacts within 48 hrs', hi: 'Photo upload karein — GMDA 48 ghante mein contact karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'CM Window Haryana — State Complaint',
        desc: { en: 'Chief Minister Window — for escalating unresolved Haryana complaints', hi: 'CM Window Haryana — unresolved complaint escalation ke liye' },
        url: 'https://cmwindow.haryana.gov.in',
        phone: '1100',
        howto: [
          { en: 'Dial 1100 OR open cmwindow.haryana.gov.in', hi: '1100 dial karein ya cmwindow.haryana.gov.in kholen' },
          { en: 'Register with Aadhaar-linked mobile', hi: 'Aadhaar-linked mobile se register karein' },
          { en: 'Select department: Urban Local Bodies / Municipal Corporation', hi: 'Department: Urban Local Bodies / Municipal Corporation select karein' },
          { en: 'Describe complaint with previous reference number — strictly tracked', hi: 'Pichle complaint reference number ke saath describe karein — strictly tracked' },
        ],
      },
    ],
  },

  // ── Punjab ────────────────────────────────────────────────────────────────
  Punjab: {
    police: [
      {
        badge: 'first',
        name: 'Punjab Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Amritsar/Ludhiana city police: 112', hi: 'Emergency: 100 | Women: 1091 | Punjab Police 112 — unified emergency' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 or 112 for police emergency anywhere in Punjab', hi: 'Punjab mein police emergency ke liye 100 ya 112 dial karein' },
          { en: 'Women Helpline Punjab: 1091', hi: 'Punjab women helpline: 1091' },
          { en: 'Anti-Gangster Helpline Punjab: 9041013521', hi: 'Anti-Gangster Helpline Punjab: 9041013521' },
        ],
      },
      {
        badge: 'first',
        name: 'Punjab Police — Online Complaint Portal',
        desc: { en: 'File FIR, e-complaint, missing person, lost property — Punjab Police online', hi: 'FIR, e-complaint, missing person — Punjab Police online portal' },
        url: 'https://punjabpolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open punjabpolice.gov.in → "Citizen Corner" → "Online Complaint"', hi: 'punjabpolice.gov.in → "Citizen Corner" → "Online Complaint" karein' },
          { en: 'Select complaint type: FIR / Complaint / Missing Person / Lost Property', hi: 'Type select karein: FIR / Complaint / Missing Person / Lost Property' },
          { en: 'Login with mobile OTP and fill complete incident details', hi: 'Mobile OTP se login karein aur puri incident details bharein' },
          { en: 'Submit → note acknowledgment number — track at punjabpolice.gov.in', hi: 'Submit → acknowledgment number note karein — punjabpolice.gov.in par track karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Punjab Police — SP Level Escalation',
        desc: { en: 'Police station not responding? Escalate to SP or Punjab Police HQ', hi: 'Police station respond nahi kar raha? SP ya Punjab Police HQ ko escalate karein' },
        url: 'https://punjabpolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open punjabpolice.gov.in → "Grievance" section', hi: 'punjabpolice.gov.in → "Grievance" section mein jaayein' },
          { en: 'Or write directly to SP (Superintendent of Police) of your district', hi: 'Ya apne district ke SP (Superintendent of Police) ko directly likhein' },
          { en: 'SP is bound to order FIR under CrPC Section 154(3) if refused', hi: 'SP ko CrPC Section 154(3) ke tahat FIR register karwani hogi' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'PSPCL — Consumer Grievance Management System',
        desc: { en: 'Punjab State Power Corporation Ltd — official complaint portal (GRMS)', hi: 'Punjab electricity complaint — PSPCL GRMS official portal' },
        url: 'https://grms.pspcl.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — PSPCL helpline Punjab', hi: '1912 dial karein (24×7 free) — Punjab PSPCL ka official helpline' },
          { en: 'Online: grms.pspcl.in → Register/Login → file complaint', hi: 'grms.pspcl.in → Register/Login → complaint file karein' },
          { en: 'Enter Account ID from bill → select complaint type → submit', hi: 'Bill se Account ID enter karein → complaint type → submit karein' },
          { en: 'Missed call callback: 1800-180-1512 | WhatsApp: 9646101912', hi: 'Missed call callback: 1800-180-1512 | WhatsApp: 9646101912' },
        ],
      },
      {
        badge: 'state',
        name: 'PSERC — Punjab State Electricity Regulatory Commission',
        desc: { en: 'PSPCL unresolved? Escalate to PSERC CGRF or Ombudsman', hi: 'PSPCL resolve nahi? PSERC CGRF ya Ombudsman ko escalate karein' },
        url: 'https://pserc.gov.in',
        phone: '0172-2703096',
        howto: [
          { en: 'Open pserc.gov.in → "Consumer Grievance" → CGRF complaint', hi: 'pserc.gov.in → "Consumer Grievance" → CGRF complaint bharein' },
          { en: 'CGRF decides within 45 days — Ombudsman within 60 days', hi: 'CGRF 45 din mein, Ombudsman 60 din mein decision deta hai' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'Punjab Grievance Portal — Sanitation',
        desc: { en: 'Punjab state grievance portal for all civic complaints including garbage', hi: 'Punjab garbage/safai complaint — state grievance portal' },
        url: 'https://punjabpgrs.gov.in',
        phone: '0172-2970125',
        howto: [
          { en: 'Open punjabpgrs.gov.in → Register/Login', hi: 'punjabpgrs.gov.in → Register/Login karein' },
          { en: 'Select department: "Local Government" for garbage/sanitation', hi: 'Department: "Local Government" — garbage/sanitation ke liye' },
          { en: 'File complaint with address and photo evidence', hi: 'Address aur photo evidence ke saath complaint karein' },
        ],
      },
    ],
  },

  // ── Madhya Pradesh ────────────────────────────────────────────────────────
  'Madhya Pradesh': {
    police: [
      {
        badge: 'first',
        name: 'Madhya Pradesh Police — Emergency',
        desc: { en: 'Dial 100 | Women: 1091 | Bhopal City Police: 0755-2443200', hi: 'Emergency: 100 | Women: 1091 | Bhopal City Police: 0755-2443200' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Madhya Pradesh', hi: 'MP mein police emergency ke liye 100 dial karein' },
          { en: 'MP Women Helpline: 1090 (dedicated women cell)', hi: 'MP Women Helpline: 1090 — dedicated women cell' },
          { en: 'Bhopal City Police: 0755-2443200', hi: 'Bhopal City Police: 0755-2443200' },
        ],
      },
      {
        badge: 'first',
        name: 'MP Police — Online Complaint / e-FIR Portal',
        desc: { en: 'File e-FIR, complaint, missing person — Madhya Pradesh Police citizen portal', hi: 'e-FIR, complaint, missing person — MP Police citizen portal' },
        url: 'https://mppolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open mppolice.gov.in → "Citizen Services" → select complaint type', hi: 'mppolice.gov.in → "Citizen Services" → complaint type select karein' },
          { en: 'For e-FIR: click "Register FIR" → login with mobile OTP', hi: 'e-FIR ke liye: "Register FIR" → mobile OTP se login karein' },
          { en: 'Fill incident date, location, full description of crime/complaint', hi: 'Incident date, jagah, crime/complaint ka pura description bharein' },
          { en: 'Submit → FIR number milega — track at mppolice.gov.in', hi: 'Submit → FIR number milega — mppolice.gov.in par track karein' },
        ],
      },
      {
        badge: 'state',
        name: 'MP CM Helpline 181 — Police Escalation',
        desc: { en: 'Police not registering FIR? Escalate via MP CM Helpline 181', hi: 'FIR nahi likh rahi police? MP CM Helpline 181 par escalate karein' },
        url: 'https://samadhan.mp.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 OR open samadhan.mp.gov.in', hi: '181 dial karein ya samadhan.mp.gov.in kholen' },
          { en: 'Select department: "Police"', hi: 'Department: "Police" select karein' },
          { en: 'Describe police inaction with station name, date, and complaint details', hi: 'Station name, date aur complaint details ke saath police inaction describe karein' },
          { en: 'CM Helpline 181 escalates to SP level — response within 7 days', hi: 'CM Helpline 181 SP level par escalate karta hai — 7 din mein response' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'MPCZ — Central Zone Bijli Complaint (Bhopal/Narmadapuram)',
        desc: { en: 'MP Central Zone Power Distribution — serves Bhopal, Narmadapuram, Raisen, Sehore', hi: 'MPCZ — Bhopal, Narmadapuram ke liye bijli complaint portal' },
        url: 'https://portal.mpcz.in/web/',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) for all MP DISCOM zones', hi: '1912 dial karein (24×7) — MP ke teeno zones ke liye kaam karta hai' },
          { en: 'MPCZ (Bhopal): portal.mpcz.in | MPEZ (Jabalpur): mpez.co.in | MPWZ (Indore): mpwz.co.in', hi: 'MPCZ (Bhopal): portal.mpcz.in | MPEZ (Jabalpur): mpez.co.in | MPWZ (Indore): mpwz.co.in' },
          { en: 'Open your zone portal → Login with Consumer Number → Lodge Complaint', hi: 'Apne zone ka portal kholen → Consumer Number se login → Lodge Complaint karein' },
          { en: 'WhatsApp for MPCZ: +91 755 255 1222', hi: 'MPCZ WhatsApp complaint: +91 755 255 1222' },
        ],
      },
      {
        badge: 'state',
        name: 'MPERC — MP Electricity Regulatory Commission',
        desc: { en: 'MP DISCOM not resolving? Escalate to MPERC CGRF', hi: 'MP DISCOM resolve nahi? MPERC CGRF mein escalate karein' },
        url: 'https://mperc.in',
        phone: '0755-2556574',
        howto: [
          { en: 'Open mperc.in → "Consumer Grievance Redressal Forum"', hi: 'mperc.in → "Consumer Grievance Redressal Forum" mein jaayein' },
          { en: 'File with your DISCOM complaint number and documents', hi: 'DISCOM complaint number aur documents ke saath file karein' },
          { en: 'CGRF at each DISCOM circle level — 45-day resolution mandate', hi: 'Har DISCOM circle par CGRF hai — 45 din mein resolution mandatory' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'CM Helpline 181 — MP Sanitation Complaint',
        desc: { en: 'Madhya Pradesh CM Helpline 181 — fastest complaint resolution', hi: 'MP CM Helpline 181 — garbage/safai ki fastest complaint' },
        url: 'https://samadhan.mp.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 OR open samadhan.mp.gov.in', hi: '181 dial karein ya samadhan.mp.gov.in kholen' },
          { en: 'Select department: Nagar Nigam / Nagar Palika', hi: 'Department: Nagar Nigam / Nagar Palika select karein' },
          { en: 'Describe garbage issue with address — strict SLA monitoring', hi: 'Address ke saath garbage issue describe karein — strict SLA monitoring' },
        ],
      },
    ],
  },

  // ── Kerala ────────────────────────────────────────────────────────────────
  Kerala: {
    police: [
      {
        badge: 'first',
        name: 'Kerala Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Kerala Police Cyberdome: 0484-2722900', hi: 'Emergency: 100 | Women: 1091 | Kerala Cyberdome: 0484-2722900' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Kerala', hi: 'Kerala mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline: 1091 | Pink Police Patrol: 1515 (Kerala)', hi: 'Women helpline: 1091 | Kerala Pink Police Patrol: 1515' },
          { en: 'Cyber crime helpline: 1930 | Cyberdome: 0484-2722900', hi: 'Cyber crime: 1930 | Cyberdome Kochi: 0484-2722900' },
        ],
      },
      {
        badge: 'first',
        name: 'Kerala Police — Citizen Portal Online Complaint',
        desc: { en: 'File FIR, complaint, missing person — Kerala Police citizen portal', hi: 'FIR, complaint, missing person — Kerala Police citizen portal' },
        url: 'https://citizenportal.keralapolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open citizenportal.keralapolice.gov.in → select complaint type', hi: 'citizenportal.keralapolice.gov.in kholen → complaint type select karein' },
          { en: 'Register with mobile number → fill online complaint form', hi: 'Mobile number se register karein → online complaint form bharein' },
          { en: 'For women safety: select "Women Complaint" — goes to Women Cell directly', hi: 'Women safety ke liye "Women Complaint" select karein — directly Women Cell ko jaata hai' },
          { en: 'Submit → complaint number via SMS — station must respond within 72 hours', hi: 'Submit → SMS mein complaint number — station ko 72 ghante mein respond karna hota hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Kerala Police — SP / District Police HQ Escalation',
        desc: { en: 'Station-level complaint ignored? Escalate to SP of your district', hi: 'Station complaint ignore hui? Apne district ke SP ko escalate karein' },
        url: 'https://www.keralapolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open keralapolice.gov.in → "Citizens Corner" → "Grievance"', hi: 'keralapolice.gov.in → "Citizens Corner" → "Grievance" mein jaayein' },
          { en: 'Or write to SP of your district with previous complaint number', hi: 'Ya apne district ke SP ko pichle complaint number ke saath written complaint dein' },
          { en: 'Kerala CM\'s Grievance Cell: 0471-2333100 (Thiruvananthapuram)', hi: 'Kerala CM Grievance Cell: 0471-2333100 (Thiruvananthapuram)' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'KSEB — Consumer Self-Service Complaint Portal',
        desc: { en: 'Kerala State Electricity Board — 24×7 helpline 1912 and online portal', hi: 'Kerala State Electricity Board — 1912 ya online complaint' },
        url: 'https://wss.kseb.in/selfservices/showAnonymousComplaint.do',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) OR 1800-425-0099 — KSEB helpline', hi: '1912 dial karein (24×7 free) ya 1800-425-0099 — KSEB helpline' },
          { en: 'Online: wss.kseb.in → "Anonymous Complaint" — no login needed', hi: 'wss.kseb.in → "Anonymous Complaint" — login ki zaroorat nahi' },
          { en: 'Enter your Consumer Number from bill → select complaint type', hi: 'Bill se Consumer Number enter karein → complaint type select karein' },
          { en: 'WhatsApp: +91 94960 01912 | Email: ccc@kseb.in', hi: 'WhatsApp: +91 94960 01912 | Email: ccc@kseb.in' },
        ],
      },
      {
        badge: 'state',
        name: 'KSERC — Kerala State Electricity Regulatory Commission',
        desc: { en: 'KSEB complaint unresolved? Escalate to KSERC CGRF', hi: 'KSEB resolve nahi? KSERC — Kerala state electricity regulator mein jaayein' },
        url: 'https://ksercgrf.kerala.gov.in',
        phone: '0471-2735522',
        howto: [
          { en: 'Open ksercgrf.kerala.gov.in → file grievance with KSEB complaint number', hi: 'ksercgrf.kerala.gov.in → KSEB complaint number ke saath grievance file karein' },
          { en: 'CGRF (Consumer Grievance Redressal Forum) at district level', hi: 'CGRF district level par available hai — 45 din mein decision' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'Kerala Water Authority — Consumer Complaint',
        desc: { en: 'KWA official complaint portal for water supply issues in Kerala', hi: 'Kerala water supply complaint — KWA official portal' },
        url: 'https://www.kwa.kerala.gov.in',
        phone: '0471-2738300',
        howto: [
          { en: 'Open kwa.kerala.gov.in → Consumer Services → Complaint', hi: 'kwa.kerala.gov.in → Consumer Services → Complaint mein jaayein' },
          { en: 'Enter Connection Number from water bill', hi: 'Water bill se Connection Number enter karein' },
          { en: 'Describe water supply issue: No Supply / Leakage / Quality', hi: 'Water supply issue describe karein: No Supply / Leakage / Quality' },
        ],
      },
    ],
  },

  // ── Bihar ─────────────────────────────────────────────────────────────────
  Bihar: {
    police: [
      {
        badge: 'first',
        name: 'Bihar Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Patna City Police: 0612-2201977', hi: 'Emergency: 100 | Women: 1091 | Patna City Police: 0612-2201977' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Bihar', hi: 'Bihar mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Bihar: 1091', hi: 'Bihar women helpline: 1091' },
          { en: 'Bihar Anti-Corruption Helpline: 1064', hi: 'Bihar Anti-Corruption Helpline: 1064' },
        ],
      },
      {
        badge: 'first',
        name: 'Bihar Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person — Bihar Police official portal', hi: 'FIR, complaint, missing person — Bihar Police official portal' },
        url: 'https://biharpolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open biharpolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'biharpolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Login with mobile OTP → select complaint type', hi: 'Mobile OTP se login karein → complaint type select karein' },
          { en: 'Fill complete incident details with date, place, accused info if known', hi: 'Incident date, jagah, accused info (agar pata ho) ke saath details bharein' },
          { en: 'Submit and note complaint number for tracking', hi: 'Submit karein aur complaint number note karein — tracking ke liye' },
        ],
      },
      {
        badge: 'state',
        name: 'Bihar CM Helpline 15545 — Police Escalation',
        desc: { en: 'Police not taking action? Escalate via Bihar CM Helpline 15545', hi: 'Police action nahi le rahi? Bihar CM Helpline 15545 par escalate karein' },
        url: 'https://jansampark.bihar.gov.in',
        phone: '15545',
        howto: [
          { en: 'Dial 15545 OR open jansampark.bihar.gov.in', hi: '15545 dial karein ya jansampark.bihar.gov.in kholen' },
          { en: 'Select department: "Police" → describe complaint with station name', hi: 'Department: "Police" → station name ke saath complaint describe karein' },
          { en: 'CM Helpline forwards to DM/SP level — response within 7 days', hi: 'CM Helpline DM/SP level par forward karta hai — 7 din mein response' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'NBPDCL — North Bihar Power Distribution Complaint',
        desc: { en: 'NBPDCL serves North Bihar — Patna, Muzaffarpur, Darbhanga, Vaishali etc.', hi: 'NBPDCL — North Bihar: Patna, Muzaffarpur, Darbhanga ke liye' },
        url: 'https://nbpdcl.co.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — works for both NBPDCL and SBPDCL', hi: '1912 dial karein (24×7 free) — NBPDCL aur SBPDCL dono ke liye' },
          { en: 'NBPDCL toll-free: 1800-345-6555 | SBPDCL: 1800-345-6126', hi: 'NBPDCL toll-free: 1800-345-6555 | SBPDCL toll-free: 1800-345-6126' },
          { en: 'Online: nbpdcl.co.in → Consumer Services → Complaint | sbpdcl.co.in for South Bihar', hi: 'North Bihar: nbpdcl.co.in → Consumer Services → Complaint | South Bihar: sbpdcl.co.in' },
          { en: 'Enter Consumer ID from bill → select complaint type → submit', hi: 'Bill se Consumer ID enter karein → complaint type → submit karein' },
        ],
      },
      {
        badge: 'state',
        name: 'BSPHCL CGRF — Bihar Consumer Grievance Forum',
        desc: { en: 'DISCOM not resolving? File at CGRF — Bihar electricity regulator', hi: 'DISCOM resolve nahi? BSPHCL CGRF mein complaint karein' },
        url: 'https://cgrf.bsphcl.co.in',
        phone: '0612-2504891',
        howto: [
          { en: 'Open cgrf.bsphcl.co.in → register complaint with NBPDCL/SBPDCL reference', hi: 'cgrf.bsphcl.co.in → NBPDCL/SBPDCL reference ke saath complaint register karein' },
          { en: 'CGRF circle offices in 11 SBPDCL + 9 NBPDCL circles', hi: 'CGRF offices 11 SBPDCL aur 9 NBPDCL circles mein hain' },
          { en: 'Decision within 45 days — appeal to Electricity Ombudsman after', hi: '45 din mein decision — baad mein Electricity Ombudsman ko appeal karein' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'Bihar CM Helpline 15545 — Sanitation',
        desc: { en: 'Bihar Chief Minister Helpline for civic complaints including garbage', hi: 'Bihar CM Helpline — garbage/safai ki fastest complaint' },
        url: 'https://jansampark.bihar.gov.in',
        phone: '15545',
        howto: [
          { en: 'Dial 15545 (CM Helpline Bihar) for fastest resolution', hi: '15545 dial karein — Bihar CM Helpline, fastest resolution' },
          { en: 'Select Nagar Nigam/Nagar Parishad for sanitation complaints', hi: 'Sanitation ke liye Nagar Nigam/Nagar Parishad select karein' },
        ],
      },
    ],
  },

  // ── Andhra Pradesh ────────────────────────────────────────────────────────
  'Andhra Pradesh': {
    police: [
      {
        badge: 'first',
        name: 'Andhra Pradesh Police — Emergency',
        desc: { en: 'Dial 100 | Women: 1091 | Vijayawada City Police: 0866-2570013', hi: 'Emergency: 100 | Women: 1091 | Vijayawada City Police: 0866-2570013' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Andhra Pradesh', hi: 'Andhra Pradesh mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline AP: 1091 | SHE Teams AP (women patrol): 100', hi: 'AP women helpline: 1091 | SHE Teams AP (women patrol): 100' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime ke liye turant 1930 dial karein' },
        ],
      },
      {
        badge: 'first',
        name: 'AP Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person, lost article — AP Police official portal', hi: 'FIR, complaint, missing person — AP Police official portal' },
        url: 'https://appolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open appolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'appolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Register with mobile OTP → select complaint type', hi: 'Mobile OTP se register karein → complaint type select karein' },
          { en: 'Fill full incident details with time, location, description', hi: 'Time, location, full description ke saath incident details bharein' },
          { en: 'Submit → complaint number via SMS for tracking', hi: 'Submit → SMS mein complaint number — tracking ke liye' },
        ],
      },
      {
        badge: 'state',
        name: 'AP Police — SP Escalation / SPOC',
        desc: { en: 'Police ignoring complaint? Escalate to SP — AP Police Grievance portal', hi: 'Complaint ignore ho rahi? SP ko escalate karein — AP Police grievance portal' },
        url: 'https://pgr.appolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open pgr.appolice.gov.in → Police Grievance Redressal', hi: 'pgr.appolice.gov.in → Police Grievance Redressal mein jaayein' },
          { en: 'Submit grievance with previous complaint details', hi: 'Pichli complaint details ke saath grievance submit karein' },
          { en: 'Grievance is forwarded to SP of the district within 24 hours', hi: 'Grievance 24 ghante mein district ke SP ko forward hoti hai' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'APEPDCL — Eastern AP Power Complaint (Vizag/Rajam)',
        desc: { en: 'APEPDCL serves East & North AP — Visakhapatnam, Srikakulam, Vizianagaram', hi: 'APEPDCL — East/North AP: Vizag, Srikakulam ke liye complaint portal' },
        url: 'https://www.apeasternpower.com/customersComplaintRegister',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — works for both APEPDCL and APSPDCL', hi: '1912 dial karein (24×7) — APEPDCL aur APSPDCL dono ke liye' },
          { en: 'APEPDCL (East AP): apeasternpower.com → Complaint Registration', hi: 'East AP (Vizag area): apeasternpower.com → Complaint Registration' },
          { en: 'APSPDCL (South AP / Tirupati): apspdcl.in → Consumer Dashboard → Complaint', hi: 'South AP (Tirupati area): apspdcl.in → Consumer Dashboard → Complaint' },
          { en: 'Enter Service Number from bill → select complaint type → submit', hi: 'Bill se Service Number enter karein → complaint type → submit karein' },
        ],
      },
      {
        badge: 'state',
        name: 'APERC — AP Electricity Regulatory Commission',
        desc: { en: 'DISCOM unresolved? Escalate to APERC CGRF', hi: 'DISCOM resolve nahi? APERC CGRF mein escalate karein' },
        url: 'https://aperc.gov.in',
        phone: '040-23491456',
        howto: [
          { en: 'Open aperc.gov.in → "Consumer Grievance Redressal" section', hi: 'aperc.gov.in → "Consumer Grievance Redressal" section mein jaayein' },
          { en: 'File with APEPDCL/APSPDCL complaint number and all documents', hi: 'APEPDCL/APSPDCL complaint number aur documents ke saath file karein' },
        ],
      },
    ],
  },

  // ── Telangana ─────────────────────────────────────────────────────────────
  Telangana: {
    police: [
      {
        badge: 'first',
        name: 'Telangana Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Hyderabad City Police: 040-27852612 | Women: 1091', hi: 'Emergency: 100 | Hyderabad Police: 040-27852612 | Women: 1091' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Telangana', hi: 'Telangana mein police emergency ke liye 100 dial karein' },
          { en: 'Hyderabad City Police: 040-27852612 / 040-23214001', hi: 'Hyderabad City Police: 040-27852612 / 040-23214001' },
          { en: 'Women helpline: 1091 | SHE Teams (women patrol Hyderabad): 100', hi: 'Women helpline: 1091 | SHE Teams Hyderabad: 100' },
        ],
      },
      {
        badge: 'first',
        name: 'Telangana Police — Online Complaint (TSCOP)',
        desc: { en: 'File FIR, complaint, missing person — TS Cop citizen portal Telangana', hi: 'FIR, complaint, missing person — TSCOP Telangana online portal' },
        url: 'https://tscop.gov.in',
        phone: '100',
        howto: [
          { en: 'Open tscop.gov.in OR tspolicecitizen.gov.in → select service', hi: 'tscop.gov.in ya tspolicecitizen.gov.in kholen → service select karein' },
          { en: 'Login with mobile OTP → select: FIR / Complaint / Missing / Verification', hi: 'Mobile OTP se login → FIR / Complaint / Missing / Verification select karein' },
          { en: 'Fill complete incident details with date, place, description', hi: 'Incident date, jagah, full description bharein' },
          { en: 'Submit → complaint number via SMS — track at tscop.gov.in', hi: 'Submit → SMS mein complaint number — tscop.gov.in par track karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Telangana Police — SP / District Escalation',
        desc: { en: 'Police not acting? Contact SP of your district via TS Police grievance', hi: 'Police action nahi? District ke SP ko TS Police grievance mein contact karein' },
        url: 'https://www.tspolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open tspolice.gov.in → "Grievance" → submit with previous complaint', hi: 'tspolice.gov.in → "Grievance" → pichli complaint ke saath submit karein' },
          { en: 'Or approach SP office of your district with written application', hi: 'Ya apne district ke SP office mein written application le jaayein' },
          { en: 'For women complaints: Hyderabad SHE Teams escalation: 100', hi: 'Women complaints ke liye: Hyderabad SHE Teams escalation: 100' },
        ],
      },
    ],
    bijli: [
      {
        badge: 'first',
        name: 'TSSPDCL — South Telangana Bijli Complaint (Hyderabad)',
        desc: { en: 'TS Southern Power Distribution — Hyderabad, Rangareddy, Nalgonda, Mahbubnagar', hi: 'TSSPDCL — Hyderabad, Rangareddy aur South Telangana ke liye' },
        url: 'https://www.tsspdcl.in/ConsumerServices.html',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — works for both TSSPDCL and TSNPDCL', hi: '1912 dial karein (24×7) — dono Telangana DISCOMs ke liye' },
          { en: 'Hyderabad / South Telangana: tsspdcl.in → Consumer Services → Complaint', hi: 'Hyderabad / South: tsspdcl.in → Consumer Services → Complaint' },
          { en: 'North Telangana (Warangal/Karimnagar): tgnpdcl.com → Consumer Care → Register Complaint', hi: 'North Telangana (Warangal): tgnpdcl.com → Consumer Care → Register Complaint' },
          { en: 'Enter Service Connection Number from bill → submit', hi: 'Bill se Service Connection Number enter karein → submit karein' },
        ],
      },
      {
        badge: 'state',
        name: 'TSERC — Telangana State Electricity Regulatory Commission',
        desc: { en: 'DISCOM not resolving? Escalate to TSERC CGRF', hi: 'DISCOM resolve nahi? TSERC CGRF mein escalate karein' },
        url: 'https://tserc.gov.in',
        phone: '040-23391547',
        howto: [
          { en: 'Open tserc.gov.in → "Consumer Grievance" section', hi: 'tserc.gov.in → "Consumer Grievance" section mein jaayein' },
          { en: 'File with your DISCOM complaint number and evidence', hi: 'DISCOM complaint number aur evidence ke saath file karein' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'GHMC Complaint Portal — Hyderabad Garbage',
        desc: { en: 'Greater Hyderabad Municipal Corporation — solid waste complaints', hi: 'Hyderabad garbage complaint — GHMC official portal' },
        url: 'https://www.ghmc.gov.in',
        phone: '040-21111111',
        howto: [
          { en: 'Open ghmc.gov.in → Citizen Services → Complaint / GHMC+ App', hi: 'ghmc.gov.in → Citizen Services → Complaint karein ya GHMC+ App use karein' },
          { en: 'Select "Garbage/Sanitation" and enter your ward/circle', hi: '"Garbage/Sanitation" select karein, ward/circle enter karein' },
          { en: 'Upload photo of garbage for faster action', hi: 'Garbage ki photo upload karein — faster action hoti hai' },
        ],
      },
    ],
  },
  // ── Odisha ────────────────────────────────────────────────────────────────
  Odisha: {
    bijli: [
      {
        badge: 'first',
        name: 'TP Odisha DISCOMs — Electricity Complaint (4 Zones)',
        desc: { en: 'Tata Power operates all 4 Odisha DISCOMs: TPCODL, TPSODL, TPWODL, TPNODL', hi: 'Odisha bijli — 4 zone DISCOMs: TPCODL/TPSODL/TPWODL/TPNODL' },
        url: 'https://tpsodlwss.tpodisha.com/cportal/',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — routes to your area DISCOM automatically', hi: '1912 dial karein (24×7) — automatically aapke zone ke DISCOM par connect hoga' },
          { en: 'Central Odisha (TPCODL): 1800 345 7122 | South (TPSODL): 1800 2026', hi: 'Central (TPCODL): 1800 345 7122 | South Odisha (TPSODL): 1800 2026' },
          { en: 'TPSODL online: tpsodlwss.tpodisha.com/cportal/ → Register → Complaint', hi: 'TPSODL portal: tpsodlwss.tpodisha.com/cportal/ → Register → Complaint' },
          { en: 'TPWODL / TPNODL: tpnodl.com → Customer Zone → Complaints', hi: 'TPWODL / TPNODL: tpnodl.com → Customer Zone → Complaints' },
        ],
      },
      {
        badge: 'state',
        name: 'OERC — Odisha Electricity Regulatory Commission',
        desc: { en: 'DISCOM not resolving? Escalate to OERC CGRF', hi: 'DISCOM resolve nahi? OERC CGRF mein escalate karein' },
        url: 'https://oerc.gov.in',
        phone: '0674-2561455',
        howto: [
          { en: 'Open oerc.gov.in → "Consumer Grievance" → CGRF complaint', hi: 'oerc.gov.in → "Consumer Grievance" → CGRF complaint bharein' },
          { en: 'File with your DISCOM complaint number and all documents', hi: 'DISCOM complaint number aur saare documents ke saath file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Odisha Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Bhubaneswar-Cuttack Police: 0674-2532640', hi: 'Emergency: 100 | Women: 1091 | Bhubaneswar-Cuttack Police: 0674-2532640' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Odisha', hi: 'Odisha mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline: 1091 | Mahila Police Volunteer helpline Odisha', hi: 'Women helpline: 1091 | Mahila Police Volunteer Odisha se madad lein' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime ke liye: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Odisha Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person — Odisha Police official portal', hi: 'FIR, complaint, missing person — Odisha Police official portal' },
        url: 'https://odishapolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open odishapolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'odishapolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Register with mobile OTP → fill complaint form completely', hi: 'Mobile OTP se register karein → complaint form completely bharein' },
          { en: 'Submit → note complaint number from SMS', hi: 'Submit → SMS se complaint number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Odisha Police — SP / Grievance Escalation',
        desc: { en: 'Complaint not addressed? Escalate to SP or Odisha CM Helpline', hi: 'Complaint address nahi hui? SP ya Odisha CM Helpline par escalate karein' },
        url: 'https://odishapolice.gov.in',
        phone: '14545',
        howto: [
          { en: 'Open odishapolice.gov.in → "Grievance" section', hi: 'odishapolice.gov.in → "Grievance" section mein jaayein' },
          { en: 'Odisha CM Helpline: 14545 — for escalation of police inaction', hi: 'Odisha CM Helpline: 14545 — police inaction ke liye escalation' },
          { en: 'Write to SP of your district with written complaint', hi: 'Apne district ke SP ko written complaint dein' },
        ],
      },
    ],
  },

  // ── Assam ─────────────────────────────────────────────────────────────────
  Assam: {
    bijli: [
      {
        badge: 'first',
        name: 'APDCL — Assam Power Distribution Complaint',
        desc: { en: 'Assam Power Distribution Company — 1912 helpline and CGRF portal', hi: 'Assam electricity complaint — APDCL 1912 ya CGRF portal' },
        url: 'https://www.apdcl.org/cgrf/noauth/fileComplaint',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7, within Assam free) for APDCL complaints', hi: 'Assam mein 1912 dial karein (24×7 free) — APDCL ka helpline' },
          { en: 'Outside Assam: 0361-3126201 or 0361-2803200', hi: 'Assam se bahar: 0361-3126201 ya 0361-2803200' },
          { en: 'Online CGRF complaint: apdcl.org/cgrf/noauth/fileComplaint', hi: 'Online CGRF complaint: apdcl.org/cgrf/noauth/fileComplaint' },
          { en: 'WhatsApp: 7575999666 | Email: support@apdcl.org', hi: 'WhatsApp: 7575999666 | Email: support@apdcl.org' },
        ],
      },
      {
        badge: 'state',
        name: 'AERC — Assam Electricity Regulatory Commission',
        desc: { en: 'APDCL unresolved? Escalate to AERC CGRF', hi: 'APDCL resolve nahi? AERC CGRF mein escalate karein' },
        url: 'https://aerc.gov.in',
        phone: '0361-2525069',
        howto: [
          { en: 'Open aerc.gov.in → "Consumer Grievance Redressal" section', hi: 'aerc.gov.in → "Consumer Grievance Redressal" section mein jaayein' },
          { en: 'File with APDCL complaint number and all supporting documents', hi: 'APDCL complaint number aur documents ke saath file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Assam Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Guwahati City Police: 0361-2540007', hi: 'Emergency: 100 | Women: 1091 | Guwahati City Police: 0361-2540007' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Assam', hi: 'Assam mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Assam: 1091', hi: 'Assam women helpline: 1091' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Assam Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person — Assam Police citizen portal', hi: 'FIR, complaint, missing person — Assam Police online portal' },
        url: 'https://assampolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open assampolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'assampolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Fill complaint type, incident details, location and submit', hi: 'Complaint type, incident details, location bharein aur submit karein' },
          { en: 'Note acknowledgment number for follow-up', hi: 'Follow-up ke liye acknowledgment number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Assam CM Helpline — Police Escalation',
        desc: { en: 'Police inaction? Use Assam CM Helpline for escalation', hi: 'Police action nahi? Assam CM Helpline se escalate karein' },
        url: 'https://assampolice.gov.in',
        phone: '15100',
        howto: [
          { en: 'Dial 15100 (Assam CM Helpline) for police inaction complaints', hi: 'Assam CM Helpline: 15100 — police inaction ke liye' },
          { en: 'Or approach SP of your district with written application', hi: 'Ya apne district ke SP ko written application dein' },
        ],
      },
    ],
  },

  // ── Jharkhand ─────────────────────────────────────────────────────────────
  Jharkhand: {
    bijli: [
      {
        badge: 'first',
        name: 'JBVNL — Jharkhand Bijli Vitran Nigam Complaint',
        desc: { en: 'JBVNL is the sole electricity distributor in Jharkhand — 1912 helpline', hi: 'Jharkhand electricity complaint — JBVNL 1912 helpline ya portal' },
        url: 'https://jbvnl.co.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — JBVNL Jharkhand helpline', hi: '1912 dial karein (24×7 free) — JBVNL Jharkhand ka helpline' },
          { en: 'Toll-free alternate: 1800-123-8745', hi: 'Toll-free alternate: 1800-123-8745' },
          { en: 'SMS complaint: Text "COMPLAINT <reason>" to 5001181912', hi: 'SMS complaint: "COMPLAINT <reason>" ko 5001181912 par bhejein' },
          { en: 'Website: jbvnl.co.in → Consumer Services → Complaint', hi: 'jbvnl.co.in → Consumer Services → Complaint mein jaayein' },
        ],
      },
      {
        badge: 'state',
        name: 'JSERC — Jharkhand State Electricity Regulatory Commission',
        desc: { en: 'JBVNL not resolving? Escalate to JSERC CGRF', hi: 'JBVNL resolve nahi? JSERC CGRF mein escalate karein' },
        url: 'https://jserc.org',
        phone: '0651-2400741',
        howto: [
          { en: 'Open jserc.org → "Consumer Grievance" → CGRF complaint', hi: 'jserc.org → "Consumer Grievance" → CGRF complaint karein' },
          { en: 'CGRF at divisional level — 45-day resolution mandate', hi: 'Divisional level par CGRF hai — 45 din mein resolve karna mandatory' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Jharkhand Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Ranchi City Police: 0651-2200071', hi: 'Emergency: 100 | Women: 1091 | Ranchi City Police: 0651-2200071' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Jharkhand', hi: 'Jharkhand mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Jharkhand: 1091', hi: 'Jharkhand women helpline: 1091' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime ke liye: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Jharkhand Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person — Jharkhand Police official portal', hi: 'FIR, complaint, missing person — Jharkhand Police official portal' },
        url: 'https://jharkhandpolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open jharkhandpolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'jharkhandpolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Login with mobile OTP → fill incident details completely', hi: 'Mobile OTP se login → incident details completely bharein' },
          { en: 'Submit → note complaint number for tracking', hi: 'Submit → complaint number note karein — tracking ke liye' },
        ],
      },
      {
        badge: 'state',
        name: 'Jharkhand CM Helpline — Police Escalation',
        desc: { en: 'Police not acting? Escalate via Jharkhand CM Helpline', hi: 'Police action nahi? Jharkhand CM Helpline se escalate karein' },
        url: 'https://jharkhandpolice.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 (Jharkhand CM Helpline) for police inaction', hi: 'Jharkhand CM Helpline: 181 — police inaction escalation ke liye' },
          { en: 'Approach SP of your district with written complaint and FIR refusal proof', hi: 'District ke SP ko written complaint aur FIR refusal proof ke saath milein' },
        ],
      },
    ],
  },

  // ── Chhattisgarh ──────────────────────────────────────────────────────────
  Chhattisgarh: {
    bijli: [
      {
        badge: 'first',
        name: 'CSPDCL — Chhattisgarh State Power Distribution Complaint',
        desc: { en: 'CSPDCL — sole electricity distributor in Chhattisgarh, 1912 helpline', hi: 'Chhattisgarh electricity complaint — CSPDCL 1912 helpline ya portal' },
        url: 'https://cspdcl.co.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) OR toll-free 1800-233-4687', hi: '1912 dial karein (24×7 free) ya toll-free 1800-233-4687' },
          { en: 'Online: cspdcl.co.in → Consumer e-Seva → Lodge Complaint', hi: 'cspdcl.co.in → Consumer e-Seva → Lodge Complaint karein' },
          { en: 'Enter Consumer Number from bill → describe complaint → submit', hi: 'Bill se Consumer Number enter karein → complaint describe karein → submit' },
          { en: 'Mobile app: "URJA MITRA" for complaint tracking', hi: 'Mobile app "URJA MITRA" se complaint track karein' },
        ],
      },
      {
        badge: 'state',
        name: 'CSERC — Chhattisgarh Electricity Regulatory Commission',
        desc: { en: 'CSPDCL unresolved? Escalate to CSERC CGRF', hi: 'CSPDCL resolve nahi? CSERC CGRF mein escalate karein' },
        url: 'https://cserc.gov.in',
        phone: '0771-4058900',
        howto: [
          { en: 'Open cserc.gov.in → "Consumer Grievance" section', hi: 'cserc.gov.in → "Consumer Grievance" section mein jaayein' },
          { en: 'File CGRF complaint with CSPDCL reference number', hi: 'CSPDCL reference number ke saath CGRF complaint file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Chhattisgarh Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Raipur City Police: 0771-2234343', hi: 'Emergency: 100 | Women: 1091 | Raipur City Police: 0771-2234343' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Chhattisgarh', hi: 'Chhattisgarh mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline CG: 1091', hi: 'Chhattisgarh women helpline: 1091' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime ke liye: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'CG Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person — Chhattisgarh Police online', hi: 'FIR, complaint, missing person — Chhattisgarh Police online portal' },
        url: 'https://cgpolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open cgpolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'cgpolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Register with mobile OTP → fill complaint details', hi: 'Mobile OTP se register karein → complaint details bharein' },
          { en: 'Submit and note complaint reference number', hi: 'Submit karein aur complaint reference number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'CG Police — SP Escalation',
        desc: { en: 'FIR refused or complaint ignored? Escalate to SP of your district', hi: 'FIR refuse hui ya complaint ignore? District ke SP ko escalate karein' },
        url: 'https://cgpolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open cgpolice.gov.in → "Grievance" → submit with complaint history', hi: 'cgpolice.gov.in → "Grievance" → complaint history ke saath submit karein' },
          { en: 'Write to SP with CrPC Section 154(3) — SP must order FIR', hi: 'SP ko CrPC Section 154(3) mention karte hue likhein — SP ko FIR order karna hoga' },
        ],
      },
    ],
  },

  // ── Uttarakhand ───────────────────────────────────────────────────────────
  Uttarakhand: {
    bijli: [
      {
        badge: 'first',
        name: 'UPCL — Uttarakhand Power Corporation Complaint',
        desc: { en: 'UPCL — sole electricity distributor in Uttarakhand, 1912 helpline', hi: 'Uttarakhand electricity complaint — UPCL 1912 helpline ya portal' },
        url: 'https://www.upcl.org/wss/complaintredressal.jsp',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — UPCL Uttarakhand helpline', hi: '1912 dial karein (24×7 free) — UPCL Uttarakhand ka helpline' },
          { en: 'General complaint: 1800-419-0405 | Power theft: 1800-180-4185', hi: 'General complaint: 1800-419-0405 | Bijli chori: 1800-180-4185' },
          { en: 'Online: upcl.org/wss/complaintredressal.jsp → enter details', hi: 'upcl.org/wss/complaintredressal.jsp → details enter karein' },
          { en: 'Email: customercare@upcl.org | App: Consumer Self Service', hi: 'Email: customercare@upcl.org | App: Consumer Self Service use karein' },
        ],
      },
      {
        badge: 'state',
        name: 'UERC — Uttarakhand Electricity Regulatory Commission',
        desc: { en: 'UPCL complaint unresolved? Escalate to UERC CGRF', hi: 'UPCL resolve nahi? UERC CGRF mein escalate karein' },
        url: 'https://www.upcl.org/complaints-redressal-forum/',
        phone: '0135-2710046',
        howto: [
          { en: 'Open upcl.org/complaints-redressal-forum/ for CGRF filing', hi: 'CGRF filing ke liye upcl.org/complaints-redressal-forum/ kholen' },
          { en: 'File with UPCL complaint reference number and documents', hi: 'UPCL complaint reference number aur documents ke saath file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Uttarakhand Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Dehradun City Police: 0135-2714200', hi: 'Emergency: 100 | Women: 1091 | Dehradun City Police: 0135-2714200' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Uttarakhand', hi: 'Uttarakhand mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Uttarakhand: 1091', hi: 'Uttarakhand women helpline: 1091' },
          { en: 'Tourist Police Helpline Uttarakhand: 1364', hi: 'Tourist Police Helpline Uttarakhand: 1364' },
        ],
      },
      {
        badge: 'first',
        name: 'Uttarakhand Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person — Uttarakhand Police citizen portal', hi: 'FIR, complaint, missing person — Uttarakhand Police citizen portal' },
        url: 'https://uttarakhandpolice.uk.gov.in',
        phone: '100',
        howto: [
          { en: 'Open uttarakhandpolice.uk.gov.in → "Citizen Services" → "Online Complaint"', hi: 'uttarakhandpolice.uk.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Register with mobile → fill complaint form with full incident details', hi: 'Mobile se register karein → full incident details ke saath complaint form bharein' },
          { en: 'Submit → complaint number via SMS for tracking', hi: 'Submit → SMS mein complaint number — tracking ke liye' },
        ],
      },
      {
        badge: 'state',
        name: 'Uttarakhand CM Helpline — Police Escalation',
        desc: { en: 'Police inaction? Escalate via Uttarakhand CM Helpline 1905', hi: 'Police action nahi? Uttarakhand CM Helpline 1905 par escalate karein' },
        url: 'https://uttarakhandpolice.uk.gov.in',
        phone: '1905',
        howto: [
          { en: 'Dial 1905 (Uttarakhand CM Helpline) for police escalation', hi: 'Uttarakhand CM Helpline 1905 — police escalation ke liye' },
          { en: 'Or approach SP of your district with written application', hi: 'Ya apne district ke SP ko written application dein' },
        ],
      },
    ],
  },

  // ── Himachal Pradesh ──────────────────────────────────────────────────────
  'Himachal Pradesh': {
    bijli: [
      {
        badge: 'first',
        name: 'HPSEBL — HP State Electricity Board Complaint',
        desc: { en: 'Himachal Pradesh State Electricity Board — 1912 helpline and portal', hi: 'HP State Electricity Board — 1912 ya portal par complaint karein' },
        url: 'https://www.hpseb.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) OR 1800-180-8060 — HPSEBL helpline', hi: '1912 dial karein (24×7 free) ya 1800-180-8060 — HPSEBL helpline' },
          { en: 'Online: hpseb.in → Consumer Call Centre → Lodge Complaint', hi: 'hpseb.in → Consumer Call Centre → Lodge Complaint karein' },
          { en: 'Enter Consumer Account Number from bill → describe issue → submit', hi: 'Bill se Consumer Account Number enter karein → issue describe karein → submit' },
        ],
      },
      {
        badge: 'state',
        name: 'HPERC — HP Electricity Regulatory Commission',
        desc: { en: 'HPSEBL not resolving? Escalate to HPERC CGRF', hi: 'HPSEBL resolve nahi? HPERC CGRF mein escalate karein' },
        url: 'https://hperc.org',
        phone: '0177-2624376',
        howto: [
          { en: 'Open hperc.org → "Consumer Grievance" → CGRF complaint', hi: 'hperc.org → "Consumer Grievance" → CGRF complaint bharein' },
          { en: 'File with HPSEBL complaint number and supporting documents', hi: 'HPSEBL complaint number aur supporting documents ke saath file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Himachal Pradesh Police — Emergency',
        desc: { en: 'Dial 100 | Women: 1091 | Shimla Police: 0177-2628800', hi: 'Emergency: 100 | Women: 1091 | Shimla Police: 0177-2628800' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Himachal Pradesh', hi: 'HP mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline HP: 1091', hi: 'Himachal Pradesh women helpline: 1091' },
          { en: 'Tourist helpline HP: 1100', hi: 'Tourist helpline HP: 1100' },
        ],
      },
      {
        badge: 'first',
        name: 'HP Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person — Himachal Pradesh Police online', hi: 'FIR, complaint, missing person — HP Police online portal' },
        url: 'https://hppolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open hppolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'hppolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Fill complaint type, incident details and submit with mobile OTP', hi: 'Complaint type, incident details bharein aur mobile OTP se submit karein' },
          { en: 'Note complaint number for tracking', hi: 'Complaint number note karein — tracking ke liye' },
        ],
      },
      {
        badge: 'state',
        name: 'HP Police — SP Escalation',
        desc: { en: 'Police station complaint ignored? Escalate to SP of district', hi: 'Station complaint ignore? District ke SP ko escalate karein' },
        url: 'https://hppolice.gov.in',
        phone: '0177-2628800',
        howto: [
          { en: 'Open hppolice.gov.in → "Grievance" section', hi: 'hppolice.gov.in → "Grievance" section mein jaayein' },
          { en: 'Write to SP with previous complaint details and FIR refusal', hi: 'SP ko previous complaint details aur FIR refusal ke saath likhein' },
        ],
      },
    ],
  },

  // ── Goa ───────────────────────────────────────────────────────────────────
  Goa: {
    bijli: [
      {
        badge: 'first',
        name: 'Goa Electricity Department — Consumer Complaint',
        desc: { en: 'Goa Electricity Department (GED) — 1912 helpline and online portal', hi: 'Goa electricity complaint — 1912 ya GED online complaint portal' },
        url: 'https://www.goaelectricity.gov.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) OR 0832-2490800 — GED helpline', hi: '1912 dial karein (24×7 free) ya 0832-2490800 — GED Goa helpline' },
          { en: 'Online: goaelectricity.gov.in → Consumer Grievance Registration', hi: 'goaelectricity.gov.in → Consumer Grievance Registration karein' },
          { en: 'Enter Consumer Number from bill → select complaint type → submit', hi: 'Bill se Consumer Number enter karein → complaint type → submit karein' },
          { en: 'WhatsApp complaint: +91 9422041912', hi: 'WhatsApp par complaint: +91 9422041912' },
        ],
      },
      {
        badge: 'state',
        name: 'GERC — Goa Electricity Regulatory Commission',
        desc: { en: 'GED not resolving? Escalate to GERC CGRF', hi: 'GED resolve nahi? GERC CGRF mein escalate karein' },
        url: 'https://www.gerc.gov.in',
        phone: '0832-2437454',
        howto: [
          { en: 'Open gerc.gov.in → "Consumer Grievance" section', hi: 'gerc.gov.in → "Consumer Grievance" section mein jaayein' },
          { en: 'File CGRF complaint with GED complaint reference number', hi: 'GED complaint reference number ke saath CGRF complaint file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Goa Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Panaji Police Station: 0832-2425255', hi: 'Emergency: 100 | Women: 1091 | Panaji Police: 0832-2425255' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Goa', hi: 'Goa mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Goa: 1091', hi: 'Goa women helpline: 1091' },
          { en: 'Tourist helpline Goa: 1364', hi: 'Tourist helpline Goa: 1364' },
        ],
      },
      {
        badge: 'first',
        name: 'Goa Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, lost property report — Goa Police citizen services', hi: 'FIR, complaint, lost property — Goa Police online complaint portal' },
        url: 'https://goapolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open goapolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'goapolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Fill complaint form with incident details and submit', hi: 'Incident details ke saath complaint form bharein aur submit karein' },
          { en: 'Note complaint/acknowledgment number for tracking', hi: 'Complaint/acknowledgment number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Goa Police — SP Level Escalation',
        desc: { en: 'Police ignoring complaint? Escalate to SP North / SP South Goa', hi: 'Complaint ignore? SP North Goa ya SP South Goa ko escalate karein' },
        url: 'https://goapolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open goapolice.gov.in → "Grievance" section', hi: 'goapolice.gov.in → "Grievance" section mein jaayein' },
          { en: 'Visit or write to SP North Goa (Panaji) or SP South Goa (Margao)', hi: 'SP North Goa (Panaji) ya SP South Goa (Margao) ko visit karein ya likhein' },
        ],
      },
    ],
  },

  // ── Jammu & Kashmir ───────────────────────────────────────────────────────
  'Jammu and Kashmir': {
    bijli: [
      {
        badge: 'first',
        name: 'JKPDD / KPDCL / JPDCL — J&K Electricity Complaint',
        desc: { en: 'Jammu: JPDCL (1800-180-7183) | Kashmir: KPDCL (1800-180-7666)', hi: 'Jammu ke liye JPDCL | Kashmir ke liye KPDCL — alag helplines' },
        url: 'https://kpdcl.jkpdd.net/grievance.aspx',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) for J&K electricity complaints', hi: '1912 dial karein (24×7 free) — J&K electricity complaints ke liye' },
          { en: 'Jammu region (JPDCL): 1800-180-7183 (toll-free)', hi: 'Jammu region (JPDCL): 1800-180-7183 (toll-free)' },
          { en: 'Kashmir region (KPDCL): 1800-180-7666 (toll-free)', hi: 'Kashmir region (KPDCL): 1800-180-7666 (toll-free)' },
          { en: 'Online grievance (Kashmir): kpdcl.jkpdd.net/grievance.aspx', hi: 'Online grievance (Kashmir): kpdcl.jkpdd.net/grievance.aspx' },
        ],
      },
      {
        badge: 'state',
        name: 'JKERC — J&K Electricity Regulatory Commission',
        desc: { en: 'JKPDD/KPDCL not resolving? Escalate to JKERC CGRF', hi: 'JKPDD resolve nahi? JKERC CGRF mein escalate karein' },
        url: 'https://jkerc.gov.in',
        phone: '0194-2484793',
        howto: [
          { en: 'Open jkerc.gov.in → "Consumer Grievance" section', hi: 'jkerc.gov.in → "Consumer Grievance" section mein jaayein' },
          { en: 'File CGRF complaint with JKPDD/KPDCL complaint reference number', hi: 'JKPDD/KPDCL complaint reference number ke saath CGRF file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'J&K Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Srinagar: 0194-2452748 | Jammu: 0191-2520661', hi: 'Emergency: 100 | Women: 1091 | Srinagar: 0194-2452748 | Jammu: 0191-2520661' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in J&K', hi: 'J&K mein police emergency ke liye 100 dial karein' },
          { en: 'Srinagar Police: 0194-2452748 | Jammu Police: 0191-2520661', hi: 'Srinagar Police: 0194-2452748 | Jammu Police: 0191-2520661' },
          { en: 'Women helpline: 1091 | Cyber crime: 1930', hi: 'Women helpline: 1091 | Cyber crime: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'J&K Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person — J&K Police official portal', hi: 'FIR, complaint, missing person — J&K Police official portal' },
        url: 'https://jkpolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open jkpolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'jkpolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Register with mobile OTP → fill complaint form completely', hi: 'Mobile OTP se register karein → complaint form completely bharein' },
          { en: 'Submit → complaint number via SMS for tracking', hi: 'Submit → SMS mein complaint number — tracking ke liye' },
        ],
      },
      {
        badge: 'state',
        name: 'J&K Police — SSP / IGP Level Escalation',
        desc: { en: 'Complaint not addressed? Escalate to SSP or IGP of your zone', hi: 'Complaint address nahi? SSP ya IGP zone ko escalate karein' },
        url: 'https://jkpolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open jkpolice.gov.in → "Grievance" section → submit with complaint history', hi: 'jkpolice.gov.in → "Grievance" → complaint history ke saath submit karein' },
          { en: 'Visit SSP office of your district with written application', hi: 'District ke SSP office mein written application ke saath milein' },
          { en: 'J&K LG Grievance portal: lgraj.jk.gov.in for further escalation', hi: 'J&K LG Grievance portal: lgraj.jk.gov.in — aur escalation ke liye' },
        ],
      },
    ],
  },

  // ── Manipur ───────────────────────────────────────────────────────────────
  Manipur: {
    bijli: [
      {
        badge: 'first',
        name: 'MSPDCL — Manipur State Power Distribution Complaint',
        desc: { en: 'Manipur State Power Distribution Company — 1912 helpline', hi: 'Manipur electricity complaint — MSPDCL 1912 helpline' },
        url: 'https://mspdcl.com',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — MSPDCL Manipur helpline', hi: '1912 dial karein (24×7 free) — MSPDCL Manipur helpline' },
          { en: 'Phone: +91 7640081232 or +91 7640081238', hi: 'Phone: +91 7640081232 ya +91 7640081238' },
          { en: 'Online: mspdcl.com → Citizen Services → Complaint', hi: 'mspdcl.com → Citizen Services → Complaint mein jaayein' },
          { en: 'Describe your complaint with consumer number, address, and issue', hi: 'Consumer number, address aur issue ke saath complaint describe karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Manipur Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Imphal Police: 0385-2454744', hi: 'Emergency: 100 | Women: 1091 | Imphal Police: 0385-2454744' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Manipur', hi: 'Manipur mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Manipur: 1091', hi: 'Manipur women helpline: 1091' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime ke liye: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Manipur Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint — Manipur Police official portal', hi: 'FIR, complaint — Manipur Police official portal' },
        url: 'https://manipurpolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open manipurpolice.gov.in → "Citizen Services" → complaint form', hi: 'manipurpolice.gov.in → "Citizen Services" → complaint form bharein' },
          { en: 'Fill incident details and submit with contact info', hi: 'Incident details bharein aur contact info ke saath submit karein' },
          { en: 'Note acknowledgment for follow-up', hi: 'Follow-up ke liye acknowledgment note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Manipur CM Helpline — Police Escalation',
        desc: { en: 'Police ignoring complaint? Escalate via Manipur CM Office', hi: 'Complaint ignore? Manipur CM Office ke through escalate karein' },
        url: 'https://manipurpolice.gov.in',
        phone: '1800-345-3818',
        howto: [
          { en: 'Manipur toll-free helpline: 1800-345-3818', hi: 'Manipur toll-free helpline: 1800-345-3818' },
          { en: 'Or write to SP of your district with complaint details', hi: 'Ya apne district ke SP ko complaint details ke saath likhein' },
        ],
      },
    ],
  },

  // ── Tripura ───────────────────────────────────────────────────────────────
  Tripura: {
    bijli: [
      {
        badge: 'first',
        name: 'TSECL — Tripura State Electricity Corporation Complaint',
        desc: { en: 'TSECL — sole electricity distributor in Tripura, 1912 helpline', hi: 'Tripura electricity complaint — TSECL 1912 helpline ya portal' },
        url: 'https://tsecl.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — TSECL Tripura helpline', hi: '1912 dial karein (24×7 free) — TSECL Tripura helpline' },
          { en: 'Alternate: 0381-2353502 for Agartala region', hi: 'Alternate: 0381-2353502 — Agartala region ke liye' },
          { en: 'Online: tsecl.in → Consumer Services → Lodge Complaint', hi: 'tsecl.in → Consumer Services → Lodge Complaint karein' },
          { en: 'Mobile app: "Bidyut Bandhu" for power outage tracking', hi: 'Mobile app "Bidyut Bandhu" se outage track karein' },
        ],
      },
      {
        badge: 'state',
        name: 'TSERC — Tripura State Electricity Regulatory Commission',
        desc: { en: 'TSECL not resolving? Escalate to TSERC CGRF', hi: 'TSECL resolve nahi? TSERC CGRF mein escalate karein' },
        url: 'https://tserc.gov.in',
        phone: '0381-2354512',
        howto: [
          { en: 'Open tserc.gov.in → "Consumer Grievance" section', hi: 'tserc.gov.in → "Consumer Grievance" section mein jaayein' },
          { en: 'File CGRF complaint with TSECL complaint reference number', hi: 'TSECL complaint reference number ke saath CGRF complaint file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Tripura Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Agartala Police: 0381-2325757', hi: 'Emergency: 100 | Women: 1091 | Agartala Police: 0381-2325757' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Tripura', hi: 'Tripura mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Tripura: 1091', hi: 'Tripura women helpline: 1091' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime ke liye: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Tripura Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person — Tripura Police official portal', hi: 'FIR, complaint — Tripura Police official portal' },
        url: 'https://tripurapolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open tripurapolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'tripurapolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Fill complete complaint form with incident details and submit', hi: 'Incident details ke saath complaint form bharein aur submit karein' },
          { en: 'Note complaint number for tracking', hi: 'Complaint number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Tripura Police — SP Escalation',
        desc: { en: 'Station-level complaint unresolved? Escalate to SP of district', hi: 'Station complaint unresolved? District SP ko escalate karein' },
        url: 'https://tripurapolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open tripurapolice.gov.in → "Grievance" section', hi: 'tripurapolice.gov.in → "Grievance" section mein jaayein' },
          { en: 'Write to SP of your district with previous complaint details', hi: 'District ke SP ko pichle complaint details ke saath likhein' },
        ],
      },
    ],
  },

  // ── Meghalaya ─────────────────────────────────────────────────────────────
  Meghalaya: {
    bijli: [
      {
        badge: 'first',
        name: 'MePDCL — Meghalaya Power Distribution Complaint',
        desc: { en: 'Meghalaya Power Distribution Corporation Ltd — 1912 helpline', hi: 'Meghalaya electricity complaint — MePDCL 1912 helpline ya portal' },
        url: 'https://mepdcl.nic.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (24×7 free) — MePDCL Meghalaya helpline', hi: '1912 dial karein (24×7 free) — MePDCL Meghalaya helpline' },
          { en: 'Alternate: 0364-2591932 or 0364-2591088 (Shillong)', hi: 'Alternate: 0364-2591932 ya 0364-2591088 — Shillong region' },
          { en: 'WhatsApp: 60330 60330 for quick complaints', hi: 'WhatsApp complaint: 60330 60330' },
          { en: 'Email: mbcccs.mepdcl@gmail.com or mepdcl.shillong@gmail.com', hi: 'Email: mbcccs.mepdcl@gmail.com ya mepdcl.shillong@gmail.com' },
        ],
      },
      {
        badge: 'state',
        name: 'MeERC — Meghalaya Electricity Regulatory Commission',
        desc: { en: 'MePDCL not resolving? Escalate to MeERC CGRF', hi: 'MePDCL resolve nahi? MeERC CGRF mein escalate karein' },
        url: 'https://meerc.gov.in',
        phone: '0364-2502001',
        howto: [
          { en: 'Open meerc.gov.in → "Consumer Grievance" section', hi: 'meerc.gov.in → "Consumer Grievance" section mein jaayein' },
          { en: 'File with MePDCL complaint number and documents', hi: 'MePDCL complaint number aur documents ke saath file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Meghalaya Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Shillong Police: 0364-2502015', hi: 'Emergency: 100 | Women: 1091 | Shillong Police: 0364-2502015' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Meghalaya', hi: 'Meghalaya mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Meghalaya: 1091', hi: 'Meghalaya women helpline: 1091' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime ke liye: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Meghalaya Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint — Meghalaya Police official portal', hi: 'FIR, complaint — Meghalaya Police official portal' },
        url: 'https://meghalayapolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open meghalayapolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'meghalayapolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Fill complaint form with full incident details and submit', hi: 'Full incident details ke saath complaint form bharein aur submit karein' },
          { en: 'Note acknowledgment number for tracking', hi: 'Acknowledgment number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Meghalaya Police — SP Escalation',
        desc: { en: 'Complaint not resolved? Approach SP of East Khasi Hills / your district', hi: 'Complaint resolve nahi? District ke SP se milein' },
        url: 'https://meghalayapolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open meghalayapolice.gov.in → "Grievance" section', hi: 'meghalayapolice.gov.in → "Grievance" section mein jaayein' },
          { en: 'Approach SP of your district with written complaint', hi: 'Apne district ke SP ko written complaint dein' },
        ],
      },
    ],
  },

  // ── Nagaland ──────────────────────────────────────────────────────────────
  Nagaland: {
    bijli: [
      {
        badge: 'first',
        name: 'DoP Nagaland — Department of Power Complaint',
        desc: { en: 'Nagaland Department of Power — 03702-240178 helpline', hi: 'Nagaland electricity complaint — DoP helpline ya email' },
        url: 'https://nagalandpower.gov.in',
        phone: '03702-240178',
        howto: [
          { en: 'Call 03702-240178 or 03702-243149 (business hours 9 AM – 5 PM)', hi: '03702-240178 ya 03702-243149 call karein (business hours 9 AM–5 PM)' },
          { en: 'Online: nagalandpower.gov.in → Consumer Portal → Complaint', hi: 'nagalandpower.gov.in → Consumer Portal → Complaint section' },
          { en: 'Email complaint with consumer number, area, and problem description', hi: 'Consumer number, area aur problem description ke saath email karein' },
          { en: 'Note: 1912 may not work in Nagaland — use state-specific numbers', hi: 'Note: Nagaland mein 1912 kaam nahi karta — state numbers use karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Nagaland Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Kohima Police: 0370-2270017', hi: 'Emergency: 100 | Women: 1091 | Kohima Police: 0370-2270017' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Nagaland', hi: 'Nagaland mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Nagaland: 1091', hi: 'Nagaland women helpline: 1091' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime ke liye: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Nagaland Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint, missing person — Nagaland Police official portal', hi: 'FIR, complaint — Nagaland Police official portal' },
        url: 'https://nagalandpolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open nagalandpolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'nagalandpolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Fill complaint details and submit', hi: 'Complaint details bharein aur submit karein' },
          { en: 'Note complaint acknowledgment number', hi: 'Complaint acknowledgment number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Nagaland Police — SP Escalation',
        desc: { en: 'Station-level complaint ignored? Escalate to SP of district', hi: 'Station complaint ignore? District ke SP ko escalate karein' },
        url: 'https://nagalandpolice.gov.in',
        phone: null,
        howto: [
          { en: 'Write to SP of your district with previous complaint details', hi: 'District ke SP ko pichle complaint details ke saath likhein' },
          { en: 'Or use Nagaland CM Helpline for further escalation', hi: 'Aur escalation ke liye Nagaland CM Helpline use karein' },
        ],
      },
    ],
  },

  // ── Mizoram ───────────────────────────────────────────────────────────────
  Mizoram: {
    bijli: [
      {
        badge: 'first',
        name: 'PEDGOM — Mizoram Power & Electricity Dept Complaint',
        desc: { en: 'Mizoram Power & Electricity Department — helpline 0389-2321650', hi: 'Mizoram electricity complaint — PEDGOM helpline ya email' },
        url: 'https://power.mizoram.gov.in',
        phone: '0389-2321650',
        howto: [
          { en: 'Call 0389-2321650 or 0389-2322174 or 0389-2310169 (Aizawl)', hi: '0389-2321650 ya 0389-2322174 ya 0389-2310169 call karein' },
          { en: 'Online: power.mizoram.gov.in → Consumer Services → Complaint', hi: 'power.mizoram.gov.in → Consumer Services → Complaint karein' },
          { en: 'State-specific numbers — 1912 not confirmed for Mizoram', hi: 'State-specific numbers use karein — Mizoram mein 1912 confirm nahi hai' },
        ],
      },
      {
        badge: 'state',
        name: 'JERC (Mizoram & Manipur) — Electricity Ombudsman',
        desc: { en: 'Joint Electricity Regulatory Commission for Mizoram & Manipur — escalation', hi: 'JERC Mizoram & Manipur — unresolved complaint escalation' },
        url: 'https://jerclakshadweep.gov.in',
        phone: '0389-2322200',
        howto: [
          { en: 'Approach JERC — Joint Electricity Regulatory Commission for Mizoram', hi: 'JERC — Joint Electricity Regulatory Commission Mizoram se contact karein' },
          { en: 'File complaint with PEDGOM reference number and documents', hi: 'PEDGOM reference number aur documents ke saath complaint file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Mizoram Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Aizawl Police: 0389-2336202', hi: 'Emergency: 100 | Women: 1091 | Aizawl Police: 0389-2336202' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Mizoram', hi: 'Mizoram mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Mizoram: 1091', hi: 'Mizoram women helpline: 1091' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime ke liye: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Mizoram Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint — Mizoram Police official portal', hi: 'FIR, complaint — Mizoram Police official portal' },
        url: 'https://mizorampolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open mizorampolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'mizorampolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Fill incident details, contact info and submit', hi: 'Incident details, contact info bharein aur submit karein' },
          { en: 'Note complaint number for follow-up', hi: 'Follow-up ke liye complaint number note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Mizoram Police — SP Escalation',
        desc: { en: 'Complaint unresolved? Escalate to SP of Aizawl / your district', hi: 'Complaint unresolved? SP Aizawl ya apne district ke SP ko escalate karein' },
        url: 'https://mizorampolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open mizorampolice.gov.in → "Grievance" section', hi: 'mizorampolice.gov.in → "Grievance" section mein jaayein' },
          { en: 'Write to SP of your district with complaint history', hi: 'District ke SP ko complaint history ke saath likhein' },
        ],
      },
    ],
  },

  // ── Sikkim ────────────────────────────────────────────────────────────────
  Sikkim: {
    bijli: [
      {
        badge: 'first',
        name: 'Sikkim Power Department — Consumer Self-Service Portal',
        desc: { en: 'Sikkim Power Department — selfservice.powersikkim.in and helpline', hi: 'Sikkim electricity complaint — Power Dept portal ya helpline' },
        url: 'https://selfservice.powersikkim.in',
        phone: '03592-200500',
        howto: [
          { en: 'Open selfservice.powersikkim.in → Consumer Self-Service Portal', hi: 'selfservice.powersikkim.in kholen → Consumer Self-Service Portal' },
          { en: 'Login with consumer number → select complaint type → submit', hi: 'Consumer number se login → complaint type select karein → submit' },
          { en: 'Helpline: +91 3592-200500 (24×7)', hi: 'Helpline: +91 3592-200500 (24×7)' },
          { en: 'Note: 1912 not confirmed for Sikkim — use state helpline above', hi: 'Note: Sikkim mein 1912 confirm nahi — upar wala state helpline use karein' },
        ],
      },
      {
        badge: 'state',
        name: 'SERC Sikkim — State Electricity Regulatory Commission',
        desc: { en: 'Power Dept complaint unresolved? Escalate to SERC Sikkim', hi: 'Power Dept resolve nahi? SERC Sikkim mein escalate karein' },
        url: 'https://sercsikkim.in',
        phone: '03592-231800',
        howto: [
          { en: 'Open sercsikkim.in → "Consumer Grievance" section', hi: 'sercsikkim.in → "Consumer Grievance" section mein jaayein' },
          { en: 'File with Power Dept complaint reference and documents', hi: 'Power Dept complaint reference aur documents ke saath file karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Sikkim Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Gangtok Police: 03592-202133', hi: 'Emergency: 100 | Women: 1091 | Gangtok Police: 03592-202133' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Sikkim', hi: 'Sikkim mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline Sikkim: 1091', hi: 'Sikkim women helpline: 1091' },
          { en: 'Tourist helpline Sikkim: 1364', hi: 'Tourist helpline Sikkim: 1364' },
        ],
      },
      {
        badge: 'first',
        name: 'Sikkim Police — Online Complaint Portal',
        desc: { en: 'File FIR, complaint — Sikkim Police official portal', hi: 'FIR, complaint — Sikkim Police official portal' },
        url: 'https://sikkimpolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open sikkimpolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'sikkimpolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Fill complete incident details and submit', hi: 'Puri incident details bharein aur submit karein' },
          { en: 'Note complaint reference for tracking', hi: 'Tracking ke liye complaint reference note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Sikkim Police — SP Escalation',
        desc: { en: 'Complaint ignored? Approach SP of East / West / South Sikkim', hi: 'Complaint ignore? East / West / South Sikkim ke SP se milein' },
        url: 'https://sikkimpolice.gov.in',
        phone: null,
        howto: [
          { en: 'Open sikkimpolice.gov.in → "Grievance" section', hi: 'sikkimpolice.gov.in → "Grievance" section mein jaayein' },
          { en: 'Write to SP of your district — Sikkim has 4 districts', hi: 'Apne district ke SP ko likhein — Sikkim mein 4 districts hain' },
        ],
      },
    ],
  },

  // ── Arunachal Pradesh ─────────────────────────────────────────────────────
  'Arunachal Pradesh': {
    bijli: [
      {
        badge: 'first',
        name: 'Arunachal Pradesh Dept of Power — Complaint',
        desc: { en: 'DoP Arunachal Pradesh — 1912 (limited hours) and online portal', hi: 'Arunachal Pradesh electricity complaint — DoP portal ya 1912' },
        url: 'https://www.arpdop.gov.in',
        phone: '1912',
        howto: [
          { en: 'Dial 1912 (9:30 AM – 4:00 PM, Mon–Fri) — AP Dept of Power', hi: '1912 dial karein (9:30 AM–4:00 PM, Mon-Fri) — AP Dept of Power' },
          { en: 'Online: arpdop.gov.in → Online Complaint Form → fill and submit', hi: 'arpdop.gov.in → Online Complaint Form → fill karein aur submit karein' },
          { en: 'Email: support@arpdop.gov.in with consumer number and issue details', hi: 'Email: support@arpdop.gov.in — consumer number aur issue ke saath' },
        ],
      },
      {
        badge: 'state',
        name: 'APSERC — Arunachal Pradesh Electricity Regulatory Commission',
        desc: { en: 'Dept of Power not resolving? Escalate to APSERC', hi: 'DoP resolve nahi? APSERC mein escalate karein' },
        url: 'https://apserc.nic.in',
        phone: '0360-2291247',
        howto: [
          { en: 'Open apserc.nic.in → "Consumer Grievance" → file complaint', hi: 'apserc.nic.in → "Consumer Grievance" → complaint file karein' },
          { en: 'Include DoP complaint reference number and all correspondence', hi: 'DoP complaint reference number aur saari correspondence include karein' },
        ],
      },
    ],
    police: [
      {
        badge: 'first',
        name: 'Arunachal Police — Emergency & Helplines',
        desc: { en: 'Dial 100 | Women: 1091 | Itanagar Police: 0360-2212633', hi: 'Emergency: 100 | Women: 1091 | Itanagar Police: 0360-2212633' },
        url: null, phone: '100', callOnly: true,
        howto: [
          { en: 'Dial 100 for police emergency anywhere in Arunachal Pradesh', hi: 'Arunachal Pradesh mein police emergency ke liye 100 dial karein' },
          { en: 'Women helpline: 1091', hi: 'Women helpline: 1091' },
          { en: 'Cyber crime helpline: 1930', hi: 'Cyber crime ke liye: 1930' },
        ],
      },
      {
        badge: 'first',
        name: 'Arunachal Pradesh Police — Online Complaint',
        desc: { en: 'File FIR, complaint — Arunachal Pradesh Police official portal', hi: 'FIR, complaint — Arunachal Pradesh Police official portal' },
        url: 'https://arunachalpolice.gov.in',
        phone: '100',
        howto: [
          { en: 'Open arunachalpolice.gov.in → "Citizen Services" → "Online Complaint"', hi: 'arunachalpolice.gov.in → "Citizen Services" → "Online Complaint" karein' },
          { en: 'Fill incident details and submit with mobile OTP', hi: 'Incident details bharein aur mobile OTP se submit karein' },
          { en: 'Note complaint number for tracking', hi: 'Complaint number note karein — tracking ke liye' },
        ],
      },
      {
        badge: 'state',
        name: 'Arunachal Police — SP Escalation',
        desc: { en: 'FIR refused or complaint ignored? Write to SP of your district', hi: 'FIR refuse ya complaint ignore? District ke SP ko likhein' },
        url: 'https://arunachalpolice.gov.in',
        phone: null,
        howto: [
          { en: 'Write to SP of your district with complaint history and FIR refusal proof', hi: 'SP ko complaint history aur FIR refusal proof ke saath likhein' },
          { en: 'SP must order FIR under CrPC Section 154(3)', hi: 'SP ko CrPC Section 154(3) ke tahat FIR order karni hogi' },
        ],
      },
    ],
  },

}

// ─────────────────────────────────────────────────────────────────────────────
// getPortals — returns state-specific portals merged with national portals
// If state portals exist for this category → show them first, then CPGRAMS
// Otherwise → show full national portals
// ─────────────────────────────────────────────────────────────────────────────
export function getPortals(stateName, cat) {
  const stateData  = STATE_PORTALS[stateName]
  const stateCat   = stateData?.[cat] || []
  const national   = NATIONAL_PORTALS[cat] || []

  if (stateCat.length > 0) {
    // State portals + CPGRAMS as last resort
    const escalationPortals = national.filter(p =>
      p.badge === 'central' || p.badge === 'last'
    )
    // De-duplicate CPGRAMS if state portals already include state-level escalation
    const merged = [...stateCat, ...escalationPortals]
    // Remove true duplicates by URL
    const seen = new Set()
    return merged.filter(p => {
      const key = p.url || p.phone || p.name
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }

  return national
}
