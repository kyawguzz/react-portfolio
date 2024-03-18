// import { motion } from 'framer-motion';
// import styled from 'styled-components';
// import { GoArrowUpRight } from "react-icons/go";

// const Section = styled.section`
//   min-height: 120vh;
//   width: 100%;
//   margin: 0 auto;
//   padding: 0 auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(180)'%3E%3Crect width='100%25' height='100%25' fill='rgba(32, 32, 32,1)'/%3E%3Cpath d='M-10-1h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 39h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 29.5h60v1h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M29.5-10v60h1v-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M9-10v60h2v-60z' fill='rgba(37, 37, 37,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
// `;

// const Title = styled(motion.h1)`
//   font-size: ${(props) => props.theme.fontxxxl};
//   font-weight: 250;
//   color: ${(props) => props.theme.text};
//   position: absolute;
//   top: 1rem;
//   left: 1rem;
//   // z-index: -1;
//   opacity: 0.2;
//   @media (max-width: 64em) {
//     font-size: ${(props) => props.theme.fontxxxl};
//   }
//   @media (max-width: 48em) {
//     font-size: ${(props) => props.theme.fontxxl};
//   }
// `;

// const Container = styled.div`
//   margin-top: 5rem;
//   margin-bottom: 5rem;
//   width: 100vw;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 5rem;
//   @media (max-width: 64em){
//     gap: 0.5rem;
//     margin-bottom: 1rem;
//   }
// `;

// const Exp = styled.div`
//   width: 90%;
//   height: auto;
//   display: flex;
//   flex-direction: row;
//   gap: 5rem;
//   @media (max-width: 64em){
//     width: 90%;
//     flex-direction: column;
//     gap: 1rem;
//     .mockItem{
//       display: none;
//     }
//   }
// `

// const Item = styled.div`
//   width: 100%;
// `
// const Border = styled.div`
//   width: 100%;
//   border: 1px solid ${(props) => props.theme.secondaryText};
//   border-radius: 0.5rem;
//   padding: 0.5rem;
//   @media (max-width: 64em){
//     padding: 0.2rem;
//   }
// `

// const Company = styled.div`
//   background-color: rgba(0, 0, 0, 0.3);
//   display: flex;
//   flex-direction: column;
//   border-radius: 0.5rem;
//   padding: 1rem;
//   gap: 1rem;
// `


// const Info = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: 1rem;
// `

// const Role = styled.h3`
//   color: ${(props) => props.theme.text}
// `

// const Employer = styled.a`
//   color: ${(props) => props.theme.secondaryText};
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   border-bottom: 1px solid ${(props) => props.theme.secondaryText};
//   border-top: 1px solid ${(props) => props.theme.secondaryText};
//   gap: 0.5rem;
//   transition: all 0.5s;
//   &:hover{
//     transform: scale(1.1);
//     color: ${(props) => props.theme.text};
//   }
// `

// const JoinDate = styled.p`
//   color: ${(props) => props.theme.secondaryText};
//   font-size: ${(props) => props.theme.fontxs};
// `

// const Description = styled.p`
//   color: ${(props) => props.theme.secondaryText};
//   text-align: justify;
//   padding-left: 0.5rem;
//   ul {
//     // list-style-type: none;
//     padding: 0;
//   }

//   li {
//     margin-bottom: 0.5rem;
//   }
// `

// const Experience = () => {


//   return (
//     <Section className="exp">
//       <Title
//         data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
//       >
//         Experiences...
//       </Title>

//       <Container id="direction">
//         <Exp>

//           <Item className='mockItem'>
//           </Item>

//           <Item
//             data-scroll
//             data-scroll-direction="horizontal"
//             data-scroll-speed="2"
//           >
//             <Border>
//               <Company>
//                 <Info>
//                   <Role> &#123; Full-Stack Developer &#125;</Role>
//                   <Employer 
//                    href="https://www.linkedin.com/company/caringcodecreation/" 
//                    target="_blank" 
//                    data-chaffle="en" 
//                    data-chaffle-speed="10" 
//                    data-chaffle-delay="50"
//                   >
//                     C3 <GoArrowUpRight className="icon" />
//                   </Employer>
//                 </Info>
//                 <JoinDate>&#40; Jan-2024 / Now &#41;</JoinDate>
//                 <Description
                  
