//import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import HeroContent from "../shared/HeroContent";
import NextSection from "../shared/NextSection";
import Wrapper from "../shared/Wrapper";

export default function ContactHero() {
  return (
    <section className='relative h-auto min-h-[50vh] bg-background pt-24 lg:pt-32 flex items-center justify-center overflow-hidden'>
      <Wrapper>
        <div className='text-center max-w-4xl mx-auto'>
          <HeroContent
            title='Contact'
            cTitle='Us'
            subTitle="We'd Love to Hear From You!"
            description=", we're always ready to assist you. Whether you have
              a question, need support, or want to discuss your next project,
              we're just a message away. Let us help you build something
              great!"
            dClassName='mb-8'
            dStrong='Media-Click'
            prefix='At'
          />
          <div className='w-full h-10 relative flex items-center justify-center'>
            <NextSection
              nextSectionId='#contact-option'
              className='absolute -bottom-6 z-20'
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
