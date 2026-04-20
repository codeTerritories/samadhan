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
  first:   { en: 'Try here first',        hi: 'Sabse pehle yahan',       cls: 'badge-first',   weight: 5, weightColor: '#10B981', weightLabel: { en: 'Very High',   hi: 'बहुत अधिक'  } },
  direct:  { en: 'Direct call only',      hi: 'Sirf call karein',        cls: 'badge-direct',  weight: 4, weightColor: '#F59E0B', weightLabel: { en: 'High',        hi: 'अधिक'       } },
  state:   { en: 'State escalation',      hi: 'State level escalation',  cls: 'badge-state',   weight: 3, weightColor: '#3B82F6', weightLabel: { en: 'Medium',      hi: 'मध्यम'      } },
  central: { en: 'Central escalation',    hi: 'Central escalation',      cls: 'badge-central', weight: 2, weightColor: '#8B5CF6', weightLabel: { en: 'Low',         hi: 'कम'         } },
  last:    { en: 'Last resort — national',hi: 'Antim upay — national',   cls: 'badge-last',    weight: 1, weightColor: '#94A3B8', weightLabel: { en: 'Last Resort', hi: 'अंतिम विकल्प'} },
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
        name: 'BMC MyBMC Portal — Water Supply Complaint (Mumbai)',
        desc: { en: 'Brihanmumbai Municipal Corporation — 1916 helpline and MyBMC portal', hi: 'Mumbai water supply complaint — BMC 1916 ya MyBMC portal' },
        url: 'https://portal.mcgm.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7 free) OR 1800-229-222 — BMC water helpline', hi: '1916 dial karein (24×7 free) ya 1800-229-222 — BMC water helpline' },
          { en: 'Online: portal.mcgm.gov.in → Civic Complaints → select "Water Supply"', hi: 'portal.mcgm.gov.in → Civic Complaints → "Water Supply" select karein' },
          { en: 'WhatsApp: 8999-228-999 — send area, ward and issue description', hi: 'WhatsApp: 8999-228-999 — ward, area aur issue description bhejein' },
          { en: 'Enter your property / ward details → describe issue → submit → note complaint ID', hi: 'Property/ward details enter karein → issue describe karein → submit → complaint ID note karein' },
        ],
      },
      {
        badge: 'first',
        name: 'PMC — Pune Water Supply Complaint Portal',
        desc: { en: 'Pune Municipal Corporation — dedicated water grievance portal', hi: 'Pune water supply complaint — PMC grievance portal' },
        url: 'https://complaint.pmc.gov.in',
        phone: '1533',
        howto: [
          { en: 'Dial 1533 (PMC water supply helpline) OR 1800-1030-222', hi: '1533 dial karein (PMC water helpline) ya 1800-1030-222' },
          { en: 'Online: complaint.pmc.gov.in → register complaint', hi: 'complaint.pmc.gov.in → complaint register karein' },
          { en: 'Select "Water Supply" as department → enter consumer ID and address', hi: '"Water Supply" department select karein → consumer ID aur address enter karein' },
          { en: 'For other Maharashtra cities: contact your local municipal corporation water dept', hi: 'Other Maharashtra cities ke liye: apne local municipal corporation water dept se contact karein' },
        ],
      },
      {
        badge: 'state',
        name: 'MJP — Maharashtra Jeevan Pradhikaran Grievance',
        desc: { en: 'MJP supplies water to Nagpur, Nashik, Aurangabad, Amravati regions', hi: 'MJP — Nagpur, Nashik, Aurangabad, Amravati ke liye water supply authority' },
        url: 'https://mjp.maharashtra.gov.in/grievance',
        phone: '020-22880577',
        howto: [
          { en: 'Open mjp.maharashtra.gov.in/grievance → submit grievance online', hi: 'mjp.maharashtra.gov.in/grievance → online grievance submit karein' },
          { en: 'Select your region: Pune / Konkan / Aurangabad / Amravati / Nagpur / Nashik', hi: 'Region select karein: Pune / Konkan / Aurangabad / Amravati / Nagpur / Nashik' },
          { en: 'Fill name, connection details, area and describe issue', hi: 'Naam, connection details, area enter karein aur issue describe karein' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'BMC — Mumbai Pothole & Road Complaint (1916)',
        desc: { en: 'Mumbai BMC road pothole, cave-in, broken road — 1916 helpline and portal', hi: 'Mumbai pothole, road damage — BMC 1916 helpline ya portal par complaint' },
        url: 'https://portal.mcgm.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7 free) — BMC road complaint helpline Mumbai', hi: '1916 dial karein (24×7 free) — BMC Mumbai road complaint helpline' },
          { en: 'Online: portal.mcgm.gov.in → Complaints → "Roads" department', hi: 'portal.mcgm.gov.in → Complaints → "Roads" department select karein' },
          { en: 'WhatsApp: 8999-228-999 — send photo of pothole with location', hi: 'WhatsApp: 8999-228-999 — pothole ki photo aur location bhejein' },
          { en: 'Enter ward/zone, describe road damage type and exact location', hi: 'Ward/zone enter karein, road damage type aur exact location describe karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Maharashtra PWD — State Road Grievance',
        desc: { en: 'Maharashtra PWD for state highways and inter-city roads', hi: 'Maharashtra PWD — state highway aur inter-city road complaints' },
        url: 'https://pwd.maharashtra.gov.in/en/grievance-redressal/',
        phone: '1800-120-8040',
        howto: [
          { en: 'Dial 1800-120-8040 OR open pwd.maharashtra.gov.in → Grievance Redressal', hi: '1800-120-8040 dial karein ya pwd.maharashtra.gov.in → Grievance Redressal' },
          { en: 'Select road type: State Highway / District Road / Village Road', hi: 'Road type select: State Highway / District Road / Village Road' },
          { en: 'For National Highways in Maharashtra: NHAI 1033', hi: 'Maharashtra mein National Highways ke liye: NHAI 1033 dial karein' },
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
        name: 'Delhi Jal Board — Complaint Helpline & Portal',
        desc: { en: 'Delhi Jal Board — 1916 helpline, WhatsApp and online complaint portal', hi: 'Delhi Jal Board — 1916 helpline, WhatsApp ya online complaint' },
        url: 'https://delhijalboard.delhi.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7 free) OR 1800-117-118 — DJB helpline', hi: '1916 dial karein (24×7 free) ya 1800-117-118 — DJB helpline' },
          { en: 'WhatsApp: 9650291021 — send your area and problem', hi: 'WhatsApp: 9650291021 — apna area aur problem send karein' },
          { en: 'Online: delhijalboard.delhi.gov.in → "Lodge Complaint" → register with mobile OTP', hi: 'delhijalboard.delhi.gov.in → "Lodge Complaint" → mobile OTP se register karein' },
          { en: 'Select issue: No Supply / Leakage / Water Quality / Billing → submit → note complaint number', hi: 'Issue select karein → submit karein → complaint number note karein' },
          { en: 'Water logging emergency: WhatsApp 8383068300', hi: 'Water logging emergency ke liye: WhatsApp 8383068300' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'Delhi PWD — Road & Pothole Complaint Portal',
        desc: { en: 'Delhi PWD Sewa — 1908 helpline and pwdsewa.pwddelhi.gov.in portal', hi: 'Delhi PWD — road pothole complaint 1908 helpline ya online portal' },
        url: 'https://pwdsewa.pwddelhi.gov.in/Home/SubmitComplaint/',
        phone: '1908',
        howto: [
          { en: 'Dial 1908 (toll-free) OR open pwdsewa.pwddelhi.gov.in → Submit Complaint', hi: '1908 dial karein (toll-free) ya pwdsewa.pwddelhi.gov.in → Submit Complaint' },
          { en: 'WhatsApp: 8130188222 — send pothole photo with exact location', hi: 'WhatsApp: 8130188222 — pothole photo exact location ke saath bhejein' },
          { en: 'Select complaint: Pothole / Road Damage / Waterlogging / Broken Divider', hi: 'Complaint: Pothole / Road Damage / Waterlogging / Broken Divider select karein' },
          { en: 'Delhi PWD targets 24–48 hr repair — "Pothole Free Delhi" initiative', hi: 'Delhi PWD 24–48 ghante mein repair target karta hai — "Pothole Free Delhi" initiative' },
          { en: 'For local colony roads: file with your MCD ward office (mcdonline.nic.in)', hi: 'Colony roads ke liye: MCD ward office — mcdonline.nic.in par complaint dein' },
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
        name: 'BWSSB — Bangalore Water Supply Complaint (CMS Portal)',
        desc: { en: 'BWSSB serves Bengaluru — 1916 / 1902 helpline and CMS complaint portal', hi: 'Bangalore water supply complaint — BWSSB 1916 ya CMS portal' },
        url: 'https://cms.bwssb.gov.in/module/complain/new_complaint',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) OR 1902 OR 080-2223-8888 — BWSSB helpline', hi: '1916 (24×7) ya 1902 ya 080-2223-8888 — BWSSB helpline' },
          { en: 'Online CMS portal: cms.bwssb.gov.in → "New Complaint" → login with consumer number', hi: 'cms.bwssb.gov.in → "New Complaint" → consumer number se login karein' },
          { en: 'WhatsApp: 87622-28888 | Email: bwssbcallcenter@gmail.com', hi: 'WhatsApp: 87622-28888 | Email: bwssbcallcenter@gmail.com' },
          { en: 'Enter RR Number (from water bill) → select issue type → submit → note complaint ID', hi: 'Bill se RR Number enter karein → issue type select karein → submit → complaint ID note karein' },
          { en: 'BWSSB resolves supply complaints within 24-48 hours', hi: 'BWSSB supply complaints 24-48 ghante mein resolve karta hai' },
        ],
      },
      {
        badge: 'first',
        name: 'KUWSDB — Other Karnataka Urban Areas (Non-Bengaluru)',
        desc: { en: 'Karnataka Urban Water Supply and Drainage Board — 213 towns outside Bengaluru', hi: 'Bengaluru ke alava 213 Karnataka towns ke liye — KUWSDB complaint' },
        url: 'https://ocr.kuwsdb.org',
        phone: '080-4000-1000',
        howto: [
          { en: 'Control Room: 080-4000-1000 (24×7)', hi: 'Control Room: 080-4000-1000 (24×7)' },
          { en: 'SMS: Text "WATER" to 9220092200 | WhatsApp: 9880655555', hi: 'SMS: 9220092200 par "WATER" bhejein | WhatsApp: 9880655555' },
          { en: 'Online: ocr.kuwsdb.org → complaint docket tracking', hi: 'ocr.kuwsdb.org → complaint docket track karein' },
          { en: 'Enter consumer ID, location and issue details', hi: 'Consumer ID, location aur issue details enter karein' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'BBMP — Bangalore Pothole & Road Complaint (1533)',
        desc: { en: 'BBMP Sahaya portal / Fix Pothole app — 1533 helpline for Bengaluru roads', hi: 'Bangalore pothole, road damage — BBMP 1533 helpline ya Sahaya portal' },
        url: 'https://bbmpsahaya.karnataka.gov.in',
        phone: '1533',
        howto: [
          { en: 'Dial 1533 OR WhatsApp: +91 94806-85700 — BBMP Bengaluru road complaint', hi: '1533 dial karein ya WhatsApp +91 94806-85700 — BBMP road complaint' },
          { en: 'Online: bbmpsahaya.karnataka.gov.in → "New Complaint" → "Roads"', hi: 'bbmpsahaya.karnataka.gov.in → "New Complaint" → "Roads" select karein' },
          { en: 'App: "Fix My Street" / "BBMP Fix Pothole" on Play Store/App Store', hi: 'App: "Fix My Street" ya "BBMP Fix Pothole" — Play Store/App Store se download karein' },
          { en: 'Upload photo with GPS location — BBMP pothole map tracks repair status', hi: 'GPS location ke saath photo upload karein — BBMP pothole map par status track karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Karnataka PWD — State Highway Road Complaint',
        desc: { en: 'Karnataka PWD for state highways outside Bengaluru city', hi: 'Karnataka PWD — Bengaluru ke bahar state highway road complaint' },
        url: 'https://pwd.karnataka.gov.in',
        phone: '080-22032200',
        howto: [
          { en: 'Open pwd.karnataka.gov.in → Citizen Services → Grievance', hi: 'pwd.karnataka.gov.in → Citizen Services → Grievance mein jaayein' },
          { en: 'For NHAI (National Highways in Karnataka): dial 1033', hi: 'Karnataka mein National Highways ke liye: NHAI 1033 dial karein' },
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
        name: 'CMWSSB — Chennai Metro Water Complaint Portal',
        desc: { en: 'Chennai Metropolitan Water Supply & Sewerage Board — 14420 helpline', hi: 'Chennai water supply complaint — CMWSSB 14420 ya online portal' },
        url: 'https://cmwssb.tn.gov.in/complaint-redressal',
        phone: '14420',
        howto: [
          { en: 'Dial 14420 (24×7 call centre) OR 1916 OR 044-4567-4567', hi: '14420 dial karein (24×7) ya 1916 ya 044-4567-4567' },
          { en: 'Online: cmwssb.tn.gov.in/complaint-redressal → "Register New Complaint"', hi: 'cmwssb.tn.gov.in/complaint-redressal → "Register New Complaint" karein' },
          { en: 'WhatsApp: 8144930308 | App: "Metro Water" on Google Play', hi: 'WhatsApp: 8144930308 | App: Google Play par "Metro Water" app download karein' },
          { en: 'Enter Consumer Number from bill → select issue type → submit', hi: 'Bill se Consumer Number enter karein → issue type select karein → submit karein' },
          { en: 'For areas outside Chennai: TWAD Board — 044-2841-6420', hi: 'Chennai ke bahar: TWAD Board — 044-2841-6420 call karein' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'GCC — Chennai Road & Pothole Complaint (1913)',
        desc: { en: 'Greater Chennai Corporation — 1913 helpline for roads, potholes, waterlogging', hi: 'Chennai road pothole, waterlogging — GCC 1913 helpline ya portal' },
        url: 'https://gccservices.in/pgr',
        phone: '1913',
        howto: [
          { en: 'Dial 1913 (24×7) OR WhatsApp: +91 94450-61913', hi: '1913 dial karein (24×7) ya WhatsApp: +91 94450-61913' },
          { en: 'Online: gccservices.in/pgr → register complaint → select "Roads"', hi: 'gccservices.in/pgr → complaint register karein → "Roads" select karein' },
          { en: 'Select complaint: Pothole / Road Damage / Damaged Footpath / Road Digging', hi: 'Complaint: Pothole / Road Damage / Damaged Footpath / Road Digging select karein' },
          { en: 'Upload geotagged photo — zone-wise nodal officer assigned within 24 hrs', hi: 'Geotagged photo upload karein — zone-wise nodal officer 24 ghante mein assign hoga' },
        ],
      },
      {
        badge: 'state',
        name: 'TN PWD — Tamil Nadu State Highway Complaint',
        desc: { en: 'Tamil Nadu PWD for state highways and district roads', hi: 'TN PWD — state highway aur district road complaints' },
        url: 'https://www.tn.gov.in/dept/pwd',
        phone: '044-25672480',
        howto: [
          { en: 'Open tn.gov.in → department PWD → Grievance submission', hi: 'tn.gov.in → PWD department → Grievance submit karein' },
          { en: 'Escalation: TN CM Grievance Cell — cmcell.tn.gov.in', hi: 'Escalation ke liye: TN CM Grievance Cell — cmcell.tn.gov.in' },
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
        name: 'Jal Samadhan UP — Water Complaint Portal',
        desc: { en: 'UP Jal Nigam official online complaint portal — jalsamadhan.in', hi: 'UP water supply complaint — Jal Samadhan portal' },
        url: 'https://jalsamadhan.in/Consumer/FileComplain_hi',
        phone: '18001212164',
        howto: [
          { en: 'Dial 18001212164 (toll-free) — UP Jal Nigam helpline', hi: '18001212164 dial karein (toll-free) — UP Jal Nigam helpline' },
          { en: 'Online: jalsamadhan.in → "File Complaint" → enter consumer/connection ID', hi: 'jalsamadhan.in → "File Complaint" → consumer/connection ID enter karein' },
          { en: 'Select your district and describe issue: No Supply / Leakage / Quality', hi: 'District select karein aur issue describe karein: No Supply / Leakage / Quality' },
          { en: 'Lucknow city (Jal Kal): 81770-54003 | 0522-2620172', hi: 'Lucknow city (Jal Kal): 81770-54003 ya 0522-2620172' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'UP PWD — Road & Pothole Complaint Portal',
        desc: { en: 'UP Public Works Department — 1800-121-5707 helpline and uppwd.gov.in', hi: 'UP PWD — road pothole complaint 1800-121-5707 helpline ya portal' },
        url: 'https://uppwd.gov.in',
        phone: '1800-121-5707',
        howto: [
          { en: 'Dial 1800-121-5707 (toll-free) — UP PWD road complaint helpline', hi: '1800-121-5707 dial karein (toll-free) — UP PWD road complaint helpline' },
          { en: 'WhatsApp: 79919-95566 — send pothole photo with location details', hi: 'WhatsApp: 79919-95566 — pothole photo aur location details bhejein' },
          { en: 'Online: uppwd.gov.in → Grievance → select district and road type', hi: 'uppwd.gov.in → Grievance → district aur road type select karein' },
          { en: 'For National Highways (NH) in UP: NHAI 1033', hi: 'UP mein National Highways ke liye: NHAI 1033 dial karein' },
        ],
      },
      {
        badge: 'state',
        name: 'UP Jansunwai 1076 — Road Escalation',
        desc: { en: 'UP PWD not acting? Escalate via CM Helpline 1076 / Jansunwai', hi: 'UP PWD action nahi? CM Helpline 1076 / Jansunwai se escalate karein' },
        url: 'https://jansunwai.up.nic.in',
        phone: '1076',
        howto: [
          { en: 'Dial 1076 OR open jansunwai.up.nic.in → select PWD department', hi: '1076 dial karein ya jansunwai.up.nic.in → PWD department select karein' },
          { en: 'Attach UP PWD complaint reference number — CM office monitors strictly', hi: 'UP PWD complaint reference number attach karein — CM office strictly monitor karta hai' },
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
        name: 'PHED Rajasthan — Water Supply Complaint Portal',
        desc: { en: 'Public Health Engineering Dept Rajasthan — 1800-180-6088 helpline and online portal', hi: 'Rajasthan PHED — pani supply complaint ke liye 1800-180-6088 ya online portal' },
        url: 'https://phedubm.rajasthan.gov.in/Complaint.aspx?Type=2',
        phone: '1800-180-6088',
        howto: [
          { en: 'Dial 1800-180-6088 (toll-free) — PHED Rajasthan water helpline', hi: '1800-180-6088 dial karein (toll-free) — PHED Rajasthan water helpline' },
          { en: 'Online: phedubm.rajasthan.gov.in → "Register Complaint" → select your district & zone', hi: 'phedubm.rajasthan.gov.in → "Register Complaint" → district & zone select karein' },
          { en: 'Select complaint: No Water Supply / Low Pressure / Leakage / Water Quality', hi: 'Complaint type: No Water / Low Pressure / Leakage / Water Quality select karein' },
          { en: 'Enter connection number from water bill → describe problem → submit → note ID', hi: 'Water bill se connection number enter karein → problem describe karein → submit → ID note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Rajasthan Sampark 181 — Water Escalation',
        desc: { en: 'Chief Minister Sampark 181 — escalate unresolved PHED water complaints', hi: 'CM Sampark 181 — PHED se resolve nahi hua to 181 se escalate karein' },
        url: 'https://sampark.rajasthan.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 OR open sampark.rajasthan.gov.in', hi: '181 dial karein ya sampark.rajasthan.gov.in kholen' },
          { en: 'Select department: "PHED" or "Nagar Palika"', hi: 'Department: "PHED" ya "Nagar Palika" select karein' },
          { en: 'Describe water problem with PHED complaint reference number — 7-day SLA', hi: 'PHED complaint reference number ke saath problem describe karein — 7 din mein response' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'Rajasthan PWD — Road & Pothole Complaint',
        desc: { en: 'Rajasthan PWD — 1800-110-093 helpline and OTP-based complaint system', hi: 'Rajasthan road pothole complaint — PWD 1800-110-093 helpline ya portal' },
        url: 'https://pwdrajsewa.rajasthan.gov.in',
        phone: '1800-110-093',
        howto: [
          { en: 'Dial 1800-110-093 (toll-free) — Rajasthan PWD road helpline', hi: '1800-110-093 dial karein (toll-free) — Rajasthan PWD road helpline' },
          { en: 'Online: pwdrajsewa.rajasthan.gov.in → Submit Complaint Step 1 (OTP login)', hi: 'pwdrajsewa.rajasthan.gov.in → Submit Complaint → OTP se login karein' },
          { en: 'Select road type: State Highway / District Road → enter km marker or landmark', hi: 'Road type: State Highway / District Road → km marker ya landmark enter karein' },
          { en: 'Upload photo and describe damage — complaint tracked till resolution', hi: 'Photo upload karein, damage describe karein — resolution tak tracked rehti hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Rajasthan Sampark 181 — Road Escalation',
        desc: { en: 'PWD not acting? Escalate via Rajasthan CM Helpline 181', hi: 'PWD action nahi? Rajasthan CM Helpline 181 par escalate karein' },
        url: 'https://sampark.rajasthan.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 OR open sampark.rajasthan.gov.in → select "PWD"', hi: '181 dial karein ya sampark.rajasthan.gov.in → "PWD" select karein' },
          { en: 'Describe road damage with previous PWD complaint reference number', hi: 'PWD complaint reference ke saath road damage describe karein' },
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
        name: 'AMC — Ahmedabad Municipal Water Complaint (155303)',
        desc: { en: 'Ahmedabad Municipal Corporation — water supply 155303 helpline and amccrs.com', hi: 'Ahmedabad water complaint — AMC 155303 ya amccrs.com portal' },
        url: 'https://www.amccrs.com',
        phone: '155303',
        howto: [
          { en: 'Dial 155303 (AMC citizen helpline) OR open amccrs.com', hi: '155303 dial karein (AMC helpline) ya amccrs.com kholen' },
          { en: 'Online: amccrs.com → Lodge Complaint → select "Water Supply"', hi: 'amccrs.com → Lodge Complaint → "Water Supply" select karein' },
          { en: 'Enter ward/zone, consumer ID, and describe the water problem', hi: 'Ward/zone, consumer ID enter karein aur water problem describe karein' },
          { en: 'For Surat: SMC helpline 0261-2222333 | Rajkot: RMC 1800-1200-2333', hi: 'Surat: SMC 0261-2222333 | Rajkot: RMC 1800-1200-2333' },
        ],
      },
      {
        badge: 'state',
        name: 'GWSSB — Gujarat Rural Water Supply Complaint',
        desc: { en: 'Gujarat Water Supply & Sewerage Board — covers rural/non-municipal Gujarat', hi: 'GWSSB — Gujarat ke rural/non-municipal areas mein water supply complaint' },
        url: 'https://gwssb.guj.nic.in',
        phone: '079-23252400',
        howto: [
          { en: 'Online: gwssb.guj.nic.in → Citizen Services → Complaint', hi: 'gwssb.guj.nic.in → Citizen Services → Complaint mein jaayein' },
          { en: 'Select your district and taluka → describe water supply problem', hi: 'District aur taluka select karein → water supply problem describe karein' },
          { en: 'GWSSB helpline: 079-23252400 (9 AM – 6 PM)', hi: 'GWSSB helpline: 079-23252400 (9 AM – 6 PM)' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'AMC — Ahmedabad Road & Pothole Complaint (155303)',
        desc: { en: 'Ahmedabad Municipal Corporation — 155303 for road/pothole complaints', hi: 'Ahmedabad road pothole complaint — AMC 155303 helpline ya amccrs.com' },
        url: 'https://www.amccrs.com',
        phone: '155303',
        howto: [
          { en: 'Dial 155303 (AMC helpline) OR open amccrs.com → Lodge Complaint', hi: '155303 dial karein ya amccrs.com → Lodge Complaint select karein' },
          { en: 'Select complaint: Pothole / Road Damage / Broken Footpath', hi: 'Complaint: Pothole / Road Damage / Broken Footpath select karein' },
          { en: 'Upload photo with location — AMC aims to repair within 48 hours', hi: 'Location ke saath photo upload karein — AMC 48 ghante mein repair karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Gujarat R&B Dept — State Highway Road Complaint',
        desc: { en: 'Gujarat Roads & Buildings Dept for state highways and inter-city roads', hi: 'Gujarat R&B Dept — state highway aur inter-city road complaints' },
        url: 'https://rnb.gujarat.gov.in',
        phone: '079-23251801',
        howto: [
          { en: 'Open rnb.gujarat.gov.in → Citizen Services → Grievance', hi: 'rnb.gujarat.gov.in → Citizen Services → Grievance mein jaayein' },
          { en: 'For Surat: SMC road 0261-2222333 | Vadodara: VMC 0265-2425599', hi: 'Surat: SMC road 0261-2222333 | Vadodara: VMC 0265-2425599' },
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
        name: 'KMC — Kolkata Water Supply Complaint (1916)',
        desc: { en: 'Kolkata Municipal Corporation — 1916 helpline and kmcgov.in online portal', hi: 'Kolkata water supply complaint — KMC 1916 helpline ya kmcgov.in' },
        url: 'https://www.kmcgov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — KMC water helpline Kolkata', hi: '1916 dial karein (24×7) — Kolkata KMC water helpline' },
          { en: 'Online: kmcgov.in → e-Services → Complaint Registration → select "Water Supply"', hi: 'kmcgov.in → e-Services → Complaint Registration → "Water Supply" select karein' },
          { en: 'Enter your Borough and Ward number with consumer ID from bill', hi: 'Borough aur Ward number aur bill se consumer ID enter karein' },
          { en: 'WhatsApp: 9831001234 (KMC civic complaints)', hi: 'WhatsApp: 9831001234 — KMC civic complaints ke liye' },
        ],
      },
      {
        badge: 'state',
        name: 'WBPHED — West Bengal Water Supply (Non-Kolkata)',
        desc: { en: 'WB Public Health Engineering Dept — rural and town water supply outside Kolkata', hi: 'Kolkata ke bahar WB water supply — PHED complaint portal' },
        url: 'https://phed.wb.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 — WB water helpline (works in most districts)', hi: '1916 dial karein — WB water helpline (most districts mein kaam karta hai)' },
          { en: 'Online: phed.wb.gov.in → Citizen Services → Lodge Complaint', hi: 'phed.wb.gov.in → Citizen Services → Lodge Complaint karein' },
          { en: 'Select district → describe issue: No Supply / Leakage / Quality', hi: 'District select karein → describe: No Supply / Leakage / Quality' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'WB PWD — Road Complaint Portal & WhatsApp',
        desc: { en: 'West Bengal PWD — 1800-3456-179 helpline and WhatsApp 9088822111', hi: 'WB road pothole complaint — PWD 1800-3456-179 ya WhatsApp 9088822111' },
        url: 'https://pwd.wb.gov.in/general/login?module=grievance',
        phone: '1800-3456-179',
        howto: [
          { en: 'Dial 1800-3456-179 (toll-free) — WB PWD road complaint helpline', hi: '1800-3456-179 dial karein (toll-free) — WB PWD road complaint helpline' },
          { en: 'WhatsApp: 9088822111 — send pothole photo with exact location (48-hr promise)', hi: 'WhatsApp: 9088822111 — pothole photo exact location ke saath — 48 ghante mein repair promise' },
          { en: 'Online: pwd.wb.gov.in → Grievance Module → register complaint', hi: 'pwd.wb.gov.in → Grievance Module → complaint register karein' },
          { en: 'For Kolkata city roads: KMC — kmcgov.in → e-Services → Roads', hi: 'Kolkata city roads ke liye: KMC — kmcgov.in → e-Services → Roads' },
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
        name: 'PHED Haryana — Urban & Rural Water Complaint',
        desc: { en: 'Public Health Engineering Dept Haryana — 1800-2000-023 helpline & online portal', hi: 'Haryana PHED — pani supply complaint ke liye 1800-2000-023 ya online portal' },
        url: 'https://services.phedharyana.gov.in',
        phone: '1800-2000-023',
        howto: [
          { en: 'Dial 1800-2000-023 (toll-free) — PHED Haryana water helpline', hi: '1800-2000-023 dial karein (toll-free) — PHED Haryana water helpline' },
          { en: 'Online: services.phedharyana.gov.in → Register Complaint → select district', hi: 'services.phedharyana.gov.in → Register Complaint → district select karein' },
          { en: 'Enter your connection number from water bill → describe issue → submit', hi: 'Water bill se connection number enter karein → issue describe karein → submit' },
          { en: 'Complaint is assigned to local PHED JE (Junior Engineer) — 48-hr response target', hi: 'Complaint local PHED JE ko assign hoti hai — 48 ghante mein response target' },
        ],
      },
      {
        badge: 'first',
        name: 'GMDA — Gurugram Water Supply Complaint',
        desc: { en: 'Gurugram Metropolitan Development Authority — 1800-180-1817 helpline', hi: 'Gurugram water complaint — GMDA 1800-180-1817 ya services.gmda.gov.in' },
        url: 'https://services.gmda.gov.in',
        phone: '1800-180-1817',
        howto: [
          { en: 'Dial 1800-180-1817 (toll-free) — GMDA Gurugram helpline', hi: '1800-180-1817 dial karein (toll-free) — GMDA Gurugram helpline' },
          { en: 'Online: services.gmda.gov.in → Complaint Registration → "Water Supply"', hi: 'services.gmda.gov.in → Complaint Registration → "Water Supply" select karein' },
          { en: 'Enter sector/colony/house number → describe water issue → submit', hi: 'Sector/colony/house number → water issue describe → submit karein' },
        ],
      },
      {
        badge: 'state',
        name: 'CM Window Haryana — Water Escalation',
        desc: { en: 'PHED/GMDA not resolving? Escalate via CM Window 1100', hi: 'PHED/GMDA resolve nahi? CM Window 1100 par escalate karein' },
        url: 'https://cmwindow.haryana.gov.in',
        phone: '1100',
        howto: [
          { en: 'Dial 1100 OR open cmwindow.haryana.gov.in', hi: '1100 dial karein ya cmwindow.haryana.gov.in kholen' },
          { en: 'Select department: "PHED" or "Urban Local Bodies"', hi: 'Department: "PHED" ya "Urban Local Bodies" select karein' },
          { en: 'Describe with previous reference number — CM Window has strict SLA monitoring', hi: 'Pichle PHED reference number ke saath describe karein — strict SLA monitoring' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'Haryana PWD — Road & Pothole Complaint',
        desc: { en: 'Haryana PWD — haryanapwd.gov.in for state road/pothole complaints', hi: 'Haryana road pothole complaint — haryanapwd.gov.in ya 1800-8900-929' },
        url: 'https://haryanapwd.gov.in',
        phone: '1800-8900-929',
        howto: [
          { en: 'Open haryanapwd.gov.in → Citizen Services → Lodge Complaint', hi: 'haryanapwd.gov.in → Citizen Services → Lodge Complaint mein jaayein' },
          { en: 'eSAMADHAN toll-free: 1800-8900-929 — for all PWD road complaints', hi: 'eSAMADHAN toll-free: 1800-8900-929 — PWD road complaints ke liye' },
          { en: 'Gurugram roads: GMDA — services.gmda.gov.in → Roads section', hi: 'Gurugram roads ke liye: services.gmda.gov.in → Roads section' },
          { en: 'For National Highways: NHAI 1033', hi: 'National Highways ke liye: NHAI 1033 dial karein' },
        ],
      },
      {
        badge: 'state',
        name: 'CM Window Haryana — Road Escalation',
        desc: { en: 'PWD not repairing? Escalate via Haryana CM Window 1100', hi: 'PWD repair nahi kar raha? CM Window 1100 par escalate karein' },
        url: 'https://cmwindow.haryana.gov.in',
        phone: '1100',
        howto: [
          { en: 'Dial 1100 OR open cmwindow.haryana.gov.in → select "PWD"', hi: '1100 dial karein ya cmwindow.haryana.gov.in → "PWD" select karein' },
          { en: 'Add previous PWD complaint reference — CM Window SLA is strict', hi: 'Pichla PWD complaint reference add karein — CM Window ka SLA strict hai' },
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
    pani: [
      {
        badge: 'first',
        name: 'PWSSB — Punjab Water Supply & Sewerage Complaint',
        desc: { en: 'Punjab Water Supply & Sewerage Board — 1800-1800-0172 helpline and online', hi: 'Punjab PWSSB — pani supply complaint ke liye 1800-1800-0172 ya online portal' },
        url: 'https://pwssb.punjab.gov.in',
        phone: '1800-1800-0172',
        howto: [
          { en: 'Dial 1800-1800-0172 (toll-free) — PWSSB Punjab water helpline', hi: '1800-1800-0172 dial karein (toll-free) — PWSSB Punjab water helpline' },
          { en: 'Online: pwssb.punjab.gov.in → Consumer Services → Register Complaint', hi: 'pwssb.punjab.gov.in → Consumer Services → Register Complaint karein' },
          { en: 'Enter consumer/connection ID → select complaint: No Supply / Leakage / Quality', hi: 'Consumer/connection ID enter karein → complaint select: No Supply / Leakage / Quality' },
          { en: 'For Amritsar: AMC water dept 0183-2220000 | Ludhiana: LMC 0161-2444444', hi: 'Amritsar: AMC 0183-2220000 | Ludhiana: LMC 0161-2444444' },
        ],
      },
      {
        badge: 'state',
        name: 'Punjab Grievance Portal — Water Escalation',
        desc: { en: 'PWSSB not resolving? Escalate via Punjab state grievance portal', hi: 'PWSSB resolve nahi? Punjab state grievance portal par escalate karein' },
        url: 'https://punjabpgrs.gov.in',
        phone: '0172-2970125',
        howto: [
          { en: 'Open punjabpgrs.gov.in → Register/Login', hi: 'punjabpgrs.gov.in → Register/Login karein' },
          { en: 'Select department: "PWSSB" and attach previous complaint reference', hi: 'Department: "PWSSB" select karein aur pichla complaint reference attach karein' },
          { en: 'Complaint escalated to divisional level within 48 hours', hi: 'Complaint 48 ghante mein divisional level par escalate hoti hai' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'Punjab PWD — Road & Pothole Complaint',
        desc: { en: 'Punjab PWD B&R — pwdpunjab.gov.in road complaint portal', hi: 'Punjab road pothole complaint — Punjab PWD portal ya CM helpline' },
        url: 'https://pwdpunjab.gov.in',
        phone: '0175-2360003',
        howto: [
          { en: 'Call Punjab PWD: 0175-2360003 (Patiala) or 0175-2360039', hi: 'Punjab PWD call karein: 0175-2360003 ya 0175-2360039 (Patiala)' },
          { en: 'Online: pwdpunjab.gov.in → Contact/Complaint → select division', hi: 'pwdpunjab.gov.in → Contact/Complaint → apna division select karein' },
          { en: 'CM Punjab 24×7 toll-free: 08000-02345 for road complaint escalation', hi: 'CM Punjab 24×7 toll-free: 08000-02345 — road complaint escalation ke liye' },
          { en: 'For city roads (Amritsar/Ludhiana): contact municipal corporation', hi: 'City roads (Amritsar/Ludhiana) ke liye: municipal corporation se contact karein' },
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
    pani: [
      {
        badge: 'first',
        name: 'PHED MP — Water Supply Complaint Portal',
        desc: { en: 'MP Public Health Engineering Dept — water supply complaints via 181 / phedmp.gov.in', hi: 'MP water supply complaint — PHED 181 ya phedmp.gov.in portal' },
        url: 'https://phedmp.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 (MP CM Helpline) → select "PHED" for water complaints', hi: '181 dial karein (MP CM Helpline) → "PHED" select karein — water complaint ke liye' },
          { en: 'Online: phedmp.gov.in → Complaint Registration → select district', hi: 'phedmp.gov.in → Complaint Registration → district select karein' },
          { en: 'Enter connection number → select issue: No Supply / Leakage / Quality / Billing', hi: 'Connection number enter karein → issue select: No Supply / Leakage / Quality' },
          { en: 'For Bhopal: BMC water dept 0755-2776222 | Indore: IMC 0731-2543440', hi: 'Bhopal: BMC water dept 0755-2776222 | Indore: IMC 0731-2543440' },
        ],
      },
      {
        badge: 'state',
        name: 'MP Samadhan Portal — Water Escalation',
        desc: { en: 'PHED not resolving? Escalate via MP CM Helpline / Samadhan portal', hi: 'PHED resolve nahi? samadhan.mp.gov.in ya 181 se escalate karein' },
        url: 'https://samadhan.mp.gov.in',
        phone: '181',
        howto: [
          { en: 'Open samadhan.mp.gov.in → "Lodge Complaint" → select PHED department', hi: 'samadhan.mp.gov.in → "Lodge Complaint" → PHED department select karein' },
          { en: 'Describe water problem with previous PHED reference number', hi: 'PHED reference number ke saath water problem describe karein' },
          { en: 'CM Helpline 181 strictly monitors PHED resolutions — 7-day SLA', hi: 'CM Helpline 181 PHED resolution strictly monitor karta hai — 7 din ka SLA' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'MP PWD — Road & Pothole Complaint (181)',
        desc: { en: 'Madhya Pradesh PWD — CM Helpline 181 or mppwd.gov.in for road complaints', hi: 'MP road pothole complaint — CM Helpline 181 ya mppwd.gov.in portal' },
        url: 'https://mppwd.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 (MP CM Helpline) → select "PWD" for road complaint', hi: '181 dial karein (MP CM Helpline) → "PWD" select karein — road complaint ke liye' },
          { en: 'Online: mppwd.gov.in → Citizen Services → Complaint Registration', hi: 'mppwd.gov.in → Citizen Services → Complaint Registration karein' },
          { en: 'For Bhopal city roads: BMC 0755-2776222 | Indore: IMC 0731-2543440', hi: 'Bhopal city roads: BMC 0755-2776222 | Indore city: IMC 0731-2543440' },
          { en: 'Enter road name / km marker / landmark and upload pothole photo', hi: 'Road name / km marker / landmark enter karein aur pothole photo upload karein' },
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
    sadak: [
      {
        badge: 'first',
        name: 'Kerala PWD — Road & Pothole Complaint (1800-425-7771)',
        desc: { en: 'Kerala Public Works Department — PWD4U app and 1800-425-7771 helpline', hi: 'Kerala road pothole complaint — PWD4U app ya 1800-425-7771 helpline' },
        url: 'https://www.pwd.kerala.gov.in',
        phone: '1800-425-7771',
        howto: [
          { en: 'Dial 1800-425-7771 (9:30 AM – 7:30 PM, working days) — Kerala PWD helpline', hi: '1800-425-7771 dial karein (9:30 AM–7:30 PM, working days) — Kerala PWD helpline' },
          { en: 'App: "PWD4U" on Play Store/App Store — geo-tagged pothole complaint with tracking', hi: 'App: "PWD4U" — Play Store/App Store se download karein — geotagged pothole complaint' },
          { en: 'Online: pwd.kerala.gov.in → Citizen Services → Lodge Complaint', hi: 'pwd.kerala.gov.in → Citizen Services → Lodge Complaint karein' },
          { en: 'Upload pothole photo with GPS location — repair status trackable in app', hi: 'GPS ke saath pothole photo upload karein — app mein repair status track kar sakte ho' },
        ],
      },
      {
        badge: 'state',
        name: 'Kerala CM Grievance — Road Escalation',
        desc: { en: 'PWD not repairing? Escalate via Kerala CM Grievance Cell', hi: 'PWD repair nahi? Kerala CM Grievance Cell ke through escalate karein' },
        url: 'https://grievance.kerala.gov.in',
        phone: '0471-2333100',
        howto: [
          { en: 'Kerala CM Grievance: grievance.kerala.gov.in → Lodge Complaint → select PWD', hi: 'grievance.kerala.gov.in → Lodge Complaint → PWD select karein' },
          { en: 'CM Office phone: 0471-2333100 (Thiruvananthapuram)', hi: 'CM Office: 0471-2333100 (Thiruvananthapuram)' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'KWA — Kerala Water Authority Consumer Complaint',
        desc: { en: 'Kerala Water Authority — 1916 / 1800-425-5313 helpline and KWA online portal', hi: 'Kerala Water Authority — 1916 helpline, WhatsApp ya KWA online portal' },
        url: 'https://aqualoomnew.kwa.kerala.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7 toll-free) OR 1800-425-5313 — KWA water helpline Kerala', hi: '1916 dial karein (24×7 toll-free) ya 1800-425-5313 — KWA Kerala water helpline' },
          { en: 'WhatsApp: 9495998258 — send consumer number, area and issue description', hi: 'WhatsApp: 9495998258 — consumer number, area aur issue description bhejein' },
          { en: 'Online: aqualoomnew.kwa.kerala.gov.in → Consumer Services → Complaints', hi: 'aqualoomnew.kwa.kerala.gov.in → Consumer Services → Complaints mein jaayein' },
          { en: 'Enter Connection Number from water bill → select issue: No Supply / Leakage / Quality / Billing', hi: 'Water bill se Connection Number enter karein → issue select karein → submit' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'Kerala LSG — Urban Local Body Garbage Complaint',
        desc: { en: 'Kerala Local Self Government — city ULB portal for solid waste complaints', hi: 'Kerala garbage complaint — apne city ke ULB/municipality portal par complaint karein' },
        url: 'https://lsgkerala.gov.in',
        phone: '1800-425-6882',
        howto: [
          { en: 'Dial 1800-425-6882 (Thiruvananthapuram) OR 0484-2390000 (Kochi) — city waste helpline', hi: 'Thiruvananthapuram: 1800-425-6882 | Kochi: 0484-2390000 — garbage complaint helpline' },
          { en: 'WhatsApp: 9446700800 — Kerala Suchitwa Mission waste complaint', hi: 'WhatsApp: 9446700800 — Kerala Suchitwa Mission waste complaint' },
          { en: 'Online: lsgkerala.gov.in → your municipality → Grievance/Complaint', hi: 'lsgkerala.gov.in → apni municipality select karein → Grievance/Complaint karein' },
          { en: 'Kochi: mykochi.lsgkerala.gov.in → complaint registration → select "Solid Waste"', hi: 'Kochi: mykochi.lsgkerala.gov.in → complaint registration → "Solid Waste" select karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Kerala CM Grievance — Garbage Escalation',
        desc: { en: 'ULB not acting? Escalate via Kerala CM Grievance Cell', hi: 'ULB action nahi? Kerala CM Grievance Cell par escalate karein' },
        url: 'https://grievance.kerala.gov.in',
        phone: '0471-2333100',
        howto: [
          { en: 'Open grievance.kerala.gov.in → Lodge Complaint → select Local Body', hi: 'grievance.kerala.gov.in → Lodge Complaint → Local Body select karein' },
          { en: 'CM Grievance Cell: 0471-2333100 | Swachhata app: 1969 (national)', hi: 'CM Grievance: 0471-2333100 | Swachhata national app: 1969' },
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
    pani: [
      {
        badge: 'first',
        name: 'PHED Bihar — Water Supply Complaint (phedcgrc.in)',
        desc: { en: 'Bihar PHED — 1800-123-1121 helpline and phedcgrc.in complaint portal', hi: 'Bihar water supply complaint — PHED 1800-123-1121 helpline ya phedcgrc.in' },
        url: 'https://phedcgrc.in',
        phone: '1800-123-1121',
        howto: [
          { en: 'Dial 1800-123-1121 (toll-free) — PHED Bihar water complaint helpline', hi: '1800-123-1121 dial karein (toll-free) — PHED Bihar water helpline' },
          { en: 'Online: phedcgrc.in → Register Complaint → select your district', hi: 'phedcgrc.in → Register Complaint → apna district select karein' },
          { en: 'Enter your consumer/connection number → describe issue → submit', hi: 'Consumer/connection number enter karein → issue describe karein → submit' },
          { en: 'For Patna city: PHED Patna Division: 0612-2677008', hi: 'Patna city ke liye: PHED Patna Division: 0612-2677008' },
        ],
      },
      {
        badge: 'state',
        name: 'Bihar CM Helpline 15545 — Water Escalation',
        desc: { en: 'PHED not resolving? Escalate via Bihar CM Helpline 15545', hi: 'PHED resolve nahi? Bihar CM Helpline 15545 par escalate karein' },
        url: 'https://jansampark.bihar.gov.in',
        phone: '15545',
        howto: [
          { en: 'Dial 15545 OR open jansampark.bihar.gov.in', hi: '15545 dial karein ya jansampark.bihar.gov.in kholen' },
          { en: 'Select department: "PHED" → describe complaint with reference number', hi: 'Department: "PHED" → reference number ke saath complaint describe karein' },
          { en: 'CM Helpline forwards to DM level — 7-day resolution monitoring', hi: 'CM Helpline DM level par forward karta hai — 7 din mein resolution monitoring' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'Bihar RWD — Road & Pothole Complaint Portal',
        desc: { en: 'Bihar Rural Works Department — 1800-3456-284 helpline and rwdbihar.gov.in', hi: 'Bihar road pothole complaint — RWD 1800-3456-284 helpline ya rwdbihar.gov.in' },
        url: 'https://rwdbihar.gov.in',
        phone: '1800-3456-284',
        howto: [
          { en: 'Dial 1800-3456-284 (toll-free) — Bihar RWD road grievance helpline', hi: '1800-3456-284 dial karein (toll-free) — Bihar RWD road grievance helpline' },
          { en: 'Online: rwdbihar.gov.in → Complaint → select district and road type', hi: 'rwdbihar.gov.in → Complaint → district aur road type select karein' },
          { en: 'For Patna city roads: Patna Municipal Corporation — 0612-2232101', hi: 'Patna city roads ke liye: Patna Municipal Corporation — 0612-2232101' },
          { en: 'For state/national highways: Bihar NHAI team / NHAI 1033', hi: 'State/national highways ke liye: NHAI 1033 dial karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Bihar CM Helpline 15545 — Road Escalation',
        desc: { en: 'RWD not responding? Escalate via Bihar CM Helpline 15545', hi: 'RWD response nahi? Bihar CM Helpline 15545 par escalate karein' },
        url: 'https://jansampark.bihar.gov.in',
        phone: '15545',
        howto: [
          { en: 'Dial 15545 OR open jansampark.bihar.gov.in → select "RWD/PWD"', hi: '15545 dial karein ya jansampark.bihar.gov.in → "RWD/PWD" select karein' },
          { en: 'Attach previous RWD complaint reference — DM level escalation in 7 days', hi: 'Pichla RWD complaint reference attach karein — 7 din mein DM level escalation' },
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
    pani: [
      {
        badge: 'first',
        name: 'GVMC — Visakhapatnam Water Supply Complaint',
        desc: { en: 'GVMC Visakhapatnam water supply — 1800-4250-0009 helpline', hi: 'Vizag water supply complaint — GVMC 1800-4250-0009 ya gvmc.gov.in' },
        url: 'https://www.gvmc.gov.in',
        phone: '1800-4250-0009',
        howto: [
          { en: 'Dial 1800-4250-0009 (toll-free) — GVMC Visakhapatnam water helpline', hi: '1800-4250-0009 dial karein (toll-free) — GVMC Vizag water helpline' },
          { en: 'Online: gvmc.gov.in → Citizen Services → Water Supply Complaint', hi: 'gvmc.gov.in → Citizen Services → Water Supply Complaint mein jaayein' },
          { en: 'Enter property/consumer ID → select issue type → submit', hi: 'Property/consumer ID enter karein → issue type select karein → submit' },
        ],
      },
      {
        badge: 'state',
        name: 'AP CRDA / Municipal Water — Other AP Cities',        desc: { en: 'Amaravati: APCRDA | Vijayawada: VMC 0866-2421026 | Tirupati: TMC', hi: 'Amaravati: APCRDA | Vijayawada: VMC 0866-2421026 | Tirupati: TMC se contact karein' },
        url: 'https://apcrda.ap.gov.in',
        phone: '0866-2421026',
        howto: [
          { en: 'Vijayawada Municipal Corporation water: 0866-2421026', hi: 'Vijayawada Municipal Corporation water: 0866-2421026' },
          { en: 'Tirupati: TMC water dept 0877-2236201', hi: 'Tirupati: TMC water dept 0877-2236201' },
          { en: 'AP CM Helpline: 1902 — for all water supply escalations', hi: 'AP CM Helpline: 1902 — water supply escalation ke liye' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'AP R&B Dept — State Road & Pothole Complaint',
        desc: { en: 'Andhra Pradesh Roads & Buildings Dept — 1902 CM helpline for road complaints', hi: 'AP road pothole complaint — R&B Dept ya CM Helpline 1902' },
        url: 'https://pgr.ap.gov.in',
        phone: '1902',
        howto: [
          { en: 'Dial 1902 (AP CM Helpline) → select "R&B" for state road complaints', hi: '1902 dial karein (AP CM Helpline) → "R&B" select karein — state road complaints ke liye' },
          { en: 'Online: pgr.ap.gov.in → Lodge Grievance → select Roads & Buildings', hi: 'pgr.ap.gov.in → Lodge Grievance → Roads & Buildings select karein' },
          { en: 'GVMC Vizag road: 1800-4250-0009 | Vijayawada: VMC 0866-2421026', hi: 'GVMC Vizag road: 1800-4250-0009 | Vijayawada: VMC 0866-2421026' },
          { en: 'For National Highways in AP: NHAI 1033', hi: 'AP mein National Highways ke liye: NHAI 1033' },
        ],
      },
    ],
    safai: [
      {
        badge: 'first',
        name: 'AP CDMA — Urban Sanitation & Garbage Complaint',
        desc: { en: 'AP Commissioner & Director of Municipal Administration — cdma.ap.gov.in', hi: 'AP urban garbage complaint — cdma.ap.gov.in ya GVMC helpline' },
        url: 'https://cdma.ap.gov.in/en/complaintregistration',
        phone: '1902',
        howto: [
          { en: 'Dial 1902 (AP CM Helpline) → select "Municipal Administration" for garbage', hi: '1902 dial karein (AP CM Helpline) → "Municipal Administration" select karein — garbage ke liye' },
          { en: 'Online: cdma.ap.gov.in/en/complaintregistration → register complaint → select "Solid Waste"', hi: 'cdma.ap.gov.in/en/complaintregistration → complaint register → "Solid Waste" select karein' },
          { en: 'GVMC Visakhapatnam: gvmc.gov.in → Citizen Services → Solid Waste', hi: 'GVMC Vizag: gvmc.gov.in → Citizen Services → Solid Waste' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all AP municipalities', hi: 'App: Swachhata-MoHUA (1969) — AP ke sabhi municipalities mein kaam karta hai' },
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
    pani: [
      {
        badge: 'first',
        name: 'HMWSSB — Hyderabad Metro Water Supply Complaint',
        desc: { en: 'Hyderabad Metro Water Supply & Sewerage Board — 155313 helpline', hi: 'Hyderabad water supply complaint — HMWSSB 155313 helpline ya hyderabadwater.gov.in' },
        url: 'https://www.hyderabadwater.gov.in',
        phone: '155313',
        howto: [
          { en: 'Dial 155313 (24×7) — HMWSSB Hyderabad water helpline', hi: '155313 dial karein (24×7) — HMWSSB Hyderabad water helpline' },
          { en: 'WhatsApp: +91 91541 70968 — send consumer number, area and problem', hi: 'WhatsApp: +91 91541 70968 — consumer number, area aur problem bhejein' },
          { en: 'Online: hyderabadwater.gov.in → Consumer Services → Lodge Complaint', hi: 'hyderabadwater.gov.in → Consumer Services → Lodge Complaint karein' },
          { en: 'Enter Consumer Number from water bill → select issue → submit → note complaint ID', hi: 'Water bill se Consumer Number enter karein → issue select karein → submit' },
          { en: 'For areas outside HMWSSB: TSMDP / local Municipal water dept', hi: 'HMWSSB ke bahar: TSMDP ya local Municipal water dept se contact karein' },
        ],
      },
      {
        badge: 'state',
        name: 'TS CM Helpline 1100 — Water Escalation',
        desc: { en: 'HMWSSB not resolving? Escalate via Telangana CM Helpline 1100', hi: 'HMWSSB resolve nahi? Telangana CM Helpline 1100 par escalate karein' },
        url: 'https://pgportal.telangana.gov.in',
        phone: '1100',
        howto: [
          { en: 'Dial 1100 (TS CM Helpline) for water supply complaints', hi: '1100 dial karein (TS CM Helpline) — water supply complaint ke liye' },
          { en: 'Online: pgportal.telangana.gov.in → Lodge Grievance → select HMWSSB', hi: 'pgportal.telangana.gov.in → Lodge Grievance → HMWSSB select karein' },
          { en: 'Describe water problem with HMWSSB complaint reference number', hi: 'HMWSSB complaint reference number ke saath water problem describe karein' },
        ],
      },
    ],
    sadak: [
      {
        badge: 'first',
        name: 'GHMC — Hyderabad Road & Pothole Complaint',
        desc: { en: 'GHMC Hyderabad — 040-21111111 helpline and My GHMC app for roads', hi: 'Hyderabad road pothole complaint — GHMC 040-21111111 ya My GHMC app' },
        url: 'https://www.ghmc.gov.in',
        phone: '040-21111111',
        howto: [
          { en: 'Dial 040-21111111 (GHMC 24×7) for road/pothole complaints Hyderabad', hi: '040-21111111 dial karein (GHMC 24×7) — Hyderabad road/pothole complaint ke liye' },
          { en: 'App: "My GHMC" on Play Store/App Store — report pothole with GPS photo', hi: 'App: "My GHMC" — Play Store/App Store se download karein — GPS photo ke saath pothole report karein' },
          { en: 'Online: ghmc.gov.in → Citizen Services → Complaint → select "Roads"', hi: 'ghmc.gov.in → Citizen Services → Complaint → "Roads" select karein' },
          { en: 'For areas outside GHMC (Warangal/Karimnagar): contact district municipal corporation', hi: 'GHMC ke bahar (Warangal/Karimnagar) ke liye: district municipal corporation' },
        ],
      },
      {
        badge: 'state',
        name: 'TS R&B Dept — State Highway Road Complaint',
        desc: { en: 'Telangana Roads & Buildings Dept for highways and state roads', hi: 'Telangana R&B Dept — state highway aur inter-city road complaints' },
        url: 'https://pgportal.telangana.gov.in',
        phone: '1100',
        howto: [
          { en: 'Dial 1100 (TS CM Helpline) → select R&B for state road complaints', hi: '1100 (TS CM Helpline) → R&B select karein — state road complaints ke liye' },
          { en: 'Online: pgportal.telangana.gov.in → Lodge Grievance → Roads & Buildings', hi: 'pgportal.telangana.gov.in → Lodge Grievance → Roads & Buildings select karein' },
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
    sadak: [
      {
        badge: 'first',
        name: 'Odisha Works Dept — Road & Pothole Complaint',
        desc: { en: 'Odisha Works Department — 1967 helpline and works.odisha.gov.in', hi: 'Odisha road pothole complaint — Works Dept 1967 helpline ya portal' },
        url: 'https://works.odisha.gov.in',
        phone: '1967',
        howto: [
          { en: 'Dial 1967 (Odisha Grievance Redressal System) for road complaints', hi: '1967 dial karein (Odisha Grievance Redressal) — road complaint ke liye' },
          { en: 'Online: works.odisha.gov.in → Complaint/Grievance section', hi: 'works.odisha.gov.in → Complaint/Grievance section mein jaayein' },
          { en: 'Bhubaneswar city: BDA / BMC — bmc.gov.in → Complaints → Roads', hi: 'Bhubaneswar city ke liye: BMC — bmc.gov.in → Complaints → Roads' },
          { en: 'For National Highways: NHAI 1033', hi: 'National Highways ke liye: NHAI 1033 dial karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHEO Odisha — Water Supply Complaint',
        desc: { en: 'Public Health Engineering Org Odisha — 1916 helpline and state portal', hi: 'Odisha water supply complaint — PHEO 1916 helpline ya state portal' },
        url: 'https://phed.odisha.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — Odisha water supply helpline', hi: '1916 dial karein (24×7) — Odisha water supply helpline' },
          { en: 'Online: phed.odisha.gov.in → Grievance → Register Complaint', hi: 'phed.odisha.gov.in → Grievance → Register Complaint karein' },
          { en: 'Select district and describe: No Supply / Leakage / Quality', hi: 'District select karein → describe: No Supply / Leakage / Quality' },
          { en: 'For Bhubaneswar city: BMC water — bmc.gov.in | 0674-2432010', hi: 'Bhubaneswar: BMC water — bmc.gov.in | 0674-2432010' },
        ],
      },
      {
        badge: 'state',
        name: 'Odisha CM Helpline 14545 — Water Escalation',
        desc: { en: 'PHEO not resolving? Escalate via Odisha CM Helpline 14545', hi: 'PHEO resolve nahi? Odisha CM Helpline 14545 par escalate karein' },
        url: 'https://cmhelpline.odisha.gov.in',
        phone: '14545',
        howto: [
          { en: 'Dial 14545 (Odisha CM Helpline) for water supply escalation', hi: '14545 dial karein (Odisha CM Helpline) — water supply escalation ke liye' },
          { en: 'Select department: "PHEO" and describe problem with previous reference', hi: 'Department: "PHEO" select karein — pichle reference ke saath describe karein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'BMC Bhubaneswar — Garbage Complaint (1929)',
        desc: { en: 'Bhubaneswar Municipal Corporation — 1929 helpline and bmc.gov.in portal', hi: 'Bhubaneswar garbage complaint — BMC 1929 helpline ya bmc.gov.in' },
        url: 'https://www.bmc.gov.in',
        phone: '1929',
        howto: [
          { en: 'Dial 1929 (24×7) — BMC Bhubaneswar solid waste helpline', hi: '1929 dial karein (24×7) — BMC Bhubaneswar solid waste helpline' },
          { en: 'WhatsApp: 8280282000 — send garbage photo with your ward/area', hi: 'WhatsApp: 8280282000 — ward/area ke saath garbage photo bhejein' },
          { en: 'Online: bmc.gov.in → Citizen Services → Complaint → Solid Waste Management', hi: 'bmc.gov.in → Citizen Services → Complaint → Solid Waste Management karein' },
          { en: 'For other Odisha cities: janasunani.odisha.gov.in → select Urban Local Body', hi: 'Other Odisha cities ke liye: janasunani.odisha.gov.in → Urban Local Body select karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Odisha CM Helpline 14545 — Garbage Escalation',
        desc: { en: 'ULB not acting? Escalate via Odisha CM Helpline 14545', hi: 'ULB action nahi? Odisha CM Helpline 14545 par escalate karein' },
        url: 'https://cmhelpline.odisha.gov.in',
        phone: '14545',
        howto: [
          { en: 'Dial 14545 OR open cmhelpline.odisha.gov.in → select "Urban Local Bodies"', hi: '14545 dial karein ya cmhelpline.odisha.gov.in → "Urban Local Bodies" select karein' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Odisha ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Odisha ULBs mein kaam karta hai' },
        ],
      },
    ],
  },

  // ── Assam ─────────────────────────────────────────────────────────────────
  Assam: {
    sadak: [
      {
        badge: 'first',
        name: 'Assam PWD Roads — Road & Pothole Complaint',
        desc: { en: 'Assam PWD Roads Division — pwdroads.assam.gov.in and helpline', hi: 'Assam road pothole complaint — PWD Roads Division portal ya helpline' },
        url: 'https://pwdroads.assam.gov.in',
        phone: '0361-2237378',
        howto: [
          { en: 'Call Assam PWD Roads: 0361-2237378 (Guwahati)', hi: 'Assam PWD Roads: 0361-2237378 — Guwahati call karein' },
          { en: 'Online: pwdroads.assam.gov.in → Contact → Complaint submission', hi: 'pwdroads.assam.gov.in → Contact → Complaint submit karein' },
          { en: 'Guwahati city roads: GMC — 0361-2636200', hi: 'Guwahati city roads ke liye: GMC — 0361-2636200' },
          { en: 'Assam CM Helpline: 15100 for road complaint escalation', hi: 'Escalation ke liye: Assam CM Helpline 15100' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHED Assam — Water Supply Complaint',
        desc: { en: 'Assam PHED — water supply complaint 1916 and online portal', hi: 'Assam water supply complaint — PHED 1916 helpline ya online portal' },
        url: 'https://www.phed.assam.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — Assam water supply helpline', hi: '1916 dial karein (24×7) — Assam water supply helpline' },
          { en: 'Online: phed.assam.gov.in → Citizen Services → Lodge Complaint', hi: 'phed.assam.gov.in → Citizen Services → Lodge Complaint karein' },
          { en: 'Select district → describe issue: No Supply / Leakage / Quality', hi: 'District select karein → issue describe karein: No Supply / Leakage / Quality' },
          { en: 'For Guwahati city: GMC water — 0361-2638200', hi: 'Guwahati city ke liye: GMC water — 0361-2638200' },
        ],
      },
      {
        badge: 'state',
        name: 'Assam CM Helpline 15100 — Water Escalation',
        desc: { en: 'PHED not resolving? Escalate via Assam CM Helpline 15100', hi: 'PHED resolve nahi? Assam CM Helpline 15100 par escalate karein' },
        url: 'https://www.phed.assam.gov.in',
        phone: '15100',
        howto: [
          { en: 'Dial 15100 (Assam CM Helpline) for water complaint escalation', hi: '15100 dial karein (Assam CM Helpline) — water complaint escalation ke liye' },
          { en: 'Select "PHED" department and add previous complaint reference', hi: '"PHED" department select karein aur pichla complaint reference dein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'GMC Guwahati — Garbage Complaint (8811007000)',
        desc: { en: 'Guwahati Municipal Corporation — 8811007000 WhatsApp/call for garbage complaints', hi: 'Guwahati garbage complaint — GMC 8811007000 WhatsApp ya call' },
        url: 'https://gmc.assam.gov.in',
        phone: '8811007000',
        howto: [
          { en: 'WhatsApp/Call 8811007000 — GMC Guwahati solid waste helpline', hi: '8811007000 WhatsApp ya call karein — GMC Guwahati solid waste helpline' },
          { en: 'Online: gmc.assam.gov.in → Citizen Services → Complaint → Solid Waste', hi: 'gmc.assam.gov.in → Citizen Services → Complaint → Solid Waste karein' },
          { en: 'Other Assam cities: contact your local Municipal Board / Town Committee', hi: 'Other Assam cities ke liye: local Municipal Board ya Town Committee se contact karein' },
          { en: 'State grievance: assam.gov.in → Citizen Services for escalation', hi: 'Escalation ke liye: assam.gov.in → Citizen Services use karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Assam CM Helpline 15100 — Garbage Escalation',
        desc: { en: 'ULB not acting? Escalate via Assam CM Helpline 15100', hi: 'ULB action nahi? Assam CM Helpline 15100 par escalate karein' },
        url: 'https://cm.assam.gov.in',
        phone: '15100',
        howto: [
          { en: 'Dial 15100 (Assam CM Helpline) — select "Urban Local Bodies" for garbage issue', hi: '15100 dial karein — "Urban Local Bodies" select karein garbage issue ke liye' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Assam ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Assam ULBs mein kaam karta hai' },
        ],
      },
    ],
  },

  // ── Jharkhand ─────────────────────────────────────────────────────────────
  Jharkhand: {
    sadak: [
      {
        badge: 'first',
        name: 'Jharkhand PGMS — Road & Pothole Complaint',
        desc: { en: 'Jharkhand Public Grievance Management System — 1800-1202929 helpline', hi: 'Jharkhand road pothole complaint — PGMS 1800-1202929 helpline ya portal' },
        url: 'https://pgms.jharkhand.gov.in',
        phone: '1800-1202929',
        howto: [
          { en: 'Dial 1800-1202929 (Mon–Sat, 10 AM–5 PM) — Jharkhand PGMS helpline', hi: '1800-1202929 dial karein (Mon-Sat, 10 AM-5 PM) — Jharkhand PGMS helpline' },
          { en: 'Citizen call centre: 155300 | WhatsApp/SMS: 7633928444', hi: 'Citizen call centre: 155300 | WhatsApp/SMS: 7633928444' },
          { en: 'Online: pgms.jharkhand.gov.in → Submit Grievance → select "Roads/PWD"', hi: 'pgms.jharkhand.gov.in → Submit Grievance → "Roads/PWD" select karein' },
          { en: 'Ranchi city: Ranchi Municipal Corporation — 0651-2331000', hi: 'Ranchi city roads ke liye: Ranchi Municipal Corporation — 0651-2331000' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'JUSNL / PHED Jharkhand — Water Supply Complaint',
        desc: { en: 'Jharkhand Urban Infrastructure — JUSNL + PHED for water supply complaints', hi: 'Jharkhand water supply complaint — JUSNL / PHED helpline ya portal' },
        url: 'https://phed.jharkhand.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — Jharkhand water supply helpline', hi: '1916 dial karein (24×7) — Jharkhand water supply helpline' },
          { en: 'Online: phed.jharkhand.gov.in → Complaint → select district', hi: 'phed.jharkhand.gov.in → Complaint → district select karein' },
          { en: 'For Ranchi city: RUIDP / Ranchi Nagar Nigam water — 0651-2331000', hi: 'Ranchi city ke liye: Ranchi Nagar Nigam water — 0651-2331000' },
          { en: 'Describe issue: No Supply / Leakage / Quality → submit → note complaint ID', hi: 'Issue: No Supply / Leakage / Quality describe karein → submit → ID note karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Jharkhand CM Helpline 181 — Water Escalation',
        desc: { en: 'PHED not resolving? Escalate via Jharkhand CM Helpline 181', hi: 'PHED resolve nahi? Jharkhand CM Helpline 181 par escalate karein' },
        url: 'https://phed.jharkhand.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 (Jharkhand CM Helpline) for water supply escalation', hi: '181 dial karein (Jharkhand CM Helpline) — water supply escalation ke liye' },
          { en: 'Select "PHED" department — add previous PHED complaint reference', hi: '"PHED" department select karein — pichla complaint reference add karein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'RMC / Jharkhand ULB — Garbage Complaint (1800-5701235)',
        desc: { en: 'Ranchi Municipal Corporation — 1800-5701235 toll-free for garbage complaints', hi: 'Ranchi garbage complaint — RMC 1800-5701235 ya WhatsApp 89866-27070' },
        url: 'https://rmc.jharkhand.gov.in',
        phone: '1800-5701235',
        howto: [
          { en: 'Toll-free: 1800-5701235 (RMC Ranchi) for garbage/solid waste complaints', hi: '1800-5701235 (toll-free) — RMC Ranchi garbage/solid waste complaint ke liye' },
          { en: 'WhatsApp: 89866-27070 — send photo of garbage/dump with your ward/area', hi: 'WhatsApp: 89866-27070 — ward/area ke saath garbage photo bhejein' },
          { en: 'Jharkhand PGMS: pgms.jharkhand.gov.in → Submit Grievance → select Urban/Sanitation', hi: 'pgms.jharkhand.gov.in → Submit Grievance → Urban/Sanitation select karein' },
          { en: 'Other Jharkhand cities: contact local Nagar Nigam / Nagar Panchayat', hi: 'Other cities ke liye: local Nagar Nigam ya Nagar Panchayat se contact karein' },
        ],
      },
      {
        badge: 'state',
        name: 'Jharkhand CM Helpline 181 — Garbage Escalation',
        desc: { en: 'ULB not acting? Escalate via Jharkhand CM Helpline 181', hi: 'ULB action nahi? Jharkhand CM Helpline 181 par escalate karein' },
        url: 'https://pgms.jharkhand.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 (Jharkhand CM Helpline) — select "Urban Local Bodies/Sanitation"', hi: '181 dial karein — "Urban Local Bodies/Sanitation" select karein' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Jharkhand ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Jharkhand ULBs mein kaam karta hai' },
        ],
      },
    ],
  },

  // ── Chhattisgarh ──────────────────────────────────────────────────────────
  Chhattisgarh: {
    sadak: [
      {
        badge: 'first',
        name: 'CG PWD — Road & Pothole Complaint',
        desc: { en: 'Chhattisgarh PWD — pwd.cg.nic.in and 1100 (Nidaan helpline)', hi: 'CG road pothole complaint — PWD portal ya Nidaan 1100 helpline' },
        url: 'https://pwd.cg.nic.in',
        phone: '1100',
        howto: [
          { en: 'Dial 1100 (CG Nidaan CM Helpline) → select "PWD" for road complaints', hi: '1100 (Nidaan CM Helpline) → "PWD" select karein — road complaints ke liye' },
          { en: 'Online: pwd.cg.nic.in → Citizen Services → Complaint', hi: 'pwd.cg.nic.in → Citizen Services → Complaint mein jaayein' },
          { en: 'Raipur city roads: Raipur Nagar Nigam — 0771-2236521', hi: 'Raipur city roads ke liye: Raipur Nagar Nigam — 0771-2236521' },
          { en: 'PWD direct: 0771-2512703 (Raipur)', hi: 'PWD direct: 0771-2512703 (Raipur)' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHE Dept Chhattisgarh — Water Supply Complaint',
        desc: { en: 'CG Public Health Engineering Dept — water supply helpline 1916 / portal', hi: 'Chhattisgarh water supply complaint — PHE Dept 1916 helpline ya portal' },
        url: 'https://phe.cg.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — Chhattisgarh water supply helpline', hi: '1916 dial karein (24×7) — CG water supply helpline' },
          { en: 'Online: phe.cg.gov.in → Complaint Registration → select district', hi: 'phe.cg.gov.in → Complaint Registration → district select karein' },
          { en: 'For Raipur city: Raipur Nagar Nigam water — 0771-2236521', hi: 'Raipur city ke liye: Raipur Nagar Nigam water — 0771-2236521' },
          { en: 'Select issue: No Supply / Leakage / Quality → submit', hi: 'Issue: No Supply / Leakage / Quality → submit karein' },
        ],
      },
      {
        badge: 'state',
        name: 'CG CM Helpline 181 — Water Escalation',
        desc: { en: 'PHE Dept not resolving? Escalate via CG CM Helpline 181', hi: 'PHE resolve nahi? CG CM Helpline 181 par escalate karein' },
        url: 'https://samadhan.mp.gov.in',
        phone: '181',
        howto: [
          { en: 'Dial 181 (CG CM Helpline) for water supply escalation', hi: '181 dial karein (CG CM Helpline) — water supply escalation ke liye' },
          { en: 'Select "PHE" department with previous complaint reference number', hi: '"PHE" department select karein — pichla complaint reference number dein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'Raipur Nagar Nigam — Garbage Complaint (cgnidaan.com / 1100)',
        desc: { en: 'Raipur Nagar Nigam — cgnidaan.com or Nidaan 1100 helpline for garbage complaints', hi: 'Raipur garbage complaint — Nidaan 1100 helpline ya cgnidaan.com portal' },
        url: 'https://www.cgnidaan.com',
        phone: '1100',
        howto: [
          { en: 'Dial 1100 (CG Nidaan CM Helpline) → select "Urban Local Bodies/Swachh Bharat"', hi: '1100 (Nidaan CM Helpline) → "Urban Local Bodies/Swachh Bharat" select karein' },
          { en: 'Online: cgnidaan.com → Lodge Complaint → select Sanitation/Solid Waste', hi: 'cgnidaan.com → Lodge Complaint → Sanitation/Solid Waste select karein' },
          { en: 'Raipur direct: Raipur Nagar Nigam — 0771-2535780', hi: 'Raipur direct: Raipur Nagar Nigam — 0771-2535780' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all CG ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi CG ULBs mein kaam karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'CG CM Helpline 181 — Garbage Escalation',
        desc: { en: 'ULB not acting? Escalate via Chhattisgarh CM Helpline 181', hi: 'ULB action nahi? CG CM Helpline 181 par escalate karein' },
        url: 'https://www.cgnidaan.com',
        phone: '181',
        howto: [
          { en: 'Dial 181 (CG CM Helpline) → select "Urban Bodies" for garbage escalation', hi: '181 (CG CM Helpline) → "Urban Bodies" select karein — garbage escalation ke liye' },
          { en: 'Add previous complaint reference from Nagar Nigam/ULB', hi: 'Nagar Nigam/ULB ka pichla complaint reference add karein' },
        ],
      },
    ],
  },

  // ── Uttarakhand ───────────────────────────────────────────────────────────
  Uttarakhand: {
    sadak: [
      {
        badge: 'first',
        name: 'UK CM Helpline — Road & Pothole Complaint (1905)',
        desc: { en: 'Uttarakhand CM Helpline 1905 — fastest channel for PWD road complaints', hi: 'Uttarakhand road pothole complaint — CM Helpline 1905 ya PWD portal' },
        url: 'https://cmhelpline.uk.gov.in',
        phone: '1905',
        howto: [
          { en: 'Dial 1905 (UK CM Helpline, 8 AM–10 PM) — for road/pothole complaints', hi: '1905 dial karein (UK CM Helpline, 8 AM-10 PM) — road/pothole complaint ke liye' },
          { en: 'Online: cmhelpline.uk.gov.in → OTP login → Lodge Complaint → select PWD', hi: 'cmhelpline.uk.gov.in → OTP login → Lodge Complaint → PWD select karein' },
          { en: 'UK PWD portal: mis.pwduk.in for project and road status', hi: 'UK PWD portal: mis.pwduk.in — project aur road status ke liye' },
          { en: 'Dehradun city roads: Dehradun Nagar Nigam — 0135-2653213', hi: 'Dehradun city roads ke liye: Dehradun Nagar Nigam — 0135-2653213' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'UK Jal Sansthan / Jal Nigam — Water Complaint',
        desc: { en: 'Uttarakhand Jal Sansthan (urban) and Jal Nigam (rural) — water supply helpline', hi: 'Uttarakhand water supply complaint — Jal Sansthan / Jal Nigam helpline' },
        url: 'https://www.ujn.uk.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — Uttarakhand water supply helpline', hi: '1916 dial karein (24×7) — Uttarakhand water supply helpline' },
          { en: 'UK Jal Sansthan (urban areas): ujn.uk.gov.in → Complaint', hi: 'UK Jal Sansthan (urban): ujn.uk.gov.in → Complaint karein' },
          { en: 'Dehradun Jal Sansthan: 0135-2716064 (Dehradun city water supply)', hi: 'Dehradun Jal Sansthan: 0135-2716064 — Dehradun city water supply' },
          { en: 'Haridwar / Rishikesh: contact HMB or local Jal Sansthan', hi: 'Haridwar / Rishikesh ke liye: HMB ya local Jal Sansthan se contact karein' },
        ],
      },
      {
        badge: 'state',
        name: 'UK CM Helpline 1905 — Water Escalation',
        desc: { en: 'Jal Sansthan not resolving? Escalate via UK CM Helpline 1905', hi: 'Jal Sansthan resolve nahi? UK CM Helpline 1905 par escalate karein' },
        url: 'https://uttarakhandpolice.uk.gov.in',
        phone: '1905',
        howto: [
          { en: 'Dial 1905 (UK CM Helpline) → select water department for escalation', hi: '1905 dial karein (UK CM Helpline) → water department select karein' },
          { en: 'Describe problem with previous Jal Sansthan reference number', hi: 'Pichle Jal Sansthan reference number ke saath describe karein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'Dehradun Nagar Nigam — Garbage Complaint (0135-2653213)',
        desc: { en: 'Dehradun Nagar Nigam — 0135-2653213 and CM Helpline 1905 for garbage complaints', hi: 'Dehradun garbage complaint — Nagar Nigam 0135-2653213 ya CM Helpline 1905' },
        url: 'https://www.dehradunnagarnigam.com',
        phone: '0135-2653213',
        howto: [
          { en: 'Call Dehradun Nagar Nigam: 0135-2653213 for garbage/solid waste complaint', hi: 'Dehradun Nagar Nigam: 0135-2653213 — garbage/solid waste complaint ke liye' },
          { en: 'Other UK cities: contact local Nagar Nigam / Nagar Palika Parishad', hi: 'Other UK cities ke liye: local Nagar Nigam ya Nagar Palika Parishad se contact karein' },
          { en: 'CM Helpline 1905: cmhelpline.uk.gov.in → Lodge Complaint → "Urban/Sanitation"', hi: 'CM Helpline 1905: cmhelpline.uk.gov.in → Lodge Complaint → "Urban/Sanitation"' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Uttarakhand ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Uttarakhand ULBs mein kaam karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Uttarakhand CM Helpline 1905 — Garbage Escalation',
        desc: { en: 'ULB not acting? Escalate via UK CM Helpline 1905', hi: 'ULB action nahi? UK CM Helpline 1905 par escalate karein' },
        url: 'https://cmhelpline.uk.gov.in',
        phone: '1905',
        howto: [
          { en: 'Dial 1905 OR cmhelpline.uk.gov.in → OTP login → Lodge Complaint', hi: '1905 dial karein ya cmhelpline.uk.gov.in → OTP login → Lodge Complaint' },
          { en: 'Select department: "Urban Development/Sanitation" with ULB complaint reference', hi: '"Urban Development/Sanitation" select karein — ULB complaint reference dein' },
        ],
      },
    ],
  },

  // ── Himachal Pradesh ──────────────────────────────────────────────────────
  'Himachal Pradesh': {
    sadak: [
      {
        badge: 'first',
        name: 'HP PWD — Road & Pothole Complaint Portal',
        desc: { en: 'Himachal Pradesh PWD — hppwd.hp.gov.in/complaint-redressal-system', hi: 'HP road pothole complaint — PWD portal 0177-2621401 ya complaint system' },
        url: 'https://hppwd.hp.gov.in/complaint-redressal-system',
        phone: '0177-2621401',
        howto: [
          { en: 'Open hppwd.hp.gov.in/complaint-redressal-system → register complaint', hi: 'hppwd.hp.gov.in/complaint-redressal-system → complaint register karein' },
          { en: 'Call PWD HP: 0177-2621401 (Shimla)', hi: 'PWD HP call karein: 0177-2621401 (Shimla)' },
          { en: 'CM Sewa Sankalp: 1100 — for road complaint escalation', hi: 'CM Sewa Sankalp: 1100 — road complaint escalation ke liye dial karein' },
          { en: 'Describe road type, location (district/village), and damage type', hi: 'Road type, location (district/village) aur damage type describe karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'IPH Himachal Pradesh — Water Supply Complaint',
        desc: { en: 'HP Irrigation & Public Health Dept — water supply 1916 helpline and portal', hi: 'HP IPH Dept — water supply complaint 1916 helpline ya portal' },
        url: 'https://www.iph.hp.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — Himachal Pradesh water supply helpline', hi: '1916 dial karein (24×7) — HP water supply helpline' },
          { en: 'Online: iph.hp.gov.in → Citizen Services → Grievance / Complaint', hi: 'iph.hp.gov.in → Citizen Services → Grievance / Complaint mein jaayein' },
          { en: 'Select your district → describe issue: No Supply / Leakage / Quality', hi: 'District select karein → issue describe: No Supply / Leakage / Quality' },
          { en: 'Shimla city (SADA): 0177-2621490 | Dharamshala: 01892-224900', hi: 'Shimla (SADA): 0177-2621490 | Dharamshala: 01892-224900' },
        ],
      },
      {
        badge: 'state',
        name: 'HP CM Helpline — Water Escalation',
        desc: { en: 'IPH not resolving? Contact HP Chief Minister Office for escalation', hi: 'IPH resolve nahi? HP CM Office ke through escalate karein' },
        url: 'https://www.iph.hp.gov.in',
        phone: '1800-180-8066',
        howto: [
          { en: 'HP state grievance portal: grievance.hp.gov.in', hi: 'HP state grievance portal: grievance.hp.gov.in use karein' },
          { en: 'Select department: "IPH" and add previous complaint reference', hi: '"IPH" department select karein — pichla complaint reference add karein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'HP Nagar Nigam — Garbage Complaint (CM Sewa Sankalp 1100)',
        desc: { en: 'HP municipalities — CM Sewa Sankalp 1100 or edistrict.hp.gov.in for garbage complaints', hi: 'HP garbage complaint — CM Sewa Sankalp 1100 ya edistrict.hp.gov.in' },
        url: 'https://edistrict.hp.gov.in',
        phone: '1100',
        howto: [
          { en: 'Dial 1100 (HP CM Sewa Sankalp) → select "Urban Local Bodies" for garbage issue', hi: '1100 (CM Sewa Sankalp) → "Urban Local Bodies" select karein — garbage issue ke liye' },
          { en: 'Online: edistrict.hp.gov.in → Lodge Grievance → Sanitation/Solid Waste', hi: 'edistrict.hp.gov.in → Lodge Grievance → Sanitation/Solid Waste select karein' },
          { en: 'Shimla Municipal Corporation: 0177-2813700 (Shimla city garbage)', hi: 'Shimla Municipal Corporation: 0177-2813700 — Shimla city garbage complaint' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all HP ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi HP ULBs mein kaam karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'HP State Grievance — Garbage Escalation',
        desc: { en: 'ULB not acting? Escalate via HP state grievance portal', hi: 'ULB action nahi? HP state grievance portal par escalate karein' },
        url: 'https://grievance.hp.gov.in',
        phone: '1800-180-8066',
        howto: [
          { en: 'Open grievance.hp.gov.in → Lodge Grievance → select "Urban Local Bodies"', hi: 'grievance.hp.gov.in → Lodge Grievance → "Urban Local Bodies" select karein' },
          { en: 'Toll-free: 1800-180-8066 with previous ULB complaint reference', hi: '1800-180-8066 dial karein — pichla ULB complaint reference rakhein' },
        ],
      },
    ],
  },

  // ── Goa ───────────────────────────────────────────────────────────────────
  Goa: {
    sadak: [
      {
        badge: 'first',
        name: 'Goa PWD — Road & Pothole Complaint',
        desc: { en: 'Goa Public Works Department — pwd.goa.gov.in and 1533 helpline', hi: 'Goa road pothole complaint — PWD portal 1533 ya PWD app' },
        url: 'https://pwd.goa.gov.in',
        phone: '1533',
        howto: [
          { en: 'Dial 1533 OR use "PWD Goa" mobile app for road/pothole complaints', hi: '1533 dial karein ya "PWD Goa" mobile app use karein — road/pothole complaint ke liye' },
          { en: 'Online: pwd.goa.gov.in → Citizen Services → Grievance', hi: 'pwd.goa.gov.in → Citizen Services → Grievance mein jaayein' },
          { en: 'Public Grievances Directorate: 9319-334-335 (9:30 AM – 5:45 PM, Mon–Fri)', hi: 'Public Grievances Directorate: 9319-334-335 (9:30 AM – 5:45 PM, Mon-Fri)' },
          { en: 'North Goa (Panaji): 0832-2438801 | South Goa (Margao): 0832-2715560', hi: 'North Goa (Panaji): 0832-2438801 | South Goa (Margao): 0832-2715560' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PWD Water Supply Goa — Consumer Complaint',
        desc: { en: 'Goa Public Works Department (Water Supply) — 1916 helpline and portal', hi: 'Goa water supply complaint — PWD 1916 helpline ya portal' },
        url: 'https://pwd.goa.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — Goa water supply helpline', hi: '1916 dial karein (24×7) — Goa water supply helpline' },
          { en: 'Online: pwd.goa.gov.in → Citizen Services → Water Supply Complaint', hi: 'pwd.goa.gov.in → Citizen Services → Water Supply Complaint mein jaayein' },
          { en: 'Panaji / North Goa: 0832-2438801 | South Goa (Margao): 0832-2715560', hi: 'Panaji / North Goa: 0832-2438801 | South Goa (Margao): 0832-2715560' },
          { en: 'Enter your connection ID → describe issue → submit', hi: 'Connection ID enter karein → issue describe karein → submit' },
        ],
      },
      {
        badge: 'state',
        name: 'Goa CM Helpline — Water Escalation',
        desc: { en: 'PWD Water not resolving? Escalate via Goa CM Helpline', hi: 'PWD Water resolve nahi? Goa CM Helpline se escalate karein' },
        url: 'https://www.goa.gov.in',
        phone: '1800-233-0022',
        howto: [
          { en: 'Goa toll-free helpline: 1800-233-0022', hi: 'Goa toll-free helpline: 1800-233-0022' },
          { en: 'Or approach PWD Executive Engineer (Water) for your region', hi: 'Ya apne region ke PWD Executive Engineer (Water) se milein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'Goa ULB Service — Garbage Complaint (goaulbservice.gov.in)',
        desc: { en: 'Goa ULB integrated service — goaulbservice.gov.in/Complaints.aspx and 1533 helpline', hi: 'Goa garbage complaint — goaulbservice.gov.in portal ya 1533 helpline' },
        url: 'https://goaulbservice.gov.in/Complaints.aspx',
        phone: '1533',
        howto: [
          { en: 'Online: goaulbservice.gov.in/Complaints.aspx → select your municipality → Solid Waste', hi: 'goaulbservice.gov.in/Complaints.aspx → municipality select karein → Solid Waste' },
          { en: 'Dial 1533 (Goa state helpline) for garbage and civic complaints', hi: '1533 dial karein (Goa state helpline) — garbage aur civic complaints ke liye' },
          { en: 'Panaji CCP: 0832-2420522 | Margao (Salcete): 0832-2700039', hi: 'Panaji CCP: 0832-2420522 | Margao (Salcete): 0832-2700039' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Goa municipalities', hi: 'App: Swachhata-MoHUA (1969) — sabhi Goa municipalities mein kaam karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Goa CM Helpline — Garbage Escalation',
        desc: { en: 'Municipality not acting? Escalate via Goa state grievance', hi: 'Municipality action nahi? Goa state grievance se escalate karein' },
        url: 'https://www.goa.gov.in',
        phone: '1800-233-0022',
        howto: [
          { en: 'Goa toll-free helpline: 1800-233-0022 for ULB inaction escalation', hi: 'Goa toll-free: 1800-233-0022 — ULB inaction escalation ke liye' },
          { en: 'Or approach Director of Municipal Administration, Panaji with complaint', hi: 'Ya Director of Municipal Administration, Panaji ko complaint dein' },
        ],
      },
    ],
  },

  // ── Jammu & Kashmir ───────────────────────────────────────────────────────
  'Jammu and Kashmir': {
    sadak: [
      {
        badge: 'first',
        name: 'J&K PWD R&B — Road Complaint & SAMADHAN Helpline',
        desc: { en: 'J&K PWD Roads & Buildings — JK SAMADHAN helpline and jkpwdoms portal', hi: 'J&K road pothole complaint — JK SAMADHAN helpline ya jkpwdoms.jk.gov.in' },
        url: 'https://jkpwdoms.jk.gov.in',
        phone: '1800-5722327',
        howto: [
          { en: 'Jammu region: JK SAMADHAN toll-free 1800-5722327', hi: 'Jammu region: JK SAMADHAN toll-free 1800-5722327' },
          { en: 'Kashmir region: JK SAMADHAN toll-free 1800-5722328', hi: 'Kashmir region: JK SAMADHAN toll-free 1800-5722328' },
          { en: 'Online: jkpwdoms.jk.gov.in → Complaint Registration', hi: 'jkpwdoms.jk.gov.in → Complaint Registration karein' },
          { en: 'Jammu PWD: 0191-2560109 | Srinagar PWD: 0194-2502596', hi: 'Jammu PWD: 0191-2560109 | Srinagar PWD: 0194-2502596' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHE Dept J&K — Water Supply Complaint',
        desc: { en: 'J&K Public Health Engineering Dept — Jal Shakti 1916 helpline', hi: 'J&K water supply complaint — PHE Dept / Jal Shakti 1916 helpline' },
        url: 'https://phe.jk.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — J&K water supply helpline (Jal Shakti)', hi: '1916 dial karein (24×7) — J&K water supply helpline (Jal Shakti)' },
          { en: 'Online: phe.jk.gov.in → Citizen Corner → Grievance', hi: 'phe.jk.gov.in → Citizen Corner → Grievance mein jaayein' },
          { en: 'Srinagar: PHE Executive Engineer 0194-2463090', hi: 'Srinagar: PHE Executive Engineer 0194-2463090' },
          { en: 'Jammu: PHE Executive Engineer 0191-2546005', hi: 'Jammu: PHE Executive Engineer 0191-2546005' },
        ],
      },
      {
        badge: 'state',
        name: 'J&K LG Grievance Portal — Water Escalation',
        desc: { en: 'PHE not resolving? Escalate via J&K LG Grievance portal', hi: 'PHE resolve nahi? J&K LG Grievance portal par escalate karein' },
        url: 'https://lgraj.jk.gov.in',
        phone: '0194-2473000',
        howto: [
          { en: 'Open lgraj.jk.gov.in → Citizen Grievance → Lodge Complaint', hi: 'lgraj.jk.gov.in → Citizen Grievance → Lodge Complaint karein' },
          { en: 'Select "PHE" department → describe water problem with previous reference', hi: '"PHE" department select karein → pichle reference ke saath describe karein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'JMC / SMC — J&K Garbage Complaint (myjammu.in / 1800-180-7207)',
        desc: { en: 'Jammu: JMC 1800-180-7207 | Kashmir: SMC — garbage/solid waste complaints', hi: 'Jammu garbage: JMC 1800-180-7207 | Kashmir: SMC — solid waste complaint' },
        url: 'https://myjammu.in',
        phone: '1800-180-7207',
        howto: [
          { en: 'Jammu city: myjammu.in → Citizen Services → Complaint → Solid Waste', hi: 'Jammu city: myjammu.in → Citizen Services → Complaint → Solid Waste' },
          { en: 'JMC Jammu toll-free: 1800-180-7207 | Direct: 0191-2570570', hi: 'JMC Jammu toll-free: 1800-180-7207 | Direct: 0191-2570570' },
          { en: 'Srinagar: Srinagar Municipal Corporation (SMC) — 0194-2452024', hi: 'Srinagar: SMC — 0194-2452024 contact karein' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all J&K ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi J&K ULBs mein kaam karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'J&K LG Grievance Portal — Garbage Escalation',
        desc: { en: 'ULB not acting? Escalate via J&K LG Grievance portal lgraj.jk.gov.in', hi: 'ULB action nahi? J&K LG Grievance portal lgraj.jk.gov.in se escalate karein' },
        url: 'https://lgraj.jk.gov.in',
        phone: '0194-2473000',
        howto: [
          { en: 'Open lgraj.jk.gov.in → Citizen Grievance → select "Urban Local Bodies"', hi: 'lgraj.jk.gov.in → Citizen Grievance → "Urban Local Bodies" select karein' },
          { en: 'Add previous JMC/SMC complaint reference for faster resolution', hi: 'Faster resolution ke liye pichla JMC/SMC complaint reference add karein' },
        ],
      },
    ],
  },

  // ── Manipur ───────────────────────────────────────────────────────────────
  Manipur: {
    sadak: [
      {
        badge: 'first',
        name: 'Manipur PWD — Road Complaint & CM Da Haisi',
        desc: { en: 'Manipur PWD — pwdmanipur.mn.gov.in and CM Da Haisi grievance portal', hi: 'Manipur road pothole complaint — PWD portal ya CM Da Haisi grievance' },
        url: 'https://pwdmanipur.mn.gov.in',
        phone: '1800-345-3818',
        howto: [
          { en: 'Manipur toll-free: 1800-345-3818 for road/infrastructure complaints', hi: '1800-345-3818 dial karein (toll-free) — road/infrastructure complaint ke liye' },
          { en: 'Online: pwdmanipur.mn.gov.in → Citizen Services → Complaint', hi: 'pwdmanipur.mn.gov.in → Citizen Services → Complaint karein' },
          { en: 'CM Da Haisi grievance: cmdahaisi.mn.gov.in → Lodge Grievance → PWD', hi: 'CM Da Haisi: cmdahaisi.mn.gov.in → Lodge Grievance → PWD select karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHED Manipur — Water Supply Complaint',
        desc: { en: 'Manipur PHED — water supply complaint helpline and state portal', hi: 'Manipur water supply complaint — PHED helpline ya state portal' },
        url: 'https://phed.mn.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — Manipur water supply helpline', hi: '1916 dial karein (24×7) — Manipur water supply helpline' },
          { en: 'Online: phed.mn.gov.in → Citizen Services → Complaint', hi: 'phed.mn.gov.in → Citizen Services → Complaint mein jaayein' },
          { en: 'Imphal East / West water: IMCL — 0385-2420033', hi: 'Imphal East/West water: IMCL — 0385-2420033' },
          { en: 'Describe issue with connection details → submit → note complaint ID', hi: 'Connection details ke saath issue describe karein → submit → complaint ID note' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'IMCL / Manipur ULB — Garbage Complaint (CM Da Haisi)',
        desc: { en: 'Imphal Municipal Council and ULBs — CM Da Haisi for garbage/sanitation complaints', hi: 'Imphal garbage complaint — IMCL ya CM Da Haisi cmdahaisi.mn.gov.in' },
        url: 'https://cmdahaisi.mn.gov.in',
        phone: '1800-345-3818',
        howto: [
          { en: 'Online: cmdahaisi.mn.gov.in → Lodge Grievance → select "Urban/Sanitation"', hi: 'cmdahaisi.mn.gov.in → Lodge Grievance → "Urban/Sanitation" select karein' },
          { en: 'Imphal city: IMCL — 0385-2420033 for garbage/solid waste complaint', hi: 'Imphal city: IMCL — 0385-2420033 — garbage/solid waste complaint ke liye' },
          { en: 'Manipur toll-free: 1800-345-3818 for civic complaints including garbage', hi: 'Manipur toll-free: 1800-345-3818 — garbage including civic complaints ke liye' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Manipur ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Manipur ULBs mein kaam karta hai' },
        ],
      },
    ],
  },

  // ── Tripura ───────────────────────────────────────────────────────────────
  Tripura: {
    sadak: [
      {
        badge: 'first',
        name: 'Tripura PWD — Road & Pothole Complaint',
        desc: { en: 'Tripura PWD — pwd.tripura.gov.in and CM Helpline for road complaints', hi: 'Tripura road pothole complaint — PWD portal ya CM Helpline' },
        url: 'https://pwd.tripura.gov.in',
        phone: '0381-2415058',
        howto: [
          { en: 'Call Tripura PWD: 0381-2415058 or 0381-2324625', hi: 'Tripura PWD: 0381-2415058 ya 0381-2324625 call karein' },
          { en: 'Online: pwd.tripura.gov.in → Citizen Services → Complaint/Grievance', hi: 'pwd.tripura.gov.in → Citizen Services → Complaint/Grievance karein' },
          { en: 'Agartala city roads: AMC — 0381-2325606', hi: 'Agartala city roads ke liye: AMC — 0381-2325606' },
          { en: 'CM Helpline Tripura: cmhelpline.tripura.gov.in for escalation', hi: 'Escalation ke liye: cmhelpline.tripura.gov.in — Tripura CM Helpline' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'TWDB / PHED Tripura — Water Supply Complaint',
        desc: { en: 'Tripura Water Development Board & PHED — water supply 1916 helpline', hi: 'Tripura water supply complaint — TWDB/PHED 1916 helpline ya portal' },
        url: 'https://twdb.tripura.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — Tripura water supply helpline', hi: '1916 dial karein (24×7) — Tripura water supply helpline' },
          { en: 'Online: twdb.tripura.gov.in → Citizen Services → Grievance', hi: 'twdb.tripura.gov.in → Citizen Services → Grievance mein jaayein' },
          { en: 'Agartala city: AMC water — 0381-2325606', hi: 'Agartala city: AMC water — 0381-2325606' },
          { en: 'Describe issue: No Supply / Leakage / Quality → submit', hi: 'Issue describe: No Supply / Leakage / Quality → submit karein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'AMC Agartala — Garbage Complaint (0381-2325606)',
        desc: { en: 'Agartala Municipal Corporation — 0381-2325606 for garbage/solid waste complaints', hi: 'Agartala garbage complaint — AMC 0381-2325606 ya CM Helpline 1905' },
        url: 'https://agartala.gov.in',
        phone: '0381-2325606',
        howto: [
          { en: 'Call AMC Agartala: 0381-2325606 for garbage/solid waste complaints', hi: 'AMC Agartala: 0381-2325606 — garbage/solid waste complaints ke liye' },
          { en: 'Other Tripura towns: contact local Municipal Council / Nagar Panchayat', hi: 'Other Tripura towns ke liye: local Municipal Council ya Nagar Panchayat se contact karein' },
          { en: 'CM Helpline Tripura: cmhelpline.tripura.gov.in → "Urban/Sanitation" for escalation', hi: 'CM Helpline Tripura: cmhelpline.tripura.gov.in → "Urban/Sanitation" escalation ke liye' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Tripura ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Tripura ULBs mein kaam karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Tripura CM Helpline 1905 — Garbage Escalation',
        desc: { en: 'AMC/ULB not acting? Escalate via Tripura CM Helpline 1905', hi: 'AMC/ULB action nahi? Tripura CM Helpline 1905 par escalate karein' },
        url: 'https://cmhelpline.tripura.gov.in',
        phone: '1905',
        howto: [
          { en: 'Dial 1905 OR cmhelpline.tripura.gov.in → Lodge Complaint → "Urban Local Bodies"', hi: '1905 dial karein ya cmhelpline.tripura.gov.in → "Urban Local Bodies" select karein' },
          { en: 'Add previous AMC/ULB complaint reference for faster resolution', hi: 'Faster resolution ke liye pichla AMC/ULB complaint reference add karein' },
        ],
      },
    ],
  },

  // ── Meghalaya ─────────────────────────────────────────────────────────────
  Meghalaya: {
    sadak: [
      {
        badge: 'first',
        name: 'Meghalaya PWD — Road Complaint & WhatsApp',
        desc: { en: 'Meghalaya PWD — megpwd.gov.in and WhatsApp 9436394363 for road complaints', hi: 'Meghalaya road pothole complaint — megpwd.gov.in ya WhatsApp 9436394363' },
        url: 'https://megpwd.gov.in',
        phone: '0364-2591000',
        howto: [
          { en: 'WhatsApp: 9436394363 — send road damage photo with location for quick response', hi: 'WhatsApp: 9436394363 — road damage photo aur location bhejein — quick response milega' },
          { en: 'Online: megpwd.gov.in → Citizen Services → Complaint', hi: 'megpwd.gov.in → Citizen Services → Complaint mein jaayein' },
          { en: 'Shillong city roads: SMB — 0364-2211266', hi: 'Shillong city roads ke liye: SMB — 0364-2211266' },
          { en: 'CM Helpline Meghalaya: meghalaya.gov.in/helpline for escalation', hi: 'Escalation ke liye: meghalaya.gov.in/helpline — CM Helpline use karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHED Meghalaya — Water Supply Complaint',
        desc: { en: 'Meghalaya PHED — water supply complaint helpline and online portal', hi: 'Meghalaya water supply complaint — PHED helpline ya portal' },
        url: 'https://phed.meghalaya.gov.in',
        phone: '1916',
        howto: [
          { en: 'Dial 1916 (24×7) — Meghalaya water supply helpline', hi: '1916 dial karein (24×7) — Meghalaya water supply helpline' },
          { en: 'Online: phed.meghalaya.gov.in → Grievance → Register Complaint', hi: 'phed.meghalaya.gov.in → Grievance → Register Complaint karein' },
          { en: 'Shillong: SMB (Shillong Municipal Board) — 0364-2211266', hi: 'Shillong: SMB (Shillong Municipal Board) — 0364-2211266' },
          { en: 'Describe issue with connection/area details → submit', hi: 'Connection/area details ke saath issue describe karein → submit karein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'SMB Shillong — Garbage Complaint (CM Connect 1971)',
        desc: { en: 'Shillong Municipal Board — CM Connect 1971 and WhatsApp 9436394363 for garbage', hi: 'Shillong garbage complaint — CM Connect 1971 ya WhatsApp 9436394363' },
        url: 'https://meghalaya.gov.in',
        phone: '1971',
        howto: [
          { en: 'Dial 1971 (Meghalaya CM Connect) → select "Urban/Sanitation" for garbage issue', hi: '1971 (CM Connect) → "Urban/Sanitation" select karein — garbage issue ke liye' },
          { en: 'Toll-free CM Connect: 1800-3456-851 | WhatsApp: 9436394363', hi: 'CM Connect toll-free: 1800-3456-851 | WhatsApp: 9436394363' },
          { en: 'Shillong Municipal Board: 0364-2211266 (SMB office, Shillong city)', hi: 'Shillong Municipal Board: 0364-2211266 — Shillong city garbage complaint' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Meghalaya ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Meghalaya ULBs mein kaam karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Meghalaya CM Connect 1971 — Garbage Escalation',
        desc: { en: 'ULB not acting? Escalate via Meghalaya CM Connect 1971', hi: 'ULB action nahi? Meghalaya CM Connect 1971 par escalate karein' },
        url: 'https://meghalaya.gov.in',
        phone: '1971',
        howto: [
          { en: 'Dial 1971 (CM Connect, 24×7) OR toll-free 1800-3456-851', hi: '1971 dial karein (CM Connect, 24×7) ya toll-free 1800-3456-851' },
          { en: 'Add previous ULB/SMB complaint reference number for escalation', hi: 'Escalation ke liye pichla ULB/SMB complaint reference number add karein' },
        ],
      },
    ],
  },

  // ── Nagaland ──────────────────────────────────────────────────────────────
  Nagaland: {
    sadak: [
      {
        badge: 'first',
        name: 'Nagaland PWD — Road Complaint Portal',
        desc: { en: 'Nagaland PWD — npwd.nagaland.gov.in for road complaints', hi: 'Nagaland road pothole complaint — npwd.nagaland.gov.in portal' },
        url: 'https://npwd.nagaland.gov.in',
        phone: '0370-2290017',
        howto: [
          { en: 'Online: npwd.nagaland.gov.in → Citizen Services → Complaint', hi: 'npwd.nagaland.gov.in → Citizen Services → Complaint karein' },
          { en: 'Kohima PWD: 0370-2290017 | Dimapur PWD: 0386-2223580', hi: 'Kohima PWD: 0370-2290017 | Dimapur PWD: 0386-2223580' },
          { en: 'Mention road name, district, and nearest landmark with damage description', hi: 'Road name, district aur nearest landmark ke saath damage description dein' },
          { en: 'For National Highways in Nagaland: NHAI 1033', hi: 'Nagaland mein National Highways ke liye: NHAI 1033' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHED Nagaland — Water Supply Complaint',
        desc: { en: 'Nagaland PHED — water supply complaint via state helpline', hi: 'Nagaland water supply complaint — PHED state helpline ya portal' },
        url: 'https://phed.nagaland.gov.in',
        phone: '0370-2290027',
        howto: [
          { en: 'Call PHED Nagaland: 0370-2290027 (Kohima, business hours)', hi: 'PHED Nagaland: 0370-2290027 (Kohima, business hours mein call karein)' },
          { en: 'Online: phed.nagaland.gov.in → Citizen Services → Complaint', hi: 'phed.nagaland.gov.in → Citizen Services → Complaint mein jaayein' },
          { en: 'Kohima: PHED HQ 0370-2270016 | Dimapur: PHED 0386-2224120', hi: 'Kohima: PHED HQ 0370-2270016 | Dimapur: PHED 0386-2224120' },
          { en: 'Note: 1916 may not be active in Nagaland — use state-specific numbers', hi: 'Note: Nagaland mein 1916 active nahi — state-specific numbers use karein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'Nagaland ULB — Garbage Complaint (Kohima / Dimapur Municipal)',
        desc: { en: 'Nagaland ULBs — Kohima Town Council 0370-2290048 / Dimapur for garbage complaints', hi: 'Nagaland garbage complaint — Kohima Town Council ya Dimapur Municipal Council' },
        url: 'https://nagaland.gov.in',
        phone: '0370-2290048',
        howto: [
          { en: 'Kohima Town Council: 0370-2290048 for garbage/solid waste complaints', hi: 'Kohima Town Council: 0370-2290048 — garbage/solid waste complaints ke liye' },
          { en: 'Dimapur Municipal Council: 0386-2230073 for Dimapur city garbage', hi: 'Dimapur Municipal Council: 0386-2230073 — Dimapur city garbage complaints' },
          { en: 'State grievance: nagaland.gov.in → Citizen Services → Lodge Complaint', hi: 'nagaland.gov.in → Citizen Services → Lodge Complaint karein' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Nagaland ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Nagaland ULBs mein kaam karta hai' },
        ],
      },
    ],
  },

  // ── Mizoram ───────────────────────────────────────────────────────────────
  Mizoram: {
    sadak: [
      {
        badge: 'first',
        name: 'Mizoram PWD — Road Complaint Portal',
        desc: { en: 'Mizoram PWD — pwd.mizoram.gov.in and state grievance for road complaints', hi: 'Mizoram road pothole complaint — pwd.mizoram.gov.in portal ya state grievance' },
        url: 'https://pwd.mizoram.gov.in',
        phone: '0389-2322200',
        howto: [
          { en: 'Online: pwd.mizoram.gov.in → Contact/Grievance → Complaint', hi: 'pwd.mizoram.gov.in → Contact/Grievance → Complaint karein' },
          { en: 'PWD Mizoram (Aizawl): 0389-2322200 or 0389-2321528', hi: 'PWD Mizoram Aizawl: 0389-2322200 ya 0389-2321528' },
          { en: 'For Aizawl city roads: AMDA — 0389-2340760', hi: 'Aizawl city roads ke liye: AMDA — 0389-2340760' },
          { en: 'Use CPGRAMS (pgportal.gov.in) if state portal is unresponsive', hi: 'State portal unresponsive ho to: CPGRAMS pgportal.gov.in use karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHE Dept Mizoram — Water Supply Complaint',
        desc: { en: 'Mizoram Public Health & Engineering Dept — water supply helpline', hi: 'Mizoram water supply complaint — PHE Dept helpline ya portal' },
        url: 'https://phe.mizoram.gov.in',
        phone: '0389-2323468',
        howto: [
          { en: 'Call PHE Mizoram: 0389-2323468 (Aizawl, business hours)', hi: 'PHE Mizoram: 0389-2323468 (Aizawl, business hours mein call karein)' },
          { en: 'Online: phe.mizoram.gov.in → Citizen Services → Complaint', hi: 'phe.mizoram.gov.in → Citizen Services → Complaint karein' },
          { en: 'Aizawl: AMDA water supply — 0389-2340760', hi: 'Aizawl: AMDA water supply — 0389-2340760' },
          { en: 'Describe issue with your area/zone and connection details', hi: 'Area/zone aur connection details ke saath issue describe karein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'AMDA Aizawl — Garbage Complaint (udpa.mizoram.gov.in)',
        desc: { en: 'Aizawl Municipal Council — udpa.mizoram.gov.in and 0389-2340760 for garbage complaints', hi: 'Aizawl garbage complaint — udpa.mizoram.gov.in ya 0389-2340760' },
        url: 'https://udpa.mizoram.gov.in',
        phone: '0389-2340760',
        howto: [
          { en: 'Online: udpa.mizoram.gov.in → Citizen Grievance → Sanitation/Solid Waste', hi: 'udpa.mizoram.gov.in → Citizen Grievance → Sanitation/Solid Waste select karein' },
          { en: 'AMDA Aizawl: 0389-2340760 for Aizawl city garbage complaints', hi: 'AMDA Aizawl: 0389-2340760 — Aizawl city garbage complaints ke liye' },
          { en: 'Other Mizoram towns: contact local Town Committee / Municipal Council', hi: 'Other Mizoram towns ke liye: local Town Committee ya Municipal Council se contact karein' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Mizoram ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Mizoram ULBs mein kaam karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Mizoram CPGRAMS / State Grievance — Garbage Escalation',
        desc: { en: 'ULB not acting? Use Mizoram state grievance or CPGRAMS for escalation', hi: 'ULB action nahi? Mizoram state grievance ya CPGRAMS se escalate karein' },
        url: 'https://pgportal.gov.in',
        phone: '0389-2322200',
        howto: [
          { en: 'State grievance: mizoram.gov.in → Citizen Services → Lodge Grievance', hi: 'mizoram.gov.in → Citizen Services → Lodge Grievance karein' },
          { en: 'Or use CPGRAMS: pgportal.gov.in → select "Urban Development" department', hi: 'Ya CPGRAMS: pgportal.gov.in → "Urban Development" department select karein' },
        ],
      },
    ],
  },

  // ── Sikkim ────────────────────────────────────────────────────────────────
  Sikkim: {
    sadak: [
      {
        badge: 'first',
        name: 'Sikkim PWD — Road Complaint (SSO Portal)',
        desc: { en: 'Sikkim PWD — SSO grievance portal and state helpline for road complaints', hi: 'Sikkim road pothole complaint — SSO grievance portal ya state helpline' },
        url: 'https://sikkim.gov.in/departments/roads-and-bridges',
        phone: '03592-202455',
        howto: [
          { en: 'Sikkim SSO grievance portal: sso.sikkim.gov.in → Lodge Complaint → PWD', hi: 'Sikkim SSO portal: sso.sikkim.gov.in → Lodge Complaint → PWD select karein' },
          { en: 'Roads & Bridges Dept Sikkim: 03592-202455 (Gangtok)', hi: 'Roads & Bridges Dept Sikkim: 03592-202455 (Gangtok)' },
          { en: 'Gangtok city roads: Gangtok Municipal Corporation — 03592-207060', hi: 'Gangtok city roads ke liye: Gangtok Municipal Corporation — 03592-207060' },
          { en: 'For National Highways (NH10 etc.): NHAI 1033', hi: 'National Highways (NH10 etc.) ke liye: NHAI 1033 dial karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHE Dept Sikkim — Water Supply Complaint',
        desc: { en: 'Sikkim PHE & Water Security Dept — water supply helpline and portal', hi: 'Sikkim water supply complaint — PHE Dept helpline ya portal' },
        url: 'https://phe.sikkim.gov.in',
        phone: '03592-202455',
        howto: [
          { en: 'Call PHE Sikkim: 03592-202455 (Gangtok)', hi: 'PHE Sikkim: 03592-202455 (Gangtok) — call karein' },
          { en: 'Online: phe.sikkim.gov.in → Citizen Services → Complaint', hi: 'phe.sikkim.gov.in → Citizen Services → Complaint karein' },
          { en: 'Gangtok city: PHE East Sikkim — 03592-232087', hi: 'Gangtok city: PHE East Sikkim — 03592-232087' },
          { en: 'Describe issue: No Supply / Leakage / Quality → submit with area details', hi: 'Issue: No Supply / Leakage / Quality describe karein → area details ke saath submit' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'GMC Gangtok — Garbage Complaint (03592-207060)',
        desc: { en: 'Gangtok Municipal Corporation — 03592-207060 for garbage/solid waste complaints', hi: 'Gangtok garbage complaint — GMC 03592-207060 ya SSO portal' },
        url: 'https://sso.sikkim.gov.in',
        phone: '03592-207060',
        howto: [
          { en: 'Call GMC Gangtok: 03592-207060 for garbage/solid waste complaints', hi: 'GMC Gangtok: 03592-207060 — garbage/solid waste complaints ke liye call karein' },
          { en: 'Online: sso.sikkim.gov.in → Lodge Complaint → "Urban/Sanitation"', hi: 'sso.sikkim.gov.in → Lodge Complaint → "Urban/Sanitation" select karein' },
          { en: 'Other Sikkim towns: contact local Nagar Panchayat / Municipal Body', hi: 'Other Sikkim towns ke liye: local Nagar Panchayat ya Municipal Body se contact karein' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Sikkim ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Sikkim ULBs mein kaam karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Sikkim State Grievance — Garbage Escalation',
        desc: { en: 'Municipal body not acting? Escalate via Sikkim SSO portal', hi: 'Municipal body action nahi? Sikkim SSO portal se escalate karein' },
        url: 'https://sso.sikkim.gov.in',
        phone: '03592-231800',
        howto: [
          { en: 'Open sso.sikkim.gov.in → Lodge Complaint → "Urban Local Bodies"', hi: 'sso.sikkim.gov.in → Lodge Complaint → "Urban Local Bodies" select karein' },
          { en: 'Call Chief Minister Grievance Cell: 03592-231800 for further escalation', hi: 'CM Grievance Cell: 03592-231800 — aur escalation ke liye call karein' },
        ],
      },
    ],
  },

  // ── Arunachal Pradesh ─────────────────────────────────────────────────────
  'Arunachal Pradesh': {
    sadak: [
      {
        badge: 'first',
        name: 'Arunachal Pradesh PWD — Road Complaint',
        desc: { en: 'AP PWD — arunachalpwd.org and CM E-Jansunwai for road complaints', hi: 'Arunachal Pradesh road pothole complaint — PWD portal ya CM E-Jansunwai' },
        url: 'https://www.arunachalpwd.org',
        phone: '0360-2211170',
        howto: [
          { en: 'Call AP PWD: 0360-2211170 (Itanagar, Civil Secretariat)', hi: 'AP PWD call karein: 0360-2211170 (Itanagar, Civil Secretariat)' },
          { en: 'Online: arunachalpwd.org → Contact → Complaint submission', hi: 'arunachalpwd.org → Contact → Complaint submit karein' },
          { en: 'CM E-Jansunwai portal for escalation — integrated grievance system', hi: 'Escalation ke liye: CM E-Jansunwai portal — integrated grievance system' },
          { en: 'For National Highways (NH-415 etc.): NHAI 1033', hi: 'National Highways (NH-415 etc.) ke liye: NHAI 1033 dial karein' },
        ],
      },
    ],
    pani: [
      {
        badge: 'first',
        name: 'PHE & WS Dept Arunachal — Water Supply Complaint',
        desc: { en: 'Arunachal Pradesh PHE & Water Supply Dept — helpline and state portal', hi: 'Arunachal Pradesh water supply complaint — PHE WS Dept helpline ya portal' },
        url: 'https://phews.arunachal.gov.in',
        phone: '0360-2213200',
        howto: [
          { en: 'Call PHE WS Arunachal: 0360-2213200 (Itanagar)', hi: 'PHE WS Arunachal: 0360-2213200 (Itanagar) — call karein' },
          { en: 'Online: phews.arunachal.gov.in → Grievance → Register Complaint', hi: 'phews.arunachal.gov.in → Grievance → Register Complaint karein' },
          { en: 'Itanagar: IMCL water — 0360-2212006', hi: 'Itanagar: IMCL water — 0360-2212006' },
          { en: 'Describe issue with your district, area and connection details', hi: 'District, area aur connection details ke saath issue describe karein' },
        ],
      },
    ],
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
    safai: [
      {
        badge: 'first',
        name: 'IMCL Itanagar — Garbage Complaint (0360-2212006)',
        desc: { en: 'Itanagar Municipal Council — 0360-2212006 for garbage/solid waste complaints', hi: 'Itanagar garbage complaint — IMCL 0360-2212006 ya CM E-Jansunwai' },
        url: 'https://imc.arunachal.gov.in',
        phone: '0360-2212006',
        howto: [
          { en: 'Call IMCL Itanagar: 0360-2212006 for garbage/solid waste complaints', hi: 'IMCL Itanagar: 0360-2212006 — garbage/solid waste complaints ke liye call karein' },
          { en: 'Online: imc.arunachal.gov.in → Citizen Services → Complaint', hi: 'imc.arunachal.gov.in → Citizen Services → Complaint karein' },
          { en: 'Other AP towns: contact local Municipal Board / Town Committee', hi: 'Other AP towns ke liye: local Municipal Board ya Town Committee se contact karein' },
          { en: 'App: Swachhata-MoHUA (1969) — works across all Arunachal ULBs', hi: 'App: Swachhata-MoHUA (1969) — sabhi Arunachal ULBs mein kaam karta hai' },
        ],
      },
      {
        badge: 'state',
        name: 'Arunachal CM E-Jansunwai — Garbage Escalation',
        desc: { en: 'ULB not acting? Escalate via Arunachal Pradesh CM E-Jansunwai portal', hi: 'ULB action nahi? AP CM E-Jansunwai portal se escalate karein' },
        url: 'https://arunachal.gov.in',
        phone: '0360-2211170',
        howto: [
          { en: 'CM E-Jansunwai portal → Lodge Grievance → select "Urban Local Bodies"', hi: 'CM E-Jansunwai portal → Lodge Grievance → "Urban Local Bodies" select karein' },
          { en: 'Add previous IMCL/ULB complaint reference for faster resolution', hi: 'Faster resolution ke liye pichla IMCL/ULB complaint reference add karein' },
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
