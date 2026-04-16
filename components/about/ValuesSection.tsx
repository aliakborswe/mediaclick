import { Lightbulb, Handshake, Cog, TrendingUp, Gem } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve so you can too.",
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "We build long-term relationships based on trust.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Cog,
    title: "Efficiency",
    description: "We deliver on time and on budget.",
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We succeed only when our clients do.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export default function ValuesSection() {
  return (
    <section className='bg-linear-to-b from-background to-primary/5 relative overflow-hidden '>
      {/* Decorative background elements */}
      <div className='absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-2xl'></div>
      <div className='absolute bottom-10 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-2xl'></div>

      <Wrapper className='relative z-10'>
        <div className='mb-16'>
          <SectionTitle
            title='Values'
            titleClass='bg-primary/10 text-primary'
            icon={<Gem className='w-4 h-4' />}
            subtitle='Our Values'
            description='The principles that guide everything we do at Media-Click.'
            centered
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {values.map((value, index) => (
            <div key={index} className='h-full'>
              <Card className='h-full bg-card border-border hover:border-primary/30 transition-all hover:shadow-premium'>
                <CardContent className='p-6 flex flex-col items-center text-center h-full'>
                  <div
                    className={`w-16 h-16 rounded-full ${value.color} flex items-center justify-center mb-6`}
                  >
                    <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    {value.title}
                  </h3>
                  <p className='text-muted-foreground'>{value.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
