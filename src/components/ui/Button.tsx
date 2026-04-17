interface ButtonInterface {
  children?: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
  color?: "aqua" | "sunsetEnd";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  as?: "button" | "span";
}

const BtnStyles = {
  base: "group relative isolate overflow-hidden rounded-lg border px-4 py-2 font-p-1 inline-flex items-center justify-center cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-gray-950 disabled:pointer-events-none disabled:opacity-50",
  levels: {
    1: "text-base md:text-lg font-normal",
    2: "text-sm md:text-base font-normal",
    3: "text-sm font-normal",
  },
  colors: {
    aqua:
      "border-theme-aqua-300/35 bg-theme-aqua-500/10 text-theme-aqua-100 shadow-[0_0_22px_rgba(34,221,202,0.12)] hover:-translate-y-0.5 hover:border-theme-aqua-300/60 hover:bg-theme-aqua-500/18 hover:text-white hover:shadow-[0_0_28px_rgba(34,221,202,0.2)] focus-visible:ring-theme-aqua-400",
    sunsetEnd:
      "border-theme-sunset-end-300/40 bg-theme-sunset-end-500/10 text-theme-sunset-end-100 shadow-[0_0_22px_rgba(233,64,22,0.12)] hover:-translate-y-0.5 hover:border-theme-sunset-end-300/70 hover:bg-theme-sunset-end-500/18 hover:text-white hover:shadow-[0_0_28px_rgba(233,64,22,0.2)] focus-visible:ring-theme-sunset-end-400",
  },
  accents: {
    aqua:
      "from-theme-aqua-400/20 via-transparent to-theme-aqua-900/30 group-hover:opacity-100",
    sunsetEnd:
      "from-theme-sunset-end-400/20 via-transparent to-theme-sunset-end-900/30 group-hover:opacity-100",
  },
};

const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  color = "aqua",
  level = 1,
  as = "button",
}: ButtonInterface) => {
  const Component = as;
  const buttonProps = as === "button" ? { onClick, type } : {};

  return (
    <Component
      className={`${BtnStyles.base} ${BtnStyles.levels[level]} ${BtnStyles.colors[color]} ${className}`}
      {...buttonProps}
    >
      <span
        className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-70 transition-opacity duration-200 ${BtnStyles.accents[color]}`}
      />
      <span className="relative z-10 flex items-center justify-center gap-5">
        {children}
      </span>
    </Component>
  );
};

export default Button;
