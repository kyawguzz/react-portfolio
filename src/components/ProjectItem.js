import { motion } from 'framer-motion';
import { GoArrowUpRight } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled(motion.section)`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color:  ${(props) => props.theme.secondaryText};
  height: 10vh;
  border-bottom: 1px solid ${(props) => props.theme.secondaryText};
  border-top: 1px solid ${(props) => props.theme.secondaryText};
  transition: all 0.5s;
  &:hover{
    transform: scale(1.01);
    background: rgba(0,0,0,0.5);
    color: ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
    border-top: 1px solid ${(props) => props.theme.text};
  } 
  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  } 
  .icon {
    font-size: 1rem;
    transition: all 0.3s;
    cursor: pointer;
    &:hover{
      transform: scale(1.3);
    }
  }  
`;

const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  gap: 10rem;
  @media (max-width: 64em){
    gap: 1rem;
  }
`;

const Link = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ImageContainer = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  @media (max-width: 64em){
    width: 80vw;
    height: auto;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  // width: 100%;
  // height: 100%;
`;

const ProjectItem = (props) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Section
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95, rotateZ: 1.7 }}
        onMouseEnter={() => setShowImage(true)}
        onMouseLeave={() => setShowImage(false)}
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="1"
      >
        <Info>
          <p>{props.number}</p>
          <p>{props.name}</p>
        </Info>
        <Link>
          <a href={props.source} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <FiGithub className="icon" />
          </a>
          <a href={props.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <GoArrowUpRight className="icon" />
          </a>
        </Link>
      </Section>
      {showImage && (
        <ImageContainer
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onMouseEnter={() => setShowImage(true)}
          onMouseLeave={() => setShowImage(false)}
        >
          <Image src={props.img} alt="Project Image" />
        </ImageContainer>
      )}
    </>
  );
};

export default ProjectItem;