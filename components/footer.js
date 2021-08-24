import Container from "./container";
import Section from "./section";
import { EXAMPLE_PATH } from "../lib/constants";

import { Linkedin, GitHub } from "react-feather";

const linkStyle = {
  cursor: "pointer",
};

export default function Footer() {
  const getAge = () => {
    var today = new Date();
    var birthDate = new Date("May 09, 1995 11:13:00");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
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
      <div className="spacer footer-svg"></div>
      <Section>
        <Container>
          <p className="text-lg mb-1 text-white">About Jeremy</p>
          <p className="text-md text-white">💼 Full-time software developer</p>
          <p className="text-md text-white">👦🏻 {getAge()} years old</p>
          <p className="text-md mb-4 text-white">🌎 Calgary, Alberta 🇨🇦</p>
          <button
            onClick={handleGithub}
            className="bg-pink-500 hover:bg-pink-700 text-white py-1 px-2 rounded mr-2"
          >
            Github
          </button>
          <button
            onClick={handleLinkedIn}
            className="bg-pink-500 hover:bg-pink-700 text-white py-1 px-2 rounded"
          >
            LinkedIn
          </button>
        </Container>
      </Section>
    </>
  );
}
