import type { Profile } from "../types/Profile/Profile";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

export const profile: Profile = {
  name: "Jacopo",
  surname: "Gianfaldoni",
  age: 23,
  nationality: "Italian",
  contacts: [
    {
      label: "email",
      content: "gianfaldoni.jaco@gmail.com",
      icon: <MailOutlined />,
    },
    { label: "phone", content: 3291299673, icon: <PhoneOutlined /> },
  ],
  avatar: {
    image: "/me.JPG",
    label: "Jacopo",
  },
  workExperience: [
    {
      name: "Scot",
      where: "Calenzano, Italia",
      duration: 5,
      stage: false,
      when: { from: 2020, to: 2025 },
    },
    {
      name: "QZR Studio",
      where: "Lucca, Italia",
      duration: 1,
      stage: false,
      when: { from: 2026, to: "now" },
    },
  ],
  aboutMe: `After five years as a video technician in a service
dedicated to events and conferences, I decided to try to create
an opportunity for myself to become a frontend developer. Why
frontend? It's not that I dislike backend, but I feel that frontend
is more my field, since I studied graphic design in high school
and I feel more inclined to develop the experience
and appearance of a web application (even though I know that the world
of frontend goes far beyond the concept of graphics and web design).
Through self-study, I have learned how to
develop web applications with React or NextJs, styled
components, and how to manage their local and global status.
Furthermore, by studying NodeJS, I am able to create a backend with
Express, creating CRUD applications and authentication with
JWT, integrating communication with databases such as
MongoDB or mySQL. I am eager to test myself
in this world and eager to learn new technologies.
My future goal? To develop in Flutter and have full
mastery of AI integration in applications.`,
};
