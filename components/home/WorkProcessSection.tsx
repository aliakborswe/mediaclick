import {
  PhoneCall,
  ClipboardList,
  Code,
  TestTube,
  Rocket,
  RefreshCcwDot,
} from "lucide-react";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";

const processSteps = [
  {
    id: 1,
    title: "Discovery Call",
    description: "Understand your vision, needs, and goals.",
    icon: PhoneCall,
  },
  {
    id: 2,
    title: "Planning & Strategy",
    description: "Define roadmap, technologies, and timeline.",
    icon: ClipboardList,
  },
  {
    id: 3,
    title: "Design & Development",
    description:
      "UI/UX design and agile development in sync with your feedback.",
    icon: Code,
  },
  {
    id: 4,
    title: "Testing & QA",
    description: "Ensure flawless functionality across all devices.",
    icon: TestTube,
  },
  {
    id: 5,
    title: "Launch & Support",
    description:
      "Go live with confidence — and get ongoing support and updates.",
    icon: Rocket,
  },
];

export default function WorkProcessSection() {
  return (
    <section className='w-full bg-linear-to-b from-background to-primary/5'>
      <Wrapper>
        <SectionTitle
          bar
          title='How We Work'
          subtitle='Our Process'
          description='A proven methodology that delivers results, from initial strategy to final optimization.'
          centered
        />

        <div className='relative md:mt-16'>
          {/* Process line */}
          <div className='hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 z-0'></div>

          {/* Process steps */}
          <div className='space-y-0 md:space-y-10 relative z-10'>
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col-reverse md:flex-row items-center text-center  ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-10 lg:gap-16`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <h3 className='text-2xl font-bold text-primary mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-muted-foreground'>{step.description}</p>
                </div>

                <div className='shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/20'>
                  <step.icon className='w-8 h-8 text-primary-foreground' />
                </div>

                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  } md:hidden lg:block`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
