export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface TradeOff {
  decision: string;
  alternative: string;
  rationale: string;
}

export interface ArchitectureDecision {
  title: string;
  description: string;
  tag: string;
}

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  role: string;
  tagline: string;
  problem: string;
  approach: string;
  outcome: string;
  metrics: ProjectMetric[];
  stack: {
    category: string;
    items: string[];
  }[];
  architecture: ArchitectureDecision[];
  tradeOffs: TradeOff[];
  keyTakeaways: string[];
}

export interface CapabilityGroup {
  category: string;
  items: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: {
    name: string;
    icon?: string;
    category?: string;
  }[];
}

export interface BuildingFocus {
  title: string;
  icon: string;
  description: string;
  highlights: string[];
}

export interface PortfolioData {
  name: {
    first: string;
    last: string;
  };
  role: string;
  subtitle: string;
  tagline: string;
  typingLines: string[];
  equation: string;
  approachQuote: string;
  currentFocusProgression: string[];
  availability: {
    status: string;
    period: string;
  };
  bio: string[];
  whatImBuilding: BuildingFocus[];
  interestAreas: {
    title: string;
    icon: string;
    items: string[];
  }[];
  skillCategories: SkillCategory[];
  learningTechnologies: {
    name: string;
    icon: string;
    level: string;
  }[];
  capabilities: CapabilityGroup[];
  projects: CaseStudy[];
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  credentials: {
    education: {
      degree: string;
      institution: string;
      year: string;
    }[];
    certifications: string[];
  };
}

