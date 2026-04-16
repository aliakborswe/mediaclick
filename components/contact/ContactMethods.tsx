import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Wrapper from "../shared/Wrapper";
import SectionTitle from "../shared/SectionTitle";

const contactMethods = [
  {
    category: "Email Us",
    icon: Mail,
    contacts: [
      {
        label: "General Inquiries",
        email: "contact@Media-Click.com",
        description: "Questions about our services",
      },
      {
        label: "Support",
        email: "support@Media-Click.com",
        description: "Technical assistance and help",
      },
      {
        label: "Careers",
        email: "career@Media-Click.com",
        description: "Job applications and opportunities",
      },
    ],
  },
  {
    category: "Call Us",
    icon: Phone,
    contacts: [
      {
        label: "Phone",
        email: "+8801804555186",
        description:
          "Available Saturday to Thursday, 8:00 AM - 10:00 PM (UTC+6)",
      },
      {
        label: "WhatsApp",
        email: "+8801804555186",
        description: "Message us on WhatsApp 24/7",
      },
    ],
  },
];

export default function ContactMethods() {
  return (
    <section
      id='contact-option'
      className='bg-linear-to-b from-primary/5 to-background'
    >
      <Wrapper>
        <SectionTitle
          title='Get In Touch'
          titleClass='bg-primary/10 text-primary'
          centered
          bar
          icon={<Mail className='w-4 h-4' />}
          subtitle='Multiple Ways to Reach Us'
          description='We offer multiple ways to reach us. Choose the one that works best
            for you!'
          className='mb-16'
        />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className='border-border hover:border-primary/30 transition-all hover:shadow-premium bg-card'
            >
              <CardHeader>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
                    <method.icon className='w-6 h-6 text-primary' />
                  </div>
                  <CardTitle className='text-2xl text-primary font-bold'>
                    {method.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className='space-y-4'>
                {method.contacts.map((contact, contactIndex) => (
                  <div
                    key={contactIndex}
                    className='border-l-4 border-primary/20 pl-4 py-1'
                  >
                    <div className='font-bold text-foreground mb-1'>
                      {contact.label}
                    </div>
                    <div className='text-base sm:text-lg font-semibold text-primary mb-2 break-all sm:break-normal'>
                      {contact.email}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {contact.description}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
