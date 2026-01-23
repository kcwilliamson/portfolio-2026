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
    description: "Pioneer of UX Intelligence—new discipline combining product strategy, UX research, AI/ML, and systematic problem-solving to understand users at enterprise scale. Led CloudSpeaker as hybrid product/UX leader. Enabled team to build CLUE Index and Frameflow. Hybrid innovator who moves fluidly between strategy, research, technical architecture, and team leadership.",
    skills: ["UX Intelligence", "Hybrid Product/UX Strategy", "Discipline Creation", "Team Scaling"]
  },
  {
    title: "Senior UX Content Design Manager",
    company: "Cloudflare",
    companyUrl: "https://www.cloudflare.com/",
    period: "February 2022 - April 2025",
    description: "Built UX Content Strategy function from scratch. Ran specialized team of 9 experts (3 UX Content Strategists, 3 Technical Content Strategists, 1 Information Architect, 2 Video Producers) to support 100+ product spaces. Established Conversation Architecture framework achieving exceptional efficiency at scale.",
    skills: ["Team Building", "Operational Scaling", "Framework Development"]
  },
  {
    title: "UX Manager of Product Content",
    company: "Calendly",
    companyUrl: "https://calendly.com/",
    period: "March 2021 - February 2022",
    description: "Led product content strategists, establishing content practices across 15 squad teams. Team recognized as Top Performer 2020 & 2021.",
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
    subtitle: "UX Intelligence in action—built AI platform as hybrid product/UX leader",
    color: "#FF1493",
    sections: [
      {
        heading: "The Challenge",
        content: "Product managers wanted deeper customer insights but didn't have time to sift through data. Their calendars were packed with roadmap planning, stakeholder meetings, and cross-functional coordination—they worked incredibly hard on critical aspects of their roles. They relied primarily on single customer calls or individual tweets to drive product decisions, leaving all the voices across the internet unheard—10,000+ daily interactions across Discord, Twitter, GitHub, support tickets, forums, Reddit, and Hacker News.\n\nOther customer-facing teams were sifting through single data sources to make recommendations, but there was no single source of truth for all user feedback. Sentiment was lost. While we tracked behavior in dashboards and docs, we had very little insight into actual customer experiences.\n\nThe core problem: PMs simply didn't have enough time in the day to dig into insights, with the exception of content, design, and a few customer-facing teams whose roles allowed for this discovery work. Decisions got made based on one call or one tweet—not because of carelessness, but because of time constraints.\n\nI spent an entire quarter manually collecting all internal data sources, call notes, and feedback reports. Generated numerous walkthroughs and guides for how people at Cloudflare could take advantage of existing resources to get a better picture. But without a systematic solution that fit into their workflow, nothing changed.\n\nThis was a core part of the UX Intelligence strategy—to understand users systematically at enterprise scale, without requiring PMs to become researchers.",
        examples: [
          { type: "image", caption: "CloudSpeaker dashboard showing AI-classified sentiment across channels" },
          { type: "image", caption: "Real-time product mention detection using LLM classification" },
          { type: "image", caption: "Automated sentiment analysis aggregating 10K+ daily interactions" }
        ]
      },
      {
        heading: "The Solution",
        content: "I'm a hybrid innovator—I move fluidly between product strategy, UX research, technical architecture, and team leadership. Whatever solves the problem. For CloudSpeaker, I needed to be a Product Manager.\n\nTook initiative outside my role scope to lead cross-functional team of ML Engineers, UX Researchers, Content Experts, Designers, Information Architects, and Project Managers. Drove vision, roadmap, user research, and requirements.\n\nBuilt AI-powered UX Intelligence platform using Workers AI and Llama 3 that automatically surfaces user pain points, sentiment, and needs at scale.\n\nHow It Works:\n\n• Ingest: Automated pipeline pulls from 10+ sources (Discord, Twitter, GitHub, support tickets, Discourse, Reddit, Hacker News)\n\n• Classify: LLM automatically tags product mentioned, sentiment, post type, and priority level\n\n• Analyze: Natural language queries surface insights—'What are users saying about Workers?' or 'Show me negative sentiment trends'\n\n• Action: User insights feed directly into quarterly planning, OKRs, and roadmap decisions\n\nBuilt 'Content Warehouse' knowledge graph linking products to user sentiment. This is UX Intelligence—continuous, automated understanding of user needs at enterprise scale.",
        examples: [
          { type: "image", caption: "Cross-functional team: ML Engineers, Content Experts, Designers, Architects" },
          { type: "image", caption: "Product roadmap and vision leadership outside role scope" },
          { type: "image", caption: "Natural language query interface for PM self-service" }
        ]
      },
      {
        heading: "The Impact",
        content: "Transformed how Cloudflare understands users: 99% efficiency gain (3 weeks → 5 minutes). This is what UX Intelligence enables—continuous user understanding, not periodic research studies.\n\nEnabled product decisions backed by quantified user insights. Identified 3 critical product gaps that became Q1 priorities, directly influencing $2M+ in engineering investment.\n\n50+ product managers adopted CloudSpeaker for continuous user intelligence. Presented 'The Future of User Understanding' at company-wide BEER meeting to 500+ employees.\n\nCloudSpeaker is now available as a full-fledged product experience and as an MCP server for developers at Cloudflare, showcasing integration with LangGraph—one of the most popular LLM agent frameworks.\n\nThis project demonstrates UX Intelligence in practice: combining product leadership, UX research, AI/ML systems, and cross-functional collaboration to solve user understanding at scale.",
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
    subtitle: "Foundation of UX Intelligence—systematic frameworks enabling scale",
    color: "#00FF00",
    sections: [
      {
        heading: "The Challenge",
        content: "How do you scale user understanding across 100+ product spaces? Traditional UX operations couldn't: reactive 'microcopy' requests, inconsistent terminology, no systematic approach to governance.\n\nOur team of 9 specialists—3 UX Content Strategists, 3 Technical Content Strategists, 1 Information Architect, and 2 Video Producers—was drowning in tactical work with no bandwidth for strategic innovation.\n\nWithout intervention, we'd need 100+ headcount to match product growth using traditional staffing models. Instead, I built systematic frameworks that became the foundation of UX Intelligence.",
        examples: [
          { type: "image", caption: "Scale challenge: 9 specialists supporting 100+ product spaces" },
          { type: "image", caption: "Content request volume: 200+ tickets/month, 3-week average turnaround" },
          { type: "image", caption: "Inconsistency audit: 47 different terms for same concepts across products" }
        ]
      },
      {
        heading: "The Solution",
        content: "I created systematic frameworks that enable teams to solve problems independently—this became the foundation of UX Intelligence.\n\nStrategic Focus & Democratization: Rather than spreading resources thin across all products, I focused on supporting products where we could have the biggest impact. Used these solutions to standardize and scale across all 100+ product spaces—building systems that democratized content excellence instead of requiring custom solutions for each product.\n\nRedefined what it means to provide UX at scale: Embedded UX Intelligence directly in code through design systems. Utilized gems and prompt libraries to make excellence accessible to all product teams, not just those with dedicated content support. This democratization approach—making systematic problem-solving available to everyone—enabled 9 specialists to support 100+ product spaces effectively.\n\nEstablished 'Conversation Architecture' positioning content strategy as an upstream architectural decision embedded in product planning—not a downstream deliverable.\n\nThe Listen-Respond-Measure Methodology:\n\n• Listen: Customer calls, CloudSpeaker insights, user research, support ticket analysis\n\n• Respond: In-product content iterations, proactive content architecture\n\n• Measure: Task completion rates, support ticket reduction, user satisfaction (SUS surveys)\n\nBuilt comprehensive governance systems for voice, tone, and terminology that enable autonomous decision-making. Developed product ownership model mapping strategists to business domains, not individual features.\n\n**Tools Team Built to Enable UX Intelligence** (examples):\n\nGuided team to adopt UX Intelligence mindset—building their own solutions rather than consuming off-the-shelf tools. Team innovations include:\n\n• **CLUE Index**: ML-powered content quality assessment—answers 'Is this helping users?' with data-driven scoring across all product spaces\n\n• **Frameflow**: Workflow automation—freed team from manual processes to focus on solving user problems systematically\n\n• **CloudSpeaker**: AI-powered user intelligence—surfaces insights from 10K+ daily interactions, eliminating bias from single tweets or calls\n\n• **Controlled Vocabulary**: Standardized terminology system—ensures consistency and eliminates the 47+ variations for same concepts\n\n• **Design Systems Integration**: Content rules embedded in code—makes excellence automatic, not optional, democratizing best practices\n\n• **Docs in Dash**: Contextual developer documentation—integrated directly into product UI where users need guidance\n\n• **Product AI Monitoring**: Tracked success metrics of AI products through dashboard—monitored containment rates and refined prompts to better serve users\n\nThis is systematic problem-solving at scale—the second pillar of UX Intelligence.",
        examples: [
          { type: "image", caption: "Team structure: 9 specialists across 4 disciplines" },
          { type: "image", caption: "Listen-Respond-Measure methodology diagram" },
          { type: "image", caption: "Product ownership model: Domain-based team structure" },
          { type: "image", caption: "Governance toolkit: Voice/tone guidelines, terminology standards" }
        ]
      },
      {
        heading: "The Impact",
        content: "Achieved exceptional operational efficiency: 9 team members supporting 100+ product spaces—unheard of in the industry. This proves systematic frameworks can scale exponentially.\n\nEstablished content as architectural decision-maker embedded in product planning, not afterthought. Content strategists now participate in PRD reviews and architecture discussions, not just design handoffs.\n\nReduced content-related support tickets by 60% through systematic governance. Decreased average content turnaround from 3 weeks to 3 days.\n\nEnabled team to shift 70% of time from reactive execution to strategic innovation. Framework adopted as company-wide standard, influencing how 500+ employees approach product content.\n\nConversation Architecture demonstrates UX Intelligence principles: systematic problem-solving that enables autonomous decision-making at scale.",
        examples: [
          { type: "image", caption: "Exceptional efficiency: 9 specialists supporting 100+ product spaces" },
          { type: "image", caption: "Support ticket reduction: 60% decrease in content-related issues" },
          { type: "image", caption: "Strategic time allocation: 70% proactive vs 30% reactive" }
        ]
      }
    ]
  },
  {
    slug: "team-leadership",
    title: "Building UX Intelligence Teams",
    subtitle: "Built team of innovators—95% retention, 100% promotion rate, enabled to build their own tools",
    color: "#00FFFF",
    sections: [
      {
        heading: "The Challenge",
        content: "How do you build a team that innovates, not just executes? Cloudflare's hypergrowth demanded building UX Intelligence capability from ground zero. No established discipline, no defined roles, no proven processes.\n\nNeeded to hire, onboard, and scale a distributed team across multiple time zones while simultaneously delivering immediate business value and creating new ways of working.\n\nThe challenge: establish UX Intelligence as a recognized discipline while proving ROI from day one—all during rapid product expansion and organizational change.",
        examples: [
          { type: "image", caption: "Starting point: Zero dedicated content strategists, ad-hoc processes" },
          { type: "image", caption: "Role definition framework: Strategy vs Design vs Technical Writing" },
          { type: "image", caption: "Hiring roadmap: 10+ positions across 18 months" }
        ]
      },
      {
        heading: "The Solution",
        content: "I built teams that create systems, not teams that just execute tasks. Hired and developed 9 specialists who became builders and innovators.\n\nMy Philosophy from Day One: If we can't measure our impact, we won't do it. We always show the value of content through data, not assumptions.\n\nSpecialized Team Structure:\n\n• 3 UX Content Strategists: Upstream architecture, user research, framework development, product experience\n\n• 3 Technical Content Strategists: Developer documentation, API guides, integration tutorials, SDK docs\n\n• 1 Information Architect: Taxonomy, navigation, content models, findability\n\n• 2 Video Producers: Multimedia tutorials, feature demos, product storytelling\n\nBuilt Culture of Innovation:\n\n• Team enabled to build their own tools (CLUE Index, Frameflow)\n\n• Transformed from 'consumers of AI' to 'builders with AI'\n\n• Shifted 70% of time from execution to strategic innovation\n\n• Created environment where everyone solves problems systematically\n\nImplemented OKRs and Quarterly Planning: Established structured goal-setting and quarterly planning processes to tell the story of content at Cloudflare—making impact visible and connecting content work directly to business outcomes.\n\nCreated comprehensive onboarding program with 30-60-90 day milestones. Developed product ownership model aligning team members to business domains.\n\nEvangelized UX Intelligence through company-wide BEER presentations, Wiki documentation, and executive stakeholder management.\n\nProven track record: consistently leveled up every direct report after 1+ year (Abby, Alexa, Daniel, Denise, Jess, Emanuel).",
        examples: [
          { type: "image", caption: "Team structure: 3 UX + 3 Technical + 1 IA + 2 Video = 9 specialists" },
          { type: "image", caption: "Onboarding program: 30-60-90 day framework with success metrics" },
          { type: "image", caption: "BEER presentation: Introducing UX Content Strategy to 500+ employees" },
          { type: "image", caption: "Stakeholder engagement: Executive alignment and advocacy" }
        ]
      },
      {
        heading: "The Impact",
        content: "Built distributed team across 3 time zones (EST, GMT, CST) with 95% retention rate (industry avg: 75%). Established UX Intelligence as recognized discipline at Cloudflare, embedded in product planning cycles.\n\nTeam Excellence:\n• 100% promotion rate for eligible direct reports\n• 3 IC promotions, 2 management track progressions\n• 4 team members recruited by other companies for leadership positions (validating team development)\n• Team built their own innovation tools (CLUE Index, Frameflow)—not just consumed technology\n\nBusiness Impact:\n• $5M+ measurable value through improved user engagement, reduced support costs, accelerated adoption\n• Frameworks adopted company-wide by 500+ employees\n\nEstablished culture of psychological safety, growth, and innovation that enables teams to create, not just execute. This is how you build UX Intelligence capability—through people who think systematically and build solutions.",
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
