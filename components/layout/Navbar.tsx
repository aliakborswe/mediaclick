"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
  {
    name: "Join Us",
    href: "/join-us",
    subItems: [
      { name: "Careers", href: "/join-us/careers" },
      { name: "Internships", href: "/join-us/internships" },
    ],
  },
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

  // Add state for mobile dropdowns
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

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
      <div className='flex flex-col items-start gap-5 lg:flex-row lg:items-center xl:gap-9 w-full'>
        {navItems.map((item) => (
          <div
            key={item.name}
            className='relative w-full lg:w-auto'
            onMouseEnter={() =>
              item.subItems &&
              typeof window !== "undefined" &&
              window.innerWidth >= 1024 &&
              handleMouseEnter(item.name)
            }
            onMouseLeave={() =>
              typeof window !== "undefined" &&
              window.innerWidth >= 1024 &&
              handleMouseLeave()
            }
          >
            {item.subItems ? (
              // For items with dropdown
              <div className='w-full lg:w-auto'>
                <div
                  className='flex items-center justify-between w-full lg:w-auto cursor-pointer group'
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === item.name ? null : item.name,
                    )
                  }
                >
                  <span
                    className={`font-semibold text-lg lg:text-[16px] transition-all duration-300 group-hover:text-primary ${
                      item.subItems?.some((si) => pathname.startsWith(si.href))
                        ? "text-primary"
                        : "text-foreground/80"
                    }`}
                  >
                    {item.name}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 lg:hidden ${
                      mobileDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Desktop Dropdown */}
                <div
                  className={`hidden lg:block absolute -left-2 top-5 z-50 bg-transparent rounded-2xl border-none ${
                    openDropdown === item.name
                      ? "animate-in fade-in slide-in-from-top-2"
                      : "invisible opacity-0"
                  }`}
                >
                  <div className='flex flex-col gap-3 mt-7.5 p-4 rounded-xl bg-background/95 backdrop-blur-md border border-border/50 shadow-premium'>
                    {item.subItems.map((subItem) => {
                      const isChildActive = pathname.startsWith(subItem.href);
                      return (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={handleLinkClick}
                          className={`font-semibold text-[15px] transition-all duration-300 hover:text-primary whitespace-nowrap ${
                            isChildActive
                              ? "text-primary"
                              : "text-foreground/80"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Dropdown */}
                <div
                  className={`lg:hidden overflow-hidden transition-all duration-300 ${
                    mobileDropdown === item.name ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <div className='flex flex-col gap-3 pl-4 border-l-2 border-primary/20'>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={handleLinkClick}
                        className={`font-semibold text-base transition-all duration-300 ${
                          pathname.startsWith(subItem.href)
                            ? "text-primary"
                            : "text-foreground/60"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // For items without dropdown
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className='w-full lg:w-auto block'
              >
                <span
                  className={`font-semibold text-lg lg:text-[16px] transition-all duration-300 hover:text-primary ${
                    isActive(item.href, item.subItems)
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            )}
          </div>
        ))}
        <div className='lg:hidden w-full border-t border-border/50 my-2 pt-4 flex items-center justify-between'>
          <span className='text-sm font-medium text-muted-foreground'>
            Switch Theme
          </span>
          <ModeToggle />
        </div>
        <div className='hidden lg:block'>
          <ModeToggle />
        </div>
        <Link
          href='/contact'
          onClick={handleLinkClick}
          className='w-full lg:w-auto'
        >
          <Button
            variant='default'
            className='w-full lg:w-auto font-semibold p-5 transition-all duration-300 shadow-premium hover:shadow-primary/20 hover:scale-[1.02]'
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
                <button
                  className='text-foreground p-2 rounded-md hover:bg-muted transition-colors'
                  aria-label='Toggle Menu'
                >
                  <Menu className='h-7 w-7' />
                </button>
              </SheetTrigger>
              <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
              <SheetDescription className='sr-only'>
                Access website pages and settings
              </SheetDescription>
              <SheetContent
                side='right'
                className='w-[280px] sm:w-[350px] p-0 bg-background text-foreground border-l border-border'
              >
                <div className='flex flex-col h-full'>
                  <div className='p-6 border-b border-border/50'>
                    <Link
                      href='/'
                      onClick={handleLinkClick}
                      className='flex items-center gap-2'
                    >
                      <div className='inline-flex items-center gap-1 text-xl uppercase font-bold text-foreground'>
                        <span>MEDIA</span>
                        <span className='text-primary'>CLICK</span>
                      </div>
                    </Link>
                  </div>
                  <div className='flex-1 overflow-y-auto p-6'>
                    {renderNavLinks()}
                  </div>
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
