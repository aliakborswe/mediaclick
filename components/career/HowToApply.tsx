import { Mail } from "lucide-react";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";

export default function HowToApply() {
  return (
    <section className='bg-background'>
      <Wrapper>
        <div className='max-w-4xl mx-auto'>
          <SectionTitle
            centered
            title='How to Apply'
            titleClass='bg-primary/10 text-primary'
            icon={<Mail className='w-4 h-4' />}
            subtitle='Ready to join?'
            description="It's simple! Just email your resume, GitHub/Portfolio links,
              and desired role to:"
            className='pb-12'
          />
          <div className='bg-primary/5 rounded-2xl p-10 text-center border border-primary/10 shadow-premium'>
            <div className='w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Mail className='w-10 h-10 text-primary' />
            </div>
            <a
              href='mailto:career@Media-Clicking.com'
              className='text-2xl md:text-4xl font-bold text-primary hover:text-primary/80 transition-all block mb-4'
            >
              career@Media-Clicking.com
            </a>
            <div className='inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold'>
              Subject: Application for [Job Title]
            </div>
          </div>

          <div className='text-center mt-24 space-y-6'>
            <h3 className='text-3xl md:text-5xl font-extrabold text-foreground tracking-tight'>
              Let&apos;s Build the Future,{" "}
              <span className='text-primary'>Together.</span>
            </h3>
            <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
              Be part of a team that builds with purpose and passion. At
              Media-Clicking, your career isn&apos;t just a job — it&apos;s a
              journey.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
