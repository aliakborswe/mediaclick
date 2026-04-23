"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Briefcase,
  Lightbulb,
  Phone,
  Building2,
  UserPlus,
  Landmark,
  Zap,
  HeartPulse,
  Laptop,
  Dna,
  Factory,
  Newspaper,
  ShoppingCart,
  RadioTower,
  Plane,
  Shield,
  Users,
  GraduationCap,
  Rocket,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";

const socialLinks = [
  { icon: "twitter", href: "#", label: "Twitter" },
  { icon: "linkedin", href: "#", label: "LinkedIn" },
  { icon: "instagram", href: "#", label: "Instagram" },
  { icon: "facebook", href: "#", label: "Facebook" },
];

const mainNavItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Work", href: "/portfolio", icon: Briefcase },
  { name: "Insights", href: "/blog", icon: Lightbulb },
  { name: "Contact", href: "/contact", icon: Phone },
];

const exploreItems = [
  {
    name: "Industries",
    href: "/services",
    icon: Building2,
    subItems: [
      {
        name: "Banking & Financial Sector",
        href: "/services/finance",
        icon: Landmark,
      },
      {
        name: "Energy, Resources & Utilities",
        href: "/services/energy",
        icon: Zap,
      },
      { name: "Government", href: "/services/government", icon: Building2 },
      { name: "Health Care", href: "/services/health-care", icon: HeartPulse },
      { name: "High Tech", href: "/services/high-tech", icon: Laptop },
      { name: "Insurance", href: "/services/insurance", icon: Shield },
      { name: "Life Science", href: "/services/life-science", icon: Dna },
      { name: "Manufacturing", href: "/services/manufacturing", icon: Factory },
      {
        name: "Media & Information",
        href: "/services/media-information",
        icon: Newspaper,
      },
      {
        name: "Retail & Consumer Product",
        href: "/services/retail",
        icon: ShoppingCart,
      },
      { name: "Telecom", href: "/services/telecom", icon: RadioTower },
      {
        name: "Travel, Logistics & Transportation",
        href: "/services/travel-logistics",
        icon: Plane,
      },
    ],
  },
  {
    name: "Service Offer",
    href: "/services",
    icon: Briefcase,
    subItems: [
      {
        name: "Product Development",
        href: "/services/product-development",
        icon: Rocket,
      },
      {
        name: "Branding & Re-branding",
        href: "/services/branding",
        icon: Building2,
      },
      {
        name: "Customer Insight",
        href: "/services/customer-insight",
        icon: Users,
      },
      {
        name: "Market Research",
        href: "/services/market-research",
        icon: Lightbulb,
      },
      {
        name: "PR & Marketing",
        href: "/services/pr-marketing",
        icon: Newspaper,
      },
      {
        name: "Interactive Media",
        href: "/services/interactive-media",
        icon: Monitor,
      },
      {
        name: "E-Commerce & Web Dev.",
        href: "/services/ecommerce",
        icon: ShoppingCart,
      },
      {
        name: "Media Planning and Buying",
        href: "/services/media-planning",
        icon: RadioTower,
      },
    ],
  },
  {
    name: "Join Us",
    href: "#",
    icon: UserPlus,
    subItems: [
      { name: "Recruiting Process", href: "/careers", icon: GraduationCap },
      { name: "Business Ethics", href: "/careers", icon: Shield },
      { name: "Internship", href: "/internships", icon: Users },
      { name: "Vacancies", href: "/careers", icon: Briefcase },
    ],
  },
];

