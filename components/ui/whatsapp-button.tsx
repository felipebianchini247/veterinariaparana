"use client";

import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

interface WhatsAppButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
  variant?: "solid" | "outline";
}

export function WhatsAppButton({
  className,
  size = "sm",
  text = SITE_CONFIG.whatsappText,
  variant = "solid",
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: "min-h-11 px-5 py-2.5 text-sm",
    md: "min-h-11 px-5 py-2.5 text-sm",
    lg: "min-h-11 px-5 py-2.5 text-sm",
  };

  const variantClasses = {
    solid:
      "bg-[#9b6fc8] hover:bg-[#8a5fc0] text-white shadow-md hover:shadow-lg",
    outline:
      "border-2 border-[#9b6fc8] text-[#9b6fc8] hover:bg-[#9b6fc8] hover:text-white",
  };

  return (
    <a
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-200 active:scale-95",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 shrink-0 fill-current"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.59 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.46-8.41ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.37l-.36-.21-3.76.99 1-3.67-.24-.38a9.84 9.84 0 0 1-1.51-5.25c0-5.45 4.44-9.89 9.91-9.89 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.46-4.44 9.89-9.89 9.89Zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.24-.46-2.37-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37s-1.05 1.03-1.05 2.52 1.08 2.93 1.23 3.13c.15.2 2.11 3.23 5.12 4.53.71.31 1.27.49 1.71.62.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
      </svg>
      {text}
    </a>
  );
}
