const questions = [
  {
    id: 1, type: 'mcq', standard: 'ESR', ref: 'Front page',
    question: 'The Electricity Act of 1992 is administered by:',
    options: ['EWRB', 'WorkSafe', 'MBIE — Ministry of Business, Innovation and Employment', 'Standards New Zealand'],
    answer: 2
  },
  {
    id: 2, type: 'mcq', standard: 'ESR', ref: 'Section 16 (4)(b)',
    question: 'Every accident that is caused wholly or partly by, or involves or affects electricity, and results in serious harm to any person, or damage to any place, WorkSafe shall be notified by the APPROPRIATE PERSON. With reference to the Electricity Act 1992, who is the appropriate person?',
    options: [
      'If the accident is discovered by any person who is authorised to do prescribed electrical work under part 10, that person.',
      'The person investigating the accident pursuant to the Health and Safety at Works Act 2015.',
      'The responding emergency service.',
      'The Secretary'
    ],
    answer: 0
  },
  {
    id: 3, type: 'mcq', standard: 'ESR', ref: 'Section 104',
    question: 'With reference to the Electricity Act 1992, what is the maximum length a practising licence can be issued for?',
    options: ['2 Years', '1 Year', '6 months', '5 Years'],
    answer: 3
  },
  {
    id: 4, type: 'fill', standard: 'ESR', ref: 'Section 16',
    question: 'With reference to the Electricity Act 1992, complete the following sentence. Accidents that result in ________ or ________ that renders that place or that part of that place unusable for any purpose shall be notified to WorkSafe.',
    answer: 'serious harm to any person / damage to any place or part of a place',
    hint: 'Two consequences that trigger notification'
  },
  {
    id: 5, type: 'fill', standard: 'ESR', ref: 'Section 2',
    question: "With reference to the Electricity Act 1992, complete the following sentence. 'Supervision', in relation to any work, means that the work is undertaken under such control and direction of a ________ to do the work.",
    answer: 'person authorised under this Act',
    hint: 'What type of person must supervise the work?'
  },
  {
    id: 6, type: 'fill', standard: 'ESR', ref: 'Section highlighted',
    question: 'With reference to the Electricity Act 1992, complete the following sentence. This section does not prevent the connection to any power supply if that connection or supply is solely for the purposes of carrying out ________, ________ or ________ required by any regulations.',
    answer: 'Testing / certification / inspection',
    hint: 'Three permitted purposes for connection'
  },
  {
    id: 7, type: 'calc', topic: 'volt_drop', standard: 'AS3008', ref: 'Table C7',
    question: 'Use the SIMPLIFIED volt drop method in AS/NZS 3000 to calculate the maximum length (to 1 decimal place) a submain cable can run to a shed.\n\nCable: 6mm² 2C+E TPS\nMaximum demand: 23A\nAllowed voltage drop: 2.0%',
    answer: '26.6m',
    workings: 'From Table C7, VD factor for 6mm² single phase = 306 mV/A·m at 1%\nMax length = (factor × %VD) / current\n= (306 × 2.0) / 23 = 612 / 23 = 26.6m',
    hint: 'Use Table C7 VD factor for 6mm² single phase = 306. Formula: (factor × %VD) / Amps'
  },
  {
    id: 8, type: 'calc', topic: 'volt_drop', standard: 'AS3008', ref: 'Table C7',
    question: 'Use the SIMPLIFIED volt drop method in AS/NZS 3000 to calculate which cable will be suitable for a 3-phase main.\n\nLoad: 80kW balanced\nDistance: 35m\nMax voltage drop: 2.5%',
    answer: '16mm²',
    workings: 'Step 1: Current = 80,000 / (1.732 × 400) = 115.47A\nStep 2: Cable factor = (I × L) / %VD = (115.47 × 35) / 2.5 = 1616.6\nFrom Table C7, next size up ≥ 1617 → 16mm²',
    hint: 'I = P / (√3 × V), then cable factor = (I × L) / %VD, match to Table C7'
  },
  {
    id: 9, type: 'mcq', standard: 'ESR', ref: 'Regulation 2',
    question: 'According to the Electricity (Safety) Regulations 2010, is a neutral conductor considered to be a live conductor?',
    options: ['No', 'Yes', 'If bonded', 'MEN'],
    answer: 1
  },
  {
    id: 10, type: 'mcq', standard: 'ESR', ref: 'Regulation 2',
    question: 'According to the Electricity (Safety) Regulations 2010, define high voltage.',
    options: ['Over 1000V ac or 1500V dc', 'Over 1000V ac to 11kV ac', 'Greater than 55V ac and 120V dc', 'Greater than 11kV'],
    answer: 0
  },
  {
    id: 11, type: 'fill', standard: 'ESR', ref: 'ER 63 (4)(5)',
    question: 'Electrical Installations must be designed, constructed and operated so that the voltage drop is not more than ________ between the point of supply and any socket outlet within an electrical installation operating at standard low voltage.',
    answer: '5% under maximum load conditions',
    hint: 'Percentage and condition'
  },
  {
    id: 12, type: 'fill', standard: 'ESR', ref: 'ESR',
    question: 'Refer to the Electricity (Safety) Regulations 2010 and state the minimum and maximum voltage for a domestic property feed at standard low voltage at the point of supply.',
    answer: 'Minimum 216.2V / Maximum 243.8V',
    hint: 'State both min and max values in volts'
  },
  {
    id: 13, type: 'mcq', standard: 'AS3000', ref: 'C.5.11.5 Note 2',
    question: 'Refer to AS/NZS 3000 — which standard provides guidance on the effects of electrical interference to circuits?',
    options: ['AS/NZS 3760', 'AS/NZS 3080', 'AS/NZS 3098', 'AS/NZS 3800'],
    answer: 1
  },
  {
    id: 14, type: 'mcq', standard: 'AS3000', ref: '1.4.83',
    question: 'According to AS/NZS 3000 what does the term SELV mean?',
    options: ['Separated Extra Low Voltage', 'Special Extra Low Voltage', 'Single Extra Low Voltage', 'Specified Extra Low Voltage'],
    answer: 0
  },
  {
    id: 15, type: 'mcq', standard: 'AS3000', ref: 'Table 2.6',
    question: 'AS/NZS 3000 details DISCONNECTION TIMES for a 230/400V supply system. Select the maximum disconnection time for a final subcircuit that supplies hand-held class 1 equipment.',
    options: ['300 ms', '0.4s', '5s', '40ms'],
    answer: 1
  },
  {
    id: 16, type: 'mcq', standard: 'AS3000', ref: 'AS3000',
    question: 'With reference to AS/NZS 3000 what is the minimum size for an aluminium aerial wiring conductor?',
    options: ['6mm²', '10mm²', '16mm²', '25mm²'],
    answer: 2
  },
  {
    id: 17, type: 'mcq', standard: 'AS3000', ref: '3.6.2 Exception 1',
    question: 'Refer to AS/NZS 3000 — where is it permissible to use half the current rating of the protective device as a value for your voltage drop calculation?',
    options: [
      'At the start of sub-circuits with the load distributed over the whole length of the circuit.',
      'No sub-circuits with the load distributed over the whole length of the circuit.',
      'All sub-circuits with the load distributed over the whole length of the circuit.',
      'Final sub-circuits with the load distributed over the whole length of the circuit.'
    ],
    answer: 3
  },
  {
    id: 18, type: 'fill', standard: 'AS3000', ref: '3.9.7.4 Exception 2',
    question: 'At what length (to 2 decimal places) would a flexible cord be deemed installation wiring?',
    answer: '2.5m',
    hint: 'State the length in metres'
  },
  {
    id: 19, type: 'mcq', standard: 'AS3000', ref: '2.5.3, 2.4.2',
    question: 'With reference to AS/NZS 3000, what device shall NOT be used for automatic disconnection of supply?',
    options: ['Enclosed fuse link', 'Moulded case circuit breakers', 'Semi-enclosed rewireable fuses', 'Miniature overcurrent circuit breakers'],
    answer: 2
  },
  {
    id: 20, type: 'mcq', standard: 'AS3000', ref: '2.6.2.4 (b)',
    question: 'Refer to AS/NZS 3000 and state the maximum number of sub-circuits permitted to be protected by an RCD in a residential installation.',
    options: ['1', '2', '3', '4'],
    answer: 2
  },
  {
    id: 21, type: 'mcq', standard: 'AS3000', ref: '2.10.10.5 (b)(v)',
    question: 'According to AS/NZS 3000 what is the minimum distance of unimpeded space around switchboards?',
    options: ['0.75m with doors in any position', '0.6m with doors in any position', '0.6m with doors closed', '0.75m with doors open'],
    answer: 1
  },
  {
    id: 22, type: 'mcq', standard: 'AS3000', ref: '4.15.3.1',
    question: 'A 400V capacitor has been disconnected from the supply for 60 seconds. What is the maximum permissible voltage at the capacitor terminals?',
    options: ['50V', '100V', '200V', '40V'],
    answer: 0
  },
  {
    id: 23, type: 'mcq', standard: 'AS3000', ref: '4.15.3.1',
    question: 'According to AS/NZS 3000 should a 1µF capacitor be provided with a discharge path?',
    options: ['Yes', 'No', 'Not specified'],
    answer: 0
  },
  {
    id: 24, type: 'mcq', standard: 'AS3000', ref: '4.13.3.1',
    question: 'According to AS/NZS 3000 does an attended electric motor which has a rating of 1500W require an overtemperature protective device?',
    options: [
      'Yes, all motors require overtemperature protective device',
      'No, must be greater than 2250W',
      'Only requires a HRC fuse protection',
      'No only if it is a three phase motor'
    ],
    answer: 1
  },
  {
    id: 25, type: 'fill', standard: 'AS3000', ref: 'AS3000',
    question: 'A single-phase, low voltage electric under-bench oven with separate hob is fixed into a kitchen unit. Refer to AS/NZS 3000:\n(a) Can you directly connect the wall oven to the electrical supply without a suitable plug and socket?\n(b) Are you required to install a functional switch within two meters for the oven?',
    answer: '(a) YES (b) NO',
    hint: 'Answer yes or no for each part'
  },
  {
    id: 26, type: 'mcq', standard: 'AS3000', ref: 'AS3000',
    question: 'According to AS/NZS 3000 what is the maximum voltage drop allowed on extra low voltage circuits?',
    options: ['5% of nominal value', '6% of nominal value', '10% of nominal value', '15% of nominal value'],
    answer: 2
  },
  {
    id: 27, type: 'mcq', standard: 'AS3000', ref: '7.5.1 (b)',
    question: 'X-ray equipment must comply with AS/NZS 3000 Section 7 HIGH VOLTAGE electrical installations. True or False?',
    options: ['True', 'False'],
    answer: 1
  },
  {
    id: 28, type: 'mcq', standard: 'AS3000', ref: '7.2.1.3 (a)',
    question: 'Refer to AS/NZS 3000, Section 7 and select which of the following is deemed to be EVACUATION EQUIPMENT:',
    options: [
      'Sound systems and intercom systems for emergency purposes.',
      'Pumps for automatic sprinkler systems, water spray or deluge systems and similar fire extinguishing systems.',
      'Air-handling systems intended to exhaust and control the spread of fire.',
      'Lifts.'
    ],
    answer: 0
  },
  {
    id: 29, type: 'calc', topic: 'max_demand', standard: 'AS3000', ref: 'Appendix C',
    question: 'AS/NZS 3000:2007 Appendix C — Calculate the maximum demand in amps of a single 230V domestic installation with:\n• 30 × 50W recessed luminaires\n• 25 × 8W LED lights\n• 4 × 75W fluorescent lights\n• 10 × 150W outdoor flood lighting\n• 16 × 10A double socket outlets\n• 10 × 10A single socket outlets\n• 1 × 4kW gas/electric range\n• 1 × 3kW water storage heater\n• 1 × 6kW sauna',
    answer: '73.2A',
    workings: 'Group A(i) indoor lighting: (30×50 + 25×8 + 4×75) = 1800W → 1800/230 = 7.83A × 0.9 = 7A\nGroup A(ii) outdoor: 10×150 = 1500W → 1500/230 = 6.52A × 0.75 = 4.89A\nGroup B sockets: 42 outlets → 10A + (32 × 0.4A) = 22.8A → 20A\nGroup C range: 4000/230 = 17.39A × 0.5 = 8.7A\nGroup D sauna: 6000/230 = 26.09A × 0.75 = 19.57A\nGroup F water heater: 3000/230 = 13.04A\nTotal = 7 + 4.89 + 20 + 8.7 + 19.57 + 13.04 = 73.2A',
    hint: 'Apply Appendix C demand factors to each group'
  },
  {
    id: 30, type: 'mcq', standard: 'ECP', ref: 'ECP34',
    question: 'State the minimum vertical distance from the ground for the last span of a 230V neutral screen service main connected to a building in an area not used by vehicular traffic.',
    options: ['4.0m', '2.7m', '5.5m', '3.0m'],
    answer: 1
  },
  {
    id: 31, type: 'mcq', standard: 'ECP', ref: 'ECP34.3.2',
    question: 'State the minimum safe distance that insulated conductors can be above the water level of any swimming pool.',
    options: ['3.0m', 'Not allowed.', '2.7m', '5.0m'],
    answer: 3
  },
  {
    id: 32, type: 'fill', standard: 'ECP', ref: 'ECP34.4.4.2',
    question: 'State the information that must be on the notices when overhead cables are installed over a boat ramp.',
    answer: 'Warning of the conductors / The conductors height and voltage / Information must be on both sides of the ramp',
    hint: 'Three pieces of information required'
  },
  {
    id: 33, type: 'fill', standard: 'ECP', ref: 'ECP34 Table 4',
    question: 'State the minimum vertical distance that must be maintained between the road and the distribution line conductors when a three phase 400V distribution line crosses a road used by private vehicles.',
    answer: '5.5m',
    hint: 'State the distance in metres'
  },
  {
    id: 34, type: 'fill', standard: 'ECP', ref: 'ECP34 5.2.1',
    question: 'State the closest distance that either a crane or hydraulic work platform can be manoeuvred near a live 11kV overhead line without written consent.',
    answer: '4.0m',
    hint: 'State the distance in metres'
  },
  {
    id: 35, type: 'fill', standard: 'ECP', ref: 'ECP34 2.2.1 (a)',
    question: 'Prior written consent from pole ________ required for excavation or interference with any land at a greater depth than ________ within 2.2m of the pole or stay wire of an overhead electric line.',
    answer: 'owner / 300mm',
    hint: 'Who must give consent, and what is the depth limit?'
  },
  {
    id: 36, type: 'mcq', standard: 'AS3000', ref: '6.5.10 Note 5',
    question: 'Select the minimum DEGREE of PROTECTION required for a LUMINAIRE installed in zone 2 of a swimming pool:',
    options: ['IPX8', 'IPX4', 'IPX5', 'IPX6'],
    answer: 1
  },
  {
    id: 37, type: 'multi', standard: 'AS3000', ref: '6.3.3.3',
    question: 'Select TWO protective measures to limit a VERY LOW VOLTAGE hazard to persons IMMERSED in pool water:',
    options: [
      'Switches and other accessories shall not be installed in Zone 0',
      'Location of electrical equipment at a distance from the pool with all plumbing connections being made of non-conductive materials',
      'Wiring systems shall be installed so as to prevent entry of moisture to any connection',
      'Each luminaire supplied at nominal voltage not exceeding 12V a.c. or 30V ripple free d.c.',
      'Metal grids or barriers inserted in any plumbing connections between the electrical equipment and pool and connected to the equipotential bonding system.',
      'Protection by means of placing out of reach'
    ],
    answer: [1, 4]
  },
  {
    id: 38, type: 'mcq', standard: 'AS3000', ref: '6.6.4.4.2 (b)',
    question: 'REFRIGERATION ROOMS: lamp holders suspended on a flexible pendant must be a specified height above a floor or ground. Select the correct suspended height from AS/NZS 3000 section 6.',
    options: ['2.25m', '3m', '2m', '2.50m'],
    answer: 3
  },
  {
    id: 39, type: 'mcq', standard: 'AS3000', ref: 'Table 5.1',
    question: 'According to AS/NZS 3000 an installation with 35mm² copper mains requires a main earthing conductor of what size?',
    options: ['6mm²', '10mm²', '16mm²', '35mm²'],
    answer: 1
  },
  {
    id: 40, type: 'mcq', standard: 'AS3000', ref: 'AS3000',
    question: 'A vertical type of earth electrode must be driven to what minimum depth?',
    options: ['0.8m (NZ)', '1.0m (NZ)', '1.8m (NZ)', '2.8m (NZ)'],
    answer: 2
  },
  {
    id: 41, type: 'fill', standard: 'AS3000', ref: '5.4',
    question: 'Equipotential bonding is intended to ________ of voltage differences between exposed conductive parts of electrical equipment and extraneous conductive parts.',
    answer: 'Minimise the risk associated with the occurrence',
    hint: 'What is the purpose of equipotential bonding?'
  },
  {
    id: 42, type: 'mcq', standard: 'AS3000', ref: '3.3.6.2 (m) 1.0',
    question: 'What is the minimum value of insulation resistance allowed on sheathed heating elements?',
    options: ['0.01MΩ (10,000Ω)', '0.5MΩ', '1MΩ', '100MΩ'],
    answer: 0
  },
  {
    id: 43, type: 'fill', standard: 'AS3000', ref: '8.3.7.1',
    question: 'Polarity testing is necessary to ensure that ________ arises from the incorrect connection of active, neutral, and earthing conductors.',
    answer: 'Shock Hazard',
    hint: 'What hazard are we preventing?'
  },
  {
    id: 44, type: 'mcq', standard: 'AS3000', ref: '8.3.1',
    question: 'Refer to AS/NZS 3000 section 8 and select which standard sets out common test methods required to TEST that a low voltage electrical installation complies with this standard.',
    options: ['AS/NZS 3019', 'AS/NZS 3017', 'AS/NZS 3820', 'AS/NZS 3018'],
    answer: 1
  },
  {
    id: 45, type: 'fill', standard: 'AS3000', ref: '8.3.8.2',
    question: 'Complete the following statement regarding the results of tests for correct circuit connections: ________ that the active, neutral and protective earthing conductors of each circuit are correctly connected so that there is no ________ circuit, between conductors, and ________ of conductors that could result in the earthing system and any exposed ________ parts becoming energized and interconnections between different ________ circuits.',
    answer: 'Proof that / short / transposition / conductive / circuits',
    hint: 'Five blanks: first word, type of fault, error type, type of parts, type of interconnection'
  },
  {
    id: 46, type: 'mcq', standard: 'AS3000', ref: 'Table 8.1',
    question: 'Refer to AS/NZS 3000 and select the maximum earth fault loop impedance for a circuit protected by a Type B 25A circuit-breaker.',
    options: ['2.88', '2.30', '1.23', '1.64'],
    answer: 1
  },
  {
    id: 47, type: 'fill', standard: 'ESR', ref: 'Regulation 78 (2)(b)',
    question: 'According to the Electricity (Safety) Regulations 2010, a warrant of electrical fitness for a mobile medical facility must be issued in accordance with which Standard?',
    answer: 'NZS 6115',
    hint: 'State the standard number'
  },
  {
    id: 48, type: 'mcq', standard: 'ESR', ref: 'Regulation 78 (3)(b)',
    question: 'According to the Electricity (Safety) Regulations 2010 how long is a warrant of electrical fitness for a pleasure vessel valid for?',
    options: ['1 Year', '2 Years', '6 Months', '4 Years'],
    answer: 3
  },
  {
    id: 49, type: 'fill', standard: 'ESR', ref: 'Regulation 4',
    question: 'In relation to conductors and other fittings, means that the conductors or fittings are ________ with insulation in such a manner that a person may safely handle them when they are ________.',
    answer: 'covered / live',
    hint: 'Two words describing the state of the conductor'
  },
  {
    id: 50, type: 'mcq', standard: 'ESR', ref: 'Regulation 90 (2)(iii)',
    question: 'Electricity (Safety) Regulations 2010 states a person who has done prescribed electrical work on a low or extra-low voltage appliance, must test and confirm it is electrically safe. This is done in accordance with which document?',
    options: ['AS/NZS 3551', 'AS/NZS 5762', 'AS/NZS 3019', 'ECP 50'],
    answer: 1
  },
  {
    id: 51, type: 'mcq', standard: 'AS3000', ref: 'AS3000',
    question: 'If screw-in fuse carriers are to be used, which contact does AS/NZS 3000 state should be on the supply side of the fuse base?',
    options: ['The centre contact', 'The back contact', 'The front contact', 'All the above'],
    answer: 0
  },
  {
    id: 52, type: 'mcq', standard: 'AS3000', ref: 'AS3000',
    question: 'According to AS/NZS 3000 what type of RCD is used to protect against the initiation of fire?',
    options: ['Type A', 'Type F', 'Type S', 'Type AC'],
    answer: 2
  },
  {
    id: 53, type: 'fill', standard: 'AS3000', ref: 'AS3000',
    question: 'According to AS/NZS 3000 a home medical electrical equipment installation shall be protected by a ________ RCD.',
    answer: 'Type I 10mA',
    hint: 'State the RCD type and trip current'
  },
  {
    id: 54, type: 'fill', standard: 'AS3000', ref: '2.9.7 Note 3',
    question: 'According to AS/NZS 3000, wiring systems entering a switchboard should pass through openings that provide a close fit. What dimensions constitute a close fit?',
    answer: '5mm',
    hint: 'State the maximum gap in mm'
  },
  {
    id: 55, type: 'mcq', standard: 'AS3000', ref: '2.3.2.1 (b)(i)',
    question: 'AS/NZS 3000 has requirements for the isolation of conductors in AC systems. Select the answer that does NOT allow a conductor to be switched:',
    options: [
      'Active conductors.',
      'No switch or circuit breaker shall be inserted in the neutral conductor of consumer mains.',
      'Where an item of switchgear is required to disconnect all live conductors of a circuit, the neutral conductor cannot be disconnected without the active conductors also being disconnected.',
      'A switch in the control circuit of a fire pump shall operate in the neutral conductor in accordance with clause 7.2.9.4.'
    ],
    answer: 1
  },
  {
    id: 56, type: 'multi', standard: 'AS3000', ref: '5.3.9.1.2',
    question: 'Refer to AS/NZS 3000:2007 and state requirements for the use of other materials (not copper or aluminium) as earthing conductors. Select TWO:',
    options: [
      'The resistance shall not be greater than that of an aluminium conductor.',
      'The resistance shall not be greater than that of a copper conductor.',
      'Corrosion resistance shall not be inferior to other materials suitable for the purpose',
      'Shall not be installed in damp situations.'
    ],
    answer: [1, 2]
  },
  {
    id: 57, type: 'fill', standard: 'AS3000', ref: '5.5.4',
    question: 'Functional earthing conductors provided solely to ensure ________ of the electrical equipment or to permit reliable and proper ________ of electrical installations, ________ with requirements for main and protective earthing conductors.',
    answer: 'correct / operation / need not comply',
    hint: 'Three blanks: purpose 1, purpose 2, compliance statement'
  },
  {
    id: 58, type: 'mcq', standard: 'AS3000', ref: '5.7.2',
    question: 'According to AS/NZS 3000, what does IEC 60364 describe the MEN system as?',
    options: ['TT', 'TN-C', 'TN-C-S', 'TN-S'],
    answer: 2
  },
  {
    id: 59, type: 'mcq', standard: 'AS3000', ref: '6.2.4.1(a)',
    question: 'A bathroom in a domestic electrical installation has been wired. State the minimum degree of protection for a luminaire installed in Zone 0 of the bathroom.',
    options: ['IPX7', 'IP68', 'IPX4', 'IPX8'],
    answer: 0
  },
  {
    id: 60, type: 'mcq', standard: 'AS3000', ref: '6.5.4.1',
    question: 'A sauna in a domestic electrical installation has been wired. State the minimum degree of protection for electrical equipment installed within the sauna room.',
    options: ['IPX4B or IP24', 'IPX5', 'IPX7', 'IP44A or IPX5'],
    answer: 0
  },
  {
    id: 61, type: 'fill', standard: 'AS3000', ref: '6.2.3.1(c)',
    question: 'Refer to AS/NZS 3000 Section 6 — complete the sentence about Zone one of a shower. A barrier of a height at which the shower connection is made to the fixed plumbing, or ________, whichever is greater, may be used to reduce the 1.2m dimension in item ________.',
    answer: '1.8m / (c)(ii)',
    hint: 'A height and a clause reference'
  },
  {
    id: 62, type: 'mcq', standard: 'AS3000', ref: 'Table 4.1',
    question: 'Refer to AS/NZS 3000 section 4 and select the maximum temperature limit for accessible metallic surface HAND-HELD means of operation (ambient 30°C):',
    options: ['70°C', '65°C', '55°C', '80°C'],
    answer: 2
  },
  {
    id: 63, type: 'multi', standard: 'AS3000', ref: '4.4.1.4 (c)(b)',
    question: 'Refer to AS/NZS 3000 section 4 and select which TWO standards that SOCKET-OUTLETS shall comply with:',
    options: ['AS/NZS 3112', 'AS/NZS 3010', 'AS/NZS 3004.1', 'AS/NZS 3003', 'IEC 60309'],
    answer: [0, 4]
  },
  {
    id: 64, type: 'mcq', standard: 'AS3000', ref: 'Table 4.2',
    question: 'Refer to AS/NZS 3000:2007 and state the minimum distance of a 200W lamp from flammable materials.',
    options: ['600mm', '200mm', '100mm', '1000mm'],
    answer: 3
  },
  {
    id: 65, type: 'mcq', standard: 'AS3000', ref: '1.1.5.7 (c)',
    question: 'AS/NZS 3000 allows SELV systems to provide both BASIC and FAULT protection. Select ONE answer that provides both basic and fault protection that meets the required conditions:',
    options: [
      'The source supplying an SELV shall be a safety isolating transformer complying with AS/NZS 61558.',
      'Live parts PELV circuits shall be protected from direct contact by barriers or insulation, unless voltage does not exceed 25V a.c. or 60V ripple free d.c. in dry areas.',
      'SELV circuits shall not be connected to earth.',
      'Live parts of SELV shall not be connected to earth or to protective earth conductors that are part of other circuits or to other live parts.'
    ],
    answer: 3
  },
  {
    id: 66, type: 'multi', standard: 'AS3000', ref: 'Section 1.3.5.6.3 (m)',
    question: 'Refer to AS/NZS 3000 Section 1 and select TWO standards where RCDs are required to be installed for additional protection:',
    options: ['AS/NZS 4249', 'AS/NZS 2053', 'AS/NZS 3008.1.2', 'AS/NZS 3019', 'AS/NZS 3112', 'AS/NZS 3012'],
    answer: [0, 5]
  },
  {
    id: 67, type: 'multi', standard: 'ESR', ref: 'Schedule 1',
    question: 'Refer to Electricity (Safety) Regulations 2010. Identify TWO types of electrical work that are Prescribed Electrical Work:',
    options: [
      'permanently removing, dismantling works or installation permanently disconnected from a power supply',
      'operating works, installations, or appliances, including the loading, removal, or replacement of fuse links',
      'rewinding coils and armatures',
      'the maintenance of conductors',
      'the installation, connection, or maintenance of conductors used in works or installations'
    ],
    answer: [3, 4]
  },
  {
    id: 68, type: 'mcq', standard: 'ESR', ref: 'Regulation 74 (2)',
    question: 'According to the Electricity (Safety) Regulations 2010 when an installation has been isolated for more than 6 months you need to give or sight a certificate from which standard before the supply is restored?',
    options: ['AS/NZS 3004', 'AS/NZS 3013', 'AS/NZS 3019', 'AS/NZS 3017'],
    answer: 2
  },
  {
    id: 69, type: 'mcq', standard: 'AS3000', ref: 'Schedule 2',
    question: 'If you were to install a Photovoltaic array system which standard would you refer to for the installation?',
    options: ['AS/NZS 5033', 'NZS 5033', 'AS/NZS 3010', 'AS/NZS 4777.1'],
    answer: 0
  },
  {
    id: 70, type: 'mcq', standard: 'AS3000', ref: 'AS3000',
    question: 'In a main switchboard with safety services installed what is the maximum number of main switches that can be installed according to AS/NZS 3000?',
    options: ['1', 'No Limit', '2', 'One per safety service'],
    answer: 1
  },
  {
    id: 71, type: 'mcq', standard: 'AS3000', ref: 'AS3000',
    question: 'According to AS/NZS 3000 what additional standard shall engine-driven generator sets comply with?',
    options: ['NZS 3010', 'AS 3011', 'AS/NZS 3010', 'AS 4777'],
    answer: 2
  },
  {
    id: 72, type: 'fill', standard: 'AS3000', ref: 'AS3000 7.7.2.1',
    question: 'Refer to AS/NZS 3000 and complete the following sentences. The responsibility for classification of a hazardous area rests with the ________ contained in AS/NZS ________. The requirements are for ________ for gas and vapour and AS/NZS 7.7.2.1 for ________.',
    answer: 'person or parties in control / 60079.10.1 / combustible dust',
    hint: 'Who is responsible, the standard number, and the type of hazard'
  }
];

module.exports = questions;
