import paperRegistryData from "./papers.json";

export interface PaperRegistryEntry {
  title: string;
  canonicalPath: string;
  sourceFile: string;
  status: "coming-soon" | "ready";
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

export function getPaperCanonicalUrl(paperId: PaperId): URL {
  return new URL(paperRegistry[paperId].canonicalPath, "https://soyounghan.com");
}

export interface ResearchPaper {
  title: string;
  abstract: string;
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
      src: "/images/soyoung-han.jpg",
      alt: "Portrait of Soyoung Han",
      width: 177,
      height: 236,
    },
  },
  research: [
    {
      title:
        "Health Insurance and Fertility: Evidence from the Advent of Blue Cross",
      label: "Job Market Paper",
      abstract:
        "After decades of decline, U.S. fertility began to rise in the mid-1930s, well before the postwar Baby Boom. This paper asks whether the emergence of employer-sponsored hospital insurance contributed to this reversal. I construct a new dataset tracing the geographic rollout and enrollment of Blue Cross hospital plans and link it to county-level hospital births and vital statistics. Using weighted stacked difference-in-differences and instrumental variables, I find that Blue Cross increased insurance enrollment and hospital childbirth. Hospital births rose by 0.37 per 100 women ages 15-44, with little evidence of a corresponding decline in non-hospital births. Total fertility also increased, although the estimate is imprecise. Effects are larger in areas with high baseline medical costs, while infant and maternal mortality show little change, pointing to the financial cost of childbirth as an important mechanism. Blue Cross may have contributed meaningfully to the mid-1930s fertility reversal in the United States.",
      paperId: "health-insurance-fertility",
    },
    {
      title: "Human Capital Accumulation and Varsity Sports for College Athletes",
      coauthors: "with Xiaomeng Li and Georgy Shukaylo",
      abstract:
        "This study examines the academic and labor market outcomes of NCAA Division I student-athletes using a dataset spanning 2000-2024 from a large public university. We leverage quasi-random variation in postseason performance to analyze the effects of unexpected season extensions and early tournament exits on term GPA. Results indicate that exceeding postseason expectations significantly reduces GPA, while underperforming also leads to academic declines, suggesting psychological and motivational mechanisms. In terms of labor market outcomes, student-athletes are almost seven times more likely to take on jobs in sports-related industries and more than five times more likely to have their first job in sports following graduation. In terms of positional level, no significant advantage is observed in managerial and mid-level managerial roles. However, student-athletes are much more likely to take on executive positions, accounting for cumulative GPA. Our findings contribute to the understanding of how dual careers in athletics and academics shape both short- and long-term educational and career outcomes. We conclude that student-athletes' GPA, while negatively affected by unexpected extensions of postseason play, does not restrict their ability to enter higher-paying jobs post-graduation. At the same time, the propensity to work in sports post-graduation is several times higher than for non-athlete students, suggesting a mechanism for compensating utility from working in sports.",
      paperId: "human-capital-varsity-sports",
    },
    {
      title: "Black High Schools in the Segregated U.S. South",
      coauthors: "with Melvin Stephens, Jr.",
      abstract:
        "Educational access for Black Americans has historically lagged far behind that of Whites. In particular, only one in six counties in the segregated U.S. South had a Black high school in 1910. This paper examines the impact of the subsequent rapid spread of high schools over the next three decades on Black educational and economic outcomes using a newly compiled dataset of segregated Black high school openings. Leveraging variation in the timing and location of school openings, we find that high school exposure substantially increased the likelihood of attending high school and raised total years of schooling. We find that these increased educational levels significantly affected adult location and migration choices, occupational choices, and earnings.",
      paperId: "black-high-schools",
    },
  ],
} satisfies SiteData;