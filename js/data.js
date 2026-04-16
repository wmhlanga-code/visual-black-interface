/* ═══════════════════════════════════════════════════════════
   THE PATTERN REPEATS — data.js
   ERAS and RECURRING_COMMUNITIES globals
   ═══════════════════════════════════════════════════════════ */

const ERAS = [
  {
    id: 'highways',
    wave: 'Wave I',
    title: 'The Highway Era',
    years: '1950s – 1960s',
    color: '#d97706',
    description: 'The Federal-Aid Highway Act of 1956 created 41,000 miles of interstates. City planners routed them through Black neighborhoods — cheaper land, less political resistance, and in many cases deliberate intent to "clear" communities deemed "blighted." An estimated one million Americans were displaced. Very few were white.',
    hint: 'Investigate all five communities to complete Wave I and unlock the Refinery Era.',
    communities: [
      {
        id: 'treme',
        communityKey: null,
        name: 'Tremé / Claiborne Ave.',
        city: 'New Orleans, LA',
        lat: 29.963,
        lon: -90.070,
        fact: 'The I-10 Claiborne Expressway was built directly over Claiborne Avenue — the tree-lined social and commercial heart of Black New Orleans.',
        impact: '400+ live oak trees bulldozed. Hundreds of Black-owned businesses erased. The outdoor gathering space for Black Mardi Gras: gone.',
        demo: '~97% Black neighborhood, 1960'
      },
      {
        id: 'black_bottom',
        communityKey: null,
        name: 'Black Bottom / Paradise Valley',
        city: 'Detroit, MI',
        lat: 42.333,
        lon: -83.027,
        fact: 'I-375 and the Chrysler Freeway demolished Detroit\'s most vibrant Black neighborhood — "Paradise Valley," the Black entertainment capital of the Midwest.',
        impact: '10,000+ residents displaced. 300+ Black-owned businesses destroyed. The community never returned.',
        demo: 'Predominantly Black since the early 1900s'
      },
      {
        id: 'south_memphis_hw',
        communityKey: 'memphis',
        name: 'South Memphis',
        city: 'Memphis, TN',
        lat: 35.118,
        lon: -90.054,
        fact: 'I-55 and the I-240 ring road were routed through South Memphis — communities that the federal HOLC had already redlined since the 1930s.',
        impact: 'Neighborhoods divided. Property values further suppressed. The same ZIP codes would face three more industrial waves over the next 60 years.',
        demo: '~75–80% Black in affected ZIP codes'
      },
      {
        id: 'vine_city_hw',
        communityKey: 'atlanta',
        name: 'Vine City / Summerhill',
        city: 'Atlanta, GA',
        lat: 33.747,
        lon: -84.415,
        fact: 'I-20 and the I-75/85 connector displaced thousands from Atlanta\'s Black neighborhoods adjacent to downtown — including Dr. Martin Luther King Jr.\'s own block.',
        impact: 'Vine City, where Dr. King lived, was gutted. Summerhill lost its residential core. Neither community has fully recovered in 60 years.',
        demo: 'Dr. King\'s neighborhood; >90% Black'
      },
      {
        id: 'jackson_ward_hw',
        communityKey: 'richmond_va',
        name: 'Jackson Ward',
        city: 'Richmond, VA',
        lat: 37.543,
        lon: -77.445,
        fact: 'Called the "Harlem of the South," Jackson Ward was home to Maggie Walker\'s bank — the first Black-owned bank in U.S. history. I-95 split it in half.',
        impact: 'The historic Black financial district was bisected and isolated. Property values collapsed. The community never economically recovered.',
        demo: 'Historic center of Black entrepreneurship in the South'
      }
    ]
  },

  {
    id: 'refineries',
    wave: 'Wave II',
    title: 'The Refinery Era',
    years: '1970s – 1980s',
    color: '#dc2626',
    description: 'As environmental regulations tightened in white suburbs in the 1970s, industry expanded in communities with less political power to resist. The siting logic was explicit in industry documents: minority and low-income communities offered "least resistance." A 1983 GAO study confirmed it. The result was Cancer Alley, fenceline communities, and decades of denied permits.',
    hint: 'Look for communities that have appeared before — a pattern is forming.',
    communities: [
      {
        id: 'reserve_la',
        communityKey: 'cancer_alley',
        name: 'Reserve / Cancer Alley',
        city: 'St. John the Baptist Parish, LA',
        lat: 30.062,
        lon: -90.570,
        fact: '150+ petrochemical plants line the 85-mile stretch between Baton Rouge and New Orleans. Reserve\'s air carries chloroprene at 800% above the EPA\'s acceptable cancer risk level.',
        impact: 'St. John the Baptist Parish (78% Black) was named by the EPA\'s own data as the most cancer-risk-burdened census tract in the United States.',
        demo: '78% Black, St. John the Baptist Parish'
      },
      {
        id: 'richmond_ca_ref',
        communityKey: 'richmond_ca',
        name: 'Richmond (Chevron Corridor)',
        city: 'Richmond, CA',
        lat: 37.935,
        lon: -122.348,
        fact: 'The Chevron refinery — the oldest in California — sits adjacent to a predominantly Black city that has fought for clean air for decades.',
        impact: 'A 2012 explosion sent 15,000 residents to hospitals. Asthma rates run 2–3× the regional average. The city that built WWII Liberty Ships still breathes refinery smoke.',
        demo: '~35% Black, predominantly low-income'
      },
      {
        id: 'south_memphis_ref',
        communityKey: 'memphis',
        name: 'South Memphis',
        city: 'Memphis, TN',
        lat: 35.109,
        lon: -90.071,
        fact: 'The communities bisected by I-240 in the 1960s became host to chemical plants and the Allen Fossil Plant — burning coal in a majority-Black ZIP code.',
        impact: 'Second industrial wave. Same neighborhoods. Same families. The Allen Fossil Plant was among the largest pollution sources in the mid-South.',
        demo: '~80% Black in affected ZIP codes'
      },
      {
        id: 'fifth_ward_ref',
        communityKey: 'houston',
        name: 'Fifth Ward / Kashmere Gardens',
        city: 'Houston, TX',
        lat: 29.787,
        lon: -95.338,
        fact: 'A Union Pacific railroad yard leached creosote — a known carcinogen — into soil and groundwater in a historically Black neighborhood for decades.',
        impact: 'Cancer clusters were documented and dismissed for years before Superfund designation. The community had already been isolated by I-10 in the 1960s.',
        demo: '~75% Black neighborhood'
      },
      {
        id: 'norco_ref',
        communityKey: null,
        name: 'Diamond (Norco)',
        city: 'Norco, LA',
        lat: 29.995,
        lon: -90.397,
        fact: 'The Black neighborhood of Diamond was built adjacent to a Shell chemical plant. The plant was expanded. The community was not consulted.',
        impact: 'A 1988 pipeline explosion killed two residents and destroyed homes. Shell contested buyout demands for 14 years before finally relocating the community in 2002.',
        demo: 'Historically Black neighborhood surrounded by Shell facilities'
      }
    ]
  },

  {
    id: 'waste',
    wave: 'Wave III',
    title: 'The Waste Era',
    years: '1990s',
    color: '#16a34a',
    description: 'A landmark 1987 United Church of Christ study found that race was the single most significant factor in determining proximity to hazardous waste sites — more than income, more than land values. The environmental justice movement was born in response. Industry read the study too, and continued.',
    hint: 'Three waves in. The pattern is undeniable. How many communities keep appearing?',
    communities: [
      {
        id: 'warren_county_waste',
        communityKey: null,
        name: 'Warren County',
        city: 'Warren County, NC',
        lat: 36.393,
        lon: -78.107,
        fact: 'In 1982, North Carolina sited a PCB landfill in Warren County — 84% Black, the highest percentage in the state — over sustained protest.',
        impact: '500 protesters were arrested. The resistance here launched the modern environmental justice movement. The term "environmental racism" was coined here.',
        demo: '84% Black — highest percentage in North Carolina'
      },
      {
        id: 'chester_waste',
        communityKey: null,
        name: 'Chester',
        city: 'Chester, PA',
        lat: 39.849,
        lon: -75.356,
        fact: 'Chester — 75% Black, lowest income in Delaware County — hosted five waste facilities within 1.5 miles: two incinerators, a sewage plant, a medical waste sterilizer, and a soil recycler.',
        impact: 'Childhood asthma among the highest in Pennsylvania. Residents filed landmark environmental justice litigation. They lost in federal court.',
        demo: '75% Black, lowest income in Delaware County'
      },
      {
        id: 'south_memphis_waste',
        communityKey: 'memphis',
        name: 'South Memphis / Boxtown',
        city: 'Memphis, TN',
        lat: 35.091,
        lon: -90.093,
        fact: 'Boxtown — already scarred by I-240 and chemical plants — became a concentration point for waste transfer stations and municipal landfills in the 1990s.',
        impact: 'Third wave. Same ZIP codes. Odor, groundwater contamination, elevated health metrics. The community organized, was heard, and largely ignored.',
        demo: '~85% Black — same ZIP codes since the 1965 highway routes'
      },
      {
        id: 'north_richmond_waste',
        communityKey: 'richmond_ca',
        name: 'North Richmond (Unincorporated)',
        city: 'Richmond, CA',
        lat: 37.962,
        lon: -122.363,
        fact: 'North Richmond — unincorporated and with fewer city protections — became a secondary dumping ground beside the Chevron refinery corridor.',
        impact: 'Illegal dumping, waste transfer stations, ongoing refinery burden. Residents had no city council. Only the county — which had approved the waste sites.',
        demo: '~55% Black and Latino, unincorporated — no city services'
      },
      {
        id: 'fifth_ward_waste',
        communityKey: 'houston',
        name: 'Fifth Ward (Superfund)',
        city: 'Houston, TX',
        lat: 29.800,
        lon: -95.325,
        fact: 'The Union Pacific creosote site received Superfund designation after years of community documentation of cancer rates — but cleanup was slow and incomplete.',
        impact: 'Residents who were told their health concerns were unfounded lived to see federal validation, and incomplete remediation. The contamination remains in some areas today.',
        demo: '~75% Black — same community as the refinery era'
      }
    ]
  },

  {
    id: 'datacenters',
    wave: 'Wave IV',
    title: 'The Data Center Era',
    years: '2010s – Now',
    color: '#3b82f6',
    description: 'The digital economy was supposed to be clean. Data centers consume electricity equivalent to small cities, demand massive water for cooling, and require transmission infrastructure on an industrial scale. They are being sited along familiar corridors — cheap land, power lines already routed through Black communities, political environments that prioritize tax incentives over environmental review. The technology is new. The logic is not.',
    hint: 'The fourth wave. The same communities appear again. The pattern is complete.',
    communities: [
      {
        id: 'memphis_dc',
        communityKey: 'memphis',
        name: 'South Memphis / Allen Fossil Site',
        city: 'Memphis, TN',
        lat: 35.095,
        lon: -90.082,
        fact: 'The Allen Fossil Plant — which burned coal in Black neighborhoods for 60 years — closed in 2018. Microsoft is building a data center campus on the same site.',
        impact: 'Fourth industrial wave. Same ZIP codes. Power consumption strains a grid serving neighborhoods already with the worst air quality in Memphis. The source changed. The burden did not.',
        demo: '~85% Black — same ZIP codes burdened since 1965'
      },
      {
        id: 'south_atlanta_dc',
        communityKey: 'atlanta',
        name: 'South Atlanta / Forest Park Corridor',
        city: 'Atlanta Metro, GA',
        lat: 33.621,
        lon: -84.368,
        fact: 'Georgia\'s data center industry clusters along South Atlanta corridors — the same areas that I-20 and I-75 divided in the 1960s.',
        impact: 'Industrial cooling water competes with residential need in a drought-prone region. Land speculation displaces longtime Black residents from communities that survived the highway era.',
        demo: '~70% Black in the affected South Atlanta corridor'
      },
      {
        id: 'cancer_alley_dc',
        communityKey: 'cancer_alley',
        name: 'St. James Parish (Greenfield Site)',
        city: 'Cancer Alley, LA',
        lat: 30.014,
        lon: -90.778,
        fact: 'Formosa Plastics proposed an $8.9 billion petrochemical complex in St. James Parish in 2021. The proposed site included an ancestral burial ground.',
        impact: 'Sharon Lavigne, a St. James schoolteacher, won the Goldman Environmental Prize in 2021 for her resistance. This community was facing its second major industrial siting.',
        demo: '55% Black, St. James Parish'
      },
      {
        id: 'richmond_va_dc',
        communityKey: 'richmond_va',
        name: 'Richmond Transmission Corridor',
        city: 'Richmond, VA',
        lat: 37.531,
        lon: -77.476,
        fact: 'Dominion Energy\'s infrastructure for Northern Virginia\'s data center demand runs through historic Black corridors in Richmond — including what remains of Jackson Ward.',
        impact: 'Jackson Ward was split by I-95 in 1960. The transmission lines to power exurban data centers now run through the same neighborhood. 60 years. Same geography. New industry.',
        demo: 'Richmond: ~45% Black; Jackson Ward historically 90%+'
      },
      {
        id: 'prince_william_dc',
        communityKey: null,
        name: 'Prince William County',
        city: 'Northern Virginia',
        lat: 38.705,
        lon: -77.533,
        fact: 'Prince William County — where Black and Latino populations have grown significantly — is the newest frontier of "Data Center Alley," the world\'s largest data center market.',
        impact: 'Massive substations, industrial cooling noise, and tax incentives that redirect hundreds of millions from school budgets in rapidly diversifying communities.',
        demo: 'Prince William County: ~21% Black, rapidly diversifying'
      }
    ]
  }
];