//                 >
//                   <ul>
//                     <li>Design and development of a full-stack POS web application utilizing the MERN stack (MongoDB, Express, React, Node.js) for efficient inventory management and streamlined checkout processes.</li>
//                     <li>Implemented unit tests and rigorous code reviews to guarantee code quality and long-term maintainability.</li>
//                     <li>Established a robust Continuous Integration/Deployment (CI/CD) pipeline, leveraging pull requests and code reviews, while consistently optimizing application performance.</li>
//                     <li>Utilized Git and GitLab for version control and adhered to Agile development methodologies throughout the entire process, ensuring efficient collaboration and iterative delivery.</li>
//                   </ul>
//                 </Description>
//               </Company>
//             </Border>
//           </Item>
//         </Exp>


//         <Exp>
//           <Item
//             data-scroll
//             data-scroll-direction="horizontal"
//             data-scroll-speed="-2"
//           >
//             <Border>
//               <Company>
//                 <Info>
//                   <Role> &#123; Full-Stack Developer &#125;</Role>
//                   <Employer href="https://www.tunyat.com/" target="_blank"
//                    data-chaffle="en" 
//                    data-chaffle-speed="10" 
//                    data-chaffle-delay="50"
//                   >
//                     Tunyat <GoArrowUpRight className="icon" />
//                   </Employer>
//                 </Info>
//                 <JoinDate>&#40; Jun-2023 / Dec-2023 &#41;</JoinDate>
//                 <Description>
//                   <ul>
//                     <li>Designed and implemented highly scalable APIs that power multiple applications, leveraging Node.js, Express.js, and MongoDB.</li>
//                     <li>Developed a unique Rewarding Fund Management System that empowers farmers with access to essential financial resources and necessary supplies at competitive rates.</li>
//                     <li>Implemented unit tests and performed code reviews to ensure code quality and maintainability.</li>
//                     <li>Continuous Integration/Deployment Pipeline, pull requests, code reviews and optimize application performance.</li>
//                   </ul>
//                 </Description>
//               </Company>
//             </Border>
//           </Item>

//           <Item className='mockItem'>
//           </Item>
//         </Exp>


//         <Exp>

//           <Item>
//           </Item>

//           <Item
//             data-scroll
//             data-scroll-direction="horizontal"
//             data-scroll-speed="2"
//           >
//             <Border>
//               <Company>
//                 <Info>
//                   <Role> &#123; Web Developer &#125;</Role>
//                   <Employer
//                     data-chaffle="en" 
//                     data-chaffle-speed="10" 
//                     data-chaffle-delay="50"
//                   >
//                     MDITS <GoArrowUpRight className="icon" />
//                   </Employer>
//                 </Info>
//                 <JoinDate>&#40; Jan-2022 / May-2023 &#41;</JoinDate>
//                 <Description>
//                   <ul>
//                     <li>Developed, implemented and modified 4+ web apps and mobile applications.</li>
//                     <li>Worked on multiple projects using the MERN stack and delivered them on time.</li>
//                     <li>Developed and implemented backend logic using Aws Lambda, Node.js, expressjs and MongoDB.</li>
//                     <li>Mentored junior developers and provided technical support as needed.</li>
//                   </ul>
//                 </Description>
//               </Company>
//             </Border>
//           </Item>
//         </Exp>


//         <Exp>
//           <Item
//             data-scroll
//             data-scroll-direction="horizontal"
//             data-scroll-speed="-2"
//           >
//             <Border>
//               <Company>
//                 <Info>
//                   <Role> &#123; Junior Developer &#125;</Role>
//                   <Employer href="" target="_blank" data-chaffle="en" 
//                    data-chaffle-speed="10" 
//                    data-chaffle-delay="50">
//                     MDITS <GoArrowUpRight className="icon" />
//                   </Employer>
//                 </Info>
//                 <JoinDate>&#40; Jun-2020 / Dec-2021 &#41;</JoinDate>
//                 <Description>
//                   <ul>
//                     <li>Developed, implemented, and modified 3+ web apps and mobile applications.</li>
//                     <li>Assisted senior developers in building backend components using Node.js and Express.js.</li>
//                     <li>Collaborated with the team to design and implement RESTful APIs for data exchange between frontend and backend.</li>
//                   </ul>
//                 </Description>
//               </Company>
//             </Border>
//           </Item>

//           <Item className='mockItem'>
//           </Item>

//         </Exp>


//         <Exp>

//           <Item className='mockItem'>
//           </Item>

