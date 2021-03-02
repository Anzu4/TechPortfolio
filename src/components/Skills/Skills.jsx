import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import SkillsImg from '../Image/SkillsImg';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const frontEnd = skills.filter((skill) => skill.stack === 'frontEnd');
  const backEnd = skills.filter((skill) => skill.stack === 'backEnd');
  const tools = skills.filter((skill) => skill.stack === 'tools');

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          <h3>Front End</h3>
          <Row className="row justify-content-center">
            {frontEnd.map((skill) => {
              const { id, stack, title, img } = skill;

              return (
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="skills-wrapper_icons" key={skills.id}>
                    <div data-tilt className="thumbnail rounded">
                      <Col>
                        <div className="skills-wrapper__image">
                          <SkillsImg alt={title} filename={img} />
                        </div>
                        <p>{title}</p>
                      </Col>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </Row>
          <h3>Back End</h3>
          <Row className="row justify-content-center">
            {backEnd.map((skill) => {
              const { id, stack, title, img } = skill;

              return (
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="skills-wrapper_icons" key={skills.id}>
                    <div data-tilt className="thumbnail rounded">
                      <Col>
                        <SkillsImg alt={title} filename={img} />
                        <p>{title}</p>
                      </Col>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </Row>
          <h3>Tools and Languages</h3>
          <Row className="row justify-content-center">
            {tools.map((skill) => {
              const { id, stack, title, img } = skill;

              return (
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="skills-wrapper_icons" key={skills.id}>
                    <div data-tilt className="thumbnail rounded">
                      <Col>
                        <SkillsImg alt={title} filename={img} />
                        <p>{title}</p>
                      </Col>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
