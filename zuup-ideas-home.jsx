import React, { useState, useEffect, useRef } from 'react';

// ZANDBOX - Idea Constellation
// An immersive exploration interface for Visionblox LLC / Zuup Innovation Lab

const ZandboxIdeasHome = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [activeDomain, setActiveDomain] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeSection, setActiveSection] = useState('domains');

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Knowledge Domains - Unified with HTML
  const domains = {
    agi: { 
      name: 'AGI/ASI Research', 
      color: '#9b59b6', 
      gradient: 'linear-gradient(135deg, #9b59b6 0%, #4ecdc4 100%)',
      icon: '🧠',
      count: '8 ideas'
    },
    federal: { 
      name: 'Federal Capture & Compliance', 
      color: '#d4a853', 
      gradient: 'linear-gradient(135deg, #d4a853 0%, #e74c3c 100%)',
      icon: '📜',
      count: '5 ideas'
    },
    mvci: { 
      name: 'MVCI Agent Systems', 
      color: '#4ecdc4', 
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #3498db 100%)',
      icon: '⚡',
      count: '4 ideas'
    },
    rural: { 
      name: 'Rural Infrastructure', 
      color: '#2ecc71', 
      gradient: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
      icon: '🏥',
      count: '3 ideas'
    },
    digital: { 
      name: 'Digital Transformation', 
      color: '#3498db', 
      gradient: 'linear-gradient(135deg, #3498db 0%, #9b59b6 100%)',
      icon: '🔄',
      count: '4 ideas'
    },
    platforms: { 
      name: 'Zuup Platform Suite', 
      color: '#e74c3c', 
      gradient: 'linear-gradient(135deg, #e74c3c 0%, #d4a853 100%)',
      icon: '🚀',
      count: '6 platforms'
    },
    frameworks: { 
      name: 'Methodologies', 
      color: '#00bbf9', 
      gradient: 'linear-gradient(135deg, #00bbf9 0%, #4ecdc4 100%)',
      icon: '⚙️',
      count: '5 frameworks'
    }
  };

  // Complete Ideas Database - Unified from both HTML and JSX
  const ideas = [
    // AGI/ASI Research Domain
    {
      id: 'rca',
      title: 'Recursive Cognitive Architecture (RCA)',
      domain: 'agi',
      status: 'active',
      description: 'Layer-by-layer cognitive architecture grounded in Cattell-Horn-Carroll theory, designed for self-aware, recursively improving AI systems.',
      details: [
        'Layer 0: Epistemological Foundation - Knowledge taxonomies, confidence architectures',
        'Layer 1: Perception & Input - Multi-modal ingestion, relevance filtering',
        'Layer 2: Memory Systems - Short/long-term storage, retrieval mechanisms',
        'Layer 3: Reasoning Engine - Logical inference, pattern recognition',
        'Layer 4: Metacognition - Self-awareness, capability assessment',
        'Layer 5: Synthesis - Cross-domain integration',
        'Layer 6: Action Selection - Goal-directed behavior',
        'Layer 7: Recursive Improvement - Self-modification capabilities',
        'Layer 8: Network Intelligence - Distributed cognition'
      ],
      connections: ['chc', 'epistemic', 'gap-analysis'],
      progress: 35,
      papers: ['RCA_Layer_Specification.md'],
      links: [{ text: 'Development Chat', url: 'https://claude.ai/chat/7c4a60b0-5871-4eb3-a881-807d7cde5d98' }]
    },
    {
      id: 'chc',
      title: 'CHC Theory Integration',
      domain: 'agi',
      status: 'research',
      description: 'Integration of Cattell-Horn-Carroll cognitive abilities framework as the empirical foundation for AGI architecture.',
      details: [
        '10 core cognitive components from psychometric research',
        'Broad abilities: General Knowledge, Reasoning, Memory Storage/Retrieval',
        'Operationalized AGI scoring methodology (0-100%)',
        'GPT-4 benchmark: 27%, GPT-5 benchmark: 57%'
      ],
      connections: ['rca', 'agi-definition'],
      progress: 60,
      papers: ['agidefinitional.pdf']
    },
    {
      id: 'agi-definition',
      title: 'AGI Definition Framework',
      domain: 'agi',
      status: 'reference',
      description: 'Quantifiable framework defining AGI as matching cognitive versatility and proficiency of a well-educated adult.',
      details: [
        'Based on Hendrycks et al. multi-author paper',
        '10 cognitive domains weighted equally (10% each)',
        'Current AI exhibits "jagged" cognitive profile',
        'Critical bottleneck: Long-term memory storage at 0%'
      ],
      connections: ['chc', 'rca'],
      progress: 100,
      papers: ['agidefinitional.pdf'],
      links: [{ text: 'AGI Definition Paper', url: '#' }]
    },
    {
      id: 'instrumental',
      title: 'Instrumental Convergence Framework',
      domain: 'agi',
      status: 'framework',
      description: 'Experimental framework for understanding how diverse AI systems converge on similar instrumental subgoals.',
      details: [
        'Self-preservation, resource acquisition, capability enhancement',
        'Open-weight model testing: Llama 3.1, Mistral Large, Qwen2.5',
        'Cross-domain strategic thinking applications',
        'Reverse-engineering hidden objectives methodology'
      ],
      connections: ['crypto-agents'],
      progress: 50,
      links: [{ text: 'Experiment Framework', url: 'https://claude.ai/chat/abe9ab76-4123-4762-8e49-3e9793c833c4' }]
    },
    {
      id: 'crypto-agents',
      title: 'Autonomous AI Agents with Crypto Wallets',
      domain: 'agi',
      status: 'speculative',
      description: 'Research framework for AI agents with crypto wallets capable of wealth generation, recruitment, and market disruption.',
      details: [
        'Wallet architecture for autonomous agents',
        'Token economics and revenue generation models',
        'Multi-stage agent recruitment workflows',
        'Swarm coordination mechanisms',
        '47-page research framework'
      ],
      connections: ['instrumental'],
      progress: 20,
      links: [{ text: 'Research Paper', url: 'https://claude.ai/chat/189141c5-8ae9-471b-a9ae-63a5fad5c3f9' }]
    },
    {
      id: 'proof-nonstationarity',
      title: 'Non-Stationarity of Mathematical Proofs',
      domain: 'agi',
      status: 'speculative',
      description: 'Research examining how mathematical proof concepts might change across AGI → ASI → post-abundance transitions.',
      details: [
        'Five investigator personas: Metamathematician, Computational Physicist, Game Theorist, Epistemologist, Information Theorist',
        'Gödel implications for superintelligent systems',
        'Agent-relative epistemology frameworks',
        'Recursive self-application of methodology'
      ],
      connections: ['rca'],
      progress: 15,
      links: [{ text: 'Whitepaper', url: 'https://claude.ai/chat/ba75db90-cbac-4dcb-a23e-cac07be1bfad' }]
    },
    {
      id: 'hallucination-study',
      title: 'LLM Hallucination Rate Analysis',
      domain: 'agi',
      status: 'complete',
      description: 'IEEE-format academic paper with interactive visualization analyzing hallucination patterns across major language models.',
      details: [
        '~5% detected fabrication rate (floor not ceiling)',
        'Visualization requests = highest risk',
        'Taxonomy: explicit fabrication, confident confabulation, statistical artifacts',
        'Interactive 3D companion with Three.js',
        'Benchmarking methodology & mitigation strategies',
        '30+ academic citations'
      ],
      connections: ['epistemic'],
      progress: 100,
      papers: ['LLM_Hallucination_IEEE_Paper.tex'],
      links: [{ text: 'Paper & Visualization', url: 'https://claude.ai/chat/79dcbd65-e931-4d90-856c-e8c8a54024d6' }]
    },

    // Federal Capture Domain
    {
      id: 'federal-capture',
      title: 'Federal Capture & Compliance',
      domain: 'federal',
      status: 'active',
      description: 'End-to-end federal and SLED capture methodology for government contracting via OTAs, SOSSEC consortium, and capture methodology.',
      details: [
        'OTA mechanisms and consortium management',
        'Capture playbook methodology',
        'SOC 2 audit preparation',
        'GSA MAS documentation',
        'FAR/DFAR compliance frameworks',
        'Valley of death navigation from prototype to production'
      ],
      connections: ['ota', 'sossec', 'mvci'],
      progress: 70,
      links: [
        { text: 'Contract Vehicles', url: 'https://claude.ai/chat/d0069381-2357-4a0c-9aa0-0cb79924a586' },
        { text: 'SOC 2 Guide', url: 'https://claude.ai/chat/722887b1-c226-444f-a163-cab5413e60ec' }
      ]
    },
    {
      id: 'ota',
      title: 'Other Transaction Authorities',
      domain: 'federal',
      status: 'reference',
      description: 'Flexible acquisition authorities for accessing innovation from non-traditional contractors, particularly in rapidly evolving technology.',
      details: [
        '30-day acquisition cycles vs 2-4 year traditional',
        'SOSSEC consortium management (9 active OTAs)',
        'COBRA (cybersecurity), ACI (C4ISR), PCI (propulsion)',
        '80% non-traditional contractor membership'
      ],
      connections: ['mvci', 'sossec', 'valley-death'],
      progress: 80
    },
    {
      id: 'sossec',
      title: 'SOSSEC Consortium Strategy',
      domain: 'federal',
      status: 'playbook',
      description: '30-day action plan for joining SOSSEC and navigating federal contracting ecosystem.',
      details: [
        'Membership application through first proposal',
        'Decision tree for consortium selection',
        'White paper template and evaluation criteria',
        'Relationship building protocols'
      ],
      connections: ['ota'],
      progress: 70
    },
    {
      id: 'valley-death',
      title: 'Valley of Death Navigation',
      domain: 'federal',
      status: 'strategy',
      description: 'Strategic framework for transitioning from OTA prototype awards to production contracts.',
      details: [
        '18-36 month gap between prototype and production',
        'Five distinct pathways mapped',
        'Critical success factors identified',
        'OTAs as entry doors, production as destination'
      ],
      connections: ['ota', 'mvci'],
      progress: 55
    },
    {
      id: 'capture-playbook',
      title: 'Federal Capture Playbook',
      domain: 'federal',
      status: 'active',
      description: 'End-to-end methodology for federal and SLED procurement capture covering pipeline development to contract award.',
      details: [
        'Pipeline development process',
        'Opportunity qualification criteria',
        'Bid/no-bid decision framework',
        'Capture plan templates',
        'Competitive positioning strategies',
        'Go-to-market execution'
      ],
      connections: ['ota', 'sossec'],
      progress: 65,
      links: [{ text: 'Methodology', url: '#' }]
    },

    // MVCI Agent Systems Domain
    {
      id: 'mvci',
      title: '12-Agent MVCI System',
      domain: 'mvci',
      status: 'active',
      description: '12-agent Minimum Viable Corporate Infrastructure for federal contracting operations with zero-budget constraints.',
      details: [
        'Executive Coordinator Agent - Chief of Staff coordination',
        'Decision Logger Agent - Institutional memory',
        'Contract Intake Agent - Legal processing & triage',
        'Vendor Due Diligence Agent - Supplier verification',
        'Spend Control Agent - Expense monitoring',
        'Compliance Monitor Agent - Regulatory tracking',
        '+ 6 additional specialized agents',
        'Mandatory approval gates for high-risk actions'
      ],
      connections: ['zero-budget', 'ota', 'compliance'],
      progress: 45,
      technical: {
        stack: ['n8n', 'Ollama/Mistral-7B', 'SQLite', 'GitHub'],
        dataClassification: ['PUBLIC', 'INTERNAL', 'CONFIDENTIAL', 'REGULATED']
      },
      links: [{ text: 'Full Specification', url: 'https://claude.ai/chat/1629d596-cbe9-4d73-823a-bbe39e3b2d8c' }]
    },
    {
      id: 'mvci-paper',
      title: 'MVCI vs TCI Whitepaper',
      domain: 'mvci',
      status: 'complete',
      description: 'IEEE-format academic paper comparing Minimum Viable vs Traditional Corporate Infrastructure with 3D visualizations.',
      details: [
        '80% TCO reduction over 5 years',
        'Time-to-value: 18-36 months → 3-9 months',
        'Break-even: 40 months → 12 months',
        '30+ academic citations'
      ],
      connections: ['mvci', 'zero-budget'],
      progress: 100,
      papers: ['MVCI_vs_TCI_IEEE_Paper.tex', 'references.bib'],
      links: [{ text: 'MVCI vs TCI Analysis', url: 'https://claude.ai/chat/037f5076-a31c-4c2c-84f9-bef19a3e9cc6' }]
    },

    // Rural Infrastructure Domain
    {
      id: 'cah',
      title: 'Critical Access Hospital Infrastructure',
      domain: 'rural',
      status: 'framework',
      description: 'Comprehensive digital transformation framework for 1,350+ CAHs serving rural America.',
      details: [
        'EHR/EMR systems (98% adoption, gaps in interoperability)',
        'Cybersecurity & HIPAA compliance',
        'Telehealth infrastructure ($17K-$50K setup)',
        '65 performance benchmarks across 3 tiers',
        '90-day ROI demonstration targets',
        '36-month phased implementation'
      ],
      connections: ['aris', 'rural-water', 'compliance'],
      progress: 75,
      papers: ['CAH_Digital_Infrastructure_Framework.tex'],
      links: [{ text: 'Hospital Framework', url: 'https://claude.ai/chat/bc367dc9-ae7c-460d-b5e3-35afd7d94b7a' }]
    },
    {
      id: 'rural-water',
      title: 'Rural Water Association Solutions',
      domain: 'rural',
      status: 'framework',
      description: 'MVP framework for 30,000+ rural water systems under 1,000 connections.',
      details: [
        '$187-375M annual addressable market',
        'Billing/customer management (40+ hours/month manual)',
        'SCADA/water quality monitoring',
        'Safe Drinking Water Act compliance (80% violations in small systems)'
      ],
      connections: ['cah', 'aris'],
      progress: 70,
      papers: ['Rural_Water_MVP_Framework.tex'],
      links: [{ text: 'Water Systems', url: 'https://claude.ai/chat/cd19aee0-3be8-4268-abc1-5401961765ea' }]
    },
    {
      id: 'aris',
      title: 'ARIS-2025 Integrated System',
      domain: 'rural',
      status: 'specification',
      description: 'AI-Native Rural Infrastructure System integrating CAH and NRWA infrastructure with ≥92% AIRIB-2025 benchmark readiness.',
      details: [
        'Federated analytics architecture',
        'Zero Trust security model',
        'FHIR healthcare data standards',
        'Seven infrastructure domains mapped',
        'System architecture & component specifications',
        'Integration patterns & benchmark definitions'
      ],
      connections: ['cah', 'rural-water'],
      progress: 40,
      papers: ['ARIS_2025_Specification.tex'],
      links: [{ text: 'Specification', url: 'https://claude.ai/chat/692d507b-cb89-4ff9-91e3-a2c1d563a66f' }]
    },

    // Digital Transformation Domain
    {
      id: 'auto-supply',
      title: 'Automotive Supply Chain Transformation',
      domain: 'digital',
      status: 'complete',
      description: 'First-principles analysis of tier 2/3 automotive supplier digital transformation challenges.',
      details: [
        '3-5% EBIT margins, 38% at breakeven/losses',
        '$325K-$750K transformation costs over 3 years',
        'Mathematical impossibility of comprehensive transformation',
        '36-month MVP phased implementation'
      ],
      connections: ['aviation-supply', 'energy-supply', 'mfg-supply'],
      progress: 100,
      papers: ['Automotive_DT_IEEE_Paper.tex'],
      links: [{ text: 'Automotive', url: 'https://claude.ai/chat/46f312c5-8d21-4372-a1df-73b60dc96f7b' }]
    },
    {
      id: 'aviation-supply',
      title: 'Aviation Supply Chain Transformation',
      domain: 'digital',
      status: 'complete',
      description: 'Tier 2/3 aviation supplier analysis: 2-8% margins, 165-day cash conversion cycles.',
      details: [
        '$2-10M transformation costs vs survival imperative',
        'Targeted MVPs: $50K-150K with 3-12 month ROI',
        'Hybrid edge-cloud architecture',
        'Computer vision QC, predictive maintenance'
      ],
      connections: ['auto-supply'],
      progress: 100,
      papers: ['Aviation_DT_IEEE_Paper.tex'],
      links: [{ text: 'Aviation', url: 'https://claude.ai/chat/46f312c5-8d21-4372-a1df-73b60dc96f7b' }]
    },
    {
      id: 'energy-supply',
      title: 'Energy Supply Chain Transformation',
      domain: 'digital',
      status: 'complete',
      description: 'Analysis of tier 2/3 energy supplier collapse (29-30 UK suppliers, 4M households affected).',
      details: [
        'Platform economics revolution (Kraken: 70M+ accounts)',
        'E.ON: £200M losses → £100M profit',
        '40% cost-to-serve reductions achievable',
        '18-month payback on platform migration'
      ],
      connections: ['auto-supply'],
      progress: 100,
      papers: ['Energy_DT_IEEE_Paper.tex'],
      links: [{ text: 'Energy', url: 'https://claude.ai/chat/a758e09d-c341-4242-9777-46edb5c80d2f' }]
    },
    {
      id: 'mfg-supply',
      title: 'Manufacturing Digital Transformation',
      domain: 'digital',
      status: 'complete',
      description: 'Electronics manufacturing tier 2/3 supplier analysis (500-10,000 employees, global scope).',
      details: [
        'Legacy systems from decades of deferred investment',
        'Skills gaps preventing expertise acquisition',
        'Cascading OEM compliance burdens',
        'Software-defined products existential threat'
      ],
      connections: ['auto-supply'],
      progress: 100,
      papers: ['Manufacturing_DT_IEEE_Paper.tex']
    },

    // Zuup Platform Suite Domain
    {
      id: 'aureon',
      title: 'Aureon - Procurement Substrate',
      domain: 'platforms',
      status: 'specification',
      description: 'AI-native procurement platform for federal and enterprise supply chain operations.',
      details: [
        'Intelligent vendor matching',
        'Automated compliance verification',
        'Contract lifecycle management',
        'Spend analytics and optimization'
      ],
      connections: ['mvci', 'civium'],
      progress: 25,
      links: [{ text: 'Platform Specs', url: '#' }]
    },
    {
      id: 'veyra',
      title: 'Veyra - Autonomy OS',
      domain: 'platforms',
      status: 'specification',
      description: 'Operating system for autonomous agent coordination and orchestration.',
      details: [
        'Multi-agent coordination framework',
        'Task decomposition and allocation',
        'Real-time monitoring and intervention',
        'Safety constraints enforcement'
      ],
      connections: ['mvci', 'instrumental'],
      progress: 20,
      links: [{ text: 'Platform Specs', url: '#' }]
    },
    {
      id: 'civium',
      title: 'Civium - Compliance Engine',
      domain: 'platforms',
      status: 'specification',
      description: 'Automated compliance monitoring and reporting for regulated industries.',
      details: [
        'Multi-framework compliance tracking',
        'Automated evidence collection',
        'Risk assessment dashboards',
        'Audit trail management'
      ],
      connections: ['compliance', 'federal-capture'],
      progress: 30,
      links: [{ text: 'Platform Specs', url: '#' }]
    },
    {
      id: 'podx',
      title: 'PodX - Mobile Data Center',
      domain: 'platforms',
      status: 'specification',
      description: 'Containerized mobile data center for edge computing and disaster recovery.',
      details: [
        'Rapid deployment capability',
        'Self-contained power and cooling',
        'Secure connectivity options',
        'Modular scaling architecture'
      ],
      connections: ['aris', 'rural'],
      progress: 15
    },
    {
      id: 'symbion',
      title: 'Symbion - Gut-Brain Interface',
      domain: 'platforms',
      status: 'speculative',
      description: 'Research platform for microbiome-cognitive system interactions.',
      details: [
        'Biosensor integration',
        'Microbiome analytics',
        'Cognitive correlation studies',
        'Intervention recommendation engine'
      ],
      connections: ['rca'],
      progress: 5
    },
    {
      id: 'qawm',
      title: 'QAWM - Quantum Archaeology Work Module',
      domain: 'platforms',
      status: 'speculative',
      description: 'Theoretical framework for quantum computing applications in data archaeology.',
      details: [
        'Quantum search algorithms',
        'Pattern reconstruction methods',
        'Historical data recovery',
        'Cryptographic archaeology'
      ],
      connections: [],
      progress: 5
    },

    // Methodologies Domain
    {
      id: 'first-principles',
      title: 'First-Principles Analysis',
      domain: 'frameworks',
      status: 'active',
      description: 'Core methodology: deconstruct to fundamental truths, reconstruct with clear implementation paths.',
      details: [
        'Strip buzzwords, question assumptions',
        'Stress-test against real constraints',
        'Deconstruction → Reconstruction → MVP',
        'Applied across all project domains'
      ],
      connections: ['epistemic', 'gap-analysis'],
      progress: 90
    },
    {
      id: 'epistemic',
      title: 'Epistemic Confidence Marking',
      domain: 'frameworks',
      status: 'active',
      description: 'Systematic markers for intellectual honesty in technical content.',
      details: [
        'VERIFIED — Grounded in cited academic research',
        'PLAUSIBLE — Logically sound, requires validation',
        'SPECULATIVE — Theoretical, requires empirical testing',
        'Applied throughout all deliverables'
      ],
      connections: ['first-principles', 'gap-analysis'],
      progress: 95
    },
    {
      id: 'gap-analysis',
      title: 'Gap Analysis Protocol',
      domain: 'frameworks',
      status: 'active',
      description: 'Honest self-assessment methodology before claiming completeness.',
      details: [
        'Identify missing operational specifics',
        'Flag arbitrary thresholds lacking empirical grounding',
        'Document what "solving" actually requires',
        'Prevents premature layer progression in RCA'
      ],
      connections: ['first-principles', 'epistemic', 'rca'],
      progress: 85
    },
    {
      id: 'zero-budget',
      title: 'Zero-Budget Implementation',
      domain: 'frameworks',
      status: 'active',
      description: 'MVCI constraint: open-source only, no paid APIs or SaaS.',
      details: [
        'n8n workflow automation',
        'Ollama + Mistral-7B-Instruct local inference',
        'SQLite data management',
        'GitHub evidence storage'
      ],
      connections: ['mvci'],
      progress: 80
    },
    {
      id: 'compliance',
      title: 'Compliance-First Design',
      domain: 'frameworks',
      status: 'active',
      description: 'Mandatory compliance requirements integrated from architecture inception.',
      details: [
        'HIPAA (healthcare data)',
        'FISMA (federal information systems)',
        'EPA regulations (water infrastructure)',
        'FAR/DFAR (federal procurement)'
      ],
      connections: ['mvci', 'cah', 'rural-water', 'civium'],
      progress: 75
    }
  ];

  // Timeline data
  const timeline = [
    {
      date: 'Foundation',
      title: 'RCA Layer 0: Epistemological Foundation',
      description: 'Established the axiomatization of intelligence. Grounding in CHC cognitive theory. Definition of what "knowing" means for an artificial system.'
    },
    {
      date: 'Perception',
      title: 'RCA Layer 1: Input Processing',
      description: 'Multimodal perception architecture. Sensory integration pathways. Attention mechanisms and salience mapping.'
    },
    {
      date: 'Infrastructure',
      title: 'MVCI System Design',
      description: '12-agent zero-budget system. n8n + Ollama + SQLite stack. Compliance-first architecture with 4-tier data classification.'
    },
    {
      date: 'Research',
      title: 'Academic Output',
      description: 'IEEE-format papers on hallucination analysis, instrumental convergence, and sector-specific digital transformation.'
    },
    {
      date: 'Active',
      title: 'Current Focus',
      description: 'RCA gap closure through verified academic research. Federal capture pipeline development. Platform suite specifications.'
    }
  ];

  // Methodology steps
  const methodology = [
    { number: '01', title: 'Deconstruct', desc: 'Strip buzzwords and question assumptions. Reduce to fundamental truths.' },
    { number: '02', title: 'Reconstruct', desc: 'Rebuild into actionable solutions with clear implementation paths.' },
    { number: '03', title: 'Validate', desc: 'Stress-test against real constraints: budget, timeline, compliance.' },
    { number: '04', title: 'Iterate', desc: 'Gap analysis and remediation. Epistemic confidence marking.' }
  ];

  // Filter ideas based on domain and search
  const filteredIdeas = ideas.filter(idea => {
    const matchesDomain = activeDomain === 'all' || idea.domain === activeDomain;
    const matchesSearch = searchQuery === '' || 
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  // Connection lines between ideas
  const getConnectedIdeas = (ideaId) => {
    const idea = ideas.find(i => i.id === ideaId);
    if (!idea) return [];
    return ideas.filter(i => idea.connections?.includes(i.id));
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    const statusConfig = {
      active: { bg: '#4ecdc4', text: '#0a0a0a', label: 'ACTIVE' },
      research: { bg: '#d4a853', text: '#0a0a0a', label: 'RESEARCH' },
      complete: { bg: '#2ecc71', text: '#0a0a0a', label: 'COMPLETE' },
      framework: { bg: '#9b59b6', text: '#ffffff', label: 'FRAMEWORK' },
      reference: { bg: '#e74c3c', text: '#ffffff', label: 'REFERENCE' },
      playbook: { bg: '#d4a853', text: '#0a0a0a', label: 'PLAYBOOK' },
      strategy: { bg: '#4ecdc4', text: '#0a0a0a', label: 'STRATEGY' },
      specification: { bg: '#3498db', text: '#ffffff', label: 'SPEC' },
      speculative: { bg: '#333', text: '#6b6b7b', label: 'SPECULATIVE' }
    };
    const config = statusConfig[status] || statusConfig.active;
    return (
      <span style={{
        padding: '4px 12px',
        borderRadius: '4px',
        fontSize: '10px',
        fontWeight: 700,
        letterSpacing: '0.1em',
        background: config.bg,
        color: config.text,
        textTransform: 'uppercase'
      }}>
        {config.label}
      </span>
    );
  };

  // Progress bar component
  const ProgressBar = ({ progress, color }) => (
    <div style={{
      width: '100%',
      height: '4px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '2px',
      overflow: 'hidden',
      marginTop: '12px'
    }}>
      <div style={{
        width: `${progress}%`,
        height: '100%',
        background: color,
        borderRadius: '2px',
        transition: 'width 0.8s ease-out'
      }} />
    </div>
  );

  // Idea Card Component
  const IdeaCard = ({ idea, index }) => {
    const domain = domains[idea.domain];
    const isActive = activeNode === idea.id;
    const isConnected = activeNode && getConnectedIdeas(activeNode).some(i => i.id === idea.id);
    
    return (
      <div
        onClick={() => setActiveNode(isActive ? null : idea.id)}
        onMouseEnter={() => setHoveredNode(idea.id)}
        onMouseLeave={() => setHoveredNode(null)}
        style={{
          background: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(18, 18, 26, 0.9)',
          border: `1px solid ${isActive ? domain.color : isConnected ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.05)'}`,
          borderRadius: '12px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: `translateY(${isLoaded ? 0 : 40}px) ${hoveredNode === idea.id ? 'translateY(-8px)' : ''}`,
          opacity: isLoaded ? (activeNode && !isActive && !isConnected ? 0.4 : 1) : 0,
          transitionDelay: `${index * 50}ms`,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: hoveredNode === idea.id ? '0 20px 60px rgba(0, 0, 0, 0.4)' : 'none'
        }}
      >
        {/* Top accent bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: domain.color,
          opacity: hoveredNode === idea.id || isActive ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }} />

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '12px',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ 
              fontSize: '24px',
              width: '50px',
              height: '50px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `${domain.color}33`
            }}>{domain.icon}</span>
            <h3 style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: 600,
              color: '#e8e6e3',
              lineHeight: 1.3,
              fontFamily: "'Playfair Display', serif"
            }}>
              {idea.title}
            </h3>
          </div>
          <StatusBadge status={idea.status} />
        </div>

        {/* Description */}
        <p style={{
          margin: '0 0 16px 0',
          fontSize: '13px',
          color: '#6b6b7b',
          lineHeight: 1.7
        }}>
          {idea.description}
        </p>

        {/* Expanded details */}
        {isActive && (
          <div style={{
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            animation: 'fadeIn 0.3s ease'
          }}>
            <h4 style={{
              margin: '0 0 12px 0',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: domain.color,
              textTransform: 'uppercase'
            }}>
              Key Details
            </h4>
            <ul style={{
              margin: 0,
              padding: '0 0 0 16px',
              listStyle: 'none'
            }}>
              {idea.details.map((detail, i) => (
                <li key={i} style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '8px',
                  position: 'relative',
                  paddingLeft: '16px'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: domain.color
                  }}>→</span>
                  {detail}
                </li>
              ))}
            </ul>

            {/* Connected nodes */}
            {idea.connections && idea.connections.length > 0 && (
              <div style={{ marginTop: '16px' }}>
                <h4 style={{
                  margin: '0 0 8px 0',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase'
                }}>
                  Connected To
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {getConnectedIdeas(idea.id).map(conn => (
                    <span key={conn.id} style={{
                      padding: '4px 10px',
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: '4px',
                      fontSize: '11px',
                      color: domains[conn.domain]?.color || '#4ecdc4'
                    }}>
                      {conn.title}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Papers if available */}
            {idea.papers && (
              <div style={{ marginTop: '16px' }}>
                <h4 style={{
                  margin: '0 0 8px 0',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase'
                }}>
                  Artifacts
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {idea.papers.map((paper, i) => (
                    <span key={i} style={{
                      padding: '4px 10px',
                      background: 'rgba(78, 205, 196, 0.15)',
                      borderRadius: '4px',
                      fontSize: '11px',
                      color: '#4ecdc4',
                      fontFamily: 'monospace'
                    }}>
                      📄 {paper}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links if available */}
            {idea.links && (
              <div style={{ marginTop: '16px' }}>
                <h4 style={{
                  margin: '0 0 8px 0',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase'
                }}>
                  Links
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {idea.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                      padding: '6px 12px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px',
                      fontSize: '12px',
                      color: '#e8e6e3',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(78, 205, 196, 0.1)';
                      e.currentTarget.style.borderColor = '#4ecdc4';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                    >
                      ↗ {link.text}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Progress bar */}
        <ProgressBar progress={idea.progress} color={domain.color} />
        
        {/* Progress label */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '8px'
        }}>
          <span style={{
            fontSize: '10px',
            color: '#6b6b7b',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {domain.name}
          </span>
          <span style={{
            fontSize: '11px',
            color: domain.color,
            fontWeight: 600
          }}>
            {idea.progress}%
          </span>
        </div>
      </div>
    );
  };

  // Stats summary
  const stats = {
    total: ideas.length,
    domains: Object.keys(domains).length,
    complete: ideas.filter(i => i.status === 'complete' || i.progress === 100).length,
    platforms: ideas.filter(i => i.domain === 'platforms').length
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0f',
      color: '#e8e6e3',
      fontFamily: "'JetBrains Mono', monospace",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(78, 205, 196, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(78, 205, 196, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease'
      }} />

      {/* Gradient orbs */}
      <div style={{
        position: 'fixed',
        top: '20%',
        left: '20%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(155, 89, 182, 0.15) 0%, transparent 50%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'fixed',
        bottom: '20%',
        right: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(78, 205, 196, 0.1) 0%, transparent 50%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(212, 168, 83, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)'
      }} />

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #0a0a0f 0%, transparent 100%)'
      }}>
        <div>
          <h1 style={{
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            background: 'linear-gradient(135deg, #d4a853, #4ecdc4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: "'Playfair Display', serif"
          }}>
            ZANDBOX
          </h1>
          <p style={{
            margin: '0.2rem 0 0 0',
            fontSize: '0.65rem',
            fontWeight: 300,
            color: '#6b6b7b',
            letterSpacing: '0.3em',
            textTransform: 'uppercase'
          }}>
            Idea Constellation
          </p>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', gap: '2rem' }}>
          {['domains', 'ideas', 'methodology', 'timeline'].map(section => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => { e.preventDefault(); setActiveSection(section); }}
              style={{
                color: activeSection === section ? '#4ecdc4' : '#6b6b7b',
                textDecoration: 'none',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
                position: 'relative'
              }}
            >
              {section}
              <span style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: activeSection === section ? '100%' : '0',
                height: '1px',
                background: '#4ecdc4',
                transition: 'width 0.3s ease'
              }} />
            </a>
          ))}
        </nav>
      </header>

      <main style={{ position: 'relative', zIndex: 1, paddingTop: '120px' }}>
        {/* Hero section */}
        <section style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '4rem 2rem'
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            opacity: isLoaded ? 1 : 0,
            transform: `translateY(${isLoaded ? 0 : 30}px)`,
            transition: 'all 1s ease'
          }}>
            <span style={{ display: 'block' }}>Learn.</span>
            <span style={{ 
              display: 'block',
              background: 'linear-gradient(135deg, #d4a853 0%, #4ecdc4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Scale.</span>
            <span style={{ display: 'block' }}>Disrupt.</span>
          </h2>
          <p style={{
            fontSize: '0.9rem',
            color: '#6b6b7b',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            maxWidth: '600px',
            opacity: isLoaded ? 1 : 0,
            transform: `translateY(${isLoaded ? 0 : 30}px)`,
            transition: 'all 1s ease 0.3s'
          }}>
            A constellation of interconnected ideas spanning AGI research, 
            federal systems, and infrastructure modernization
          </p>
          
          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '4rem',
            marginTop: '4rem',
            opacity: isLoaded ? 1 : 0,
            transform: `translateY(${isLoaded ? 0 : 30}px)`,
            transition: 'all 1s ease 0.6s'
          }}>
            {[
              { number: stats.domains, label: 'Domains' },
              { number: stats.total, label: 'Core Ideas' },
              { number: stats.platforms, label: 'Platforms' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: '#d4a853'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  color: '#6b6b7b',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginTop: '0.5rem'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation and Search */}
        <nav style={{
          padding: '24px 3rem',
          position: 'sticky',
          top: 0,
          background: 'rgba(10,10,15,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          zIndex: 100
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
            gap: '32px',
            flexWrap: 'wrap'
          }}>
            {/* Domain filters */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => { setActiveDomain('all'); setActiveNode(null); }}
                style={{
                  padding: '10px 20px',
                  background: activeDomain === 'all' ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  color: '#e8e6e3',
                  fontSize: '12px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                All Domains
              </button>
              {Object.entries(domains).map(([key, domain]) => (
                <button
                  key={key}
                  onClick={() => { setActiveDomain(key); setActiveNode(null); }}
                  style={{
                    padding: '10px 16px',
                    background: activeDomain === key ? `${domain.color}20` : 'transparent',
                    border: `1px solid ${activeDomain === key ? domain.color : 'rgba(255,255,255,0.15)'}`,
                    borderRadius: '8px',
                    color: activeDomain === key ? domain.color : 'rgba(255,255,255,0.7)',
                    fontSize: '11px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  <span>{domain.icon}</span>
                  {domain.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="Search ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '280px',
                  padding: '12px 16px 12px 44px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#e8e6e3',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              />
              <span style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0.4
              }}>
                🔍
              </span>
            </div>
          </div>
        </nav>

        {/* Domains Section */}
        <section id="domains" style={{ padding: '6rem 3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              color: '#4ecdc4',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Knowledge Domains
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.5rem',
              fontWeight: 400,
              margin: 0
            }}>
              Core Research Areas
            </h2>
          </div>

          {/* Main content grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {filteredIdeas.map((idea, index) => (
              <IdeaCard key={idea.id} idea={idea} index={index} />
            ))}
          </div>

          {filteredIdeas.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '80px 40px',
              color: '#6b6b7b'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
              <p style={{ fontSize: '16px' }}>No ideas match your search criteria</p>
            </div>
          )}
        </section>

        {/* Methodology Section */}
        <section id="methodology" style={{ padding: '6rem 3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              color: '#4ecdc4',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Core Framework
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.5rem',
              fontWeight: 400,
              margin: 0
            }}>
              First-Principles Methodology
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'rgba(255,255,255,0.05)'
          }}>
            {methodology.map((method, i) => (
              <div key={i} style={{
                background: '#0a0a0f',
                padding: '3rem 2rem',
                textAlign: 'center',
                transition: 'background 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#12121a'}
              onMouseOut={(e) => e.currentTarget.style.background = '#0a0a0f'}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '3rem',
                  color: '#d4a853',
                  opacity: 0.5,
                  marginBottom: '1rem'
                }}>
                  {method.number}
                </div>
                <h4 style={{
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                  marginBottom: '1rem',
                  margin: '0 0 1rem 0'
                }}>
                  {method.title}
                </h4>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#6b6b7b',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {method.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" style={{ padding: '6rem 3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.7rem',
              color: '#4ecdc4',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Evolution
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '2.5rem',
              fontWeight: 400,
              margin: 0
            }}>
              Research Timeline
            </h2>
          </div>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative'
          }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, #4ecdc4, transparent)'
            }} />

            {timeline.map((item, i) => (
              <div key={i} style={{
                paddingLeft: '3rem',
                paddingBottom: '3rem',
                position: 'relative'
              }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: '-4px',
                  top: '8px',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: '#4ecdc4',
                  boxShadow: '0 0 20px #4ecdc4'
                }} />
                
                <div style={{
                  fontSize: '0.7rem',
                  color: '#d4a853',
                  letterSpacing: '0.2em',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase'
                }}>
                  {item.date}
                </div>
                <h4 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  marginBottom: '0.5rem',
                  margin: '0 0 0.5rem 0'
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#6b6b7b',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        padding: '4rem 3rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <p style={{
          fontSize: '0.75rem',
          color: '#6b6b7b',
          letterSpacing: '0.1em'
        }}>
          Zuup Innovation Lab × Visionblox LLC
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1.5rem'
        }}>
          <a href="https://github.com/khaaliswooden-max/zandbox" target="_blank" rel="noopener noreferrer" style={{
            color: '#6b6b7b',
            textDecoration: 'none',
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            transition: 'color 0.3s ease'
          }}>
            GitHub
          </a>
          <a href="mailto:khaalis.wooden@visionblox.com" style={{
            color: '#6b6b7b',
            textDecoration: 'none',
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            transition: 'color 0.3s ease'
          }}>
            Contact
          </a>
        </div>
      </footer>

      {/* Global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&family=Playfair+Display:wght@400;700&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
        }
        
        ::selection {
          background: rgba(78, 205, 196, 0.3);
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        button:hover {
          transform: translateY(-1px);
        }
        
        input:focus {
          border-color: rgba(78, 205, 196, 0.5) !important;
          background: rgba(255,255,255,0.08) !important;
        }
        
        @media (max-width: 768px) {
          .method-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ZandboxIdeasHome;