//           <Item
//             data-scroll
//             data-scroll-direction="horizontal"
//             data-scroll-speed="2"
//           >
//             <Border>
//               <Company>
//                 <Info>
//                   <Role> &#123; Intern &#125;</Role>
//                   <Employer href="https://www.globalwave.com.mm/" target="_blank" data-chaffle="en" 
//                    data-chaffle-speed="10" 
//                    data-chaffle-delay="50">
//                     Global Wave Technology <GoArrowUpRight className="icon" />
//                   </Employer>
//                 </Info>
//                 <JoinDate>Dec-2019 / Feb-2020</JoinDate>
//                 <Description>
//                   <ul>
//                     <li>Developed a website using .NET Core, C#, JQuery, HTML, Javascript, Angular and Bootstrap.</li>
//                     <li>Designed dynamic pages using HTML, Css, JQuery, Javascript and Augular js.</li>
//                     <li>Used Angular js components like modules, controllers, and build-in models with single page Applications.</li>
//                   </ul>
//                 </Description>
//               </Company>
//             </Border>
//           </Item>

//         </Exp>

//       </Container>

//     </Section>
//   );
// };

// export default Experience;


import { motion } from 'framer-motion';
import styled from 'styled-components';
import { GoArrowUpRight } from "react-icons/go";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 0 auto;
  display: flex;
  // justify-content: center;
  // align-items: center;
  position: relative;
  background-color: #202020;
  //background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(180)'%3E%3Crect width='100%25' height='100%25' fill='rgba(32, 32, 32,1)'/%3E%3Cpath d='M-10-1h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 39h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 29.5h60v1h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M29.5-10v60h1v-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M9-10v60h2v-60z' fill='rgba(37, 37, 37,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-weight: 250;
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 1rem;
  // z-index: -1;
  opacity: 0.2;
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Container = styled.div`
  width: 100%;
`;

const Exp = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 64em){
    grid-template-columns: 1fr;
   }
`

const Item = styled(motion.div)`
  border: 1px solid ${(props) => props.theme.secondaryText};
  display: flex;
  flex-direction: row;
  cursor: pointer;
  
 
    // .description{
    //   display: none;
    // }
 
`

const Company = styled(motion.div)`
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 2rem;
  gap: 1rem;
  transition: all 1s;

  &:hover{
    border: 1px solid ${(props) => props.theme.text};
    background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='40' height='40' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(180)'%3E%3Crect width='100%25' height='100%25' fill='rgba(32, 32, 32,1)'/%3E%3Cpath d='M-10-1h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 39h60v2h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M-10 29.5h60v1h-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M29.5-10v60h1v-60z' fill='rgba(37, 37, 37,1)'/%3E%3Cpath d='M9-10v60h2v-60z' fill='rgba(37, 37, 37,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
    .description{
      display: flex;
    }
  }
`


const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

const Role = styled.h3`
  color: ${(props) => props.theme.text}
`

const Employer = styled.a`
  color: ${(props) => props.theme.secondaryText};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.secondaryText};
  border-top: 1px solid ${(props) => props.theme.secondaryText};
  gap: 0.5rem;
  transition: all 0.5s;
  &:hover{
    transform: scale(1.1);
    color: ${(props) => props.theme.text};
  }
`

const JoinDate = styled.p`
  color: ${(props) => props.theme.secondaryText};
  font-size: ${(props) => props.theme.fontxs};
`

const Description = styled(motion.div)`
  color: ${(props) => props.theme.secondaryText};
  text-align: justify;
  padding-left: 0.5rem;
  ul {
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
  }
