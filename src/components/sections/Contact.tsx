import Button from "../ui/Button";
import GlassContainer from "../ui/GlassContainer";
import { Section } from "../ui/Section";
import { Link } from "react-router-dom";
import { MailOutlined, DownloadOutlined } from "@ant-design/icons";
import { Heading } from "../ui/Heading";
import { motion } from "motion/react";
import { fadeIn } from "../../lib/motion/variants";

export const Contact = () => {
  return (
    <Section extraClasses="mb-12 md:mb-0">
      <motion.div
        variants={fadeIn}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Heading level="primary" className="mb-10">
          Get in Touch
        </Heading>
      </motion.div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact */}
        <motion.div
          variants={fadeIn}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GlassContainer variant="default" opacity="60" className="p-6 md:p-8">
            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-p-1 text-white/80 font-semibold">
                Do you have a project in mind or want to get in touch?
                <br />
                Write to me, I respond quickly.
              </p>
              <Link
                to="/contact"
                aria-label="Go to contact page"
                className="inline-block"
              >
                <Button color="aqua" level={2} className="gap-2">
                  <MailOutlined />
                  Contact Me
                </Button>
              </Link>
            </div>
          </GlassContainer>
        </motion.div>

        {/* Scarica CV */}
        <motion.div
          variants={fadeIn}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <GlassContainer variant="default" opacity="60" className="p-6 md:p-8">
            <div className="flex flex-col items-center text-center gap-4">
              <p className="font-p-1 text-white/80 font-semibold">
                Do you want my updated CV?
                <br />
                Download it in PDF format.
              </p>
              <a
                href="/JacopoGianfaldoni.pdf"
                download
                aria-label="Download CV in PDF"
                className="inline-block"
                rel="noopener noreferrer"
              >
                <Button color="aqua" level={2} className="gap-2">
                  <DownloadOutlined />
                  Download CV
                </Button>
              </a>
              <span className="text-white/50 text-sm font-p-1">
                Format: PDF • Language: EN
              </span>
            </div>
          </GlassContainer>
        </motion.div>
      </div>
    </Section>
  );
};
