/* ═══════════════════════════════════════════════════════════
   THE PATTERN REPEATS — data.js
   ERAS and RECURRING_COMMUNITIES globals
   ═══════════════════════════════════════════════════════════ */

const US_ERAS = [
  {
    id: 'highways',
    wave: 'Wave I',
    title: 'The Highway Era',
    years: '1950s – 1960s',
    color: '#d97706',
    description: 'The Federal-Aid Highway Act of 1956 created 41,000 miles of interstates. City planners routed them through Black neighborhoods — cheaper land, less political resistance, and in many cases deliberate intent to "clear" communities deemed "blighted." An estimated one million Americans were displaced. Very few were white.',
    hint: 'Investigate all communities to complete Wave I and unlock the Refinery Era.',
    communities: [
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
    ]
  }
];

const US_RECURRING = [
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

const US_QUIZZES = {
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

/* ═══════════════════════════════════════════════════════════
   UNITED KINGDOM DATA
   ═══════════════════════════════════════════════════════════ */

const UK_ERAS = [
  {
    id: 'uk_industrial',
    wave: 'Wave I',
    title: 'Industrial Zoning & Housing Policy',
    years: '1950s – 1970s',
    color: '#0d9488',
    description: 'The Windrush generation arrived from the Caribbean to help rebuild post-war Britain. They were settled near docks, factories, and industrial corridors — not by accident, but by policy. Local authorities concentrated Black and minority communities in the most deprived, most polluted areas. There was no environmental review. There was no appeal.',
    hint: 'Investigate all communities to unlock Wave II.',
    communities: [
      {
        id: 'uk_newham_w1',
        communityKey: 'uk_newham',
        name: 'Newham, East London',
        city: 'London, UK',
        lat: 51.524, lon: 0.036,
        fact: 'Windrush-generation Black and minority communities settled in Newham — near the docks, industrial sites, and factories — deliberately zoned away from green space and clean air.',
        impact: 'Newham became one of London\'s most deprived and most diverse boroughs. Its industrial legacy shaped air quality outcomes that persist today.',
        demo: 'One of the most ethnically diverse boroughs in London; 73% BAME'
      },
      {
        id: 'uk_handsworth_w1',
        communityKey: null,
        name: 'Handsworth, Birmingham',
        city: 'Birmingham, UK',
        lat: 52.510, lon: -1.918,
        fact: 'A large Afro-Caribbean community settled near Birmingham\'s manufacturing corridors. Limited political power meant little ability to resist industrial siting decisions.',
        impact: 'Handsworth faced compounding industrial pollution, economic neglect, and deliberate disinvestment. The 1985 Handsworth riots were a direct response to years of systemic neglect.',
        demo: 'Predominantly Afro-Caribbean and South Asian community'
      },
      {
        id: 'uk_toxteth_w1',
        communityKey: null,
        name: 'Toxteth, Liverpool',
        city: 'Liverpool, UK',
        lat: 53.386, lon: -2.975,
        fact: 'Black community settled near the Liverpool docks and industrial waterfront after the Windrush era — the same docks that had profited from the slave trade centuries earlier.',
        impact: 'Deliberate disinvestment and environmental neglect. The 1981 Toxteth Riots were a response to police brutality and economic exclusion. The area was never fully reinvested.',
        demo: 'Historic Black British community; one of Britain\'s oldest'
      }
    ]
  },
  {
    id: 'uk_incinerators',
    wave: 'Wave II',
    title: 'Incinerators, Waste Sites & Airport Expansion',
    years: '1980s – 2000s',
    color: '#7c3aed',
    description: 'As environmental regulation tightened across Britain, waste facilities and industrial infrastructure expanded into communities too exhausted by racial oppression and economic exclusion to mount effective resistance. Airport expansion and incinerator construction followed the same logic: find communities with the least political capital.',
    hint: 'Look for communities that have appeared before.',
    communities: [
      {
        id: 'uk_newham_w2',
        communityKey: 'uk_newham',
        name: 'Newham, East London',
        city: 'London, UK',
        lat: 51.505, lon: 0.010,
        fact: 'London City Airport expanded into Newham in 1987 — already one of the UK\'s most deprived and diverse boroughs. In 2016, Black Lives Matter UK protestors occupied the runway, citing the expansion\'s impact on Black residents already breathing illegal air.',
        impact: 'Air pollution levels in Newham were already illegal under EU law before further expansion. The protest was dismissed. The expansion proceeded.',
        demo: 'Newham: highest proportion of Black African residents of any London borough'
      },
      {
        id: 'uk_edmonton_w2',
        communityKey: null,
        name: 'Edmonton, North London',
        city: 'London, UK',
        lat: 51.613, lon: -0.058,
        fact: 'A massive waste incinerator was built in Edmonton — one of the most deprived, most ethnically diverse constituencies in England. Activists described it as deliberate targeting of communities with limited political power.',
        impact: 'The Edmonton incinerator processes waste from across London. The diverse, low-income community living beside it bears the air quality consequences. Proposals to expand it further continue.',
        demo: 'Edmonton: majority BAME constituency; high deprivation index'
      },
      {
        id: 'uk_lewisham_w2',
        communityKey: 'uk_lewisham',
        name: 'Lewisham, South London',
        city: 'London, UK',
        lat: 51.451, lon: -0.021,
        fact: 'South Circular Road expansion in the 1980s and 1990s pumped illegal levels of nitrogen dioxide into a predominantly Black neighbourhood. Air pollution regularly exceeded EU legal limits from 2010 onward.',
        impact: 'Repeated air quality violations. Residents filed complaints. The government measured the pollution, confirmed it was illegal, and did not stop it.',
        demo: '~20% Black African/Caribbean in affected area; high deprivation'
      }
    ]
  },
  {
    id: 'uk_air_pollution',
    wave: 'Wave III',
    title: 'Illegal Air Pollution & Climate Burden',
    years: '2010s – Now',
    color: '#ea580c',
    description: 'Britain\'s air pollution crisis is not evenly distributed. Research by Greenpeace UK and the Runnymede Trust confirms that Black communities are systematically exposed to higher levels of illegal air pollution than white and Asian groups. The government measured this. It was documented. The burden continued.',
    hint: 'Three waves. The same communities. The pattern is complete.',
    communities: [
      {
        id: 'uk_lewisham_wave3',
        communityKey: 'uk_lewisham',
        isKeyEvidence: true,
        name: 'Lewisham — Ella\'s Story',
        city: 'London, UK',
        lat: 51.448, lon: -0.018,
        fact: 'In 2013, nine-year-old Ella Adoo-Kissi-Debrah — a Black girl living 25 metres from the South Circular Road — died of a fatal asthma attack. In 2020, she became the first person in the world to have air pollution listed as a cause of death on her death certificate.',
        impact: 'Nitrogen dioxide levels near Ella\'s home exceeded WHO guidelines throughout her illness. Her mother, Rosamund Adoo-Kissi-Debrah, campaigned for seven years for the inquest verdict. It confirmed what her community already knew.',
        demo: '~20% Black African/Caribbean; Ella lived 25 metres from the road'
      },
      {
        id: 'uk_newham_w3',
        communityKey: 'uk_newham',
        name: 'Newham, East London',
        city: 'London, UK',
        lat: 51.524, lon: 0.036,
        fact: 'Black residents in Newham are more likely to breathe illegal levels of air pollution than white and Asian groups in the same borough. Newham has the least green space per capita of any London borough.',
        impact: 'Three waves of industrial burden. Airport, industrial sites, illegal air. Research confirms Black British children are exposed to up to 30% more air pollution than white children.',
        demo: 'Black residents disproportionately exposed within an already polluted borough'
      },
      {
        id: 'uk_lambeth_w3',
        communityKey: null,
        name: 'Lambeth, South London',
        city: 'London, UK',
        lat: 51.495, lon: -0.113,
        fact: 'Identified by Greenpeace UK and the Runnymede Trust as an "air pollution sacrifice area" — high deprivation, diverse demographics, proximity to incinerators and industrial sites, no access to green space.',
        impact: 'The term "sacrifice area" describes communities written off by policy: too poor, too Black, too politically marginalised to warrant the infrastructure investment that would clean their air.',
        demo: '~25% Black African/Caribbean; among highest deprivation in South London'
      }
    ]
  }
];

const UK_RECURRING = [
  {
    key: 'uk_newham',
    name: 'Newham, East London',
    eras: ['uk_industrial', 'uk_incinerators', 'uk_air_pollution'],
    summary: 'Settled near industrial docks in the 1950s, then burdened by airport expansion in 1987, then confirmed as breathing illegal air in the 2010s — all while being one of London\'s most diverse boroughs.'
  },
  {
    key: 'uk_lewisham',
    name: 'Lewisham, South London',
    eras: ['uk_incinerators', 'uk_air_pollution'],
    summary: 'Illegal nitrogen dioxide from the South Circular Road was measured, confirmed, and ignored from the 1980s onward. Ella Adoo-Kissi-Debrah died breathing it in 2013.'
  }
];

const UK_QUIZZES = {
  uk_industrial: [
    {
      question: 'Where were most Black Commonwealth migrants initially settled when the Windrush generation arrived in Britain in the 1940s–50s?',
      options: [
        'In desirable new housing estates on the outskirts of cities',
        'Near docks, factories, and industrial zones in deprived urban areas',
        'In rural areas to support post-war agricultural recovery',
        'In purpose-built communities with access to parks and green space'
      ],
      correct: 1,
      explanation: 'Black Commonwealth migrants were channelled into the most deprived, most industrial urban areas — near docks and factories — by a combination of housing policy, landlord discrimination, and deliberate zoning decisions. Access to green space, clean air, and quality housing was reserved for white communities.'
    },
    {
      question: 'The 1981 Toxteth Riots in Liverpool were a direct response to what conditions?',
      options: [
        'Environmental pollution from the docks affecting the community\'s health',
        'Police brutality, economic exclusion, and years of deliberate disinvestment',
        'The forced closure of community centres and religious buildings',
        'A proposed waste facility siting that the community rejected'
      ],
      correct: 1,
      explanation: 'The Toxteth Riots — like the Handsworth Riots of 1985 — were responses to systematic police brutality, unemployment, and the deliberate economic neglect of Black communities. These communities had been concentrated in industrial zones and then abandoned as those industries declined.'
    }
  ],
  uk_incinerators: [
    {
      question: 'In 2016, Black Lives Matter UK staged a protest at London City Airport in Newham. What was their stated reason?',
      options: [
        'They demanded the airport be closed and the land returned to the community',
        'They cited that further expansion would worsen already illegal air pollution for Black residents',
        'They were protesting noise pollution affecting the sleep quality of residents',
        'They demanded the airport hire proportionally more Black workers'
      ],
      correct: 1,
      explanation: 'The BLM UK protesters explicitly named air quality and environmental racism. Newham\'s air was already classified as illegal under EU law. The protest connected environmental justice to the broader Black Lives Matter movement — one of the first such direct actions in the UK.'
    },
    {
      question: 'Who bears the environmental burden of the Edmonton incinerator in North London, which processes waste from across the capital?',
      options: [
        'Industrial workers in the immediate zone around the facility',
        'Residents of more affluent boroughs who generate the most waste',
        'The diverse, deprived community living immediately adjacent to the plant',
        'The burden is equally shared across all 33 London boroughs'
      ],
      correct: 2,
      explanation: 'Edmonton is one of England\'s most deprived and diverse constituencies. The incinerator processes waste produced by wealthier Londoners but the air quality impact falls on Edmonton\'s low-income, majority-BAME community. This pattern — consumption in one community, pollution burden in another — is textbook environmental inequality.'
    }
  ],
  uk_air_pollution: [
    {
      question: 'In 2020, nine-year-old Ella Adoo-Kissi-Debrah made legal history. What was recorded on her death certificate that had never appeared on any death certificate before?',
      options: [
        'Noise pollution from nearby airport construction',
        'Air pollution — specifically nitrogen dioxide from the South Circular Road',
        'Industrial chemicals from a nearby incinerator',
        'Water contamination from a historic waste site'
      ],
      correct: 1,
      explanation: 'Ella became the first person in the world to have air pollution listed as a cause of death. The coroner found that nitrogen dioxide levels near her home on the South Circular Road in Lewisham exceeded WHO guidelines throughout her illness. Her mother campaigned for seven years to establish this. The road had been flagged for illegal pollution for decades.'
    },
    {
      question: 'Research by Greenpeace UK and the Runnymede Trust found that Black children in Britain are exposed to how much more air pollution than white children?',
      options: [
        'About 5% more — a marginal difference',
        'About 10% more',
        'Up to 30% more',
        'Roughly the same — no significant difference was found'
      ],
      correct: 2,
      explanation: 'Research confirms that Black British children are exposed to up to 30% more air pollution than white children — a figure that reflects decades of housing policy, industrial zoning, and the concentration of pollution burden in diverse, low-income communities. This is not atmospheric accident. It is the accumulated result of decisions.'
    }
  ]
};

/* ═══════════════════════════════════════════════════════════
   SOUTH AFRICA DATA
   ═══════════════════════════════════════════════════════════ */

const ZA_ERAS = [
  {
    id: 'za_land_acts',
    wave: 'Wave I',
    title: 'Land Acts & Forced Removal',
    years: '1913 – 1950s',
    color: '#ca8a04',
    description: 'The Native Land Act of 1913 gave 87% of South Africa\'s land to white people while confining the Black majority to 13%. Forced removals under the Group Areas Act then displaced Black and Coloured communities from urban land — relocating them far from cities, downwind and downstream of industrial zones, with no infrastructure and no recourse.',
    hint: 'Investigate all communities to unlock Wave II.',
    communities: [
      {
        id: 'za_sophiatown_w1',
        communityKey: 'za_soweto',
        name: 'Sophiatown, Johannesburg',
        city: 'Johannesburg, South Africa',
        lat: -26.188, lon: 27.988,
        fact: 'Sophiatown was one of the only urban areas where Black South Africans could own land. In 1955, 60,000 residents were forcibly removed under the Western Areas Removal Scheme. It was bulldozed and rebuilt as a white suburb called Triomf — meaning "Triumph."',
        impact: 'Residents were relocated 19km from the city to a new township: Soweto. They lost their homes, their land ownership rights, and their proximity to economic opportunity. Triomf was renamed Sophiatown again after apartheid — but the community never returned.',
        demo: 'One of the few places Black South Africans could own property before apartheid'
      },
      {
        id: 'za_district_six_w1',
        communityKey: null,
        name: 'District Six, Cape Town',
        city: 'Cape Town, South Africa',
        lat: -33.927, lon: 18.425,
        fact: 'A vibrant, mixed community of 55,000 Coloured and Black residents was forcibly removed under the Group Areas Act and relocated to the Cape Flats — far from the city centre and downwind from industrial zones.',
        impact: 'District Six was bulldozed. The land sat largely vacant for decades as a monument to apartheid\'s destruction. Displaced residents were scattered across the Cape Flats, where they and their descendants still live today.',
        demo: '55,000 residents displaced; Coloured and Black community'
      },
      {
        id: 'za_bantustan_w1',
        communityKey: null,
        name: 'Bantu Homelands, Eastern Cape',
        city: 'Eastern Cape, South Africa',
        lat: -32.296, lon: 26.419,
        fact: 'The Native Land Act confined Black South Africans to 13% of the country\'s land — the worst agricultural land, stripped of mineral rights. Black smallholder farmers were dispossessed and forced into overcrowded, underfunded "homelands."',
        impact: 'The Bantustan system created a captive labour force for white-owned industry. Communities were denied access to economic resources while being required to supply labour for the mines, farms, and factories built on land taken from them.',
        demo: '87% of land allocated to white South Africans; Black majority confined to 13%'
      }
    ]
  },
  {
    id: 'za_buffer_zones',
    wave: 'Wave II',
    title: 'Industrial Buffer Zones & Township Construction',
    years: '1950s – 1980s',
    color: '#1d4ed8',
    description: 'Apartheid planners did not just segregate housing — they used industrial zones as physical buffer zones between Black townships and white suburbs. Townships were deliberately placed downwind and downstream of factories, refineries, and chemical plants. The labour that kept industry running lived beside the pollution industry produced.',
    hint: 'The pattern is forming. Look for familiar names.',
    communities: [
      {
        id: 'za_soweto_w2',
        communityKey: 'za_soweto',
        name: 'Soweto, Johannesburg',
        city: 'Johannesburg, South Africa',
        lat: -26.268, lon: 27.859,
        fact: 'Built as a planned Black township 19km from Johannesburg\'s CBD, Soweto was designed as a labour reservoir. Industrial zones were placed between Soweto and white suburbs as deliberate buffers. Soweto\'s children suffer more asthma and chest conditions than anywhere else in the country.',
        impact: 'Coal stove pollution, proximity to industrial corridors, and no political power to demand cleaner air. Soweto exists as a direct product of forced removal — Sophiatown\'s residents were deposited here and told to rebuild.',
        demo: 'Population ~1.3 million; almost entirely Black African'
      },
      {
        id: 'za_south_durban_w2',
        communityKey: 'za_south_durban',
        name: 'South Durban Township Corridor',
        city: 'Durban, South Africa',
        lat: -29.960, lon: 30.993,
        fact: 'The South Durban Industrial Basin was created in the 1970s to house Black workers as labour for nearby refineries and chemical plants. Townships were deliberately placed downwind and downstream of polluting industries and poorly managed landfills.',
        impact: 'Workers lived metres from the refineries they operated. The pollution they were paid to produce, they were also required to breathe. The South Durban Community Environmental Alliance (SDCEA) was formed to fight back.',
        demo: 'Predominantly Black working-class township corridor; downwind of industry'
      },
      {
        id: 'za_secunda_w2',
        communityKey: null,
        name: 'Secunda Township, Mpumalanga',
        city: 'Mpumalanga, South Africa',
        lat: -26.517, lon: 29.185,
        fact: 'Created in the 1970s to house Black workers for the Sasol chemical corporation, Secunda township placed residents adjacent to one of the most polluting chemical complexes in the southern hemisphere.',
        impact: 'Workers had no political recourse under apartheid. They lived beside Sasol\'s coal-to-liquids plant — at that time the most polluting facility of its kind in the world. Post-apartheid, regulations exist but enforcement remains inadequate.',
        demo: 'Planned Black workers\' township adjacent to Sasol industrial complex'
      }
    ]
  },
  {
    id: 'za_petrochemicals',
    wave: 'Wave III',
    title: 'Petrochemicals, Refineries & Post-Apartheid Neglect',
    years: '1980s – 2000s',
    color: '#dc2626',
    description: 'Apartheid ended in 1994. The pollution did not. Post-apartheid environmental legislation exists on paper but researchers at the University of the Witwatersrand document systematic non-enforcement. The communities that bore industrial burden under apartheid continue to bear it — now without even the clarity of an explicit legal system to fight against.',
    hint: 'Three waves in. The same communities. The architecture holds.',
    communities: [
      {
        id: 'za_south_durban_w3',
        communityKey: 'za_south_durban',
        name: 'South Durban, KwaZulu-Natal',
        city: 'Durban, South Africa',
        lat: -29.955, lon: 30.987,
        fact: 'South Durban is home to two of South Africa\'s four oil refineries and approximately 200 smokestack industries. Academics describe it as one of the most polluted areas in southern Africa. In 2001, a report found leukemia rates in Black Durban communities were 24 times higher than elsewhere.',
        impact: 'The SDCEA has spent decades in legal battles against both private industry and government inaction. Post-apartheid laws exist. Enforcement does not.',
        demo: 'Predominantly Black township corridor; among the most polluted in the southern hemisphere'
      },
      {
        id: 'za_soweto_w3',
        communityKey: 'za_soweto',
        name: 'Soweto, Johannesburg',
        city: 'Johannesburg, South Africa',
        lat: -26.265, lon: 27.861,
        fact: 'Post-apartheid, Soweto\'s coal pollution continues. In 1990, a river near Soweto had mercury levels 1,500 times the EPA\'s toxic threshold. A 2001 study found leukemia rates in Black communities near industrial zones were 24 times the national rate.',
        impact: 'The political system changed. The industrial geography did not. Soweto remains downwind and downstream of the industrial infrastructure built to exploit its residents.',
        demo: 'Same community; same pollution; 30 years after apartheid ended'
      },
      {
        id: 'za_mpumalanga_w3',
        communityKey: null,
        name: 'Mpumalanga Highveld',
        city: 'Mpumalanga, South Africa',
        lat: -26.100, lon: 29.600,
        fact: 'The Mpumalanga Highveld hosts the highest concentration of coal-fired power plants in the southern hemisphere, all sited adjacent to Black townships. The region consistently records some of the worst air quality on earth.',
        impact: 'The state and corporate polluters continue to fail to curb emissions. Post-apartheid South Africa is required to generate power for a modernising economy — and the burden of that generation falls on the same communities it always has.',
        demo: 'Black townships adjacent to largest coal-power cluster in southern hemisphere'
      }
    ]
  },
  {
    id: 'za_mining',
    wave: 'Wave IV',
    title: 'Mining Runoff, Water Crisis & Climate Burden',
    years: '2010s – Now',
    color: '#15803d',
    description: 'Twenty-five years after apartheid, researchers at the University of the Witwatersrand confirm that environmental inequalities have actually increased. "What is over is racialized apartheid. What is really strong in the present is class apartheid." The communities bearing the heaviest climate and industrial burden are the same communities that built South Africa\'s wealth and were denied its benefits.',
    hint: 'The fourth wave. The same communities. The pattern is complete.',
    communities: [
      {
        id: 'za_soweto_w4',
        communityKey: 'za_soweto',
        name: 'Soweto, Johannesburg',
        city: 'Johannesburg, South Africa',
        lat: -26.270, lon: 27.858,
        fact: '25 years after apartheid ended, Soweto still lacks consistent clean water access. Mine runoff from abandoned gold mines — mines that built Johannesburg\'s wealth — poisons local groundwater. The wealth disparity created by apartheid means communities have no resources to challenge the industrial elite.',
        impact: 'Fourth wave. Same community. The residents of Soweto did not choose to be here. They were placed here in 1955. They are still here. And the pollution is still coming.',
        demo: 'Same ZIP codes as Wave I; ~1.3 million residents'
      },
      {
        id: 'za_south_durban_w4',
        communityKey: 'za_south_durban',
        name: 'South Durban, KwaZulu-Natal',
        city: 'Durban, South Africa',
        lat: -29.958, lon: 30.991,
        fact: 'Environmental inequalities in South Durban have actually increased since 1994 according to University of the Witwatersrand researchers. The SDCEA continues to fight a legal system that protects polluters. The refineries remain. The cancer rates remain.',
        impact: 'The SDCEA is one of the most active environmental justice organisations on the continent. It exists because the state will not act. The communities it defends have been fighting the same fight across three generations.',
        demo: 'Same communities; environmental inequalities confirmed to have increased post-1994'
      },
      {
        id: 'za_cape_flats_w4',
        communityKey: null,
        name: 'Cape Flats, Cape Town',
        city: 'Cape Town, South Africa',
        lat: -34.030, lon: 18.617,
        fact: 'The communities forcibly relocated from District Six now face flooding, gang violence, and industrial pollution simultaneously. Climate change disproportionately impacts the Cape Flats — built on low-lying, flood-prone land with no infrastructure, because that is where displaced Black and Coloured communities were sent.',
        impact: 'The forced removal of 1955–65 created the geography of today\'s climate vulnerability. You cannot understand the Cape Flats flood risk without understanding District Six.',
        demo: 'Descendants of forcibly removed District Six community; high flood and pollution risk'
      }
    ]
  }
];

const ZA_RECURRING = [
  {
    key: 'za_soweto',
    name: 'Soweto / Sophiatown, Johannesburg',
    eras: ['za_land_acts', 'za_buffer_zones', 'za_petrochemicals', 'za_mining'],
    summary: 'Sophiatown was bulldozed and its residents sent to Soweto in 1955. That same community has faced industrial buffer zones, coal pollution, mine runoff, and water crisis across four waves — 70 years in the making.'
  },
  {
    key: 'za_south_durban',
    name: 'South Durban, KwaZulu-Natal',
    eras: ['za_buffer_zones', 'za_petrochemicals', 'za_mining'],
    summary: 'Deliberately placed downwind of refineries in the 1970s, South Durban now hosts two oil refineries and 200 smokestack industries. Environmental inequalities have increased since the end of apartheid.'
  }
];

const ZA_QUIZZES = {
  za_land_acts: [
    {
      question: 'The Native Land Act of 1913 divided South Africa\'s land in what ratio between white and Black South Africans?',
      options: [
        '50% white, 50% Black — but with legal restrictions on Black ownership',
        '70% white, 30% Black',
        '87% allocated to white South Africans; 13% to the Black majority',
        'Land was equally distributed based on economic contribution'
      ],
      correct: 2,
      explanation: 'The Native Land Act of 1913 gave 87% of South Africa\'s land to the white minority while confining the Black majority to 13% — on the worst agricultural land, stripped of mineral rights. This Act created the structural poverty that underpinned apartheid\'s entire industrial and environmental system.'
    },
    {
      question: 'Sophiatown was forcibly demolished in 1955 and replaced by a white suburb. What was that suburb named?',
      options: [
        'New Sophiatown, as a gesture of acknowledged heritage',
        'Triomf — meaning "Triumph" in Afrikaans',
        'Westbury, after a British colonial administrator',
        'It was left as vacant land as a public monument to removal'
      ],
      correct: 1,
      explanation: 'The apartheid government named the rebuilt white suburb "Triomf" — Triumph — as an explicit declaration of victory over the Black community it had destroyed. 60,000 residents were sent 19km away to what became Soweto. After apartheid ended, the suburb was renamed Sophiatown. The community did not return.'
    }
  ],
  za_buffer_zones: [
    {
      question: 'Apartheid planners used industrial zones as "buffer zones" between Black townships and white suburbs. What was the primary function of this arrangement?',
      options: [
        'Industrial zones were placed there for logistical efficiency — near railways and ports',
        'They physically separated Black and white residential areas while concentrating pollution burden on Black communities',
        'The zones were originally designed to provide employment near Black townships',
        'Buffer zones were a neutral planning decision unrelated to racial policy'
      ],
      correct: 1,
      explanation: 'Apartheid planning documents confirm that industrial zones were deliberately placed between Black townships and white suburbs — serving two purposes simultaneously: racial separation, and concentration of environmental burden on Black communities with no political recourse. This was not incidental. It was architecture.'
    },
    {
      question: 'Soweto was designed as a "labour reservoir" for Johannesburg. What does this term reveal about its intended function?',
      options: [
        'It was built near Johannesburg\'s water reservoir for infrastructure access',
        'It stored mining equipment and industrial tools for the city\'s workforce',
        'It was designed to house Black workers who would commute to work in the white city and return at night',
        'It was a planned township for skilled professionals of all races'
      ],
      correct: 2,
      explanation: 'A "labour reservoir" is exactly what the name suggests: a holding area for labour. Soweto was designed so that Black workers could serve Johannesburg\'s economy during working hours and return to a township outside city limits at night. They were required for the economy. They were excluded from the city it built.'
    }
  ],
  za_petrochemicals: [
    {
      question: 'Post-apartheid South Africa has environmental protection laws. What do researchers at the University of the Witwatersrand say about how they function in communities like South Durban?',
      options: [
        'The ANC government successfully cleaned up South Durban after 1994',
        'Laws protecting clean air and water exist on paper but are systematically not enforced',
        'The refineries were nationalised and are now community-managed',
        'Foreign companies have been required to pay billions in environmental reparations'
      ],
      correct: 1,
      explanation: 'Post-apartheid South Africa created environmental legislation that, on paper, should protect communities like South Durban. In practice, researchers confirm systematic non-enforcement. The SDCEA — South Durban Community Environmental Alliance — was formed because the state would not act. It continues to fight the same fight, 30 years after apartheid ended.'
    },
    {
      question: 'In 1990, a river near Soweto was tested and found to contain mercury at what level above the EPA\'s toxic threshold?',
      options: [
        '10 times higher',
        '50 times higher',
        '500 times higher',
        '1,500 times higher'
      ],
      correct: 3,
      explanation: 'A 1990 test found mercury levels in a Soweto-adjacent river at 1,500 times the EPA\'s toxic threshold. This was documented. It was not widely reported. The mines that produced this contamination — the gold mines that built Johannesburg\'s wealth — were operated on land taken from the communities now living with the runoff.'
    }
  ],
  za_mining: [
    {
      question: 'Researchers at the University of the Witwatersrand assessed environmental inequality in South Africa since the end of apartheid in 1994. What did they find?',
      options: [
        'Environmental inequality has significantly improved — post-apartheid legislation has been effective',
        'It has stayed roughly the same',
        'Environmental inequalities have actually increased over the past 25 years',
        'Improvement in urban areas, but worsening conditions in rural communities'
      ],
      correct: 2,
      explanation: '"What is over is racialized apartheid. What is really strong in the present is class apartheid." The end of apartheid changed the legal system. It did not change who lives next to the refineries, who drinks the mine runoff, or who bears the cost of the coal plants. The geography of pollution in South Africa reflects the geography of dispossession.'
    },
    {
      question: 'The communities relocated from District Six to the Cape Flats now face which combination of compounding threats?',
      options: [
        'Drought and wildfire risk exclusively, due to Cape Town\'s dry climate',
        'Rising sea levels from Cape Town\'s coastal location',
        'Flooding, gang violence, industrial pollution, and disproportionate climate change impacts',
        'Air pollution exclusively from Cape Town\'s container port'
      ],
      correct: 2,
      explanation: 'The Cape Flats was low-lying, flood-prone, infrastructure-poor land — which is precisely why displaced Black and Coloured communities were sent there in the 1950s–60s. Climate change now makes that land more dangerous. The communities did not choose to be there. The flooding they face is the direct consequence of a forced removal made 70 years ago.'
    }
  ]
};

/* ═══════════════════════════════════════════════════════════
   COUNTRY CONFIGURATION
   ═══════════════════════════════════════════════════════════ */

const COUNTRY_CONFIG = {
  us: {
    code: 'us',
    flag: '🇺🇸',
    name: 'United States',
    tagline: 'Four industrial waves. The same communities. 70 years of documented burden.',
    waves: 4, communities: 14, patterns: 6,
    mapCenter: [38, -96], mapZoom: 4,
    maxScore: 740,
    winCondition: 'us',
    winTitle: 'You\'ve documented the full system.',
    winDesc: 'All six recurring patterns identified across four industrial waves.',
    eras: null, recurring: null, quizzes: null  // set by setCountryData
  },
  uk: {
    code: 'uk',
    flag: '🇬🇧',
    name: 'United Kingdom',
    tagline: 'From industrial zoning to illegal air. A pattern the government measured but did not stop.',
    waves: 3, communities: 9, patterns: 2,
    mapCenter: [52.5, -1.5], mapZoom: 6,
    maxScore: 290,
    winCondition: 'uk',
    winTitle: 'You\'ve named what killed her.',
    winDesc: 'Ella Adoo-Kissi-Debrah\'s story documented. The pattern named.',
    eras: null, recurring: null, quizzes: null
  },
  za: {
    code: 'za',
    flag: '🇿🇦',
    name: 'South Africa',
    tagline: 'Land acts to mining runoff. The architecture of apartheid written in pollution.',
    waves: 4, communities: 12, patterns: 2,
    mapCenter: [-29, 25], mapZoom: 5,
    maxScore: 620,
    winCondition: 'za',
    winTitle: 'You\'ve traced the architecture of apartheid.',
    winDesc: 'Soweto and South Durban — the full industrial corridor revealed.',
    eras: null, recurring: null, quizzes: null
  }
};

/* Active data — reassigned when country is selected */
let ERAS                 = US_ERAS;
let RECURRING_COMMUNITIES = US_RECURRING;
let QUIZZES              = US_QUIZZES;

function setCountryData(code) {
  if (code === 'us') {
    ERAS = US_ERAS; RECURRING_COMMUNITIES = US_RECURRING; QUIZZES = US_QUIZZES;
  } else if (code === 'uk') {
    ERAS = UK_ERAS; RECURRING_COMMUNITIES = UK_RECURRING; QUIZZES = UK_QUIZZES;
  } else if (code === 'za') {
    ERAS = ZA_ERAS; RECURRING_COMMUNITIES = ZA_RECURRING; QUIZZES = ZA_QUIZZES;
  }
}
