// OLYMPUS ACADEMY - Complete Divine Learning Platform
console.log('🏛️ OLYMPUS ACADEMY Initializing...');

// Complete Enhanced Curriculum Database
const DIVINE_DATA = {
    subjects: {
        math: {
            name: 'IGCSE Mathematics',
            category: 'IGCSE',
            chapters: {
                'Number Systems': {
                    content: 'Mathematics is the study of numbers, quantity, structure, space, and change. Integers include all whole numbers and their negatives.',
                    videos: [
                        { id: 'dQw4w9WgXcQ', title: 'Number Systems Basics', duration: '12:34' },
                        { id: 'NybHckSEQBI', title: 'Integers and Rationals', duration: '15:22' },
                        { id: 'abc123def', title: 'Real Numbers Explained', duration: '18:45' },
                        { id: 'xyz789ghi', title: 'Number Theory Fundamentals', duration: '22:10' }
                    ],
                    flashcards: [
                        { front: 'What is an integer?', back: 'A whole number that can be positive, negative, or zero' },
                        { front: 'What is a rational number?', back: 'A number that can be expressed as a fraction a/b where b ≠ 0' },
                        { front: 'Give an example of an irrational number', back: '√2, π, or √3 - numbers that cannot be expressed as fractions' }
                    ],
                    quiz: [
                        { question: 'Which is a rational number?', options: ['√2', '3/4', 'π', '√5'], correct: 1, explanation: '3/4 can be expressed as a fraction' },
                        { question: 'What type of number is -7?', options: ['Natural', 'Integer', 'Irrational', 'Complex'], correct: 1, explanation: '-7 is a negative whole number' }
                    ]
                },
                'Algebra': {
                    content: 'Algebra uses letters and symbols to represent numbers and quantities in formulas and equations.',
                    videos: [
                        { id: 'Mh5LY4Mz15o', title: 'Algebra Fundamentals', duration: '18:30' },
                        { id: 'alg456def', title: 'Quadratic Equations', duration: '25:15' },
                        { id: 'alg789ghi', title: 'Simultaneous Equations', duration: '20:40' }
                    ],
                    flashcards: [
                        { front: 'What is the quadratic formula?', back: 'x = (-b ± √(b²-4ac)) / 2a' },
                        { front: 'What is a variable?', back: 'A symbol that represents an unknown number' }
                    ],
                    quiz: [
                        { question: 'What is the value of x in 2x + 6 = 14?', options: ['2', '4', '6', '8'], correct: 1, explanation: '2x = 8, so x = 4' }
                    ]
                }
            }
        },
        biology: {
            name: 'IGCSE Biology',
            category: 'IGCSE',
            chapters: {
                'Cell Structure': {
                    content: 'All living organisms are made up of one or more cells. The cell is the basic unit of life.',
                    videos: [
                        { id: 'Hmwvj9X4GNY', title: 'Cell Structure Overview', duration: '14:20' },
                        { id: 'uBGl2BujkPQ', title: 'Prokaryotic vs Eukaryotic', duration: '11:15' },
                        { id: 'bio123abc', title: 'Cell Membrane Transport', duration: '16:30' },
                        { id: 'bio456def', title: 'Organelles and Functions', duration: '19:25' }
                    ],
                    flashcards: [
                        { front: 'What is the cell theory?', back: 'All living things are made of cells, cells are the basic unit of life' },
                        { front: 'What is the function of mitochondria?', back: 'Powerhouse of the cell - produces ATP energy' },
                        { front: 'Difference between plant and animal cells?', back: 'Plant cells have cell wall, chloroplasts, and large vacuole' }
                    ],
                    quiz: [
                        { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi'], correct: 1, explanation: 'Mitochondria produces ATP energy for the cell' },
                        { question: 'What controls cell activities?', options: ['Cytoplasm', 'Nucleus', 'Membrane', 'Vacuole'], correct: 1, explanation: 'The nucleus controls all cellular activities' }
                    ]
                },
                'Genetics': {
                    content: 'Genetics is the study of heredity and the variation of inherited characteristics.',
                    videos: [
                        { id: 'QtCz0pwDH7E', title: 'Genetics Basics', duration: '19:10' },
                        { id: 'gen123abc', title: 'DNA Replication', duration: '22:35' },
                        { id: 'gen456def', title: 'Protein Synthesis', duration: '18:50' }
                    ],
                    flashcards: [
                        { front: 'What is DNA?', back: 'Deoxyribonucleic acid - carries genetic information' },
                        { front: 'What is a gene?', back: 'A section of DNA that codes for a specific trait' }
                    ],
                    quiz: [
                        { question: 'What is DNA?', options: ['A protein', 'A carbohydrate', 'Genetic material', 'A vitamin'], correct: 2, explanation: 'DNA carries genetic information' }
                    ]
                }
            }
        },
        chemistry: {
            name: 'IGCSE Chemistry',
            category: 'IGCSE',
            chapters: {
                'Atomic Structure': {
                    content: 'All matter is made up of atoms. An atom consists of a nucleus with protons and neutrons, surrounded by electrons.',
                    videos: [
                        { id: 'FSyAehMdpyI', title: 'Atomic Structure Basics', duration: '13:45' },
                        { id: 'QtCz0pwDH7E', title: 'Electron Configuration', duration: '17:20' },
                        { id: 'chem123abc', title: 'Periodic Table Trends', duration: '21:15' },
                        { id: 'chem456def', title: 'Chemical Bonding', duration: '24:30' }
                    ],
                    flashcards: [
                        { front: 'What is atomic number?', back: 'The number of protons in an atom\'s nucleus' },
                        { front: 'What are isotopes?', back: 'Atoms of same element with different numbers of neutrons' },
                        { front: 'Where are electrons located?', back: 'In electron shells around the nucleus' }
                    ],
                    quiz: [
                        { question: 'What determines element identity?', options: ['Neutrons', 'Protons', 'Electrons', 'Mass'], correct: 1, explanation: 'Number of protons determines the element' },
                        { question: 'What are isotopes?', options: ['Different elements', 'Same protons, different neutrons', 'Same electrons', 'Different atoms'], correct: 1, explanation: 'Isotopes have same protons but different neutrons' }
                    ]
                }
            }
        },
        physics: {
            name: 'IGCSE Physics',
            category: 'IGCSE',
            chapters: {
                'Motion and Forces': {
                    content: 'Motion is the change in position of an object with respect to time. Velocity is speed in a given direction.',
                    videos: [
                        { id: 'ZM8ECpBuQYE', title: 'Motion and Forces Intro', duration: '15:30' },
                        { id: 'Rd8vDVUpK8M', title: 'Newton\'s Laws of Motion', duration: '20:15' },
                        { id: 'phys123abc', title: 'Energy and Work', duration: '18:45' },
                        { id: 'phys456def', title: 'Momentum and Collisions', duration: '22:20' }
                    ],
                    flashcards: [
                        { front: 'Difference between speed and velocity?', back: 'Speed is scalar, velocity is vector (has direction)' },
                        { front: 'What is Newton\'s second law?', back: 'Force equals mass times acceleration (F = ma)' },
                        { front: 'What is acceleration?', back: 'The rate of change of velocity' }
                    ],
                    quiz: [
                        { question: 'Car travels 100m in 10s, what is the speed?', options: ['10 m/s', '1000 m/s', '0.1 m/s', '100 m/s'], correct: 0, explanation: 'Speed = Distance / Time = 100m / 10s = 10 m/s' },
                        { question: 'What is velocity?', options: ['Speed only', 'Speed with direction', 'Distance only', 'Time only'], correct: 1, explanation: 'Velocity is a vector quantity' }
                    ]
                }
            }
        },
        english: {
            name: 'IGCSE English',
            category: 'IGCSE',
            chapters: {
                'Reading Comprehension': {
                    content: 'Effective reading involves understanding explicit and implicit meanings. Context clues help readers understand unfamiliar words.',
                    videos: [
                        { id: 'p7fXa2Occ_U', title: 'Reading Comprehension Strategies', duration: '16:45' },
                        { id: 'MSYw502dJNY', title: 'Context Clues and Inference', duration: '12:30' }
                    ],
                    flashcards: [
                        { front: 'What is a metaphor?', back: 'Direct comparison without "like" or "as"' },
                        { front: 'What are context clues?', back: 'Hints in text that help determine word meanings' },
                        { front: 'What is the main idea?', back: 'The central point or message of a text' }
                    ],
                    quiz: [
                        { question: 'Which uses "like" or "as"?', options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'], correct: 1, explanation: 'Similes use "like" or "as" for comparison' },
                        { question: 'What are context clues?', options: ['Main ideas', 'Text hints for meanings', 'Conclusions', 'Topics'], correct: 1, explanation: 'Context clues help understand unfamiliar words' }
                    ]
                }
            }
        },
        // KCPE Subjects
        kcpe_math: {
            name: 'KCPE Mathematics',
            category: 'KCPE',
            chapters: {
                'Basic Operations': {
                    content: 'Addition, subtraction, multiplication and division of whole numbers and decimals.',
                    videos: [{ id: 'abc123', title: 'Basic Math Operations', duration: '20:00' }],
                    flashcards: [
                        { front: 'What is 25 + 37?', back: '62' },
                        { front: 'What is 144 ÷ 12?', back: '12' }
                    ],
                    quiz: [
                        { question: 'What is 15 × 8?', options: ['110', '120', '130', '140'], correct: 1, explanation: '15 × 8 = 120' }
                    ]
                }
            }
        },
        kcpe_english: {
            name: 'KCPE English',
            category: 'KCPE',
            chapters: {
                'Grammar': {
                    content: 'Parts of speech, sentence structure, and proper grammar usage.',
                    videos: [{ id: 'def456', title: 'English Grammar Basics', duration: '18:00' }],
                    flashcards: [
                        { front: 'What is a noun?', back: 'A person, place, thing, or idea' },
                        { front: 'What is a verb?', back: 'An action word' }
                    ],
                    quiz: [
                        { question: 'Which is a verb?', options: ['House', 'Run', 'Blue', 'Happy'], correct: 1, explanation: 'Run is an action word' }
                    ]
                }
            }
        },
        kcpe_science: {
            name: 'KCPE Science',
            category: 'KCPE',
            chapters: {
                'Living Things': {
                    content: 'Classification of living things and their characteristics.',
                    videos: [{ id: 'ghi789', title: 'Living Things Classification', duration: '15:00' }],
                    flashcards: [
                        { front: 'What are the 5 senses?', back: 'Sight, hearing, smell, taste, touch' },
                        { front: 'What do plants need to grow?', back: 'Water, sunlight, air, nutrients' }
                    ],
                    quiz: [
                        { question: 'Which is NOT a living thing?', options: ['Tree', 'Rock', 'Bird', 'Fish'], correct: 1, explanation: 'Rock is not alive' }
                    ]
                }
            }
        },
        // KCSE Subjects
        kcse_math: {
            name: 'KCSE Mathematics',
            category: 'KCSE',
            chapters: {
                'Calculus': {
                    content: 'Differentiation and integration of functions.',
                    videos: [{ id: 'calc123', title: 'Introduction to Calculus', duration: '25:00' }],
                    flashcards: [
                        { front: 'What is the derivative of x²?', back: '2x' },
                        { front: 'What is integration?', back: 'The reverse of differentiation' }
                    ],
                    quiz: [
                        { question: 'What is d/dx(3x²)?', options: ['3x', '6x', '9x', '6x²'], correct: 1, explanation: 'Derivative of 3x² is 6x' }
                    ]
                }
            }
        },
        kcse_biology: {
            name: 'KCSE Biology',
            category: 'KCSE',
            chapters: {
                'Ecology': {
                    content: 'Study of organisms and their environment.',
                    videos: [{ id: 'eco123', title: 'Ecosystem Dynamics', duration: '22:00' }],
                    flashcards: [
                        { front: 'What is an ecosystem?', back: 'A community of living and non-living things' },
                        { front: 'What is photosynthesis?', back: 'Process plants use to make food using sunlight' }
                    ],
                    quiz: [
                        { question: 'What do herbivores eat?', options: ['Meat', 'Plants', 'Both', 'Nothing'], correct: 1, explanation: 'Herbivores eat only plants' }
                    ]
                }
            }
        },
        kcse_chemistry: {
            name: 'KCSE Chemistry',
            category: 'KCSE',
            chapters: {
                'Organic Chemistry': {
                    content: 'Study of carbon compounds and their reactions.',
                    videos: [{ id: 'org123', title: 'Organic Chemistry Basics', duration: '28:00' }],
                    flashcards: [
                        { front: 'What is a hydrocarbon?', back: 'Compound containing only carbon and hydrogen' },
                        { front: 'What is methane?', back: 'CH₄ - simplest hydrocarbon' }
                    ],
                    quiz: [
                        { question: 'What is the formula for methane?', options: ['CH₂', 'CH₃', 'CH₄', 'C₂H₄'], correct: 2, explanation: 'Methane is CH₄' }
                    ]
                }
            }
        },
        // A-Level Subjects
        alevel_math: { name: 'A-Level Mathematics', category: 'A-Level', chapters: { 'Pure Mathematics': { content: 'Advanced calculus, algebra, and mathematical analysis for A-Level students.', videos: [{ id: 'alevel_math1', title: 'A-Level Pure Math', duration: '25:00' }, { id: 'alevel_math2', title: 'Integration Techniques', duration: '32:45' }, { id: 'alevel_math3', title: 'Differential Equations', duration: '28:30' }], flashcards: [{ front: 'What is integration by parts?', back: '∫u dv = uv - ∫v du' }], quiz: [{ question: 'Derivative of ln(x)?', options: ['x', '1/x', 'ln(x)', 'e^x'], correct: 1, explanation: 'Derivative of ln(x) is 1/x' }] }}},
        alevel_physics: { name: 'A-Level Physics', category: 'A-Level', chapters: { 'Mechanics & Materials': { content: 'Advanced mechanics, waves, electricity, and modern physics.', videos: [{ id: 'alevel_phys1', title: 'A-Level Mechanics', duration: '30:00' }, { id: 'alevel_phys2', title: 'Wave Properties', duration: '27:15' }, { id: 'alevel_phys3', title: 'Electric Fields', duration: '35:20' }], flashcards: [{ front: 'What is simple harmonic motion?', back: 'Motion where acceleration is proportional to displacement' }], quiz: [{ question: 'Unit of electric field?', options: ['N/C', 'C/N', 'V/m', 'Both A and C'], correct: 3, explanation: 'Electric field units are N/C or V/m' }] }}},
        alevel_chemistry: { name: 'A-Level Chemistry', category: 'A-Level', chapters: { 'Physical Chemistry': { content: 'Thermodynamics, kinetics, equilibrium, and advanced chemical concepts.', videos: [{ id: 'alevel_chem1', title: 'A-Level Physical Chemistry', duration: '28:00' }, { id: 'alevel_chem2', title: 'Chemical Kinetics', duration: '31:40' }, { id: 'alevel_chem3', title: 'Thermodynamics', duration: '29:25' }], flashcards: [{ front: 'What is enthalpy?', back: 'Heat content of a system at constant pressure' }], quiz: [{ question: 'Le Chatelier\'s principle applies to?', options: ['Equilibrium systems', 'All reactions', 'Only gases', 'Only solutions'], correct: 0, explanation: 'Le Chatelier\'s principle applies to systems in equilibrium' }] }}},
        alevel_biology: { name: 'A-Level Biology', category: 'A-Level', chapters: { 'Molecular Biology': { content: 'Advanced cell biology, genetics, evolution, and ecology.', videos: [{ id: 'alevel_bio1', title: 'A-Level Molecular Biology', duration: '32:00' }, { id: 'alevel_bio2', title: 'Gene Expression', duration: '26:45' }, { id: 'alevel_bio3', title: 'Evolution Mechanisms', duration: '34:10' }], flashcards: [{ front: 'What is transcription?', back: 'Process of making RNA from DNA template' }], quiz: [{ question: 'Where does transcription occur?', options: ['Cytoplasm', 'Nucleus', 'Ribosome', 'Mitochondria'], correct: 1, explanation: 'Transcription occurs in the nucleus' }] }}},
        alevel_english: { name: 'A-Level English Literature', category: 'A-Level', chapters: { 'Literary Analysis': { content: 'Critical analysis of literature, poetry, and drama with advanced writing skills.', videos: [{ id: 'alevel_eng1', title: 'A-Level Literary Analysis', duration: '26:00' }, { id: 'alevel_eng2', title: 'Shakespeare Analysis', duration: '33:20' }, { id: 'alevel_eng3', title: 'Poetry Techniques', duration: '24:15' }], flashcards: [{ front: 'What is iambic pentameter?', back: 'Poetic meter with 5 iambic feet per line' }], quiz: [{ question: 'Shakespeare\'s sonnets have how many lines?', options: ['12', '14', '16', '18'], correct: 1, explanation: 'Shakespearean sonnets have 14 lines' }] }}},
        alevel_history: { name: 'A-Level History', category: 'A-Level', chapters: { 'Modern History': { content: 'In-depth study of historical periods, causes, and consequences of major events.', videos: [{ id: 'alevel_hist1', title: 'A-Level Modern History', duration: '35:00' }], flashcards: [{ front: 'When did WWI begin?', back: 'July 28, 1914' }], quiz: [{ question: 'Treaty that ended WWI?', options: ['Treaty of Paris', 'Treaty of Versailles', 'Treaty of Vienna', 'Treaty of Rome'], correct: 1, explanation: 'Treaty of Versailles ended WWI' }] }}},
        alevel_geography: { name: 'A-Level Geography', category: 'A-Level', chapters: { 'Physical Geography': { content: 'Advanced study of landforms, climate systems, and human-environment interactions.', videos: [{ id: 'alevel_geo1', title: 'A-Level Physical Geography', duration: '30:00' }], flashcards: [{ front: 'What is plate tectonics?', back: 'Theory explaining movement of Earth\'s lithospheric plates' }], quiz: [{ question: 'What causes earthquakes?', options: ['Wind', 'Plate movement', 'Ocean currents', 'Gravity'], correct: 1, explanation: 'Earthquakes are caused by plate movement' }] }}},
        alevel_economics: { name: 'A-Level Economics', category: 'A-Level', chapters: { 'Microeconomics': { content: 'Advanced economic theory, market structures, and economic policy analysis.', videos: [{ id: 'alevel_econ1', title: 'A-Level Microeconomics', duration: '28:00' }], flashcards: [{ front: 'What is price elasticity?', back: 'Responsiveness of quantity demanded to price changes' }], quiz: [{ question: 'Perfect competition has?', options: ['Few sellers', 'Many sellers', 'One seller', 'Two sellers'], correct: 1, explanation: 'Perfect competition has many sellers' }] }}},
        alevel_psychology: { name: 'A-Level Psychology', category: 'A-Level', chapters: { 'Cognitive Psychology': { content: 'Study of mental processes, behavior, and psychological research methods.', videos: [{ id: 'alevel_psych1', title: 'A-Level Cognitive Psychology', duration: '30:00' }], flashcards: [{ front: 'What is classical conditioning?', back: 'Learning through association of stimuli' }], quiz: [{ question: 'Who developed classical conditioning?', options: ['Freud', 'Pavlov', 'Skinner', 'Jung'], correct: 1, explanation: 'Pavlov developed classical conditioning' }] }}},
        alevel_sociology: { name: 'A-Level Sociology', category: 'A-Level', chapters: { 'Social Theory': { content: 'Study of society, social institutions, and social behavior patterns.', videos: [{ id: 'alevel_soc1', title: 'A-Level Social Theory', duration: '32:00' }], flashcards: [{ front: 'What is social stratification?', back: 'Hierarchical arrangement of social classes' }], quiz: [{ question: 'Who wrote "The Communist Manifesto"?', options: ['Weber', 'Durkheim', 'Marx', 'Comte'], correct: 2, explanation: 'Karl Marx wrote The Communist Manifesto' }] }}},
        alevel_business: { name: 'A-Level Business Studies', category: 'A-Level', chapters: { 'Business Strategy': { content: 'Advanced business concepts, strategy, and organizational management.', videos: [{ id: 'alevel_bus1', title: 'A-Level Business Strategy', duration: '28:00' }], flashcards: [{ front: 'What is Porter\'s Five Forces?', back: 'Framework for analyzing competitive environment' }], quiz: [{ question: 'What does ROI stand for?', options: ['Return on Investment', 'Rate of Interest', 'Risk of Investment', 'Revenue over Income'], correct: 0, explanation: 'ROI means Return on Investment' }] }}},
        alevel_computer: { name: 'A-Level Computer Science', category: 'A-Level', chapters: { 'Programming & Algorithms': { content: 'Advanced programming concepts, data structures, and computational thinking.', videos: [{ id: 'alevel_cs1', title: 'A-Level Programming', duration: '35:00' }, { id: 'alevel_cs2', title: 'Data Structures Deep Dive', duration: '42:30' }, { id: 'alevel_cs3', title: 'Algorithm Analysis', duration: '38:15' }], flashcards: [{ front: 'What is recursion?', back: 'Function that calls itself' }], quiz: [{ question: 'Time complexity of binary search?', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], correct: 1, explanation: 'Binary search has O(log n) complexity' }] }}},
        // University Subjects
        uni_medicine: {
            name: 'Medicine - Anatomy',
            category: 'University',
            chapters: {
                'Human Anatomy': {
                    content: 'Structure and function of the human body systems.',
                    videos: [{ id: 'med123', title: 'Human Body Systems', duration: '35:00' }],
                    flashcards: [
                        { front: 'How many bones in human body?', back: '206 bones' },
                        { front: 'What is the largest organ?', back: 'Skin' }
                    ],
                    quiz: [
                        { question: 'Which chamber pumps blood to the body?', options: ['Right atrium', 'Left ventricle', 'Right ventricle', 'Left atrium'], correct: 1, explanation: 'Left ventricle pumps oxygenated blood' }
                    ]
                }
            }
        },
        uni_law: {
            name: 'Law - Constitutional Law',
            category: 'University',
            chapters: {
                'Constitutional Principles': {
                    content: 'Fundamental principles of constitutional law and governance.',
                    videos: [{ id: 'law123', title: 'Constitutional Law Basics', duration: '30:00' }],
                    flashcards: [
                        { front: 'What is separation of powers?', back: 'Division of government into executive, legislative, judicial' },
                        { front: 'What is rule of law?', back: 'Everyone is subject to the law equally' }
                    ],
                    quiz: [
                        { question: 'How many branches of government?', options: ['2', '3', '4', '5'], correct: 1, explanation: 'Executive, Legislative, Judicial' }
                    ]
                }
            }
        },
        uni_engineering: {
            name: 'Engineering - Mechanics',
            category: 'University',
            chapters: {
                'Statics': {
                    content: 'Analysis of forces in equilibrium and structural mechanics.',
                    videos: [{ id: 'eng123', title: 'Engineering Statics', duration: '40:00' }],
                    flashcards: [
                        { front: 'What is equilibrium?', back: 'State where all forces balance out' },
                        { front: 'What is a moment?', back: 'Force times perpendicular distance' }
                    ],
                    quiz: [
                        { question: 'Sum of forces in equilibrium equals?', options: ['1', '0', '-1', '∞'], correct: 1, explanation: 'Forces balance to zero' }
                    ]
                }
            }
        },
        uni_business: {
            name: 'Business - Management',
            category: 'University',
            chapters: {
                'Strategic Management': {
                    content: 'Planning and executing business strategies for competitive advantage.',
                    videos: [{ id: 'bus123', title: 'Strategic Management', duration: '32:00' }],
                    flashcards: [
                        { front: 'What is SWOT analysis?', back: 'Strengths, Weaknesses, Opportunities, Threats' },
                        { front: 'What is market segmentation?', back: 'Dividing market into distinct groups' }
                    ],
                    quiz: [
                        { question: 'What does SWOT stand for?', options: ['Strategy, Work, Operations, Technology', 'Strengths, Weaknesses, Opportunities, Threats', 'Sales, Workforce, Objectives, Targets', 'Systems, Workflow, Organization, Training'], correct: 1, explanation: 'SWOT = Strengths, Weaknesses, Opportunities, Threats' }
                    ]
                }
            }
        },
        uni_computer: {
            name: 'Computer Science - Programming',
            category: 'University',
            chapters: {
                'Data Structures': {
                    content: 'Organization and storage of data for efficient access and modification.',
                    videos: [{ id: 'cs123', title: 'Data Structures Overview', duration: '45:00' }],
                    flashcards: [
                        { front: 'What is an array?', back: 'Collection of elements stored in contiguous memory' },
                        { front: 'What is Big O notation?', back: 'Describes algorithm time/space complexity' }
                    ],
                    quiz: [
                        { question: 'Which is fastest for searching?', options: ['Array', 'Linked List', 'Hash Table', 'Tree'], correct: 2, explanation: 'Hash tables have O(1) average search time' }
                    ]
                }
            }
        },
        uni_economics: {
            name: 'Economics - Microeconomics',
            category: 'University',
            chapters: {
                'Supply and Demand': {
                    content: 'Fundamental economic principles of market behavior.',
                    videos: [{ id: 'econ123', title: 'Supply and Demand', duration: '28:00' }],
                    flashcards: [
                        { front: 'What is demand?', back: 'Quantity consumers want at given price' },
                        { front: 'What is elasticity?', back: 'Responsiveness of demand to price changes' }
                    ],
                    quiz: [
                        { question: 'When price increases, demand usually?', options: ['Increases', 'Decreases', 'Stays same', 'Doubles'], correct: 1, explanation: 'Law of demand: inverse relationship' }
                    ]
                }
            }
        },
        // Additional IGCSE Subjects
        igcse_history: { name: 'IGCSE History', category: 'IGCSE', chapters: { 'World Wars': { content: 'Study of major world conflicts and their impact.', videos: [{ id: 'hist123', title: 'World War Overview', duration: '25:00' }], flashcards: [{ front: 'When did WWI start?', back: '1914' }], quiz: [{ question: 'Which year did WWII end?', options: ['1944', '1945', '1946', '1947'], correct: 1, explanation: 'WWII ended in 1945' }] }}},
        igcse_geography: { name: 'IGCSE Geography', category: 'IGCSE', chapters: { 'Climate': { content: 'Weather patterns and climate systems around the world.', videos: [{ id: 'geo123', title: 'Climate Systems', duration: '20:00' }], flashcards: [{ front: 'What causes seasons?', back: 'Earth\'s tilt and orbit around sun' }], quiz: [{ question: 'Which is the driest continent?', options: ['Africa', 'Antarctica', 'Australia', 'Asia'], correct: 1, explanation: 'Antarctica is the driest continent' }] }}},
        igcse_art: { name: 'IGCSE Art & Design', category: 'IGCSE', chapters: { 'Drawing Techniques': { content: 'Fundamental drawing and design principles.', videos: [{ id: 'art123', title: 'Basic Drawing', duration: '30:00' }], flashcards: [{ front: 'What is perspective?', back: 'Technique to show depth in 2D art' }], quiz: [{ question: 'Primary colors are?', options: ['Red, Blue, Yellow', 'Red, Green, Blue', 'Blue, Yellow, Green', 'Red, Yellow, Orange'], correct: 0, explanation: 'Primary colors: Red, Blue, Yellow' }] }}},
        // Additional KCPE Subjects
        kcpe_kiswahili: { name: 'KCPE Kiswahili', category: 'KCPE', chapters: { 'Sarufi': { content: 'Kiswahili grammar and language structure.', videos: [{ id: 'kisw123', title: 'Sarufi ya Kiswahili', duration: '18:00' }], flashcards: [{ front: 'Nini maana ya nomino?', back: 'Jina la kitu, mtu au mahali' }], quiz: [{ question: 'Kitenzi ni nini?', options: ['Jina', 'Kitendo', 'Sifa', 'Mahali'], correct: 1, explanation: 'Kitenzi ni neno la kitendo' }] }}},
        kcpe_social: { name: 'KCPE Social Studies', category: 'KCPE', chapters: { 'Kenya History': { content: 'History and geography of Kenya.', videos: [{ id: 'social123', title: 'Kenya History', duration: '22:00' }], flashcards: [{ front: 'Who was the first president of Kenya?', back: 'Jomo Kenyatta' }], quiz: [{ question: 'Kenya got independence in?', options: ['1962', '1963', '1964', '1965'], correct: 1, explanation: 'Kenya independence: December 12, 1963' }] }}},
        kcpe_cre: { name: 'KCPE Christian Religious Education', category: 'KCPE', chapters: { 'Bible Stories': { content: 'Stories and teachings from the Bible.', videos: [{ id: 'cre123', title: 'Bible Stories', duration: '20:00' }], flashcards: [{ front: 'Who built the ark?', back: 'Noah' }], quiz: [{ question: 'How many disciples did Jesus have?', options: ['10', '11', '12', '13'], correct: 2, explanation: 'Jesus had 12 disciples' }] }}},
        // Additional KCSE Subjects
        kcse_physics: { name: 'KCSE Physics', category: 'KCSE', chapters: { 'Mechanics': { content: 'Motion, forces, and energy in physical systems.', videos: [{ id: 'phys123', title: 'Physics Mechanics', duration: '35:00' }], flashcards: [{ front: 'What is velocity?', back: 'Speed with direction' }], quiz: [{ question: 'Unit of force is?', options: ['Joule', 'Newton', 'Watt', 'Pascal'], correct: 1, explanation: 'Force is measured in Newtons' }] }}},
        kcse_history: { name: 'KCSE History', category: 'KCSE', chapters: { 'African History': { content: 'Pre-colonial and colonial African history.', videos: [{ id: 'hist456', title: 'African Civilizations', duration: '40:00' }], flashcards: [{ front: 'What was the Berlin Conference?', back: 'European division of Africa in 1884-85' }], quiz: [{ question: 'Which empire was in West Africa?', options: ['Mali', 'Axum', 'Zimbabwe', 'Buganda'], correct: 0, explanation: 'Mali Empire was in West Africa' }] }}},
        kcse_geography: { name: 'KCSE Geography', category: 'KCSE', chapters: { 'Physical Geography': { content: 'Landforms, climate, and natural processes.', videos: [{ id: 'geo456', title: 'Physical Geography', duration: '30:00' }], flashcards: [{ front: 'What is erosion?', back: 'Wearing away of land by water, wind, or ice' }], quiz: [{ question: 'Highest mountain in Africa?', options: ['Mt. Kenya', 'Mt. Kilimanjaro', 'Mt. Elgon', 'Mt. Meru'], correct: 1, explanation: 'Mt. Kilimanjaro is Africa\'s highest peak' }] }}},
        // University Year 1-4 Medicine
        med_year1: { name: 'Medicine Year 1 - Basic Sciences', category: 'University', chapters: { 'Anatomy & Physiology': { content: 'Human body structure and function fundamentals.', videos: [{ id: 'med1_123', title: 'Human Anatomy Basics', duration: '45:00' }], flashcards: [{ front: 'How many chambers in heart?', back: '4 chambers' }], quiz: [{ question: 'Largest bone in body?', options: ['Tibia', 'Femur', 'Humerus', 'Radius'], correct: 1, explanation: 'Femur is the largest bone' }] }}},
        med_year2: { name: 'Medicine Year 2 - Pathology', category: 'University', chapters: { 'Disease Processes': { content: 'Study of disease mechanisms and pathological changes.', videos: [{ id: 'med2_123', title: 'Pathology Fundamentals', duration: '50:00' }], flashcards: [{ front: 'What is inflammation?', back: 'Body\'s response to injury or infection' }], quiz: [{ question: 'What causes fever?', options: ['Bacteria only', 'Viruses only', 'Pyrogens', 'Cold weather'], correct: 2, explanation: 'Pyrogens cause fever response' }] }}},
        med_year3: { name: 'Medicine Year 3 - Clinical Skills', category: 'University', chapters: { 'Patient Examination': { content: 'Clinical examination techniques and patient interaction.', videos: [{ id: 'med3_123', title: 'Clinical Examination', duration: '60:00' }], flashcards: [{ front: 'Normal blood pressure?', back: '120/80 mmHg' }], quiz: [{ question: 'Normal heart rate range?', options: ['40-60', '60-100', '100-120', '120-140'], correct: 1, explanation: 'Normal resting heart rate: 60-100 bpm' }] }}},
        med_year4: { name: 'Medicine Year 4 - Specializations', category: 'University', chapters: { 'Internal Medicine': { content: 'Diagnosis and treatment of internal diseases.', videos: [{ id: 'med4_123', title: 'Internal Medicine', duration: '55:00' }], flashcards: [{ front: 'What is diabetes?', back: 'Condition with high blood sugar levels' }], quiz: [{ question: 'Type 1 diabetes is caused by?', options: ['Obesity', 'Autoimmune destruction', 'Age', 'Stress'], correct: 1, explanation: 'Type 1 is autoimmune destruction of beta cells' }] }}},
        // University Year 1-4 Engineering
        eng_year1: { name: 'Engineering Year 1 - Mathematics', category: 'University', chapters: { 'Calculus': { content: 'Advanced calculus for engineering applications.', videos: [{ id: 'eng1_123', title: 'Engineering Calculus', duration: '40:00' }], flashcards: [{ front: 'What is a derivative?', back: 'Rate of change of a function' }], quiz: [{ question: 'Integral of x² is?', options: ['x³', 'x³/3', '2x', '3x²'], correct: 1, explanation: 'Integral of x² is x³/3 + C' }] }}},
        eng_year2: { name: 'Engineering Year 2 - Mechanics', category: 'University', chapters: { 'Statics & Dynamics': { content: 'Forces, moments, and motion in engineering systems.', videos: [{ id: 'eng2_123', title: 'Engineering Mechanics', duration: '45:00' }], flashcards: [{ front: 'What is torque?', back: 'Rotational force' }], quiz: [{ question: 'Unit of moment?', options: ['N', 'N⋅m', 'kg', 'J'], correct: 1, explanation: 'Moment is measured in Newton-meters' }] }}},
        eng_year3: { name: 'Engineering Year 3 - Design', category: 'University', chapters: { 'Engineering Design': { content: 'Design principles and project development.', videos: [{ id: 'eng3_123', title: 'Design Process', duration: '50:00' }], flashcards: [{ front: 'What is CAD?', back: 'Computer-Aided Design' }], quiz: [{ question: 'First step in design process?', options: ['Build', 'Test', 'Define problem', 'Market'], correct: 2, explanation: 'Design starts with problem definition' }] }}},
        eng_year4: { name: 'Engineering Year 4 - Capstone', category: 'University', chapters: { 'Final Project': { content: 'Comprehensive engineering project and thesis.', videos: [{ id: 'eng4_123', title: 'Capstone Projects', duration: '35:00' }], flashcards: [{ front: 'What is a thesis?', back: 'Research document presenting original work' }], quiz: [{ question: 'Purpose of capstone project?', options: ['Get degree', 'Apply knowledge', 'Pass time', 'Meet friends'], correct: 1, explanation: 'Capstone applies accumulated knowledge' }] }}},
        // University Year 1-4 Computer Science
        cs_year1: { name: 'Computer Science Year 1 - Programming', category: 'University', chapters: { 'Programming Fundamentals': { content: 'Basic programming concepts and algorithms.', videos: [{ id: 'cs1_123', title: 'Programming Basics', duration: '40:00' }], flashcards: [{ front: 'What is a variable?', back: 'Storage location with a name' }], quiz: [{ question: 'What is a loop?', options: ['Error', 'Repeated execution', 'Function', 'Variable'], correct: 1, explanation: 'Loop repeats code execution' }] }}},
        cs_year2: { name: 'Computer Science Year 2 - Data Structures', category: 'University', chapters: { 'Advanced Data Structures': { content: 'Complex data organization and algorithms.', videos: [{ id: 'cs2_123', title: 'Data Structures', duration: '50:00' }], flashcards: [{ front: 'What is Big O?', back: 'Algorithm complexity notation' }], quiz: [{ question: 'Binary search complexity?', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], correct: 1, explanation: 'Binary search is O(log n)' }] }}},
        cs_year3: { name: 'Computer Science Year 3 - Software Engineering', category: 'University', chapters: { 'Software Development': { content: 'Software design patterns and development methodologies.', videos: [{ id: 'cs3_123', title: 'Software Engineering', duration: '45:00' }], flashcards: [{ front: 'What is Agile?', back: 'Iterative software development methodology' }], quiz: [{ question: 'What is version control?', options: ['Bug tracking', 'Code management', 'Testing', 'Documentation'], correct: 1, explanation: 'Version control manages code changes' }] }}},
        cs_year4: { name: 'Computer Science Year 4 - AI & Machine Learning', category: 'University', chapters: { 'Artificial Intelligence': { content: 'Machine learning algorithms and AI applications.', videos: [{ id: 'cs4_123', title: 'AI & Machine Learning', duration: '60:00' }], flashcards: [{ front: 'What is machine learning?', back: 'Algorithms that learn from data' }], quiz: [{ question: 'Supervised learning uses?', options: ['No data', 'Labeled data', 'Random data', 'Old data'], correct: 1, explanation: 'Supervised learning needs labeled training data' }] }}},
        // Law Year Programs
        law_year1: { name: 'Law Year 1 - Legal Foundations', category: 'University', chapters: { 'Introduction to Law': { content: 'Basic legal principles and the structure of legal systems.', videos: [{ id: 'law1_123', title: 'Legal System Basics', duration: '35:00' }], flashcards: [{ front: 'What is jurisprudence?', back: 'The theory and philosophy of law' }], quiz: [{ question: 'What is common law?', options: ['Written law', 'Judge-made law', 'Religious law', 'Military law'], correct: 1, explanation: 'Common law is developed through judicial decisions' }] }}},
        law_year2: { name: 'Law Year 2 - Contract & Tort Law', category: 'University', chapters: { 'Contract Law': { content: 'Formation, performance, and breach of contracts.', videos: [{ id: 'law2_123', title: 'Contract Law Principles', duration: '40:00' }], flashcards: [{ front: 'What is consideration?', back: 'Something of value exchanged in a contract' }], quiz: [{ question: 'Essential elements of contract?', options: ['Offer only', 'Offer and acceptance', 'Offer, acceptance, consideration', 'Just agreement'], correct: 2, explanation: 'Contract needs offer, acceptance, and consideration' }] }}},
        law_year3: { name: 'Law Year 3 - Criminal & Constitutional Law', category: 'University', chapters: { 'Criminal Law': { content: 'Crimes, defenses, and criminal procedure.', videos: [{ id: 'law3_123', title: 'Criminal Law Overview', duration: '45:00' }], flashcards: [{ front: 'What is mens rea?', back: 'Guilty mind - criminal intent' }], quiz: [{ question: 'Burden of proof in criminal cases?', options: ['Preponderance', 'Beyond reasonable doubt', 'Clear and convincing', 'Probable cause'], correct: 1, explanation: 'Criminal cases require proof beyond reasonable doubt' }] }}},
        law_year4: { name: 'Law Year 4 - Practice & Procedure', category: 'University', chapters: { 'Legal Practice': { content: 'Court procedures, legal writing, and professional ethics.', videos: [{ id: 'law4_123', title: 'Legal Practice Skills', duration: '38:00' }], flashcards: [{ front: 'What is legal ethics?', back: 'Professional conduct rules for lawyers' }], quiz: [{ question: 'Purpose of legal ethics?', options: ['Make money', 'Protect public', 'Help lawyers', 'Speed trials'], correct: 1, explanation: 'Legal ethics protect the public and justice system' }] }}},
        // Business Year Programs
        bus_year1: { name: 'Business Year 1 - Foundations', category: 'University', chapters: { 'Business Fundamentals': { content: 'Introduction to business concepts and management principles.', videos: [{ id: 'bus1_123', title: 'Business Basics', duration: '30:00' }], flashcards: [{ front: 'What is entrepreneurship?', back: 'Starting and running a business venture' }], quiz: [{ question: 'What is a business plan?', options: ['Daily schedule', 'Strategic roadmap', 'Employee list', 'Product catalog'], correct: 1, explanation: 'Business plan is a strategic roadmap for the business' }] }}},
        bus_year2: { name: 'Business Year 2 - Marketing & Finance', category: 'University', chapters: { 'Marketing Strategy': { content: 'Market analysis, consumer behavior, and promotional strategies.', videos: [{ id: 'bus2_123', title: 'Marketing Fundamentals', duration: '35:00' }], flashcards: [{ front: 'What are the 4 Ps of marketing?', back: 'Product, Price, Place, Promotion' }], quiz: [{ question: 'What is market segmentation?', options: ['Dividing products', 'Dividing customers', 'Dividing profits', 'Dividing time'], correct: 1, explanation: 'Market segmentation divides customers into groups' }] }}},
        bus_year3: { name: 'Business Year 3 - Operations & Strategy', category: 'University', chapters: { 'Operations Management': { content: 'Production systems, supply chain, and quality management.', videos: [{ id: 'bus3_123', title: 'Operations Strategy', duration: '42:00' }], flashcards: [{ front: 'What is supply chain?', back: 'Network of suppliers, manufacturers, and distributors' }], quiz: [{ question: 'What is lean manufacturing?', options: ['Cheap production', 'Waste elimination', 'Fast production', 'Small factories'], correct: 1, explanation: 'Lean manufacturing focuses on eliminating waste' }] }}},
        bus_year4: { name: 'Business Year 4 - Leadership & Innovation', category: 'University', chapters: { 'Strategic Leadership': { content: 'Leadership skills, innovation management, and business transformation.', videos: [{ id: 'bus4_123', title: 'Business Leadership', duration: '40:00' }], flashcards: [{ front: 'What is transformational leadership?', back: 'Leadership that inspires and motivates change' }], quiz: [{ question: 'Key to successful innovation?', options: ['Money only', 'Technology only', 'People and process', 'Luck'], correct: 2, explanation: 'Innovation requires right people and processes' }] }}},
        // Economics Year Programs
        econ_year1: { name: 'Economics Year 1 - Principles', category: 'University', chapters: { 'Economic Principles': { content: 'Fundamental concepts of micro and macroeconomics.', videos: [{ id: 'econ1_123', title: 'Economics Basics', duration: '32:00' }], flashcards: [{ front: 'What is opportunity cost?', back: 'Value of the next best alternative foregone' }], quiz: [{ question: 'Law of demand states?', options: ['Price up, demand up', 'Price up, demand down', 'No relationship', 'Always constant'], correct: 1, explanation: 'As price increases, quantity demanded decreases' }] }}},
        econ_year2: { name: 'Economics Year 2 - Applied Economics', category: 'University', chapters: { 'Economic Analysis': { content: 'Economic modeling, policy analysis, and market structures.', videos: [{ id: 'econ2_123', title: 'Economic Models', duration: '38:00' }], flashcards: [{ front: 'What is GDP?', back: 'Gross Domestic Product - total economic output' }], quiz: [{ question: 'What causes inflation?', options: ['Too much money', 'Too little money', 'No money', 'Perfect money'], correct: 0, explanation: 'Inflation often caused by excess money supply' }] }}},
        econ_year3: { name: 'Economics Year 3 - International Economics', category: 'University', chapters: { 'Global Economics': { content: 'International trade, exchange rates, and global economic policy.', videos: [{ id: 'econ3_123', title: 'International Trade', duration: '45:00' }], flashcards: [{ front: 'What is comparative advantage?', back: 'Ability to produce at lower opportunity cost' }], quiz: [{ question: 'Benefits of free trade?', options: ['Higher prices', 'Lower efficiency', 'Increased competition', 'Less choice'], correct: 2, explanation: 'Free trade increases competition and efficiency' }] }}},
        // Accounting Year Programs
        uni_accounting: { name: 'Accounting - Financial Accounting', category: 'University', chapters: { 'Accounting Principles': { content: 'Fundamental accounting concepts, double-entry bookkeeping, and financial statements.', videos: [{ id: 'acc_123', title: 'Accounting Fundamentals', duration: '30:00' }], flashcards: [{ front: 'What is the accounting equation?', back: 'Assets = Liabilities + Equity' }], quiz: [{ question: 'What is double-entry bookkeeping?', options: ['Recording twice', 'Two accounts affected', 'Two people record', 'Two books used'], correct: 1, explanation: 'Every transaction affects at least two accounts' }] }}},
        acc_year1: { name: 'Accounting Year 1 - Foundations', category: 'University', chapters: { 'Accounting Fundamentals': { content: 'Introduction to accounting principles, financial statements, and basic bookkeeping.', videos: [{ id: 'acc1_123', title: 'Accounting Basics', duration: '35:00' }, { id: 'acc1_124', title: 'Financial Statements', duration: '28:00' }], flashcards: [{ front: 'What are the main financial statements?', back: 'Income Statement, Balance Sheet, Cash Flow Statement, Statement of Equity' }], quiz: [{ question: 'What does the balance sheet show?', options: ['Revenues and expenses', 'Assets, liabilities, equity', 'Cash flows', 'Profit margins'], correct: 1, explanation: 'Balance sheet shows financial position at a point in time' }] }}},
        acc_year2: { name: 'Accounting Year 2 - Intermediate Accounting', category: 'University', chapters: { 'Advanced Financial Reporting': { content: 'Complex accounting standards, revenue recognition, and asset valuation.', videos: [{ id: 'acc2_123', title: 'Revenue Recognition', duration: '40:00' }, { id: 'acc2_124', title: 'Asset Valuation', duration: '35:00' }], flashcards: [{ front: 'What is revenue recognition principle?', back: 'Revenue recorded when earned, not when cash received' }], quiz: [{ question: 'When is revenue recognized?', options: ['When cash received', 'When earned', 'End of year', 'When invoiced'], correct: 1, explanation: 'Revenue recognized when performance obligation satisfied' }] }}},
        acc_year3: { name: 'Accounting Year 3 - Cost & Management Accounting', category: 'University', chapters: { 'Cost Accounting Systems': { content: 'Cost allocation, budgeting, variance analysis, and management decision making.', videos: [{ id: 'acc3_123', title: 'Cost Allocation Methods', duration: '42:00' }, { id: 'acc3_124', title: 'Budget Preparation', duration: '38:00' }], flashcards: [{ front: 'What is activity-based costing?', back: 'Cost allocation method based on activities that drive costs' }], quiz: [{ question: 'What is a flexible budget?', options: ['Changes monthly', 'Adjusts for activity levels', 'Never changes', 'Only for sales'], correct: 1, explanation: 'Flexible budget adjusts for different activity levels' }] }}},
        acc_year4: { name: 'Accounting Year 4 - Advanced Topics & Audit', category: 'University', chapters: { 'Auditing & Assurance': { content: 'Audit procedures, internal controls, professional ethics, and advanced accounting topics.', videos: [{ id: 'acc4_123', title: 'Audit Procedures', duration: '45:00' }, { id: 'acc4_124', title: 'Internal Controls', duration: '40:00' }], flashcards: [{ front: 'What is audit risk?', back: 'Risk that auditor gives inappropriate opinion on financial statements' }], quiz: [{ question: 'What is the purpose of internal controls?', options: ['Increase profits', 'Prevent fraud and errors', 'Reduce taxes', 'Speed up processes'], correct: 1, explanation: 'Internal controls prevent fraud and ensure accurate reporting' }] }}},
        // IB Curriculum
        ib_math: { name: 'IB Mathematics', category: 'IB', chapters: { 'Calculus & Analysis': { content: 'Advanced mathematical concepts for IB Diploma Programme including calculus, statistics, and mathematical modeling.', videos: [{ id: 'ib_math1', title: 'IB Calculus Fundamentals', duration: '35:00' }], flashcards: [{ front: 'What is a derivative?', back: 'Rate of change of a function at a point' }], quiz: [{ question: 'What is the IB Math IA?', options: ['Internal Assessment', 'International Assignment', 'Individual Analysis', 'Integrated Approach'], correct: 0, explanation: 'IA stands for Internal Assessment' }] }}},
        ib_physics: { name: 'IB Physics', category: 'IB', chapters: { 'Mechanics & Thermodynamics': { content: 'IB Physics covering mechanics, waves, electricity, and modern physics with practical investigations.', videos: [{ id: 'ib_phys1', title: 'IB Physics Mechanics', duration: '40:00' }], flashcards: [{ front: 'What is the IB Physics EE?', back: 'Extended Essay - 4000 word research project' }], quiz: [{ question: 'IB Physics HL has how many hours?', options: ['150', '240', '180', '200'], correct: 1, explanation: 'IB Physics HL requires 240 teaching hours' }] }}},
        ib_chemistry: { name: 'IB Chemistry', category: 'IB', chapters: { 'Organic & Inorganic Chemistry': { content: 'Comprehensive chemistry covering atomic structure, bonding, energetics, and organic chemistry.', videos: [{ id: 'ib_chem1', title: 'IB Chemistry Bonding', duration: '32:00' }], flashcards: [{ front: 'What is TOK in IB?', back: 'Theory of Knowledge - core component' }], quiz: [{ question: 'IB Chemistry SL lab hours?', options: ['40', '60', '80', '100'], correct: 1, explanation: 'IB Chemistry SL requires 60 lab hours' }] }}},
        ib_biology: { name: 'IB Biology', category: 'IB', chapters: { 'Cell Biology & Genetics': { content: 'IB Biology covering cell biology, molecular biology, genetics, ecology, and human physiology.', videos: [{ id: 'ib_bio1', title: 'IB Cell Biology', duration: '38:00' }], flashcards: [{ front: 'What is CAS in IB?', back: 'Creativity, Activity, Service - core requirement' }], quiz: [{ question: 'IB Biology HL topics?', options: ['6', '8', '11', '9'], correct: 2, explanation: 'IB Biology HL covers 11 topics including additional HL content' }] }}},
        ib_english: { name: 'IB English Literature', category: 'IB', chapters: { 'World Literature': { content: 'IB English focusing on world literature, literary analysis, and comparative studies.', videos: [{ id: 'ib_eng1', title: 'IB Literary Analysis', duration: '30:00' }], flashcards: [{ front: 'What is the IB Diploma?', back: 'International qualification recognized by universities worldwide' }], quiz: [{ question: 'IB English assessments include?', options: ['Only exams', 'Oral and written', 'Multiple choice only', 'Practical only'], correct: 1, explanation: 'IB English includes both oral and written assessments' }] }}},
        // Graphic Design Program
        uni_graphic_design: { name: 'Graphic Design - Visual Communication', category: 'University', chapters: { 'Design Fundamentals': { content: 'Principles of visual design, typography, color theory, and digital design tools.', videos: [{ id: 'gd_123', title: 'Design Principles', duration: '25:00' }], flashcards: [{ front: 'What is the golden ratio?', back: '1:1.618 - aesthetically pleasing proportion' }], quiz: [{ question: 'Primary colors are?', options: ['Red, Blue, Yellow', 'Red, Green, Blue', 'Cyan, Magenta, Yellow', 'All of the above'], correct: 3, explanation: 'Depends on color model - RYB for traditional, RGB for digital, CMY for print' }] }}},
        gd_year1: { name: 'Graphic Design Year 1 - Foundations', category: 'University', chapters: { 'Visual Fundamentals': { content: 'Basic design principles, drawing skills, and introduction to design software.', videos: [{ id: 'gd1_123', title: 'Design Basics', duration: '35:00' }], flashcards: [{ front: 'What is kerning?', back: 'Spacing between individual letter pairs' }], quiz: [{ question: 'What is CMYK?', options: ['Color model', 'Design software', 'Print process', 'All of the above'], correct: 3, explanation: 'CMYK is a color model used in printing' }] }}},
        gd_year2: { name: 'Graphic Design Year 2 - Digital Design', category: 'University', chapters: { 'Digital Tools & Branding': { content: 'Advanced software skills, brand identity design, and digital media creation.', videos: [{ id: 'gd2_123', title: 'Brand Identity Design', duration: '40:00' }], flashcards: [{ front: 'What is a brand identity?', back: 'Visual elements that represent a brand' }], quiz: [{ question: 'Vector graphics are best for?', options: ['Photos', 'Logos', 'Textures', 'Paintings'], correct: 1, explanation: 'Vector graphics scale without quality loss, perfect for logos' }] }}},
        gd_year3: { name: 'Graphic Design Year 3 - Specialization', category: 'University', chapters: { 'Advanced Design & Portfolio': { content: 'Specialized design areas, client projects, and professional portfolio development.', videos: [{ id: 'gd3_123', title: 'Portfolio Development', duration: '45:00' }], flashcards: [{ front: 'What is UX design?', back: 'User Experience - how users interact with products' }], quiz: [{ question: 'What makes a good portfolio?', options: ['Many projects', 'Quality work', 'Expensive presentation', 'Long descriptions'], correct: 1, explanation: 'Quality over quantity - showcase best work' }] }}},
        gd_year4: { name: 'Graphic Design Year 4 - Professional Practice', category: 'University', chapters: { 'Industry & Freelancing': { content: 'Professional practice, client management, and career development in design industry.', videos: [{ id: 'gd4_123', title: 'Design Business', duration: '35:00' }], flashcards: [{ front: 'What is a design brief?', back: 'Document outlining project requirements and goals' }], quiz: [{ question: 'Freelance designers should?', options: ['Work for free', 'Value their work', 'Copy others', 'Avoid contracts'], correct: 1, explanation: 'Professional designers must value their expertise and time' }] }}},
        // Architecture Program
        uni_architecture: { name: 'Architecture - Design & Planning', category: 'University', chapters: { 'Architectural Principles': { content: 'Fundamental principles of architectural design, space planning, and building systems.', videos: [{ id: 'arch_123', title: 'Architecture Fundamentals', duration: '40:00' }], flashcards: [{ front: 'What is the golden section?', back: 'Mathematical ratio used in architectural proportions' }], quiz: [{ question: 'What is sustainable architecture?', options: ['Cheap building', 'Green design', 'Fast construction', 'Tall buildings'], correct: 1, explanation: 'Sustainable architecture focuses on environmental responsibility' }] }}},
        arch_year1: { name: 'Architecture Year 1 - Design Foundations', category: 'University', chapters: { 'Design Studio & History': { content: 'Basic design skills, architectural history, and introduction to design process.', videos: [{ id: 'arch1_123', title: 'Architectural History', duration: '50:00' }], flashcards: [{ front: 'Who designed Fallingwater?', back: 'Frank Lloyd Wright' }], quiz: [{ question: 'What is a floor plan?', options: ['Elevation view', 'Top-down view', 'Perspective view', '3D model'], correct: 1, explanation: 'Floor plan shows layout from above' }] }}},
        arch_year2: { name: 'Architecture Year 2 - Technical Skills', category: 'University', chapters: { 'Construction & Materials': { content: 'Building construction methods, materials science, and structural systems.', videos: [{ id: 'arch2_123', title: 'Building Materials', duration: '45:00' }], flashcards: [{ front: 'What is a load-bearing wall?', back: 'Wall that supports structural weight' }], quiz: [{ question: 'Steel is strong in?', options: ['Compression only', 'Tension only', 'Both compression and tension', 'Neither'], correct: 2, explanation: 'Steel performs well in both compression and tension' }] }}},
        arch_year3: { name: 'Architecture Year 3 - Advanced Design', category: 'University', chapters: { 'Complex Projects & Urban Planning': { content: 'Advanced design projects, urban planning principles, and environmental systems.', videos: [{ id: 'arch3_123', title: 'Urban Planning', duration: '55:00' }], flashcards: [{ front: 'What is zoning?', back: 'Legal mechanism to regulate land use' }], quiz: [{ question: 'Sustainable design includes?', options: ['Energy efficiency', 'Water conservation', 'Material selection', 'All of the above'], correct: 3, explanation: 'Sustainable design considers all environmental factors' }] }}},
        arch_year4: { name: 'Architecture Year 4 - Professional Practice', category: 'University', chapters: { 'Thesis & Practice': { content: 'Thesis project, professional practice, and preparation for licensure.', videos: [{ id: 'arch4_123', title: 'Professional Practice', duration: '40:00' }], flashcards: [{ front: 'What is AIA?', back: 'American Institute of Architects' }], quiz: [{ question: 'To become a licensed architect you need?', options: ['Degree only', 'Experience only', 'Degree, experience, and exam', 'Just an exam'], correct: 2, explanation: 'Licensure requires education, experience, and examination' }] }}},
        arch_year5: { name: 'Architecture Year 5 - Master\'s Thesis', category: 'University', chapters: { 'Capstone Design Project': { content: 'Comprehensive design project demonstrating mastery of architectural principles and professional skills.', videos: [{ id: 'arch5_123', title: 'Thesis Project', duration: '60:00' }], flashcards: [{ front: 'What is a design charrette?', back: 'Intensive collaborative design workshop' }], quiz: [{ question: 'Master\'s thesis should demonstrate?', options: ['Technical skills', 'Design ability', 'Research capability', 'All of the above'], correct: 3, explanation: 'Thesis demonstrates comprehensive architectural competency' }] }}},
        // Language Programs - Expanded Offerings
        // Mandarin Chinese
        mandarin_beginner: { name: 'Mandarin Chinese - Beginner', category: 'Language', chapters: { 'Basic Characters & Pronunciation': { content: 'Introduction to Mandarin pronunciation, basic characters, and fundamental grammar structures.', videos: [{ id: 'man_beg1', title: 'Mandarin Pronunciation', duration: '25:00' }, { id: 'man_beg2', title: 'Basic Characters', duration: '30:00' }, { id: 'man_beg3', title: 'Tones Practice', duration: '20:00' }], flashcards: [{ front: '你好 (nǐ hǎo)', back: 'Hello' }, { front: '谢谢 (xiè xiè)', back: 'Thank you' }, { front: '再见 (zài jiàn)', back: 'Goodbye' }, { front: '我 (wǒ)', back: 'I/me' }, { front: '你 (nǐ)', back: 'You' }], quiz: [{ question: 'How many tones does Mandarin have?', options: ['3', '4', '5', '6'], correct: 1, explanation: 'Mandarin has 4 main tones plus neutral tone' }, { question: 'What does 你好 mean?', options: ['Goodbye', 'Hello', 'Thank you', 'Please'], correct: 1, explanation: '你好 (nǐ hǎo) means hello' }] }}},
        mandarin_intermediate: { name: 'Mandarin Chinese - Intermediate', category: 'Language', chapters: { 'Complex Grammar & Characters': { content: 'Advanced grammar patterns, complex characters, and conversational skills development.', videos: [{ id: 'man_int1', title: 'Advanced Grammar', duration: '35:00' }, { id: 'man_int2', title: 'Character Combinations', duration: '28:00' }, { id: 'man_int3', title: 'Conversation Practice', duration: '32:00' }], flashcards: [{ front: '我正在学习中文 (wǒ zhèng zài xué xí zhōng wén)', back: 'I am studying Chinese' }, { front: '请问 (qǐng wèn)', back: 'Excuse me (polite)' }, { front: '多少钱 (duō shǎo qián)', back: 'How much money?' }], quiz: [{ question: 'What is HSK?', options: ['Chinese test', 'Grammar rule', 'Character type', 'Pronunciation guide'], correct: 0, explanation: 'HSK is the standardized Chinese proficiency test' }, { question: 'What does 正在 indicate?', options: ['Past tense', 'Present continuous', 'Future tense', 'Completed action'], correct: 1, explanation: '正在 indicates ongoing action' }] }}},
        mandarin_advanced: { name: 'Mandarin Chinese - Advanced', category: 'Language', chapters: { 'Business & Cultural Chinese': { content: 'Business Chinese, cultural contexts, and advanced reading and writing skills.', videos: [{ id: 'man_adv1', title: 'Business Chinese', duration: '40:00' }, { id: 'man_adv2', title: 'Cultural Context', duration: '35:00' }, { id: 'man_adv3', title: 'Advanced Writing', duration: '38:00' }], flashcards: [{ front: '商务会议 (shāng wù huì yì)', back: 'Business meeting' }, { front: '合作 (hé zuò)', back: 'Cooperation' }, { front: '投资 (tóu zī)', back: 'Investment' }], quiz: [{ question: 'Traditional vs Simplified Chinese?', options: ['Same thing', 'Different writing systems', 'Different languages', 'Different pronunciations'], correct: 1, explanation: 'Traditional and Simplified are different writing systems for Chinese' }, { question: 'What is guanxi?', options: ['Business card', 'Relationships', 'Money', 'Contract'], correct: 1, explanation: 'Guanxi refers to networks of influence and relationships' }] }}},
        mandarin_business: { name: 'Mandarin Chinese - Business', category: 'Language', chapters: { 'Professional Communication': { content: 'Professional Mandarin for business contexts, negotiations, and international trade.', videos: [{ id: 'man_bus1', title: 'Business Communication', duration: '45:00' }, { id: 'man_bus2', title: 'Negotiations', duration: '40:00' }, { id: 'man_bus3', title: 'International Trade', duration: '42:00' }], flashcards: [{ front: '合同 (hé tóng)', back: 'Contract' }, { front: '谈判 (tán pàn)', back: 'Negotiation' }, { front: '利润 (lì rùn)', back: 'Profit' }], quiz: [{ question: 'In Chinese business culture, what is important?', options: ['Speed', 'Relationships (guanxi)', 'Price only', 'Individual achievement'], correct: 1, explanation: 'Relationships (guanxi) are fundamental in Chinese business culture' }, { question: 'What does 合同 mean?', options: ['Meeting', 'Contract', 'Profit', 'Investment'], correct: 1, explanation: '合同 means contract' }] }}},
        
        // Spanish
        spanish_beginner: { name: 'Spanish - Beginner', category: 'Language', chapters: { 'Basic Grammar & Vocabulary': { content: 'Introduction to Spanish pronunciation, basic grammar, and essential vocabulary for daily communication.', videos: [{ id: 'spa_beg1', title: 'Spanish Pronunciation', duration: '20:00' }, { id: 'spa_beg2', title: 'Basic Verbs', duration: '25:00' }, { id: 'spa_beg3', title: 'Numbers & Time', duration: '18:00' }], flashcards: [{ front: 'Hola', back: 'Hello' }, { front: '¿Cómo estás?', back: 'How are you?' }, { front: 'Gracias', back: 'Thank you' }, { front: 'Por favor', back: 'Please' }, { front: 'Adiós', back: 'Goodbye' }, { front: 'Sí', back: 'Yes' }, { front: 'No', back: 'No' }], quiz: [{ question: 'How do you say "thank you" in Spanish?', options: ['Por favor', 'Gracias', 'De nada', 'Perdón'], correct: 1, explanation: 'Gracias means thank you in Spanish' }, { question: 'What does "Hola" mean?', options: ['Goodbye', 'Hello', 'Please', 'Thank you'], correct: 1, explanation: 'Hola means hello in Spanish' }] }}},
        spanish_intermediate: { name: 'Spanish - Intermediate', category: 'Language', chapters: { 'Advanced Grammar & Conversation': { content: 'Complex verb tenses, subjunctive mood, and conversational skills for intermediate learners.', videos: [{ id: 'spa_int1', title: 'Spanish Subjunctive', duration: '30:00' }, { id: 'spa_int2', title: 'Past Tenses', duration: '28:00' }, { id: 'spa_int3', title: 'Conversation Skills', duration: '35:00' }], flashcards: [{ front: 'Espero que tengas un buen día', back: 'I hope you have a good day' }, { front: 'Me gustaría aprender español', back: 'I would like to learn Spanish' }, { front: 'Ojalá que llueva', back: 'I hope it rains' }], quiz: [{ question: 'Which is the subjunctive form of "tener"?', options: ['tengo', 'tienes', 'tenga', 'tiene'], correct: 2, explanation: 'Tenga is the subjunctive form of tener' }, { question: 'When do you use the subjunctive?', options: ['Facts', 'Emotions/doubts', 'Past events', 'Future plans'], correct: 1, explanation: 'Subjunctive expresses emotions, doubts, desires' }] }}},
        spanish_advanced: { name: 'Spanish - Advanced', category: 'Language', chapters: { 'Literature & Professional Spanish': { content: 'Spanish literature analysis, professional communication, and cultural nuances.', videos: [{ id: 'spa_adv1', title: 'Spanish Literature', duration: '35:00' }, { id: 'spa_adv2', title: 'Business Spanish', duration: '32:00' }, { id: 'spa_adv3', title: 'Cultural Nuances', duration: '30:00' }], flashcards: [{ front: 'La literatura española es muy rica', back: 'Spanish literature is very rich' }, { front: 'Reunión de negocios', back: 'Business meeting' }, { front: 'Propuesta comercial', back: 'Business proposal' }], quiz: [{ question: 'Who wrote "Don Quixote"?', options: ['García Lorca', 'Cervantes', 'Borges', 'Neruda'], correct: 1, explanation: 'Miguel de Cervantes wrote Don Quixote' }, { question: 'What is "Realismo Mágico"?', options: ['Art style', 'Literary movement', 'Music genre', 'Dance form'], correct: 1, explanation: 'Magical Realism is a Latin American literary movement' }] }}},
        
        // French
        french_beginner: { name: 'French - Beginner', category: 'Language', chapters: { 'Basic French & Pronunciation': { content: 'French pronunciation, basic grammar, and essential vocabulary for beginners.', videos: [{ id: 'fr_beg1', title: 'French Pronunciation', duration: '22:00' }, { id: 'fr_beg2', title: 'Basic Verbs', duration: '26:00' }, { id: 'fr_beg3', title: 'French Articles', duration: '20:00' }], flashcards: [{ front: 'Bonjour', back: 'Hello' }, { front: 'Comment allez-vous?', back: 'How are you?' }, { front: 'Merci', back: 'Thank you' }, { front: 'Au revoir', back: 'Goodbye' }, { front: 'Oui', back: 'Yes' }, { front: 'Non', back: 'No' }, { front: 'Excusez-moi', back: 'Excuse me' }], quiz: [{ question: 'How do you say "please" in French?', options: ['Merci', 'Pardon', 'S\'il vous plaît', 'Excusez-moi'], correct: 2, explanation: 'S\'il vous plaît means please in French' }, { question: 'What does "Bonjour" mean?', options: ['Good evening', 'Hello/Good morning', 'Goodbye', 'Thank you'], correct: 1, explanation: 'Bonjour means hello or good morning' }] }}},
        french_intermediate: { name: 'French - Intermediate', category: 'Language', chapters: { 'Complex Grammar & Culture': { content: 'Advanced French grammar, cultural contexts, and intermediate conversation skills.', videos: [{ id: 'fr_int1', title: 'French Grammar', duration: '28:00' }, { id: 'fr_int2', title: 'French Culture', duration: '30:00' }, { id: 'fr_int3', title: 'Conditional Tense', duration: '25:00' }], flashcards: [{ front: 'Je voudrais améliorer mon français', back: 'I would like to improve my French' }, { front: 'Qu\'est-ce que vous pensez?', back: 'What do you think?' }, { front: 'C\'est très intéressant', back: 'It\'s very interesting' }], quiz: [{ question: 'What is the past participle of "faire"?', options: ['fais', 'fait', 'faire', 'faisant'], correct: 1, explanation: 'Fait is the past participle of faire' }, { question: 'Which auxiliary verb goes with "aller"?', options: ['être', 'avoir', 'both', 'neither'], correct: 0, explanation: 'Aller uses être as auxiliary verb' }] }}},
        french_advanced: { name: 'French - Advanced', category: 'Language', chapters: { 'French Literature & Business': { content: 'French literature, business French, and advanced cultural understanding.', videos: [{ id: 'fr_adv1', title: 'French Literature', duration: '32:00' }, { id: 'fr_adv2', title: 'Business French', duration: '35:00' }, { id: 'fr_adv3', title: 'French Philosophy', duration: '38:00' }], flashcards: [{ front: 'La littérature française influence le monde', back: 'French literature influences the world' }, { front: 'Réunion d\'affaires', back: 'Business meeting' }, { front: 'Proposition commerciale', back: 'Business proposal' }], quiz: [{ question: 'Who wrote "Les Misérables"?', options: ['Voltaire', 'Hugo', 'Camus', 'Proust'], correct: 1, explanation: 'Victor Hugo wrote Les Misérables' }, { question: 'What is "l\'existentialisme"?', options: ['Art movement', 'Philosophical movement', 'Political party', 'Literary genre'], correct: 1, explanation: 'Existentialism is a philosophical movement' }] }}},
        
        // German
        german_beginner: { name: 'German - Beginner', category: 'Language', chapters: { 'German Basics & Cases': { content: 'German pronunciation, basic grammar, and introduction to the case system.', videos: [{ id: 'ger_beg1', title: 'German Cases', duration: '25:00' }, { id: 'ger_beg2', title: 'German Pronunciation', duration: '22:00' }, { id: 'ger_beg3', title: 'Basic Verbs', duration: '28:00' }], flashcards: [{ front: 'Guten Tag', back: 'Good day' }, { front: 'Wie geht es Ihnen?', back: 'How are you?' }, { front: 'Danke', back: 'Thank you' }, { front: 'Bitte', back: 'Please/You\'re welcome' }, { front: 'Auf Wiedersehen', back: 'Goodbye' }, { front: 'Ja', back: 'Yes' }, { front: 'Nein', back: 'No' }], quiz: [{ question: 'How many cases does German have?', options: ['3', '4', '5', '6'], correct: 1, explanation: 'German has 4 cases: Nominativ, Akkusativ, Dativ, Genitiv' }, { question: 'What does "Guten Tag" mean?', options: ['Good evening', 'Good day', 'Good night', 'Good morning'], correct: 1, explanation: 'Guten Tag means good day' }] }}},
        german_intermediate: { name: 'German - Intermediate', category: 'Language', chapters: { 'Advanced Grammar & Conversation': { content: 'Complex German grammar, modal verbs, and intermediate conversation skills.', videos: [{ id: 'ger_int1', title: 'German Modal Verbs', duration: '30:00' }, { id: 'ger_int2', title: 'Subjunctive Mood', duration: '32:00' }, { id: 'ger_int3', title: 'Complex Sentences', duration: '28:00' }], flashcards: [{ front: 'Ich möchte Deutsch lernen', back: 'I would like to learn German' }, { front: 'Können Sie mir helfen?', back: 'Can you help me?' }, { front: 'Das ist sehr interessant', back: 'That is very interesting' }], quiz: [{ question: 'What is the past participle of "gehen"?', options: ['gegangen', 'geht', 'ging', 'gehen'], correct: 0, explanation: 'Gegangen is the past participle of gehen' }, { question: 'Which modal verb means "to want"?', options: ['können', 'wollen', 'müssen', 'dürfen'], correct: 1, explanation: 'Wollen means to want' }] }}},
        german_advanced: { name: 'German - Advanced', category: 'Language', chapters: { 'Literature & Business German': { content: 'German literature, business communication, and advanced cultural understanding.', videos: [{ id: 'ger_adv1', title: 'German Literature', duration: '35:00' }, { id: 'ger_adv2', title: 'Business German', duration: '32:00' }, { id: 'ger_adv3', title: 'German Philosophy', duration: '40:00' }], flashcards: [{ front: 'Die deutsche Literatur ist sehr reich', back: 'German literature is very rich' }, { front: 'Geschäftsbesprechung', back: 'Business meeting' }, { front: 'Vertragsverhandlung', back: 'Contract negotiation' }], quiz: [{ question: 'Who wrote "Faust"?', options: ['Schiller', 'Goethe', 'Heine', 'Kafka'], correct: 1, explanation: 'Johann Wolfgang von Goethe wrote Faust' }, { question: 'What is "die Aufklärung"?', options: ['Romanticism', 'Enlightenment', 'Renaissance', 'Baroque'], correct: 1, explanation: 'Die Aufklärung is the German Enlightenment period' }] }}},
        
        // Japanese
        japanese_beginner: { name: 'Japanese - Beginner', category: 'Language', chapters: { 'Hiragana & Basic Grammar': { content: 'Japanese writing systems, basic grammar, and essential phrases for beginners.', videos: [{ id: 'jp_beg1', title: 'Hiragana Basics', duration: '30:00' }, { id: 'jp_beg2', title: 'Katakana Basics', duration: '28:00' }, { id: 'jp_beg3', title: 'Basic Grammar', duration: '32:00' }], flashcards: [{ front: 'こんにちは (konnichiwa)', back: 'Hello' }, { front: 'ありがとう (arigatou)', back: 'Thank you' }, { front: 'さようなら (sayounara)', back: 'Goodbye' }, { front: 'はい (hai)', back: 'Yes' }, { front: 'いいえ (iie)', back: 'No' }, { front: 'すみません (sumimasen)', back: 'Excuse me/Sorry' }], quiz: [{ question: 'How many basic hiragana characters are there?', options: ['46', '50', '52', '48'], correct: 0, explanation: 'There are 46 basic hiragana characters' }, { question: 'What does ありがとう mean?', options: ['Hello', 'Thank you', 'Goodbye', 'Excuse me'], correct: 1, explanation: 'ありがとう means thank you' }] }}},
        japanese_intermediate: { name: 'Japanese - Intermediate', category: 'Language', chapters: { 'Kanji & Advanced Grammar': { content: 'Kanji characters, complex grammar patterns, and intermediate conversation skills.', videos: [{ id: 'jp_int1', title: 'Kanji Fundamentals', duration: '35:00' }, { id: 'jp_int2', title: 'Verb Forms', duration: '38:00' }, { id: 'jp_int3', title: 'Keigo (Honorifics)', duration: '40:00' }], flashcards: [{ front: '日本語を勉強しています (nihongo wo benkyou shiteimasu)', back: 'I am studying Japanese' }, { front: 'お疲れ様でした (otsukaresama deshita)', back: 'Thank you for your hard work' }, { front: 'どうぞよろしく (douzo yoroshiku)', back: 'Please treat me favorably' }], quiz: [{ question: 'What does 漢字 (kanji) mean?', options: ['Japanese letters', 'Chinese characters', 'Writing system', 'All of the above'], correct: 3, explanation: 'Kanji are Chinese characters used in Japanese writing' }, { question: 'What is keigo?', options: ['Verb form', 'Honorific language', 'Writing system', 'Grammar rule'], correct: 1, explanation: 'Keigo is the Japanese honorific language system' }] }}},
        japanese_advanced: { name: 'Japanese - Advanced', category: 'Language', chapters: { 'Business Japanese & Culture': { content: 'Advanced Japanese for business, cultural nuances, and professional communication.', videos: [{ id: 'jp_adv1', title: 'Business Japanese', duration: '42:00' }, { id: 'jp_adv2', title: 'Japanese Culture', duration: '38:00' }, { id: 'jp_adv3', title: 'Advanced Keigo', duration: '45:00' }], flashcards: [{ front: '会議を始めましょう (kaigi wo hajimemashou)', back: 'Let\'s start the meeting' }, { front: 'お世話になっております (osewa ni natte orimasu)', back: 'Thank you for your continued support' }, { front: 'ご苦労さまでした (gokurousama deshita)', back: 'Thank you for your hard work (to subordinate)' }], quiz: [{ question: 'In Japanese business, what is important?', options: ['Individual achievement', 'Hierarchy and respect', 'Speed', 'Direct communication'], correct: 1, explanation: 'Japanese business culture emphasizes hierarchy and respect' }, { question: 'What is "nemawashi"?', options: ['Meeting type', 'Behind-the-scenes consensus building', 'Business card', 'Bow type'], correct: 1, explanation: 'Nemawashi is building consensus behind the scenes' }] }}},
        
        // Korean
        korean_beginner: { name: 'Korean - Beginner', category: 'Language', chapters: { 'Hangul & Basic Grammar': { content: 'Korean alphabet (Hangul), basic grammar, and essential vocabulary for beginners.', videos: [{ id: 'kr_beg1', title: 'Hangul Basics', duration: '25:00' }, { id: 'kr_beg2', title: 'Korean Pronunciation', duration: '22:00' }, { id: 'kr_beg3', title: 'Basic Verbs', duration: '28:00' }], flashcards: [{ front: '안녕하세요 (annyeonghaseyo)', back: 'Hello' }, { front: '감사합니다 (gamsahamnida)', back: 'Thank you' }, { front: '안녕히 가세요 (annyeonghi gaseyo)', back: 'Goodbye' }, { front: '네 (ne)', back: 'Yes' }, { front: '아니요 (aniyo)', back: 'No' }, { front: '죄송합니다 (joesonghamnida)', back: 'I\'m sorry' }], quiz: [{ question: 'How many basic Hangul consonants are there?', options: ['14', '19', '21', '24'], correct: 1, explanation: 'There are 19 basic Hangul consonants' }, { question: 'What does 안녕하세요 mean?', options: ['Thank you', 'Hello', 'Goodbye', 'Excuse me'], correct: 1, explanation: '안녕하세요 means hello' }] }}},
        korean_intermediate: { name: 'Korean - Intermediate', category: 'Language', chapters: { 'Honorifics & Advanced Grammar': { content: 'Korean honorific system, complex grammar, and intermediate conversation skills.', videos: [{ id: 'kr_int1', title: 'Korean Honorifics', duration: '32:00' }, { id: 'kr_int2', title: 'Complex Grammar', duration: '35:00' }, { id: 'kr_int3', title: 'Conversation Practice', duration: '30:00' }], flashcards: [{ front: '한국어를 공부하고 있어요 (hangugeo-reul gongbu-hago isseoyo)', back: 'I am studying Korean' }, { front: '도와주세요 (dowajuseyo)', back: 'Please help me' }, { front: '이해했어요 (ihaehasseoyo)', back: 'I understood' }], quiz: [{ question: 'What is the Korean honorific system called?', options: ['Jondaetmal', 'Banmal', 'Hangul', 'Hanja'], correct: 0, explanation: 'Jondaetmal is the Korean honorific speech system' }, { question: 'When do you use honorifics?', options: ['With friends', 'With elders/superiors', 'Never', 'Always'], correct: 1, explanation: 'Honorifics are used with elders and superiors' }] }}},
        korean_advanced: { name: 'Korean - Advanced', category: 'Language', chapters: { 'Business Korean & Culture': { content: 'Advanced Korean for business, cultural understanding, and professional communication.', videos: [{ id: 'kr_adv1', title: 'Business Korean', duration: '40:00' }, { id: 'kr_adv2', title: 'Korean Culture', duration: '35:00' }, { id: 'kr_adv3', title: 'Advanced Honorifics', duration: '38:00' }], flashcards: [{ front: '회의를 시작하겠습니다 (hoeui-reul sijakhagetseumnida)', back: 'Let\'s start the meeting' }, { front: '수고하셨습니다 (sugohasyeotseumnida)', back: 'Thank you for your hard work' }, { front: '비즈니스 제안 (bijeuniseu jean)', back: 'Business proposal' }], quiz: [{ question: 'What is "nunchi" in Korean culture?', options: ['Business card', 'Social awareness', 'Bow type', 'Meeting style'], correct: 1, explanation: 'Nunchi is the ability to read social situations' }, { question: 'In Korean business, what\'s important?', options: ['Individual success', 'Hierarchy and relationships', 'Speed', 'Direct communication'], correct: 1, explanation: 'Korean business emphasizes hierarchy and relationships' }] }}},
        
        // Arabic
        arabic_beginner: { name: 'Arabic - Beginner', category: 'Language', chapters: { 'Arabic Alphabet & Basics': { content: 'Arabic alphabet, basic grammar, and essential phrases for beginners.', videos: [{ id: 'ar_beg1', title: 'Arabic Alphabet', duration: '28:00' }, { id: 'ar_beg2', title: 'Arabic Pronunciation', duration: '25:00' }, { id: 'ar_beg3', title: 'Basic Phrases', duration: '22:00' }], flashcards: [{ front: 'السلام عليكم (as-salamu alaykum)', back: 'Peace be upon you (Hello)' }, { front: 'شكرا (shukran)', back: 'Thank you' }, { front: 'مع السلامة (ma\'a as-salama)', back: 'Goodbye' }, { front: 'نعم (na\'am)', back: 'Yes' }, { front: 'لا (la)', back: 'No' }, { front: 'عفوا (\'afwan)', back: 'You\'re welcome' }], quiz: [{ question: 'How many letters are in the Arabic alphabet?', options: ['26', '28', '30', '32'], correct: 1, explanation: 'The Arabic alphabet has 28 letters' }, { question: 'Arabic is written from?', options: ['Left to right', 'Right to left', 'Top to bottom', 'Bottom to top'], correct: 1, explanation: 'Arabic is written from right to left' }] }}},
        arabic_intermediate: { name: 'Arabic - Intermediate', category: 'Language', chapters: { 'Grammar & Classical Arabic': { content: 'Advanced Arabic grammar, classical Arabic, and intermediate conversation skills.', videos: [{ id: 'ar_int1', title: 'Arabic Grammar', duration: '35:00' }, { id: 'ar_int2', title: 'Verb Conjugation', duration: '32:00' }, { id: 'ar_int3', title: 'Classical Arabic', duration: '38:00' }], flashcards: [{ front: 'أنا أتعلم اللغة العربية (ana ataallam al-lugha al-arabiyya)', back: 'I am learning Arabic' }, { front: 'هذا مهم جدا (hadha muhimm jiddan)', back: 'This is very important' }, { front: 'أريد أن أتعلم (ureed an ataallam)', back: 'I want to learn' }], quiz: [{ question: 'What is Modern Standard Arabic based on?', options: ['Egyptian Arabic', 'Classical Arabic', 'Gulf Arabic', 'Levantine Arabic'], correct: 1, explanation: 'Modern Standard Arabic is based on Classical Arabic' }, { question: 'What are the three short vowels in Arabic?', options: ['Fatha, Kasra, Damma', 'Alif, Waw, Ya', 'Hamza, Madda, Sukun', 'Noon, Meem, Lam'], correct: 0, explanation: 'The three short vowels are Fatha, Kasra, and Damma' }] }}},
        arabic_advanced: { name: 'Arabic - Advanced', category: 'Language', chapters: { 'Literature & Business Arabic': { content: 'Arabic literature, business communication, and advanced cultural understanding.', videos: [{ id: 'ar_adv1', title: 'Arabic Literature', duration: '40:00' }, { id: 'ar_adv2', title: 'Business Arabic', duration: '35:00' }, { id: 'ar_adv3', title: 'Islamic Culture', duration: '42:00' }], flashcards: [{ front: 'الأدب العربي غني جدا (al-adab al-arabi ghani jiddan)', back: 'Arabic literature is very rich' }, { front: 'اجتماع عمل (ijtima\'a amal)', back: 'Business meeting' }, { front: 'عقد تجاري (\'aqd tijari)', back: 'Business contract' }], quiz: [{ question: 'Who is considered the greatest Arabic poet?', options: ['Al-Mutanabbi', 'Imru al-Qais', 'Abu Nuwas', 'Al-Ma\'arri'], correct: 0, explanation: 'Al-Mutanabbi is often considered the greatest Arabic poet' }, { question: 'What is "adab" in Arabic culture?', options: ['Business', 'Literature/manners', 'Religion', 'Politics'], correct: 1, explanation: 'Adab refers to literature and proper conduct/manners' }] }}},
        
        // Italian
        italian_beginner: { name: 'Italian - Beginner', category: 'Language', chapters: { 'Italian Basics & Pronunciation': { content: 'Italian pronunciation, basic grammar, and essential vocabulary for beginners.', videos: [{ id: 'it_beg1', title: 'Italian Pronunciation', duration: '22:00' }, { id: 'it_beg2', title: 'Basic Verbs', duration: '25:00' }, { id: 'it_beg3', title: 'Italian Articles', duration: '20:00' }], flashcards: [{ front: 'Ciao', back: 'Hello/Goodbye' }, { front: 'Come stai?', back: 'How are you?' }, { front: 'Grazie', back: 'Thank you' }, { front: 'Prego', back: 'You\'re welcome/Please' }, { front: 'Arrivederci', back: 'Goodbye' }, { front: 'Sì', back: 'Yes' }, { front: 'No', back: 'No' }], quiz: [{ question: 'How do you say "thank you" in Italian?', options: ['Prego', 'Grazie', 'Scusi', 'Bene'], correct: 1, explanation: 'Grazie means thank you in Italian' }, { question: 'What does "Ciao" mean?', options: ['Thank you', 'Hello/Goodbye', 'Please', 'Excuse me'], correct: 1, explanation: 'Ciao can mean both hello and goodbye' }] }}},
        italian_intermediate: { name: 'Italian - Intermediate', category: 'Language', chapters: { 'Advanced Grammar & Culture': { content: 'Complex Italian grammar, cultural contexts, and intermediate conversation skills.', videos: [{ id: 'it_int1', title: 'Italian Grammar', duration: '30:00' }, { id: 'it_int2', title: 'Italian Culture', duration: '28:00' }, { id: 'it_int3', title: 'Subjunctive Mood', duration: '32:00' }], flashcards: [{ front: 'Sto imparando l\'italiano', back: 'I am learning Italian' }, { front: 'Mi piace molto l\'Italia', back: 'I like Italy very much' }, { front: 'Che cosa ne pensi?', back: 'What do you think about it?' }], quiz: [{ question: 'What is the past participle of "fare"?', options: ['fatto', 'fato', 'fare', 'facendo'], correct: 0, explanation: 'Fatto is the past participle of fare' }, { question: 'Which auxiliary verb goes with "andare"?', options: ['avere', 'essere', 'both', 'neither'], correct: 1, explanation: 'Andare uses essere as auxiliary verb' }] }}},
        italian_advanced: { name: 'Italian - Advanced', category: 'Language', chapters: { 'Literature & Business Italian': { content: 'Italian literature, business communication, and advanced cultural understanding.', videos: [{ id: 'it_adv1', title: 'Italian Literature', duration: '35:00' }, { id: 'it_adv2', title: 'Business Italian', duration: '32:00' }, { id: 'it_adv3', title: 'Italian Art & Culture', duration: '38:00' }], flashcards: [{ front: 'La letteratura italiana è molto ricca', back: 'Italian literature is very rich' }, { front: 'Riunione di lavoro', back: 'Business meeting' }, { front: 'Proposta commerciale', back: 'Business proposal' }], quiz: [{ question: 'Who wrote "The Divine Comedy"?', options: ['Petrarch', 'Dante', 'Boccaccio', 'Machiavelli'], correct: 1, explanation: 'Dante Alighieri wrote The Divine Comedy' }, { question: 'What is "il Rinascimento"?', options: ['Baroque period', 'Renaissance', 'Medieval period', 'Modern era'], correct: 1, explanation: 'Il Rinascimento is the Italian Renaissance' }] }}},
        
        // Portuguese
        portuguese_beginner: { name: 'Portuguese - Beginner', category: 'Language', chapters: { 'Portuguese Basics': { content: 'Portuguese pronunciation, basic grammar, and essential vocabulary for beginners.', videos: [{ id: 'pt_beg1', title: 'Portuguese Pronunciation', duration: '24:00' }, { id: 'pt_beg2', title: 'Basic Verbs', duration: '26:00' }, { id: 'pt_beg3', title: 'Portuguese Articles', duration: '22:00' }], flashcards: [{ front: 'Olá', back: 'Hello' }, { front: 'Como está?', back: 'How are you?' }, { front: 'Obrigado/Obrigada', back: 'Thank you' }, { front: 'Por favor', back: 'Please' }, { front: 'Tchau', back: 'Goodbye' }, { front: 'Sim', back: 'Yes' }, { front: 'Não', back: 'No' }], quiz: [{ question: 'How do you say "thank you" in Portuguese?', options: ['Por favor', 'Obrigado/Obrigada', 'Desculpe', 'Com licença'], correct: 1, explanation: 'Obrigado (male) or Obrigada (female) means thank you' }, { question: 'What does "Olá" mean?', options: ['Goodbye', 'Hello', 'Thank you', 'Please'], correct: 1, explanation: 'Olá means hello in Portuguese' }] }}},
        portuguese_intermediate: { name: 'Portuguese - Intermediate', category: 'Language', chapters: { 'Advanced Portuguese': { content: 'Complex Portuguese grammar, Brazilian vs European Portuguese, and intermediate skills.', videos: [{ id: 'pt_int1', title: 'Portuguese Variations', duration: '28:00' }, { id: 'pt_int2', title: 'Subjunctive Mood', duration: '30:00' }, { id: 'pt_int3', title: 'Brazilian Culture', duration: '32:00' }], flashcards: [{ front: 'Estou aprendendo português', back: 'I am learning Portuguese' }, { front: 'Gostaria de melhorar', back: 'I would like to improve' }, { front: 'Que legal!', back: 'How cool! (Brazilian)' }], quiz: [{ question: 'What is the main difference between Brazilian and European Portuguese?', options: ['Alphabet', 'Pronunciation and vocabulary', 'Grammar only', 'Writing system'], correct: 1, explanation: 'Brazilian and European Portuguese differ mainly in pronunciation and vocabulary' }, { question: 'In Brazil, "você" is used for?', options: ['Formal only', 'Informal only', 'Both formal and informal', 'Never used'], correct: 2, explanation: 'In Brazil, "você" is used for both formal and informal situations' }] }}},
        portuguese_advanced: { name: 'Portuguese - Advanced', category: 'Language', chapters: { 'Literature & Business Portuguese': { content: 'Portuguese literature, business communication, and advanced cultural understanding.', videos: [{ id: 'pt_adv1', title: 'Portuguese Literature', duration: '35:00' }, { id: 'pt_adv2', title: 'Business Portuguese', duration: '32:00' }, { id: 'pt_adv3', title: 'Lusophone Culture', duration: '38:00' }], flashcards: [{ front: 'A literatura lusófona é muito rica', back: 'Lusophone literature is very rich' }, { front: 'Reunião de negócios', back: 'Business meeting' }, { front: 'Proposta comercial', back: 'Business proposal' }], quiz: [{ question: 'Who wrote "Os Lusíadas"?', options: ['Pessoa', 'Camões', 'Saramago', 'Machado'], correct: 1, explanation: 'Luís de Camões wrote Os Lusíadas' }, { question: 'What does "lusophone" mean?', options: ['Spanish-speaking', 'Portuguese-speaking', 'French-speaking', 'Italian-speaking'], correct: 1, explanation: 'Lusophone refers to Portuguese-speaking countries' }] }}},
        
        // Russian
        russian_beginner: { name: 'Russian - Beginner', category: 'Language', chapters: { 'Cyrillic & Russian Basics': { content: 'Cyrillic alphabet, basic Russian grammar, and essential phrases for beginners.', videos: [{ id: 'ru_beg1', title: 'Cyrillic Alphabet', duration: '30:00' }, { id: 'ru_beg2', title: 'Russian Pronunciation', duration: '25:00' }, { id: 'ru_beg3', title: 'Basic Phrases', duration: '28:00' }], flashcards: [{ front: 'Привет (privet)', back: 'Hello' }, { front: 'Спасибо (spasibo)', back: 'Thank you' }, { front: 'До свидания (do svidaniya)', back: 'Goodbye' }, { front: 'Да (da)', back: 'Yes' }, { front: 'Нет (net)', back: 'No' }, { front: 'Извините (izvinite)', back: 'Excuse me' }], quiz: [{ question: 'How many letters are in the Russian Cyrillic alphabet?', options: ['31', '33', '35', '37'], correct: 1, explanation: 'The Russian Cyrillic alphabet has 33 letters' }, { question: 'What does Привет mean?', options: ['Goodbye', 'Hello', 'Thank you', 'Please'], correct: 1, explanation: 'Привет means hello (informal)' }] }}},
        russian_intermediate: { name: 'Russian - Intermediate', category: 'Language', chapters: { 'Cases & Advanced Grammar': { content: 'Russian case system, complex grammar, and intermediate conversation skills.', videos: [{ id: 'ru_int1', title: 'Russian Cases', duration: '35:00' }, { id: 'ru_int2', title: 'Verb Aspects', duration: '32:00' }, { id: 'ru_int3', title: 'Complex Sentences', duration: '38:00' }], flashcards: [{ front: 'Я изучаю русский язык (ya izuchayu russkiy yazyk)', back: 'I am studying Russian' }, { front: 'Мне нравится Россия (mne nravitsya Rossiya)', back: 'I like Russia' }, { front: 'Помогите, пожалуйста (pomogite, pozhaluysta)', back: 'Please help me' }], quiz: [{ question: 'How many cases does Russian have?', options: ['4', '5', '6', '7'], correct: 2, explanation: 'Russian has 6 cases: nominative, accusative, genitive, dative, instrumental, prepositional' }, { question: 'What are the two verb aspects in Russian?', options: ['Past and present', 'Perfective and imperfective', 'Active and passive', 'Simple and complex'], correct: 1, explanation: 'Russian verbs have perfective and imperfective aspects' }] }}},
        russian_advanced: { name: 'Russian - Advanced', category: 'Language', chapters: { 'Literature & Business Russian': { content: 'Russian literature, business communication, and advanced cultural understanding.', videos: [{ id: 'ru_adv1', title: 'Russian Literature', duration: '40:00' }, { id: 'ru_adv2', title: 'Business Russian', duration: '35:00' }, { id: 'ru_adv3', title: 'Russian Culture', duration: '42:00' }], flashcards: [{ front: 'Русская литература очень богата (russkaya literatura ochen bogata)', back: 'Russian literature is very rich' }, { front: 'Деловая встреча (delovaya vstrecha)', back: 'Business meeting' }, { front: 'Коммерческое предложение (kommercheskoye predlozheniye)', back: 'Business proposal' }], quiz: [{ question: 'Who wrote "War and Peace"?', options: ['Dostoevsky', 'Tolstoy', 'Chekhov', 'Pushkin'], correct: 1, explanation: 'Leo Tolstoy wrote War and Peace' }, { question: 'What is the "Russian soul" concept?', options: ['Religious belief', 'Cultural identity', 'Political system', 'Economic theory'], correct: 1, explanation: 'The "Russian soul" refers to Russian cultural and spiritual identity' }] }}},
        
        // Hindi
        hindi_beginner: { name: 'Hindi - Beginner', category: 'Language', chapters: { 'Devanagari & Hindi Basics': { content: 'Devanagari script, basic Hindi grammar, and essential vocabulary for beginners.', videos: [{ id: 'hi_beg1', title: 'Devanagari Script', duration: '28:00' }, { id: 'hi_beg2', title: 'Hindi Pronunciation', duration: '25:00' }, { id: 'hi_beg3', title: 'Basic Phrases', duration: '30:00' }], flashcards: [{ front: 'नमस्ते (namaste)', back: 'Hello' }, { front: 'धन्यवाद (dhanyawad)', back: 'Thank you' }, { front: 'अलविदा (alvida)', back: 'Goodbye' }, { front: 'हाँ (haan)', back: 'Yes' }, { front: 'नहीं (nahin)', back: 'No' }, { front: 'माफ करिए (maaf kariye)', back: 'Excuse me' }], quiz: [{ question: 'What script is used to write Hindi?', options: ['Latin', 'Arabic', 'Devanagari', 'Cyrillic'], correct: 2, explanation: 'Hindi is written in Devanagari script' }, { question: 'What does नमस्ते mean?', options: ['Goodbye', 'Hello', 'Thank you', 'Please'], correct: 1, explanation: 'नमस्ते means hello and is a respectful greeting' }] }}},
        hindi_intermediate: { name: 'Hindi - Intermediate', category: 'Language', chapters: { 'Advanced Hindi Grammar': { content: 'Complex Hindi grammar, verb conjugations, and intermediate conversation skills.', videos: [{ id: 'hi_int1', title: 'Hindi Grammar', duration: '32:00' }, { id: 'hi_int2', title: 'Verb Conjugations', duration: '35:00' }, { id: 'hi_int3', title: 'Hindi Culture', duration: '30:00' }], flashcards: [{ front: 'मैं हिंदी सीख रहा हूँ (main hindi seekh raha hun)', back: 'I am learning Hindi' }, { front: 'आप कैसे हैं? (aap kaise hain?)', back: 'How are you?' }, { front: 'मुझे हिंदी पसंद है (mujhe hindi pasand hai)', back: 'I like Hindi' }], quiz: [{ question: 'Hindi belongs to which language family?', options: ['Sino-Tibetan', 'Indo-European', 'Afro-Asiatic', 'Dravidian'], correct: 1, explanation: 'Hindi belongs to the Indo-European language family' }, { question: 'What is the formal way to say "you" in Hindi?', options: ['तू (tu)', 'तुम (tum)', 'आप (aap)', 'वह (vah)'], correct: 2, explanation: 'आप is the formal and respectful way to say "you"' }] }}},
        hindi_advanced: { name: 'Hindi - Advanced', category: 'Language', chapters: { 'Literature & Business Hindi': { content: 'Hindi literature, business communication, and advanced cultural understanding.', videos: [{ id: 'hi_adv1', title: 'Hindi Literature', duration: '38:00' }, { id: 'hi_adv2', title: 'Business Hindi', duration: '35:00' }, { id: 'hi_adv3', title: 'Indian Culture', duration: '40:00' }], flashcards: [{ front: 'हिंदी साहित्य बहुत समृद्ध है (hindi sahitya bahut samriddh hai)', back: 'Hindi literature is very rich' }, { front: 'व्यापारिक बैठक (vyaaparik baithak)', back: 'Business meeting' }, { front: 'व्यावसायिक प्रस्ताव (vyaavasayik prastav)', back: 'Business proposal' }], quiz: [{ question: 'Who is considered the father of modern Hindi literature?', options: ['Premchand', 'Bharatendu Harishchandra', 'Maithili Sharan Gupt', 'Harivansh Rai Bachchan'], correct: 1, explanation: 'Bharatendu Harishchandra is considered the father of modern Hindi literature' }, { question: 'What is "Bollywood"?', options: ['Indian politics', 'Hindi film industry', 'Indian cuisine', 'Religious festival'], correct: 1, explanation: 'Bollywood refers to the Hindi-language film industry' }] }}},
        // Finance Program
        uni_finance: { name: 'Finance - Corporate Finance', category: 'University', chapters: { 'Financial Fundamentals': { content: 'Time value of money, financial markets, corporate finance principles, and investment analysis.', videos: [{ id: 'fin_123', title: 'Finance Fundamentals', duration: '35:00' }], flashcards: [{ front: 'What is NPV?', back: 'Net Present Value - measure of investment profitability' }], quiz: [{ question: 'What is compound interest?', options: ['Simple interest', 'Interest on interest', 'Bank fee', 'Investment loss'], correct: 1, explanation: 'Compound interest is earning interest on previously earned interest' }] }}},
        fin_year1: { name: 'Finance Year 1 - Financial Markets', category: 'University', chapters: { 'Markets & Institutions': { content: 'Financial markets, institutions, and basic investment principles.', videos: [{ id: 'fin1_123', title: 'Financial Markets', duration: '40:00' }], flashcards: [{ front: 'What is a stock?', back: 'Ownership share in a company' }], quiz: [{ question: 'What is the NYSE?', options: ['New York Stock Exchange', 'National Yield Securities Exchange', 'New York Securities Exchange', 'National York Stock Exchange'], correct: 0, explanation: 'NYSE stands for New York Stock Exchange' }] }}},
        fin_year2: { name: 'Finance Year 2 - Corporate Finance', category: 'University', chapters: { 'Capital Structure & Valuation': { content: 'Corporate financial decisions, capital structure, and company valuation methods.', videos: [{ id: 'fin2_123', title: 'Corporate Valuation', duration: '45:00' }], flashcards: [{ front: 'What is WACC?', back: 'Weighted Average Cost of Capital' }], quiz: [{ question: 'What affects a company\'s cost of capital?', options: ['Risk', 'Market conditions', 'Capital structure', 'All of the above'], correct: 3, explanation: 'Cost of capital is affected by multiple factors including risk and market conditions' }] }}},
        fin_year3: { name: 'Finance Year 3 - Investment Analysis', category: 'University', chapters: { 'Portfolio Management & Derivatives': { content: 'Investment analysis, portfolio theory, derivatives, and risk management.', videos: [{ id: 'fin3_123', title: 'Portfolio Theory', duration: '50:00' }], flashcards: [{ front: 'What is diversification?', back: 'Spreading investments to reduce risk' }], quiz: [{ question: 'What is a derivative?', options: ['Basic security', 'Financial contract based on underlying asset', 'Bank account', 'Insurance policy'], correct: 1, explanation: 'Derivatives derive their value from underlying assets' }] }}},
        fin_year4: { name: 'Finance Year 4 - Advanced Finance', category: 'University', chapters: { 'International Finance & Fintech': { content: 'International finance, fintech innovations, and advanced financial modeling.', videos: [{ id: 'fin4_123', title: 'International Finance', duration: '55:00' }], flashcards: [{ front: 'What is fintech?', back: 'Financial technology - tech-enabled financial services' }], quiz: [{ question: 'Blockchain is used in finance for?', options: ['Decoration', 'Transparency and security', 'Marketing', 'Office design'], correct: 1, explanation: 'Blockchain provides transparency and security in financial transactions' }] }}}
    },
    filters: {
        all: { name: 'All Subjects', icon: '🌟', count: 111, subjects: ['math', 'biology', 'chemistry', 'physics', 'english', 'igcse_history', 'igcse_geography', 'igcse_art', 'kcpe_math', 'kcpe_english', 'kcpe_science', 'kcpe_kiswahili', 'kcpe_social', 'kcpe_cre', 'kcse_math', 'kcse_biology', 'kcse_chemistry', 'kcse_physics', 'kcse_history', 'kcse_geography', 'alevel_math', 'alevel_physics', 'alevel_chemistry', 'alevel_biology', 'alevel_english', 'alevel_history', 'alevel_geography', 'alevel_economics', 'alevel_psychology', 'alevel_sociology', 'alevel_business', 'alevel_computer', 'uni_medicine', 'uni_law', 'uni_engineering', 'uni_business', 'uni_computer', 'uni_economics', 'uni_accounting', 'uni_graphic_design', 'uni_architecture', 'uni_finance', 'med_year1', 'med_year2', 'med_year3', 'med_year4', 'eng_year1', 'eng_year2', 'eng_year3', 'eng_year4', 'cs_year1', 'cs_year2', 'cs_year3', 'cs_year4', 'law_year1', 'law_year2', 'law_year3', 'law_year4', 'bus_year1', 'bus_year2', 'bus_year3', 'bus_year4', 'econ_year1', 'econ_year2', 'econ_year3', 'acc_year1', 'acc_year2', 'acc_year3', 'acc_year4', 'ib_math', 'ib_physics', 'ib_chemistry', 'ib_biology', 'ib_english', 'gd_year1', 'gd_year2', 'gd_year3', 'gd_year4', 'arch_year1', 'arch_year2', 'arch_year3', 'arch_year4', 'arch_year5', 'mandarin_beginner', 'mandarin_intermediate', 'mandarin_advanced', 'mandarin_business', 'spanish_beginner', 'spanish_intermediate', 'spanish_advanced', 'french_beginner', 'french_intermediate', 'french_advanced', 'german_beginner', 'german_intermediate', 'japanese_beginner', 'japanese_intermediate', 'korean_beginner', 'korean_intermediate', 'arabic_beginner', 'arabic_intermediate', 'italian_beginner', 'italian_intermediate', 'portuguese_beginner', 'portuguese_intermediate', 'russian_beginner', 'russian_intermediate', 'hindi_beginner', 'hindi_intermediate', 'fin_year1', 'fin_year2', 'fin_year3', 'fin_year4'] },
        igcse: { name: 'IGCSE', icon: '🎓', count: 8, subjects: ['math', 'biology', 'chemistry', 'physics', 'english', 'igcse_history', 'igcse_geography', 'igcse_art'] },
        kcpe: { name: 'KCPE', icon: '🏫', count: 6, subjects: ['kcpe_math', 'kcpe_english', 'kcpe_science', 'kcpe_kiswahili', 'kcpe_social', 'kcpe_cre'] },
        kcse: { name: 'KCSE', icon: '📖', count: 6, subjects: ['kcse_math', 'kcse_biology', 'kcse_chemistry', 'kcse_physics', 'kcse_history', 'kcse_geography'] },
        alevel: { name: 'A-Level', icon: '🏆', count: 12, subjects: ['alevel_math', 'alevel_physics', 'alevel_chemistry', 'alevel_biology', 'alevel_english', 'alevel_history', 'alevel_geography', 'alevel_economics', 'alevel_psychology', 'alevel_sociology', 'alevel_business', 'alevel_computer'] },
        university: { name: 'University', icon: '🏛️', count: 54, subjects: ['uni_medicine', 'uni_law', 'uni_engineering', 'uni_business', 'uni_computer', 'uni_economics', 'uni_accounting', 'uni_graphic_design', 'uni_architecture', 'uni_finance', 'med_year1', 'med_year2', 'med_year3', 'med_year4', 'eng_year1', 'eng_year2', 'eng_year3', 'eng_year4', 'cs_year1', 'cs_year2', 'cs_year3', 'cs_year4', 'law_year1', 'law_year2', 'law_year3', 'law_year4', 'bus_year1', 'bus_year2', 'bus_year3', 'bus_year4', 'econ_year1', 'econ_year2', 'econ_year3', 'acc_year1', 'acc_year2', 'acc_year3', 'acc_year4', 'gd_year1', 'gd_year2', 'gd_year3', 'gd_year4', 'arch_year1', 'arch_year2', 'arch_year3', 'arch_year4', 'arch_year5', 'fin_year1', 'fin_year2', 'fin_year3', 'fin_year4'] },
        ib: { name: 'IB Diploma', icon: '🌍', count: 5, subjects: ['ib_math', 'ib_physics', 'ib_chemistry', 'ib_biology', 'ib_english'] },
        language: { name: 'Languages', icon: '🗣️', count: 25, subjects: ['mandarin_beginner', 'mandarin_intermediate', 'mandarin_advanced', 'mandarin_business', 'spanish_beginner', 'spanish_intermediate', 'spanish_advanced', 'french_beginner', 'french_intermediate', 'french_advanced', 'german_beginner', 'german_intermediate', 'japanese_beginner', 'japanese_intermediate', 'korean_beginner', 'korean_intermediate', 'arabic_beginner', 'arabic_intermediate', 'italian_beginner', 'italian_intermediate', 'portuguese_beginner', 'portuguese_intermediate', 'russian_beginner', 'russian_intermediate', 'hindi_beginner', 'hindi_intermediate'] }
    },
    subjectCategories: {
        sciences: { name: 'Sciences', icon: '🔬', subjects: ['biology', 'chemistry', 'physics', 'kcpe_science', 'kcse_biology', 'kcse_chemistry', 'kcse_physics', 'alevel_physics', 'alevel_chemistry', 'alevel_biology', 'uni_medicine', 'med_year1', 'med_year2', 'med_year3', 'med_year4'] },
        mathematics: { name: 'Mathematics', icon: '📐', subjects: ['math', 'kcpe_math', 'kcse_math', 'alevel_math', 'uni_engineering', 'eng_year1', 'eng_year2', 'eng_year3', 'eng_year4'] },
        languages: { name: 'Languages', icon: '📝', subjects: ['english', 'kcpe_english', 'kcpe_kiswahili', 'alevel_english'] },
        humanities: { name: 'Humanities', icon: '🏺', subjects: ['igcse_history', 'igcse_geography', 'kcpe_social', 'kcpe_cre', 'kcse_history', 'kcse_geography', 'alevel_history', 'alevel_geography', 'alevel_psychology', 'alevel_sociology', 'uni_law'] },
        technology: { name: 'Technology', icon: '💻', subjects: ['alevel_computer', 'uni_computer', 'cs_year1', 'cs_year2', 'cs_year3', 'cs_year4'] },
        business: { name: 'Business', icon: '💼', subjects: ['alevel_business', 'alevel_economics', 'uni_business', 'uni_economics', 'uni_accounting', 'uni_finance', 'acc_year1', 'acc_year2', 'acc_year3', 'acc_year4', 'fin_year1', 'fin_year2', 'fin_year3', 'fin_year4'] },
        arts: { name: 'Arts & Design', icon: '🎨', subjects: ['igcse_art', 'uni_graphic_design', 'uni_architecture', 'gd_year1', 'gd_year2', 'gd_year3', 'gd_year4', 'arch_year1', 'arch_year2', 'arch_year3', 'arch_year4', 'arch_year5'] },
        languages: { name: 'Languages', icon: '🗣️', subjects: ['english', 'kcpe_english', 'kcpe_kiswahili', 'alevel_english', 'ib_english', 'mandarin_beginner', 'mandarin_intermediate', 'mandarin_advanced', 'mandarin_business', 'spanish_beginner', 'spanish_intermediate', 'spanish_advanced', 'french_beginner', 'french_intermediate', 'french_advanced', 'german_beginner', 'german_intermediate', 'japanese_beginner', 'japanese_intermediate', 'korean_beginner', 'korean_intermediate', 'arabic_beginner', 'arabic_intermediate', 'italian_beginner', 'italian_intermediate', 'portuguese_beginner', 'portuguese_intermediate', 'russian_beginner', 'russian_intermediate', 'hindi_beginner', 'hindi_intermediate'] }
    },
    gods: {
        zeus: { symbol: '⚡', name: 'Zeus', power: 'Lightning', theme: { bg: 'conic-gradient(from 45deg, #1e40af 0%, #3b82f6 25%, #fbbf24 50%, #1e40af 75%, #3b82f6 100%)', accent: '#fbbf24', secondary: '#ffffff', tertiary: '#ffffff', textColor: '#ffffff', animation: 'lightning', particles: '⚡🌩️⛈️', sound: 'thunder' }},
        hera: { symbol: '🦚', name: 'Hera', power: 'Marriage', theme: { bg: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 20%, #fbbf24 40%, #7c3aed 60%, #4c1d95 100%)', accent: '#fbbf24', secondary: '#ffffff', tertiary: '#ffffff', textColor: '#ffffff', animation: 'royal-glow', particles: '🦚👑💎', sound: 'regal' }},
        poseidon: { symbol: '🔱', name: 'Poseidon', power: 'Ocean', theme: { bg: 'repeating-linear-gradient(45deg, #0c4a6e 0%, #0284c7 25%, #38bdf8 50%, #0284c7 75%, #0c4a6e 100%)', accent: '#06b6d4', secondary: '#ffffff', tertiary: '#ffffff', textColor: '#ffffff', animation: 'wave-motion', particles: '🌊🐚🐟', sound: 'ocean-waves' }},
        athena: { symbol: '🏛️', name: 'Athena', power: 'Wisdom', theme: { bg: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 25%, #94a3b8 50%, #475569 75%, #1e293b 100%)', accent: '#1e293b', secondary: '#3b82f6', tertiary: '#000000', textColor: '#000000', animation: 'wisdom-pulse', particles: '🦉📚⚖️', sound: 'temple-bells' }},
        apollo: { symbol: '☀️', name: 'Apollo', power: 'Sun', theme: { bg: 'radial-gradient(ellipse at center, #fef3c7 0%, #fbbf24 30%, #f59e0b 60%, #d97706 80%, #92400e 100%)', accent: '#92400e', secondary: '#000000', tertiary: '#000000', textColor: '#000000', animation: 'solar-flare', particles: '☀️🎵🏹', sound: 'lyre-music' }},
        artemis: { symbol: '🌙', name: 'Artemis', power: 'Moon', theme: { bg: 'conic-gradient(from 180deg, #0f172a 0%, #334155 30%, #64748b 60%, #cbd5e1 90%, #0f172a 100%)', accent: '#e2e8f0', secondary: '#10b981', tertiary: '#ffffff', textColor: '#ffffff', animation: 'moonbeam', particles: '🌙🦌🏹', sound: 'forest-night' }},
        ares: { symbol: '⚔️', name: 'Ares', power: 'War', theme: { bg: 'repeating-conic-gradient(from 0deg, #7f1d1d 0%, #dc2626 20%, #000000 40%, #dc2626 60%, #7f1d1d 80%)', accent: '#fca5a5', secondary: '#fbbf24', tertiary: '#ffffff', textColor: '#ffffff', animation: 'battle-rage', particles: '⚔️🛡️🔥', sound: 'war-drums' }},
        aphrodite: { symbol: '🌹', name: 'Aphrodite', power: 'Love', theme: { bg: 'conic-gradient(from 90deg, #fce7f3 0%, #f9a8d4 25%, #ec4899 50%, #be185d 75%, #fce7f3 100%)', accent: '#be185d', secondary: '#fbbf24', tertiary: '#000000', textColor: '#000000', animation: 'love-sparkle', particles: '🌹💕✨', sound: 'romantic-harp' }},
        hephaestus: { symbol: '🔨', name: 'Hephaestus', power: 'Fire', theme: { bg: 'repeating-radial-gradient(circle, #7c2d12 0%, #ea580c 20%, #fbbf24 40%, #ea580c 60%, #7c2d12 80%)', accent: '#fed7aa', secondary: '#dc2626', tertiary: '#ffffff', textColor: '#ffffff', animation: 'forge-fire', particles: '🔨🔥⚒️', sound: 'anvil-strikes' }},
        hermes: { symbol: '🏃', name: 'Hermes', power: 'Speed', theme: { bg: 'linear-gradient(270deg, #ffffff 0%, #e5e7eb 15%, #9ca3af 30%, #6b7280 45%, #374151 60%, #6b7280 75%, #9ca3af 90%, #ffffff 100%)', accent: '#374151', secondary: '#10b981', tertiary: '#000000', textColor: '#000000', animation: 'speed-blur', particles: '🏃💨📨', sound: 'wind-rush' }},
        demeter: { symbol: '🌾', name: 'Demeter', power: 'Harvest', theme: { bg: 'repeating-linear-gradient(90deg, #365314 0%, #65a30d 25%, #bef264 50%, #65a30d 75%, #365314 100%)', accent: '#365314', secondary: '#fbbf24', tertiary: '#000000', textColor: '#000000', animation: 'harvest-sway', particles: '🌾🌻🍃', sound: 'nature-breeze' }},
        dionysus: { symbol: '🍇', name: 'Dionysus', power: 'Wine', theme: { bg: 'conic-gradient(from 270deg, #581c87 0%, #a21caf 20%, #fbbf24 40%, #84cc16 60%, #a21caf 80%, #581c87 100%)', accent: '#d8b4fe', secondary: '#84cc16', tertiary: '#ffffff', textColor: '#ffffff', animation: 'wine-swirl', particles: '🍇🍷🎭', sound: 'celebration' }},
        hades: { symbol: '💀', name: 'Hades', power: 'Underworld', theme: { bg: 'radial-gradient(ellipse at center, #000000 0%, #1a1a1a 20%, #581c87 40%, #9333ea 60%, #1a1a1a 80%, #000000 100%)', accent: '#9333ea', secondary: '#ef4444', tertiary: '#ffffff', textColor: '#ffffff', animation: 'shadow-pulse', particles: '💀👻🔮', sound: 'underworld-whispers' }}
    },
    shop: {
        auras: {
            golden: { name: 'Golden Aura', price: 75, icon: '✨', owned: false, description: 'Radiate divine golden light' },
            lightning: { name: 'Lightning Aura', price: 100, icon: '⚡', owned: false, description: 'Crackle with Zeus\'s power' },
            ocean: { name: 'Ocean Aura', price: 85, icon: '🌊', owned: false, description: 'Flow with Poseidon\'s waves' }
        },
        backgrounds: {
            olympus: { name: 'Mount Olympus', price: 150, icon: '🏔️', owned: false, description: 'Home of the gods' },
            temple: { name: 'Sacred Temple', price: 120, icon: '🏛️', owned: false, description: 'Ancient Greek temple' },
            stars: { name: 'Starry Night', price: 100, icon: '🌌', owned: false, description: 'Celestial beauty' }
        },
        pets: {
            owl: { name: "Athena's Owl", price: 500, icon: '🦉', owned: false, description: 'Wise companion' },
            eagle: { name: "Zeus's Eagle", price: 600, icon: '🦅', owned: false, description: 'Majestic bird' },
            dolphin: { name: "Poseidon's Dolphin", price: 450, icon: '🐬', owned: false, description: 'Playful friend' }
        },
        powers: {
            doubleXP: { name: 'Double XP (24h)', price: 400, icon: '✨', owned: false, description: 'Double XP gains' },
            streakProtect: { name: 'Streak Shield', price: 300, icon: '🛡️', owned: false, description: 'Protects streak' },
            instantLevel: { name: 'Level Boost', price: 1000, icon: '🚀', owned: false, description: 'Gain one level' }
        },
        titles: {
            scholar: { name: 'Divine Scholar', price: 150, icon: '🎓', owned: false, description: 'Academic prowess' },
            warrior: { name: 'Knowledge Warrior', price: 200, icon: '⚔️', owned: false, description: 'Battle-tested learner' },
            champion: { name: 'Olympian Champion', price: 500, icon: '🏆', owned: false, description: 'Ultimate achievement' }
        },
        godThemes: {
            zeusTheme: { name: "Zeus's Thunder", price: 400, icon: '⚡', owned: false, description: 'Royal lightning theme' },
            heraTheme: { name: "Hera's Majesty", price: 380, icon: '🦚', owned: false, description: 'Regal purple theme' },
            poseidonTheme: { name: "Poseidon's Depths", price: 350, icon: '🔱', owned: false, description: 'Ocean depths theme' },
            athenaTheme: { name: "Athena's Wisdom", price: 360, icon: '🏛️', owned: false, description: 'Wise silver theme' }
        },
        avatars: {
            zeus: { name: 'Zeus Avatar', price: 120, icon: '👑', owned: false, description: 'Embody the king of gods' },
            athena: { name: 'Athena Avatar', price: 100, icon: '🦉', owned: false, description: 'Channel divine wisdom' },
            poseidon: { name: 'Poseidon Avatar', price: 110, icon: '🌊', owned: false, description: 'Rule the seas' },
            apollo: { name: 'Apollo Avatar', price: 105, icon: '🎵', owned: false, description: 'Radiate solar power' }
        }
    }
};

let playerState = { subject: 'math', chapter: 'Number Systems', god: 'athena', currentFilter: 'all', progress: { xp: 0, level: 1, streak: 0, coins: 100, health: 100, mana: 100, accuracy: 0 }};

// AI Learning Analytics System
let learningAnalytics = {
    sessions: [],
    patterns: {
        preferredMethods: {},
        studyTimes: [],
        subjectPerformance: {},
        learningStyle: 'balanced',
        weakAreas: [],
        strengths: []
    },
    insights: []
};

// AI Pattern Recognition Functions
function trackStudySession(method, subject, duration, performance) {
    const session = {
        timestamp: Date.now(),
        method: method,
        subject: subject,
        duration: duration,
        performance: performance,
        timeOfDay: new Date().getHours()
    };
    
    learningAnalytics.sessions.push(session);
    analyzePatterns();
    generateInsights();
}

function analyzePatterns() {
    const sessions = learningAnalytics.sessions;
    if (sessions.length < 3) return;
    
    // Analyze preferred study methods
    const methodCounts = {};
    sessions.forEach(s => {
        methodCounts[s.method] = (methodCounts[s.method] || 0) + 1;
    });
    learningAnalytics.patterns.preferredMethods = methodCounts;
    
    // Analyze study times
    const timePerformance = {};
    sessions.forEach(s => {
        const hour = s.timeOfDay;
        if (!timePerformance[hour]) timePerformance[hour] = [];
        timePerformance[hour].push(s.performance);
    });
    
    // Find best study times
    let bestHour = 0, bestAvg = 0;
    Object.keys(timePerformance).forEach(hour => {
        const avg = timePerformance[hour].reduce((a,b) => a+b, 0) / timePerformance[hour].length;
        if (avg > bestAvg) { bestAvg = avg; bestHour = hour; }
    });
    learningAnalytics.patterns.bestStudyTime = bestHour;
    
    // Analyze subject performance
    const subjectPerf = {};
    sessions.forEach(s => {
        if (!subjectPerf[s.subject]) subjectPerf[s.subject] = [];
        subjectPerf[s.subject].push(s.performance);
    });
    
    Object.keys(subjectPerf).forEach(subject => {
        const avg = subjectPerf[subject].reduce((a,b) => a+b, 0) / subjectPerf[subject].length;
        learningAnalytics.patterns.subjectPerformance[subject] = avg;
        
        if (avg < 60) learningAnalytics.patterns.weakAreas.push(subject);
        if (avg > 85) learningAnalytics.patterns.strengths.push(subject);
    });
    
    // Determine learning style
    const topMethod = Object.keys(methodCounts).reduce((a, b) => methodCounts[a] > methodCounts[b] ? a : b);
    if (topMethod === 'flashcards') learningAnalytics.patterns.learningStyle = 'visual';
    else if (topMethod === 'video') learningAnalytics.patterns.learningStyle = 'auditory';
    else if (topMethod === 'battle') learningAnalytics.patterns.learningStyle = 'kinesthetic';
    else learningAnalytics.patterns.learningStyle = 'balanced';
}

function generateInsights() {
    const patterns = learningAnalytics.patterns;
    const insights = [];
    
    // Study time insights
    if (patterns.bestStudyTime) {
        const hour = patterns.bestStudyTime;
        const timeStr = hour < 12 ? `${hour}:00 AM` : `${hour-12}:00 PM`;
        insights.push({
            type: 'time',
            icon: '⏰',
            title: 'Optimal Study Time',
            message: `You perform best around ${timeStr}. Try scheduling important study sessions then!`,
            priority: 'high'
        });
    }
    
    // Learning style insights
    if (patterns.learningStyle !== 'balanced') {
        const styleMap = {
            visual: { icon: '👁️', method: 'flashcards and visual content' },
            auditory: { icon: '👂', method: 'videos and audio content' },
            kinesthetic: { icon: '✋', method: 'interactive battles and hands-on activities' }
        };
        const style = styleMap[patterns.learningStyle];
        insights.push({
            type: 'style',
            icon: style.icon,
            title: 'Learning Style Detected',
            message: `You're a ${patterns.learningStyle} learner! Focus on ${style.method} for better results.`,
            priority: 'medium'
        });
    }
    
    // Weak areas insights
    if (patterns.weakAreas.length > 0) {
        insights.push({
            type: 'weakness',
            icon: '🎯',
            title: 'Areas for Improvement',
            message: `Focus more on: ${patterns.weakAreas.join(', ')}. Consider using different study methods for these subjects.`,
            priority: 'high'
        });
    }
    
    // Strengths insights
    if (patterns.strengths.length > 0) {
        insights.push({
            type: 'strength',
            icon: '🌟',
            title: 'Your Strengths',
            message: `You excel at: ${patterns.strengths.join(', ')}! Use these subjects to build confidence.`,
            priority: 'low'
        });
    }
    
    // Study method insights
    const topMethods = Object.entries(patterns.preferredMethods)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 2)
        .map(([method]) => method);
    
    if (topMethods.length > 0) {
        insights.push({
            type: 'method',
            icon: '📚',
            title: 'Preferred Study Methods',
            message: `You use ${topMethods.join(' and ')} most often. Try mixing in other methods for variety!`,
            priority: 'low'
        });
    }
    
    learningAnalytics.insights = insights;
}

function showAIInsights() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;
        z-index: 10000;
    `;
    
    const insights = learningAnalytics.insights;
    const content = `
        <div style="background: #1a1a1a; border: 2px solid #00bfff; border-radius: 15px; padding: 2rem; max-width: 600px; max-height: 80vh; overflow-y: auto;">
            <h2 style="color: #00bfff; text-align: center; margin-bottom: 1.5rem;">🤖 AI Learning Insights</h2>
            ${insights.length === 0 ? 
                '<p style="color: #ccc; text-align: center;">Study more to unlock AI insights about your learning patterns!</p>' :
                insights.map(insight => `
                    <div style="background: #333; border-radius: 10px; padding: 1.5rem; margin: 1rem 0; border-left: 4px solid ${insight.priority === 'high' ? '#ff4444' : insight.priority === 'medium' ? '#ffaa00' : '#44ff44'};">
                        <h3 style="color: #00bfff; margin: 0 0 0.5rem 0;">${insight.icon} ${insight.title}</h3>
                        <p style="color: #ddd; margin: 0; line-height: 1.5;">${insight.message}</p>
                    </div>
                `).join('')
            }
            <div style="text-align: center; margin-top: 2rem;">
                <button onclick="closeAIModal()" style="background: #00bfff; color: #000; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer; font-weight: bold;">Close Insights</button>
            </div>
        </div>
    `;
    
    modal.innerHTML = content;
    document.body.appendChild(modal);
    
    window.closeAIModal = function() {
        modal.remove();
        delete window.closeAIModal;
    };
}

function getAIRecommendations() {
    const patterns = learningAnalytics.patterns;
    const recommendations = [];
    
    // Recommend study methods based on performance
    if (patterns.learningStyle === 'visual') {
        recommendations.push('Try more flashcards and visual study methods');
    } else if (patterns.learningStyle === 'auditory') {
        recommendations.push('Focus on video lessons and audio content');
    } else if (patterns.learningStyle === 'kinesthetic') {
        recommendations.push('Use interactive battles and hands-on activities');
    }
    
    // Recommend subjects to focus on
    if (patterns.weakAreas.length > 0) {
        recommendations.push(`Spend extra time on: ${patterns.weakAreas.join(', ')}`);
    }
    
    // Recommend study times
    if (patterns.bestStudyTime) {
        const hour = patterns.bestStudyTime;
        const timeStr = hour < 12 ? `${hour}:00 AM` : `${hour-12}:00 PM`;
        recommendations.push(`Study around ${timeStr} for best results`);
    }
    
    return recommendations;
}



function getSubject() { return DIVINE_DATA.subjects[playerState.subject] || DIVINE_DATA.subjects.math; }
function getChapter() { return getSubject().chapters[playerState.chapter] || getSubject().chapters[Object.keys(getSubject().chapters)[0]]; }

// Enhanced Study Methods with Loading Animation
window.startStudy = function(type) {
    showNotification(`🎮 Starting ${type} for ${getSubject().name}!`);
    
    // Track study session start
    window.studyStartTime = Date.now();
    window.currentStudyMethod = type;
    
    // Stop any ongoing audio
    if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio = null;
    }
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
    }
    
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('studyInterface').style.display = 'block';
    
    const content = document.getElementById('contentArea');
    
    switch(type) {
        case 'flashcards':
            loadFlashcards(content);
            break;
        case 'quiz':
            loadQuiz(content);
            break;
        case 'text':
            loadTextStudy(content);
            break;
        case 'video':
            loadVideoStudy(content);
            break;
        case 'timer':
            loadPomodoroTimer(content);
            break;
        case 'notes':
            loadSmartNotes(content);
            break;
        case 'battle':
            loadKnowledgeBattle(content);
            break;
        case 'treasure':
            loadTreasureHunt(content);
            break;
        case 'audio':
            loadAudioStudy(content);
            break;
        default:
            content.innerHTML = `<h2>🎮 ${type} Study Method</h2><p>Divine learning experience for ${getSubject().name}</p>`;
    }
};

function loadFlashcards(container) {
    const chapterData = getChapter();
    const flashcards = chapterData.flashcards;
    
    container.innerHTML = `
        <div style="text-align: center;">
            <h2 style="color: #cd853f; margin-bottom: 2rem;">📜 ${getSubject().name} - Sacred Scrolls</h2>
            <div style="background: #222; border: 2px solid #00bfff; border-radius: 12px; padding: 3rem; margin: 2rem auto; max-width: 500px; min-height: 200px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <div style="font-size: 1.2rem; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">❓</div>
                    <div class="card-content">${flashcards[0].front}</div>
                </div>
            </div>
            <div style="margin: 1rem 0; color: #ccc;">Scroll 1 of ${flashcards.length} • Click to reveal divine wisdom</div>
        </div>
    `;
}

function loadQuiz(container) {
    const chapterData = getChapter();
    const quiz = chapterData.quiz;
    
    container.innerHTML = `
        <div>
            <h2 style="color: #cd853f; margin-bottom: 2rem; text-align: center;">🏺 ${getSubject().name} - Oracle's Test</h2>
            <div style="background: #222; border: 2px solid #00bfff; border-radius: 12px; padding: 2rem; margin: 2rem 0;">
                <h3 style="color: #cd853f; margin-bottom: 1rem;">Divine Trial 1 of ${quiz.length}</h3>
                <p style="font-size: 1.1rem; margin: 1.5rem 0;">${quiz[0].question}</p>
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    ${quiz[0].options.map((option, index) => 
                        `<button onclick="selectAnswer(${index}, ${quiz[0].correct})" style="background: #333; color: #fff; border: 1px solid #555; padding: 1rem; border-radius: 6px; cursor: pointer; text-align: left; transition: background 0.3s ease;" onmouseover="this.style.background='#444'" onmouseout="this.style.background='#333'">${String.fromCharCode(65 + index)}) ${option}</button>`
                    ).join('')}
                </div>
                <div id="quizExplanation" style="margin-top: 1rem; padding: 1rem; background: rgba(0,0,0,0.3); border-radius: 8px; display: none;">
                    <p style="color: #ddd;">${quiz[0].explanation}</p>
                </div>
            </div>
        </div>
    `;
}

function loadTextStudy(container) {
    const chapterData = getChapter();
    
    container.innerHTML = `
        <div>
            <h2 style="color: #cd853f; margin-bottom: 2rem; text-align: center;">📚 ${getSubject().name} - Divine Texts</h2>
            <div style="background: #222; border: 2px solid #00bfff; border-radius: 12px; padding: 2rem; margin: 2rem 0;">
                <h3 style="color: #cd853f; margin-bottom: 1rem;">${playerState.chapter} - Sacred Knowledge</h3>
                <p style="line-height: 1.8; font-size: 1.1rem; color: #ddd;">${chapterData.content}</p>
            </div>
        </div>
    `;
}

function loadVideoStudy(container) {
    const chapterData = getChapter();
    const videos = chapterData.videos;
    let currentVideoIndex = 0;
    
    function renderVideoPlayer() {
        const currentVideo = videos[currentVideoIndex];
        return `
            <div>
                <h2 style="color: #cd853f; text-align: center; margin-bottom: 2rem;">🔮 ${getSubject().name} - Visions of Gods</h2>
                
                <!-- Video Selection Bar -->
                <div style="background: #333; border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
                    <h4 style="color: #cd853f; margin-bottom: 0.5rem;">📹 Choose Divine Vision (${currentVideoIndex + 1}/${videos.length})</h4>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${videos.map((video, index) => 
                            `<button onclick="selectVideo(${index})" style="background: ${index === currentVideoIndex ? '#00bfff' : '#555'}; color: ${index === currentVideoIndex ? '#000' : '#fff'}; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; transition: all 0.3s ease;" onmouseover="this.style.background='#00bfff'; this.style.color='#000'" onmouseout="this.style.background='${index === currentVideoIndex ? '#00bfff' : '#555'}'; this.style.color='${index === currentVideoIndex ? '#000' : '#fff'}'">${video.title}</button>`
                        ).join('')}
                    </div>
                </div>
                
                <!-- Video Player -->
                <div style="background: #222; border: 2px solid #00bfff; border-radius: 12px; padding: 2rem; margin: 2rem 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <h3 style="color: #cd853f; margin: 0;">${currentVideo.title} - Divine Teaching</h3>
                        <span style="background: #333; color: #ccc; padding: 0.25rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">⏱️ ${currentVideo.duration}</span>
                    </div>
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; margin-bottom: 1.5rem;">
                        <iframe src="https://www.youtube.com/embed/${currentVideo.id}?rel=0&modestbranding=1" 
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                            allowfullscreen>
                        </iframe>
                    </div>
                    
                    <!-- Video Navigation -->
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <button onclick="previousVideo()" ${currentVideoIndex === 0 ? 'disabled' : ''} style="background: ${currentVideoIndex === 0 ? '#666' : '#00bfff'}; color: ${currentVideoIndex === 0 ? '#999' : '#000'}; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: ${currentVideoIndex === 0 ? 'not-allowed' : 'pointer'};">⬅️ Previous</button>
                        <span style="color: #ccc;">Video ${currentVideoIndex + 1} of ${videos.length}</span>
                        <button onclick="nextVideo()" ${currentVideoIndex === videos.length - 1 ? 'disabled' : ''} style="background: ${currentVideoIndex === videos.length - 1 ? '#666' : '#00bfff'}; color: ${currentVideoIndex === videos.length - 1 ? '#999' : '#000'}; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: ${currentVideoIndex === videos.length - 1 ? 'not-allowed' : 'pointer'};">Next ➡️</button>
                    </div>
                    
                    <div style="margin-top: 1rem; padding: 1rem; background: rgba(0,0,0,0.3); border-radius: 8px;">
                        <p style="color: #ddd; line-height: 1.6;">${chapterData.content}</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    container.innerHTML = renderVideoPlayer();
    
    // Add video navigation functions to window scope
    window.selectVideo = function(index) {
        currentVideoIndex = index;
        container.innerHTML = renderVideoPlayer();
        showNotification(`🔮 Now watching: ${videos[index].title}`);
    };
    
    window.nextVideo = function() {
        if (currentVideoIndex < videos.length - 1) {
            currentVideoIndex++;
            container.innerHTML = renderVideoPlayer();
            showNotification(`🔮 Next video: ${videos[currentVideoIndex].title}`);
        }
    };
    
    window.previousVideo = function() {
        if (currentVideoIndex > 0) {
            currentVideoIndex--;
            container.innerHTML = renderVideoPlayer();
            showNotification(`🔮 Previous video: ${videos[currentVideoIndex].title}`);
        }
    };
}

function loadPomodoroTimer(container) {
    container.innerHTML = `
        <div style="text-align: center;">
            <h2 style="color: #cd853f; margin-bottom: 2rem;">⏳ Chronos Timer - Master Time Like The Gods</h2>
            <div style="font-size: 4rem; color: #00bfff; margin: 2rem 0;" id="timerDisplay">25:00</div>
            <div style="display: flex; gap: 1rem; justify-content: center; margin: 2rem 0;">
                <button style="background: #28a745; color: #fff; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer;">▶ Start</button>
                <button style="background: #ffc107; color: #000; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer;">⏸ Pause</button>
                <button style="background: #dc3545; color: #fff; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer;">🔄 Reset</button>
            </div>
            <p style="color: #ccc; margin-top: 1rem;">Channel divine focus for 25 minutes, then rest like the gods</p>
        </div>
    `;
}

function loadSmartNotes(container) {
    container.innerHTML = `
        <div>
            <h2 style="color: #cd853f; margin-bottom: 2rem;">🪶 Divine Quill - ${getSubject().name}</h2>
            <textarea style="width: 100%; height: 300px; background: #222; color: #fff; border: 2px solid #00bfff; border-radius: 8px; padding: 1rem; font-size: 1rem;" placeholder="Start taking divine notes for ${playerState.chapter}..."></textarea>
            <div style="margin-top: 1rem;">
                <button style="background: #00bfff; color: #fff; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer;">💾 Save Notes</button>
            </div>
        </div>
    `;
}

function loadKnowledgeBattle(container) {
    const chapterData = getChapter();
    const quiz = chapterData.quiz;
    
    container.innerHTML = `
        <div>
            <h2 style="color: #ffd700; text-align: center; margin-bottom: 2rem;">⚔️ Knowledge Battle Arena</h2>
            <div style="font-size: 5rem; text-align: center; margin: 2rem 0;">🐉</div>
            <div style="background: #333; height: 20px; border-radius: 10px; margin: 1rem 0;">
                <div id="monsterHealth" style="background: #ff4444; height: 100%; width: 100%; border-radius: 10px; transition: width 0.5s ease;"></div>
            </div>
            <div style="text-align: center; color: #fff; margin: 1rem 0;">Monster Health: <span id="healthText">100/100</span></div>
            <div style="background: rgba(0,0,0,0.5); padding: 2rem; border-radius: 15px; margin: 2rem 0;">
                <h3 style="color: #00bfff; margin-bottom: 1rem;">Answer to Attack!</h3>
                <p style="font-size: 1.2rem; margin: 1rem 0; color: #fff;">${quiz[0].question}</p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    ${quiz[0].options.map((option, index) => 
                        `<button onclick="battleAnswer(${index}, ${quiz[0].correct})" style="background: #333; color: #fff; border: 2px solid #555; padding: 1rem; border-radius: 8px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#00bfff'" onmouseout="this.style.borderColor='#555'">${option}</button>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
}

function loadTreasureHunt(container) {
    container.innerHTML = `
        <div>
            <h2 style="color: #ffd700; text-align: center; margin-bottom: 2rem;">🏴‍☠️ Treasure Hunt Adventure</h2>
            <div style="height: 400px; position: relative; background: linear-gradient(45deg, #8b4513, #daa520); border: 3px solid #ffd700; border-radius: 20px; padding: 2rem;">
                <div style="position: absolute; top: 10px; left: 10px; color: #000; font-weight: bold;">Find treasures by answering questions!</div>
                <div onclick="findTreasure(1)" style="position: absolute; top: 30%; left: 20%; width: 40px; height: 40px; background: #ffd700; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.5rem;">💰</div>
                <div onclick="findTreasure(2)" style="position: absolute; top: 60%; left: 70%; width: 40px; height: 40px; background: #ffd700; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.5rem;">💰</div>
                <div onclick="findTreasure(3)" style="position: absolute; top: 80%; left: 40%; width: 40px; height: 40px; background: #ffd700; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.5rem;">💰</div>
            </div>
            <div style="text-align: center; margin: 2rem 0;">
                <div style="color: #ffd700; font-size: 1.2rem;">Treasures Found: <span id="treasureCount">0</span>/3</div>
            </div>
        </div>
    `;
}

function loadAudioStudy(container) {
    const chapterData = getChapter();
    const subject = getSubject();
    
    container.innerHTML = `
        <div>
            <h2 style="color: #cd853f; text-align: center; margin-bottom: 2rem;">🎧 Divine Audio Oracle - ${subject.name}</h2>
            
            <!-- Audio Study Mode Selector -->
            <div style="background: #333; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
                <h3 style="color: #cd853f; margin-bottom: 1rem;">🎵 Choose Your Audio Experience</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <button onclick="startTextToSpeech()" style="background: linear-gradient(45deg, #4a90e2, #357abd); color: #fff; border: none; padding: 1rem; border-radius: 8px; cursor: pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🗣️</div>
                        <div style="font-weight: bold;">Text-to-Speech</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">Listen to content</div>
                    </button>
                    <button onclick="startAudioNotes()" style="background: linear-gradient(45deg, #e74c3c, #c0392b); color: #fff; border: none; padding: 1rem; border-radius: 8px; cursor: pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎙️</div>
                        <div style="font-weight: bold;">Audio Notes</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">Record & playback</div>
                    </button>
                    <button onclick="startListeningQuiz()" style="background: linear-gradient(45deg, #27ae60, #229954); color: #fff; border: none; padding: 1rem; border-radius: 8px; cursor: pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">👂</div>
                        <div style="font-weight: bold;">Listening Quiz</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">Audio comprehension</div>
                    </button>
                    <button onclick="startAudioFlashcards()" style="background: linear-gradient(45deg, #9b59b6, #8e44ad); color: #fff; border: none; padding: 1rem; border-radius: 8px; cursor: pointer; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔊</div>
                        <div style="font-weight: bold;">Audio Cards</div>
                        <div style="font-size: 0.8rem; opacity: 0.8;">Spoken flashcards</div>
                    </button>
                </div>
            </div>
            
            <!-- Audio Content Area -->
            <div id="audioContentArea" style="background: #222; border: 2px solid #00bfff; border-radius: 12px; padding: 2rem; min-height: 300px;">
                <div style="text-align: center; color: #999; padding: 2rem;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🎧</div>
                    <p>Select an audio study method above to begin your divine auditory learning journey</p>
                </div>
            </div>
            
            <!-- Audio Controls -->
            <div id="audioControls" style="background: #333; border-radius: 8px; padding: 1rem; margin-top: 1rem; display: none;">
                <div style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
                    <button id="playPauseBtn" onclick="toggleAudioPlayback()" style="background: #28a745; color: #fff; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer;">▶️ Play</button>
                    <button onclick="stopAudio()" style="background: #dc3545; color: #fff; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer;">⏹️ Stop</button>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: #ccc;">Speed:</span>
                        <select id="speedControl" onchange="changePlaybackSpeed()" style="background: #222; color: #fff; border: 1px solid #555; padding: 0.5rem; border-radius: 4px;">
                            <option value="0.5">0.5x</option>
                            <option value="0.75">0.75x</option>
                            <option value="1" selected>1x</option>
                            <option value="1.25">1.25x</option>
                            <option value="1.5">1.5x</option>
                            <option value="2">2x</option>
                        </select>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: #ccc;">Volume:</span>
                        <input type="range" id="volumeControl" min="0" max="1" step="0.1" value="0.8" onchange="changeVolume()" style="width: 100px;">
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Initialize audio study variables
    window.currentAudio = null;
    window.audioRecorder = null;
    window.audioChunks = [];
    window.isRecording = false;
    window.currentAudioMode = null;
}

// Audio Study Functions
window.startTextToSpeech = function() {
    const contentArea = document.getElementById('audioContentArea');
    const chapterData = getChapter();
    const subject = getSubject();
    
    contentArea.innerHTML = `
        <div>
            <h3 style="color: #cd853f; margin-bottom: 1rem;">🗣️ Divine Voice Reading - ${playerState.chapter}</h3>
            <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 1.5rem; margin-bottom: 1rem;">
                <p style="line-height: 1.8; font-size: 1.1rem; color: #ddd;" id="textToRead">${chapterData.content}</p>
            </div>
            <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 1rem;">
                <button onclick="speakText()" style="background: #28a745; color: #fff; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer; font-weight: bold;">🔊 Speak Text</button>
                <button onclick="pauseSpeech()" style="background: #ffc107; color: #000; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer; font-weight: bold;">⏸️ Pause</button>
                <button onclick="stopSpeech()" style="background: #dc3545; color: #fff; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer; font-weight: bold;">⏹️ Stop</button>
            </div>
            <div style="background: rgba(205, 133, 63, 0.1); border-radius: 8px; padding: 1rem;">
                <h4 style="color: #cd853f; margin-bottom: 0.5rem;">🎛️ Voice Settings</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <div>
                        <label style="color: #ccc; display: block; margin-bottom: 0.5rem;">Voice:</label>
                        <select id="voiceSelect" style="background: #222; color: #fff; border: 1px solid #555; padding: 0.5rem; border-radius: 4px; width: 100%;">
                            <option value="0">Default Voice</option>
                        </select>
                    </div>
                    <div>
                        <label style="color: #ccc; display: block; margin-bottom: 0.5rem;">Rate: <span id="rateValue">1</span></label>
                        <input type="range" id="rateControl" min="0.1" max="2" step="0.1" value="1" onchange="updateRate()" style="width: 100%;">
                    </div>
                    <div>
                        <label style="color: #ccc; display: block; margin-bottom: 0.5rem;">Pitch: <span id="pitchValue">1</span></label>
                        <input type="range" id="pitchControl" min="0" max="2" step="0.1" value="1" onchange="updatePitch()" style="width: 100%;">
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Populate voice options
    populateVoices();
    window.currentAudioMode = 'tts';
};

window.startAudioNotes = function() {
    const contentArea = document.getElementById('audioContentArea');
    
    contentArea.innerHTML = `
        <div>
            <h3 style="color: #cd853f; margin-bottom: 1rem;">🎙️ Divine Audio Scrolls - Record Your Wisdom</h3>
            <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 2rem; text-align: center; margin-bottom: 1rem;">
                <div id="recordingStatus" style="font-size: 3rem; margin-bottom: 1rem;">🎙️</div>
                <div id="recordingText" style="color: #ccc; font-size: 1.2rem; margin-bottom: 2rem;">Ready to record your divine insights</div>
                <div style="display: flex; gap: 1rem; justify-content: center; margin-bottom: 1rem;">
                    <button id="recordBtn" onclick="startRecording()" style="background: #dc3545; color: #fff; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer; font-weight: bold;">🔴 Start Recording</button>
                    <button id="stopRecordBtn" onclick="stopRecording()" disabled style="background: #666; color: #999; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: not-allowed; font-weight: bold;">⏹️ Stop Recording</button>
                </div>
                <div id="recordingTimer" style="color: #00bfff; font-size: 1.5rem; font-weight: bold;">00:00</div>
            </div>
            <div id="audioNotesList" style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 1rem;">
                <h4 style="color: #cd853f; margin-bottom: 1rem;">📚 Your Audio Scrolls</h4>
                <div id="savedNotes" style="color: #999; text-align: center; padding: 2rem;">No audio notes recorded yet. Start recording to create your first divine scroll!</div>
            </div>
        </div>
    `;
    
    window.currentAudioMode = 'notes';
    loadSavedAudioNotes();
};

window.startListeningQuiz = function() {
    const contentArea = document.getElementById('audioContentArea');
    const chapterData = getChapter();
    const quiz = chapterData.quiz;
    
    contentArea.innerHTML = `
        <div>
            <h3 style="color: #cd853f; margin-bottom: 1rem;">👂 Divine Listening Trial</h3>
            <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 2rem; text-align: center; margin-bottom: 1rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔊</div>
                <p style="color: #ccc; margin-bottom: 2rem;">Listen carefully to the question, then select your answer</p>
                <button onclick="playQuizQuestion()" style="background: #00bfff; color: #000; border: none; padding: 1rem 2rem; border-radius: 8px; cursor: pointer; font-weight: bold; margin-bottom: 2rem;">🎧 Play Question</button>
                <div id="quizQuestion" style="display: none;">
                    <p style="font-size: 1.1rem; margin: 1.5rem 0; color: #fff;">${quiz[0].question}</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
                        ${quiz[0].options.map((option, index) => 
                            `<button onclick="selectAudioAnswer(${index}, ${quiz[0].correct})" style="background: #333; color: #fff; border: 2px solid #555; padding: 1rem; border-radius: 8px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#00bfff'" onmouseout="this.style.borderColor='#555'">${option}</button>`
                        ).join('')}
                    </div>
                </div>
            </div>
            <div id="audioQuizResult" style="display: none; background: rgba(0,0,0,0.3); border-radius: 8px; padding: 1rem;">
                <p style="color: #ddd;">${quiz[0].explanation}</p>
            </div>
        </div>
    `;
    
    window.currentAudioMode = 'quiz';
    window.currentQuizQuestion = quiz[0];
};

window.startAudioFlashcards = function() {
    const contentArea = document.getElementById('audioContentArea');
    const chapterData = getChapter();
    const flashcards = chapterData.flashcards;
    
    contentArea.innerHTML = `
        <div>
            <h3 style="color: #cd853f; margin-bottom: 1rem;">🔊 Divine Audio Scrolls</h3>
            <div style="text-align: center;">
                <div style="background: #222; border: 2px solid #00bfff; border-radius: 12px; padding: 3rem; margin: 2rem auto; max-width: 500px; min-height: 200px; display: flex; align-items: center; justify-content: center;">
                    <div style="font-size: 1.2rem; text-align: center;">
                        <div style="font-size: 2rem; margin-bottom: 1rem;">🔊</div>
                        <div id="audioCardContent">${flashcards[0].front}</div>
                        <div style="margin-top: 2rem;">
                            <button onclick="speakFlashcard('front')" style="background: #28a745; color: #fff; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer; margin: 0.5rem;">🗣️ Speak Front</button>
                            <button onclick="speakFlashcard('back')" style="background: #17a2b8; color: #fff; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer; margin: 0.5rem;">🗣️ Speak Back</button>
                        </div>
                    </div>
                </div>
                <div style="margin: 1rem 0; color: #ccc;">Audio Card <span id="cardNumber">1</span> of ${flashcards.length}</div>
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button onclick="previousAudioCard()" style="background: #6c757d; color: #fff; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer;">⬅️ Previous</button>
                    <button onclick="nextAudioCard()" style="background: #007bff; color: #fff; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer;">Next ➡️</button>
                </div>
            </div>
        </div>
    `;
    
    window.currentAudioMode = 'flashcards';
    window.currentCardIndex = 0;
    window.audioFlashcards = flashcards;
};

// Text-to-Speech Functions
function populateVoices() {
    const voiceSelect = document.getElementById('voiceSelect');
    if (!voiceSelect) return;
    
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = voices.map((voice, index) => 
        `<option value="${index}">${voice.name} (${voice.lang})</option>`
    ).join('');
}

window.speakText = function() {
    const text = document.getElementById('textToRead').textContent;
    const voiceSelect = document.getElementById('voiceSelect');
    const rateControl = document.getElementById('rateControl');
    const pitchControl = document.getElementById('pitchControl');
    
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        
        if (voiceSelect) {
            const voices = speechSynthesis.getVoices();
            utterance.voice = voices[voiceSelect.value] || voices[0];
        }
        
        if (rateControl) utterance.rate = parseFloat(rateControl.value);
        if (pitchControl) utterance.pitch = parseFloat(pitchControl.value);
        
        utterance.onstart = () => showNotification('🗣️ Divine voice speaking...');
        utterance.onend = () => showNotification('✅ Reading complete!');
        
        speechSynthesis.speak(utterance);
    } else {
        showNotification('❌ Text-to-speech not supported in this browser');
    }
};

window.pauseSpeech = function() {
    if (speechSynthesis.speaking) {
        speechSynthesis.pause();
        showNotification('⏸️ Speech paused');
    }
};

window.stopSpeech = function() {
    speechSynthesis.cancel();
    showNotification('⏹️ Speech stopped');
};

window.updateRate = function() {
    const rateControl = document.getElementById('rateControl');
    const rateValue = document.getElementById('rateValue');
    if (rateValue) rateValue.textContent = rateControl.value;
};

window.updatePitch = function() {
    const pitchControl = document.getElementById('pitchControl');
    const pitchValue = document.getElementById('pitchValue');
    if (pitchValue) pitchValue.textContent = pitchControl.value;
};

// Audio Recording Functions
window.startRecording = function() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showNotification('❌ Audio recording not supported in this browser');
        return;
    }
    
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            window.audioRecorder = new MediaRecorder(stream);
            window.audioChunks = [];
            
            window.audioRecorder.ondataavailable = event => {
                window.audioChunks.push(event.data);
            };
            
            window.audioRecorder.onstop = () => {
                const audioBlob = new Blob(window.audioChunks, { type: 'audio/wav' });
                saveAudioNote(audioBlob);
                stream.getTracks().forEach(track => track.stop());
            };
            
            window.audioRecorder.start();
            window.isRecording = true;
            
            document.getElementById('recordBtn').disabled = true;
            document.getElementById('stopRecordBtn').disabled = false;
            document.getElementById('recordingStatus').textContent = '🔴';
            document.getElementById('recordingText').textContent = 'Recording in progress...';
            
            startRecordingTimer();
            showNotification('🎙️ Recording started');
        })
        .catch(err => {
            showNotification('❌ Could not access microphone');
            console.error('Recording error:', err);
        });
};

