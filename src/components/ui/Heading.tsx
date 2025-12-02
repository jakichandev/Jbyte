interface HeadingType {
  className?: string;
  children?: React.ReactNode;
  level?: "primary" | "secondary" | "tertiary" | "custom";
  color?: "aqua" | "sunsetEnd";
  weight?: "bold" | "normal" | "thin";
  fontFamily?: "fontH" | "fontP";
}

const HEADING_STYLES = {
  primary: "text-4xl md:text-5xl text-center",
  secondary: "text-3xl md:text-4xl text-left",
  tertiary: "text-2xl md:text-3xl text-left",
  custom: "",
  aqua: "text-theme-aqua-400",
  sunsetEnd: "text-theme-sunset-end-400",
  bold: "font-bold",
  normal: "font-normal",
  thin: "font-thin",
  fontH: "font-headings-2",
  fontP: "font-p-1",
};

export const Heading: React.FC<HeadingType> = ({
  className = "",
  children,
  level = "primary",
  color = "aqua",
  weight = "bold",
  fontFamily = "fontH",
}) => {
  return (
    <h2
      className={`uppercase ${HEADING_STYLES[fontFamily]} ${HEADING_STYLES[color]} ${HEADING_STYLES[level]} ${HEADING_STYLES[weight]} ${className}`}
    >
      {children}
    </h2>
  );
};
