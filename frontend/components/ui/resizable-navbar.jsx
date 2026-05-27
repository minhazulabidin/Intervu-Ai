"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useRef, useState } from "react";
import useUserStore from "@/zustandStore/userStore";
import { useIntro } from "../intro/IntroProvider";


export const Navbar = ({
  children,
  className
}) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-2 z-90 w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child)}
    </motion.div>
  );
};

export const NavBody = ({
  children,
  className,
  visible
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(16px)" : "blur(0px)",
        backgroundColor: visible
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0)",
        border: visible ? "1px solid rgba(255,255,255,0.12)" : "1px solid transparent",
        boxShadow: visible
          ? "0 10px 30px rgba(0,0,0,0.15)"
          : "none",
        width: visible ? "70%" : "100%",
        y: visible ? 6 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-60 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex opacity-100",
        visible && "bg-neutral-950/80",
        className
      )}>
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick
}) => {
  const [hovered, setHovered] = useState(null);
  const path = usePathname()
  const { user } = useUserStore();

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 lg:flex lg:space-x-2",
        className
      )}>
      {items
        .filter((item) => {
          // dashboard only logged in user er jonno
          if (item.name === "Dashboard" && !user) {
            return false;
          }

          return true;
        })
        .map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className={`relative px-4 py-2 rounded-full text-neutral-300 transition-all duration-300 border border-transparent overflow-hidden ${path === item?.link
              ? "font-bold text-purple-300 bg-white/10 backdrop-blur-md border-purple-500/30 shadow-md shadow-purple-500/20 before:opacity-100"
              : "hover:text-purple-300 hover:bg-white/10 hover:backdrop-blur-md hover:border-white/10 hover:shadow-md hover:shadow-purple-500/10"
              }`}
            key={`link-${idx}`}
            href={item?.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full"
              />
            )}

            <span className="relative z-20">{item.name}</span>
          </Link>
        ))}
    </motion.div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-neutral-950/80",
        className
      )}>
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className
}) => {
  return (
    <div
      className={cn("flex w-full flex-row items-center justify-between", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg  px-4 py-8 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] bg-neutral-950",
            className
          )}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick
}) => {
  return isOpen ? (
    <IconX className="text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white" onClick={onClick} />
  );
};

export const NavbarLogo = ({ mobile = false }) => {
  const { introFinished } = useIntro();

  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center gap-2 px-2 py-1"
    >
      <motion.div
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 48 48"
        >
          <polygon
            fill="#AC6AFF"
            points="38.831 15.118 38.823 9.905 29.203 3.617 29.203 7.639 35.548 11.817 35.553 15.019 32.605 17.015 30.594 15.548 30.594 13.063 27.317 10.821 27.317 15.344 22.122 18.532 22.113 26.952 18.44 29.02 16.554 27.543 16.554 25.105 18.786 23.576 18.786 23.556 18.786 19.783 14.769 22.471 11.698 20.473 8.893 22.31 13.277 25.311 13.277 27.154 10.117 29.291 6.894 27.109 6.894 19.848 11.679 16.608 11.684 13.492 17.82 17.445 22.978 14.011 19.834 12.177 17.776 13.564 13.294 10.6 18.349 7.654 22.727 10.22 22.727 6.393 18.354 3.828 8.411 9.625 8.404 14.84 3.617 18.082 3.617 28.874 8.404 32.116 8.411 37.332 18.032 43.617 18.032 39.598 11.686 35.42 11.681 32.218 14.629 30.222 16.64 31.689 16.64 34.174 19.917 36.416 19.917 31.892 25.186 28.705 25.245 20.285 28.795 18.217 30.68 19.694 30.68 22.131 28.448 23.661 28.448 23.68 28.448 27.454 32.465 24.765 35.536 26.764 38.341 24.927 33.958 21.923 33.958 20.083 37.117 17.946 40.34 20.128 40.34 27.389 35.556 30.629 35.551 33.744 29.414 29.79 24.256 33.201 27.401 35.033 29.459 33.672 33.941 36.636 28.886 39.583 24.507 37.016 24.507 40.842 28.881 43.406 38.823 37.612 38.831 32.396 43.617 29.154 43.617 18.361"
          />
        </svg>
      </motion.div>

      <motion.span
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: introFinished ? 1 : 0,
          x: introFinished ? 0 : -20,
        }}
        transition={{
          delay: 0.4,
          duration: 0.2,
        }}
        className="font-medium text-white"
      >
        Intervu AI
      </motion.span>
    </Link>
  );
};



export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}>
      {children}
    </Tag>
  );
};
