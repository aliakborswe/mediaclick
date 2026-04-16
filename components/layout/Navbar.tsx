"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/svg/logo.svg";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/portfolio" },
  {
    name: "Services",
    href: "/services",
    // subItems: [
    //   { name: "SEO Services", href: "/seo" },
    //   { name: "PPC Advertising", href: "/ppc" },
    //   { name: "Web Design", href: "/web-design" },
    //   { name: "E-Commerce Solutions", href: "/e-commerce" },
    //   { name: "Social Media Marketing", href: "/social-media" },
    //   { name: "Interactive Media", href: "/interactive-media" },
    // ],
  },
  {name : "Join Us", href: "/join-us", subItems: [
    { name: "Careers", href: "/join-us/careers" },
    { name: "Internships", href: "/join-us/internships" },
  ]},
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, subItems?: { href: string }[]) => {
    if (pathname === href) return true;
    if (subItems && subItems.some((si) => pathname.startsWith(si.href))) {
      return true;
    }
    return false;
  };

  // Add new state to track dropdown open state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Modified navbar scrolling effect
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // New: Track if scrolled for home page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Show navbar when scrolling up or near top
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Close dropdown when scrolling
      if (openDropdown) {
        setOpenDropdown(null);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, openDropdown]);

  // Close the sheet when clicking menu and submenu link
  const handleLinkClick = () => {
    if (open) {
      setOpen(false);
    }
    if (openDropdown) {
      setOpenDropdown(null);
    }
  };

  // Handle mouse hover for opening and closing dropdown
  const handleMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Render navigation links (used for both desktop and mobile)
  const renderNavLinks = () => {
    return (
      <div className='flex flex-col items-start gap-5 lg:flex-row lg:items-center xl:gap-9 '>
        {navItems.map((item) => (
          <div
            key={item.name}
            className='relative'
            onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
            onMouseLeave={handleMouseLeave}
          >
            {item.subItems ? (
              // For items with dropdown
              <div className='cursor-pointer'>
                <span
                  className={`font-semibold text-[16px] transition-all duration-300 hover:text-accent ${
                    item.subItems?.some((si) => pathname.startsWith(si.href))
                      ? "text-accent"
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </span>
                <div
                  className={`absolute -left-2 top-5 z-50 bg-transparent rounded-2xl border-none ${
                    openDropdown === item.name
                      ? "block animate-in fade-in slide-in-from-top-2"
                      : "hidden"
                  }`}
                >
                  <div className='flex flex-col gap-3 mt-1.5 lg:mt-7.5 p-4 rounded-xl bg-background/95 backdrop-blur-md border border-border/50 shadow-premium'>
                    {item.subItems.map((subItem) => {
                      const isChildActive = pathname.startsWith(subItem.href);
                      return (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={handleLinkClick}
                          className={`font-semibold text-[15px] transition-all duration-300 hover:text-accent whitespace-nowrap`}
                        >
                          <span
                            className={`font-semibold transition-all duration-300 hover:text-accent ${
                              isChildActive
                                ? "text-primary"
                                : "text-foreground/80"
                            }`}
                          >
                            {subItem.name}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              // For items without dropdown
              <Link href={item.href} onClick={handleLinkClick}>
                <span
                  className={`font-semibold text-[16px] transition-all duration-300 hover:text-accent ${
                    isActive(item.href, item.subItems)
                      ? "text-accent"
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            )}
          </div>
        ))}
        <ModeToggle />
        <Link href='/contact-us' onClick={handleLinkClick} className=''>
          <Button
            variant='default'
            className={`font-semibold p-5 transition-all duration-300 shadow-premium hover:shadow-primary/20 hover:scale-[1.02] ${
              isActive("/contact") ? "" : ""
            }`}
          >
            Get Started
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <>
      <header
        className={`w-full h-19.5 fixed flex items-center top-0 left-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl border-b border-border/40
        ${isVisible ? "translate-y-0" : "-translate-y-full"} ${
          pathname === "/"
            ? scrolled
              ? "shadow-sm"
              : "border-transparent"
            : "shadow-sm"
        }
      `}
      >
        <nav
          id='header'
          className={`container mx-auto px-4 flex items-center justify-between relative`}
        >
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

          {/* Desktop Nav */}
          <div className='hidden lg:block'>{renderNavLinks()}</div>

          {/* Right Actions */}
          <div className='block lg:hidden'>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <div className='text-foreground'>
                  {open ? (
                    <X className='h-8 w-8' />
                  ) : (
                    <Menu className='h-8 w-8' />
                  )}
                </div>
              </SheetTrigger>
              <SheetTitle>{""}</SheetTitle>
              <SheetDescription>{""}</SheetDescription>
              <SheetContent
                side='left'
                className='w-3/4 sm:w-1/2 rounded-r bg-background text-foreground border-border overflow-auto'
              >
                <div className='flex flex-col gap-2 mt-10 mx-2.5'>
                  {renderNavLinks()}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
