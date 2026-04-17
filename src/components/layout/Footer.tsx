import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import instagram from "../../assets/svg/instagram.svg";
import github from "../../assets/svg/github.svg";
import { Heading } from "../ui/Heading";
import GlassContainer from "../ui/GlassContainer";
import { Section } from "../ui/Section";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Section paddingY="custom" extraClasses="pt-3 pb-3">
      <footer>
        <GlassContainer variant="plain" className="relative bottom-8 p-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colonna 1: Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 mt-2">
                <Link
                  to="https://www.instagram.com/jacopogianfaldoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/50 hover:border-theme-aqua-500 rounded-xl p-2.5 w-11 h-11 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(78,205,196,0.6)]"
                  aria-label="Instagram"
                >
                  <img
                    src={instagram}
                    alt=""
                    className="w-full h-full object-contain brightness-[1.4] saturate-150 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  to="https://github.com/jakichandev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white/50 hover:border-theme-aqua-500 rounded-xl p-2.5 w-11 h-11 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(78,205,196,0.6)]"
                  aria-label="GitHub"
                >
                  <img
                    src={github}
                    alt=""
                    className="w-full h-full object-contain brightness-[1.4] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            {/* Colonna 2: Navigazione */}
            <div className="flex flex-col gap-4">
              <Heading
                fontFamily="fontP"
                color="white"
                level="tertiary"
                weight="normal"
                tone="subtle"
                uppercase={false}
                className="text-lg md:text-xl"
              >
                Navigation
              </Heading>
              <ul className="flex flex-col gap-3">
                {routes.map((route) => (
                  <li key={route.id}>
                    <Link
                      to={route.path}
                      className="text-white/70 hover:text-theme-aqua-400 font-p-1 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-theme-aqua-400 group-hover:w-4 transition-all duration-300"></span>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonna 3: Contatti */}
            <div className="flex flex-col gap-4">
              <Heading
                fontFamily="fontP"
                color="white"
                level="tertiary"
                weight="normal"
                tone="subtle"
                uppercase={false}
                className="text-lg md:text-xl"
              >
                Contacts
              </Heading>
              <div className="flex flex-col gap-3 text-white/70 font-p-1">
                <a
                  href="mailto:jacopogianfaldoni@outlook.it"
                  className="hover:text-theme-aqua-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  jacopogianfaldoni@outlook.it
                </a>
                <a
                  href="tel:+393291299673"
                  className="hover:text-theme-aqua-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +39 3291299673
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-theme-aqua-500/50 to-transparent my-8"></div>

          {/* Copyright */}
          <div className="text-center text-white/50 font-p-1 text-sm">
            <p>© {currentYear} Jacopo Gianfaldoni.</p>
            <p className="mt-2">
              Made in{" "}
              <span className="text-theme-aqua-500">React and Typescript</span>
            </p>
          </div>
        </GlassContainer>
      </footer>
    </Section>
  );
};

export default Footer;
