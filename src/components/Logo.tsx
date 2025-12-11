import LogoDefault from "../assets/logo/logo_default.svg";
import LogoClose from "../assets/logo/logo_close.svg";

interface LogoProps {
  width?: string | number;
  height?: string | number;
  navbarState?: string;
}

const Logo = ({ width, height, navbarState }: LogoProps) => {
  return (
    <img
      className={`transition-all duration-500 relative animation-fade-in`}
      width={width}
      height={navbarState === "sm" ? height : "auto"}
      src={navbarState === "sm" ? LogoDefault : LogoClose}
      alt="Site Logo"
    />
  );
};

export default Logo;
