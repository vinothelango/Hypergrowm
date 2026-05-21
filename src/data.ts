import { 
  PortfolioItem, 
  TestimonialItem, 
  StatsItem, 
  WorkingProcessStep, 
  ServicePageData,
  ActiveTabType
} from './types';

export const TAGLINES = [
  "Grow Digitally with Pixelgrowm",
  "Creative Solutions for Modern Brands",
  "Building Digital Experiences That Convert",
  "From Ideas to Online Growth",
  "Smart Marketing. Creative Results.",
  "Your Startup Growth Partner"
];

export const HERO_SECTION = {
  heading: "We Build Brands That Grow Online",
  subHeading: "Pixelgrowm helps startups and businesses grow with modern websites, high-converting ads, creative video editing, and digital marketing strategies that deliver real results.",
  shortDescription: "From website development to Meta Ads and Google Ads campaigns, we create digital experiences that help businesses attract customers, generate leads, and scale faster.",
  ctaPrimary: "Get Started",
  ctaSecondary: "Book Free Consultation"
};

export const ABOUT_SECTION = {
  title: "About Pixelgrowm",
  description1: "Pixelgrowm is a startup digital agency focused on helping businesses establish a strong online presence. We combine creativity, strategy, and technology to build websites, run targeted ad campaigns, and create engaging video content that drives growth.",
  description2: "We work closely with startups, local businesses, and growing brands to deliver modern digital solutions that are affordable, scalable, and result-oriented.",
  whyChooseUs: [
    { title: "Startup-friendly pricing", description: "Flexible rates tailored for early-stage budgets." },
    { title: "Creative and modern designs", description: "Stand out with layouts aligned with global visual trends." },
    { title: "Performance-focused marketing", description: "ROI-centric metrics rather than superficial metrics like clicks or impressions." },
    { title: "Fast project delivery", description: "Iterative sprints ensure your products ship without delay." },
    { title: "Dedicated support", description: "Available for help anytime to keep your platform running beautifully." },
    { title: "Customized business solutions", description: "Strategies customized specifically for your market segment." }
  ]
};

export const CORE_SERVICES = [
  {
    id: "web-dev" as ActiveTabType,
    title: "Website Development",
    description: "Modern, responsive, and high-performance websites designed to grow your business online.",
    iconName: "Globe",
    tagline: "Build trust with a world-class interface"
  },
  {
    id: "meta-ads" as ActiveTabType,
    title: "Meta Ads",
    description: "Targeted Facebook and Instagram advertising campaigns that generate leads and increase brand visibility.",
    iconName: "Facebook",
    tagline: "Accelerate conversions & capture leads"
  },
  {
    id: "google-ads" as ActiveTabType,
    title: "Google Ads",
    description: "High-converting Google Ads campaigns that help customers find your business faster.",
    iconName: "Search",
    tagline: "Be there when customers are searching"
  },
  {
    id: "video-editing" as ActiveTabType,
    title: "Video Editing",
    description: "Professional promotional videos, reels, ads, and branded content designed for engagement and conversions.",
    iconName: "Video",
    tagline: "Tell visual stories that hook attention"
  }
];

