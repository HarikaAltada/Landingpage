import React from "react";
import Section from "./Section";

const About = () => {
  return (
    <div
      className="bg-white min-h-screen flex flex-col items-center p-10"
      id="about"
    >
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-lg mb-8 text-center">
        Bacardi Breezer, Breezer for short, is a fruit-based alcoholic drink
        which comes in many flavours.
      </p>

      <div className="flex flex-col md:flex-row w-full max-w-5xl">
        <div className="flex-1 flex justify-center mb-10 md:mb-0">
          <img
            src="./icons/Gatecom-21300020.jpg"
            alt="Breezers"
            className="w-full max-w-md object-cover"
            style={{ maxWidth: "400px" }}
          />
        </div>

        <div className="flex-1 px-4">
          <Section title="We Bacardi" initiallyOpen={true}>
            <p>
              BACARDÍ is a rum brand established in 1862 that has been producing
              world-class rums since. Our history is rich, and hunger for
              continued innovation in the industry never ceases.
            </p>
          </Section>
          <Section title="Our Product">
            <p>Details about the product.</p>
          </Section>
          <Section title="How We Work">
            <p>Information about our working process.</p>
          </Section>
          <Section title="Our Business">
            <p>Details about our business.</p>
          </Section>
          <Section title="Contact Us">
            <p>Contact information.</p>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default About;