window.stopRecording = function() {
    if (window.audioRecorder && window.isRecording) {
        window.audioRecorder.stop();
        window.isRecording = false;
        
        document.getElementById('recordBtn').disabled = false;
        document.getElementById('stopRecordBtn').disabled = true;
        document.getElementById('recordingStatus').textContent = '🎙️';
        document.getElementById('recordingText').textContent = 'Recording saved!';
        
        stopRecordingTimer();
        showNotification('✅ Recording saved!');
    }
};

function startRecordingTimer() {
    window.recordingStartTime = Date.now();
    window.recordingTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - window.recordingStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const seconds = (elapsed % 60).toString().padStart(2, '0');
        document.getElementById('recordingTimer').textContent = `${minutes}:${seconds}`;
    }, 1000);
}

function stopRecordingTimer() {
    if (window.recordingTimer) {
        clearInterval(window.recordingTimer);
        window.recordingTimer = null;
    }
}

function saveAudioNote(audioBlob) {
    const audioUrl = URL.createObjectURL(audioBlob);
    const timestamp = new Date().toLocaleString();
    const noteId = Date.now();
    
    const audioNotes = JSON.parse(localStorage.getItem('audioNotes') || '[]');
    audioNotes.push({
        id: noteId,
        url: audioUrl,
        timestamp: timestamp,
        subject: playerState.subject,
        chapter: playerState.chapter
    });
    
    localStorage.setItem('audioNotes', JSON.stringify(audioNotes));
    loadSavedAudioNotes();
}

