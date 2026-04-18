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
    bijli: [
      {
        badge: 'first',
        name: 'MSEDCL — Maha Vitaran Complaint Portal',
        desc: { en: 'Maharashtra State Electricity Distribution — official complaint portal', hi: 'MSEDCL official complaint portal — Maharashtra' },
        url: 'https://www.mahadiscom.in/consumer/index.aspx#',
        phone: '1912',
        howto: [
          { en: 'Open mahadiscom.in → "Consumer Services" → "Complaint"', hi: 'mahadiscom.in → "Consumer Services" → "Complaint" में जाएं' },
          { en: 'Enter your CA Number (consumer account number from bill)', hi: 'अपना CA Number (bill पर होता है) enter करें' },
          { en: 'Select complaint type and describe the problem', hi: 'Complaint type select करें और problem describe करें' },
          { en: 'Submit — you will receive SMS confirmation', hi: 'Submit करें — SMS confirmation आएगा' },
        ],
      },
      {
        badge: 'state',
        name: 'MERC — Maharashtra Electricity Regulatory Commission',
        desc: { en: 'Escalate unresolved MSEDCL complaints to state regulator', hi: 'MSEDCL से हल न हो — MERC में escalate करें' },
        url: 'https://www.mercindia.org.in/consumer-grievance',
        phone: '1800-200-4500',
        howto: [
          { en: 'Open mercindia.org.in → "Consumer Grievance" section', hi: 'mercindia.org.in → "Consumer Grievance" में जाएं' },
          { en: 'Fill the complaint form with your MSEDCL reference number', hi: 'MSEDCL reference number के साथ form भरें' },
          { en: 'MERC is the appellate authority — decision in 60 days', hi: 'MERC appellate authority है — 60 दिन में decision आता है' },
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
    bijli: [
      {
        badge: 'first',
        name: 'BSES Rajdhani / BSES Yamuna — Online Complaint',
        desc: { en: 'South & West Delhi (BSES Rajdhani) / East Delhi (BSES Yamuna)', hi: 'South/West Delhi: BSES Rajdhani | East Delhi: BSES Yamuna' },
        url: 'https://www.bsesdelhi.com/web/bses/lodge-complaint',
        phone: '19123',
        howto: [
          { en: 'Open bsesdelhi.com → "Lodge Complaint" button', hi: 'bsesdelhi.com → "Lodge Complaint" button click karein' },
          { en: 'Enter CA number (on your bill) and select complaint type', hi: 'Bill par CA number enter karein → complaint type select karein' },
          { en: 'BSES must resolve outage complaints within 4 hours (as per DERC)', hi: 'BSES ko outage 4 ghante mein resolve karna hota hai (DERC rule)' },
        ],
      },
      {
        badge: 'first',
        name: 'TPDDL — Tata Power Delhi Complaint Portal',
        desc: { en: 'North & North-West Delhi (Tata Power Delhi Distribution)', hi: 'North Delhi / North-West Delhi: Tata Power complaint portal' },
        url: 'https://www.tatapower-ddl.com/Customer-Care/complaint',
        phone: '19124',
        howto: [
          { en: 'Open tatapower-ddl.com → "Customer Care" → "Lodge Complaint"', hi: 'tatapower-ddl.com → "Customer Care" → "Lodge Complaint" karein' },
          { en: 'Enter your account number from the bill', hi: 'Bill se account number enter karein' },
          { en: 'Select issue type and submit — get complaint reference number', hi: 'Issue type select karein, submit karein — complaint reference number lein' },
        ],
      },
      {
        badge: 'state',
        name: 'DERC — Delhi Electricity Regulatory Commission',
        desc: { en: 'Escalate if BSES/TPDDL fail to resolve within 30 days', hi: '30 dino mein haal na ho — DERC mein escalate karein' },
        url: 'https://www.derc.gov.in/ConsumerGrievance.aspx',
        phone: '1800-200-1200',
        howto: [
          { en: 'Open derc.gov.in → "Consumer Grievance"', hi: 'derc.gov.in → "Consumer Grievance" mein jaayein' },
          { en: 'Fill the grievance form with your distributor complaint number', hi: 'Distributor complaint number ke saath grievance form bharein' },
          { en: 'DERC is the appellate authority — legally binding decision', hi: 'DERC appellate authority hai — legally binding decision deta hai' },
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
    bijli: [
      {
        badge: 'first',
        name: 'BESCOM — Online Complaint Portal',
        desc: { en: 'Bangalore Electricity Supply Company — official complaint portal', hi: 'Bangalore electricity complaint — BESCOM official portal' },
        url: 'https://bescom.karnataka.gov.in/page/Consumer+Helpdesk/Complaint+Registration/en',
        phone: '1912',
        howto: [
          { en: 'Open BESCOM portal → "Complaint Registration"', hi: 'BESCOM portal → "Complaint Registration" mein jaayein' },
          { en: 'Enter your RR Number (on your electricity bill)', hi: 'Electricity bill par RR Number enter karein' },
          { en: 'Select complaint type: Power Failure / Voltage / Bill / Meter', hi: 'Complaint type: Power Failure / Voltage / Bill / Meter chune' },
          { en: 'Submit and get complaint number via SMS', hi: 'Submit karein — SMS mein complaint number aayega' },
        ],
      },
      {
        badge: 'state',
        name: 'KERC — Karnataka Electricity Regulatory Commission',
        desc: { en: 'Escalate unresolved BESCOM/HESCOM/GESCOM complaints here', hi: 'BESCOM/HESCOM/GESCOM se haal na ho — KERC mein escalate karein' },
        url: 'https://kerc.karnataka.gov.in',
        phone: '080-22208456',
        howto: [
          { en: 'Open kerc.karnataka.gov.in → Consumer Grievance', hi: 'kerc.karnataka.gov.in → Consumer Grievance mein jaayein' },
          { en: 'File with BESCOM complaint number + date of filing', hi: 'BESCOM complaint number aur filing date ke saath file karein' },
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
    bijli: [
      {
        badge: 'first',
        name: 'TANGEDCO — Online Consumer Complaint',
        desc: { en: 'Tamil Nadu Generation & Distribution Corporation — official complaint', hi: 'Tamil Nadu electricity complaint — TANGEDCO official portal' },
        url: 'https://www.tangedco.gov.in/consumer_grievance.html',
        phone: '1912',
        howto: [
          { en: 'Open tangedco.gov.in → "Consumer Grievance"', hi: 'tangedco.gov.in → "Consumer Grievance" mein jaayein' },
          { en: 'Enter your Service Connection Number from the bill', hi: 'Bill se Service Connection Number enter karein' },
          { en: 'Select complaint type and describe the issue', hi: 'Complaint type select karein, issue describe karein' },
          { en: 'Note the reference number for follow-up', hi: 'Reference number note karein — follow-up ke liye' },
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
    bijli: [
      {
        badge: 'first',
        name: 'UPPCL — Consumer Complaint Portal',
        desc: { en: 'UP Power Corporation Limited — official complaint portal', hi: 'Uttar Pradesh bijli complaint — UPPCL official portal' },
        url: 'https://www.uppcl.org/consumer/complaint',
        phone: '1912',
        howto: [
          { en: 'Open uppcl.org → "Consumer Services" → "Complaint Registration"', hi: 'uppcl.org → "Consumer Services" → "Complaint Registration" karein' },
          { en: 'Login with your Account Number and registered mobile', hi: 'Account Number aur registered mobile se login karein' },
          { en: 'Select complaint type: Power Cut / Bill / Meter / New Connection', hi: 'Complaint type: Power Cut / Bill / Meter / New Connection chune' },
          { en: 'Submit — UPPCL must resolve within 24 hrs (outage) or 30 days (bill)', hi: 'Submit karein — UPPCL 24 ghante (outage) ya 30 din (bill) mein resolve karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'UPERC — UP Electricity Regulatory Commission',
        desc: { en: 'Escalate unresolved UPPCL complaints to state regulator', hi: 'UPPCL se haal na ho — UPERC mein escalate karein' },
        url: 'https://www.uperc.org',
        phone: '0522-2204540',
        howto: [
          { en: 'Open uperc.org → Consumer Grievance Redressal Forum', hi: 'uperc.org → Consumer Grievance Redressal Forum mein jaayein' },
          { en: 'File petition with UPPCL reference number and all documents', hi: 'UPPCL reference number aur saare documents ke saath petition file karein' },
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
    bijli: [
      {
        badge: 'first',
        name: 'JVVNL / AVVNL / JdVVNL — Rajasthan Bijli Complaint',
        desc: { en: 'Jaipur/Ajmer/Jodhpur Vidyut Vitran Nigam — online complaint portal', hi: 'Rajasthan bijli complaint — JVVNL/AVVNL/JdVVNL portal' },
        url: 'https://energy.rajasthan.gov.in/content/raj/energy-department/en/consumer-services.html',
        phone: '1912',
        howto: [
          { en: 'Open energy.rajasthan.gov.in → Consumer Services → Online Complaint', hi: 'energy.rajasthan.gov.in → Consumer Services → Online Complaint karein' },
          { en: 'Select your DISCOM: Jaipur (JVVNL) / Ajmer (AVVNL) / Jodhpur (JdVVNL)', hi: 'Apna DISCOM select karein: Jaipur (JVVNL) / Ajmer (AVVNL) / Jodhpur (JdVVNL)' },
          { en: 'Enter K No. (consumer number from bill) and describe complaint', hi: 'Bill se K No. enter karein aur complaint describe karein' },
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
    bijli: [
      {
        badge: 'first',
        name: 'PGVCL / MGVCL / UGVCL / DGVCL — Gujarat Bijli Complaint',
        desc: { en: 'Find your distribution company and file complaint online', hi: 'Gujarat bijli complaint — apna DISCOM dhundhen aur complaint karein' },
        url: 'https://ugvcl.com/consumer-services',
        phone: '1912',
        howto: [
          { en: 'Surat / South Gujarat: PGVCL → pgvcl.com | Ahmedabad / Central: MGVCL → mgvcl.com', hi: 'Surat/South Gujarat: pgvcl.com | Ahmedabad/Central: mgvcl.com' },
          { en: 'North Gujarat: UGVCL → ugvcl.com | Vadodara/South: DGVCL → dgvcl.com', hi: 'North Gujarat: ugvcl.com | Vadodara/South: dgvcl.com' },
          { en: 'Go to respective portal → Consumer Services → Complaint', hi: 'Apne portal par jaayein → Consumer Services → Complaint karein' },
          { en: 'Enter Consumer Number from bill and describe complaint', hi: 'Bill se Consumer Number enter karein aur complaint describe karein' },
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
    bijli: [
      {
        badge: 'first',
        name: 'WBSEDCL — Online Consumer Complaint',
        desc: { en: 'West Bengal State Electricity Distribution — official complaint', hi: 'West Bengal electricity complaint — WBSEDCL official portal' },
        url: 'https://www.wbsedcl.in/irj/portal/anonymous/complaintlogin',
        phone: '19121',
        howto: [
          { en: 'Open wbsedcl.in → "Lodge Complaint" / "Complaint Login"', hi: 'wbsedcl.in → "Lodge Complaint" / "Complaint Login" karein' },
          { en: 'Enter Consumer ID from your bill', hi: 'Bill se Consumer ID enter karein' },
          { en: 'Select complaint type and describe the issue', hi: 'Complaint type select karein aur issue describe karein' },
          { en: 'For CESC Kolkata area: cesc.co.in/complaintlogin.aspx', hi: 'Kolkata CESC area ke liye: cesc.co.in/complaintlogin.aspx' },
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
    bijli: [
      {
        badge: 'first',
        name: 'UHBVN / DHBVN — Haryana Bijli Complaint',
        desc: { en: 'Uttar/Dakshin Haryana Bijli Vitran Nigam — official complaint portal', hi: 'Haryana bijli complaint — UHBVN/DHBVN official portal' },
        url: 'https://uhbvn.org.in/web/portal/consumer-complaint',
        phone: '1912',
        howto: [
          { en: 'North Haryana (Ambala/Karnal): uhbvn.org.in | South (Gurugram/Faridabad): dhbvn.org.in', hi: 'North (Ambala/Karnal): uhbvn.org.in | South (Gurugram/Faridabad): dhbvn.org.in' },
          { en: 'Go to Consumer Services → Online Complaint', hi: 'Consumer Services → Online Complaint mein jaayein' },
          { en: 'Enter Account No. from bill → select complaint type → submit', hi: 'Bill se Account No. enter karein → complaint type → submit karein' },
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
    bijli: [
      {
        badge: 'first',
        name: 'PSPCL — Punjab State Power Corporation Complaint',
        desc: { en: 'PSPCL official consumer complaint portal for Punjab', hi: 'Punjab electricity complaint — PSPCL official portal' },
        url: 'https://www.pspcl.in/consumer-services',
        phone: '1912',
        howto: [
          { en: 'Open pspcl.in → "Consumer Services" → "Complaint Registration"', hi: 'pspcl.in → "Consumer Services" → "Complaint Registration" karein' },
          { en: 'Enter Account ID from your electricity bill', hi: 'Electricity bill se Account ID enter karein' },
          { en: 'Select complaint category and describe the issue', hi: 'Complaint category select karein aur issue describe karein' },
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
    bijli: [
      {
        badge: 'first',
        name: 'MPEZ / MPWZ / MPMZ — MP Bijli Complaint',
        desc: { en: 'MP East / West / Middle Zone — file electricity complaint online', hi: 'MP electricity complaint — zone wise portal' },
        url: 'https://www.mpcz.co.in/ConsumerPortal',
        phone: '1912',
        howto: [
          { en: 'Open portal.mpdiscom.co.in → Select your zone → Lodge Complaint', hi: 'portal.mpdiscom.co.in → Zone select karein → Lodge Complaint karein' },
          { en: 'MPEZ (East): mpez.co.in | MPWZ (West): mpwz.co.in | MPCZ (Central): mpcz.co.in', hi: 'East: mpez.co.in | West: mpwz.co.in | Central: mpcz.co.in' },
          { en: 'Enter Consumer Number from bill and complaint type', hi: 'Bill se Consumer Number enter karein aur complaint type select karein' },
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
    bijli: [
      {
        badge: 'first',
        name: 'KSEB Online Consumer Complaint',
        desc: { en: 'Kerala State Electricity Board — official online complaint portal', hi: 'Kerala electricity complaint — KSEB official portal' },
        url: 'https://wss.kseb.in/selfservices/complaint',
        phone: '1912',
        howto: [
          { en: 'Open wss.kseb.in → "Self Services" → "Complaint Registration"', hi: 'wss.kseb.in → "Self Services" → "Complaint Registration" karein' },
          { en: 'Enter your Consumer Number from the bill', hi: 'Bill se Consumer Number enter karein' },
          { en: 'Select complaint: Power Failure / Low Voltage / Bill / Meter', hi: 'Complaint: Power Failure / Low Voltage / Bill / Meter select karein' },
          { en: 'KSEB aims to restore supply within 4-8 hours for outages', hi: 'KSEB 4-8 ghante mein supply restore karne ki koshish karta hai' },
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
    bijli: [
      {
        badge: 'first',
        name: 'NBPDCL / SBPDCL — Bihar Bijli Complaint',
        desc: { en: 'North/South Bihar Power Distribution — online complaint portal', hi: 'Bihar electricity complaint — NBPDCL/SBPDCL portal' },
        url: 'https://www.nbpdcl.co.in/consumer-services.html',
        phone: '1912',
        howto: [
          { en: 'North Bihar: nbpdcl.co.in | South Bihar: sbpdcl.co.in', hi: 'North Bihar: nbpdcl.co.in | South Bihar: sbpdcl.co.in' },
          { en: 'Go to Consumer Services → Lodge Complaint', hi: 'Consumer Services → Lodge Complaint mein jaayein' },
          { en: 'Enter Consumer ID and describe the problem', hi: 'Consumer ID enter karein aur problem describe karein' },
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
    bijli: [
      {
        badge: 'first',
        name: 'APEPDCL / APSPDCL — AP Bijli Complaint',
        desc: { en: 'Andhra Pradesh Eastern/Southern Power Distribution — complaint portal', hi: 'Andhra Pradesh electricity complaint — APEPDCL/APSPDCL portal' },
        url: 'https://www.apepdcl.in/webportal/cms-consumer-grievance.html',
        phone: '1912',
        howto: [
          { en: 'East/North AP: apepdcl.in | South AP (Tirupati area): apspdcl.in', hi: 'East/North AP: apepdcl.in | South AP (Tirupati): apspdcl.in' },
          { en: 'Go to Consumer Grievance → Lodge Complaint', hi: 'Consumer Grievance → Lodge Complaint mein jaayein' },
          { en: 'Enter Service Number from bill', hi: 'Bill se Service Number enter karein' },
        ],
      },
    ],
  },

  // ── Telangana ─────────────────────────────────────────────────────────────
  Telangana: {
    bijli: [
      {
        badge: 'first',
        name: 'TSNPDCL / TSSPDCL — Telangana Bijli Complaint',
        desc: { en: 'TS Northern/Southern Power Distribution — complaint portal', hi: 'Telangana electricity complaint — TSNPDCL/TSSPDCL portal' },
        url: 'https://www.tsspdcl.in/ConsumerServices.html',
        phone: '1912',
        howto: [
          { en: 'Hyderabad/South Telangana: tsspdcl.in | North Telangana: tsnpdcl.in', hi: 'Hyderabad/South: tsspdcl.in | North Telangana: tsnpdcl.in' },
          { en: 'Click "Consumer Services" → "Complaint Registration"', hi: '"Consumer Services" → "Complaint Registration" mein jaayein' },
          { en: 'Enter Service Connection Number from bill', hi: 'Bill se Service Connection Number enter karein' },
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
