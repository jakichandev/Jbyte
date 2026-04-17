import squares from "../../../assets/svg/squares.svg";

interface DecorativeSquaresProps {
  position?: string;
  className?: string;
  imageClassName?: string;
  opacity?: number;
}

export const DecorativeSquares = ({
  position = "",
  className = "",
  imageClassName = "",
  opacity = 0.25,
}: DecorativeSquaresProps) => {
  return (
    <div
      className={`pointer-events-none absolute -z-10 ${position} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <img
        loading="lazy"
        src={squares}
        alt=""
        className={`h-auto w-full ${imageClassName}`}
      />
    </div>
  );
};