export const FEATURES_LIST = [
  {
    id: "feat-1",
    title: "Modern UI/UX Design",
    description: "Clean and premium website experiences designed for better engagement.",
    icon: "Layout"
  },
  {
    id: "feat-2",
    title: "Mobile Responsive",
    description: "Your website and creatives will work perfectly on all devices.",
    icon: "Smartphone"
  },
  {
    id: "feat-3",
    title: "Fast Performance",
    description: "Optimized speed and smooth functionality for better user experience.",
    icon: "Zap"
  },
  {
    id: "feat-4",
    title: "Lead Generation Focus",
    description: "Everything we create is focused on generating real business growth.",
    icon: "Target"
  },
  {
    id: "feat-5",
    title: "Creative Marketing",
    description: "Smart ad strategies and engaging creatives that attract customers.",
    icon: "Sparkles"
  },
  {
    id: "feat-6",
    title: "Startup Growth Strategy",
    description: "Affordable and scalable digital solutions for startups and small businesses.",
    icon: "TrendingUp"
  },
  {
    id: "feat-7",
    title: "SEO-Friendly Development",
    description: "Websites optimized for better search visibility.",
    icon: "SearchCode"
  },
  {
    id: "feat-8",
    title: "Dedicated Support",
    description: "Reliable communication and support throughout your project.",
    icon: "MessageSquareHeart"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "w-1",
    title: "FinTech landing page & corporate system",
    category: "Website",
    clientType: "Business & Startup landing pages",
    description: "Highperformance portal detailing asset management features & dynamic interactive ledger visualizations.",
    metrics: "+140% signups in 30 days",
    details: ["Corporate websites", "Custom interactive UI elements", "Mobile-optimized architecture"]
  },
  {
    id: "w-2",
    title: "D2C Brand product showcase & checkout",
    category: "Website",
    clientType: "Service-based & Product showcase",
    description: "Clean website designed for showcasing custom smart devices with a swift responsive checkout funnel.",
    metrics: "Sub-second loading times worldwide",
    details: ["Product showcase websites", "Premium interactive cards", "SEO friendly structure"]
  },
  {
    id: "a-1",
    title: "SaaS Lead Acquisition Engine",
    category: "Advertising",
    clientType: "Meta & Instagram Advertising",
    description: "Targeted campaigns addressing core customer pain points with custom ad visual variations.",
    metrics: "4.8x Return on Ad Spend (ROAS)",
    details: ["Facebook lead generation ads", "Instagram engagement campaigns", "Interactive lead forms"]
  },
  {
    id: "a-2",
    title: "Local Services Google Search Campaign",
    category: "Advertising",
    clientType: "Google search ads & remarketing",
    description: "Intent-matched search campaigns bringing direct organic-level inquiries for emergency home utilities.",
    metrics: "Rs. 990 cost-per-lead (reduced by 38%)",
    details: ["Google search ads", "Remarketing campaigns", "Conversion tracking optimization"]
  },
  {
    id: "v-1",
    title: "Social Media Reels Campaign for Fashion Startup",
    category: "Video",
    clientType: "Promo videos & Reels",
    description: "Sassy fast-paced editing sequence featuring dynamic text layouts, smooth transitions, and trending audios.",
    metrics: "2.1M native video impressions",
    details: ["Social media reels", "Trending text animations", "Color grading & sound design"]
  },
  {
    id: "v-2",
    title: "B2B SaaS Brand Product Showcase video",
    category: "Video",
    clientType: "Ad creatives & Motion Graphics",
    description: "Elegant 90-second product explainer mixing clean screen captures with outstanding vector motion graphics.",
    metrics: "58% scroll-stopper hook rate",
    details: ["Promotional videos", "Brand intro videos", "Motion graphics explainer videos"]
  },
  {
    id: "c-1",
    title: "Ultimate Brand Kit & Social Identity System",
    category: "Content",
    clientType: "Content Creation / Identity",
    description: "Full spectrum visual kit containing grid presets, banner formats, and custom vector graphic guidelines.",
    metrics: "Highly praised corporate cohesive vibe",
    details: ["Social media creatives", "Ad banners & visual templates", "Corporate branding assets"]
  }
];

