import Logo from "../Logo";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import instagram from "../../assets/svg/instagram.svg";
import github from "../../assets/svg/github.svg";
import expand from "../../assets/svg/expand.svg";
import { motion } from "framer-motion";

interface NavbarProps {
  navState?: "sm" | "lg";
}

const Navbar = ({ navState = "sm" }: NavbarProps) => {
  const [navActualState, setNavState] = useState<"sm" | "lg">(navState);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navActualState === "lg") {
      const handleClickOutside = (event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
          setNavState("sm");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [navActualState]);

  const toggleNav = () => {
    setNavState(navActualState === "sm" ? "lg" : "sm");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleNav();
    }
    if (e.key === "Escape" && navActualState === "lg") {
      setNavState("sm");
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      ref={navRef}
      onClick={toggleNav}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="navigation"
      aria-label="Menu di navigazione principale"
      aria-expanded={navActualState === "lg"}
      className={`fixed top-4 md:top-2.5 bg-theme-gray-900/80 z-[100] rounded-2xl border-2 border-white/30 px-2 ml-sections-mobile md:ml-sections overflow-hidden flex flex-col items-center transition-all duration-500 ease-in-out overflow-y-auto cursor-pointer shadow-xl focus:outline-none focus:ring-2 focus:ring-theme-aqua-500 focus:ring-offset-2 focus:ring-offset-theme-gray-950 ${
        navActualState === "sm"
          ? "w-30 md:w-40 h-auto"
          : "w-60 md:w-70 h-[480px]"
      }`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-theme-aqua-800/30 via-theme-gray-800/60 to-theme-gray-900/80 -z-10 blur-xl transition-opacity duration-500 ${
          navActualState === "lg" ? "opacity-70" : "opacity-60"
        }`}
      ></div>

      <div
        className="flex items-center shrink-0 w-full justify-between py-4"
        role="banner"
      >
        <Logo navbarState={navActualState} width={90} />
        <div role="button" className="relative">
          {navActualState === "sm" && (
            <span aria-hidden="true" className="absolute inset-0 glow-pulse" />
          )}
          <img
            src={expand}
            alt={
              navActualState === "sm"
                ? "Apri menu di navigazione"
                : "Chiudi menu di navigazione"
            }
            className={`w-6 h-6 transition-transform duration-500 ease-in-out ${
              navActualState === "lg" ? "rotate-180" : "rotate-0"
            }`}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Wrapper animato per contenuto */}
      <div
        className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${
          navActualState === "sm"
            ? "max-h-0 opacity-0"
            : "max-h-[400px] opacity-100"
        }`}
      >
        <ul
          className="flex flex-col gap-4 my-3 w-full"
          role="list"
          aria-label="Pagine del sito"
        >
          {routes.map((route, index) => (
            <li
              key={route.id}
              className={`w-full px-4 rounded-lg border-2 border-theme-gray-600/20 hover:border-theme-gray-200/50 focus-within:bg-theme-gray-200/50 relative overflow-hidden transition-all duration-300 ${
                navActualState === "lg"
                  ? "animate-slide-in opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{
                animationDelay:
                  navActualState === "lg" ? `${index * 80}ms` : "0ms",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-theme-aqua-800/20 via-theme-gray-800/40 to-theme-gray-900/60 -z-10 blur-lg"></div>
              <Link
                to={route.path}
                className="flex items-center gap-3 text-sm hover:text-white focus:text-white my-2 transition-colors focus:outline-none"
                aria-label={`Vai alla pagina ${route.name}`}
              >
                <span
                  className="w-8 h-8 flex items-center justify-center brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(78,205,196,0.6)]"
                  aria-hidden="true"
                >
                  <img
                    className="w-full h-full object-contain"
                    src={route.icon}
                    alt=""
                  />
                </span>
                <h4 className="text-2xl text-white uppercase font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {route.name}
                </h4>
              </Link>
            </li>
          ))}

          <li
            className={`flex gap-2 justify-center transition-all duration-300 ${
              navActualState === "lg"
                ? "animate-slide-in opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            role="list"
            aria-label="Link social"
            style={{
              animationDelay:
                navActualState === "lg" ? `${routes.length * 80}ms` : "0ms",
            }}
          >
            <Link
              className="border-2 border-theme-gray-600/30 hover:border-theme-aqua-900/80 focus:border-theme-aqua-900/80 rounded-xl p-2 relative w-10 h-10 z-0 transition-all duration-300 hover:shadow-[0_0_15px_rgba(78,205,196,0.5)] focus:shadow-[0_0_15px_rgba(78,205,196,0.5)] bg-theme-gray-800/50 focus:outline-none focus:ring-2 focus:ring-theme-aqua-500"
              to={"https://www.instagram.com/jacopogianfaldoni/"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visita il mio profilo Instagram (si apre in una nuova scheda)"
            >
              <img
                src={instagram}
                alt=""
                className="icon-btn rounded-lg brightness-110 contrast-125"
                aria-hidden="true"
              />
            </Link>
            <Link
              className="border-2 border-theme-gray-600/30 hover:border-theme-aqua-900/80 focus:border-theme-aqua-900/80 rounded-xl p-2 relative w-10 h-10 z-0 transition-all duration-300 hover:shadow-[0_0_15px_rgba(78,205,196,0.5)] focus:shadow-[0_0_15px_rgba(78,205,196,0.5)] bg-theme-gray-800/50 focus:outline-none focus:ring-2 focus:ring-theme-aqua-500"
              to={"https://github.com/jakichandev"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visita il mio profilo GitHub (si apre in una nuova scheda)"
            >
              <img
                src={github}
                alt=""
                className="icon-btn rounded-lg brightness-110 contrast-125"
                aria-hidden="true"
              />
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
