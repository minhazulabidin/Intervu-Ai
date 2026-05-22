"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  InformationCircleIcon,
  Alert02Icon,
  MultiplicationSignCircleIcon,
  Loading03Icon
} from "@hugeicons/core-free-icons"

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"

      // ICON SYSTEM (unchanged, only color polish via class)
      icons={{
        success: (
          <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} className="size-4 text-green-400" />
        ),
        info: (
          <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} className="size-4 text-blue-400" />
        ),
        warning: (
          <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} className="size-4 text-yellow-400" />
        ),
        error: (
          <HugeiconsIcon icon={MultiplicationSignCircleIcon} strokeWidth={2} className="size-4 text-red-400" />
        ),
        loading: (
          <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} className="size-4 animate-spin text-purple-400" />
        ),
      }}

      // FUTURISTIC GLASS THEME TOKENS
      style={{
        "--normal-bg": "rgba(255,255,255,0.06)",
        "--normal-text": "rgba(255,255,255,0.85)",
        "--normal-border": "rgba(255,255,255,0.12)",
        "--normal-shadow": "0 10px 30px rgba(168,85,247,0.15)",

        "--success-bg": "rgba(34,197,94,0.10)",
        "--info-bg": "rgba(59,130,246,0.10)",
        "--warning-bg": "rgba(234,179,8,0.10)",
        "--error-bg": "rgba(239,68,68,0.10)",

        "--radius": "12px",
      }}

      toastOptions={{
        classNames: {
          toast: `
            backdrop-blur-md
            border border-white/10
            shadow-lg
            text-sm
            font-medium
            rounded-xl
          `,
          title: "text-white/90",
          description: "text-white/60",
          actionButton: "bg-white/10 hover:bg-white/20 text-white",
          cancelButton: "bg-white/5 hover:bg-white/10 text-white/70"
        },
      }}

      {...props}
    />
  );
}

export { Toaster }