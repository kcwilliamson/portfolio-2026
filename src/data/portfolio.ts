/**
 * ============================================================================
 * PORTFOLIO CONTENT MANAGEMENT
 * ============================================================================
 * 
 * This file contains ALL portfolio content. Update this file to change:
 * - Work history timeline
 * - Project case studies
 * - Contact information
 * - Project descriptions and metrics
 * 
 * ============================================================================
 * HOW TO UPDATE CONTENT
 * ============================================================================
 * 
 * 1. WORK HISTORY (Timeline on About page)
 *    - Add/edit entries in the `workHistory` array below
 *    - Fields: title, company, period, description, skills
 *    - Order: Most recent job FIRST (reverse chronological)
 * 
 * 2. PORTFOLIO PROJECTS (Homepage navigation cards + project pages)
 *    - Add/edit entries in the `portfolioPieces` array below
 *    - Each project needs:
 *      • slug: URL path (e.g., "cloudspeaker" = /cloudspeaker)
 *      • title: Display name on homepage
 *      • subtitle: Short description (shown on homepage card)
 *      • color: Hex code for hover color on homepage
 *      • sections: Array of content sections for the project page
 * 
 * 3. PROJECT SECTIONS (Content on individual project pages)
 *    - Each section has: heading, content, examples
 *    - Use \n\n to separate paragraphs within content
 *    - Examples are image placeholders with captions
 * 
 * 4. CONTACT INFO
 *    - Email: Update in src/pages/index.astro and src/pages/about.astro
 *    - LinkedIn: Update in src/pages/index.astro and src/pages/about.astro
 *    - Social links: Update in both files
 * 
 * ============================================================================
 * ADDING A NEW PROJECT
 * ============================================================================
 * 
 * Step 1: Add entry to `portfolioPieces` array below:
 * 
 *   {
 *     slug: "my-new-project",           // Creates /my-new-project URL
 *     title: "My New Project",          // Homepage card title
 *     subtitle: "Brief description",    // Homepage card subtitle
 *     color: "#FF6B35",                 // Hover color (hex code)
 *     sections: [
 *       {
 *         heading: "The Challenge",
 *         content: "Describe the problem...\n\nMultiple paragraphs separated by \\n\\n",
 *         examples: [
 *           { type: "image", caption: "Image description here" }
 *         ]
 *       },
 *       {
 *         heading: "The Solution",
 *         content: "How you solved it...",
 *         examples: []
 *       },
 *       {
 *         heading: "The Impact",
 *         content: "Business results and metrics...",
 *         examples: []
 *       }
 *     ]
 *   }
 * 
 * Step 2: Create project page file at src/pages/[slug].astro
 *         (Copy one of the existing project files as a template)
 * 
 * Step 3: Save changes and the project will appear automatically!
 * 
 * ============================================================================
 */

export const workHistory = [
  {
    title: "Director of Content Strategy",
    company: "Cloudflare",
    companyUrl: "https://www.cloudflare.com/",
    period: "April 2025 - Present",
    description: "Lead PCX team building UX Intelligence systems. Pioneered CloudSpeaker (AI customer feedback platform), CLUE Index (ML-powered content scoring), and Voice of User framework.",
    skills: ["AI/LLM Implementation", "Executive Leadership", "Strategic Planning"]
  },
  {
    title: "Senior UX Content Design Manager",
    company: "Cloudflare",
    companyUrl: "https://www.cloudflare.com/",
    period: "February 2022 - April 2025",
    description: "Built UX Content Strategy function from scratch. Grew team from 0 to 10+ members. Established Conversation Architecture framework.",
    skills: ["Team Building", "Process Design", "Content Governance"]
  },
  {
    title: "UX Manager of Product Content",
    company: "Calendly",
    companyUrl: "https://calendly.com/",
    period: "March 2021 - February 2022",
    description: "Led product content strategists, establishing content practices across 15 squad teams.",
    skills: ["Content Strategy", "Team Management", "Product Development"]
  },
  {
    title: "UX Lead Product Content Strategist",
    company: "Calendly",
    companyUrl: "https://calendly.com/",
    period: "January 2020 - March 2021",
    description: "Implemented techniques to align customer needs with business needs. Integrated content design into product delivery lifecycle, making it a permanent requirement in Calendly product design.",
    skills: ["UX Writing", "Content Design", "User Research"]
  },
  {
    title: "UX Team Lead",
    company: "ADP",
    companyUrl: "https://www.adp.com/",
    period: "May 2019 - December 2019",
    description: "Led UX efforts for next-generation payroll technology. Created demos, marketing material, and presentations to convey user and business value.",
    skills: ["Team Leadership", "Enterprise UX", "Next-Gen Payroll"]
  },
  {
    title: "Sr. UX Designer / Content Strategist",
    company: "ADP",
    companyUrl: "https://www.adp.com/",
    period: "January 2018 - May 2019",
    description: "Content strategy and UX design for payroll products. Aligned business goals with user experience through strategic content planning.",
    skills: ["UX Design", "Content Strategy", "Product Strategy"]
  },
  {
    title: "Copywriter",
    company: "Georgia-Pacific LLC",
    companyUrl: "https://www.gp.com/",
    period: "July 2017 - December 2017",
    description: "Digital and social media content for household paper product brands. Established voice for Copper & Crane brand innovation.",
    skills: ["Copywriting", "Brand Voice", "Digital Content"]
  },
  {
    title: "Marketing Communications Specialist",
    company: "University of Mississippi Graduate School",
    companyUrl: "https://gradschool.olemiss.edu/",
    period: "June 2015 - October 2015",
    description: "Authored, photographed, designed promotional material. Established bi-monthly newsletter, increased social media presence, redesigned recruitment materials.",
    skills: ["Marketing Communications", "Design", "Photography"]
  },
  {
    title: "Reporter",
    company: "The Daily Leader",
    companyUrl: "https://dailyleader.com/",
    period: "April 2014 - December 2014",
    description: "Journalism and reporting for daily newspaper serving four counties. Awarded Robert F Kennedy Award for Humanitarian Journalism.",
    skills: ["Journalism", "Storytelling", "Photography", "Design"]
  }
];