export const HIGHLIGHTS_SECTION = {
  title: "Growing Businesses Digitally",
  description1: "Pixelgrowm is a startup digital agency focused on helping businesses grow with creative websites, smart advertising, and engaging digital content. We believe every brand deserves a strong online presence built with strategy, creativity, and innovation.",
  cards: [
    {
      title: "Startup-Focused Solutions",
      description: "We understand the needs of startups and growing businesses, providing flexible and scalable digital solutions."
    },
    {
      title: "Creative & Custom Work",
      description: "Every website, campaign, and creative asset is designed uniquely to match your brand identity and business goals."
    },
    {
      title: "Affordable Digital Services",
      description: "Professional digital services with startup-friendly pricing and value-driven solutions."
    },
    {
      title: "Fast & Reliable Support",
      description: "Quick response, smooth communication, and dedicated support throughout the project process."
    },
    {
      title: "Modern Digital Strategies",
      description: "Using the latest trends, technologies, and marketing strategies to help businesses grow online."
    },
    {
      title: "Long-Term Business Growth",
      description: "Focused on creating strong digital foundations that support future scalability and brand growth."
    }
  ],
  modelHeading: "Highlight Cards Model",
  models: [
    {
      title: "Modern Website Solutions",
      description: "Responsive and professional websites designed for better user experience and conversions.",
      stat: "20+ Pages Built"
    },
    {
      title: "Performance Marketing",
      description: "Targeted Meta Ads and Google Ads campaigns that help businesses reach the right audience.",
      stat: "4.5x Avg ROAS"
    },
    {
      title: "Creative Video Content",
      description: "Engaging promotional videos, reels, and ad creatives designed for social media growth.",
      stat: "5M+ Total Views"
    },
    {
      title: "Brand Growth Support",
      description: "Helping startups build visibility, credibility, and stronger online engagement.",
      stat: "100% Custom Work"
    }
  ]
};

export const PROCESS_TIMELINE: WorkingProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your business goals and target audience from the ground up."
  },
  {
    step: "02",
    title: "Strategy",
    description: "We create a customized digital growth plan mapped exactly to your resources."
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Our world-class team builds modern websites and creative marketing assets."
  },
  {
    step: "04",
    title: "Launch & Marketing",
    description: "We launch your project under perfect environments and kickstart live search ads."
  },
  {
    step: "05",
    title: "Growth & Support",
    description: "Continuous support, speed optimization, and data-backed scale tactics."
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    quote: "Pixelgrowm helped us launch our business website quickly with a clean and modern design.",
    author: "Professional and creative team.",
    role: "Co-Founder",
    company: "SvelteSpace",
    rating: 5
  },
  {
    quote: "Their Meta Ads strategy helped us generate quality leads for our business.",
    author: "Great support and marketing ideas.",
    role: "Marketing Director",
    company: "ZenDental Local",
    rating: 5
  },
  {
    quote: "Affordable pricing and excellent communication throughout the project.",
    author: "Highly recommended for startups.",
    role: "Founder & CEO",
    company: "VeloDrop Logistics",
    rating: 5
  }
];

export const AGENCY_CONTACT = {
  email: "pixelgrowm@gmail.com",
  phone: "+91 99999 55555",
  whatsappMock: "+91 99999 55555"
};

