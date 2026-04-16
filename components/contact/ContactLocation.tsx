import { MapPin, Clock, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";
import { Button } from "../ui/button";

export default function ContactLocation() {
  const gmapUrl =
    "https://www.google.com/maps";

  return (
    <section className='bg-linear-to-b from-background to-primary/5 '>
      <Wrapper className='py-0'>
        <SectionTitle
          title='Our Location'
          titleClass='bg-primary/10 text-primary'
          centered
          bar
          icon={<MapPin className='w-4 h-4' />}
          subtitle='Visit Our Office'
          description="Visit us at our office for a face-to-face meeting or consultation.
            We're located in the heart of Dhaka's tech district."
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>
          {/* Office Information */}
          <div className='space-y-8'>
            <Card className='border-border hover:border-primary/30 transition-all hover:shadow-premium bg-card h-full flex flex-col'>
              <CardHeader>
                <CardTitle className='text-3xl text-primary flex items-center gap-3 font-bold'>
                  <MapPin className='w-8 h-8' />
                  Dhaka HQ
                </CardTitle>
                <CardDescription className='text-muted-foreground text-lg'>
                  Our main operational hub
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-8 pt-6 flex-grow'>
                <div className='space-y-3'>
                  <div className='font-bold text-foreground text-xl'>
                    Official Address:
                  </div>
                  <div className='text-muted-foreground text-lg leading-relaxed'>
                    Road #8, Block #B, Section #13,
                    <br />
                    Mirpur 1216,
                    <br />
                    Dhaka, Bangladesh
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='font-bold text-foreground text-xl flex items-center gap-2'>
                    <Clock className='w-5 h-5 text-primary' />
                    Office Hours:
                  </div>
                  <div className='text-muted-foreground space-y-3 text-lg'>
                    <div className='flex justify-between border-b border-border/50 pb-2'>
                      <span>Monday - Friday:</span>
                      <span className='font-semibold text-foreground'>
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className='flex justify-between border-b border-border/50 pb-2'>
                      <span>Saturday:</span>
                      <span className='font-semibold text-foreground'>
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span>Sunday:</span>
                      <span className='font-semibold text-destructive'>
                        Closed
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className='pt-6 border-t border-border/50'>
                <Button
                  asChild
                  variant='outline'
                  className='w-full gap-2 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all'
                >
                  <a href={gmapUrl} target='_blank' rel='noopener noreferrer'>
                    <ExternalLink className='w-4 h-4' />
                    Get Directions on Google Maps
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Map */}
          <div className='h-[400px] lg:h-auto min-h-[400px] relative rounded-2xl overflow-hidden border border-border group shadow-premium transition-all pointer-events-none md:pointer-events-auto'>
            <iframe
              src='https://www.google.com/maps/embed?7373017445731!3d23.807940586566602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78d1fd93183%3A0x8f57a18c40c62f0d!2sMedia-Click!5e0!3m2!1sen!2sbd!4v1752850359678!5m2!1sen!2sbd'
              className='w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-auto'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
            <a
              href={gmapUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute inset-x-0 bottom-0 bg-linear-to-t from-background/90 to-transparent p-6 flex flex-col gap-2'
            >
              <p className='text-sm font-bold text-primary flex items-center gap-2'>
                <MapPin className='w-4 h-4' />
                View Larger Map
              </p>
              <p className='text-xs text-muted-foreground'>
                Click to open navigation in new tab
              </p>
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
