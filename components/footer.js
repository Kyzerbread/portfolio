import Container from "./container";
import Section from "./section";
import { EXAMPLE_PATH } from "../lib/constants";

import { Linkedin, GitHub } from "react-feather";

const linkStyle = {
  cursor: "pointer",
};

export default function Footer() {
  const getAge = () => {
    const today = new Date();
    const birthDate = new Date("May 09, 1995 11:13:00");
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleGithub = () =>
    window.open("https://github.com/Kyzerbread", "_blank");
  const handleLinkedIn = () =>
    window.open("https://linkedin.com/in/jeremy-kaiser-445115a4", "_blank");

  return (
    <>
      <Section backgroundColor="#263238">
        <Container className="text-white">
          <p className="text-lg mb-1 text-white">About Jeremy</p>
          <p className="text-md text-white">💼 Full-time software developer</p>
          <p className="text-md text-white">👦🏻 {getAge()} years old</p>
          <p className="text-md mb-4 text-white">🌎 Calgary, Alberta 🇨🇦</p>
          <button
            onClick={handleGithub}
            className="bg-pink-500 hover:bg-pink-700 py-1 px-2 rounded mr-2 text-white"
          >
            Github
          </button>
          <button
            onClick={handleLinkedIn}
            className="bg-pink-500 hover:bg-pink-700 py-1 px-2 rounded text-white"
          >
            LinkedIn
          </button>
        </Container>
      </Section>
    </>
  );
}
