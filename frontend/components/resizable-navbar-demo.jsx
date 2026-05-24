"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import useUserStore from "@/zustandStore/userStore";

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Upgrade",
      link: "/upgrade",
    },
    {
      name: "How it works?",
      link: "/how-it-works",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const path = usePathname()


  const {user} = useUserStore();
  
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {
              user ? <UserButton /> : <Link href="/sign-in" className="z-50"><Button variant="outline" className="rounded-md border-gray-800/50  text-neutral-300 cursor-pointer hover:text-neutral-100">Sign In</Button></Link>
            }
       </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative text-neutral-300 ${path == item.link && "text-purple-700 font-bold"}`}>
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              {
                user ? <UserButton /> : <Button variant="outline" className="rounded">Sign In</Button>
              }
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}