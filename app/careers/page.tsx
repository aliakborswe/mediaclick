import CareersHero from "@/components/career/CareersHero";
import CompanyCulture from "@/components/career/CompanyCulture";
import HowToApply from "@/components/career/HowToApply";
import OpenPositions from "@/components/career/OpenPositions";
import WhyWorkWithUs from "@/components/career/WhyWorkWithUs";
async function getCompanyBenefits() {
  return [
    {
      category: "Work-Life Balance",
      benefits: [
        "Parental Leave",
        "Remote work options",
        "Part-time opportunities",
      ],
    },
    {
      category: "Professional Development",
      benefits: [
        "Time for Learning",
        "Mentorship programs",
        "Internal Workshops & Training",
      ],
    },
    {
      category: "Financial",
      benefits: [
        "Competitive salary",
        "Performance bonuses",
        "Retirement Contributions",
      ],
    },
    {
      category: "Sports & Social",
      benefits: [
        "Friday Fun Hour",
        "DIY Sports League",
        "Monthly Team Challenges",
      ],
    },
  ];
}
async function getOpenPositions() {
  return [
    {
      id: 1,
      title: "Frontend Developer (React.js / Next.js)",
      department: "Engineering",
      location: "Remote / Dhaka Office",
      type: "Full-time",
      experience: "1-3 years",
      category: "development",
      description:
        "Work on dynamic interfaces with React, Tailwind, and modern JS frameworks. Strong UX focus preferred.",
      requirements: [
        "1-3 years of experience with React.js and Next.js",
        "Strong understanding of JavaScript ES6+",
        "Experience with Tailwind CSS or similar CSS frameworks",
        "Knowledge of responsive design principles",
        "Familiarity with Git version control",
      ],
      responsibilities: [
        "Develop user-facing features using React.js and Next.js",
        "Collaborate with designers to implement pixel-perfect UIs",
        "Optimize applications for maximum speed and scalability",
        "Participate in code reviews and maintain code quality",
        "Work closely with backend developers to integrate APIs",
      ],
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "TypeScript",
      ],
      salary: {
        min: 40000,
        max: 80000,
        currency: "BDT",
        period: "monthly",
      },
      postedDate: "2024-01-15",
      applicationDeadline: "2024-03-15",
      isActive: true,
    },
  ];
}

async function getCareersData() {
  const [openPositions, companyBenefits] = await Promise.all([
    getOpenPositions(),
    getCompanyBenefits(),
  ]);

  return {
    openPositions,
    companyBenefits,
  };
}


export default async function CareersPage() {
      const { openPositions, companyBenefits } = await getCareersData();
  return (
    <>
      <CareersHero />
      <WhyWorkWithUs benefits={companyBenefits} />
      <OpenPositions positions={openPositions} />
      <CompanyCulture />
      <HowToApply />
    </>
  );
}