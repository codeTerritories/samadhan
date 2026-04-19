// ── Chat reply schema ─────────────────────────────────────────
// keys: array of keywords (plain words, Hinglish, common misspellings)
// en / hi: reply text shown to user
// ─────────────────────────────────────────────────────────────

export const CHAT_REPLIES = [

  // ── UPI / Online Fraud ────────────────────────────────────
  {
    keys: [
      'upi','fraud','paisa kat','chori','stolen','online fraud','thagi','scam',
      'paise gaye','account hack','bank fraud','otp share','money lost','transfer',
      'debit','phishing','fake call','kat gaya','payment','rupay','neft','rtgs',
      'wallet','paytm','phonepe','gpay','google pay','money','paisa',
    ],
    en: `This is URGENT — act in the next 30 minutes!\n\n🔴 Step 1: Call 1930 (Cyber Fraud Helpline) RIGHT NOW\n🔴 Step 2: Call your bank to block UPI / card / account\n🔴 Step 3: File complaint at cybercrime.gov.in\n\n📋 Keep ready: transaction ID, amount, date, recipient UPI ID\n\nEvery minute matters — frozen transactions can be reversed!`,
    hi: `यह बहुत URGENT है — अगले 30 मिनट में काम करें!\n\n🔴 Step 1: अभी 1930 (Cyber Fraud Helpline) पर call करें\n🔴 Step 2: Bank को call करके UPI / card / account block करें\n🔴 Step 3: cybercrime.gov.in पर complaint दर्ज करें\n\n📋 तैयार रखें: Transaction ID, amount, date, UPI ID\n\nहर मिनट मायने रखता है — frozen transaction वापस हो सकता है!`,
  },

  // ── Electricity ───────────────────────────────────────────
  {
    keys: [
      'bijli','light','andhera','electricity','power','gul','nahi aai','current',
      'tripping','meter','bill','discom','voltage','fluctuation','shock','wire',
      'transformer','pole','bulb','fan','inverter','load shedding','outage',
      'bijlee','batti','elec','elect','bijli nahi','light nahi','no power',
    ],
    en: `Electricity problem? Here's what to do:\n\n1️⃣ Call DISCOM helpline: 1912 (24×7, free)\n2️⃣ File online complaint on your state DISCOM portal\n3️⃣ Unresolved in 30 days? Escalate to State Electricity Regulatory Commission\n\n🔍 Expand any "Electricity" problem on the main page — I've listed your state's exact portal with step-by-step instructions!`,
    hi: `बिजली की समस्या? यह करें:\n\n1️⃣ DISCOM helpline: 1912 पर call करें (24×7, free)\n2️⃣ State DISCOM portal पर online complaint करें\n3️⃣ 30 दिन में हल न हो? State Electricity Regulatory Commission में escalate करें\n\n🔍 Main page पर "बिजली" problem expand करें — मैंने आपके state का exact portal और steps दिए हैं!`,
  },

  // ── Water ────────────────────────────────────────────────
  {
    keys: [
      'pani','water','supply','nahi aa','jal','nalka','pipe','leak','dirty water',
      'ganda pani','water board','jal board','sewage','drainage','naali','tanker',
      'boring','borewell','hand pump','waterlogging','flood','paani nahi',
      'watar','paani','peene ka pani','drinking water',
    ],
    en: `Water supply problem? Steps:\n\n1️⃣ Call Jal Board helpline: 1916 (free)\n2️⃣ For Jal Jeevan Mission areas: ejalshakti.gov.in\n3️⃣ Burst pipe or sewage? Emergency — call 1916 immediately!\n\n🔍 Check the "Water" section on the main page for your state's exact Jal Board portal.`,
    hi: `पानी की समस्या? यह करें:\n\n1️⃣ Jal Board helpline: 1916 पर call करें (free)\n2️⃣ Jal Jeevan Mission areas के लिए: ejalshakti.gov.in\n3️⃣ Pipe फटी या sewage? Emergency — तुरंत 1916 call करें!\n\n🔍 Main page पर "पानी" section में आपके state का exact Jal Board portal है।`,
  },

  // ── Garbage / Sanitation ─────────────────────────────────
  {
    keys: [
      'kachra','garbage','safai','nahi uth','waste','sweeping','drain','sewer',
      'toilets','toilet','naali','nali block','open defecation','smell','bदू','ganda',
      'dustbin','municipal','nagar nigam','ward','cleanliness','swachh','sanitation',
      'कचरा','सफाई','कूड़ा','कूड़ेदान',
    ],
    en: `Garbage / cleanliness complaint:\n\n1️⃣ Call Swachh Bharat helpline: 1533\n2️⃣ File at sbmurban.org → Citizen Grievance\n3️⃣ Or call your city's Nagar Nigam helpline\n4️⃣ Still unresolved? Escalate via your state's CM Helpline\n\n📸 Tip: Upload a photo with your complaint — gets resolved 3× faster!`,
    hi: `Garbage / सफाई की शिकायत:\n\n1️⃣ Swachh Bharat helpline: 1533 call करें\n2️⃣ sbmurban.org पर → Citizen Grievance file करें\n3️⃣ या अपने शहर के Nagar Nigam helpline को call करें\n4️⃣ फिर भी हल न हो? State CM Helpline से escalate करें\n\n📸 Tip: Complaint के साथ photo upload करें — 3× जल्दी resolve होती है!`,
  },

  // ── Police / FIR / Crime ──────────────────────────────────
  {
    keys: [
      'fir','police','complaint','shikayat','crime','theft','chor','loot','rape',
      'molestation','harassment','assault','dacoity','kidnap','missing','murder',
      'domestic violence','dv','stalking','eve teasing','atrocity','bribe',
      'extortion','blackmail','threat','dhoka','dhoka de','jail','arrest',
      'constable','inspector','thana','police station',
    ],
    en: `Police / FIR complaint:\n\n🚨 Emergency? Call 112 RIGHT NOW\n\n1️⃣ File Online FIR — go to your state police portal\n2️⃣ Visit nearest police station with your ID proof\n3️⃣ Cyber crime? cybercrime.gov.in | Call: 1930\n4️⃣ Police not registering FIR? Approach SP Office or file complaint at pgportal.gov.in\n\nWhich state are you in? I can give the direct FIR portal link.`,
    hi: `Police / FIR शिकायत:\n\n🚨 Emergency? अभी 112 call करें\n\n1️⃣ Online FIR — अपने state police portal पर file करें\n2️⃣ ID proof लेकर नजदीकी police station जाएं\n3️⃣ Cyber crime? cybercrime.gov.in | Call: 1930\n4️⃣ FIR नहीं लिख रहे? SP Office जाएं या pgportal.gov.in पर complaint करें\n\nआप किस state में हैं? मैं direct FIR portal link दे सकता हूं।`,
  },

  // ── Ration / PDS ──────────────────────────────────────────
  {
    keys: [
      'ration','anaj','food','pds','nahi mila','gehu','chawal','wheat','rice',
      'ration card','ration dealer','fair price shop','antyodaya','bpl','apl',
      'subsidy','grain','kerosene','mitti tel','rashan','ration nahi',
    ],
    en: `Ration card / PDS problem:\n\n1️⃣ Call National Food helpline: 1967 (free)\n2️⃣ File grievance at nfsa.gov.in\n3️⃣ Dealer not giving ration? File on your state food portal\n4️⃣ Check your entitlement: nfsa.gov.in → Beneficiary Details\n\nWhat's the exact issue — not received, card problem, or dealer misbehaving?`,
    hi: `Ration card / PDS समस्या:\n\n1️⃣ National Food helpline: 1967 पर call करें (free)\n2️⃣ nfsa.gov.in पर grievance file करें\n3️⃣ Dealer ration नहीं दे रहा? State food portal पर file करें\n4️⃣ अपनी entitlement check करें: nfsa.gov.in → Beneficiary Details\n\nसमस्या क्या है — ration नहीं मिला, card में गड़बड़ी, या dealer बदमाशी?`,
  },

  // ── Aadhaar ───────────────────────────────────────────────
  {
    keys: [
      'aadhaar','aadhar','aadhaaar','uid','update','uidai','biometric','enrolment',
      'name change','address change','dob','date of birth','aadhaar link','mobile link',
      'aadhaar download','eaadhaar','virtual id','vid','masked aadhaar',
    ],
    en: `Aadhaar problem:\n\n1️⃣ Visit myaadhaar.uidai.gov.in for all services\n2️⃣ Call helpline: 1947 (free, 24×7)\n3️⃣ Update address/name/phone online — no centre visit needed\n4️⃣ Biometric update (fingerprint/iris) — visit nearest Aadhaar centre\n\n📌 Lock your Aadhaar biometrics at myaadhaar.uidai.gov.in for safety!`,
    hi: `Aadhaar की समस्या:\n\n1️⃣ सभी services के लिए myaadhaar.uidai.gov.in पर जाएं\n2️⃣ Helpline: 1947 (free, 24×7)\n3️⃣ Address/name/phone online update — centre जाने की जरूरत नहीं\n4️⃣ Biometric update (fingerprint/iris) — नजदीकी Aadhaar centre जाएं\n\n📌 Security के लिए myaadhaar.uidai.gov.in पर biometrics lock करें!`,
  },

  // ── Ambulance / Medical Emergency ────────────────────────
  {
    keys: [
      'ambulance','108','accident','hospital','emergency','hurt','injured','bleeding',
      'heart attack','stroke','unconscious','baby delivery','delivery','pregnant',
      'snake bite','burn','fire','drowning','choking','suicide attempt','overdose',
      'medical','doctor','medicine','dawa','bimari','hospital nahi','admit',
    ],
    en: `🚨 MEDICAL EMERGENCY — Call 108 NOW (free, 24×7)\n\nWhile waiting for ambulance:\n✅ Keep patient still and calm\n✅ Share exact GPS location\n✅ Don't give food or water\n✅ Stay on call with operator\n\nFor mental health crisis: iCall 9152987821 | Vandrevala 1860-2662-345`,
    hi: `🚨 MEDICAL EMERGENCY — अभी 108 call करें (free, 24×7)\n\nAmbulance का इंतजार करते समय:\n✅ मरीज को स्थिर रखें\n✅ सटीक GPS location share करें\n✅ खाना या पानी न दें\n✅ Operator से line पर रहें\n\nMental health crisis के लिए: iCall 9152987821 | Vandrevala 1860-2662-345`,
  },

  // ── Roads / Potholes ──────────────────────────────────────
  {
    keys: [
      'sadak','pothole','road','tuta','gaddha','khamba','pole','traffic','signal',
      'speed breaker','divider','footpath','pavement','nagar','highway','bridge',
      'road repair','pwm','pwd','nhai','flyover','pothole report','sarak',
      'road damage','accident spot','black spot',
    ],
    en: `Road / pothole complaint:\n\n1️⃣ Take a clear photo of the pothole with location\n2️⃣ Report at irad.cept.ac.in (Ministry of Road Transport)\n3️⃣ For National Highways: NHAI helpline 1033 or onetouch.nhai.gov.in\n4️⃣ City roads: file at pgportal.gov.in or your city municipal portal\n\n📸 A photo + exact GPS pin = fastest resolution!`,
    hi: `सड़क / गड्ढे की शिकायत:\n\n1️⃣ Location के साथ गड्ढे की photo लें\n2️⃣ irad.cept.ac.in पर report करें (Road Transport Ministry)\n3️⃣ National Highways: NHAI helpline 1033 या onetouch.nhai.gov.in\n4️⃣ City roads: pgportal.gov.in या city municipal portal पर file करें\n\n📸 Photo + GPS pin = सबसे जल्दी resolution!`,
  },

  // ── Mental Health ─────────────────────────────────────────
  {
    keys: [
      'mental','depression','suicide','help me','tension','stress','pareshan',
      'anxious','anxiety','lonely','alone','hopeless','sad','crying','dar','fear',
      'panic','breakdown','therapy','counselling','nind nahi','neend','sleep',
      'frustrated','angry','violence','abuse','hurt myself',
    ],
    en: `You are not alone. Please reach out right now:\n\n💙 iCall: 9152987821 (Mon–Sat)\n💙 Vandrevala Foundation: 1860-2662-345 (24×7)\n💙 NIMHANS: 080-46110007\n💙 National helpline: 14416\n\nThese are FREE and completely confidential.\nTalking to someone helps more than you know. 🤝`,
    hi: `आप अकेले नहीं हैं। अभी किसी से बात करें:\n\n💙 iCall: 9152987821 (Mon–Sat)\n💙 Vandrevala Foundation: 1860-2662-345 (24×7)\n💙 NIMHANS: 080-46110007\n💙 National helpline: 14416\n\nये सब FREE और पूरी तरह confidential हैं।\nकिसी से बात करना सोचने से ज़्यादा मदद करता है। 🤝`,
  },

  // ── Banking / Finance ─────────────────────────────────────
  {
    keys: [
      'bank','account','atm','cheque','loan','emi','credit card','debit card',
      'bank fraud','passbook','fixed deposit','fd','savings','interest','rbi',
      'nbfc','insurance','claim','mutual fund','sebi','pension','epf','pf',
      'provident fund','gratuity','nps','banking','bank nahi','loan reject',
    ],
    en: `Banking problem:\n\n1️⃣ First: complain directly to your bank's grievance officer\n2️⃣ Unresolved in 30 days? File with RBI Ombudsman at cms.rbi.org.in\n3️⃣ RBI helpline: 14448\n4️⃣ Mutual fund / stock broker issue? SEBI SCORES: scores.sebi.gov.in\n\nWhat's the specific issue — fraud, loan, account, or card?`,
    hi: `Banking की समस्या:\n\n1️⃣ पहले: bank के grievance officer को directly complaint करें\n2️⃣ 30 दिन में हल न हो? cms.rbi.org.in पर RBI Ombudsman को file करें\n3️⃣ RBI helpline: 14448\n4️⃣ Mutual fund / broker issue? SEBI SCORES: scores.sebi.gov.in\n\nकौन सी specific problem है — fraud, loan, account, या card?`,
  },

  // ── Passport / Visa ───────────────────────────────────────
  {
    keys: [
      'passport','visa','tatkal','police verification','psp','mea','foreign travel',
      'passport delay','passport rejected','address on passport','minor passport',
      'renewal','re-issue','ecr','emigration','passport office','seva kendra',
    ],
    en: `Passport problem:\n\n1️⃣ Track application at passportindia.gov.in\n2️⃣ Call PSP (Passport Seva): 1800-258-1800 (free)\n3️⃣ Grievance at passportindia.gov.in → Grievances\n4️⃣ Police verification delay? Contact local SP Office\n\nFor urgent passport (life/death emergency): call 1800-258-1800 for out-of-turn appointment.`,
    hi: `Passport की समस्या:\n\n1️⃣ passportindia.gov.in पर application track करें\n2️⃣ PSP (Passport Seva): 1800-258-1800 call करें (free)\n3️⃣ passportindia.gov.in → Grievances पर complaint करें\n4️⃣ Police verification delay? Local SP Office से contact करें\n\nUrgent passport (life/death emergency): out-of-turn appointment के लिए 1800-258-1800 call करें।`,
  },

  // ── Telecom / Mobile / Internet ───────────────────────────
  {
    keys: [
      'mobile','internet','network','sim','jio','airtel','bsnl','vi','vodafone',
      'idea','recharge','call drop','slow internet','broadband','wifi','trai',
      'signal','no network','port','mnp','number portability','spam call','fraud call',
      'tower','data','4g','5g','bill','telecom',
    ],
    en: `Telecom / mobile problem:\n\n1️⃣ First: complain to your operator (Jio/Airtel/Vi/BSNL)\n2️⃣ Unresolved in 10 days? File with TRAI at consumerportal.trai.gov.in\n3️⃣ Fraud/spam calls: sancharsaathi.gov.in | Helpline: 1800-110-420\n4️⃣ Lost phone? Block IMEI at sancharsaathi.gov.in → CEIR\n\nIs it a network issue, billing problem, or fraud call?`,
    hi: `Telecom / mobile की समस्या:\n\n1️⃣ पहले: अपने operator (Jio/Airtel/Vi/BSNL) को complaint करें\n2️⃣ 10 दिन में हल न हो? consumerportal.trai.gov.in पर TRAI को file करें\n3️⃣ Fraud/spam calls: sancharsaathi.gov.in | Helpline: 1800-110-420\n4️⃣ Phone खो गया? sancharsaathi.gov.in → CEIR पर IMEI block करें\n\nNetwork problem है, billing, या fraud call?`,
  },

  // ── Education ─────────────────────────────────────────────
  {
    keys: [
      'school','college','university','cbse','result','marksheet','certificate',
      'scholarship','admission','fee','hostel','teacher','professor','exam',
      'board','neet','jee','upsc','ssc','exam scam','degree','ugc','aicte',
      'vidyalaya','shiksha','padhai','education','student',
    ],
    en: `Education grievance:\n\n1️⃣ CBSE issues: cbse.gov.in | Helpline: 1800-11-8002\n2️⃣ University / college: UGC SAMARTH Portal at ugc.gov.in\n3️⃣ Technical college (engineering): grievance.aicte-india.org\n4️⃣ Scholarship problems: search "[state] scholarship helpline"\n\nIs this about exam results, fee, admission, or scholarship?`,
    hi: `Education की शिकायत:\n\n1️⃣ CBSE issues: cbse.gov.in | Helpline: 1800-11-8002\n2️⃣ University / college: ugc.gov.in पर UGC SAMARTH Portal\n3️⃣ Technical college (engineering): grievance.aicte-india.org\n4️⃣ Scholarship problems: "[state] scholarship helpline" search करें\n\nExam result, fee, admission, या scholarship — कौन सी समस्या?`,
  },

  // ── Government Services (Pension, PAN, etc.) ──────────────
  {
    keys: [
      'pan','pan card','income tax','itr','return','refund','tax','gst',
      'pension','epfo','pf','provident','gratuity','nps','retirement',
      'cpgrams','govt','sarkari','certificate','birth','death','caste',
      'domicile','income','land record','property','mutation','registry',
      'voter id','election','eci','driving licence','rc','vehicle',
    ],
    en: `Government service problem:\n\n1️⃣ PAN / Income Tax: incometax.gov.in | Helpline: 1800-103-0025\n2️⃣ PF / Pension: epfindia.gov.in | Helpline: 1800-118-005\n3️⃣ Any central govt service: CPGRAMS at pgportal.gov.in\n4️⃣ State services: search "[state] CM helpline"\n\nWhich specific document or service is the issue?`,
    hi: `Government service की समस्या:\n\n1️⃣ PAN / Income Tax: incometax.gov.in | Helpline: 1800-103-0025\n2️⃣ PF / Pension: epfindia.gov.in | Helpline: 1800-118-005\n3️⃣ कोई भी central govt service: pgportal.gov.in पर CPGRAMS\n4️⃣ State services: "[state] CM helpline" search करें\n\nकौन सा specific document या service problem है?`,
  },

  // ── Environment / Pollution ───────────────────────────────
  {
    keys: [
      'pollution','pradushan','smoke','factory','chimney','noise','dust',
      'air quality','aqi','water pollution','river','nala','sewage dump',
      'burning','stubble','parali','plastic','tree cut','jungle','forest',
      'illegal construction','encroachment','cpcb','pcb','green tribunal',
    ],
    en: `Environment / pollution complaint:\n\n1️⃣ Central Pollution Control Board: cpcb.nic.in | Call: 1800-200-7086\n2️⃣ State PCB: search "[state] pollution control board complaint"\n3️⃣ Serious violation? File at Green Tribunal: ngtnational.gov.in\n4️⃣ Air quality emergency: CPCB app "Sameer"\n\nWhat type of pollution — air, water, noise, or industrial dumping?`,
    hi: `Environment / pollution की शिकायत:\n\n1️⃣ Central Pollution Control Board: cpcb.nic.in | Call: 1800-200-7086\n2️⃣ State PCB: "[state] pollution control board complaint" search करें\n3️⃣ Serious violation? Green Tribunal: ngtnational.gov.in पर file करें\n4️⃣ Air quality emergency: CPCB app "Sameer"\n\nPollution का प्रकार क्या है — air, water, noise, या industrial dumping?`,
  },

  // ── Women Safety ──────────────────────────────────────────
  {
    keys: [
      'women','mahila','lady','girl','harassment','eve teasing','acid attack',
      'domestic violence','dowry','rape','molest','safety','helpline','nirbhaya',
      'sexual','abuse','womens','female','ladki','aurat','beti',
    ],
    en: `Women's safety — immediate help:\n\n🆘 Women Helpline: 1091 (24×7)\n🆘 Domestic Violence: 181\n🆘 Emergency Police: 112\n🆘 NCW (National Commission for Women): ncwapps.nic.in\n\nFor legal aid: NALSA helpline 15100\n\nYou are safe to share details here — or call 1091 right now.`,
    hi: `महिला सुरक्षा — तुरंत मदद:\n\n🆘 Women Helpline: 1091 (24×7)\n🆘 Domestic Violence: 181\n🆘 Emergency Police: 112\n🆘 NCW (National Commission for Women): ncwapps.nic.in\n\nLegal aid के लिए: NALSA helpline 15100\n\nआप यहाँ details share कर सकती हैं — या अभी 1091 call करें।`,
  },

  // ── Child Safety ──────────────────────────────────────────
  {
    keys: [
      'child','bachha','bacchi','minor','bal','children','childline','1098',
      'child labour','abuse child','missing child','kidnap','trafficking',
      'school fee','mid day meal','midday','anganwadi',
    ],
    en: `Child safety / welfare:\n\n📞 CHILDLINE: 1098 (24×7, free — for children in distress)\n📞 Missing child: 1094 (Rail Madad) or 1800-11-4000\n📞 Child labour: 1800-180-4127\n\nFor any child in danger — call 1098 immediately.`,
    hi: `Child safety / welfare:\n\n📞 CHILDLINE: 1098 (24×7, free — जरूरतमंद बच्चों के लिए)\n📞 Missing child: 1094 (Rail Madad) या 1800-11-4000\n📞 Child labour: 1800-180-4127\n\nकिसी बच्चे को खतरा हो — तुरंत 1098 call करें।`,
  },
]

export const DEFAULT_REPLY = {
  en: `I'm here to help! I couldn't find an exact match, but try these:\n\n• Use the search bar on the main page — type your problem in Hindi or English\n• Browse by category (Electricity, Water, Police, etc.)\n• General grievance portal: pgportal.gov.in\n• General helpline: 1800-11-4000 (free)\n\nCould you describe your problem in a little more detail? 🙏`,
  hi: `मैं मदद के लिए यहाँ हूं! Exact match नहीं मिला, लेकिन यह try करें:\n\n• Main page पर search करें — हिंदी या अंग्रेजी में problem type करें\n• Category से browse करें (बिजली, पानी, पुलिस आदि)\n• General grievance: pgportal.gov.in\n• General helpline: 1800-11-4000 (free)\n\nथोड़ा और detail में बता सकते हैं? 🙏`,
}
