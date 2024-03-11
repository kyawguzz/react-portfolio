import React from "react";
import styled from "styled-components";
import { CiSaveDown2 } from "react-icons/ci";
import { motion } from 'framer-motion';
import ResumeContent from '../assets/Kyaw-Zin-Htet-Resume.pdf'
import Chaffle from 'chaffle'

const Content = styled.div`
  min-height: 120vh;
	display: flex;
  position: relative;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(180)'%3E%3Crect width='100%25' height='100%25' fill='rgba(32, 32, 32,1)'/%3E%3Cpath d='M-10-1h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 39h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 29.5h60v1h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M29.5-10v60h1v-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M9-10v60h2v-60z' fill='rgba(37, 37, 37,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
  @media (max-width: 64em) {
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-weight: 250;
  color: ${(props) => props.theme.secondaryText};
  position: absolute;
  left: 3%;
  @media (max-width: 48em) {
    // width: 90vw;
  }
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  @media (max-width: 64em){
    flex-direction: column;
    
  }
`;

const Left = styled.pre`;
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 100vw;
  }
`;

const Right = styled.div`
  width: 70vw;
  @media (max-width: 64em) {
    width: 95vw;
  }
`;

const Story = styled(motion.div)`
  letter-spacing: 0.2rem;
  color: ${(props) => props.theme.secondaryText};
  font-size: ${(props) => props.theme.fontmd};
  font-weight: bold;
  text-align: justify;
  margin: 2rem;
  
  p{
    line-height: 1.5rem;
    margin-bottom: 1rem;
    @media (max-width: 64em){
      margin-bottom: 1rem;
    }
  } 
  a{
    display: flex;
    flex-direction: row;
    line-height: 2rem;
    transition: all 0.5s;
    &:hover{
      color: ${(props) => props.theme.text};
      text-decoration: underline;
    }
  }
  ul {
    padding-left: 1rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 64em){
    letter-spacing: 0.1rem;
    margin: 0.5rem;
  }
`;

const Divider = styled.span`
  display: flex;
  width: 15rem;
  height: 0.1rem;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%, rgba(233,230,230,1) 100%);
  margin: 1rem 0 0 0;
`;


const Resume = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 0.2rem;
  width: 15vw;
  padding: 0.5rem;
  color: ${(props) => props.theme.text};
  height: 4vh;
  font-size: ${(props) => props.theme.fontmd};
  cursor: pointer;
  transition: all 0.5s;
  .icon{
    font-size: 1rem;
  }
  &:hover{
    transform: scale(1.01);
    background: rgba(0,0,0,0.5);
    .icon{
      font-size: 1.2rem;
    }
  } 
  @media (max-width: 64em) {
    margin-top: 10rem;
    width: 80vw;
  }
`;

const SubTitle = styled.p`
  color: ${(props) => props.theme.text};
`;


const About = () => {

  const handleDownloadResume = () => {
    const resumeUrl = ResumeContent;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Kyaw_Zin_Htet_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const elements = document.querySelectorAll('[data-chaffle]');
  Array.prototype.forEach.call(elements, function (el) {
    const chaffle = new Chaffle(el, { /* options */ });
    el.addEventListener('mouseover', function () {
      chaffle.init();
    });
  });

  return (
    <Content>
        <Title
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
        >
          A little about me...
        </Title>
      <Section id="fixed-target" className="about">
        
        <Left >
              <Resume onClick={handleDownloadResume}>
                <p
                   data-chaffle="en" 
                   data-chaffle-speed="10" 
                   data-chaffle-delay="50"
                >Download Resume</p>
                <CiSaveDown2 className="icon"/>
                
              </Resume>

        </Left>

        <Right
          id="right"
        >    
              <Story
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="1"
                data-scroll-target="#right"
              >
                <SubTitle>&#123; Story &#125;</SubTitle>
                <p>
                  I'm a passionate full-stack developer with over 4 years of experience navigating the ever-evolving landscape of web development.
                </p>
                <p>
                 My journey began with a deep dive into the MERN stack, where I honed my skills in MongoDB, Express.js, React, and Node.js, allowing me to build robust and scalable web applications.
                </p>
                <p>
                 But my passion for learning doesn't stop there. I thrive on the challenge of picking up new frameworks and languages, and I'm comfortable working on both the front-end and back-end, as well as venturing into the world of mobile app development.
                </p>
                <p>
                This versatility and adaptability empower me to approach any project with confidence and enthusiasm.
                </p>
                <Divider />
              </Story>

              <Story 
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="1"
                data-scroll-target="#right"
              >
                <SubTitle>&#123; Education &#125;</SubTitle>
                <p>
                  East Yangon University (Bachelor of Art)
                </p>
                <p> &#40;2016 - 2019 &#41;</p>
                <Divider />
              </Story>

              <Story
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="1"
                data-scroll-target="#right"
              >
                <SubTitle>&#123; Certificates &#125;</SubTitle>                
                 <ul>
                    <li>
                      <a href={"https://cs50.harvard.edu/certificates/2d7239bd-9088-4920-896f-c4901e0c6fe7"} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        CS50x 
                      </a>
                    </li>
                    <li>
                      <a href={"https://www.coursera.org/account/accomplishments/certificate/XRKQ2F2WZWCM"} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        Advance React 
                      </a>
                    </li>
                    <li>
                      <a href={"https://www.coursera.org/account/accomplishments/certificate/5RZ5XGJ6WB8Y"} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        Front-End Web Development with React
                      </a>
                    </li>
                    <li>
                      <a href={"https://www.coursera.org/account/accomplishments/certificate/ELKJ8PPRPHN8"} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        Server-side Development with NodeJS, Express and MongoDB
                      </a>
                    </li>
                 </ul>
                <Divider />
              </Story>

             
        </Right>


      </Section>


    </Content>
  );
};

export default About;