const RECURRING_COMMUNITIES = [
  {
    key: 'memphis',
    name: 'South Memphis, TN',
    eras: ['highways', 'refineries', 'waste', 'datacenters'],
    summary: 'The same ZIP codes bisected by I-240 in 1965 hosted chemical plants in the 1970s, waste facilities in the 1990s, and now a Microsoft data center on the former coal plant site.'
  },
  {
    key: 'atlanta',
    name: 'Atlanta, GA (Vine City → South Side)',
    eras: ['highways', 'datacenters'],
    summary: 'I-20 gutted Vine City — Dr. King\'s neighborhood — in the 1960s. Data center corridors now run through the same South Atlanta communities.'
  },
  {
    key: 'richmond_ca',
    name: 'Richmond, CA',
    eras: ['refineries', 'waste'],
    summary: 'Chevron\'s refinery burdened Richmond for decades. The adjacent unincorporated North Richmond then became a waste concentration site in the 1990s.'
  },
  {
    key: 'richmond_va',
    name: 'Richmond, VA (Jackson Ward)',
    eras: ['highways', 'datacenters'],
    summary: 'Jackson Ward was split by I-95 in 1960. Dominion Energy\'s data center transmission lines now follow the same historic Black corridors.'
  },
  {
    key: 'houston',
    name: 'Houston, TX (Fifth Ward)',
    eras: ['refineries', 'waste'],
    summary: 'Creosote contamination from a Union Pacific rail yard led to a documented cancer cluster and eventual Superfund designation.'
  },
  {
    key: 'cancer_alley',
    name: 'Cancer Alley, LA',
    eras: ['refineries', 'datacenters'],
    summary: 'Petrochemical plants made Reserve the most cancer-burdened community in America. New industrial proposals continue targeting the same 78% Black parish.'
  }
];

