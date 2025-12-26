import React, { useState, useEffect, useRef } from 'react';

// ZUUP IDEAS HOME - Interactive Knowledge Repository
// An immersive exploration interface for Visionblox LLC / Zuup Innovation Lab

const ZuupIdeasHome = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [activeDomain, setActiveDomain] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  // Knowledge Domains
  const domains = {
    agi: { 
      name: 'AGI/ASI Research', 
      color: '#00f5d4', 
      gradient: 'linear-gradient(135deg, #00f5d4 0%, #00bbf9 100%)',
      icon: '🧠'
    },
    federal: { 
      name: 'Federal Capture', 
      color: '#fee440', 
      gradient: 'linear-gradient(135deg, #fee440 0%, #f15bb5 100%)',
      icon: '🏛️'
    },
    rural: { 
      name: 'Rural Infrastructure', 
      color: '#9b5de5', 
      gradient: 'linear-gradient(135deg, #9b5de5 0%, #f15bb5 100%)',
      icon: '🏥'
    },
    research: { 
      name: 'Research Papers', 
      color: '#f15bb5', 
      gradient: 'linear-gradient(135deg, #f15bb5 0%, #00bbf9 100%)',
      icon: '📄'
    },
    frameworks: { 
      name: 'Methodologies', 
      color: '#00bbf9', 
      gradient: 'linear-gradient(135deg, #00bbf9 0%, #00f5d4 100%)',
      icon: '⚙️'
    }
  };

  // Complete Ideas Database from Chat History
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
        'CHC Integration - Academic grounding in verified cognitive science',
        'Gap Analysis Protocol - Honest self-assessment before proceeding'
      ],
      connections: ['chc', 'epistemic', 'gap-analysis'],
      progress: 35,
      papers: ['RCA_Layer_Specification.md']
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
      papers: ['agidefinitional.pdf']
    },
    {
      id: 'instrumental',
      title: 'Instrumental Convergence Analysis',
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
      progress: 50
    },
    {
      id: 'crypto-agents',
      title: 'Autonomous Crypto-Economic Agents',
      domain: 'agi',
      status: 'speculative',
      description: 'Research framework for AI agents with crypto wallets capable of wealth generation, recruitment, and market disruption.',
      details: [
        'Wallet architecture for autonomous agents',
        'Token economics and revenue generation models',
        'Multi-stage agent recruitment workflows',
        'Swarm coordination mechanisms'
      ],
      connections: ['instrumental'],
      progress: 20
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
      progress: 15
    },

    // Federal Capture Domain
    {
      id: 'mvci',
      title: 'MVCI Agent System',
      domain: 'federal',
      status: 'active',
      description: '12-agent Minimum Viable Capture Infrastructure for federal contracting operations with zero-budget constraints.',
      details: [
        'Chief of Staff Agent - Executive coordination',
        'Decision Log Agent - Institutional memory',
        'Contract Intake & Triage Agent - Legal processing',
        'Vendor Due Diligence Agent - Supplier verification',
        'Spend Control Agent - Expense monitoring'
      ],
      connections: ['zero-budget', 'ota', 'compliance'],
      progress: 45,
      technical: {
        stack: ['n8n', 'Ollama/Mistral-7B', 'SQLite', 'GitHub'],
        dataClassification: ['PUBLIC', 'INTERNAL', 'CONFIDENTIAL', 'REGULATED']
      }
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
        '65 performance benchmarks across 3 tiers'
      ],
      connections: ['aris', 'rural-water', 'compliance'],
      progress: 75,
      papers: ['CAH_Digital_Infrastructure_Framework.tex']
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
      papers: ['Rural_Water_MVP_Framework.tex']
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
        'Seven infrastructure domains mapped'
      ],
      connections: ['cah', 'rural-water'],
      progress: 40,
      papers: ['ARIS_2025_Specification.tex']
    },

    // Research Papers Domain
    {
      id: 'mvci-paper',
      title: 'MVCI vs TCI Whitepaper',
      domain: 'research',
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
      papers: ['MVCI_vs_TCI_IEEE_Paper.tex', 'references.bib']
    },
    {
      id: 'auto-supply',
      title: 'Automotive Supply Chain Transformation',
      domain: 'research',
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
      papers: ['Automotive_DT_IEEE_Paper.tex']
    },
    {
      id: 'aviation-supply',
      title: 'Aviation Supply Chain Transformation',
      domain: 'research',
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
      papers: ['Aviation_DT_IEEE_Paper.tex']
    },
    {
      id: 'energy-supply',
      title: 'Energy Supply Chain Transformation',
      domain: 'research',
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
      papers: ['Energy_DT_IEEE_Paper.tex']
    },
    {
      id: 'mfg-supply',
      title: 'Manufacturing Digital Transformation',
      domain: 'research',
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
    {
      id: 'hallucination-study',
      title: 'LLM Hallucination Analysis',
      domain: 'research',
      status: 'complete',
      description: 'Self-analysis of Claude fabrication rates in conversation history with epistemic honesty.',
      details: [
        '~5% detected fabrication rate (floor not ceiling)',
        'Visualization requests = highest risk',
        'Taxonomy: explicit fabrication, confident confabulation, statistical artifacts',
        'Interactive 3D companion with Three.js'
      ],
      connections: ['epistemic'],
      progress: 100,
      papers: ['LLM_Hallucination_IEEE_Paper.tex']
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
      connections: ['mvci', 'cah', 'rural-water'],
      progress: 75
    }
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
      active: { bg: '#00f5d4', text: '#0a0a0a', label: 'ACTIVE' },
      research: { bg: '#fee440', text: '#0a0a0a', label: 'RESEARCH' },
      complete: { bg: '#00bbf9', text: '#0a0a0a', label: 'COMPLETE' },
      framework: { bg: '#9b5de5', text: '#ffffff', label: 'FRAMEWORK' },
      reference: { bg: '#f15bb5', text: '#ffffff', label: 'REFERENCE' },
      playbook: { bg: '#fee440', text: '#0a0a0a', label: 'PLAYBOOK' },
      strategy: { bg: '#00f5d4', text: '#0a0a0a', label: 'STRATEGY' },
      specification: { bg: '#00bbf9', text: '#0a0a0a', label: 'SPEC' },
      speculative: { bg: '#333', text: '#888', label: 'SPECULATIVE' }
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
          background: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${isActive ? domain.color : isConnected ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
          borderRadius: '16px',
          padding: '24px',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: `translateY(${isLoaded ? 0 : 40}px)`,
          opacity: isLoaded ? (activeNode && !isActive && !isConnected ? 0.4 : 1) : 0,
          transitionDelay: `${index * 50}ms`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Glow effect on hover */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: hoveredNode === idea.id ? domain.gradient : 'transparent',
          opacity: hoveredNode === idea.id ? 0.05 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none'
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
            <span style={{ fontSize: '24px' }}>{domain.icon}</span>
            <h3 style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.3
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
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.6
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
                      color: domains[conn.domain].color
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
                      background: 'rgba(0,245,212,0.15)',
                      borderRadius: '4px',
                      fontSize: '11px',
                      color: '#00f5d4',
                      fontFamily: 'monospace'
                    }}>
                      📄 {paper}
                    </span>
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
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {domains[idea.domain].name}
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
    active: ideas.filter(i => i.status === 'active').length,
    complete: ideas.filter(i => i.status === 'complete' || i.progress === 100).length,
    avgProgress: Math.round(ideas.reduce((acc, i) => acc + i.progress, 0) / ideas.length)
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: '#fff',
      fontFamily: "'IBM Plex Sans', -apple-system, sans-serif",
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
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease'
      }} />

      {/* Gradient orbs */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0,245,212,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'float 20s ease-in-out infinite'
      }} />
      <div style={{
        position: 'fixed',
        bottom: '10%',
        left: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(241,91,181,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'float 25s ease-in-out infinite reverse'
      }} />

      {/* Header */}
      <header style={{
        padding: '40px 60px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '8px'
            }}>
              <h1 style={{
                margin: 0,
                fontSize: '32px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #00f5d4 0%, #00bbf9 50%, #f15bb5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em'
              }}>
                ZUUP IDEAS HOME
              </h1>
              <span style={{
                padding: '4px 12px',
                background: 'rgba(0,245,212,0.15)',
                borderRadius: '4px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#00f5d4'
              }}>
                SANDBOX
              </span>
            </div>
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '500px'
            }}>
              Interactive knowledge repository for Visionblox LLC / Zuup Innovation Lab
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '32px',
            transform: `translateY(${isLoaded ? 0 : -20}px)`,
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.6s ease 0.3s'
          }}>
            {[
              { label: 'Ideas', value: stats.total, color: '#00f5d4' },
              { label: 'Active', value: stats.active, color: '#fee440' },
              { label: 'Complete', value: stats.complete, color: '#00bbf9' },
              { label: 'Avg Progress', value: `${stats.avgProgress}%`, color: '#f15bb5' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: stat.color,
                  lineHeight: 1
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '4px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Navigation and Search */}
      <nav style={{
        padding: '24px 60px',
        position: 'sticky',
        top: 0,
        background: 'rgba(10,10,10,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        zIndex: 100
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1600px',
          margin: '0 auto',
          gap: '32px'
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
                color: '#fff',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              All Domains
            </button>
            {Object.entries(domains).map(([key, domain]) => (
              <button
                key={key}
                onClick={() => { setActiveDomain(key); setActiveNode(null); }}
                style={{
                  padding: '10px 20px',
                  background: activeDomain === key ? `${domain.color}20` : 'transparent',
                  border: `1px solid ${activeDomain === key ? domain.color : 'rgba(255,255,255,0.15)'}`,
                  borderRadius: '8px',
                  color: activeDomain === key ? domain.color : 'rgba(255,255,255,0.7)',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
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
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.2s ease'
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

      {/* Main content grid */}
      <main style={{
        padding: '40px 60px',
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '24px'
        }}>
          {filteredIdeas.map((idea, index) => (
            <IdeaCard key={idea.id} idea={idea} index={index} />
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 40px',
            color: 'rgba(255,255,255,0.4)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <p style={{ fontSize: '16px' }}>No ideas match your search criteria</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        padding: '40px 60px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        marginTop: '60px'
      }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
            <strong style={{ color: '#00f5d4' }}>Visionblox LLC</strong> / Zuup Innovation Lab
            <br />
            <span style={{ fontSize: '11px' }}>Director of Enterprise Capture & Compliance</span>
          </div>
          <div style={{
            display: 'flex',
            gap: '24px',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.3)'
          }}>
            <span>Learn</span>
            <span>•</span>
            <span>Scale</span>
            <span>•</span>
            <span>Disrupt</span>
          </div>
        </div>
      </footer>

      {/* Global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 0;
        }
        
        ::selection {
          background: rgba(0,245,212,0.3);
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
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        
        button:hover {
          transform: translateY(-1px);
        }
        
        input:focus {
          border-color: rgba(0,245,212,0.5) !important;
          background: rgba(255,255,255,0.08) !important;
        }
      `}</style>
    </div>
  );
};

export default ZuupIdeasHome;
