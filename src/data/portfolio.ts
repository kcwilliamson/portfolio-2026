export const workHistory = [
  {
    title: "Director of UX Content Strategy",
    company: "Cloudflare",
    period: "Apr 2024 - Present",
    description: "Leading UX content strategy initiatives at Cloudflare, directing strategic content development and UX intelligence programs across organization.",
    skills: ["AI/LLM Implementation", "Executive Leadership", "Strategic Planning"]
  },
  {
    title: "Senior Manager UX Content Strategy",
    company: "Cloudflare",
    period: "Feb 2022 - Apr 2024",
    description: "Managed UX content design at Cloudflare for over 2 years, leading content strategy initiatives and building cross-functional content teams.",
    skills: ["Team Building", "Process Design", "Content Governance"]
  },
  {
    title: "Manager UX Content Design",
    company: "Calendly",
    period: "Mar 2021 - Feb 2022",
    description: "Lead a team of product content strategists to establish content practices and processes at Calendly.",
    skills: ["Content Strategy", "Team Management", "Product Development"]
  },
  {
    title: "UX Lead Product Content",
    company: "Mailchimp",
    period: "Jun 2019 - Mar 2021",
    description: "Led product content strategy for Mailchimp's core platform.",
    skills: ["UX Writing", "Content Design", "User Research"]
  },
  {
    title: "UX Team Lead",
    company: "The Home Depot",
    period: "Sep 2017 - Jun 2019",
    description: "Led UX content team for enterprise e-commerce platform.",
    skills: ["E-commerce", "Team Leadership", "Content Systems"]
  },
  {
    title: "Sr UX Designer",
    company: "Cox Automotive",
    period: "Aug 2015 - Sep 2017",
    description: "Senior UX designer for automotive marketplace platforms.",
    skills: ["UX Design", "Interaction Design", "Prototyping"]
  },
  {
    title: "Copy Writer",
    company: "Various Agencies",
    period: "2013 - 2015",
    description: "Copywriting for marketing and advertising campaigns.",
    skills: ["Copywriting", "Brand Voice", "Marketing"]
  },
  {
    title: "Marketing Specialist",
    company: "Early Career",
    period: "2011 - 2013",
    description: "Marketing and communications specialist.",
    skills: ["Marketing Communications", "Campaign Management"]
  },
  {
    title: "Reporter",
    company: "Local News",
    period: "2009 - 2011",
    description: "Journalism and reporting for local news outlets.",
    skills: ["Journalism", "Storytelling", "Research"]
  }
];

