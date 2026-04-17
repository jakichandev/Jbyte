interface HeadingType {
  className?: string;
  children?: React.ReactNode;
  level?: "primary" | "secondary" | "tertiary" | "custom";
  color?: "aqua" | "sunsetEnd" | "white";
  weight?: "bold" | "normal" | "thin";
  fontFamily?: "fontH" | "fontP";
  tone?: "strong" | "muted" | "subtle";
  uppercase?: boolean;
  as?: "h1" | "h2" | "h3" | "h4";
}

const HEADING_STYLES = {
  primary: "text-4xl md:text-5xl text-center",
  secondary: "text-3xl md:text-4xl text-left",
  tertiary: "text-2xl md:text-3xl text-left",
  custom: "",
  aqua: "text-theme-aqua-400",
  sunsetEnd: "text-theme-sunset-end-400",
  white: "text-white",
  bold: "font-normal",
  normal: "font-normal",
  thin: "font-light",
  fontH: "font-headings-2",
  fontP: "font-p-1",
  strong: "opacity-100",
  muted: "opacity-75",
  subtle: "opacity-60",
};

export const Heading: React.FC<HeadingType> = ({
  className = "",
  children,
  level = "primary",
  color = "aqua",
  weight = "bold",
  fontFamily = "fontH",
  tone = "strong",
  uppercase = true,
  as: Tag = "h2",
}) => {
  return (
    <Tag
      className={`${uppercase ? "uppercase" : ""} ${
        HEADING_STYLES[fontFamily]
      } ${HEADING_STYLES[color]} ${HEADING_STYLES[level]} ${
        HEADING_STYLES[weight]
      } ${HEADING_STYLES[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
};
