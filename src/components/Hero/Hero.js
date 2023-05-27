import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, <br />
          My name is Shawn Smith
        </SectionTitle>
        <SectionText>
        I'm Shawn Smith, a full stack developer embarking on an exciting career change from warehouse operations to web development. Throughout my years in logistics, I honed my attention to detail, problem-solving abilities, and knack for efficient workflow management. Now, I'm seamlessly applying these transferable skills to create robust and user-friendly web applications. My expertise in optimizing processes and maximizing productivity directly translates into writing efficient code. Moreover, my strong communication and teamwork skills enable me to collaborate effectively with cross-functional teams. With a deep passion for technology and a commitment to continuous learning.
        </SectionText>
        <Button onClick={() => window.location = 'https://dev.to/shawnsmith24'}>Blog</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;