import React from "react";

interface GlassContainerProps {
  opacity?: "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90";
  children: React.ReactNode;
  className?: string;
  variant?:
    | "plain"
    | "soft"
    | "highlight"
    | "default"
    | "card"
    | "hero"
    | "image"
    | "custom";
  hover?: boolean;
  backdropBlur?: boolean;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = "",
  variant = "default",
  hover = false,
  backdropBlur = true,
}) => {
  const baseStyles = "relative z-1 overflow-hidden rounded-lg";

  const variants = {
    plain: "border border-white/[0.07] bg-white/[0.025]",
    soft:
      "border border-white/12 bg-gradient-to-br from-white/[0.08] via-theme-aqua-900/10 to-theme-gray-950/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
    highlight:
      "border border-theme-aqua-300/35 bg-gradient-to-br from-theme-aqua-400/15 via-theme-aqua-900/25 to-theme-gray-950/75 shadow-[0_0_34px_rgba(34,221,202,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]",
    default:
      "border border-white/12 bg-gradient-to-br from-white/[0.08] via-theme-aqua-900/10 to-theme-gray-950/35 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
    card:
      "border border-white/12 bg-gradient-to-br from-white/[0.08] via-theme-aqua-900/10 to-theme-gray-950/35 p-4 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
    hero:
      "border border-theme-aqua-300/35 bg-gradient-to-br from-theme-aqua-400/15 via-theme-gray-950/45 to-theme-gray-950/80 p-8 md:p-12 shadow-[0_0_44px_rgba(34,221,202,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]",
    image:
      "border border-theme-aqua-300/35 bg-gradient-to-br from-theme-aqua-400/10 via-theme-gray-950/40 to-theme-gray-950/80 p-0 shadow-[0_0_44px_rgba(34,221,202,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]",
    custom: "border border-white/[0.07] bg-white/[0.025]",
  };

  const hoverStyles = hover
    ? "transition-all duration-300 hover:-translate-y-1 hover:border-theme-aqua-300/30"
    : "";

  const blurStyles = backdropBlur ? "backdrop-blur-md" : "";

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${blurStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