/* ─────────────────────────────────────────────────────────
   QUIZZES — 2 questions per era, shown after era completion
   ───────────────────────────────────────────────────────── */

const QUIZZES = {
  highways: [
    {
      question: 'What was the primary reason city planners gave for routing interstates through Black neighborhoods in the 1950s and \'60s?',
      options: [
        'The terrain made those routes geographically unavoidable',
        'Lower land acquisition costs and less organized political resistance',
        'Proximity to industrial zones for economic development',
        'Urban planners had no racial data and made neutral decisions'
      ],
      correct: 1,
      explanation: 'Federal and local planners explicitly cited lower land costs. Subsequent research and declassified documents confirmed race was also a deliberate factor — neighborhoods deemed "blighted" were disproportionately Black, and "urban renewal" was used as a mechanism of displacement.'
    },
    {
      question: 'Jackson Ward in Richmond, VA was called the "Harlem of the South." What made it historically significant before I-95 split it in half?',
      options: [
        'It was home to the largest HBCU campus in the South',
        'It was the site of the first major civil rights marches in Virginia',
        'It was home to Maggie Walker\'s bank — the first Black-owned bank in U.S. history',
        'It was the only majority-Black city council district in Richmond'
      ],
      correct: 2,
      explanation: 'Maggie L. Walker founded the St. Luke Penny Savings Bank in 1903 — the first bank chartered by a Black woman in the United States. Jackson Ward was a self-sustaining economic community. I-95 bisected it, collapsed property values, and severed it from downtown. It never economically recovered.'
    }
  ],

  refineries: [
    {
      question: 'A 1983 U.S. Government Accountability Office study examined hazardous waste landfills in the Southeast. What did it find about where they were located?',
      options: [
        'They were evenly distributed across all income levels',
        'Three of four were located in majority-Black communities',
        'They were primarily in rural white farming communities',
        'They were concentrated near industrial ports regardless of demographics'
      ],
      correct: 1,
      explanation: 'The 1983 GAO study "Siting of Hazardous Waste Landfills and Their Correlation with Racial and Economic Status" found that 3 of 4 off-site hazardous waste landfills in EPA Region 4 were in majority-Black communities. This study, alongside the 1987 UCC report, became the empirical foundation of the environmental justice movement.'
    },
    {
      question: 'The Black neighborhood of Diamond in Norco, LA was adjacent to a Shell chemical plant. After a 1988 pipeline explosion killed two residents, what did Shell do?',
      options: [
        'Immediately paid to relocate the entire community',
        'Shut down the plant and transferred operations elsewhere',
        'Contested the community\'s buyout demands for 14 years before relocating them in 2002',
        'Funded a community health clinic and issued a formal apology'
      ],
      correct: 2,
      explanation: 'Shell resisted relocation demands for 14 years while residents continued living next to the plant. The Diamond community was finally relocated in 2002 after sustained organizing and national media attention. The case became a model for fenceline community advocacy.'
    }
  ],

  waste: [
    {
      question: 'The protest in Warren County, NC in 1982 launched the modern environmental justice movement. Why was Warren County chosen for the PCB landfill?',
      options: [
        'It had the most suitable soil composition for safely containing PCBs',
        'It was the only county that passed a local referendum approving it',
        'It was the county with the highest percentage of Black residents in North Carolina',
        'It was the closest site to the PCB-contaminated highway requiring cleanup'
      ],
      correct: 2,
      explanation: 'Warren County was 84% Black — the highest percentage of any county in North Carolina. Researchers and residents argued the site was chosen precisely because the community lacked political power. 500 protesters were arrested. Rev. Benjamin Chavis coined the term "environmental racism" here.'
    },
    {
      question: 'Chester, PA — 75% Black — had five waste facilities within 1.5 miles. When residents took legal action under the Civil Rights Act, what was the outcome?',
      options: [
        'The facilities were ordered to close within five years',
        'They won a $40 million settlement from the state of Pennsylvania',
        'They lost in federal court — the case was dismissed',
        'The EPA intervened and designated the area a Superfund site'
      ],
      correct: 2,
      explanation: 'Chester residents lost in the federal Third Circuit Court of Appeals. The court ruled they could not use Title VI of the Civil Rights Act to challenge facility permits without proving discriminatory intent — a near-impossible standard. The case became a landmark study in the limits of civil rights law as applied to environmental justice claims.'
    }
  ],

  datacenters: [
    {
      question: 'The Allen Fossil Plant burned coal in South Memphis — a majority-Black ZIP code — for over 60 years before closing in 2018. What replaced it on the same site?',
      options: [
        'A public green space funded through EPA environmental remediation',
        'Affordable housing developed through a federal community reinvestment grant',
        'A Microsoft data center campus',
        'A solar energy facility owned by Memphis Light Gas & Water'
      ],
      correct: 2,
      explanation: 'Microsoft secured the Allen Fossil Plant site for a major data center campus. South Memphis — already burdened by highway construction (1965), industrial pollution (1970s–80s), and waste facilities (1990s) — now hosts its fourth major industrial use in 60 years. The pollution source changed. The burden on the same community did not.'
    },
    {
      question: 'Data centers are often marketed as "clean" technology. Which of the following is NOT a documented community concern about data center siting?',
      options: [
        'Industrial-scale water consumption for cooling systems',
        'Tax incentives that redirect hundreds of millions from local school budgets',
        'Direct electromagnetic radiation causing measurable harm to nearby residents',
        'New transmission lines and substations routed through low-income neighborhoods'
      ],
      correct: 2,
      explanation: 'Electromagnetic radiation from data centers is not a documented community health concern. The real documented issues are: massive power and water consumption, industrial noise, and tax abatements that shift the fiscal burden onto communities while corporations pay little. In Prince William County, data center tax incentives have redirected hundreds of millions from public school budgets.'
    }
  ]
};
