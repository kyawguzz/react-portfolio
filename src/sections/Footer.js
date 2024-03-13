import styled from 'styled-components';
import { DiReact } from "react-icons/di";
import { CiHeart } from "react-icons/ci";

const Section = styled.section`
  min-height: 60vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(180)'%3E%3Crect width='100%25' height='100%25' fill='rgba(32, 32, 32,1)'/%3E%3Cpath d='M-10-1h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 39h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 29.5h60v1h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M29.5-10v60h1v-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M9-10v60h2v-60z' fill='rgba(37, 37, 37,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
  flex-direction: column;
  gap: 5rem;
  @media (max-width: 64em){
    min-height: 60vh;
    gap: 2rem;
  }
`;

const Quote = styled.p`
    width: 100%;
    color: ${(props) => props.theme.secondaryText};
    font-size: ${(props) => props.theme.fontxl};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Kaushan Script";
    opacity: 0.3;
    @media (max-width: 64em){
     width: 90%;
     margin-top: -5rem;
    }
`;

const GetInTouch = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: row;
    @media (max-width: 64em){
      flex-direction: column;
      width: 100vw;
      gap: 2rem;
     }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  .made{
    display: flex;
    align-items: center;
  }
  .heart{
    color: yellow;
    font-size: 2rem;
  }
  .react{
    color: #62DAFB;
    font-size: 2rem;
  }
  @media (max-width: 64em){
    width: 100%;
    align-items: flex-start;
    margin-left: 1rem;
   }
`;

const Text = styled.p`
   color: ${(props) => props.theme.text};
   font-size: ${(props) => props.theme.fontmd};
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 64em){
    width: 100%;
    flex-direction: row;
   }
`;



const Social = styled.a`
  display: flex;
  // flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.secondaryText};
  border-radius: 0.2rem;
  width: 10vw;
  padding: 0.5rem;
  color: ${(props) => props.theme.text};
  height: 4vh;
  font-size: ${(props) => props.theme.fontmd};
  cursor: pointer;
  transition: all 0.5s;
  // .icon{
  //   font-size: 0.9rem;
  // }
  &:hover{
    // transform: scale(1.01);
    background: rgba(0,0,0,0.5);
    // .icon{
    //   font-size: 1.2rem;
    // }
  } 
  @media (max-width: 64em){
    width: 40vw;
   }
`;


const Footer = () => {

  return (
      <Section>
            <Quote data-scroll data-scroll-speed="5">
              &#34;Rather than exceptional gifts, I offer a burning curiosity that fuels my exploration.&#34;
            </Quote>
            <GetInTouch>
                <Left>
                    <Text>
                        <p className="made">
                          Made with <CiHeart className="heart"/>  and <DiReact className="react"/>
                        </p>
                        <p>© 2023 KYAW ZIN HTET. ALL RIGHT RESERVED.</p>
                    </Text>
                </Left>

                <Right>
                    <Social
                       data-chaffle="en" 
                       data-chaffle-speed="10" 
                       data-chaffle-delay="30"
                       href="https://www.linkedin.com/in/kyaw-zin-htet-dev/"
                       target="_blank"
                    >
                            <p> Linkedin</p>
                    </Social>
                    <Social 
                       data-chaffle="en" 
                       data-chaffle-speed="10" 
                       data-chaffle-delay="30"
                       href="https://github.com/kyawzin-htet"
                       target="_blank"
                    >
                            <p> Github </p>
                    </Social>
                    {/* <Social href="mailto:kyawzinhtet7930@gmail.com">
                            <p>Gmail</p>
                    </Social> */}
                </Right>

                
            </GetInTouch>
      </Section>
  );
};

export default Footer;