const SocialIcons = () => (
  <div className='flex items-center gap-2'>
    {socialLinks.map((social) => (
      <a
        key={social.icon}
        href={social.href}
        aria-label={social.label}
        className='flex h-10 w-10 items-center justify-center rounded-xl border border-border/40 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground'
      >
        {social.icon === "twitter" && (
          <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1 9-5.6.01-.116-.028-.23-.088-.34A7.646 7.646 0 0023 3z' />
          </svg>
        )}
        {social.icon === "linkedin" && (
          <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' />
            <circle cx='4' cy='4' r='2' />
          </svg>
        )}
        {social.icon === "instagram" && (
          <svg
            className='h-4 w-4'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            viewBox='0 0 24 24'
          >
            <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
            <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01' />
          </svg>
        )}
        {social.icon === "facebook" && (
          <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />
          </svg>
        )}
      </a>
    ))}
  </div>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setActivePanel(null);
  };

  const togglePanel = (name: string) => {
    setActivePanel((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 flex h-20 w-full items-center border-b bg-background px-4`}
      >
        <div className='container mx-auto flex h-full items-center justify-between'>
          <div className='flex flex-row-reverse items-center justify-between gap-4 w-full lg:w-fit lg:flex-row'>
            <Button
              type='button'
              variant='ghost'
              size='icon'
              onClick={toggleMenu}
              className='h-12 w-12 rounded-xl border border-border/40 bg-muted/40 text-foreground hover:bg-muted'
              aria-label='Open menu'
            >
              {menuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>

            <Link
              href='/'
              className='flex items-center gap-2 uppercase tracking-[-1px]'
            >
              <span className='text-[20px] font-black text-foreground lg:text-[24px]'>
                MEDIA
              </span>
              <span className='relative h-8 w-8 lg:h-9 lg:w-9'>
                <Image
                  src={logo}
                  alt='MediaClicking'
                  fill
                  className='object-contain'
                  priority
                />
              </span>
              <span className='text-[20px] font-black text-foreground lg:text-[24px]'>
                CLICKING
              </span>
            </Link>
          </div>

          <div className='hidden lg:flex lg:items-center lg:gap-6 '>
            <ModeToggle />
            <SocialIcons />
            <div className='h-8 w-px bg-primary/20' />
            <Link href='/contact'>
              <Button className='rounded-full bg-primary px-8 py-6 font-bold text-primary-foreground shadow-xl shadow-primary/20 hover:bg-primary/90'>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`fixed py-8 left-0 right-0 bottom-0 top-20 z-9998 overflow-y-auto bg-background backdrop-blur-[30px] transition-opacity duration-350 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className='container mx-auto px-4 py-6 lg:px-12'>
          <div className='mx-auto max-w-6xl'>
            <div className='mb-8 lg:mb-20'>
              <h3 className='mb-10 hidden text-[12px] font-bold uppercase tracking-widest text-muted-foreground lg:block'>
                Navigation
              </h3>
              <div className='grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-6'>
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className='group flex items-center justify-between border-b border-border/50 py-4 transition-all duration-300 hover:text-primary lg:flex-col lg:justify-center lg:rounded-xl lg:border lg:bg-muted lg:p-10 lg:hover:border-primary/10 lg:hover:shadow-2xl lg:hover:shadow-primary/5 '
                  >
                    <div className='hidden lg:mb-6 lg:flex lg:h-16 lg:w-16 lg:items-center lg:justify-center lg:rounded-[24px] lg:bg-primary/5 lg:transition-all lg:duration-500 lg:group-hover:scale-110 lg:group-hover:bg-primary/10'>
                      <item.icon className='h-8 w-8 text-primary' />
                    </div>
                    <span className='text-xl font-bold text-foreground/80 transition-colors group-hover:text-primary lg:text-base'>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className='pb-8 lg:pb-20'>
              <h3 className='mb-10 hidden text-[12px] font-bold uppercase tracking-widest text-muted-foreground lg:block'>
                Explore
              </h3>
              <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 md:gap-8'>
                {exploreItems.map((item) => {
                  const isOpen = activePanel === item.name;
                  const isWidePanel =
                    item.name === "Industries" || item.name === "Service Offer";

                  return (
                    <div
                      key={item.name}
                      className='relative group'
                      onMouseEnter={() => setActivePanel(item.name)}
                      onMouseLeave={() =>
                        setActivePanel((prev) =>
                          prev === item.name ? null : prev,
                        )
                      }
                    >
                      <button
                        type='button'
                        onClick={() => togglePanel(item.name)}
                        className={`flex w-full items-center justify-between border-b border-border/50 py-4 transition-all duration-300 lg:rounded-2xl lg:border lg:p-10 lg:duration-500 ${
                          isOpen
                            ? "text-primary lg:border-primary/20 lg:bg-muted lg:shadow-2xl lg:shadow-primary/10"
                            : "text-foreground lg:border-border/10 lg:bg-muted/20 lg:hover:border-primary/10 lg:hover:bg-card lg:hover:shadow-xl"
                        }`}
                      >
                        <div className='flex items-center gap-6'>
                          <div
                            className={`hidden h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-500 lg:flex ${isOpen ? "bg-primary text-primary-foreground" : "bg-primary/5 text-primary"}`}
                          >
                            <item.icon className='h-7 w-7' />
                          </div>
                          <span className='text-xl font-bold lg:text-lg'>
                            {item.name}
                          </span>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 lg:duration-500 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`}
                        />
                      </button>

                      <div
                        className={`mt-2 w-full rounded-2xl bg-muted/40 p-1 transition-[opacity,transform] duration-250 lg:absolute lg:bottom-[calc(100%+12px)] lg:left-1/2 lg:z-300 lg:w-[min(92vw,680px)] lg:-translate-x-1/2 lg:translate-y-0 lg:rounded-[20px] lg:border-t-2 lg:border-transparent lg:[border-image:linear-gradient(90deg,transparent,rgba(128,0,128,0.35),transparent)_1] lg:bg-background/95 lg:p-6 lg:shadow-2xl lg:shadow-primary/10 lg:ring-1 lg:ring-primary/10 lg:backdrop-blur-xl ${
                          isWidePanel
                            ? item.name === "Industries"
                              ? "md:min-w-130"
                              : "md:min-w-155"
                            : "md:min-w-90"
                        } ${
                          isOpen
                            ? "block opacity-100 lg:pointer-events-auto lg:translate-y-0"
                            : "hidden opacity-0 lg:block lg:pointer-events-none lg:translate-y-3"
                        }`}
                      >
                        <div className='mb-3 hidden lg:mb-6 lg:block '>
                          <h4 className='text-[11px] font-bold uppercase tracking-[2px] text-primary/60'>
                            {item.name}
                          </h4>
                        </div>

                        <div
                          className={`grid gap-3  ${isWidePanel ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
                        >
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={closeMenu}
                              className='group/sub flex items-center gap-4 rounded-xl p-3.5 transition-all hover:bg-primary/5 lg:rounded-2xl'
                            >
                              <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover/sub:bg-primary/10'>
                                <sub.icon className='h-5 w-5 text-primary' />
                              </div>
                              <span className='text-[14px] font-semibold leading-snug text-foreground/75 transition-colors group-hover/sub:text-primary'>
                                {sub.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
