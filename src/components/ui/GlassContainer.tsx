import React from "react";

interface GlassContainerProps {
  opacity?: "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90";
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "card" | "hero" | "image" | "custom";
  hover?: boolean;
  backdropBlur?: boolean;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  opacity = "50",
  children,
  className = "",
  variant = "default",
  hover = false,
  backdropBlur = true,
}) => {
  const baseStyles =
    "relative z-1 overflow-hidden rounded-2xl border-3 border-theme-aqua-100/10";

  const variants = {
    default: "p-6",
    card: "p-4 transition-all duration-300",
    hero: "p-8 md:p-12",
    image: "p-0",
    custom: "",
  };

  const hoverStyles = hover ? "hover:border-white/40 hover:scale-[1.02]" : "";

  const backgroundOpacity: Record<string, string> = {
    "20": "opacity-20",
    "30": "opacity-30",
    "40": "opacity-40",
    "50": "opacity-50",
    "60": "opacity-60",
    "70": "opacity-70",
    "80": "opacity-80",
    "90": "opacity-90",
  };

  return (
    <div
      id="glassContainer"
      className={`${baseStyles} ${
        variants[variant]
      } ${hoverStyles} ${className} after:${
        backgroundOpacity[opacity]
      } after:background-gradient-to-br after:absolute after:inset-0 after:bg-gradient-to-br after:from-theme-aqua-800/30 after:via-theme-aqua-800/60 after:to-theme-gray-900/80 ${
        backdropBlur ? "after:backdrop-blur-lg" : ""
      } after:z-0`}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