export const portfolioPieces = [
  {
    slug: "ux-intelligence",
    title: "UX Intelligence",
    subtitle: "Pioneering AI-powered customer insights at enterprise scale",
    color: "#FF1493",
    sections: [
      {
        heading: "The Challenge",
        content: "Product teams at Cloudflare were drowning in customer feedback across Discord, Twitter, GitHub, support tickets, and community forums. With thousands of daily interactions, there was no systematic way to identify patterns, prioritize user needs, or surface actionable insights. PMs spent weeks manually analyzing feedback, missing critical signals while products shipped without customer validation.",
        examples: [
          { type: "image", caption: "CloudSpeaker dashboard showing AI-classified sentiment across channels" },
          { type: "image", caption: "Real-time product mention detection using LLM classification" },
          { type: "image", caption: "Automated sentiment analysis aggregating 10K+ daily interactions" }
        ]
      },
      {
        heading: "The Solution",
        content: "I spearheaded CloudSpeaker, an AI-powered intelligence platform using Workers AI and Llama 3 models to automatically ingest, classify, and summarize customer feedback at scale. Built a 'Content Warehouse' knowledge graph linking products to user sentiment, enabling natural language queries. Collaborated with BI and Engineering teams to create a self-service analytics platform that transforms weeks of manual analysis into instant, actionable insights.",
        examples: [
          { type: "image", caption: "Content warehouse architecture: LLM pipeline design" },
          { type: "image", caption: "Product relationship mapping and taxonomy system" },
          { type: "image", caption: "Natural language query interface for PM self-service" }
        ]
      },
      {
        heading: "The Impact",
        content: "Reduced feedback analysis time from 3 weeks to 5 minutes—a 99% efficiency gain. Enabled data-driven product decisions backed by quantified user sentiment. Presented at company-wide BEER meeting to 500+ employees. Now used by 50+ product managers for quarterly planning and roadmap prioritization. Identified 3 critical product gaps that became Q1 priorities, directly influencing $2M+ in engineering investment.",
        examples: [
          { type: "image", caption: "BEER presentation deck: AI for Product Intelligence" },
          { type: "image", caption: "PM adoption metrics: 50+ active users, 200+ queries/week" },
          { type: "image", caption: "Business impact: Product decisions influenced by CloudSpeaker insights" }
        ]
      }
    ]
  },
  {
    slug: "force-multipliers",
    title: "Force Multipliers",
    subtitle: "Engineering scalable systems that amplify team impact 10x",
    color: "#00FF00",
    sections: [
      {
        heading: "The Challenge",
        content: "A 10-person UX Content team supporting 50+ products across Cloudflare's global platform—from Zero Trust security to Workers edge computing. Traditional content operations couldn't scale: reactive 'microcopy' requests, inconsistent terminology across products, no systematic approach to governance. The team was drowning in tactical work with no bandwidth for strategic initiatives. Without intervention, we'd need 50+ headcount to match product growth.",
        examples: [
          { type: "image", caption: "Product portfolio mapping: 50+ products, 10 content strategists" },
          { type: "image", caption: "Content request volume: 200+ tickets/month, 3-week average turnaround" },
          { type: "image", caption: "Inconsistency audit: 47 different terms for same concepts across products" }
        ]
      },
      {
        heading: "The Solution",
        content: "I established the 'Conversation Architecture' framework, positioning content strategy as an upstream architectural decision—not a downstream deliverable. Created the Listen-Respond-Measure methodology: systematic customer feedback loops, in-product content iterations, and analytics-driven validation. Built comprehensive governance systems for voice, tone, and terminology that enable autonomous decision-making. Developed product ownership model mapping strategists to business domains, not individual features.",
        examples: [
          { type: "image", caption: "Conversation Architecture framework: Content as infrastructure" },
          { type: "image", caption: "Listen-Respond-Measure methodology diagram" },
          { type: "image", caption: "Product ownership model: Domain-based team structure" },
          { type: "image", caption: "Governance toolkit: Voice/tone guidelines, terminology standards" }
        ]
      },
      {
        heading: "The Impact",
        content: "Team scaled from 5 to 10 members while product coverage increased 3x—achieving 300% efficiency gain. Established content as architectural decision-maker embedded in product planning, not afterthought. Reduced content-related support tickets by 60% through systematic governance. Decreased average content turnaround from 3 weeks to 3 days. Enabled team to shift 70% of time from reactive execution to strategic initiatives. Framework adopted as company-wide standard, influencing how 500+ employees approach product content.",
        examples: [
          { type: "image", caption: "Efficiency metrics: 3x product coverage with 2x team growth" },
          { type: "image", caption: "Support ticket reduction: 60% decrease in content-related issues" },
          { type: "image", caption: "Strategic time allocation: 70% proactive vs 30% reactive" }
        ]
      }
    ]
  },
  {
    slug: "build-scale",
    title: "Build & Scale",
    subtitle: "Building high-performing teams that deliver enterprise impact",
    color: "#00FFFF",
    sections: [
      {
        heading: "The Challenge",
        content: "Cloudflare's hypergrowth demanded building a world-class UX Content organization from ground zero. No established discipline, no defined roles, no proven processes. Needed to hire, onboard, and scale a distributed team across multiple time zones while simultaneously delivering immediate business value. The challenge: establish UX Content Strategy as a recognized discipline while proving ROI from day one—all during a period of rapid product expansion and organizational change.",
        examples: [
          { type: "image", caption: "Starting point: Zero dedicated content strategists, ad-hoc processes" },
          { type: "image", caption: "Role definition framework: Strategy vs Design vs Technical Writing" },
          { type: "image", caption: "Hiring roadmap: 10+ positions across 18 months" }
        ]
      },
      {
        heading: "The Solution",
        content: "I built the UX Content Strategy function from scratch, hiring and developing 10+ team members across UX Content Strategy, Technical Writing, and Video Production. Established clear role definitions distinguishing Strategy (upstream architecture), Design (in-product execution), and Technical Writing (documentation). Created comprehensive onboarding program with 30-60-90 day milestones. Developed product ownership model aligning team members to business domains. Evangelized the discipline through company-wide BEER presentations, Wiki documentation, and executive stakeholder management.",
        examples: [
          { type: "image", caption: "Team org chart evolution: 0 to 10+ members in 18 months" },
          { type: "image", caption: "Onboarding program: 30-60-90 day framework with success metrics" },
          { type: "image", caption: "BEER presentation: Introducing UX Content Strategy to 500+ employees" },
          { type: "image", caption: "Stakeholder engagement: Executive alignment and advocacy" }
        ]
      },
      {
        heading: "The Impact",
        content: "Built distributed team across 3 time zones (EST, GMT, CST) with 95% retention rate. Established UX Content Strategy as recognized discipline at Cloudflare, embedded in product planning cycles. Team members promoted to senior and leadership roles—3 IC promotions, 2 management track progressions. Created talent pipeline: 4 team members recruited by other companies for leadership positions, validating team development. Delivered $5M+ in measurable business impact through improved user engagement, reduced support costs, and accelerated product adoption. Team recognized with company-wide awards for innovation and cross-functional collaboration.",
        examples: [
          { type: "image", caption: "Team retention and growth: 95% retention, 100% promotion-eligible" },
          { type: "image", caption: "Career progression: IC and management track advancement" },
          { type: "image", caption: "Business impact: $5M+ value delivered through team initiatives" }
        ]
      }
    ]
  },
  {
    slug: "digital-storytelling",
    title: "Digital Storytelling",
    subtitle: "Transforming technical complexity into human clarity at scale",
    color: "#9D00FF",
    sections: [
      {
        heading: "The Challenge",
        content: "Cloudflare's technical products—from Workers edge computing to Zero Trust security—needed to serve radically different audiences: developers seeking API documentation, IT admins evaluating enterprise solutions, and C-suite executives making million-dollar decisions. Content was fragmented across 50+ products with inconsistent voice, conflicting terminology, and no systematic approach to audience segmentation. User research showed 40% comprehension failure rate on critical onboarding flows. The business cost: high support volume, slow product adoption, and lost enterprise deals.",
        examples: [
          { type: "image", caption: "Content audit: 50+ products, 12 different voice/tone approaches" },
          { type: "image", caption: "User research: 40% comprehension failure on key flows" },
          { type: "image", caption: "Business impact: Support costs and lost revenue from poor content" }
        ]
      },
      {
        heading: "The Solution",
        content: "I established comprehensive voice and tone guidelines tailored to Cloudflare's technical-yet-accessible brand. Created content models for different user journeys—developer docs, admin guides, executive briefings—each optimized for audience needs and business goals. Partnered with Video Production team to develop multimedia storytelling combining written content, video tutorials, and interactive demos. Built measurement framework using Amplitude to track content effectiveness: task completion rates, time-on-page, support ticket deflection, and conversion metrics. Established content-first design process where content drives UX decisions, not vice versa.",
        examples: [
          { type: "image", caption: "Voice and tone guidelines: Technical depth meets human accessibility" },
          { type: "image", caption: "Content model library: Templates for 8 user journey types" },
          { type: "image", caption: "Multimedia strategy: Video, interactive demos, written guides" },
          { type: "image", caption: "Analytics framework: Content effectiveness dashboard in Amplitude" }
        ]
      },
      {
        heading: "The Impact",
        content: "Increased user engagement by 45% across key product flows. Reduced time-to-comprehension in user testing from 8 minutes to 3 minutes—a 62% improvement. Decreased support ticket volume by 35% through clearer in-product guidance. Improved enterprise trial-to-paid conversion by 28% through targeted executive content. Established content-first approach now embedded in product development: content strategists participate in architecture reviews, not just design handoffs. Framework adopted across organization, influencing how 500+ employees approach product communication. Content recognized with industry awards for technical clarity and user-centered design.",
        examples: [
          { type: "image", caption: "Engagement lift: 45% increase in task completion rates" },
          { type: "image", caption: "Comprehension improvement: 62% reduction in time-to-understanding" },
          { type: "image", caption: "Business metrics: 35% support reduction, 28% conversion improvement" }
        ]
      }
    ]
  }
];
