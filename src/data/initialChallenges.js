export const initialChallenges = [
  {
    id: "UB-2026-00482",
    title: "Urban Waterlogging & Drainage Inundation During Monsoon in Harmu Basin",
    description: "Every monsoon season, the low-lying wards around the Harmu River and Ratu Road experience severe storm-water inundation of 3 to 4 feet. Silt accumulation, unmapped drainage bottlenecks, and erratic culvert outfalls disrupt 12,000+ residents, cause recurrent vector-borne diseases, and trap schoolchildren and ambulances.",
    category: "Water Management",
    district: "Ranchi",
    location: "Harmu Housing Colony, Ward 26 & Ratu Road Overbridge",
    reportedBy: "Rahul Sharma (Ward Citizen)",
    reportedDate: "2026-07-18",
    priority: "High",
    status: "In Progress",
    progress: 68,
    affectedCount: "12,000+ Residents",
    assignedUni: "Birsa Institute of Technology (BIT Sindri)",
    matchScore: 94,
    duplicateScore: 8,
    impactScore: 91,
    aiRecommendation: "Immediate deployment of smart ultrasonic water-level IoT sensors paired with hydrodynamic culvert GIS mapping to route emergency stormwater retention.",
    suggestedDepts: ["Civil & Environmental Engineering", "Computer Science & IoT", "Urban Hydrology"],
    team: {
      faculty: "Dr. Ananya Singh (Professor, Water Resources & Hydrology)",
      coFaculty: "Dr. Rakesh Kumar (Associate Prof, Civil Structures)",
      students: [
        { name: "Aarav Gupta", role: "IoT Sensor Firmware & LoRaWAN Node" },
        { name: "Priya Murmu", role: "GIS Drainage Topography & Spatial Analysis" },
        { name: "Rohit Verma", role: "Embedded Microcontroller & Solar Battery Pack" },
        { name: "Neha Soren", role: "Citizen Early-Warning Web Dashboard" }
      ]
    },
    industryPartners: [
      {
        name: "Tata Steel Foundation (CSR)",
        type: "CSR & Infrastructure Grant",
        support: "₹4.5 Lakh Grant + Field Testing Equipment",
        status: "Active Sponsor"
      },
      {
        name: "Ranchi Municipal Corporation (Urban Local Body)",
        type: "Local Civic Partner",
        support: "Real-time access to drainage network sensors & civil permits",
        status: "Civic Co-deployer"
      }
    ],
    timeline: [
      { name: "Problem Reported", date: "Jul 18, 2026", status: "completed" },
      { name: "AI Validated", date: "Jul 18, 2026", status: "completed" },
      { name: "University Matched", date: "Jul 21, 2026", status: "completed" },
      { name: "Team Formed", date: "Jul 25, 2026", status: "completed" },
      { name: "Research & Simulation", date: "Aug 10, 2026", status: "completed" },
      { name: "Hardware Prototype", date: "Aug 29, 2026", status: "completed" },
      { name: "Field Test in Ward 26", date: "Sep 05, 2026", status: "current" },
      { name: "Pilot Deployment", date: "Target: Oct 2026", status: "upcoming" },
      { name: "City-Wide Deployed", date: "Target: Nov 2026", status: "upcoming" }
    ],
    updates: [
      { date: "Sep 08, 2026", text: "5 ultrasonic water level telemetry poles installed along Harmu culvert checkpoints. Live data streaming at 98.4% uptime." },
      { date: "Aug 29, 2026", text: "Hardware prototype v2 validated in laboratory flume tanks at BIT Sindri civil labs." },
      { date: "Jul 25, 2026", text: "Student team assembled under Dr. Ananya Singh with ₹4.5L equipment sponsorship from Tata Steel Foundation." }
    ],
    evidenceImages: [
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "UB-2026-00391",
    title: "Low-Cost Solar Micro-Cold Storage for Tribal Vegetable Farmers",
    description: "Tribal farmers in Dumka and Santhal Pargana face up to 35% post-harvest distress spoilage of organic tomatoes, chillies, and leafy produce due to lack of grid electricity and high daytime ambient temperatures. Middlemen exploit this urgency, forcing distress sales at 80% below mandi prices.",
    category: "Agriculture",
    district: "Dumka",
    location: "Shikaripara Block, Dumka Rural Cluster",
    reportedBy: "Sunil Soren (Gram Pradhan)",
    reportedDate: "2026-06-12",
    priority: "Critical",
    status: "Prototype",
    progress: 78,
    affectedCount: "4,500+ Smallholder Farmers",
    assignedUni: "Birsa Agricultural University & BIT Mesra",
    matchScore: 96,
    duplicateScore: 4,
    impactScore: 95,
    aiRecommendation: "Decentralized 2MT phase-change material (PCM) evaporative cool chamber powered by bifacial solar PV and mobile humidity monitoring.",
    suggestedDepts: ["Renewable Energy Engineering", "Agri-Biotechnology", "Mechanical Thermal Labs"],
    team: {
      faculty: "Dr. Bipin Mahato (Dept of Renewable Energy, BIT Mesra)",
      coFaculty: "Prof. Sunita Kerketta (Post-Harvest Technology)",
      students: [
        { name: "Vikram Hansda", role: "Thermal Insulation & PCM Integration" },
        { name: "Kavita Kumari", role: "Solar MPPT Controller & Battery Health" },
        { name: "Deepak Sahu", role: "Low-Cost Mobile Farmer App for Temp Telemetry" },
        { name: "Anil Murmu", role: "Field Farmer Cooperative Liaison" }
      ]
    },
    industryPartners: [
      {
        name: "Adani Solar Jharkhand CSR",
        type: "Clean Energy Partner",
        support: "8kW Solar Bifacial Modules & Battery Inverter Kits",
        status: "Active Sponsor"
      }
    ],
    timeline: [
      { name: "Problem Reported", date: "Jun 12, 2026", status: "completed" },
      { name: "AI Validated", date: "Jun 13, 2026", status: "completed" },
      { name: "University Matched", date: "Jun 18, 2026", status: "completed" },
      { name: "Team Formed", date: "Jun 24, 2026", status: "completed" },
      { name: "Research & Simulation", date: "Jul 15, 2026", status: "completed" },
      { name: "Hardware Prototype", date: "Aug 20, 2026", status: "completed" },
      { name: "Field Test in Ward 26", date: "Sep 01, 2026", status: "current" },
      { name: "Pilot Deployment", date: "Target: Oct 2026", status: "upcoming" },
      { name: "City-Wide Deployed", date: "Target: Dec 2026", status: "upcoming" }
    ],
    updates: [
      { date: "Sep 02, 2026", text: "Micro-chamber temperature maintained stably at 7.5°C under 41°C peak sunlight using phase change wax blocks." }
    ],
    evidenceImages: [
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "UB-2026-00512",
    title: "Accessible Low-Floor Retractable Ramp & Transit Assist for E-Rickshaws",
    description: "Wheelchair users, senior citizens, and visually impaired individuals in Jamshedpur cannot board high-step public electric rickshaws and mini-buses. Station stops lack tactile curbs, making daily commute to hospitals and institutions a severe safety hazard.",
    category: "Accessibility",
    district: "Jamshedpur",
    location: "Sakchi Bus Stand, Bistupur Market Junction",
    reportedBy: "Soma Mukherjee (Disability Rights Advocate)",
    reportedDate: "2026-08-02",
    priority: "High",
    status: "University Matched",
    progress: 42,
    affectedCount: "8,500+ Commuters",
    assignedUni: "National Institute of Technology (NIT Jamshedpur)",
    matchScore: 92,
    duplicateScore: 6,
    impactScore: 88,
    aiRecommendation: "Modular lightweight carbon-steel fold-out wheelchair ramp with electric pneumatic clamp retrofittable onto standard 4-seater and 6-seater E-Rickshaws.",
    suggestedDepts: ["Mechanical & Automotive Engineering", "Ergonomics Design", "Assistive Robotics"],
    team: {
      faculty: "Dr. K. S. Reddy (Automotive Structures, NIT Jamshedpur)",
      coFaculty: "Prof. Shalini Roy (Universal Design)",
      students: [
        { name: "Manish Tirkey", role: "CAD Chassis Stress Simulation" },
        { name: "Ritika Sen", role: "Foot-Pedal Mechanical Linkage & Lock" },
        { name: "Sameer Alam", role: "Driver Ergonomics & Field Feedback" },
        { name: "Tanmay Roy", role: "Cost Optimization for Local Fabrication" }
      ]
    },
    industryPartners: [
      {
        name: "Tata Motors CSR & Vendor Alliance",
        type: "Automotive Manufacturing Partner",
        support: "Prototype CNC tooling & 5 donor test E-Rickshaw chassis",
        status: "Active Sponsor"
      }
    ],
    timeline: [
      { name: "Problem Reported", date: "Aug 02, 2026", status: "completed" },
      { name: "AI Validated", date: "Aug 03, 2026", status: "completed" },
      { name: "University Matched", date: "Aug 10, 2026", status: "completed" },
      { name: "Team Formed", date: "Aug 22, 2026", status: "completed" },
      { name: "Research & Simulation", date: "Sep 05, 2026", status: "current" },
      { name: "Hardware Prototype", date: "Target: Oct 2026", status: "upcoming" },
      { name: "Field Test in Ward 26", date: "Target: Nov 2026", status: "upcoming" },
      { name: "Pilot Deployment", date: "Target: Dec 2026", status: "upcoming" },
      { name: "City-Wide Deployed", date: "Target: Jan 2027", status: "upcoming" }
    ],
    updates: [
      { date: "Sep 07, 2026", text: "FEA stress testing of 180kg wheelchair payload passed with safety factor 2.4." }
    ],
    evidenceImages: [
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "UB-2026-00620",
    title: "Bio-Adsorbent Fluoride & Heavy Metal Filtration for Mine-Adjacent Wells",
    description: "Groundwater wells in 14 villages surrounding Dhanbad coalfields show dissolved fluoride levels of 3.8 mg/L (WHO permissible limit is 1.5 mg/L) and suspended coal-tar sediments, causing endemic dental fluorosis and joint calcification among children.",
    category: "Healthcare",
    district: "Dhanbad",
    location: "Jharia & Katras Coal Belt Villages",
    reportedBy: "Dr. Manoj Paswan (Rural Health Centre)",
    reportedDate: "2026-06-28",
    priority: "Critical",
    status: "Pilot",
    progress: 89,
    affectedCount: "28,000+ Villagers",
    assignedUni: "IIT (ISM) Dhanbad",
    matchScore: 98,
    duplicateScore: 3,
    impactScore: 97,
    aiRecommendation: "Low-cost household bio-sand column infused with activated fly-ash zeolite and moringa oleifera seed extract for 96% fluoride reduction at ₹0.04/Litre.",
    suggestedDepts: ["Environmental Science & Engineering", "Chemical Engineering", "Mining Geo-hydrology"],
    team: {
      faculty: "Prof. S. K. Gupta (Dept of Environmental Engineering, IIT ISM)",
      coFaculty: "Dr. Pallavi Tiwari (Bio-Chemical Filtration)",
      students: [
        { name: "Siddharth Jha", role: "Activated Adsorbent Synthesis" },
        { name: "Ankita Minz", role: "Water Spectrophotometry Quality Lab" },
        { name: "Harsh Vardhan", role: "Gravity Filter Vessel CAD" },
        { name: "Pooja Bauri", role: "Panchayat Distribution & Community Workshops" }
      ]
    },
    industryPartners: [
      {
        name: "Central Coalfields Limited (CCL CSR Wing)",
        type: "Public Sector Enterprise",
        support: "₹12 Lakh Grant for 500 household gravity filter units",
        status: "Active Sponsor"
      }
    ],
    timeline: [
      { name: "Problem Reported", date: "Jun 28, 2026", status: "completed" },
      { name: "AI Validated", date: "Jun 29, 2026", status: "completed" },
      { name: "University Matched", date: "Jul 05, 2026", status: "completed" },
      { name: "Team Formed", date: "Jul 12, 2026", status: "completed" },
      { name: "Research & Simulation", date: "Jul 28, 2026", status: "completed" },
      { name: "Hardware Prototype", date: "Aug 15, 2026", status: "completed" },
      { name: "Field Test in Ward 26", date: "Aug 28, 2026", status: "completed" },
      { name: "Pilot Deployment", date: "Sep 04, 2026", status: "current" },
      { name: "City-Wide Deployed", date: "Target: Nov 2026", status: "upcoming" }
    ],
    updates: [
      { date: "Sep 09, 2026", text: "250 community filtration vessels operational in Jharia schools. Fluoride drop verified to 0.9 mg/L." }
    ],
    evidenceImages: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "UB-2026-00714",
    title: "Standardized Solar Vacuum Honey Dehydrator for Tribal Forest Collectors",
    description: "Indigenous honey harvesters in Khunti forest range gather raw forest honey containing 24-26% moisture. Without proper dehydration, it ferments within weeks, forcing collectors to sell to middlemen at ₹110/kg instead of premium organic price of ₹500/kg.",
    category: "Rural Livelihood",
    district: "Khunti",
    location: "Torpa & Murhu Forest Belt",
    reportedBy: "Mangal Munda (Forest Cooperative Secretary)",
    reportedDate: "2026-07-02",
    priority: "Medium",
    status: "Deployed",
    progress: 100,
    affectedCount: "1,800 Tribal Beekeepers",
    assignedUni: "IIM Ranchi & Kolhan University",
    matchScore: 91,
    duplicateScore: 2,
    impactScore: 93,
    aiRecommendation: "Rotary solar-thermal vacuum drum dehydrator with precision temperature ceiling of 45°C to preserve enzymatic invertase & medicinal antioxidants.",
    suggestedDepts: ["Food Process Engineering", "Social Entrepreneurship", "Rural Incubation"],
    team: {
      faculty: "Dr. Rameshwar Oraon (Rural Technologies Centre)",
      coFaculty: "Prof. Shilpa Roy (Packaging & Supply Chain)",
      students: [
        { name: "Birsa Topno", role: "Solar Parabolic Concentrator & Drum" },
        { name: "Saloni Mehta", role: "FSSAI Food Grade Certification Testing" },
        { name: "Naveen Gope", role: "Branding, QR Traceability & Khunti Brand" },
        { name: "Lata Murmu", role: "Women SHG Operational Training" }
      ]
    },
    industryPartners: [
      {
        name: "TRIFED & Jharkhand State Livelihood Promotion Society",
        type: "Government Livelihood Agency",
        support: "Procurement guarantee for 15,000 kg bottled forest honey",
        status: "Completed Deployment Partner"
      }
    ],
    timeline: [
      { name: "Problem Reported", date: "Jul 02, 2026", status: "completed" },
      { name: "AI Validated", date: "Jul 03, 2026", status: "completed" },
      { name: "University Matched", date: "Jul 10, 2026", status: "completed" },
      { name: "Team Formed", date: "Jul 18, 2026", status: "completed" },
      { name: "Research & Simulation", date: "Aug 02, 2026", status: "completed" },
      { name: "Hardware Prototype", date: "Aug 16, 2026", status: "completed" },
      { name: "Field Test in Ward 26", date: "Aug 24, 2026", status: "completed" },
      { name: "Pilot Deployment", date: "Sep 01, 2026", status: "completed" },
      { name: "City-Wide Deployed", date: "Sep 10, 2026", status: "completed" }
    ],
    updates: [
      { date: "Sep 10, 2026", text: "Successfully deployed across 4 SHG clusters. Average beekeeper monthly income increased by 210%." }
    ],
    evidenceImages: [
      "https://images.unsplash.com/photo-1587049352851-8d4e8913ac05?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "UB-2026-00833",
    title: "AI Acoustic Sensor Network for Early Elephant Herd Intrusion Warning",
    description: "Wild elephant herds traversing the Saranda and Hazaribagh migratory corridor frequently enter human settlements and farmland, destroying standing paddy crops and resulting in tragic human-wildlife encounters.",
    category: "Environment",
    district: "Hazaribagh",
    location: "Chauparan & Barhi Forest Boundary Villages",
    reportedBy: "Forest Village Committee",
    reportedDate: "2026-08-14",
    priority: "Critical",
    status: "Looking for Team",
    progress: 15,
    affectedCount: "16,000+ Forest Fringe Villagers",
    assignedUni: "Vinoba Bhave University & BIT Sindri (Pending Team)",
    matchScore: 88,
    duplicateScore: 5,
    impactScore: 92,
    aiRecommendation: "Low-power seismic geophone array coupled with solar-powered audio infrasound classification to trigger GSM sirens 2km before forest perimeter breach.",
    suggestedDepts: ["Electronics & Telecom", "Wildlife Acoustics & AI", "Renewable Power"],
    team: {
      faculty: "Seeking Faculty Lead in Signal Processing",
      coFaculty: "Forest Wildlife Dept Advisor",
      students: []
    },
    industryPartners: [
      {
        name: "Wildlife Trust of India CSR Grant",
        type: "Conservation Partner",
        support: "₹3 Lakh seed grant pending team registration",
        status: "Prospective Sponsor"
      }
    ],
    timeline: [
      { name: "Problem Reported", date: "Aug 14, 2026", status: "completed" },
      { name: "AI Validated", date: "Aug 15, 2026", status: "completed" },
      { name: "University Matched", date: "Aug 20, 2026", status: "completed" },
      { name: "Team Formed", date: "Pending Acceptance", status: "upcoming" },
      { name: "Research & Simulation", date: "Upcoming", status: "upcoming" },
      { name: "Hardware Prototype", date: "Upcoming", status: "upcoming" },
      { name: "Field Test in Ward 26", date: "Upcoming", status: "upcoming" },
      { name: "Pilot Deployment", date: "Upcoming", status: "upcoming" },
      { name: "City-Wide Deployed", date: "Upcoming", status: "upcoming" }
    ],
    updates: [
      { date: "Aug 20, 2026", text: "AI matching engine identified Signal Processing Lab at BIT Sindri and VBU Hazaribagh with 88% domain compatibility." }
    ],
    evidenceImages: [
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "UB-2026-00910",
    title: "Fly-Ash & Slag Recycled Interlocking Paver Bricks for Rural Roads",
    description: "Thermal power stations and steel blast furnaces in Bokaro accumulate millions of tons of unutilized industrial slag and fly-ash, while rural access roads in adjacent panchayats remain unpaved mud tracks impassable during rains.",
    category: "Urban Infrastructure",
    district: "Bokaro",
    location: "Chas & Chandankiyari Rural Panchayats",
    reportedBy: "Kailash Mahto (Panchayat Samiti)",
    reportedDate: "2026-07-29",
    priority: "Medium",
    status: "Prototype",
    progress: 74,
    affectedCount: "22,000+ Rural Commuters",
    assignedUni: "Birsa Institute of Technology (BIT Sindri)",
    matchScore: 95,
    duplicateScore: 7,
    impactScore: 89,
    aiRecommendation: "Geopolymer hydraulic compaction recipe utilizing 82% industrial waste mix for M35 grade heavy-load interlocking paver blocks.",
    suggestedDepts: ["Civil Engineering", "Material Science", "Sustainable Metallurgy"],
    team: {
      faculty: "Dr. P. C. Soren (Dept of Structural Materials, BIT Sindri)",
      coFaculty: "Prof. Alok Sinha (Geopolymer Chemistry)",
      students: [
        { name: "Nitin Bauri", role: "Compressive Strength Hydraulic Testing" },
        { name: "Swati Pandey", role: "Alkaline Activator Ratio Optimization" },
        { name: "Gaurav Sen", role: "Cost-to-Carbon Footprint Lifecycle Analysis" },
        { name: "Pooja Verma", role: "Rural Panchayat Road Demo Stretch" }
      ]
    },
    industryPartners: [
      {
        name: "SAIL Bokaro Steel Plant (CSR)",
        type: "Steel PSU Sponsor",
        support: "500 Tons Raw Granulated Slag + Hydraulic Block Press Machine",
        status: "Active Sponsor"
      }
    ],
    timeline: [
      { name: "Problem Reported", date: "Jul 29, 2026", status: "completed" },
      { name: "AI Validated", date: "Jul 30, 2026", status: "completed" },
      { name: "University Matched", date: "Aug 05, 2026", status: "completed" },
      { name: "Team Formed", date: "Aug 14, 2026", status: "completed" },
      { name: "Research & Simulation", date: "Aug 26, 2026", status: "completed" },
      { name: "Hardware Prototype", date: "Sep 04, 2026", status: "completed" },
      { name: "Field Test in Ward 26", date: "Target: Oct 2026", status: "upcoming" },
      { name: "Pilot Deployment", date: "Target: Nov 2026", status: "upcoming" },
      { name: "City-Wide Deployed", date: "Target: Jan 2027", status: "upcoming" }
    ],
    updates: [
      { date: "Sep 06, 2026", text: "Batch 4 test bricks achieved 36.4 MPa compressive rating, exceeding standard PWD rural road specifications." }
    ],
    evidenceImages: [
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "UB-2026-01044",
    title: "Crowd-Sourced Pilgrimage Heatwave Mitigation & Hydration Mapping in Baidyanath",
    description: "During the Shravani Mela in Deoghar, over 30 to 40 lakh pilgrims walk barefoot in blistering heat. Severe cases of heat exhaustion, dehydration, and lost vulnerable seniors happen daily due to uneven drinking water kiosk distributions.",
    category: "Public Services",
    district: "Deoghar",
    location: "Baidyanath Dham Temple & Kanwariya Pilgrim Corridor (14 km stretch)",
    reportedBy: "Vandana Jha (Seva Samiti Volunteer)",
    reportedDate: "2026-08-01",
    priority: "High",
    status: "In Progress",
    progress: 60,
    affectedCount: "35 Lakh+ Pilgrims Annually",
    assignedUni: "Central University of Jharkhand (CUJ) & BIT Mesra Deoghar Campus",
    matchScore: 93,
    duplicateScore: 5,
    impactScore: 94,
    aiRecommendation: "Solar-powered QR-mapped cool mist water kiosks with real-time tank level telemetry and volunteer multilingual mobile dispatch.",
    suggestedDepts: ["Computer Science", "Public Health", "Geo-Informatics"],
    team: {
      faculty: "Dr. Sudhanshu Shekhar (CUJ Geo-informatics)",
      coFaculty: "Prof. R. N. Tiwari (Disaster Mitigation)",
      students: [
        { name: "Aditya Prakash", role: "PWA Mobile Pilgrimage Dashboard" },
        { name: "Smriti Ranjan", role: "Volunteer WhatsApp Telephony Bot" },
        { name: "Kunal Jha", role: "Ultrasonic Water Tank Sensors" },
        { name: "Pallavi Sahay", role: "Deoghar District Administration Liaison" }
      ]
    },
    industryPartners: [
      {
        name: "Deoghar District Disaster Management Authority & Red Cross",
        type: "District Administration",
        support: "Kiosk power connections + 50 volunteer smartphone distribution",
        status: "Active Sponsor"
      }
    ],
    timeline: [
      { name: "Problem Reported", date: "Aug 01, 2026", status: "completed" },
      { name: "AI Validated", date: "Aug 02, 2026", status: "completed" },
      { name: "University Matched", date: "Aug 08, 2026", status: "completed" },
      { name: "Team Formed", date: "Aug 18, 2026", status: "completed" },
      { name: "Research & Simulation", date: "Aug 30, 2026", status: "completed" },
      { name: "Hardware Prototype", date: "Sep 07, 2026", status: "current" },
      { name: "Field Test in Ward 26", date: "Target: Oct 2026", status: "upcoming" },
      { name: "Pilot Deployment", date: "Target: Nov 2026", status: "upcoming" },
      { name: "City-Wide Deployed", date: "Target: Dec 2026", status: "upcoming" }
    ],
    updates: [
      { date: "Sep 08, 2026", text: "Interactive GIS heatmap of 48 water hydration booths verified with Deoghar municipality." }
    ],
    evidenceImages: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "UB-2026-01128",
    title: "Mica Scrap Value-Addition & Dust Extraction Mask for Artisanal Workers",
    description: "In Giridih's abandoned mica scavenging pits, hundreds of artisanal families manually sort mica flakes without respiratory protection, suffering from progressive silicosis, while earning minimal returns from middlemen for unprocessed raw debris.",
    category: "Sanitation",
    district: "Giridih",
    location: "Tisri & Gawan Forest Pits",
    reportedBy: "Arjun Soren (Local Workers Union)",
    reportedDate: "2026-08-20",
    priority: "High",
    status: "Looking for Team",
    progress: 20,
    affectedCount: "3,200+ Scavenging Families",
    assignedUni: "Vinoba Bhave University & BIT Sindri Mining Faculty",
    matchScore: 89,
    duplicateScore: 4,
    impactScore: 90,
    aiRecommendation: "Ergonomic washable HEPA cyclone dust mask paired with a simple hand-cranked sieve machine to upgrade raw mica scrap into pearlescent pigment precursor.",
    suggestedDepts: ["Mining Health & Safety", "Chemical Processing", "Ergonomics"],
    team: {
      faculty: "Seeking Faculty Lead in Occupational Safety",
      coFaculty: "Mineral Processing Expert",
      students: []
    },
    industryPartners: [
      {
        name: "Jindal Steel & Power CSR",
        type: "CSR Safety Grant",
        support: "₹2.5 Lakh equipment testing commitment",
        status: "Prospective Sponsor"
      }
    ],
    timeline: [
      { name: "Problem Reported", date: "Aug 20, 2026", status: "completed" },
      { name: "AI Validated", date: "Aug 21, 2026", status: "completed" },
      { name: "University Matched", date: "Aug 28, 2026", status: "completed" },
      { name: "Team Formed", date: "Pending Faculty Lead", status: "upcoming" },
      { name: "Research & Simulation", date: "Upcoming", status: "upcoming" },
      { name: "Hardware Prototype", date: "Upcoming", status: "upcoming" },
      { name: "Field Test in Ward 26", date: "Upcoming", status: "upcoming" },
      { name: "Pilot Deployment", date: "Upcoming", status: "upcoming" },
      { name: "City-Wide Deployed", date: "Upcoming", status: "upcoming" }
    ],
    updates: [
      { date: "Aug 28, 2026", text: "AI challenge alert broadcast to 3 technical university engineering departments in Jharkhand." }
    ],
    evidenceImages: [
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    id: "UB-2026-01250",
    title: "Off-Grid Solar Irrigation Pump Sharing Network with Smart Token Metering",
    description: "Marginal tribal farmers in Chaibasa cannot afford individual diesel pump sets (diesel cost ₹95/L) to irrigate Rabi crops. While some government solar borewells exist, monopolization by dominant landowners leaves adjacent small farms parched.",
    category: "Clean Energy",
    district: "Chaibasa",
    location: "Tonto & Jhinkpani Panchayats",
    reportedBy: "Sukhram Hembrom (Kisan Mitra)",
    reportedDate: "2026-07-15",
    priority: "Medium",
    status: "Pilot",
    progress: 85,
    affectedCount: "1,200+ Farmers",
    assignedUni: "Kolhan University & NIT Jamshedpur",
    matchScore: 93,
    duplicateScore: 6,
    impactScore: 91,
    aiRecommendation: "RFID/SMS solar pump dispenser controller that dispenses 60-minute water allocations based on prepaid micro-tokens, sharing 1 pump among 8 contiguous farmers.",
    suggestedDepts: ["Electrical & Power Systems", "IoT & Embedded Systems", "Rural Economics"],
    team: {
      faculty: "Dr. S. K. Mahapatra (NIT Jamshedpur Electrical Labs)",
      coFaculty: "Prof. Meena Bodra (Kolhan Univ)",
      students: [
        { name: "Jayant Singh", role: "Solenoid Valve GSM Relay Controller" },
        { name: "Archana Tirkey", role: "Farmer Offline SMS Billing Logic" },
        { name: "Raman Kujur", role: "Solar Inverter Integration" },
        { name: "Roshni Munda", role: "Gram Panchayat Cooperative Governance" }
      ]
    },
    industryPartners: [
      {
        name: "Tata Steel Rural Development Society (TSRDS)",
        type: "Rural CSR Partner",
        support: "5 Solar Borewell Retrofits & 500 Smart Token Cards",
        status: "Active Sponsor"
      }
    ],
    timeline: [
      { name: "Problem Reported", date: "Jul 15, 2026", status: "completed" },
      { name: "AI Validated", date: "Jul 16, 2026", status: "completed" },
      { name: "University Matched", date: "Jul 22, 2026", status: "completed" },
      { name: "Team Formed", date: "Jul 30, 2026", status: "completed" },
      { name: "Research & Simulation", date: "Aug 12, 2026", status: "completed" },
      { name: "Hardware Prototype", date: "Aug 24, 2026", status: "completed" },
      { name: "Field Test in Ward 26", date: "Sep 02, 2026", status: "completed" },
      { name: "Pilot Deployment", date: "Sep 10, 2026", status: "current" },
      { name: "City-Wide Deployed", date: "Target: Nov 2026", status: "upcoming" }
    ],
    updates: [
      { date: "Sep 10, 2026", text: "3 solar borewells in Tonto upgraded with RFID smart dispensing. Zero pump downtime reported over 14 days." }
    ],
    evidenceImages: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
    ]
  }
];
