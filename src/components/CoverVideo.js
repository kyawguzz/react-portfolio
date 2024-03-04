import React from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/backgroundVideo.mp4'
import { motion } from 'framer-motion'
import img from "../assets/Images/profile.jpg";
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/arrowdown.json';


const VideoContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;
    video{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`

const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.98)`} 
`

const Info = styled(motion.div)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text};
`

const ArrowDown = styled.div`
    position: absolute;
    margin-bottom: 10vh;
    bottom: 0;
`
const Card = styled.div`
  box-sizing: border-box;
  width: 18vw; 
  height: auto;
  border: 1px solid white;
  backdrop-filter: blur(6px);
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
  padding: 0.5rem;

  @media (max-width: 64em){
    width: 53vw;
    height: auto; 
  }

  &:hover{
    border: 1px solid black;
    transform: scale(1.05);
  } 
  &:active {
    transform: scale(0.95) rotateZ(1.7deg);
  } 

  .profile {
    width: 100%; /* Make the image take full width of the parent */
    height: auto; /* Make height auto to maintain aspect ratio */
  }
`


const infoVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.3
    },
  },
};


const nameVariants = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: 'spring',
      duration: 3,
      delay: 3, // 2
      ease: 'easeInOut',
    },
  },
};

const positionVariants = {
  hidden: {
    opacity: 0,
    x: 1000,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: 'spring',
      duration: 3,
      delay: 3, // 2
      ease: 'easeInOut',
    },
  },
};


const Marquee = styled.div`
  position: absolute;
  // min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em){
    justify-content: center;
}
`;
const Banner = styled(motion.h2)`
  font-size: ${(props) => props.theme.fontxxxl};
  // font-family: 'Kaushan Script';
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  line-height: 4rem;

  @media (max-width: 70em){
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 64em){
      // margin: 1rem 0;
      line-height: 1rem;
      font-size: ${(props) => props.theme.fontxxl};
  }
 
  @media (max-width: 48em){
      font-size: ${(props) => props.theme.fontxxl};
      margin: 0.5rem 0;

  }
  @media (max-width: 30em){
      font-size: ${(props) => props.theme.fontxxl};
  }

  span {
    display: block;
    padding: 1rem 2rem;
    @media (max-width: 70em){
      overflow-x: scroll;
    }
    @media (max-width: 64em){
      overflow-x: scroll;
    }
  }
`;


const CoverVideo = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



  return (

    <VideoContainer>
      <DarkOverlay />
      <Info variants={infoVariants} initial="hidden" animate="show" >
        <Card>
          <img
            className="profile"
            src={img}
            alt="Kyaw Zin Htet"
            data-scroll
            data-scroll-speed="5"
          />
        </Card>
        <Marquee id="direction">
          <Banner variants={nameVariants} initial="hidden" animate="visible">
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="10"
              data-scroll-target="#direction"
              className="name"
            >
              KYAW ZIN HTET
            </span>
          </Banner>
          <Banner variants={positionVariants} initial="hidden" animate="visible">
            <span
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-10"
              data-scroll-target="#direction"
            >
              A Full-stack Developer
            </span>
          </Banner>
        </Marquee>

        <ArrowDown>
          <Lottie
            className="lottie"
            options={defaultOptions}
            width={60}
            height={60}
          />
        </ArrowDown>
      </Info>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo;