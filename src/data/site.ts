import paperRegistryData from "./papers.json";

export interface PaperRegistryEntry {
  title: string;
  canonicalPath: string;
  sourceFile: string;
  status: "coming-soon" | "ready";
  displayDraft?: boolean;
}

export const paperRegistry = paperRegistryData as Record<
  keyof typeof paperRegistryData,
  PaperRegistryEntry
>;

export type PaperId = keyof typeof paperRegistry;

export function getPaperHref(paperId: PaperId): string {
  return paperRegistry[paperId].canonicalPath;
}

export function getPaperStatus(paperId: PaperId): PaperRegistryEntry["status"] {
  return paperRegistry[paperId].status;
}

export function isPaperDraftVisible(paperId: PaperId): boolean {
  const paper = paperRegistry[paperId];

  return paper.status === "ready" && paper.displayDraft !== false;
}

export function getPaperCanonicalUrl(paperId: PaperId): URL {
  return new URL(paperRegistry[paperId].canonicalPath, "https://soyounghan.com");
}

export interface ResearchPaper {
  title: string;
  abstract?: string;
  paperId: PaperId;
  coauthors?: string;
  label?: string;
}

export interface SiteData {
  meta: {
    title: string;
    description: string;
  };
  profile: {
    name: string;
    title: string;
    affiliation: string;
    introduction: string[];
    email: string;
    cvPath: string;
    portrait: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
  research: ResearchPaper[];
}

export const siteData = {
  meta: {
    title: "Soyoung Han | Economics PhD Candidate",
    description:
      "Soyoung Han is a PhD candidate in Economics at the University of Michigan researching labor, family, health, education, and economic history.",
  },
  profile: {
    name: "Soyoung Han",
    title: "PhD Candidate in Economics",
    affiliation: "University of Michigan",
    introduction: [
      "I am a PhD candidate in Economics at the University of Michigan. My research interests are in labor economics, family economics, economic history, health economics, and the economics of education.",
      "I will be on the 2026-2027 job market.",
    ],
    email: "soyoungh@umich.edu",
    cvPath: "/files/soyoung-han-cv.pdf",
    portrait: {
      src: "/images/soyoung-han-2026.jpg",
      alt: "Portrait of Soyoung Han",
      width: 1000,
      height: 1500,
    },
  },
  research: [
    {
      title:
        "Health Insurance and Fertility: Evidence from the Advent of Blue Cross",
      label: "Job Market Paper",
      abstract:
        "After decades of decline, U.S. fertility began to rise in the mid-1930s, well before the postwar Baby Boom. At the same time, employer-sponsored health insurance was expanding nationwide for the first time. Did the emergence of employer-sponsored hospital insurance contribute to this reversal? I construct a new dataset documenting the staggered geographic rollout of Blue Cross hospital plans and their enrollment and link it to county-level data on hospital births and vital statistics. Using both stacked difference-in-differences and an instrumental variables designs, I find that Blue Cross entry increased insurance enrollment and hospital childbirth. Hospital births rose by 0.37 per 100 women aged 15--44, with little evidence of a corresponding decline in non-hospital births. Total fertility also increased, although the estimate is imprecise. The effects are larger in areas with higher baseline medical costs, suggesting that the financial cost of childbirth played an important role. Meanwhile, infant and maternal mortality show little change. Blue Cross contributed meaningfully to the mid-1930s fertility decline reversal in the United States, highlighting how health-care policy can shape demographic outcomes beyond its direct effects on medical care.",
      paperId: "health-insurance-fertility",
    },
    {
      title: "Black High Schools in the Segregated U.S. South",
      coauthors: "with Melvin Stephens, Jr.",
      abstract:
        "Educational access for Black Americans has historically lagged far behind that of Whites. In particular, only one in six counties in the segregated U.S. South had a Black high school in 1910. This paper examines the impact of the subsequent rapid spread of high schools over the next three decades on Black educational and economic outcomes using a newly compiled dataset of segregated Black high school openings. Leveraging variation in the timing and location of school openings, we find that high school exposure substantially increased the likelihood of attending high school and raised total years of schooling. We find that these increased educational levels significantly affected adult location and migration choices, occupational choices, and earnings.",
      paperId: "black-high-schools",
    },
    {
      title:
        "The Distributional Effects of State Investments in Less-Selective Public Colleges",
      coauthors: "with John Bound, Shwetha Raghuraman, and Andrew Simon",
      abstract:
        "We study the effects of targeted state investments in less-selective public universities. We consider a performance-based funding reform in Michigan that steeply increased appropriations for non-research-intensive institutions compared to others, while limiting tuition growth. Using administrative data linking all Michigan public high-school graduates to their postsecondary outcomes, we implement a difference-in-differences design comparing enrollment and graduation across institution types before and after the reform. The policy raised the share of high school graduates who enroll in non-R1 universities by about 0.2 percentage points (approximately 2,300 students) per year and increased graduation by roughly half of this amount. We find that the effects are concentrated among higher-income and non-URM students. Finally, we use university-level data from IPEDS and student survey data from the NCES to consider how demand- and supply-side responses lead to these patterns across students.",
      paperId: "distributional-effects-state-investments",
    },
    {
      title: "Human Capital Accumulation and Varsity Sports for College Athletes",
      coauthors: "with Xiaomeng Li and Georgy Shukaylo",
      paperId: "human-capital-varsity-sports",
    },
  ],
} satisfies SiteData;