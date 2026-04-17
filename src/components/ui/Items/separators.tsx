type SeparatorProps = {
  position: "top" | "bottom";
  height?: "sm" | "md" | "lg";
};

const styles = {
  base: "pointer-events-none absolute w-full left-0 z-10",
  position: {
    top: "top-0",
    bottom: "bottom-0",
  },
  gradient: {
    top: "bg-gradient-to-b from-theme-gray-900 to-transparent",
    bottom: "bg-gradient-to-t from-theme-gray-900 to-transparent",
  },
  height: {
    sm: "h-18",
    md: "h-24",
    lg: "h-32",
  },
};

export const BluredSeparator = ({
  position = "top",
  height = "sm",
}: SeparatorProps) => {
  return (
    <div
      className={`${styles.base} ${styles.position[position]} ${styles.gradient[position]} ${styles.height[height]}`}
    ></div>
  );
};