// -------------------------------------------------------------
// SEPARATE PAGES DATA
// -------------------------------------------------------------
export const SERVICE_PAGES_DATA: Record<Exclude<ActiveTabType, 'home'>, ServicePageData> = {
  "web-dev": {
    id: "web-dev",
    title: "Website Development",
    heroHeading: "Website Development That Builds Trust",
    heroSubheading: "We create modern, responsive, and business-focused websites that help startups and brands establish a strong digital presence.",
    offers: [
      {
        title: "Business Websites",
        description: "Professional websites for companies and service businesses.",
        iconName: "Briefcase"
      },
      {
        title: "Landing Pages",
        description: "High-converting landing pages designed for campaigns and lead generation.",
        iconName: "Target"
      },
      {
        title: "Responsive Design",
        description: "Mobile-friendly websites optimized for all devices.",
        iconName: "Smartphone"
      },
      {
        title: "Custom UI Design",
        description: "Premium and modern layouts that match your brand identity.",
        iconName: "Layout"
      },
      {
        title: "Website Optimization",
        description: "Fast-loading and SEO-friendly development.",
        iconName: "Zap"
      },
      {
        title: "CMS Integration",
        description: "Easy content management solutions for your business.",
        iconName: "ShieldCheck"
      }
    ],
    features: [
      "Responsive Design",
      "SEO-Friendly Structure",
      "Fast Loading Speed",
      "Modern UI/UX",
      "Secure Development",
      "Lead Generation Forms",
      "Custom Design",
      "Easy Navigation"
    ],
    ctaText: "Need a professional website for your business? Let’s create something powerful together."
  },
  "meta-ads": {
    id: "meta-ads",
    title: "Meta Ads Campaigns",
    heroHeading: "Reach More Customers with Meta Ads",
    heroSubheading: "We create high-performing Facebook and Instagram ad campaigns that increase visibility, generate leads, and grow your business online.",
    offers: [
      {
        title: "Lead Generation Ads",
        description: "Generate quality leads for your business through optimized forms.",
        iconName: "Users"
      },
      {
        title: "Brand Awareness Campaigns",
        description: "Increase reach and visibility for your corporate identity or core products.",
        iconName: "Eye"
      },
      {
        title: "Instagram Ads",
        description: "Creative campaigns optimized for massive engagement and instant conversions.",
        iconName: "Instagram"
      },
      {
        title: "Retargeting Campaigns",
        description: "Reconnect with past visitors and increase your overall conversions.",
        iconName: "RefreshCw"
      },
      {
        title: "Creative Ad Design",
        description: "Professional ad creatives designed specifically to attract attention in feeds.",
        iconName: "Palette"
      }
    ],
    features: [
      "Audience Targeting",
      "Conversion Optimization",
      "Creative Ad Strategy",
      "Daily Performance Monitoring",
      "Budget Optimization",
      "Retargeting Setup",
      "Ad Creative Design",
      "Campaign Reporting"
    ],
    ctaText: "Start growing your business with powerful Meta Ads campaigns."
  },
  "google-ads": {
    id: "google-ads",
    title: "Google Ads Campaigns",
    heroHeading: "Get More Leads with Google Ads",
    heroSubheading: "Appear in front of customers actively searching for your services with targeted Google Ads campaigns.",
    offers: [
      {
        title: "Search Ads",
        description: "Reach high-intent customers searching for your services instantly.",
        iconName: "Search"
      },
      {
        title: "Display Ads",
        description: "Increase brand visibility across millions of partner websites and platforms.",
        iconName: "Image"
      },
      {
        title: "Remarketing Ads",
        description: "Bring back high-intent visitors who already interacted with your business.",
        iconName: "Sparkles"
      },
      {
        title: "Conversion Tracking",
        description: "Track leads, phone calls, and campaign ROI metrics with surgical accuracy.",
        iconName: "BarChart3"
      }
    ],
    features: [
      "Keyword Research",
      "Campaign Optimization",
      "Audience Targeting",
      "Conversion Tracking",
      "Ad Copy Creation",
      "Performance Reports",
      "Budget Management",
      "ROI-Focused Strategy"
    ],
    ctaText: "Launch result-driven Google Ads campaigns with Pixelgrowm."
  },
  "video-editing": {
    id: "video-editing",
    title: "Video Editing Services",
    heroHeading: "Creative Video Editing That Captures Attention",
    heroSubheading: "We create engaging videos for brands, businesses, and social media marketing campaigns.",
    offers: [
      {
        title: "Promotional Videos",
        description: "Professional videos for marketing, brand identity, and corporate pitches.",
        iconName: "Tv"
      },
      {
        title: "Social Media Reels",
        description: "Shortform, snappy, engaging content crafted for Instagram & Facebook feeds.",
        iconName: "Clapperboard"
      },
      {
        title: "Ad Videos",
        description: "Highconverting, fastpaced video ads targeted for social advertising funnels.",
        iconName: "DollarSign"
      },
      {
        title: "Brand Intro Videos",
        description: "Creative visual introductions that build trust and outline your unique position.",
        iconName: "Sparkles"
      },
      {
        title: "Motion Graphics",
        description: "Modern styled animated assets and vector charts for enhanced user retention.",
        iconName: "Compass"
      }
    ],
    features: [
      "Professional Editing",
      "Trend-Based Reels",
      "Smooth Transitions",
      "Motion Graphics",
      "Background Music",
      "Social Media Optimization",
      "Fast Delivery",
      "High-Quality Output"
    ],
    ctaText: "Bring your brand to life with creative video content."
  }
};
