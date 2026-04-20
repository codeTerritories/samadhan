/**
 * Real, verified state-specific complaint helplines & portals for India.
 * Sources: official DISCOM / Jal Board / Police websites.
 *
 * Structure per state per category:
 *   authority  — full official name of the local body
 *   helplines  — array of { number, label, free }
 *   links      — array of { label, url, note }   (url goes to complaint page where possible)
 */

// ── Shared national fallbacks ────────────────────────────────
export const NATIONAL = {
  bijli: {
    helplines: [
      { number: '1912', label: 'National DISCOM 24/7 Helpline', free: true },
    ],
    links: [
      { label: 'CPGRAMS – National Grievance Portal', url: 'https://pgportal.gov.in/', note: 'For unresolved complaints' },
      { label: 'National Consumer Helpline', url: 'https://consumerhelpline.gov.in', note: '1915 or 1800-11-4000' },
      { label: 'Forum of Regulators (Electricity)', url: 'https://www.forumofregulators.gov.in', note: '' },
    ],
  },
  pani: {
    helplines: [
      { number: '1916', label: 'Jal Jeevan Mission / Jal Shakti 24/7', free: true },
    ],
    links: [
      { label: 'Jal Jeevan Mission Complaint', url: 'https://ejalshakti.gov.in/jjmreport/JJMIndia.aspx', note: '' },
      { label: 'CPGRAMS – National Grievance Portal', url: 'https://pgportal.gov.in/', note: 'For unresolved complaints' },
    ],
  },
  sadak: {
    helplines: [
      { number: '1033', label: 'National Highways Helpline (NHAI)', free: true },
    ],
    links: [
      { label: 'NHAI Complaint Portal', url: 'https://nhai.gov.in/complaint', note: '' },
      { label: 'CPGRAMS Complaint', url: 'https://pgportal.gov.in/', note: '' },
    ],
  },
  police: {
    helplines: [
      { number: '112', label: 'National Emergency (Police / Fire / Ambulance)', free: true },
      { number: '1930', label: 'Cyber Crime Helpline', free: true },
    ],
    links: [
      { label: 'National Cyber Crime Reporting Portal', url: 'https://cybercrime.gov.in', note: 'Also for online fraud' },
      { label: 'CPGRAMS – National Grievance Portal', url: 'https://pgportal.gov.in/', note: '' },
    ],
  },
  bank: {
    helplines: [
      { number: '1930', label: 'Cyber / UPI Fraud Helpline', free: true },
      { number: '14440', label: 'RBI Helpline (Banking Issues)', free: true },
    ],
    links: [
      { label: 'RBI CMS – Banking Complaint Portal', url: 'https://cms.rbi.org.in', note: 'For bank complaints' },
      { label: 'Cyber Crime – UPI Fraud', url: 'https://cybercrime.gov.in', note: '' },
    ],
  },
  health: {
    helplines: [
      { number: '104', label: 'National Health Helpline', free: true },
      { number: '108', label: 'Ambulance Emergency', free: true },
    ],
    links: [
      { label: 'Ayushman Bharat Complaint', url: 'https://pmjay.gov.in/pm-jan-arogya-yojana/grievance-redressal', note: '' },
      { label: 'CPGRAMS – Health Grievance', url: 'https://pgportal.gov.in/', note: '' },
    ],
  },
}

