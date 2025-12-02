import back from "../../../assets/svg/back.svg";
import { motion } from "framer-motion";

export const BackgroundItem1 = () => {
  return (
    <motion.div
      id="bit-image"
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <img
        src={back}
        alt="Decorative background illustration"
        className="object-cover absolute top-0 w-full h-full left-0 opacity-10"
        loading="lazy"
      />
    </motion.div>
  );
};
