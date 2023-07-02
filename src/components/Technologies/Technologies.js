import React from 'react';
import { DiApple, DiBackbone, DiDatabase, DiFirebase, DiReact, DiSwift, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the Software Engineering world both Front-End & Back-End 
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, JavaScript, Tailwind, MaterialUI, Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, Spring Boot, Python, Flask,
            Node, Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
       <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            SQL, MongoDB, SQLite
          </ListParagraph>
        </ListContainer>
      </ListItem>
     
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;