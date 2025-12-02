type SectionProps = {
  children: React.ReactNode;
  extraClasses?: string;
  custom?: boolean;
  paddingY?: "small" | "default" | "large" | "custom";
};

const SECTION_STYLES = {
  DEFAULT: "px-sections-mobile md:px-sections box-border" as const,
  PY: {
    default: "py-12 md:py-22" as const,
    small: "py-8" as const,
    large: "py-26 md:py-30" as const,
    custom: "" as const,
  },
};

export const Section = ({
  children,
  extraClasses,
  custom = false,
  paddingY = "default",
}: SectionProps) => {
  return (
    <section // Force re-mount dell'animazione
      className={
        custom
          ? `${extraClasses}`
          : `${SECTION_STYLES.DEFAULT} ${SECTION_STYLES.PY[paddingY]} ${extraClasses}`
      }
    >
      {children}
    </section>
  );
};
