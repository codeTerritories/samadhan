// ── Chat reply schema ─────────────────────────────────────────
// keys:   array of keywords (plain words, Hinglish, common misspellings)
// en/hi:  reply text — URLs are auto-parsed into clickable links by ChatAssistant
// source: short attribution shown under the bubble as a trust badge
// ─────────────────────────────────────────────────────────────

export const CHAT_REPLIES = [

  // ── UPI / Online Fraud ────────────────────────────────────
  {
    keys: [
      'upi','fraud','paisa kat','chori','stolen','online fraud','thagi','scam',
      'paise gaye','account hack','bank fraud','otp share','money lost','transfer',
      'debit','phishing','fake call','kat gaya','payment','rupay','neft','rtgs',
      'wallet','paytm','phonepe','gpay','google pay','money','paisa','cyber',
      'upi fraud','digital fraud','net banking','internet banking',
    ],
    source: 'Ministry of Home Affairs · Cyber Crime Division',
    en: `🚨 URGENT — Act within the next 30 minutes!\n\n🔴 Step 1: Call 1930 (Cyber Fraud Helpline) RIGHT NOW\n🔴 Step 2: Call your bank to block UPI / card / account\n🔴 Step 3: File complaint → https://cybercrime.gov.in\n\n📋 Keep ready: Transaction ID, amount, date/time, recipient UPI ID\n\nℹ️ Every minute matters — frozen transactions can be reversed. The 1930 helpline directly coordinates with banks.`,
    hi: `🚨 URGENT — अगले 30 मिनट में काम करें!\n\n🔴 Step 1: अभी 1930 (Cyber Fraud Helpline) पर call करें\n🔴 Step 2: Bank को call करके UPI / card / account block करें\n🔴 Step 3: Complaint file करें → https://cybercrime.gov.in\n\n📋 तैयार रखें: Transaction ID, amount, date/time, UPI ID\n\nℹ️ हर मिनट मायने रखता है — 1930 सीधे banks से coordinate करता है।`,
  },

  // ── Electricity ───────────────────────────────────────────
  {
    keys: [
      'bijli','light','andhera','electricity','power','gul','nahi aai','current',
      'tripping','meter','bill','discom','voltage','fluctuation','shock','wire',
      'transformer','pole','bulb','fan','inverter','load shedding','outage',
      'bijlee','batti','elec','elect','bijli nahi','light nahi','no power',
      'bijli bill','high bill','meter reading',
    ],
    source: 'Ministry of Power · State DISCOM',
    en: `⚡ Electricity problem? Here's what to do:\n\n1️⃣ Call DISCOM helpline: 1912 (24×7, free)\n2️⃣ Escalate online → https://services.india.gov.in (search your state DISCOM)\n3️⃣ Still unresolved in 30 days? → State Electricity Regulatory Commission\n\n📌 Expand the "Electricity" section on the main page — exact state portal + step-by-step guide is listed there!`,
    hi: `⚡ बिजली की समस्या? यह करें:\n\n1️⃣ DISCOM helpline: 1912 पर call करें (24×7, free)\n2️⃣ Online escalate करें → https://services.india.gov.in\n3️⃣ 30 दिन में हल न हो? → State Electricity Regulatory Commission\n\n📌 Main page पर "बिजली" section expand करें — आपके state का exact portal और steps वहाँ दिए हैं!`,
  },

  // ── Water ────────────────────────────────────────────────
  {
    keys: [
      'pani','water','supply','nahi aa','jal','nalka','pipe','leak','dirty water',
      'ganda pani','water board','jal board','sewage','drainage','naali','tanker',
      'boring','borewell','hand pump','waterlogging','flood','paani nahi',
      'watar','paani','peene ka pani','drinking water','jal jeevan',
    ],
    source: 'Ministry of Jal Shakti · National Jal Jeevan Mission',
    en: `💧 Water supply problem?\n\n1️⃣ Call Jal Board helpline: 1916 (free)\n2️⃣ Jal Jeevan Mission complaint → https://ejalshakti.gov.in\n3️⃣ Burst pipe / sewage emergency → Call 1916 immediately!\n\n📌 Check the "Water" section on the main page for your state's exact Jal Board portal.`,
    hi: `💧 पानी की समस्या?\n\n1️⃣ Jal Board helpline: 1916 पर call करें (free)\n2️⃣ Jal Jeevan Mission complaint → https://ejalshakti.gov.in\n3️⃣ Pipe फटी / sewage emergency → तुरंत 1916 call करें!\n\n📌 Main page पर "पानी" section में आपके state का exact Jal Board portal है।`,
  },

  // ── Garbage / Sanitation ─────────────────────────────────
  {
    keys: [
      'kachra','garbage','safai','nahi uth','waste','sweeping','drain','sewer',
      'toilets','toilet','naali','nali block','open defecation','smell','ganda',
      'dustbin','municipal','nagar nigam','ward','cleanliness','swachh','sanitation',
      'कचरा','सफाई','कूड़ा','कूड़ेदान','sweeper nahi aaya',
    ],
    source: 'Ministry of Housing & Urban Affairs · Swachh Bharat Mission',
    en: `🗑️ Garbage / cleanliness complaint:\n\n1️⃣ Call Swachh Bharat helpline: 1533\n2️⃣ File grievance → https://sbmurban.org → Citizen Grievance\n3️⃣ Or call your city's Nagar Nigam helpline\n4️⃣ Still unresolved? Escalate via your state CM Helpline\n\n📸 Tip: Upload a photo with your complaint — gets resolved 3× faster!`,
    hi: `🗑️ Garbage / सफाई की शिकायत:\n\n1️⃣ Swachh Bharat helpline: 1533 call करें\n2️⃣ Grievance file करें → https://sbmurban.org → Citizen Grievance\n3️⃣ या अपने शहर के Nagar Nigam helpline को call करें\n4️⃣ फिर भी हल न हो? State CM Helpline से escalate करें\n\n📸 Tip: Photo के साथ complaint करें — 3× जल्दी resolve होती है!`,
  },

  // ── Police / FIR / Crime ──────────────────────────────────
  {
    keys: [
      'fir','police','complaint','shikayat','crime','theft','chor','loot','rape',
      'molestation','harassment','assault','dacoity','kidnap','murder',
      'domestic violence','dv','stalking','eve teasing','atrocity','extortion',
      'blackmail','threat','dhoka','jail','arrest','constable','inspector',
      'thana','police station','fir nahi likh raha','fir refuse',
    ],
    source: 'Ministry of Home Affairs · State Police',
    en: `🚨 Police / FIR complaint:\n\n🆘 Emergency? Call 112 RIGHT NOW (free, 24×7)\n\n1️⃣ File Online FIR on your state police portal\n2️⃣ Visit nearest police station with ID proof\n3️⃣ Cyber crime → https://cybercrime.gov.in | Call: 1930\n4️⃣ Police refusing FIR? Approach SP Office or file at → https://pgportal.gov.in\n\nWhich state are you in? I can point you to the direct FIR portal.`,
    hi: `🚨 Police / FIR शिकायत:\n\n🆘 Emergency? अभी 112 call करें (free, 24×7)\n\n1️⃣ State police portal पर Online FIR file करें\n2️⃣ ID proof लेकर नजदीकी police station जाएं\n3️⃣ Cyber crime → https://cybercrime.gov.in | Call: 1930\n4️⃣ FIR नहीं लिख रहे? SP Office जाएं या → https://pgportal.gov.in पर file करें\n\nआप किस state में हैं? Direct FIR portal बता सकता हूं।`,
  },

  // ── Ration / PDS ──────────────────────────────────────────
  {
    keys: [
      'ration','anaj','food','pds','nahi mila','gehu','chawal','wheat','rice',
      'ration card','ration dealer','fair price shop','antyodaya','bpl','apl',
      'subsidy','grain','kerosene','mitti tel','rashan','ration nahi',
      'ration card nahi','new ration card','ration card correction',
    ],
    source: 'Ministry of Food & Public Distribution · NFSA',
    en: `🌾 Ration card / PDS problem:\n\n1️⃣ Call National Food Helpline: 14445 (free, 24×7)\n2️⃣ File grievance → https://nfsa.gov.in → Grievance Portal\n3️⃣ Dealer not giving ration? File on your state food portal\n4️⃣ Check your entitlement: https://nfsa.gov.in → Beneficiary Details\n\nWhat's the issue — ration not received, card problem, or dealer misbehaving?`,
    hi: `🌾 Ration card / PDS समस्या:\n\n1️⃣ National Food Helpline: 14445 पर call करें (free, 24×7)\n2️⃣ Grievance file करें → https://nfsa.gov.in → Grievance Portal\n3️⃣ Dealer ration नहीं दे रहा? State food portal पर file करें\n4️⃣ Entitlement check करें: https://nfsa.gov.in → Beneficiary Details\n\nसमस्या क्या है — ration नहीं मिला, card में गड़बड़ी, या dealer बदमाशी?`,
  },

  // ── Aadhaar ───────────────────────────────────────────────
  {
    keys: [
      'aadhaar','aadhar','aadhaaar','uid','update','uidai','biometric','enrolment',
      'name change','address change','dob','date of birth','aadhaar link','mobile link',
      'aadhaar download','eaadhaar','virtual id','vid','masked aadhaar',
      'aadhaar card','aadhar update',
    ],
    source: 'UIDAI · Ministry of Electronics & IT',
    en: `🪪 Aadhaar problem:\n\n1️⃣ All services → https://myaadhaar.uidai.gov.in\n2️⃣ Helpline: 1947 (free, 24×7)\n3️⃣ Update address/name/phone online — no centre visit needed\n4️⃣ Biometric update → visit nearest Aadhaar Seva Kendra\n\n🔒 Security tip: Lock your Aadhaar biometrics at myaadhaar.uidai.gov.in`,
    hi: `🪪 Aadhaar की समस्या:\n\n1️⃣ सभी services → https://myaadhaar.uidai.gov.in\n2️⃣ Helpline: 1947 (free, 24×7)\n3️⃣ Address/name/phone online update — centre जाने की जरूरत नहीं\n4️⃣ Biometric update → नजदीकी Aadhaar Seva Kendra जाएं\n\n🔒 Security tip: myaadhaar.uidai.gov.in पर biometrics lock करें`,
  },

  // ── Document Lost / Recovered ─────────────────────────────
  {
    keys: [
      'document lost','doc lost','certificate lost','marksheet lost','degree lost',
      'id lost','card lost','birth certificate','caste certificate','domicile',
      'income certificate','land record','property paper','kho gaya','khoya',
      'lost document','dastawej khoya','voter id lost','pan lost','driving licence lost',
    ],
    source: 'Multiple Ministries · State Govt Services',
    en: `📋 Lost documents — step-by-step:\n\n1️⃣ File an FIR / NCR at nearest police station (needed for most re-issue requests)\n2️⃣ Aadhaar lost → https://myaadhaar.uidai.gov.in | Call: 1947\n3️⃣ PAN card lost → https://incometaxindiaefiling.gov.in | Call: 1800-103-0025\n4️⃣ Passport lost → https://passportindia.gov.in | Call: 1800-258-1800\n5️⃣ Voter ID lost → https://voters.eci.gov.in\n6️⃣ Driving Licence lost → https://parivahan.gov.in\n7️⃣ Marksheet/Degree lost → Contact issuing board/university\n\nWhich specific document did you lose?`,
    hi: `📋 दस्तावेज़ खो गया — steps:\n\n1️⃣ नजदीकी police station में FIR / NCR दर्ज करें (re-issue के लिए जरूरी)\n2️⃣ Aadhaar खोया → https://myaadhaar.uidai.gov.in | Call: 1947\n3️⃣ PAN card खोया → https://incometaxindiaefiling.gov.in | Call: 1800-103-0025\n4️⃣ Passport खोया → https://passportindia.gov.in | Call: 1800-258-1800\n5️⃣ Voter ID खोया → https://voters.eci.gov.in\n6️⃣ Driving Licence खोया → https://parivahan.gov.in\n7️⃣ Marksheet/Degree खोई → Issuing board/university से contact करें\n\nकौन सा document खोया?`,
  },

  // ── Emergency Numbers (composite) ────────────────────────
  {
    keys: [
      'emergency','aapat','urgent','jaldi','help','kya number','helpline number',
      'all helpline','sabhi number','important number','emergency number',
      'kisi ko call','ambulance number','fire brigade','disaster','earthquake',
    ],
    source: 'National Emergency Response System · NDMA',
    en: `🆘 All Emergency Helplines (Save These!):\n\n🚨 Police: 112\n🚑 Ambulance: 108\n🔥 Fire Brigade: 101\n👩 Women Helpline: 1091\n👧 Child Helpline: 1098\n🌊 Disaster (NDMA): 1078\n💙 Mental Health: 14416\n🏥 Health Helpline: 104\n💊 Poison Control: 1066\n🚂 Railway Emergency: 139\n\nFor cyber fraud: 1930\nFor senior citizens: 14567\n\nAll calls are free and available 24×7.`,
    hi: `🆘 सभी Emergency Helplines (ये save करें!):\n\n🚨 Police: 112\n🚑 Ambulance: 108\n🔥 Fire Brigade: 101\n👩 Women Helpline: 1091\n👧 Child Helpline: 1098\n🌊 Disaster (NDMA): 1078\n💙 Mental Health: 14416\n🏥 Health Helpline: 104\n💊 Poison Control: 1066\n🚂 Railway Emergency: 139\n\nCyber fraud के लिए: 1930\nSenior citizens के लिए: 14567\n\nसभी calls free और 24×7 उपलब्ध हैं।`,
  },

  // ── Ambulance / Medical Emergency ────────────────────────
  {
    keys: [
      'ambulance','108','accident','hospital','hurt','injured','bleeding',
      'heart attack','stroke','unconscious','baby delivery','delivery','pregnant',
      'snake bite','burn','fire','drowning','choking','suicide attempt','overdose',
      'medical','doctor','medicine','dawa','bimari','hospital nahi','admit',
    ],
    source: 'Ministry of Health & Family Welfare · NHM',
    en: `🚨 MEDICAL EMERGENCY — Call 108 NOW (free, 24×7)\n\nWhile waiting for ambulance:\n✅ Keep patient still and calm\n✅ Share exact location / GPS pin\n✅ Do NOT give food or water\n✅ Stay on call with the operator\n\nOther useful numbers:\n🏥 Health helpline: 104\n💙 Mental health crisis: 14416 | iCall: 9152987821\n💊 Poison emergency: 1066`,
    hi: `🚨 MEDICAL EMERGENCY — अभी 108 call करें (free, 24×7)\n\nAmbulance आने तक:\n✅ मरीज को स्थिर और शांत रखें\n✅ सटीक location / GPS pin share करें\n✅ खाना या पानी न दें\n✅ Operator से line पर रहें\n\nOther numbers:\n🏥 Health helpline: 104\n💙 Mental health: 14416 | iCall: 9152987821\n💊 Poison emergency: 1066`,
  },

  // ── Roads / Potholes ──────────────────────────────────────
  {
    keys: [
      'sadak','pothole','road','tuta','gaddha','khamba','pole','traffic','signal',
      'speed breaker','divider','footpath','pavement','nagar','highway','bridge',
      'road repair','pwm','pwd','nhai','flyover','pothole report','sarak',
      'road damage','accident spot','black spot',
    ],
    source: 'Ministry of Road Transport · NHAI',
    en: `🛣️ Road / pothole complaint:\n\n1️⃣ Take a clear photo with your location\n2️⃣ Report at → https://irad.cept.ac.in (MoRTH portal)\n3️⃣ National Highways: Call NHAI helpline 1033 or → https://onetouch.nhai.gov.in\n4️⃣ City roads → https://pgportal.gov.in or your city municipal portal\n\n📸 Photo + GPS pin = fastest resolution!`,
    hi: `🛣️ सड़क / गड्ढे की शिकायत:\n\n1️⃣ Location के साथ photo लें\n2️⃣ Report करें → https://irad.cept.ac.in (MoRTH portal)\n3️⃣ National Highways: 1033 call करें या → https://onetouch.nhai.gov.in\n4️⃣ City roads → https://pgportal.gov.in या city municipal portal\n\n📸 Photo + GPS pin = सबसे जल्दी resolution!`,
  },

  // ── Mental Health ─────────────────────────────────────────
  {
    keys: [
      'mental','depression','suicide','help me','tension','stress','pareshan',
      'anxious','anxiety','lonely','alone','hopeless','sad','crying','dar','fear',
      'panic','breakdown','therapy','counselling','nind nahi','neend','sleep',
      'frustrated','angry','violence','abuse','hurt myself',
    ],
    source: 'Ministry of Health · NIMHANS · iCall',
    en: `You are not alone. Please reach out right now:\n\n💙 iCall: 9152987821 (Mon–Sat, 8am–10pm)\n💙 Vandrevala Foundation: 1860-2662-345 (24×7)\n💙 NIMHANS: 080-46110007\n💙 National helpline: 14416 (24×7, free)\n\nThese are FREE and completely confidential.\nYou can talk in Hindi or English. 🤝`,
    hi: `आप अकेले नहीं हैं। अभी किसी से बात करें:\n\n💙 iCall: 9152987821 (Mon–Sat, 8am–10pm)\n💙 Vandrevala Foundation: 1860-2662-345 (24×7)\n💙 NIMHANS: 080-46110007\n💙 National helpline: 14416 (24×7, free)\n\nये सब FREE और पूरी तरह confidential हैं।\nHindi या English — जैसे चाहें बात करें। 🤝`,
  },

  // ── Banking / Finance ─────────────────────────────────────
  {
    keys: [
      'bank','account','atm','cheque','loan','emi','credit card','debit card',
      'bank fraud','passbook','fixed deposit','fd','savings','interest','rbi',
      'nbfc','mutual fund','sebi','banking','bank nahi','loan reject',
      'account freeze','bank complaint','rbi ombudsman',
    ],
    source: 'Reserve Bank of India · RBI Ombudsman',
    en: `🏦 Banking problem:\n\n1️⃣ First: complain to your bank's Grievance Officer\n2️⃣ Unresolved in 30 days? → RBI Ombudsman: https://cms.rbi.org.in\n3️⃣ RBI helpline: 14448\n4️⃣ Mutual fund / stock broker issue? → https://scores.sebi.gov.in\n\nWhat's the specific issue — fraud, loan, account, or card?`,
    hi: `🏦 Banking की समस्या:\n\n1️⃣ पहले: bank के Grievance Officer को complaint करें\n2️⃣ 30 दिन में हल न हो? → RBI Ombudsman: https://cms.rbi.org.in\n3️⃣ RBI helpline: 14448\n4️⃣ Mutual fund / broker issue? → https://scores.sebi.gov.in\n\nकौन सी specific problem है — fraud, loan, account, या card?`,
  },

  // ── Consumer / Refund ────────────────────────────────────
  {
    keys: [
      'consumer','refund','product','defective','warranty','guarantee','return',
      'amazon','flipkart','meesho','myntra','ecommerce','online shopping',
      'restaurant','hotel','service','overcharge','bill','cheat','deceive',
      'nahi mila refund','paise wapas','consumer court','consumer forum',
      'product not delivered','wrong product','consumer complaint',
    ],
    source: 'Ministry of Consumer Affairs · INGRAM',
    en: `🛒 Consumer complaint / refund:\n\n1️⃣ Call National Consumer Helpline: 1915 (free)\n2️⃣ File complaint → https://consumerhelpline.gov.in (INGRAM Portal)\n3️⃣ E-commerce issue? File directly on the platform's grievance section\n4️⃣ Escalate to Consumer Forum → https://edaakhil.nic.in\n\n📋 Keep: bills, screenshots, chat records, order ID\n\nConsumer Forum judgements are legally binding — and it's FREE to file!`,
    hi: `🛒 Consumer complaint / refund:\n\n1️⃣ National Consumer Helpline: 1915 (free)\n2️⃣ Complaint file करें → https://consumerhelpline.gov.in (INGRAM Portal)\n3️⃣ E-commerce issue? Platform के grievance section पर directly file करें\n4️⃣ Consumer Forum में escalate करें → https://edaakhil.nic.in\n\n📋 रखें: bills, screenshots, chat records, order ID\n\nConsumer Forum का फैसला legally binding होता है — और file करना FREE है!`,
  },

  // ── Corruption / Bribe ────────────────────────────────────
  {
    keys: [
      'corrupt','bribe','rishwat','ghoos','corruption','sarkari ghoos','demand',
      'paisa maang','officer demand','police bribe','govt official','illegal',
      'vigilance','anti corruption','lokpal','lokayukta','cvc','cbi',
      'bribery','kickback','ghoos lena','ghoos dena',
    ],
    source: 'Central Vigilance Commission · Lokpal Secretariat',
    en: `⚖️ Corruption / bribe complaint:\n\n1️⃣ Central Vigilance Commission: https://cvc.gov.in | Call: 1800-11-0180\n2️⃣ CBI Corruption complaint → https://cbi.gov.in\n3️⃣ Lokpal (for Group A officers & MPs): https://lokpal.gov.in\n4️⃣ State Lokayukta → search "[your state] Lokayukta portal"\n5️⃣ CPGRAMS (central govt staff) → https://pgportal.gov.in\n\n🔒 You can file anonymously. Keep evidence if possible (voice recording is admissible).`,
    hi: `⚖️ Corruption / rishwat की शिकायत:\n\n1️⃣ Central Vigilance Commission: https://cvc.gov.in | Call: 1800-11-0180\n2️⃣ CBI Corruption complaint → https://cbi.gov.in\n3️⃣ Lokpal (Group A officers & MPs के लिए): https://lokpal.gov.in\n4️⃣ State Lokayukta → "[state] Lokayukta portal" search करें\n5️⃣ CPGRAMS (central govt staff) → https://pgportal.gov.in\n\n🔒 Anonymous complaint file कर सकते हैं। Evidence हो तो रखें (voice recording मान्य है)।`,
  },

  // ── Job / Salary ──────────────────────────────────────────
  {
    keys: [
      'salary','naukri','job','vetan','payment nahi','boss','employer','mazdoor',
      'labour','shram','epf','pf','provident fund','gratuity','overtime','bonus',
      'termination','fired','layoff','leave','maternity','paternity',
      'salary not paid','vetan nahi','minimum wage','contract',
    ],
    source: 'Ministry of Labour & Employment · EPFO',
    en: `💼 Job / salary problem:\n\n1️⃣ Call Labour Helpline: 1800-111-555 (free)\n2️⃣ File complaint → https://shramsuvidha.gov.in (Labour Commissioner)\n3️⃣ PF not transferred / EPF issue → https://epfindia.gov.in | Call: 1800-118-005\n4️⃣ Serious violation? File with Labour Commissioner in your district\n5️⃣ Wrongful termination? Approach Industrial Tribunal / Labour Court\n\nWhat's the issue — salary withheld, PF not given, or wrongful termination?`,
    hi: `💼 Job / salary की समस्या:\n\n1️⃣ Labour Helpline: 1800-111-555 (free)\n2️⃣ Complaint file करें → https://shramsuvidha.gov.in (Labour Commissioner)\n3️⃣ PF / EPF issue → https://epfindia.gov.in | Call: 1800-118-005\n4️⃣ Serious violation? जिले के Labour Commissioner को file करें\n5️⃣ Wrongful termination? Industrial Tribunal / Labour Court जाएं\n\nसमस्या क्या है — salary नहीं मिली, PF नहीं मिला, या नौकरी गई?`,
  },

  // ── Housing / Rent / RERA ─────────────────────────────────
  {
    keys: [
      'housing','makan','flat','builder','rera','property','rent','kiraya',
      'tenant','landlord','possession','delay','possession delay','flat nahi mila',
      'builder fraud','property fraud','registry','stamp duty','landlord problem',
      'house problem','eviction','deposit','security deposit wapas',
    ],
    source: 'Ministry of Housing · RERA · State Rent Courts',
    en: `🏠 Housing / rent problem:\n\n1️⃣ Builder / flat delay → file complaint at your state RERA: https://rera.gov.in\n2️⃣ Central RERA helpline: 1800-11-8111\n3️⃣ Rent dispute / landlord issue → approach Rent Control Court in your city\n4️⃣ Property fraud → file FIR at police station + approach RERA\n5️⃣ Security deposit not returned → file in Consumer Court: https://edaakhil.nic.in\n\nIs this about a builder delay, landlord dispute, or fraud?`,
    hi: `🏠 Housing / rent की समस्या:\n\n1️⃣ Builder / flat delay → State RERA पर complaint: https://rera.gov.in\n2️⃣ Central RERA helpline: 1800-11-8111\n3️⃣ Rent dispute / landlord issue → शहर के Rent Control Court जाएं\n4️⃣ Property fraud → police station में FIR + RERA approach करें\n5️⃣ Security deposit वापस नहीं? → Consumer Court: https://edaakhil.nic.in\n\nसमस्या क्या है — builder delay, landlord, या fraud?`,
  },

  // ── Govt Service Delay / RTI ──────────────────────────────
  {
    keys: [
      'govt delay','sarkari kaam','sarkar','rti','right to information',
      'cpgrams','pgportal','certificate delay','pending','ruka hua','nahi hua',
      'application pending','kab milega','delay','government service',
      'document pending','ration card pending','caste certificate delay',
    ],
    source: 'DARPG · CPGRAMS · RTI Portal',
    en: `⏱️ Government service delayed?\n\n1️⃣ File CPGRAMS complaint → https://pgportal.gov.in (for all central govt services)\n2️⃣ State grievance → search "[state] cm helpline" or "[state] public grievance portal"\n3️⃣ File RTI (if they're not responding) → https://rtionline.gov.in\n4️⃣ RTI helpline: 1800-11-0014\n\n📌 CPGRAMS is monitored by Cabinet Secretariat — complaints get escalated automatically if unresolved.`,
    hi: `⏱️ Government service में delay?\n\n1️⃣ CPGRAMS complaint file करें → https://pgportal.gov.in (सभी central govt services)\n2️⃣ State grievance → "[state] cm helpline" या "[state] public grievance portal" search करें\n3️⃣ जवाब नहीं मिल रहा? RTI file करें → https://rtionline.gov.in\n4️⃣ RTI helpline: 1800-11-0014\n\n📌 CPGRAMS Cabinet Secretariat monitor करती है — complaint automatically escalate होती है।`,
  },

  // ── Legal Help ────────────────────────────────────────────
  {
    keys: [
      'legal','vakeel','lawyer','court','kanoon','lok adalat','nalsa','legal aid',
      'free lawyer','free vakeel','justice','case file','bail','fir copy',
      'legal advice','advocate','high court','supreme court','district court',
      'consumer court','mediation','legal help','kanuni madad',
    ],
    source: 'National Legal Services Authority · NALSA',
    en: `⚖️ Need legal help?\n\n1️⃣ FREE legal aid → Call NALSA helpline: 15100 (free)\n2️⃣ All services → https://nalsa.gov.in\n3️⃣ District Legal Services Authority (DLSA) — visit your district court campus\n4️⃣ Lok Adalat (quick out-of-court settlement) → available monthly at district courts\n5️⃣ Women / SC/ST / BPL families get priority FREE legal aid\n\n💡 You are legally entitled to a free lawyer if you cannot afford one.`,
    hi: `⚖️ कानूनी मदद चाहिए?\n\n1️⃣ FREE legal aid → NALSA helpline: 15100 (free)\n2️⃣ सभी services → https://nalsa.gov.in\n3️⃣ District Legal Services Authority (DLSA) → जिला court campus जाएं\n4️⃣ Lok Adalat (court के बाहर जल्दी settlement) → जिला courts में monthly उपलब्ध\n5️⃣ Women / SC/ST / BPL परिवारों को priority FREE legal aid मिलती है\n\n💡 यदि आप afford नहीं कर सकते तो आपको free lawyer पाने का कानूनी अधिकार है।`,
  },

  // ── Shop / Market / Consumer ──────────────────────────────
  {
    keys: [
      'shop','dukan','market','bazar','trader','merchant','shopkeeper',
      'overcharge','weights','timbang','maap tol','adulteration','milawat',
      'expired product','fake product','mislabelling','duplicate','nakali',
      'medical store','medicine overcharge','petrol pump','fuel','meter tamper',
    ],
    source: 'Ministry of Consumer Affairs · Weights & Measures',
    en: `🏪 Shop / market complaint:\n\n1️⃣ National Consumer Helpline: 1915 (free)\n2️⃣ File at → https://consumerhelpline.gov.in\n3️⃣ Adulterated food? → FSSAI helpline: 1800-11-2100 or → https://foscos.fssai.gov.in\n4️⃣ Wrong weights / measures → Legal Metrology office in your district\n5️⃣ Petrol pump fraud → Petroleum Ministry helpline: 1800-233-3555\n\nKeep: bill / receipt as proof for all complaints.`,
    hi: `🏪 Shop / market की शिकायत:\n\n1️⃣ National Consumer Helpline: 1915 (free)\n2️⃣ File करें → https://consumerhelpline.gov.in\n3️⃣ मिलावट / खराब खाना? → FSSAI: 1800-11-2100 या → https://foscos.fssai.gov.in\n4️⃣ गलत माप-तोल → जिले के Legal Metrology office में complaint\n5️⃣ Petrol pump fraud → 1800-233-3555\n\nसभी complaints के लिए bill / receipt proof रखें।`,
  },

  // ── Digital Payments ──────────────────────────────────────
  {
    keys: [
      'digital payment','upi fail','payment stuck','pending payment','deducted not',
      'money deducted','refund upi','npci','bhim','paytm issue','phonepe problem',
      'gpay stuck','neft failed','rtgs failed','imps failed','payment failure',
      'auto debit','nach','emandate','payment app',
    ],
    source: 'NPCI · RBI Payments & Settlement',
    en: `💳 Digital payment problem:\n\n1️⃣ Money deducted but not credited? Wait 24–48 hrs — auto-reversal happens\n2️⃣ No reversal? File dispute on your UPI app (Jio / Airtel / NPCI)\n3️⃣ NPCI grievance → https://npci.org.in → Dispute Redressal\n4️⃣ Fraud? Call: 1930 immediately | File: https://cybercrime.gov.in\n5️⃣ Bank not resolving? → RBI Ombudsman: https://cms.rbi.org.in\n\n📋 Note: Transaction UTR/Reference ID is essential for all disputes.`,
    hi: `💳 Digital payment की समस्या:\n\n1️⃣ पैसे गए लेकिन नहीं मिले? 24–48 घंटे प्रतीक्षा करें — auto-reversal होता है\n2️⃣ Reversal नहीं? UPI app पर dispute file करें\n3️⃣ NPCI grievance → https://npci.org.in → Dispute Redressal\n4️⃣ Fraud? अभी call करें: 1930 | File: https://cybercrime.gov.in\n5️⃣ Bank हल नहीं कर रहा? → RBI Ombudsman: https://cms.rbi.org.in\n\n📋 Note: Transaction UTR/Reference ID सभी disputes के लिए जरूरी है।`,
  },

  // ── Personal Safety ───────────────────────────────────────
  {
    keys: [
      'safety','suraksha','danger','bachao','threat','life threat','personal safety',
      'stalker','follow kar raha','dar lag raha','unsafe','scared','threatened',
      'neighbour problem','mohalla','area unsafe','eve teasing street',
    ],
    source: 'Ministry of Home Affairs · State Police',
    en: `🛡️ Personal safety concern:\n\n🆘 Immediate danger? Call 112 (free, 24×7)\n\n1️⃣ File a complaint / NCR at local police station\n2️⃣ Women in danger: 1091 | Men: 112\n3️⃣ Stalking / threat → file FIR under IPC 354D\n4️⃣ Neighbour / local threat → approach Beat Officer or Local SHO\n5️⃣ Escalate to SP / DCP if police not acting\n\nYour safety is the priority — do not hesitate to call 112.`,
    hi: `🛡️ Personal safety concern:\n\n🆘 तत्काल खतरा? Call 112 (free, 24×7)\n\n1️⃣ Local police station में complaint / NCR file करें\n2️⃣ Women in danger: 1091 | Men: 112\n3️⃣ Stalking / threat → IPC 354D के तहत FIR file करें\n4️⃣ Neighbour / local threat → Beat Officer या Local SHO के पास जाएं\n5️⃣ Police action नहीं? SP / DCP को escalate करें\n\nआपकी safety सबसे important है — 112 call करने में देर न करें।`,
  },

  // ── Insurance / Claim ─────────────────────────────────────
  {
    keys: [
      'insurance','bima','claim','irdai','policy','premium','life insurance',
      'health insurance','motor insurance','vehicle insurance','claim reject',
      'insurance fraud','agent fraud','maturity','surrender','nominee',
      'claim nahi mila','insurance company','lic','pmjby','pmsby',
    ],
    source: 'IRDAI · Insurance Ombudsman',
    en: `🛡️ Insurance / claim problem:\n\n1️⃣ Call IRDAI Bima Bharosa helpline: 155255 (free)\n2️⃣ File complaint → https://bimabharosa.irdai.gov.in\n3️⃣ Claim rejected? → Insurance Ombudsman (free, binding): https://cioins.co.in\n4️⃣ LIC issue → https://licindia.in → Grievance | Call: 1800-33-4433\n5️⃣ Complaint against agent → your state's Insurance Ombudsman office\n\n📋 Keep: policy document, claim form, rejection letter (if any).`,
    hi: `🛡️ Insurance / claim की समस्या:\n\n1️⃣ IRDAI Bima Bharosa: 155255 (free)\n2️⃣ Complaint file करें → https://bimabharosa.irdai.gov.in\n3️⃣ Claim reject हुआ? → Insurance Ombudsman (free, binding): https://cioins.co.in\n4️⃣ LIC issue → https://licindia.in → Grievance | Call: 1800-33-4433\n5️⃣ Agent fraud → State Insurance Ombudsman office\n\n📋 रखें: policy document, claim form, rejection letter.`,
  },

  // ── Society / Area / RWA ──────────────────────────────────
  {
    keys: [
      'society','rwa','resident','apartment','colony','mohalla','lift','lift nahi',
      'parking','maintenance','maintenance charge','water in society','amenities',
      'seepage','leakage','flat repair','security guard','society problem',
      'builder after possession','common area','terrace','society complaint',
    ],
    source: 'State RERA · Municipal Corporation',
    en: `🏘️ Society / RWA problem:\n\n1️⃣ Talk to your RWA / society management first (written complaint with copy)\n2️⃣ Builder not providing amenities after possession? → State RERA: https://rera.gov.in\n3️⃣ Society accounts / fund misuse? → Registrar of Societies in your state\n4️⃣ Municipal services (road, water, light): → local Nagar Nigam / Municipal Corporation\n5️⃣ Unresolved? → file at https://pgportal.gov.in or state CM Helpline\n\nAlways keep written records of all complaints.`,
    hi: `🏘️ Society / RWA की समस्या:\n\n1️⃣ RWA / society management को written complaint दें (copy अपने पास रखें)\n2️⃣ Builder possession के बाद amenities नहीं दे रहा? → State RERA: https://rera.gov.in\n3️⃣ Society funds का misuse? → State Registrar of Societies\n4️⃣ Municipal services (road, water, light) → Nagar Nigam / Municipal Corporation\n5️⃣ Resolve नहीं हुआ? → https://pgportal.gov.in या state CM Helpline\n\nसभी complaints का written record रखें।`,
  },

  // ── Passport / Visa ───────────────────────────────────────
  {
    keys: [
      'passport','visa','tatkal','police verification','psp','mea','foreign travel',
      'passport delay','passport rejected','address on passport','minor passport',
      'renewal','re-issue','ecr','emigration','passport office','seva kendra',
    ],
    source: 'Ministry of External Affairs · Passport Seva',
    en: `🛂 Passport problem:\n\n1️⃣ Track application → https://passportindia.gov.in\n2️⃣ Call PSP: 1800-258-1800 (free)\n3️⃣ Grievance at → https://passportindia.gov.in → Grievances\n4️⃣ Police verification delay? Contact local SP Office\n\n🆘 Urgent passport (medical/death emergency): call 1800-258-1800 for out-of-turn appointment.`,
    hi: `🛂 Passport की समस्या:\n\n1️⃣ Application track करें → https://passportindia.gov.in\n2️⃣ PSP: 1800-258-1800 call करें (free)\n3️⃣ Grievance → https://passportindia.gov.in → Grievances\n4️⃣ Police verification delay? Local SP Office से contact करें\n\n🆘 Urgent passport (medical/death emergency): out-of-turn appointment के लिए 1800-258-1800 call करें।`,
  },

  // ── Telecom / Mobile / Internet ───────────────────────────
  {
    keys: [
      'mobile','internet','network','sim','jio','airtel','bsnl','vi','vodafone',
      'idea','recharge','call drop','slow internet','broadband','wifi','trai',
      'signal','no network','port','mnp','number portability','spam call','fraud call',
      'tower','data','4g','5g','bill','telecom','operator problem',
    ],
    source: 'TRAI · Ministry of Telecom · DOT',
    en: `📱 Telecom / mobile problem:\n\n1️⃣ First: complain to your operator (Jio/Airtel/Vi/BSNL)\n2️⃣ Unresolved in 10 days? → TRAI: https://consumerportal.trai.gov.in\n3️⃣ Fraud/spam calls: https://sancharsaathi.gov.in | Helpline: 1800-110-420\n4️⃣ Lost phone? Block IMEI → https://sancharsaathi.gov.in → CEIR\n\nIs it a network issue, billing problem, or fraud call?`,
    hi: `📱 Telecom / mobile की समस्या:\n\n1️⃣ पहले: operator (Jio/Airtel/Vi/BSNL) को complaint करें\n2️⃣ 10 दिन में हल न हो? → TRAI: https://consumerportal.trai.gov.in\n3️⃣ Fraud/spam calls: https://sancharsaathi.gov.in | 1800-110-420\n4️⃣ Phone खोया? IMEI block → https://sancharsaathi.gov.in → CEIR\n\nNetwork, billing, या fraud call — कौन सी समस्या?`,
  },

  // ── Education ─────────────────────────────────────────────
  {
    keys: [
      'school','college','university','cbse','result','marksheet','certificate',
      'scholarship','admission','fee','hostel','teacher','professor','exam',
      'board','neet','jee','upsc','ssc','exam scam','degree','ugc','aicte',
      'vidyalaya','shiksha','padhai','education','student','school fee',
    ],
    source: 'Ministry of Education · UGC · AICTE · CBSE',
    en: `🎓 Education grievance:\n\n1️⃣ CBSE issues → https://cbse.gov.in | Helpline: 1800-11-8002\n2️⃣ University / college → UGC SAMARTH: https://ugc.gov.in\n3️⃣ Technical college (engineering) → https://grievance.aicte-india.org\n4️⃣ PM Scholarship issues → https://scholarships.gov.in | Helpline: 0120-6619540\n\nIs this about exam results, fee, admission, or scholarship?`,
    hi: `🎓 Education की शिकायत:\n\n1️⃣ CBSE → https://cbse.gov.in | Helpline: 1800-11-8002\n2️⃣ University / college → UGC SAMARTH: https://ugc.gov.in\n3️⃣ Technical college → https://grievance.aicte-india.org\n4️⃣ PM Scholarship → https://scholarships.gov.in | 0120-6619540\n\nExam result, fee, admission, या scholarship — कौन सी समस्या?`,
  },

  // ── PAN / Income Tax / EPF ────────────────────────────────
  {
    keys: [
      'pan','pan card','income tax','itr','return','refund','tax','gst',
      'pension','epfo','pf','provident','gratuity','nps','retirement',
      'cpgrams','certificate','birth','death','caste','domicile','income',
      'land record','property','voter id','election','eci','driving licence','rc',
    ],
    source: 'Income Tax Dept · EPFO · Election Commission',
    en: `🏛️ Government service problem:\n\n1️⃣ PAN / Income Tax → https://incometax.gov.in | Helpline: 1800-103-0025\n2️⃣ PF / Pension → https://epfindia.gov.in | Helpline: 1800-118-005\n3️⃣ Any central govt service → CPGRAMS: https://pgportal.gov.in\n4️⃣ Voter ID issues → https://voters.eci.gov.in\n5️⃣ Driving Licence / RC → https://parivahan.gov.in\n\nWhich specific document or service is the issue?`,
    hi: `🏛️ Government service की समस्या:\n\n1️⃣ PAN / Income Tax → https://incometax.gov.in | 1800-103-0025\n2️⃣ PF / Pension → https://epfindia.gov.in | 1800-118-005\n3️⃣ कोई भी central govt service → CPGRAMS: https://pgportal.gov.in\n4️⃣ Voter ID → https://voters.eci.gov.in\n5️⃣ Driving Licence / RC → https://parivahan.gov.in\n\nकौन सा specific document या service problem है?`,
  },

  // ── Transport / Railway / Bus ─────────────────────────────
  {
    keys: [
      'train','railway','irctc','ticket','platform','station','rail','express',
      'local train','metro','bus','ksrtc','msrtc','gsrtc','state bus','depot',
      'auto','autorickshaw','taxi','cab','ola','uber','rickshaw','fare',
      'overcharging','refused','transport','bus nahi aaya','train late',
    ],
    source: 'Ministry of Railways · Rail Madad · IRCTC',
    en: `🚂 Transport / railway problem:\n\n1️⃣ Rail Madad (train issue, 24×7): Call 139 → https://railmadad.indianrailways.gov.in\n2️⃣ IRCTC ticket issue → https://irctc.co.in/nget/help-and-support\n3️⃣ Metro issue → contact your city's metro authority\n4️⃣ State bus (MSRTC/KSRTC): call your state transport helpline\n5️⃣ Auto/taxi overcharging → file complaint with Transport Commissioner\n\nIs this about booking, delay, complaint on staff, or refund?`,
    hi: `🚂 Transport / railway की समस्या:\n\n1️⃣ Rail Madad (train problem, 24×7): 139 call करें → https://railmadad.indianrailways.gov.in\n2️⃣ IRCTC ticket issue → https://irctc.co.in/nget/help-and-support\n3️⃣ Metro issue → अपने शहर की metro authority से contact करें\n4️⃣ State bus (MSRTC/KSRTC) → state transport helpline call करें\n5️⃣ Auto/taxi overcharging → Transport Commissioner को complaint\n\nBooking, delay, staff complaint, या refund — कौन सी समस्या?`,
  },

  // ── Environment / Pollution ───────────────────────────────
  {
    keys: [
      'pollution','pradushan','smoke','factory','chimney','noise','dust',
      'air quality','aqi','water pollution','river','nala','sewage dump',
      'burning','stubble','parali','plastic','tree cut','jungle','forest',
      'illegal construction','encroachment','cpcb','pcb','green tribunal',
    ],
    source: 'Ministry of Environment · CPCB · NGT',
    en: `🌿 Environment / pollution complaint:\n\n1️⃣ CPCB complaint → https://cpcb.nic.in | Call: 1800-200-7086\n2️⃣ State PCB → search "[state] pollution control board complaint"\n3️⃣ Serious industrial violation? → National Green Tribunal: https://ngtnational.gov.in\n4️⃣ Air quality emergency: Download CPCB app "Sameer"\n\nWhat type — air, water, noise, or industrial dumping?`,
    hi: `🌿 Environment / pollution की शिकायत:\n\n1️⃣ CPCB → https://cpcb.nic.in | Call: 1800-200-7086\n2️⃣ State PCB → "[state] pollution control board complaint" search\n3️⃣ Serious industrial violation? → NGT: https://ngtnational.gov.in\n4️⃣ Air quality emergency: CPCB app "Sameer" download करें\n\nPollution का type क्या है — air, water, noise, या industrial?`,
  },

  // ── Women Safety ──────────────────────────────────────────
  {
    keys: [
      'women','mahila','lady','girl','harassment','eve teasing','acid attack',
      'domestic violence','dowry','rape','molest','safety','nirbhaya',
      'sexual','abuse','female','ladki','aurat','beti','women helpline',
    ],
    source: 'Ministry of Women & Child Dev · NCW',
    en: `🆘 Women's safety — immediate help:\n\n🔴 Women Helpline: 1091 (24×7)\n🔴 Domestic Violence: 181\n🔴 Emergency Police: 112\n🔴 NCW complaint → https://ncwapps.nic.in\n\nFor free legal aid: NALSA helpline 15100\nFor mental support: iCall 9152987821\n\nYou are safe to share details here — or call 1091 right now.`,
    hi: `🆘 महिला सुरक्षा — तुरंत मदद:\n\n🔴 Women Helpline: 1091 (24×7)\n🔴 Domestic Violence: 181\n🔴 Emergency Police: 112\n🔴 NCW complaint → https://ncwapps.nic.in\n\nFree legal aid: NALSA 15100\nMental support: iCall 9152987821\n\nआप यहाँ details share कर सकती हैं — या अभी 1091 call करें।`,
  },

  // ── Child Safety ──────────────────────────────────────────
  {
    keys: [
      'child','bachha','bacchi','minor','bal','children','childline','1098',
      'child labour','abuse child','missing child','kidnap','trafficking',
      'school fee','mid day meal','midday','anganwadi',
    ],
    source: 'Ministry of Women & Child Dev · CHILDLINE',
    en: `👧 Child safety / welfare:\n\n📞 CHILDLINE: 1098 (24×7, free — children in distress)\n📞 Missing child: trackchild.gov.in | Call: 1094\n📞 Child labour: 1800-180-4127\n\nFor any child in immediate danger — call 1098 immediately.`,
    hi: `👧 Child safety / welfare:\n\n📞 CHILDLINE: 1098 (24×7, free — जरूरतमंद बच्चों के लिए)\n📞 Missing child: trackchild.gov.in | Call: 1094\n📞 Child labour: 1800-180-4127\n\nकिसी बच्चे को खतरा हो — तुरंत 1098 call करें।`,
  },

  // ── Senior Citizen / Elderly ──────────────────────────────
  {
    keys: [
      'senior citizen','old age','bujurg','elderly','pension nahi','retirement',
      'elder abuse','old people','60 year','75 year','vridh','vridha pension',
      'senior helpline','aged','aged person problem',
    ],
    source: 'Ministry of Social Justice · Senior Care',
    en: `🧓 Senior citizen help:\n\n1️⃣ Senior citizen helpline: 14567 (free, 24×7)\n2️⃣ Elder abuse? → 14567 or nearest police station\n3️⃣ Old age pension not received? → State Social Welfare Department\n4️⃣ EPFO pension → https://epfindia.gov.in | Call: 1800-118-005\n\nWhat's the specific issue — pension, health, abuse, or legal?`,
    hi: `🧓 Senior citizen की मदद:\n\n1️⃣ Senior citizen helpline: 14567 (free, 24×7)\n2️⃣ Elder abuse? → 14567 या नजदीकी police station\n3️⃣ Old age pension नहीं मिली? → State Social Welfare Department\n4️⃣ EPFO pension → https://epfindia.gov.in | 1800-118-005\n\nSamस्या क्या है — pension, health, abuse, या legal?`,
  },

  // ── Petroleum / LPG / Petrol / Gas ───────────────────────
  {
    keys: [
      'lpg','gas','cylinder','petrol','diesel','fuel','rasoi gas','domestic gas',
      'gas leak','gas nahi','booking','pahal','subsidy','pump','filling station',
      'cng','png','piped gas','igl','mgl','gail','gas cylinder','gas subsidy',
      'petroleum','adulteration','milawat','gas connection','petrol pump fraud',
      'cylinder nahi','gas bill','overcharge petrol',
    ],
    source: 'Ministry of Petroleum & Natural Gas · PPAC',
    en: `⛽ Petroleum / Gas problem:\n\n🔴 GAS LEAK? → Call Fire Brigade 101 first, then 1906\n\n1️⃣ LPG (cylinder) helpline: 1906 (free, 24×7)\n2️⃣ Check cylinder delivery/booking → https://mylpg.in\n3️⃣ Petrol pump fraud: 1800-233-3555 (IOCL) or → https://pgms.petroleum.nic.in\n4️⃣ CNG/PNG complaint: IGL 1800-102-0708 | MGL 1800-266-9090 | PNGRB → https://pngrb.gov.in\n5️⃣ LPG subsidy not credited (PAHAL)? Check and correct at mylpg.in\n\nIs it a delivery issue, gas leak, pump fraud, or subsidy problem?`,
    hi: `⛽ Petroleum / Gas की समस्या:\n\n🔴 GAS LEAK? → पहले Fire Brigade 101 call करें, फिर 1906\n\n1️⃣ LPG (cylinder) helpline: 1906 (free, 24×7)\n2️⃣ Cylinder delivery/booking check करें → https://mylpg.in\n3️⃣ Petrol pump fraud: 1800-233-3555 या → https://pgms.petroleum.nic.in\n4️⃣ CNG/PNG complaint: IGL 1800-102-0708 | MGL 1800-266-9090 | PNGRB → https://pngrb.gov.in\n5️⃣ LPG subsidy नहीं मिली (PAHAL)? mylpg.in पर check और correct करें\n\nसमस्या क्या है — delivery, gas leak, pump fraud, या subsidy?`,
  },

  // ── About Samadhan ────────────────────────────────────────
  {
    keys: [
      'samadhan','website','this site','yeh kya hai','kya hai yeh','kaisa kaam',
      'how does this work','kaise use kare','how to use','about','help me use',
      'what is samadhan','samadhan kya hai',
    ],
    source: 'Samadhan — Official Civic Help Portal',
    en: `ℹ️ About Samadhan:\n\nSamadhan is a FREE, unofficial directory of official government complaint portals and helplines — covering 28 problem categories.\n\nHow to use:\n1️⃣ Search your problem in the search bar (Hindi or English)\n2️⃣ Or click a category (Electricity, Police, etc.)\n3️⃣ Expand any problem card to see step-by-step helplines\n\n📌 All information is sourced from official government portals.\n💰 Samadhan is 100% free — no login, no charges.`,
    hi: `ℹ️ Samadhan के बारे में:\n\nSamadhan एक FREE directory है — official government complaint portals और helplines का — 28 categories में।\n\nKaise use करें:\n1️⃣ Search bar में problem type करें (हिंदी या English)\n2️⃣ Category click करें (बिजली, पुलिस आदि)\n3️⃣ कोई भी problem card expand करें — step-by-step helplines देखें\n\n📌 सभी information official government portals से है।\n💰 Samadhan 100% free — कोई login नहीं, कोई charge नहीं।`,
  },
]

export const DEFAULT_REPLY = {
  en: `I'm here to help! I couldn't find an exact match, but try these:\n\n• Search on the main page — type your problem in Hindi or English\n• Browse by category (Electricity, Water, Police, Housing…)\n• General grievance portal: https://pgportal.gov.in\n• General helpline: 1800-11-4000 (free)\n\nCould you describe your problem in a little more detail? 🙏`,
  hi: `मैं मदद के लिए यहाँ हूं! Exact match नहीं मिला, लेकिन यह try करें:\n\n• Main page पर search करें — हिंदी या अंग्रेजी में problem लिखें\n• Category से browse करें (बिजली, पानी, पुलिस, मकान…)\n• General grievance: https://pgportal.gov.in\n• General helpline: 1800-11-4000 (free)\n\nथोड़ा और detail में बता सकते हैं? 🙏`,
  source: 'Samadhan — Official Civic Help Portal',
}