`

const Experience = () => {


  return (
    <Section className="exp">
      <Title
        data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
      >
        Experiences...
      </Title>

      <Container id="direction">
        <Exp  >
          <Item
          // data-chaffle="en" 
         
          >
               <Company  
                 whileHover={{ scale: 1.1 }}
               >
                 <Info>
                   <Role 
                    
                   > &#123; Full-Stack Developer &#125;</Role>
                   <Employer 
                    href="https://www.linkedin.com/company/caringcodecreation/" 
                    target="_blank" 
                   >
                     C3 <GoArrowUpRight className="icon" />
                   </Employer>
                 </Info>
                 
                 <Description
                  className='description'
                 >
                  <ul>
                    <li>Design and development of a full-stack POS web application utilizing the MERN stack (MongoDB, Express, React, Node.js) for efficient inventory management and streamlined checkout processes.</li>
                    <li>Implemented unit tests and rigorous code reviews to guarantee code quality and long-term maintainability.</li>
                    <li>Established a robust Continuous Integration/Deployment (CI/CD) pipeline, leveraging pull requests and code reviews, while consistently optimizing application performance.</li>
                    <li>Utilized Git and GitLab for version control and adhered to Agile development methodologies throughout the entire process, ensuring efficient collaboration and iterative delivery.</li>
                  </ul>              
                  </Description>

                  <JoinDate>&#40; Jan-2024 / Now &#41;</JoinDate>
               </Company>
          </Item>

          <Item>
              <Company  whileHover={{ scale: 1.1 }}>
                 <Info>
                   <Role 
                    
                   > &#123; Full-Stack Developer &#125;</Role>
                   <Employer 
                    href="https://www.tunyat.com/" 
                    target="_blank" 
                   >
                     Tunyat <GoArrowUpRight className="icon" />
                   </Employer>
                 </Info>
                 
                 <Description
                  className='description'
                 >
                    <ul>
                      <li>Designed and implemented highly scalable APIs that power multiple applications, leveraging Node.js, Express.js, and MongoDB.</li>
                      <li>Developed a unique Rewarding Fund Management System that empowers farmers with access to essential financial resources and necessary supplies at competitive rates.</li>
                      <li>Implemented unit tests and performed code reviews to ensure code quality and maintainability.</li>
                      <li>Continuous Integration/Deployment Pipeline, pull requests, code reviews and optimize application performance.</li>
                    </ul>               
                  </Description>

                  <JoinDate>&#40; Jun-2023 / Dec-2023 &#41;</JoinDate>
               </Company>
          </Item>

          <Item>
          <Company  whileHover={{ scale: 1.1 }}>
                 <Info>
                   <Role 
                    
                   > &#123; Web Developer &#125;</Role>
                   <Employer 
                    href="" 
                    target="_blank" 
                   >
                     MDITS <GoArrowUpRight className="icon" />
                   </Employer>
                 </Info>
                 
                 <Description
                  className='description'
                 >
                   <ul>
                    <li>Developed, implemented and modified 4+ web apps and mobile applications.</li>
                    <li>Worked on multiple projects using the MERN stack and delivered them on time.</li>
                    <li>Developed and implemented backend logic using Aws Lambda, Node.js, expressjs and MongoDB.</li>
                    <li>Mentored junior developers and provided technical support as needed.</li>
                  </ul>               
                  </Description>

                  <JoinDate>&#40; Jan-2022 / May-2023 &#41;</JoinDate>
               </Company>
          </Item>

          <Item>
               <Company  whileHover={{ scale: 1.1 }}>
                 <Info>
                   <Role 
                    
                   > &#123; Junior Developer &#125;</Role>
                   <Employer 
                    href="" 
                    target="_blank" 
                   >
                     MDITS <GoArrowUpRight className="icon" />
                   </Employer>
                 </Info>
                 
                 <Description
                  className='description'
                 >
                   <ul>
                    <li>Developed, implemented, and modified 3+ web apps and mobile applications.</li>
                    <li>Assisted senior developers in building backend components using Node.js and Express.js.</li>
                    <li>Collaborated with the team to design and implement RESTful APIs for data exchange between frontend and backend.</li>
                  </ul>                
                  </Description>

                  <JoinDate>&#40; Jun-2020 / Dec-2021 &#41;</JoinDate>
               </Company>
          </Item>

          <Item>
               <Company  whileHover={{ scale: 1.1 }}>
                 <Info>
                   <Role 
                    
                   > &#123; Intern &#125;</Role>
                   <Employer 
                    href="https://www.globalwave.com.mm/" 
                    target="_blank" 
                   >
                     Global Wave Technology <GoArrowUpRight className="icon" />
                   </Employer>
                 </Info>
                 
                 <Description
                  className='description'
                 >
                  <ul>
                    <li>Developed a website using .NET Core, C#, JQuery, HTML, Javascript, Angular and Bootstrap.</li>
                    <li>Designed dynamic pages using HTML, Css, JQuery, Javascript and Augular js.</li>
                    <li>Used Angular js components like modules, controllers, and build-in models with single page Applications.</li>
                  </ul>               
                  </Description>

                  <JoinDate>&#40; Dec-2019 / Feb-2020 &#41;</JoinDate>
               </Company>
          </Item>
        </Exp>

      </Container>

    </Section>
  );
};

export default Experience;