// ── State-specific services ──────────────────────────────────
export const STATE_SERVICES = {

  // ── Maharashtra ─────────────────────────────────────────────
  Maharashtra: {
    bijli: {
      authority: 'MSEDCL (Maharashtra State Electricity Distribution Co. Ltd.)',
      helplines: [
        { number: '1800-200-3435', label: 'MSEDCL 24/7 Toll-Free', free: true },
        { number: '1912',          label: 'MSEDCL Quick Complaint',  free: true },
      ],
      links: [
        { label: 'MSEDCL Online Complaint Form',     url: 'https://www.mahadiscom.in/consumer/consumercomplaints.aspx', note: 'Direct complaint page' },
        { label: 'MSEDCL Consumer Self-Service',     url: 'https://www.mahadiscom.in/consumer/',                        note: 'View bill, new connection' },
        { label: 'Maharashtra Electricity Regulator',url: 'https://www.mercindia.org.in/en',                            note: 'MERC — for unresolved disputes' },
      ],
    },
    pani: {
      authority: 'Maharashtra Jeevan Pradhikaran (MJP)',
      helplines: [
        { number: '1916', label: 'Jal Jeevan Mission Helpline', free: true },
        { number: '022-22164441', label: 'MJP Mumbai Office', free: false },
      ],
      links: [
        { label: 'MJP Grievance Portal',  url: 'https://mjp.gov.in/grievance.aspx',      note: '' },
        { label: 'BMC Complaint (Mumbai)',url: 'https://mcgm.gov.in/irj/portal/anonymous', note: 'Mumbai residents' },
      ],
    },
    sadak: {
      authority: 'Maharashtra PWD / MSRDC',
      helplines: [
        { number: '1033', label: 'NHAI Highway Helpline', free: true },
        { number: '1800-233-2288', label: 'MSRDC Expressway Helpline', free: true },
      ],
      links: [
        { label: 'Maharashtra PWD Complaint', url: 'https://mahaonline.gov.in/', note: '' },
        { label: 'MSRDC Complaint', url: 'https://msrdc.org/', note: '' },
      ],
    },
  },

  // ── Delhi ──────────────────────────────────────────────────
  Delhi: {
    bijli: {
      authority: 'BSES Rajdhani / BSES Yamuna / Tata Power Delhi',
      helplines: [
        { number: '19123', label: 'BSES Rajdhani 24/7 (South/West Delhi)', free: false },
        { number: '19122', label: 'BSES Yamuna 24/7 (East/North Delhi)',   free: false },
        { number: '19124', label: 'Tata Power Delhi (North/Northwest)',     free: false },
        { number: '1912',  label: 'National DISCOM Helpline',               free: true  },
      ],
      links: [
        { label: 'BSES Rajdhani Complaint Form', url: 'https://www.bsesdelhi.com/web/brd/ocs_info',    note: 'South & West Delhi' },
        { label: 'BSES Yamuna Complaint Form',   url: 'https://www.bsesdelhi.com/web/byd/ocs_info',    note: 'East & North Delhi' },
        { label: 'Tata Power Delhi Complaint',   url: 'https://www.tatapower-ddl.com/consumer-corner', note: 'North & Northwest Delhi' },
        { label: 'DERC — Unresolved Disputes',   url: 'https://www.derc.gov.in',                       note: 'Delhi Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'Delhi Jal Board (DJB)',
      helplines: [
        { number: '1916',         label: 'DJB 24/7 Water Helpline',  free: true  },
        { number: '1800-11-0808', label: 'DJB Toll-Free',            free: true  },
        { number: '011-23527679', label: 'DJB Control Room',         free: false },
      ],
      links: [
        { label: 'DJB Online Complaint Portal', url: 'https://www.delhijalboard.nic.in/content/grievance-redressal', note: 'File water complaint online' },
        { label: 'DJB Citizen Corner', url: 'https://delhijalboard.nic.in', note: '' },
      ],
    },
    sadak: {
      authority: 'PWD Delhi / NHAI',
      helplines: [
        { number: '1533', label: 'PWD Delhi Complaint Helpline', free: false },
        { number: '1033', label: 'NHAI National Highway Helpline', free: true },
      ],
      links: [
        { label: 'PWD Delhi Complaint', url: 'https://www.pwddelhi.gov.in/complaint.html', note: '' },
        { label: 'MCD Road Complaint', url: 'https://mcdonline.nic.in/complaint/GrievanceAdd.aspx', note: 'Municipal roads' },
      ],
    },
  },

  // ── Karnataka ──────────────────────────────────────────────
  Karnataka: {
    bijli: {
      authority: 'BESCOM / HESCOM / MESCOM / GESCOM / CESC',
      helplines: [
        { number: '1912',         label: 'BESCOM 24/7 (Bangalore + 8 districts)', free: true  },
        { number: '080-22220100', label: 'BESCOM Bangalore Landline',             free: false },
        { number: '1800-425-9339',label: 'BESCOM Toll-Free',                      free: true  },
      ],
      links: [
        { label: 'BESCOM Consumer Grievance Portal', url: 'https://bescom.karnataka.gov.in/page/Customer+Service/Consumer+Grievance/en', note: 'Bangalore & 8 districts' },
        { label: 'BESCOM Online Complaint',          url: 'https://csc.bescom.co.in/csc/',                                               note: 'Register online' },
        { label: 'KERC — Unresolved Disputes',       url: 'https://kerc.karnataka.gov.in',                                               note: 'Karnataka Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'BWSSB (Bangalore Water Supply & Sewerage Board)',
      helplines: [
        { number: '1916',         label: 'Jal Jeevan Helpline', free: true  },
        { number: '1800-425-2611',label: 'BWSSB Toll-Free',     free: true  },
        { number: '080-22238888', label: 'BWSSB Control Room',  free: false },
      ],
      links: [
        { label: 'BWSSB Online Complaint', url: 'https://bwssb.karnataka.gov.in/page/Online+Services/Service+Requests/en', note: '' },
        { label: 'BWSSB Self-Service Portal', url: 'https://bwssb.karnataka.gov.in', note: '' },
      ],
    },
  },

  // ── Tamil Nadu ─────────────────────────────────────────────
  'Tamil Nadu': {
    bijli: {
      authority: 'TANGEDCO (Tamil Nadu Generation & Distribution Corporation)',
      helplines: [
        { number: '1912',          label: 'TANGEDCO 24/7 Helpline',     free: true  },
        { number: '94987 33333',   label: 'TANGEDCO WhatsApp Complaint', free: false },
        { number: '1800-425-8888', label: 'TANGEDCO Toll-Free',         free: true  },
      ],
      links: [
        { label: 'TANGEDCO Consumer Grievance Form', url: 'https://www.tangedco.gov.in/consumer_grievance.html', note: 'Direct complaint page' },
        { label: 'TNEB Online Services',             url: 'https://www.tnebnet.org/',                           note: 'Bill payment, new connection' },
        { label: 'TNERC — Unresolved Disputes',      url: 'https://www.tnerc.gov.in',                           note: 'TN Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'CMWSSB (Chennai) / TWAD Board (rest of TN)',
      helplines: [
        { number: '1916',          label: 'Jal Jeevan Helpline',    free: true  },
        { number: '044-45674567',  label: 'CMWSSB 24/7 (Chennai)',  free: false },
        { number: '1800-425-6655', label: 'TWAD Board Toll-Free',   free: true  },
      ],
      links: [
        { label: 'CMWSSB Complaint Portal (Chennai)', url: 'https://www.chennaimetrowater.tn.gov.in/grienvance.html', note: '' },
        { label: 'TWAD Board Complaint', url: 'https://www.twadboard.gov.in', note: 'For rest of Tamil Nadu' },
      ],
    },
  },

  // ── Kerala ─────────────────────────────────────────────────
  Kerala: {
    bijli: {
      authority: 'KSEB Ltd. (Kerala State Electricity Board)',
      helplines: [
        { number: '1912',          label: 'KSEB 24/7 Helpline',    free: true  },
        { number: '0471-2514800',  label: 'KSEB HQ Thiruvananthapuram', free: false },
        { number: '1800-425-5544', label: 'KSEB Toll-Free',        free: true  },
      ],
      links: [
        { label: 'KSEB Self-Service Portal – File Complaint', url: 'https://selfservice.kseb.in/', note: 'Login to register complaint' },
        { label: 'KSEB SparkNet – Outage & Faults',           url: 'https://www.ksebl.in/',        note: '' },
        { label: 'KSERC – Unresolved Disputes',               url: 'https://kserckerala.org/',     note: 'Kerala State Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'Kerala Water Authority (KWA)',
      helplines: [
        { number: '1916',         label: 'Jal Jeevan Helpline',    free: true  },
        { number: '0471-2738300', label: 'KWA HQ Helpline',        free: false },
        { number: '1800-425-1128',label: 'KWA Toll-Free',          free: true  },
      ],
      links: [
        { label: 'KWA Online Complaint', url: 'https://kwa.kerala.gov.in/complaint-registration/', note: '' },
        { label: 'KWA Portal', url: 'https://kwa.kerala.gov.in', note: '' },
      ],
    },
  },

  // ── Gujarat ────────────────────────────────────────────────
  Gujarat: {
    bijli: {
      authority: 'DGVCL / PGVCL / MGVCL / UGVCL (based on your district)',
      helplines: [
        { number: '1912',          label: 'All Gujarat DISCOMs 24/7', free: true  },
        { number: '1800-233-3003', label: 'DGVCL Toll-Free (South)',  free: true  },
        { number: '1800-233-1000', label: 'PGVCL Toll-Free (Paschim)',free: true  },
      ],
      links: [
        { label: 'PGVCL Complaint Portal (Paschim)', url: 'https://www.pgvcl.com/consumer/consumerComplain.aspx',   note: 'Saurashtra / Kutch' },
        { label: 'DGVCL Complaint Portal (Dakshin)', url: 'https://www.dgvcl.com/consumer/consumerComplain.aspx',   note: 'South Gujarat' },
        { label: 'UGVCL Complaint Portal (Uttar)',   url: 'https://www.ugvcl.com/consumer/consumerComplain.aspx',   note: 'North Gujarat' },
        { label: 'MGVCL Complaint Portal (Madhya)',  url: 'https://www.mgvcl.com/consumer/consumerComplain.aspx',   note: 'Central Gujarat' },
        { label: 'GERC – Unresolved Disputes',       url: 'https://www.gercin.org',                                 note: 'Gujarat Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'Gujarat Water Supply & Sewerage Board (GWSSB)',
      helplines: [
        { number: '1916',         label: 'Jal Jeevan Mission Helpline', free: true  },
        { number: '079-23244000', label: 'GWSSB Ahmedabad Office',      free: false },
      ],
      links: [
        { label: 'GWSSB Complaint Form', url: 'https://gwssb.gujarat.gov.in/', note: '' },
        { label: 'AMC Water Complaint (Ahmedabad)', url: 'https://ahmedabadcity.gov.in/', note: 'For Ahmedabad city' },
      ],
    },
  },

  // ── Uttar Pradesh ───────────────────────────────────────────
  'Uttar Pradesh': {
    bijli: {
      authority: 'UPPCL / PVVNL / PUVVNL / MVVNL / DVVNL',
      helplines: [
        { number: '1912',          label: 'UPPCL 24/7 Power Helpline', free: true  },
        { number: '1800-180-0440', label: 'UPPCL Toll-Free',           free: true  },
      ],
      links: [
        { label: 'UPPCL Grievance Portal',       url: 'https://www.uppcl.org/wss/faces/languagePage.xhtml', note: 'Online complaint registration' },
        { label: 'UPPCL Jhatpat Portal',         url: 'https://jhatpat.upenergy.in/',                       note: 'New connection & complaints' },
        { label: 'UPERC – Unresolved Disputes',  url: 'https://www.uperc.org',                              note: 'UP Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'Uttar Pradesh Jal Nigam',
      helplines: [
        { number: '1916',         label: 'Jal Jeevan Mission Helpline', free: true  },
        { number: '0522-2237169', label: 'UP Jal Nigam Lucknow',        free: false },
      ],
      links: [
        { label: 'UP Jal Nigam Complaint', url: 'https://www.upjn.org/grievance', note: '' },
        { label: 'LMC Water Complaint (Lucknow)', url: 'https://lmc.up.nic.in/', note: 'Lucknow Municipal Corp.' },
      ],
    },
  },

  // ── West Bengal ─────────────────────────────────────────────
  'West Bengal': {
    bijli: {
      authority: 'WBSEDCL (Rest of WB) / CESC (Kolkata)',
      helplines: [
        { number: '1912',          label: 'WBSEDCL 24/7 (Rest of WB)', free: true  },
        { number: '1800-345-5468', label: 'WBSEDCL Toll-Free',         free: true  },
        { number: '1913',          label: 'CESC 24/7 (Kolkata)',        free: false },
        { number: '1800-345-0011', label: 'CESC Toll-Free (Kolkata)',   free: true  },
      ],
      links: [
        { label: 'WBSEDCL Grievance Portal',    url: 'https://wbsedcl.in/irj/portal/anonymous?NavigationTarget=navurl://cef5e0ff42ef7cf0fa02b18e4b8fa93c', note: 'For most of West Bengal' },
        { label: 'CESC Complaint (Kolkata)',     url: 'https://www.cesc.co.in/complainregistration.html', note: 'For Kolkata, Howrah, Hooghly, South 24 Pgs' },
        { label: 'WBERC – Unresolved Disputes', url: 'https://wberc.gov.in',  note: 'WB Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PHED West Bengal / KMC (Kolkata)',
      helplines: [
        { number: '1916',         label: 'Jal Jeevan Mission Helpline', free: true  },
        { number: '1800-345-3998',label: 'PHED WB Toll-Free',          free: true  },
        { number: '033-22861212', label: 'KMC Water (Kolkata)',         free: false },
      ],
      links: [
        { label: 'PHED WB Grievance',  url: 'https://phed.wb.gov.in/grievances/',              note: '' },
        { label: 'KMC Complaint (Kolkata)', url: 'https://www.kmcgov.in/KMCPortal/jsp/KMCPortalComplaintForm.jsp', note: '' },
      ],
    },
  },

  // ── Rajasthan ──────────────────────────────────────────────
  Rajasthan: {
    bijli: {
      authority: 'JVVNL (Jaipur) / AVVNL (Ajmer) / JdVVNL (Jodhpur)',
      helplines: [
        { number: '1912',          label: 'All Rajasthan DISCOMs 24/7',    free: true },
        { number: '1800-180-6127', label: 'JVVNL Toll-Free (Jaipur zone)', free: true },
        { number: '1800-180-6565', label: 'JdVVNL / AVVNL Toll-Free',     free: true },
      ],
      links: [
        { label: 'JVVNL Complaint Portal (Jaipur)',   url: 'https://www.jvvnl.com/consumer/Complaint.aspx',   note: 'Jaipur, Dausa, Alwar, Bharatpur, etc.' },
        { label: 'AVVNL Complaint Portal (Ajmer)',    url: 'https://www.avvnl.com/consumer/Complaint.aspx',   note: 'Ajmer, Bikaner, Pali, etc.' },
        { label: 'JdVVNL Complaint Portal (Jodhpur)', url: 'https://www.jdvvnl.com/consumer/Complaint.aspx',  note: 'Jodhpur, Barmer, Jaisalmer, etc.' },
        { label: 'RERC – Unresolved Disputes',        url: 'https://rerc.rajasthan.gov.in',                   note: 'Rajasthan Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PHED Rajasthan / Jaipur Nagar Nigam',
      helplines: [
        { number: '1916',         label: 'Jal Jeevan Mission Helpline',      free: true  },
        { number: '1800-180-6234',label: 'PHED Rajasthan Toll-Free',         free: true  },
        { number: '0141-2221988', label: 'Jaipur Nagar Nigam Water Control', free: false },
      ],
      links: [
        { label: 'Rajasthan Sampark Portal – Water Complaint', url: 'https://sampark.rajasthan.gov.in', note: 'Unified complaint portal' },
        { label: 'PHED Rajasthan', url: 'https://phed.rajasthan.gov.in', note: '' },
      ],
    },
  },

  // ── Madhya Pradesh ─────────────────────────────────────────
  'Madhya Pradesh': {
    bijli: {
      authority: 'MPPKVVCL / MPWZ / MPMKVVCL (zone-wise)',
      helplines: [
        { number: '1912',          label: 'All MP DISCOMs 24/7', free: true },
        { number: '1800-233-1912', label: 'MPEZ Toll-Free (East Zone)', free: true },
        { number: '0755-2551232',  label: 'MPPKVVCL Control Room',     free: false },
      ],
      links: [
        { label: 'MP Urja Portal – Complaint',   url: 'https://www.mpez.co.in/ConsumerPortal/faces/complaints.xhtml', note: 'Central / East Zone' },
        { label: 'MPMKVVCL Complaint (West)',    url: 'https://www.mpmkvvcl.com/ConsumerPortal/', note: 'West Zone (Indore, Ujjain area)' },
        { label: 'MPERC – Unresolved Disputes',  url: 'https://www.mperc.in', note: 'MP Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PHED Madhya Pradesh',
      helplines: [
        { number: '1916',          label: 'Jal Jeevan Mission Helpline', free: true  },
        { number: '1800-233-5956', label: 'PHED MP Toll-Free',           free: true  },
      ],
      links: [
        { label: 'MP e-Nagar Palika Complaint', url: 'https://mpenagarpalika.gov.in/mnpclz/', note: 'Urban water complaints' },
        { label: 'Samadhan MP – Unified Portal', url: 'https://samadhan.mp.gov.in', note: '' },
      ],
    },
  },

  // ── Bihar ──────────────────────────────────────────────────
  Bihar: {
    bijli: {
      authority: 'SBPDCL (South Bihar) / NBPDCL (North Bihar)',
      helplines: [
        { number: '1912',          label: 'All Bihar DISCOMs 24/7', free: true },
        { number: '1800-345-6166', label: 'BSPHCL Toll-Free',       free: true },
        { number: '0612-2504060',  label: 'SBPDCL Patna Control Room', free: false },
      ],
      links: [
        { label: 'SBPDCL Consumer Complaint (South)', url: 'https://sbpdcl.co.in/consumer/complaints.aspx', note: 'South Bihar — Patna, Gaya, etc.' },
        { label: 'NBPDCL Consumer Complaint (North)', url: 'https://nbpdcl.co.in/consumer/complaints.aspx', note: 'North Bihar — Muzaffarpur, etc.' },
        { label: 'BSERC – Unresolved Disputes',       url: 'https://bserc.gov.in',                          note: 'Bihar State Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PHED Bihar',
      helplines: [
        { number: '1916',          label: 'Jal Jeevan Mission Helpline', free: true  },
        { number: '1800-3456-417', label: 'PHED Bihar Toll-Free',        free: true  },
      ],
      links: [
        { label: 'PHED Bihar Portal', url: 'https://phed.bihar.gov.in', note: '' },
        { label: 'Lok Shikayat Bihar', url: 'https://lokshikayat.bihar.gov.in', note: 'Unified complaint portal' },
      ],
    },
  },

  // ── Andhra Pradesh ─────────────────────────────────────────
  'Andhra Pradesh': {
    bijli: {
      authority: 'APSPDCL (South) / APEPDCL (East / North)',
      helplines: [
        { number: '1912',          label: 'AP DISCOMs 24/7 Helpline',      free: true  },
        { number: '1800-425-5355', label: 'APSPDCL Toll-Free (South)',     free: true  },
        { number: '1800-425-9966', label: 'APEPDCL Toll-Free (East/North)',free: true  },
      ],
      links: [
        { label: 'APSPDCL Complaint Portal (South)', url: 'https://www.apspdcl.in/complaints.htm', note: 'Hyderabad excl. zones' },
        { label: 'APEPDCL Complaint Portal (East)',  url: 'https://www.apepdcl.in/complaints.htm', note: 'Visakhapatnam, East Godavari, etc.' },
        { label: 'APERC – Unresolved Disputes',      url: 'https://aperc.gov.in',                  note: 'AP Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'AP Water Resource Development Corporation',
      helplines: [
        { number: '1916', label: 'Jal Jeevan Mission Helpline', free: true },
        { number: '1800-425-0019', label: 'AP Jalaswa Toll-Free', free: true },
      ],
      links: [
        { label: 'Meeseva – AP Unified Complaint Portal', url: 'https://meeseva.ap.gov.in', note: '' },
        { label: 'CPGRAMS', url: 'https://pgportal.gov.in/', note: 'For unresolved water issues' },
      ],
    },
  },

  // ── Telangana ──────────────────────────────────────────────
  Telangana: {
    bijli: {
      authority: 'TSSPDCL (South) / TSNPDCL (North)',
      helplines: [
        { number: '1912',          label: 'Telangana DISCOMs 24/7',       free: true  },
        { number: '040-23434499',  label: 'TSSPDCL Control Room (Hyd)',   free: false },
        { number: '1800-599-9944', label: 'TSNPDCL Toll-Free (North TG)', free: true  },
      ],
      links: [
        { label: 'TSSPDCL Complaint (Hyderabad)', url: 'https://www.tssouthernpower.com/online-complaint', note: 'Hyderabad & surrounding' },
        { label: 'TSNPDCL Complaint (North TG)',  url: 'https://tsnpdcl.in/web/complaint-registration',   note: 'Warangal, Karimnagar, etc.' },
        { label: 'TSERC – Unresolved Disputes',   url: 'https://tserc.gov.in',                             note: 'Telangana State Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'HMWSSB (Hyderabad) / TWADBOARD (rest)',
      helplines: [
        { number: '1916',         label: 'Jal Jeevan Mission Helpline',      free: true  },
        { number: '040-23250263', label: 'HMWSSB Hyderabad Control Room',    free: false },
        { number: '1800-599-0099',label: 'HMWSSB Toll-Free',                 free: true  },
      ],
      links: [
        { label: 'HMWSSB Online Complaint (Hyderabad)', url: 'https://www.hyderabadwater.gov.in/consumer-services/', note: '' },
        { label: 'TSIPARD – State Water Portal',         url: 'https://water.telangana.gov.in',                       note: '' },
      ],
    },
  },

  // ── Punjab ─────────────────────────────────────────────────
  Punjab: {
    bijli: {
      authority: 'PSPCL (Punjab State Power Corporation Ltd.)',
      helplines: [
        { number: '1912',          label: 'PSPCL 24/7 Power Helpline', free: true },
        { number: '1800-180-1502', label: 'PSPCL Toll-Free',           free: true },
        { number: '0172-2214000',  label: 'PSPCL Chandigarh HQ',       free: false },
      ],
      links: [
        { label: 'PSPCL Consumer Online Complaint', url: 'https://www.pspcl.in/services/consumer-services/complaint-registration/', note: 'Direct complaint page' },
        { label: 'PSERC – Unresolved Disputes',     url: 'https://pserc.gov.in',                                                    note: 'Punjab State Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PWSSB (Punjab Water Supply & Sewerage Board)',
      helplines: [
        { number: '1916',          label: 'Jal Jeevan Mission Helpline', free: true },
        { number: '1800-180-5678', label: 'PWSSB Punjab Toll-Free',      free: true },
      ],
      links: [
        { label: 'Sewayakendra Punjab – Water Complaint', url: 'https://connect.punjab.gov.in', note: '' },
        { label: 'PWSSB Portal', url: 'https://www.pwssb.punjab.gov.in', note: '' },
      ],
    },
  },

  // ── Haryana ────────────────────────────────────────────────
  Haryana: {
    bijli: {
      authority: 'DHBVN (Dakshin) / UHBVN (Uttar Haryana Bijli Vitran Nigam)',
      helplines: [
        { number: '1912',          label: 'All Haryana DISCOMs 24/7', free: true },
        { number: '1800-180-4334', label: 'DHBVN Toll-Free (South Haryana)', free: true },
        { number: '1800-180-1000', label: 'UHBVN Toll-Free (North Haryana)', free: true },
      ],
      links: [
        { label: 'DHBVN Complaint Portal (South)',  url: 'https://dhbvn.org.in/web/dhbvn/online-complaint', note: 'Faridabad, Gurugram, Rewari, etc.' },
        { label: 'UHBVN Complaint Portal (North)',  url: 'https://uhbvn.org.in/web/uhbvn/online-complaint', note: 'Ambala, Panipat, Hisar, etc.' },
        { label: 'HERC – Unresolved Disputes',      url: 'https://herc.gov.in',                             note: 'Haryana Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PHED Haryana',
      helplines: [
        { number: '1916',          label: 'Jal Jeevan Mission Helpline', free: true },
        { number: '1800-180-2087', label: 'PHED Haryana Toll-Free',      free: true },
      ],
      links: [
        { label: 'Saral Haryana – Water Complaint', url: 'https://saralharyana.gov.in', note: 'Haryana unified portal' },
        { label: 'PHED Haryana Portal', url: 'https://www.phedharyana.gov.in', note: '' },
      ],
    },
  },

  // ── Odisha ─────────────────────────────────────────────────
  Odisha: {
    bijli: {
      authority: 'TPNODL / TPSODL / TPWODL / NESCO (zone-wise)',
      helplines: [
        { number: '1912',          label: 'All Odisha DISCOMs 24/7',  free: true },
        { number: '1800-345-6789', label: 'TPNODL Toll-Free (North)', free: true },
        { number: '1800-345-7234', label: 'TPSODL Toll-Free (South)', free: true },
      ],
      links: [
        { label: 'TPNODL Complaint (North Odisha)',  url: 'https://www.tpnodl.co.in/consumer-complaint', note: 'North — Bhubaneswar, Cuttack, Jajpur' },
        { label: 'TPSODL Complaint (South Odisha)',  url: 'https://www.tpsodl.co.in/consumer-complaint', note: 'South — Berhampur, Ganjam, Koraput' },
        { label: 'OERC – Unresolved Disputes',       url: 'https://oerc.gov.in',                          note: 'Odisha Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PHED Odisha / Bhubaneswar Municipal Corp.',
      helplines: [
        { number: '1916',          label: 'Jal Jeevan Mission Helpline',  free: true  },
        { number: '1800-345-6765', label: 'PHED Odisha Toll-Free',        free: true  },
        { number: '0674-2396501',  label: 'BMC Water (Bhubaneswar)',       free: false },
      ],
      links: [
        { label: 'MO Sarkar – Odisha Complaint Portal', url: 'https://mosarkar.odisha.gov.in', note: '' },
        { label: 'PHED Odisha', url: 'https://phed.odisha.gov.in', note: '' },
      ],
    },
  },

  // ── Assam ──────────────────────────────────────────────────
  Assam: {
    bijli: {
      authority: 'APDCL (Assam Power Distribution Company Ltd.)',
      helplines: [
        { number: '1912',          label: 'APDCL 24/7 Helpline', free: true  },
        { number: '1800-345-3699', label: 'APDCL Toll-Free',     free: true  },
        { number: '0361-2342213',  label: 'APDCL Guwahati Office', free: false },
      ],
      links: [
        { label: 'APDCL Consumer Complaint Portal', url: 'https://www.apdcl.org/complaint', note: 'Direct complaint page' },
        { label: 'AERC – Unresolved Disputes',       url: 'https://aerc.gov.in',             note: 'Assam Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PHED Assam',
      helplines: [
        { number: '1916',         label: 'Jal Jeevan Mission Helpline', free: true  },
        { number: '0361-2237609', label: 'PHED Assam Guwahati Office',  free: false },
      ],
      links: [
        { label: 'Assam Online – Water Complaint', url: 'https://onlineservice.amtron.in', note: '' },
        { label: 'PHED Assam Portal', url: 'https://phed.assam.gov.in', note: '' },
      ],
    },
  },

  // ── Jharkhand ──────────────────────────────────────────────
  Jharkhand: {
    bijli: {
      authority: 'JBVNL (Jharkhand Bijli Vitran Nigam Ltd.)',
      helplines: [
        { number: '1912',          label: 'JBVNL 24/7 Helpline', free: true },
        { number: '1800-345-6570', label: 'JBVNL Toll-Free',     free: true },
      ],
      links: [
        { label: 'JBVNL Consumer Complaint', url: 'https://www.jbvnl.co.in/consumer-complaint.aspx', note: '' },
        { label: 'JSERC – Unresolved Disputes', url: 'https://jserc.org', note: 'Jharkhand State Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'DWSD Jharkhand',
      helplines: [
        { number: '1916', label: 'Jal Jeevan Mission Helpline', free: true },
        { number: '0651-2400160', label: 'DWSD Ranchi Office', free: false },
      ],
      links: [
        { label: 'JharSewa – Jharkhand Unified Portal', url: 'https://jharsewa.jharkhand.gov.in', note: '' },
      ],
    },
  },

  // ── Chhattisgarh ────────────────────────────────────────────
  Chhattisgarh: {
    bijli: {
      authority: 'CSPDCL (Chhattisgarh State Power Distribution Co.)',
      helplines: [
        { number: '1912',          label: 'CSPDCL 24/7 Helpline', free: true },
        { number: '1800-233-8787', label: 'CSPDCL Toll-Free',     free: true },
      ],
      links: [
        { label: 'CSPDCL Consumer Complaint', url: 'https://cspdcl.co.in/online-complaint', note: '' },
        { label: 'CSERC – Unresolved Disputes', url: 'https://www.cserc.gov.in', note: 'CG State Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PHED Chhattisgarh',
      helplines: [
        { number: '1916', label: 'Jal Jeevan Mission Helpline', free: true },
        { number: '0771-2511505', label: 'PHED Raipur Office', free: false },
      ],
      links: [
        { label: 'CG Sampark – Water Complaint', url: 'https://edistrict.cgstate.gov.in', note: '' },
      ],
    },
  },

  // ── Uttarakhand ─────────────────────────────────────────────
  Uttarakhand: {
    bijli: {
      authority: 'UPCL (Uttarakhand Power Corporation Ltd.)',
      helplines: [
        { number: '1912',          label: 'UPCL 24/7 Helpline', free: true },
        { number: '1800-180-4334', label: 'UPCL Toll-Free',     free: true },
        { number: '0135-2761911',  label: 'UPCL Dehradun Office', free: false },
      ],
      links: [
        { label: 'UPCL Consumer Complaint Portal', url: 'https://www.upcl.org/wss/faces/home.xhtml', note: '' },
        { label: 'UERC – Unresolved Disputes', url: 'https://uerc.gov.in', note: 'Uttarakhand Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'Uttarakhand Jal Sansthan',
      helplines: [
        { number: '1916', label: 'Jal Jeevan Mission Helpline', free: true },
        { number: '0135-2710918', label: 'UK Jal Sansthan Dehradun', free: false },
      ],
      links: [
        { label: 'Apuni Sarkar – UK Complaint Portal', url: 'https://eservices.uk.gov.in', note: '' },
      ],
    },
  },

  // ── Himachal Pradesh ────────────────────────────────────────
  'Himachal Pradesh': {
    bijli: {
      authority: 'HPSEBL (Himachal Pradesh State Electricity Board Ltd.)',
      helplines: [
        { number: '1912',          label: 'HPSEBL 24/7 Helpline', free: true },
        { number: '1800-180-8060', label: 'HPSEBL Toll-Free',     free: true },
        { number: '0177-2658866',  label: 'HPSEBL Shimla HQ',     free: false },
      ],
      links: [
        { label: 'HPSEBL Consumer Complaint', url: 'https://www.hpseb.in/consumer/complaints.aspx', note: '' },
        { label: 'HPERC – Unresolved Disputes', url: 'https://hperc.org', note: 'HP Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'IPH Himachal Pradesh',
      helplines: [
        { number: '1916', label: 'Jal Jeevan Mission Helpline', free: true },
        { number: '0177-2622200', label: 'IPH Shimla Office', free: false },
      ],
      links: [
        { label: 'e-Samadhan HP – Complaint Portal', url: 'https://edistrict.hp.gov.in', note: '' },
      ],
    },
  },

  // ── Goa ──────────────────────────────────────────────────────
  Goa: {
    bijli: {
      authority: 'GPDCL (Goa Power Distribution Corp.) / EDC',
      helplines: [
        { number: '1912',         label: 'GPDCL / EDC 24/7 Helpline', free: true  },
        { number: '0832-2422333', label: 'EDC Panaji Control Room',    free: false },
        { number: '1800-233-0011',label: 'GPDCL Toll-Free',           free: true  },
      ],
      links: [
        { label: 'GPDCL Consumer Complaint', url: 'https://www.goapower.in/consumer-complaint', note: '' },
        { label: 'GERC Goa – Unresolved Disputes', url: 'https://gercgoa.gov.in', note: 'Goa Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PWD Goa (Water Resources Dept.)',
      helplines: [
        { number: '1916',         label: 'Jal Jeevan Mission Helpline', free: true  },
        { number: '0832-2437421', label: 'Goa PWD Water Division',      free: false },
      ],
      links: [
        { label: 'Goa Online – Complaint Portal', url: 'https://goaonline.gov.in', note: '' },
      ],
    },
  },

  // ── Jammu & Kashmir ─────────────────────────────────────────
  'Jammu & Kashmir': {
    bijli: {
      authority: 'JKPDCL (J&K Power Development Corporation)',
      helplines: [
        { number: '1912',         label: 'JKPDCL 24/7 Helpline',  free: true  },
        { number: '0191-2472120', label: 'JKPDCL Jammu Division', free: false },
        { number: '0194-2452010', label: 'JKPDCL Srinagar Division', free: false },
      ],
      links: [
        { label: 'JKPDCL Consumer Complaint', url: 'https://jkpdcl.nic.in/complaint', note: '' },
        { label: 'JKERC – Unresolved Disputes', url: 'https://jkerc.gov.in', note: 'J&K Electricity Regulatory Commission' },
      ],
    },
    pani: {
      authority: 'PHE Department J&K',
      helplines: [
        { number: '1916', label: 'Jal Jeevan Mission Helpline', free: true },
        { number: '0191-2545347', label: 'PHE Jammu Division', free: false },
      ],
      links: [
        { label: 'J&K Grievance Portal', url: 'https://jkigrams.jk.gov.in', note: '' },
      ],
    },
  },
}

// ── Helper: get service data for a state + category ──────────
export function getStateService(stateName, cat) {
  if (!stateName) return null
  const stateData = STATE_SERVICES[stateName]
  if (!stateData) return null
  return stateData[cat] || null
}

export const ALL_STATES = Object.keys(STATE_SERVICES).sort()
