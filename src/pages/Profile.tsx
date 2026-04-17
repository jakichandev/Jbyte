import Navbar from "../components/layout/Navbar";
import { profile } from "../data/profile";
import type { Avatar } from "../types/Profile/Profile";
import { Heading } from "../components/ui/Heading";
import GlassContainer from "../components/ui/GlassContainer";
import { Section } from "../components/ui/Section";
import { FlagOutlined, EnvironmentOutlined } from "@ant-design/icons";
import Footer from "../components/layout/Footer";
import { ScrollRestoration } from "react-router-dom";

const Avatar = ({ label, image }: Avatar) => {
  return (
    <div className="flex items-center gap-1.5">
      <img
        className="w-14 h-14 rounded-full object-cover object-center border-2 border-white/30 shadow-lg"
        src={image}
        alt="Jacopo Gianfaldoni"
      />
      <Heading
        level="custom"
        fontFamily="fontP"
        color="white"
        weight="normal"
        uppercase={false}
        className="text-lg"
      >
        {label}
      </Heading>
    </div>
  );
};

export const Profile = () => {
  return (
    <>
      <Navbar navState="sm" />
      <ScrollRestoration />
      <Section
        paddingY="large"
        extraClasses="grid grid-cols-1 lg:grid-cols-[2fr_4fr] text-txt font-p-1 gap-8 gap-y-3"
      >
        <GlassContainer variant="plain" className="overflow-x-auto">
          <div className="p-3 min-w-max">
            <Avatar
              label={`${profile.name} ${profile.surname}`}
              image={profile.avatar.image}
            />
            <ul className="text-theme-aqua-100 mt-4 text-normal">
              <li>{profile.age + " years"}</li>
              <li>
                <FlagOutlined /> {profile.nationality}
              </li>
            </ul>
            <ul className="flex flex-col text-sm text-theme-aqua-100 list-none font-p-1 font-normal gap-2 mt-4">
              {profile.contacts.map((contact, index) => (
                <li
                  key={index}
                  className="hover:text-theme-aqua-300 transition-colors cursor-pointer"
                >
                  <a href={contact.link} className="flex items-center gap-2">
                    {contact.icon} <span>{contact.content}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </GlassContainer>

        <div className="flex flex-col gap-3">
          <GlassContainer variant="soft" className="p-5 md:p-6">
            <Heading
              level="custom"
              fontFamily="fontP"
              color="white"
              weight="normal"
              tone="muted"
              uppercase={false}
              className="text-2xl"
            >
              About Me
            </Heading>
            <div className="relative mt-3">
              <p className="text-white/90 leading-6 text-md">
                {profile.aboutMe}
              </p>
            </div>
          </GlassContainer>

          <GlassContainer variant="soft" className="p-5 md:p-6">
            <Heading
              level="custom"
              fontFamily="fontP"
              color="white"
              weight="normal"
              tone="muted"
              uppercase={false}
              className="text-2xl"
            >
              Working Experience
            </Heading>
            <div className="flex flex-col gap-4 mt-3">
              {profile.workExperience.map((experience) => (
                <GlassContainer
                  key={experience.name}
                  variant="plain"
                  hover={true}
                  className="border-white/30 p-4 md:p-5"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-theme-aqua-500 font-normal">
                      {experience.when.from}
                    </span>
                    <span className="text-white/60">-</span>
                    <span className="text-theme-aqua-500 font-normal">
                      {experience.when.to}
                    </span>
                  </div>
                  <Heading
                    fontFamily="fontP"
                    level="custom"
                    color="white"
                    weight="normal"
                    uppercase={false}
                    className="text-md"
                  >
                    {experience.name}
                  </Heading>
                  <p className="text-theme-aqua-100 text-sm">
                    <EnvironmentOutlined /> {experience.where}
                  </p>
                </GlassContainer>
              ))}
            </div>
          </GlassContainer>
        </div>
      </Section>
      <Footer />
    </>
  );
};