export const portfolioPieces = [
  {
    slug: "cloudspeaker",
    title: "CloudSpeaker",
    subtitle: "AI-powered customer intelligence platform analyzing 10K+ daily interactions",
    color: "#FF1493",
    sections: [
      {
        heading: "The Challenge",
        content: "10,000+ customer interactions daily. Discord, Twitter, GitHub, support tickets, community forums. Zero systematic way to find patterns, prioritize needs, or surface insights.\n\nPMs spent 3 weeks manually analyzing feedback per quarter. By the time they finished, the data was stale and products had already shipped.\n\nCost to business: Missed critical signals, products shipped without validation, reactive firefighting instead of proactive strategy.",
        examples: [
          { type: "image", caption: "CloudSpeaker dashboard showing AI-classified sentiment across channels" },
          { type: "image", caption: "Real-time product mention detection using LLM classification" },
          { type: "image", caption: "Automated sentiment analysis aggregating 10K+ daily interactions" }
        ]
      },
      {
        heading: "The Solution",
        content: "I spearheaded CloudSpeaker, an AI-powered intelligence platform using Workers AI and Llama 3 models to automatically ingest, classify, and summarize customer feedback at scale.\n\nHow It Works:\n1. Ingest: Automated pipeline pulls from 10+ sources (Discord, Twitter, GitHub, support tickets, Discourse, Reddit, Hacker News)\n2. Classify: LLM automatically tags product mentioned, sentiment, post type, and priority level\n3. Analyze: Natural language queries let PMs ask 'What are users saying about Workers?' or 'Show me negative sentiment trends for Zero Trust'\n4. Action: Insights feed directly into quarterly planning, OKRs, and roadmap decisions\n\nBuilt 'Content Warehouse' knowledge graph linking products to user sentiment. Collaborated with BI and Engineering teams to create self-service analytics platform.",
        examples: [
          { type: "image", caption: "Content warehouse architecture: LLM pipeline design" },
          { type: "image", caption: "Product relationship mapping and taxonomy system" },
          { type: "image", caption: "Natural language query interface for PM self-service" }
        ]
      },
      {
        heading: "The Impact",
        content: "Reduced feedback analysis time from 3 weeks to 5 minutes—a 99% efficiency gain.\n\nEnabled data-driven product decisions backed by quantified user sentiment. Presented at company-wide BEER meeting to 500+ employees. Now used by 50+ product managers for quarterly planning and roadmap prioritization.\n\nIdentified 3 critical product gaps that became Q1 priorities, directly influencing $2M+ in engineering investment.\n\nCloudSpeaker is now available as an MCP server to all developers at Cloudflare, showcasing integration with LangGraph—one of the most popular LLM agent frameworks.",
        examples: [
          { type: "image", caption: "BEER presentation deck: AI for Product Intelligence" },
          { type: "image", caption: "PM adoption metrics: 50+ active users, 200+ queries/week" },
          { type: "image", caption: "Business impact: Product decisions influenced by CloudSpeaker insights" }
        ]
      }
    ]
  },
  {
    slug: "conversation-architecture",
    title: "Conversation Architecture",
    subtitle: "Scaling 10-person team to support 50+ products through systematic frameworks",
    color: "#00FF00",
    sections: [
      {
        heading: "The Challenge",
        content: "A 10-person UX Content team supporting 50+ products across Cloudflare's global platform—from Zero Trust security to Workers edge computing.\n\nTraditional content operations couldn't scale: reactive 'microcopy' requests, inconsistent terminology across products, no systematic approach to governance. The team was drowning in tactical work with no bandwidth for strategic initiatives.\n\nWithout intervention, we'd need 50+ headcount to match product growth.",
        examples: [
          { type: "image", caption: "Product portfolio mapping: 50+ products, 10 content strategists" },
          { type: "image", caption: "Content request volume: 200+ tickets/month, 3-week average turnaround" },
          { type: "image", caption: "Inconsistency audit: 47 different terms for same concepts across products" }
        ]
      },
      {
        heading: "The Solution",
        content: "I established the 'Conversation Architecture' framework, positioning content strategy as an upstream architectural decision—not a downstream deliverable.\n\nThe Listen-Respond-Measure Methodology:\n• Listen: Customer calls, CloudSpeaker insights, user research, support ticket analysis\n• Respond: In-product content iterations, proactive content architecture\n• Measure: Task completion rates, support ticket reduction, user satisfaction (SUS surveys)\n\nBuilt comprehensive governance systems for voice, tone, and terminology that enable autonomous decision-making. Developed product ownership model mapping strategists to business domains, not individual features.\n\nCreated centralized content models, established review processes, and built the infrastructure for content to scale without proportional headcount growth.",
        examples: [
          { type: "image", caption: "Conversation Architecture framework: Content as infrastructure" },
          { type: "image", caption: "Listen-Respond-Measure methodology diagram" },
          { type: "image", caption: "Product ownership model: Domain-based team structure" },
          { type: "image", caption: "Governance toolkit: Voice/tone guidelines, terminology standards" }
        ]
      },
      {
        heading: "The Impact",
        content: "Team scaled from 5 to 10 members while product coverage increased 3x—achieving 300% efficiency gain.\n\nEstablished content as architectural decision-maker embedded in product planning, not afterthought. Content strategists now participate in PRD reviews and architecture discussions, not just design handoffs.\n\nReduced content-related support tickets by 60% through systematic governance. Decreased average content turnaround from 3 weeks to 3 days.\n\nEnabled team to shift 70% of time from reactive execution to strategic initiatives. Framework adopted as company-wide standard, influencing how 500+ employees approach product content.",
        examples: [
          { type: "image", caption: "Efficiency metrics: 3x product coverage with 2x team growth" },
          { type: "image", caption: "Support ticket reduction: 60% decrease in content-related issues" },
          { type: "image", caption: "Strategic time allocation: 70% proactive vs 30% reactive" }
        ]
      }
    ]
  },
  {
    slug: "team-leadership",
    title: "Building UX Intelligence Teams",
    subtitle: "Hired and developed 10+ strategists with 95% retention and 100% promotion rate",
    color: "#00FFFF",
    sections: [
      {
        heading: "The Challenge",
        content: "Cloudflare's hypergrowth demanded building a world-class UX Content organization from ground zero. No established discipline, no defined roles, no proven processes.\n\nNeeded to hire, onboard, and scale a distributed team across multiple time zones while simultaneously delivering immediate business value.\n\nThe challenge: establish UX Content Strategy as a recognized discipline while proving ROI from day one—all during a period of rapid product expansion and organizational change.",
        examples: [
          { type: "image", caption: "Starting point: Zero dedicated content strategists, ad-hoc processes" },
          { type: "image", caption: "Role definition framework: Strategy vs Design vs Technical Writing" },
          { type: "image", caption: "Hiring roadmap: 10+ positions across 18 months" }
        ]
      },
      {
        heading: "The Solution",
        content: "I built the UX Content Strategy function from scratch, hiring and developing 10+ team members across UX Content Strategy, Technical Writing, and Video Production.\n\nEstablished clear role definitions:\n• Strategy: Upstream architecture, user research, framework development\n• Design: In-product execution, microcopy, UI content\n• Technical Writing: Developer documentation, API guides, integration tutorials\n\nCreated comprehensive onboarding program with 30-60-90 day milestones. Developed product ownership model aligning team members to business domains (Zero Trust, Workers, Application Services, Developer Platform).\n\nEvangelized the discipline through company-wide BEER presentations, comprehensive Wiki documentation, and executive stakeholder management.\n\nProven track record: consistently leveled up every direct report who's been on my team for at least a year (Abby, Alexa, Daniel, Denise, Jess, Emanuel).",
        examples: [
          { type: "image", caption: "Team org chart evolution: 0 to 10+ members in 18 months" },
          { type: "image", caption: "Onboarding program: 30-60-90 day framework with success metrics" },
          { type: "image", caption: "BEER presentation: Introducing UX Content Strategy to 500+ employees" },
          { type: "image", caption: "Stakeholder engagement: Executive alignment and advocacy" }
        ]
      },
      {
        heading: "The Impact",
        content: "Built distributed team across 3 time zones (EST, GMT, CST) with 95% retention rate. Established UX Content Strategy as recognized discipline at Cloudflare, embedded in product planning cycles.\n\nTeam members promoted to senior and leadership roles—3 IC promotions, 2 management track progressions. Created talent pipeline: 4 team members recruited by other companies for leadership positions, validating team development approach.\n\nDelivered $5M+ in measurable business impact through improved user engagement, reduced support costs, and accelerated product adoption.\n\nTeam recognized as Cloudflare Top Performer 2020 & 2021. Established culture of psychological safety, growth, and 'positive vibes' that generates innovative ideas and high-quality output.",
        examples: [
          { type: "image", caption: "Team retention and growth: 95% retention, 100% promotion-eligible" },
          { type: "image", caption: "Career progression: IC and management track advancement" },
          { type: "image", caption: "Business impact: $5M+ value delivered through team initiatives" }
        ]
      }
    ]
  },
  {
    slug: "content-roi",
    title: "Content That Drives Business",
    subtitle: "45% engagement increase, 60% support reduction, 28% conversion improvement",
    color: "#9D00FF",
    sections: [
      {
        heading: "The Challenge",
        content: "Cloudflare's technical products—from Workers edge computing to Zero Trust security—needed to serve radically different audiences: developers seeking API documentation, IT admins evaluating enterprise solutions, and C-suite executives making million-dollar decisions.\n\nContent was fragmented across 50+ products with inconsistent voice, conflicting terminology, and no systematic approach to audience segmentation.\n\nUser research showed 40% comprehension failure rate on critical onboarding flows. The business cost: high support volume, slow product adoption, and lost enterprise deals.",
        examples: [
          { type: "image", caption: "Content audit: 50+ products, 12 different voice/tone approaches" },
          { type: "image", caption: "User research: 40% comprehension failure on key flows" },
          { type: "image", caption: "Business impact: Support costs and lost revenue from poor content" }
        ]
      },
      {
        heading: "The Solution",
        content: "I established comprehensive voice and tone guidelines tailored to Cloudflare's technical-yet-accessible brand. Created content models for different user journeys—developer docs, admin guides, executive briefings—each optimized for audience needs and business goals.\n\nPartnered with Video Production team to develop multimedia storytelling:\n• Written content: In-product guidance, error messages, onboarding flows\n• Video tutorials: Complex setup processes, troubleshooting guides\n• Interactive demos: Product exploration, feature discovery\n\nBuilt measurement framework using Amplitude to track content effectiveness: task completion rates, time-on-page, support ticket deflection, and conversion metrics.\n\nEstablished content-first design process where content drives UX decisions, not vice versa. Content strategists now participate in PRD reviews and architecture discussions, ensuring user communication is considered from the start.",
        examples: [
          { type: "image", caption: "Voice and tone guidelines: Technical depth meets human accessibility" },
          { type: "image", caption: "Content model library: Templates for 8 user journey types" },
          { type: "image", caption: "Multimedia strategy: Video, interactive demos, written guides" },
          { type: "image", caption: "Analytics framework: Content effectiveness dashboard in Amplitude" }
        ]
      },
      {
        heading: "The Impact",
        content: "Increased user engagement by 45% across key product flows. Reduced time-to-comprehension in user testing from 8 minutes to 3 minutes—a 62% improvement.\n\nDecreased support ticket volume by 35% through clearer in-product guidance. Improved enterprise trial-to-paid conversion by 28% through targeted executive content.\n\nEstablished docs-in-dashboard experience: embedded developer documentation directly into product UI, improving task completion rates across every product area.\n\nAdded video component to dashboard, increasing visibility of video content and delivering measurable impact on product adoption and task completion.\n\nFramework adopted across organization, influencing how 500+ employees approach product communication. Content-first approach now standard practice in product development.",
        examples: [
          { type: "image", caption: "Engagement lift: 45% increase in task completion rates" },
          { type: "image", caption: "Comprehension improvement: 62% reduction in time-to-understanding" },
          { type: "image", caption: "Business metrics: 35% support reduction, 28% conversion improvement" }
        ]
      }
    ]
  }
];
