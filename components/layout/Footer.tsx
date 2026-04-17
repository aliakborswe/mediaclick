"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { newsletterSchema } from "@/lib/schemas";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import { Mail, MapPin, Phone } from "lucide-react";
import Wrapper from "../shared/Wrapper";

const SERVICES = [
  { href: "/services/seo", label: "SEO Services" },
  { href: "/services/ppc", label: "PPC Advertising" },
  { href: "/services/web-design", label: "Web Design" },
  { href: "/services/ecommerce", label: "E-Commerce" },
  { href: "/services/social-media", label: "Social Media" },
  { href: "/services/interactive", label: "Interactive Media" },
];

const COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/company/mediaclicking",
    label: "LinkedIn",
    icon: "/icons/linkedin.svg",
  },
  {
    href: "https://twitter.com/mediaclicking",
    label: "Twitter",
    icon: "/icons/twitter.svg",
  },
  {
    href: "https://facebook.com/mediaclicking",
    label: "Facebook",
    icon: "/icons/facebook.svg",
  },
  {
    href: "https://instagram.com/mediaclicking",
    label: "Instagram",
    icon: "/icons/instagram.svg",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = newsletterSchema.safeParse({ email });
      if (!result.success) {
        setMessage("Please enter a valid email address");
        return;
      }

      // Here you would submit to your backend
      console.log("Newsletter signup:", email);
      setMessage("Thank you for subscribing!");
      setEmail("");

      setTimeout(() => setMessage(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className='w-full mx-auto border-t border-border bg-background'>
      <Wrapper>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Company Info */}
          <div className="space-y-2">
            {/* Logo */}
            <Link href='/' className='flex items-center'>
              <div className='inline-flex items-center gap-1 text-[26px] uppercase tracking-[-0.5px] leading-none'>
                <span className='text-foreground font-semibold'>MEDIA</span>
                <Image
                  src={logo}
                  alt='mediaclick-logo'
                  width={500}
                  height={500}
                  className='h-9 w-auto shrink-0'
                />
                <span className='text-foreground font-semibold'>CLICKING</span>
              </div>
            </Link>
            <p className='text-sm text-muted-foreground mb-6'>
              Your strategic digital media partner for growth-driven solutions.
            </p>
            <div className='space-y-2'>
              <a
                href='tel:+1234567890'
                className='flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'
              >
                <Phone className='h-4 w-4' />
                +1 (234) 567-890
              </a>
              <a
                href='mailto:hello@mediaclicking.com'
                className='flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'
              >
                <Mail className='h-4 w-4' />
                hello@mediaclicking.com
              </a>
              <p className='flex items-start gap-2 text-sm text-muted-foreground'>
                <MapPin className='h-4 w-4 mt-0.5 shrink-0' />
                <span>123 Business Ave, City, State 12345</span>
              </p>
            </div>
            <div className='flex gap-4 mt-5'>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center h-9 w-9 rounded-lg bg-primary/20 hover:bg-primary/50 dark:bg-white/80 dark:hover:bg-white transition-colors'
                  aria-label={social.label}
                >
                  <Image
                    src={social.icon}
                    alt=''
                    width={20}
                    height={20}
                    className='h-5 w-5'
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-bold text-foreground mb-4'>Services</h4>
            <ul className='space-y-2'>
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className='text-sm text-muted-foreground hover:text-primary transition-colors'
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className='text-lg font-bold text-foreground mb-4'>Company</h4>
            <ul className='space-y-2'>
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground hover:text-primary transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className='mb-8'>
              <h3 className='text-2xl font-bold text-foreground mb-2'>
                Stay Updated
              </h3>
              <p className='text-muted-foreground'>
                Get the latest marketing tips and industry insights delivered to
                your inbox.
              </p>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className='mx-auto max-w-md flex gap-2'
            >
              <Input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className='flex-1 border border-border focus:border-0 rounded-lg'
              />
              <Button
                type='submit'
                disabled={isSubmitting}
                className='bg-primary hover:bg-primary-dark'
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            {message && (
              <p
                className={`text-sm text-center mt-3 ${
                  message.includes("valid")
                    ? "text-destructive"
                    : "text-green-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground'>
          <p>
            &copy; {new Date().getFullYear()} MediaClicking. All rights
            reserved.
          </p>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <Link
              href='/privacy'
              className='hover:text-primary transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='hover:text-primary transition-colors'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