function loadSavedAudioNotes() {
    const savedNotes = document.getElementById('savedNotes');
    if (!savedNotes) return;
    
    const audioNotes = JSON.parse(localStorage.getItem('audioNotes') || '[]');
    
    if (audioNotes.length === 0) {
        savedNotes.innerHTML = '<div style="color: #999; text-align: center; padding: 2rem;">No audio notes recorded yet. Start recording to create your first divine scroll!</div>';
        return;
    }
    
    savedNotes.innerHTML = audioNotes.map(note => `
        <div style="background: #333; border-radius: 8px; padding: 1rem; margin: 0.5rem 0; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <div style="color: #cd853f; font-weight: bold;">${note.subject} - ${note.chapter}</div>
                <div style="color: #999; font-size: 0.9rem;">${note.timestamp}</div>
            </div>
            <div style="display: flex; gap: 0.5rem;">
                <button onclick="playAudioNote('${note.url}')" style="background: #28a745; color: #fff; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">▶️ Play</button>
                <button onclick="deleteAudioNote(${note.id})" style="background: #dc3545; color: #fff; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
}

window.playAudioNote = function(url) {
    if (window.currentAudio) {
        window.currentAudio.pause();
    }
    
    window.currentAudio = new Audio(url);
    window.currentAudio.play();
    showNotification('🎧 Playing audio note');
};

window.deleteAudioNote = function(noteId) {
    const audioNotes = JSON.parse(localStorage.getItem('audioNotes') || '[]');
    const filteredNotes = audioNotes.filter(note => note.id !== noteId);
    localStorage.setItem('audioNotes', JSON.stringify(filteredNotes));
    loadSavedAudioNotes();
    showNotification('🗑️ Audio note deleted');
};

// Audio Quiz Functions
window.playQuizQuestion = function() {
    const question = window.currentQuizQuestion.question;
    
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(question);
        utterance.rate = 0.9;
        utterance.onend = () => {
            document.getElementById('quizQuestion').style.display = 'block';
            showNotification('👂 Question played - select your answer');
        };
        speechSynthesis.speak(utterance);
    } else {
        document.getElementById('quizQuestion').style.display = 'block';
        showNotification('❌ Text-to-speech not supported');
    }
};

window.selectAudioAnswer = function(selectedIndex, correctIndex) {
    const buttons = document.querySelectorAll('#quizQuestion button');
    buttons.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.style.background = '#28a745';
        } else if (index === selectedIndex && selectedIndex !== correctIndex) {
            btn.style.background = '#dc3545';
        }
        btn.disabled = true;
    });
    
    document.getElementById('audioQuizResult').style.display = 'block';
    
    const isCorrect = selectedIndex === correctIndex;
    if (isCorrect) {
        playerState.progress.xp += 15;
        showNotification('✅ Correct! +15 XP');
    } else {
        showNotification('❌ Incorrect. Listen to the explanation!');
    }
    updateUI();
};

// Audio Flashcard Functions
window.speakFlashcard = function(side) {
    const flashcards = window.audioFlashcards;
    const currentCard = flashcards[window.currentCardIndex];
    const text = side === 'front' ? currentCard.front : currentCard.back;
    
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
        
        if (side === 'back') {
            document.getElementById('audioCardContent').textContent = currentCard.back;
        }
    } else {
        showNotification('❌ Text-to-speech not supported');
    }
};

window.nextAudioCard = function() {
    const flashcards = window.audioFlashcards;
    if (window.currentCardIndex < flashcards.length - 1) {
        window.currentCardIndex++;
        const currentCard = flashcards[window.currentCardIndex];
        document.getElementById('audioCardContent').textContent = currentCard.front;
        document.getElementById('cardNumber').textContent = window.currentCardIndex + 1;
    }
};

window.previousAudioCard = function() {
    if (window.currentCardIndex > 0) {
        window.currentCardIndex--;
        const currentCard = window.audioFlashcards[window.currentCardIndex];
        document.getElementById('audioCardContent').textContent = currentCard.front;
        document.getElementById('cardNumber').textContent = window.currentCardIndex + 1;
    }
};

// Initialize voices when available
if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = populateVoices;
}

// Interactive Functions
function selectAnswer(selectedIndex, correctIndex) {
    const buttons = document.querySelectorAll('#contentArea button');
    buttons.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.style.background = '#28a745';
        } else if (index === selectedIndex && selectedIndex !== correctIndex) {
            btn.style.background = '#dc3545';
        }
        btn.disabled = true;
    });
    
    document.getElementById('quizExplanation').style.display = 'block';
    
    // Update accuracy for AI tracking
    const isCorrect = selectedIndex === correctIndex;
    playerState.progress.accuracy = Math.round((playerState.progress.accuracy * 0.8) + (isCorrect ? 20 : 0));
    
    if (isCorrect) {
        playerState.progress.xp += 10;
        showNotification('✅ Correct! +10 XP');
    } else {
        showNotification('❌ Incorrect. Study the explanation!');
    }
    updateUI();
}

function battleAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        const healthBar = document.getElementById('monsterHealth');
        const healthText = document.getElementById('healthText');
        const currentWidth = parseInt(healthBar.style.width) || 100;
        const newWidth = Math.max(0, currentWidth - 25);
        
        healthBar.style.width = newWidth + '%';
        healthText.textContent = `${newWidth}/100`;
        
        playerState.progress.xp += 15;
        showNotification('⚔️ Critical Hit! +15 XP');
        
        if (newWidth === 0) {
            showNotification('🏆 Monster Defeated! Victory!');
        }
    } else {
        showNotification('🛡️ Monster blocked your attack!');
    }
    updateUI();
}

function findTreasure(treasureId) {
    const count = document.getElementById('treasureCount');
    const currentCount = parseInt(count.textContent);
    count.textContent = currentCount + 1;
    
    playerState.progress.coins += 25;
    playerState.progress.xp += 20;
    showNotification('💰 Treasure found! +25 coins, +20 XP');
    updateUI();
    
    event.target.style.display = 'none';
}

window.endStudy = function() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('studyInterface').style.display = 'none';
    
    // Calculate study session metrics
    const duration = window.studyStartTime ? (Date.now() - window.studyStartTime) / 1000 / 60 : 5; // minutes
    const performance = Math.min(100, playerState.progress.accuracy + Math.random() * 20 + 60); // simulate performance
    
    // Track study session for AI analysis
    if (window.currentStudyMethod) {
        trackStudySession(window.currentStudyMethod, playerState.subject, duration, performance);
    }
    
    // Award completion XP
    playerState.progress.xp += 5;
    playerState.progress.streak += 1;
    
    showNotification('🏛️ Divine study session concluded! +5 XP, Streak increased!');
    updateUI();
    
    // Show AI insight notification occasionally
    if (learningAnalytics.sessions.length > 0 && Math.random() < 0.3) {
        setTimeout(() => {
            showNotification('🤖 AI has new insights about your learning! Check the AI Insights button.');
        }, 2000);
    }
};

// Enhanced Filter System
window.filterCurriculum = function(category) {
    playerState.currentFilter = category;
    const filterData = DIVINE_DATA.filters[category] || DIVINE_DATA.filters.all;
    
    document.querySelectorAll('.curriculum-filter .filter-tab').forEach(tab => tab.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    
    showNotification(`📚 Filtered to ${filterData.name} - ${filterData.count} subjects`);
    
    // Show/hide university filters
    const universityFilters = document.getElementById('universityFilters');
    if (universityFilters) {
        universityFilters.style.display = category === 'university' ? 'block' : 'none';
    }
    
    // Update subject category filters and display filtered subjects
    updateSubjectCategoryFilters(filterData.subjects);
    displayFilteredSubjects(filterData.subjects);
};
window.filterUniversity = function(specialization) {
    const universitySubjects = {
        all: ['uni_medicine', 'uni_law', 'uni_engineering', 'uni_business', 'uni_computer', 'uni_economics', 'uni_accounting', 'uni_graphic_design', 'uni_architecture', 'uni_finance', 'med_year1', 'med_year2', 'med_year3', 'med_year4', 'eng_year1', 'eng_year2', 'eng_year3', 'eng_year4', 'cs_year1', 'cs_year2', 'cs_year3', 'cs_year4', 'law_year1', 'law_year2', 'law_year3', 'law_year4', 'bus_year1', 'bus_year2', 'bus_year3', 'bus_year4', 'econ_year1', 'econ_year2', 'econ_year3', 'acc_year1', 'acc_year2', 'acc_year3', 'acc_year4', 'gd_year1', 'gd_year2', 'gd_year3', 'gd_year4', 'arch_year1', 'arch_year2', 'arch_year3', 'arch_year4', 'arch_year5', 'fin_year1', 'fin_year2', 'fin_year3', 'fin_year4'],
        graphic_design: ['uni_graphic_design', 'gd_year1', 'gd_year2', 'gd_year3', 'gd_year4'],
        architecture: ['uni_architecture', 'arch_year1', 'arch_year2', 'arch_year3', 'arch_year4', 'arch_year5'],
        finance: ['uni_finance', 'fin_year1', 'fin_year2', 'fin_year3', 'fin_year4'],
        medicine: ['uni_medicine', 'med_year1', 'med_year2', 'med_year3', 'med_year4'],
        law: ['uni_law', 'law_year1', 'law_year2', 'law_year3', 'law_year4'],
        engineering: ['uni_engineering', 'eng_year1', 'eng_year2', 'eng_year3', 'eng_year4'],
        business: ['uni_business', 'uni_accounting', 'uni_finance', 'bus_year1', 'bus_year2', 'bus_year3', 'bus_year4', 'acc_year1', 'acc_year2', 'acc_year3', 'acc_year4', 'fin_year1', 'fin_year2', 'fin_year3', 'fin_year4'],
        computer: ['uni_computer', 'cs_year1', 'cs_year2', 'cs_year3', 'cs_year4'],
        economics: ['uni_economics', 'econ_year1', 'econ_year2', 'econ_year3'],
        accounting: ['uni_accounting', 'acc_year1', 'acc_year2', 'acc_year3', 'acc_year4']
    };
    
    const subjects = universitySubjects[specialization] || universitySubjects.all;
    
    // Update active tab
    document.querySelectorAll('#universityFilters .filter-tab').forEach(tab => tab.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    
    // Display filtered subjects
    displayFilteredSubjects(subjects);
    
    showNotification(`🏛️ Filtered to ${specialization} - ${subjects.length} programs`);
};

window.filterSubjects = function() {
    const searchTerm = document.getElementById('subjectSearch').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    
    if (!searchTerm) {
        searchResults.style.display = 'none';
        return;
    }
    
    const currentFilter = DIVINE_DATA.filters[playerState.currentFilter] || DIVINE_DATA.filters.all;
    const matchingSubjects = currentFilter.subjects.filter(key => 
        DIVINE_DATA.subjects[key] && DIVINE_DATA.subjects[key].name.toLowerCase().includes(searchTerm)
    );
    
    if (matchingSubjects.length > 0) {
        searchResults.innerHTML = matchingSubjects.map(key => 
            `<div class="search-result" onclick="selectSubject('${key}')">
                <div style="font-weight: bold;">${DIVINE_DATA.subjects[key].name}</div>
                <div style="font-size: 0.8rem; color: #999;">${DIVINE_DATA.subjects[key].category}</div>
            </div>`
        ).join('');
        searchResults.style.display = 'block';
    } else {
        searchResults.innerHTML = '<div class="search-result no-results">No subjects found in current filter</div>';
        searchResults.style.display = 'block';
    }
};

window.selectSubject = function(subjectKey) {
    playerState.subject = subjectKey;
    playerState.chapter = Object.keys(DIVINE_DATA.subjects[subjectKey].chapters)[0];
    
    document.getElementById('subjectSearch').value = DIVINE_DATA.subjects[subjectKey].name;
    document.getElementById('searchResults').style.display = 'none';
    
    showNotification(`📚 Selected: ${DIVINE_DATA.subjects[subjectKey].name}`);
    updateSubjectDisplay();
};

function updateSubjectDisplay() {
    const subject = getSubject();
    const chapters = Object.keys(subject.chapters);
    
    const subjectDisplay = document.getElementById('currentSubjectDisplay');
    if (subjectDisplay) {
        subjectDisplay.innerHTML = `
            <div style="color: #cd853f; font-weight: bold;">${subject.name}</div>
            <div style="font-size: 0.9rem; color: #999;">${chapters.length} chapters available</div>
        `;
    }
}

window.showDivineShop = function() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('studyInterface').style.display = 'block';
    
    const content = document.getElementById('contentArea');
    content.innerHTML = `
        <div style="min-height: 100vh;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h1 style="color: #cd853f; font-family: 'Cinzel', serif; font-size: 2.5rem; margin: 0;">🏛️ Divine Marketplace</h1>
                <div style="background: linear-gradient(45deg, rgba(255, 215, 0, 0.2), rgba(205, 133, 63, 0.2)); border: 2px solid #ffd700; border-radius: 15px; padding: 1rem; text-align: center;">
                    <div style="color: #ffd700; font-size: 1.5rem; font-weight: bold;">🪙 ${playerState.progress.coins}</div>
                    <div style="color: #daa520; font-size: 0.9rem;">Sacred Drachmas</div>
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
                <button onclick="showShopCategory('auras')" class="filter-tab active" style="background: linear-gradient(45deg, #cd853f, #daa520); color: #000; border: none; padding: 1rem 1.5rem; border-radius: 12px; cursor: pointer; font-weight: bold;">✨ Auras</button>
                <button onclick="showShopCategory('backgrounds')" class="filter-tab" style="background: #333; color: #ccc; border: 1px solid #555; padding: 1rem 1.5rem; border-radius: 12px; cursor: pointer; font-weight: bold;">🏰 Realms</button>
                <button onclick="showShopCategory('pets')" class="filter-tab" style="background: #333; color: #ccc; border: 1px solid #555; padding: 1rem 1.5rem; border-radius: 12px; cursor: pointer; font-weight: bold;">🐾 Pets</button>
                <button onclick="showShopCategory('powers')" class="filter-tab" style="background: #333; color: #ccc; border: 1px solid #555; padding: 1rem 1.5rem; border-radius: 12px; cursor: pointer; font-weight: bold;">⚡ Powers</button>
                <button onclick="showShopCategory('titles')" class="filter-tab" style="background: #333; color: #ccc; border: 1px solid #555; padding: 1rem 1.5rem; border-radius: 12px; cursor: pointer; font-weight: bold;">🏅 Titles</button>
                <button onclick="showShopCategory('godThemes')" class="filter-tab" style="background: #333; color: #ccc; border: 1px solid #555; padding: 1rem 1.5rem; border-radius: 12px; cursor: pointer; font-weight: bold;">🏛️ Themes</button>
                <button onclick="showShopCategory('avatars')" class="filter-tab" style="background: #333; color: #ccc; border: 1px solid #555; padding: 1rem 1.5rem; border-radius: 12px; cursor: pointer; font-weight: bold;">👑 Avatars</button>
            </div>
            
            <div id="shopCategoryContent">${generateShopCategory('auras')}</div>
        </div>
    `;
};

window.showShopCategory = function(cat) {
    document.querySelectorAll('#contentArea .filter-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.style.background = '#333';
        tab.style.color = '#ccc';
        tab.style.border = '1px solid #555';
    });
    if (event && event.target) {
        event.target.classList.add('active');
        event.target.style.background = 'linear-gradient(45deg, #cd853f, #daa520)';
        event.target.style.color = '#000';
        event.target.style.border = 'none';
    }
    document.getElementById('shopCategoryContent').innerHTML = generateShopCategory(cat);
};

function generateShopCategory(cat) {
    const items = DIVINE_DATA.shop[cat] || {};
    const categoryNames = {
        auras: 'Divine Auras',
        backgrounds: 'Sacred Realms', 
        pets: 'Mythical Companions',
        powers: 'Divine Powers',
        titles: 'Heroic Titles',
        godThemes: 'God Themes',
        avatars: 'Divine Avatars'
    };
    
    return `
        <div style="text-align: center;">
            <h2 style="color: #cd853f; margin-bottom: 3rem; font-size: 2.5rem; font-family: 'Cinzel', serif; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">${categoryNames[cat] || cat}</h2>
            <div class="shop-grid">
                ${Object.keys(items).map(key => {
                    const item = items[key];
                    const isOwned = item.owned;
                    const canAfford = playerState.progress.coins >= item.price;
                    
                    return `
                        <div class="shop-item ${isOwned ? 'owned' : ''}" onclick="${!isOwned ? `buyItem('${cat}', '${key}')` : ''}" 
                             style="cursor: ${isOwned ? 'default' : (canAfford ? 'pointer' : 'not-allowed')}; opacity: ${!canAfford && !isOwned ? '0.6' : '1'};">
                            
                            <div class="shop-icon">${item.icon}</div>
                            <div class="shop-name">${item.name}</div>
                            <div class="shop-description">${item.description}</div>
                            
                            <div class="shop-price">
                                ${isOwned ? 
                                    '✅ BLESSED BY GODS' :
                                    `🪙 ${item.price}${!canAfford ? ` (Need ${item.price - playerState.progress.coins} more)` : ''}`
                                }
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            
            ${Object.keys(items).length === 0 ? 
                '<div style="color: #666; font-style: italic; padding: 4rem; text-align: center; font-size: 1.2rem;">The gods have not yet blessed this category with divine items...</div>' : 
                ''
            }
        </div>
    `;
}

window.buyItem = function(cat, key) {
    const item = DIVINE_DATA.shop[cat][key];
    if (item.owned) { 
        showNotification('🏛️ This divine artifact is already blessed upon you!'); 
        return; 
    }
    if (playerState.progress.coins < item.price) { 
        showNotification(`⚡ The gods require ${item.price - playerState.progress.coins} more Drachmas for this blessing!`); 
        return; 
    }
    
    // Create purchase confirmation with improved styling
    const confirmModal = document.createElement('div');
    confirmModal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.95); display: flex; align-items: center; justify-content: center;
        z-index: 10002; backdrop-filter: blur(8px);
    `;
    
    confirmModal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            border: 3px solid #cd853f;
            border-radius: 20px;
            padding: 2.5rem;
            max-width: 450px;
            width: 90vw;
            text-align: center;
            box-shadow: 0 0 50px rgba(205, 133, 63, 0.6);
            animation: confirmPop 0.3s ease-out;
        ">
            <div style="font-size: 4.5rem; margin-bottom: 1rem; text-shadow: 0 0 20px rgba(255,215,0,0.5);">${item.icon}</div>
            <h3 style="color: #cd853f; margin-bottom: 1rem; font-family: 'Cinzel', serif; font-size: 1.8rem;">Divine Transaction</h3>
            <p style="color: #ddd; margin-bottom: 1rem; line-height: 1.6; font-size: 1.1rem;">The gods offer you <strong style="color: #cd853f;">${item.name}</strong></p>
            <div style="background: rgba(255,215,0,0.1); border: 2px solid #ffd700; border-radius: 12px; padding: 1rem; margin: 1rem 0;">
                <div style="color: #ffd700; font-size: 1.3rem; font-weight: bold;">🪙 ${item.price} Drachmas</div>
            </div>
            <p style="color: #ccc; font-size: 0.95rem; margin-bottom: 2rem; font-style: italic; line-height: 1.4;">"${item.description}"</p>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="confirmPurchase('${cat}', '${key}')" style="
                    background: linear-gradient(45deg, #cd853f, #daa520);
                    color: #000;
                    border: none;
                    padding: 1rem 1.5rem;
                    border-radius: 12px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(205, 133, 63, 0.4);
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">⚡ Accept Divine Gift</button>
                <button onclick="cancelPurchase()" style="
                    background: linear-gradient(135deg, #666, #555);
                    color: #fff;
                    border: none;
                    padding: 1rem 1.5rem;
                    border-radius: 12px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='#777'" onmouseout="this.style.background='linear-gradient(135deg, #666, #555)'">Decline</button>
            </div>
        </div>
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confirmPop {
            0% { transform: scale(0.7); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(confirmModal);
    
    window.confirmPurchase = function(category, itemKey) {
        const purchaseItem = DIVINE_DATA.shop[category][itemKey];
        playerState.progress.coins -= purchaseItem.price;
        purchaseItem.owned = true;
        
        showNotification(`🎆 Divine blessing received! ${purchaseItem.name} is now yours!`);
        confirmModal.remove();
        style.remove();
        showDivineShop();
        updateUI();
        
        delete window.confirmPurchase;
        delete window.cancelPurchase;
    };
    
    window.cancelPurchase = function() {
        confirmModal.remove();
        style.remove();
        delete window.confirmPurchase;
        delete window.cancelPurchase;
    };
};



window.showGodSelection = function() {
    const modal = document.getElementById('godModal');
    const grid = document.getElementById('godsGrid');
    if (!modal || !grid) { alert('🏛️ God selection not ready'); return; }
    
    // Reset modal positioning completely
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.zIndex = '10000';
    modal.style.overflow = 'auto';
    
    // Scroll page to top first
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    grid.innerHTML = Object.keys(DIVINE_DATA.gods).map(key => {
        const god = DIVINE_DATA.gods[key];
        const selected = key === playerState.god ? 'selected' : '';
        return `<div class="god-card ${selected}" onclick="selectGod('${key}')"><div class="god-symbol">${god.symbol}</div><div class="god-name">${god.name}</div><div class="god-power">${god.power}</div></div>`;
    }).join('');
    
    modal.style.display = 'flex';
    
    // Force modal content to top
    const modalContent = modal.querySelector('.god-modal-content');
    if (modalContent) {
        modalContent.scrollTop = 0;
        modalContent.style.marginTop = '0';
    }
    
    // Ensure modal scrolls to top
    setTimeout(() => {
        modal.scrollTop = 0;
        if (modalContent) modalContent.scrollTop = 0;
    }, 50);
};

window.selectGod = function(key) {
    playerState.god = key;
    const god = DIVINE_DATA.gods[key];
    const avatar = document.getElementById('playerAvatar');
    if (avatar) {
        avatar.textContent = god.symbol;
        const name = document.querySelector('.player-name');
        if (name) name.textContent = `${god.name}'s Scholar`;
    }
    applyTheme(key);
    closeGodModal();
    showNotification(`🏛️ ${god.name} chosen!`);
};

function applyTheme(key) {
    const god = DIVINE_DATA.gods[key];
    if (god && god.theme) {
        // Remove existing animations
        document.body.classList.remove('zeus-lightning', 'poseidon-waves', 'apollo-solar', 'artemis-moonbeam', 'ares-battle', 'aphrodite-sparkle', 'hephaestus-forge', 'hermes-speed', 'demeter-harvest', 'dionysus-wine', 'hades-shadow', 'hera-royal', 'athena-wisdom');
        
        // Apply main background with animation
        document.body.style.background = god.theme.bg;
        document.body.classList.add(`${key}-${god.theme.animation}`);
        
        // Update CSS custom properties
        document.documentElement.style.setProperty('--primary-gold', god.theme.accent);
        document.documentElement.style.setProperty('--secondary-color', god.theme.secondary);
        document.documentElement.style.setProperty('--tertiary-color', god.theme.tertiary);
        document.documentElement.style.setProperty('--text-color', god.theme.textColor);
        
        // Apply themed class for text color
        document.body.classList.add('themed');
        
        // Particle effects disabled
        // createParticleEffect(god.theme.particles);
        
        // Apply god-specific animations to elements
        applyGodSpecificEffects(key, god.theme);
        
        // Apply to progress bars with pulsing effect
        const quest = document.getElementById('questProgress');
        if (quest) {
            quest.style.background = `linear-gradient(90deg, ${god.theme.accent}, ${god.theme.secondary})`;
            quest.style.animation = `${key}-pulse 2s infinite alternate`;
        }
        const xp = document.getElementById('xpProgressBar');
        if (xp) {
            xp.style.background = `linear-gradient(90deg, ${god.theme.accent}, ${god.theme.secondary})`;
            xp.style.animation = `${key}-glow 3s infinite`;
        }
        
        // Enhanced stat cards with god-specific effects
        document.querySelectorAll('.stat-card').forEach((card, index) => {
            card.style.boxShadow = `0 0 25px ${god.theme.accent}60, 0 0 50px ${god.theme.secondary}30`;
            card.style.borderColor = god.theme.accent;
            card.style.animation = `${key}-float 4s infinite ease-in-out`;
            card.style.animationDelay = `${index * 0.2}s`;
        });
        
        // Dynamic filter tabs
        document.querySelectorAll('.filter-tab.active').forEach(tab => {
            tab.style.background = `linear-gradient(45deg, ${god.theme.accent}, ${god.theme.secondary})`;
            tab.style.color = god.theme.tertiary;
            tab.style.animation = `${key}-shimmer 2s infinite`;
        });
        
        // Enhanced study cards with god power
        document.querySelectorAll('.study-card').forEach(card => {
            card.style.borderColor = god.theme.accent;
            card.style.transition = 'all 0.3s ease';
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = `0 0 40px ${god.theme.accent}80, 0 0 80px ${god.theme.secondary}40`;
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = `0 0 20px ${god.theme.accent}40`;
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Divine header transformation
        const header = document.querySelector('.header');
        if (header) {
            header.style.background = `linear-gradient(135deg, ${god.theme.accent}25, ${god.theme.secondary}25)`;
            header.style.borderBottom = `3px solid ${god.theme.accent}`;
            header.style.animation = `${key}-header-glow 4s infinite alternate`;
        }
        
        // Add dynamic CSS animations
        addGodAnimations(key, god.theme);
    }
}

function createParticleEffect(particles) {
    // Remove existing particles only
    document.querySelectorAll('.divine-particle').forEach(p => p.remove());
    // Particle creation disabled for cleaner interface
}

function applyGodSpecificEffects(key, theme) {
    const body = document.body;
    
    switch(key) {
        case 'zeus':
            body.style.filter = 'brightness(1.1) contrast(1.2)';
            break;
        case 'poseidon':
            body.style.filter = 'hue-rotate(10deg) saturate(1.3)';
            break;
        case 'apollo':
            body.style.filter = 'brightness(1.3) saturate(1.4)';
            break;
        case 'artemis':
            body.style.filter = 'brightness(0.9) contrast(1.1)';
            break;
        case 'ares':
            body.style.filter = 'contrast(1.3) saturate(1.2)';
            break;
        case 'hades':
            body.style.filter = 'brightness(0.8) contrast(1.4) saturate(1.1) hue-rotate(270deg)';
            break;
        default:
            body.style.filter = 'none';
    }
}

function addGodAnimations(key, theme) {
    // Remove existing style element
    const existingStyle = document.getElementById('god-animations');
    if (existingStyle) existingStyle.remove();
    
    // Create new animations
    const style = document.createElement('style');
    style.id = 'god-animations';
    style.textContent = `
        @keyframes ${key}-pulse {
            0% { box-shadow: 0 0 5px ${theme.accent}; }
            100% { box-shadow: 0 0 20px ${theme.accent}, 0 0 30px ${theme.secondary}; }
        }
        @keyframes ${key}-glow {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.3) drop-shadow(0 0 10px ${theme.accent}); }
        }
        @keyframes ${key}-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        @keyframes ${key}-shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
        }
        @keyframes ${key}-header-glow {
            0% { box-shadow: 0 2px 10px ${theme.accent}40; }
            100% { box-shadow: 0 2px 20px ${theme.accent}80, 0 4px 40px ${theme.secondary}40; }
        }

    `;
    document.head.appendChild(style);
}

window.closeGodModal = function() { 
    const modal = document.getElementById('godModal');
    if (modal) modal.style.display = 'none'; 
};

window.setGoals = function() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); border: 3px solid #cd853f; border-radius: 20px; padding: 2.5rem; max-width: 500px; text-align: center; box-shadow: 0 0 50px rgba(205, 133, 63, 0.5);">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🏛️</div>
            <h2 style="color: #cd853f; margin-bottom: 1rem; font-family: 'Cinzel', serif;">Sacred Vows to the Gods</h2>
            <p style="color: #ddd; margin-bottom: 2rem; line-height: 1.6;">Pledge your daily devotion to divine learning. The gods will witness your commitment and bless your journey with wisdom.</p>
            
            <div style="margin: 1.5rem 0;">
                <label style="color: #cd853f; display: block; margin-bottom: 0.5rem; font-weight: bold;">⚡ Daily XP Vow:</label>
                <input type="number" id="xpGoal" value="100" min="10" max="1000" style="background: #222; color: #fff; border: 2px solid #cd853f; border-radius: 8px; padding: 0.75rem; width: 150px; text-align: center; font-size: 1.1rem;">
                <div style="color: #999; font-size: 0.9rem; margin-top: 0.5rem;">Divine Power to earn each day</div>
            </div>
            
            <div style="margin: 1.5rem 0;">
                <label style="color: #cd853f; display: block; margin-bottom: 0.5rem; font-weight: bold;">🔥 Study Streak Vow:</label>
                <input type="number" id="streakGoal" value="7" min="1" max="365" style="background: #222; color: #fff; border: 2px solid #cd853f; border-radius: 8px; padding: 0.75rem; width: 150px; text-align: center; font-size: 1.1rem;">
                <div style="color: #999; font-size: 0.9rem; margin-top: 0.5rem;">Consecutive days of divine study</div>
            </div>
            
            <div style="margin: 1.5rem 0;">
                <label style="color: #cd853f; display: block; margin-bottom: 0.5rem; font-weight: bold;">📚 Subject Mastery Vow:</label>
                <select id="subjectGoal" style="background: #222; color: #fff; border: 2px solid #cd853f; border-radius: 8px; padding: 0.75rem; width: 200px; font-size: 1rem;">
                    <option value="1">Master 1 subject</option>
                    <option value="3" selected>Master 3 subjects</option>
                    <option value="5">Master 5 subjects</option>
                    <option value="10">Master 10 subjects</option>
                </select>
                <div style="color: #999; font-size: 0.9rem; margin-top: 0.5rem;">Subjects to achieve excellence in</div>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                <button onclick="confirmSacredVows()" style="background: linear-gradient(45deg, #cd853f, #daa520); color: #000; border: none; padding: 1rem 2rem; border-radius: 10px; cursor: pointer; font-weight: bold; font-size: 1rem; transition: all 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">⚡ Pledge Sacred Vows</button>
                <button onclick="closeSacredVows()" style="background: #666; color: #fff; border: none; padding: 1rem 2rem; border-radius: 10px; cursor: pointer; font-weight: bold; font-size: 1rem;">Cancel</button>
            </div>
            
            <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(205, 133, 63, 0.1); border-radius: 10px; border-left: 4px solid #cd853f;">
                <div style="color: #cd853f; font-weight: bold; margin-bottom: 0.5rem;">🏛️ Divine Blessing</div>
                <div style="color: #ddd; font-size: 0.9rem; line-height: 1.4;">"Those who make sacred vows to the gods and honor them shall receive divine favor, increased XP rewards, and the wisdom of Athena herself."</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    window.confirmSacredVows = function() {
        const xpGoal = document.getElementById('xpGoal').value;
        const streakGoal = document.getElementById('streakGoal').value;
        const subjectGoal = document.getElementById('subjectGoal').value;
        
        // Store goals in player state or localStorage
        if (typeof playerState !== 'undefined') {
            playerState.goals = {
                dailyXP: parseInt(xpGoal),
                streak: parseInt(streakGoal),
                subjects: parseInt(subjectGoal)
            };
        }
        
        showNotification(`🏛️ Sacred vows pledged! Daily XP: ${xpGoal}, Streak: ${streakGoal} days, Subjects: ${subjectGoal}`);
        modal.remove();
        delete window.confirmSacredVows;
        delete window.closeSacredVows;
    };
    
    window.closeSacredVows = function() {
        modal.remove();
        delete window.confirmSacredVows;
        delete window.closeSacredVows;
    };
};
window.studyReminders = function() { 
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); border: 3px solid #cd853f; border-radius: 20px; padding: 2.5rem; max-width: 450px; text-align: center; box-shadow: 0 0 50px rgba(205, 133, 63, 0.5);">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🔔</div>
            <h2 style="color: #cd853f; margin-bottom: 1rem; font-family: 'Cinzel', serif;">Divine Calls from Olympus</h2>
            <p style="color: #ddd; margin-bottom: 2rem; line-height: 1.6;">Let the gods remind you of your sacred duty to learn. Hermes will deliver divine messages to guide your studies.</p>
            
            <div style="margin: 1.5rem 0; text-align: left;">
                <label style="color: #cd853f; display: flex; align-items: center; margin: 1rem 0; cursor: pointer;">
                    <input type="checkbox" checked style="margin-right: 0.75rem; transform: scale(1.2);"> 
                    📚 Daily study reminders
                </label>
                <label style="color: #cd853f; display: flex; align-items: center; margin: 1rem 0; cursor: pointer;">
                    <input type="checkbox" checked style="margin-right: 0.75rem; transform: scale(1.2);"> 
                    🔥 Streak maintenance alerts
                </label>
                <label style="color: #cd853f; display: flex; align-items: center; margin: 1rem 0; cursor: pointer;">
                    <input type="checkbox" style="margin-right: 0.75rem; transform: scale(1.2);"> 
                    🏆 Achievement notifications
                </label>
                <label style="color: #cd853f; display: flex; align-items: center; margin: 1rem 0; cursor: pointer;">
                    <input type="checkbox" style="margin-right: 0.75rem; transform: scale(1.2);"> 
                    🎯 Goal progress updates
                </label>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                <button onclick="enableDivineCalls()" style="background: linear-gradient(45deg, #cd853f, #daa520); color: #000; border: none; padding: 1rem 2rem; border-radius: 10px; cursor: pointer; font-weight: bold; font-size: 1rem;">🔔 Enable Divine Calls</button>
                <button onclick="closeDivineCalls()" style="background: #666; color: #fff; border: none; padding: 1rem 2rem; border-radius: 10px; cursor: pointer; font-weight: bold; font-size: 1rem;">Cancel</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    window.enableDivineCalls = function() {
        showNotification('🔔 Divine calls from Olympus enabled! Hermes will guide your studies.');
        modal.remove();
        delete window.enableDivineCalls;
        delete window.closeDivineCalls;
    };
    
    window.closeDivineCalls = function() {
        modal.remove();
        delete window.enableDivineCalls;
        delete window.closeDivineCalls;
    };
};
window.levelUp = function() { 
    playerState.progress.level++; 
    playerState.progress.coins += 50; 
    
    // Create epic level up animation
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: radial-gradient(circle, rgba(205,133,63,0.3) 0%, rgba(0,0,0,0.8) 70%);
        display: flex; align-items: center; justify-content: center; z-index: 10000;
        animation: levelUpFlash 0.5s ease-in-out;
    `;
    
    modal.innerHTML = `
        <div style="text-align: center; animation: levelUpBounce 1s ease-out;">
            <div style="font-size: 8rem; margin-bottom: 1rem; animation: levelUpGlow 2s infinite alternate;">🎆</div>
            <h1 style="color: #ffd700; font-size: 3rem; margin: 0; text-shadow: 0 0 20px #ffd700; font-family: 'Cinzel', serif;">DIVINE ASCENSION!</h1>
            <h2 style="color: #cd853f; font-size: 2rem; margin: 0.5rem 0;">Level ${playerState.progress.level}</h2>
            <p style="color: #fff; font-size: 1.2rem; margin: 1rem 0;">+50 Drachmas Blessed by the Gods!</p>
            <div style="margin-top: 2rem;">
                <button onclick="closeLevelUp()" style="background: linear-gradient(45deg, #ffd700, #ffed4e); color: #000; border: none; padding: 1rem 2rem; border-radius: 10px; cursor: pointer; font-weight: bold; font-size: 1.1rem;">Continue Divine Journey</button>
            </div>
        </div>
    `;
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes levelUpFlash {
            0% { background: rgba(0,0,0,0.8); }
            50% { background: radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(0,0,0,0.8) 70%); }
            100% { background: radial-gradient(circle, rgba(205,133,63,0.3) 0%, rgba(0,0,0,0.8) 70%); }
        }
        @keyframes levelUpBounce {
            0% { transform: scale(0.3) translateY(100px); opacity: 0; }
            50% { transform: scale(1.1) translateY(-20px); opacity: 1; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes levelUpGlow {
            0% { text-shadow: 0 0 20px #ffd700; }
            100% { text-shadow: 0 0 40px #ffd700, 0 0 60px #ffed4e; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(modal);
    
    window.closeLevelUp = function() {
        modal.remove();
        style.remove();
        delete window.closeLevelUp;
    };
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(modal)) {
            modal.remove();
            style.remove();
        }
    }, 5000);
    
    updateUI(); 
};

function updateUI() {
    const els = { studyStreak: document.getElementById('studyStreak'), totalXP: document.getElementById('totalXP'), currentLevel: document.getElementById('currentLevel'), coins: document.getElementById('coins'), accuracy: document.getElementById('accuracy'), healthBar: document.getElementById('healthBar'), manaBar: document.getElementById('manaBar') };
    if (els.studyStreak) els.studyStreak.textContent = playerState.progress.streak;
    if (els.totalXP) els.totalXP.textContent = playerState.progress.xp;
    if (els.currentLevel) els.currentLevel.textContent = playerState.progress.level;
    if (els.coins) els.coins.textContent = playerState.progress.coins;
    if (els.accuracy) els.accuracy.textContent = playerState.progress.accuracy + '%';
    if (els.healthBar) els.healthBar.style.width = playerState.progress.health + '%';
    if (els.manaBar) els.manaBar.style.width = playerState.progress.mana + '%';
}

function showNotification(msg) {
    document.querySelectorAll('.notification').forEach(n => n.remove());
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = msg;
    notif.style.cssText = 'position: fixed; top: 2rem; right: 2rem; background: linear-gradient(45deg, #00bfff, #00ffff); color: #000; padding: 1rem 2rem; border-radius: 10px; z-index: 1000; font-weight: bold;';
    document.body.appendChild(notif);
    setTimeout(() => { if (notif.parentNode) notif.remove(); }, 4000);
}

window.addEventListener('load', () => {
    updateUI();
    initializeFilters();
    setTimeout(() => showNotification('🏛️ Welcome to OLYMPUS ACADEMY!'), 1000);
    console.log('🏛️ OLYMPUS ACADEMY ready!');
});

// Initialize filter system on page load
window.initializeFilters = function() {
    const currentFilter = DIVINE_DATA.filters[playerState.currentFilter] || DIVINE_DATA.filters.all;
    
    // Update filter counts first
    updateFilterCounts();
    
    // Then update category filters and display subjects
    if (typeof updateSubjectCategoryFilters === 'function') {
        updateSubjectCategoryFilters(currentFilter.subjects);
    }
    
    if (typeof displayFilteredSubjects === 'function') {
        displayFilteredSubjects(currentFilter.subjects);
    }
};

function updateSubjectCategoryFilters(availableSubjects) {
    const categoryFilters = document.getElementById('subjectCategoryFilters');
    if (!categoryFilters) return;
    
    const categories = Object.keys(DIVINE_DATA.subjectCategories).map(key => {
        const category = DIVINE_DATA.subjectCategories[key];
        const count = category.subjects.filter(subject => availableSubjects.includes(subject)).length;
        return { key, ...category, count };
    }).filter(cat => cat.count > 0);
    
    categoryFilters.innerHTML = `
        <h4 style="color: #cd853f; margin: 0.5rem 0;">📚 Subject Categories</h4>
        <div class="subject-category-filter" style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
            <button onclick="showAllSubjects()" class="filter-tab active">🌟 All</button>
            ${categories.map(cat => 
                `<button onclick="filterBySubjectCategory('${cat.key}')" class="filter-tab">${cat.icon} ${cat.name} (${cat.count})</button>`
            ).join('')}
        </div>
    `;
}

function displayFilteredSubjects(subjects) {
    const subjectGrid = document.getElementById('subjectGrid');
    if (!subjectGrid) return;
    
    subjectGrid.innerHTML = subjects.map(key => {
        const subject = DIVINE_DATA.subjects[key];
        if (!subject) return '';
        
        const chapterCount = Object.keys(subject.chapters).length;
        return `
            <div class="subject-card" onclick="selectSubject('${key}')" style="background: #222; border: 2px solid #555; border-radius: 12px; padding: 1.5rem; margin: 0.5rem; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#00bfff'" onmouseout="this.style.borderColor='#555'">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h3 style="color: #cd853f; margin: 0; font-size: 1.1rem;">${subject.name}</h3>
                    <span style="background: #333; color: #ccc; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">${subject.category}</span>
                </div>
                <div style="color: #999; font-size: 0.9rem; margin-bottom: 0.5rem;">${chapterCount} chapter${chapterCount !== 1 ? 's' : ''} available</div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    ${Object.keys(subject.chapters).slice(0, 2).map(chapter => 
                        `<span style="background: rgba(0,191,255,0.2); color: #00bfff; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem;">${chapter}</span>`
                    ).join('')}
                    ${Object.keys(subject.chapters).length > 2 ? `<span style="color: #666; font-size: 0.7rem;">+${Object.keys(subject.chapters).length - 2} more</span>` : ''}
                </div>
            </div>
        `;
    }).join('') || '<div style="text-align: center; color: #666; padding: 2rem;">No subjects found in current filter</div>';
}

window.filterBySubjectCategory = function(categoryKey) {
    const categoryData = DIVINE_DATA.subjectCategories[categoryKey];
    if (!categoryData) return;
    
    const currentCurriculumFilter = DIVINE_DATA.filters[playerState.currentFilter] || DIVINE_DATA.filters.all;
    const filteredSubjects = categoryData.subjects.filter(subject => 
        currentCurriculumFilter.subjects.includes(subject)
    );
    
    document.querySelectorAll('.subject-category-filter .filter-tab').forEach(tab => tab.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    
    showNotification(`${categoryData.icon} ${categoryData.name} - ${filteredSubjects.length} subjects`);
    displayFilteredSubjects(filteredSubjects);
};

window.showAllSubjects = function() {
    const currentCurriculumFilter = DIVINE_DATA.filters[playerState.currentFilter] || DIVINE_DATA.filters.all;
    
    document.querySelectorAll('.subject-category-filter .filter-tab').forEach(tab => tab.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    
    showNotification(`🌟 All Subjects - ${currentCurriculumFilter.subjects.length} subjects`);
    displayFilteredSubjects(currentCurriculumFilter.subjects);
};

function updateCurrentSubjectDisplay(subject) {
    const display = document.getElementById('currentSubjectDisplay');
    if (!display) return;
    
    const chapterCount = Object.keys(subject.chapters).length;
    const chapters = Object.keys(subject.chapters);
    
    display.innerHTML = `
        <div style="background: #222; border: 2px solid #cd853f; border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h3 style="color: #cd853f; margin: 0;">${subject.name}</h3>
                <span style="background: #333; color: #ccc; padding: 0.25rem 0.75rem; border-radius: 6px; font-size: 0.9rem;">${subject.category}</span>
            </div>
            <div style="color: #999; margin-bottom: 1rem;">${chapterCount} chapters available for divine study</div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${chapters.map((chapter, index) => 
                    `<button onclick="selectChapter('${chapter}')" style="background: ${index === 0 ? '#00bfff' : '#444'}; color: ${index === 0 ? '#000' : '#fff'}; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.8rem; transition: all 0.3s ease;">${chapter}</button>`
                ).join('')}
            </div>
        </div>
    `;
}

window.selectChapter = function(chapterName) {
    playerState.chapter = chapterName;
    const subject = DIVINE_DATA.subjects[playerState.subject];
    updateCurrentSubjectDisplay(subject);
    showNotification(`📖 Chapter selected: ${chapterName}`);
};

window.clearSearch = function() {
    document.getElementById('subjectSearch').value = '';
    document.getElementById('searchResults').style.display = 'none';
    const currentFilter = DIVINE_DATA.filters[playerState.currentFilter] || DIVINE_DATA.filters.all;
    displayFilteredSubjects(currentFilter.subjects);
};

function updateFilterCounts() {
    document.querySelectorAll('.curriculum-filter .filter-tab').forEach(tab => {
        const category = tab.getAttribute('data-category');
        if (category && DIVINE_DATA.filters[category]) {
            const count = DIVINE_DATA.filters[category].count;
            const currentText = tab.textContent;
            if (!currentText.includes('(')) {
                tab.textContent = `${currentText} (${count})`;
            }
        }
    });
}

// Advanced search functionality
window.advancedSearch = function(query) {
    const results = [];
    const searchTerms = query.toLowerCase().split(' ');
    
    Object.keys(DIVINE_DATA.subjects).forEach(key => {
        const subject = DIVINE_DATA.subjects[key];
        let score = 0;
        
        searchTerms.forEach(term => {
            if (subject.name.toLowerCase().includes(term)) score += 3;
            if (subject.category.toLowerCase().includes(term)) score += 2;
            
            Object.keys(subject.chapters).forEach(chapter => {
                if (chapter.toLowerCase().includes(term)) score += 1;
                if (subject.chapters[chapter].content.toLowerCase().includes(term)) score += 0.5;
            });
        });
        
        if (score > 0) {
            results.push({ key, subject, score });
        }
    });
    
    return results.sort((a, b) => b.score - a.score);
};

// Quick filter shortcuts
window.quickFilter = function(type) {
    const shortcuts = {
        recent: () => ['math', 'biology', 'chemistry'],
        popular: () => ['math', 'english', 'biology', 'chemistry', 'physics'],
        beginner: () => ['kcpe_math', 'kcpe_english', 'kcpe_science'],
        advanced: () => ['med_year4', 'eng_year4', 'cs_year4']
    };
    
    const subjects = shortcuts[type] ? shortcuts[type]() : [];
    if (subjects.length > 0) {
        displayFilteredSubjects(subjects);
        showNotification(`⚡ Quick filter: ${type} subjects (${subjects.length})`);
    }
};

console.log('🏛️ OLYMPUS ACADEMY - All systems operational!');