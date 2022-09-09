import React from "react";
import Link from "next/link"

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Ukaegbu, Albert Nnaji Portfolio
      </SectionTitle>
      <SectionText>
        A Front-End Web Developer with professional experience developing
        responsive, scalable, test-driven, modern website/application. Able to
        maintain focus even when under pressure and yet balance multiple
        competing priorities, Aiming to secure a challenging role as a Front-End
        Developer in a company where I can utilize my skills and be accountable
        for my work.
      </SectionText>
      <Link href="#contact">
      <Button>
        Learn More
      </Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;


// onClick={() => (window.location = "https://google.com")}