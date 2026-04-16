import { Button } from "@/components/ui/button";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";

export default function ClosingCta() {
  return (
    <section className='bg-background'>
      <Wrapper>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl md:text-5xl font-bold text-foreground mb-6'>
            Meet Media-Click Your Digital Growth Partner
          </h2>
          <p className='text-muted-foreground mb-10 text-lg leading-relaxed'>
            We&#39;re not just a service provider, we&#39;re your technical
            partner in progress. From strategy and development to optimization
            and support, we deliver performance that matters.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Link href='/contact'>
              <Button
                size='lg'
                variant='default'
                className='px-8 shadow-premium'
              >
                Contact Us
              </Button>
            </Link>
            <Link href='/services'>
              <Button
                size='lg'
                variant='secondary'
                className='px-8 shadow-premium border-border'
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
