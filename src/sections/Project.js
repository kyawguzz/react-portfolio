import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import ProjectItem from '../components/ProjectItem';
import img1 from '../assets/Images/projects/kanban.png';
import img2 from '../assets/Images/projects/crypto.png';
import img3 from '../assets/Images/projects/authapp.png';
import img4 from '../assets/Images/projects/kmovies.png';
import img5 from '../assets/Images/projects/rhyme4u.png';

const projectData = [
    {
      id: 1,
      number: '//001',
      img: img1,
      name: 'K-Kanban',
      desc: 'desc',
      stack: 'MERN',
      source: 'https://github.com/kyawguzz/MERN-stack-react-kanban-app',
      link: 'https://mern-stack-kanban.vercel.app'
    },
    {
      id: 2,
      number: '//002',
      img: img2,
      name: 'Crypto Track ',
      desc: 'desc',
      stack: 'react',
      source: 'https://github.com/kyawguzz/crypto-track-app',
      link: 'https://track-app-crypto.netlify.app/'
    },
    {
      id: 3,
      number: '//003',
      img: img3,
      name: 'Authenication App',
      desc: 'desc',
      stack: 'MERN',
      source: 'https://github.com/kyawguzz/MERN-Authenication-App',
      link: 'https://mern-authenication.vercel.app/'
    },
    {
      id: 4,
      number: '//004',
      img: img4,
      name: 'K-Movies',
      desc: 'desc',
      stack: 'react',
      source: 'https://github.com/kyawguzz/MERN-Movie-Db-App',
      link: 'https://moviesk.netlify.app/'
    },
    {
      id: 5,
      number: '//005',
      img: img5,
      name: 'rhyme4u',
      desc: 'desc',
      stack: 'react',
      source: 'https://github.com/kyawguzz/react-music-player-app',
      link: 'https://rhyme4u.netlify.app/'
    },
    {
      id: 6,
      number: '//006',
      img: img1,
      name: 'rhyme4u',
      desc: 'desc',
      stack: 'react',
      source: 'https://github.com/kyawguzz/react-music-player-app',
      link: 'https://rhyme4u.netlify.app/'
    },
  ]




const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(180)'%3E%3Crect width='100%25' height='100%25' fill='rgba(32, 32, 32,1)'/%3E%3Cpath d='M-10-1h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 39h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 29.5h60v1h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M29.5-10v60h1v-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M9-10v60h2v-60z' fill='rgba(37, 37, 37,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  // font-family: 'Kaushan Script';
  font-weight: 250;
  color: ${(props) => props.theme.secondaryText};

  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: -1;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Container = styled.div`
  position: absolute;
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 95vw;
  }

  @media (max-width: 48em) {
    width: 95vw;

  }
  @media (max-width: 30em) {
    width: 95vw;
  }
`;


const Text = styled.h1`
  width: 20%;
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.text};
  font-weight: 250;
  position: absolute;
  padding: 2rem;
  top: 1rem;
  right: 0;
  z-index: -2;

  @media (max-width: 48em) {
    display: none;
  }
 
`;


const Project = () => {
  return (
      <Section id="fixed-target" className="works">
        <Title
          data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
        >
          Recent Projects...
        </Title>

        <Container>
          {projectData.map((item) => (
            <ProjectItem key={item.id} {...item} />
          ))}
        </Container>

        <Text data-scroll data-scroll-speed="2">
              &quot; Here are some of the key projects I've worked on, 
              showcasing my skills in both front-end and back-end development &quot;
        </Text>
    </Section>
  );
};

export default Project;

