export type ActiveTabType = 'home' | 'web-dev' | 'meta-ads' | 'google-ads' | 'video-editing';

export interface ServiceDetail {
  title: string;
  description: string;
  iconName: string;
}

export interface ServicePageData {
  id: ActiveTabType;
  title: string;
  heroHeading: string;
  heroSubheading: string;
  offers: ServiceDetail[];
  features: string[];
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Website' | 'Advertising' | 'Video' | 'Content';
  clientType: string;
  description: string;
  metrics: string;
  details: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface WorkingProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface StatsItem {
  label: string;
  value: string;
  description: string;
}

export interface LeadFormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: ActiveTabType | 'other';
  budget: string;
  message: string;
}
