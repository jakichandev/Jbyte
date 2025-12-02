import GlassContainer from "../ui/GlassContainer";
import { Heading } from "../ui/Heading";
import type { Service } from "../../types/Service/Service";
import { services } from "../../data/services";
import { useRef, useState, useEffect } from "react";
import { Section } from "../ui/Section";
import square from "../../assets/svg/squares.svg";
import { BluredSeparator } from "../ui/Items/separators";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/motion/variants";

export const ServiceCard = ({ label, img, desc, index }: Service) => {
  return (
    <GlassContainer
      opacity={"30"}
      className="relative box-border p-2.5 shrink-0 snap-center w-[22rem] border-2 border-opacity h-full"
      key={index}
    >
      <div className="relative z-20 h-[25rem]">
        <Heading
          fontFamily="fontH"
          color="sunsetEnd"
          level="custom"
          weight="normal"
          className="text-2xl md:text-3xl text-center mt-4 mb-2"
        >
          {label}
        </Heading>
        <div
          style={{
            background: `url("${img}")`,
            backgroundSize: "cover",
          }}
          className={`w-48 h-48 rounded-full mx-auto my-4 bg-center inset-shadow-sm inset-shadow-txt`}
        ></div>

        <p className="mx-auto font-p-1 text-white text-center my-7 whitespace-break-spaces text-sm font-bold">
          {desc}
        </p>
      </div>
    </GlassContainer>
  );
};

export const Services = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / 380);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * 380,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section extraClasses="relative overflow-hidden z-20">
      <BluredSeparator position="top" />
      <div className="absolute bottom-0 left-0 w-full h-18 bg-gradient-to-t from-theme-gray-900 to-transparent z-10 "></div>
      <motion.div
        variants={fadeIn}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true, amount: "all" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Heading>What i'm able to do</Heading>
        <p className="text-xl font-p-1 text-txt text-center font-medium italic">
          with the best technologies on the market
        </p>
      </motion.div>
      <div id="block-image" className="absolute right-0 top-0 opacity-45">
        <img
          loading="lazy"
          className="w-[44rem] h-auto top-0 right-0 relative scale-y-[-1]"
          src={square}
          alt="Decorative squares"
        />
      </div>
      <div className="absolute left-0 bottom-0 scale-x-[-1] opacity-45">
        <img
          className="w-[44rem] h-auto"
          src={square}
          alt="Decorative squares"
        />
      </div>

      <div className="relative my-8">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto w-full p-4 scroll-smooth snap-x snap-mandatory"
        >
          <div className="mx-auto flex justify-center whitespace-nowrap gap-8 w-[1100px]">
            {services.map((card, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.6,
                  ease: "easeOut",
                }}
                key={index}
              >
                <ServiceCard
                  key={index}
                  label={card.label}
                  img={card.img}
                  link={card.link}
                  desc={card.desc}
                  index={index}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Indicatori di scorrimento (pallini) */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-theme-aqua-500 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Vai al servizio ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <BluredSeparator position="bottom" />
    </Section>
  );
};
