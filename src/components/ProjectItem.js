import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import React, {  useState } from 'react';
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
  transition: all 0.5s;
  &:hover{
    color: ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
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
  width: 30vw;
  height: auto;
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
`;

const ProjectItem = (props) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Section
        whileTap={{ scale: 0.95, rotateZ: 1.7 }}
        onMouseEnter={() => {
          setShowImage(true);
          setShowImage(true);
        }}
        onMouseLeave={() => setShowImage(false)}
      >
        <Info
            data-chaffle="en" 
            data-chaffle-speed="5" 
            data-chaffle-delay="20"
        >
          <p>
              {props.number}
          </p>
          <p>
            {props.name}
          </p>
        </Info>
        <Link>
          <a href={props.source} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <FiGithub className="icon" />
          </a>
          <a href={props.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <FaArrowUpRightFromSquare className="icon" />
          </a>
        </Link>
      </Section>
      {showImage && (
        <ImageContainer
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
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