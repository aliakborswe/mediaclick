import { Users, Brain, Heart, LightbulbIcon } from "lucide-react";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";

const cultureItems = [
  {
    icon: Users,
    title: "Teamwork",
    description: "Every project is a team effort.",
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    description: "We grow together through new challenges and ideas.",
  },
  {
    icon: LightbulbIcon,
    title: "Innovation",
    description: "TWe embrace new ideas and creative solutions.",
  },
  {
    icon: Heart,
    title: "Balance",
    description: "We support healthy work-life harmony.",
  },
];

export default function CompanyCulture() {
  return (
    <section className='bg-linear-to-b from-background to-primary/5'>
      <Wrapper>
        <SectionTitle
          title='Our Culture'
          centered
          titleClass='bg-primary/10 text-primary'
          icon={<Heart className='w-4 h-4' />}
          subtitle='What defines us'
          description='At Media-Clicking, we champion a culture of:'
          className='pb-16'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4'>
          {cultureItems.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center group'
            >
              <div className='w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors border border-primary/10'>
                <item.icon className='w-10 h-10 text-primary' />
              </div>
              <h3 className='text-xl font-bold text-foreground mb-3'>
                {item.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
