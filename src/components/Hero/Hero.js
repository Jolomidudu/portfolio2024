import React, { Component } from "react";
import { IoIosLaptop,  IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { DiFirebase,DiNodejsSmall, DiPhp, DiReact, DiWordpress,DiGitBranch} from 'react-icons/di';
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { data } from '../../constants/myprojects';
import { myapps } from '../../constants/myapps';
import { RiPencilRuler2Line } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import "./../../styles/sites.scss";



  
class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        
        
        <div className="Section" >

        

        <div className="LeftSection">
        

            <div className="SectionTitle" main center>
                       
                               <div className="LogCard"> 
                               <img className="imgi" src={'/images/pure.jpg'} alt="Aboutme" />
                               
                               </div>
                          
                           Hello You <br /> 
                           I am  <span style={{color:'black'}}>Jolomi DUDU</span> <br /> <br />
                           310+ Web-App <IoIosLaptop color="white" size="2rem"/> <br />38+ Mobile App 
                           <HiOutlineDeviceMobile color="white" size="2rem" /> <br />
                           385+ UI-UX Designed <RiPencilRuler2Line color="white" size="2rem"/> <br />
           </div>

 <div className="Papa">
 <a className="Pikin" href="#projects"> My Projects</a> <br />
   <a className="Pikin" href="#services"> My Services </a> 
   <a className="Pikin" href="#contact"> Contact Me </a>
   
 </div>

 <div id="projects">
 <br/>
            <br/>

            <div style={{color:'white', fontSize: '20px'}}>
                RECENTS WEB APPS
            </div>
            <div className="Boxes"> 
            {data.map(({ index, image, title, visit }) => (
            <div className="Box" key={index}> 

                 <img src={image} alt=""/>
                 
                <h3 className="HeaderThree" title>{title}</h3>
               
                 <a className="ProjectLinks" href={visit} rel="noreferrer" target="_blank">
                    View Project
                 </a>

            </div>
          ))}



            </div>
            </div>

            <div id="projects">
 <br/>
            <br/>

            <div style={{color:'white', fontSize: '20px'}}>
                RECENTS Mobile APPS
            </div>
            <div className="Boxes"> 
            {myapps.map(({ index, image, title, visit }) => (
            <div className="Box" key={index}> 

                 <img src={image} alt=""/>
                 
                <h3 className="HeaderThree" title>{title}</h3>
               
                 <a className="ProjectLinks" href={visit} rel="noreferrer" target="_blank">
                    View Project
                 </a>

            </div>
          ))}



            </div>
            </div>

            <div id="services"> 

            <div className="Section">
               
     
     <br />
     <div className="SectionTitle">My Services</div>
    {/* <div className="SectionText">
      I am into a wide range of Business technology services of which a few are Graphic Design,
       Web Development, Android/IOS app dev, Networking, Data Minning , Analytics &amp; a bit of Real estate.
    </div> */}
    <div className="List">
       <div className="ListItem">
         
         
         <div className="ListContainer">
           <div className="ListTitle">UI - UX Design </div>
           <div className="ListParagraph">
             Logo(Brand Design) ₦ 20,000 <br />
             Posters ₦ 20k - 400k <br />
             Business Card ₦ 30,000/100 cps <br />
             Flyers ₦ 35,000 /100copies <br />
             Product Design ₦ 35,000 /scope <br />
             3D Designs ₦ 70,000 /view
           </div>
         </div>
       </div>

       <div className="ListItem">
         
         
       <div className="ListContainer">
       <div className="ListTitle">Web Development</div>
       <div className="ListParagraph">
            (Web design, domain, hosting, analytics, Google adsense, Web security, Social Marketing) <br />
             Basic ₦ 200,000 +<br />
             Business ₦ 250,000 + <br />
             Network Marketing ₦ 380,000 +<br />
             Finance ₦ 450,000 +<br />
             Real Estate ₦ 600,000 +<br />
             Blog/Vlog ₦ 650,000 +<br />
             Food Delivery ₦ 700,000 +<br />    
             Dating ₦ 880,000 +<br />
             Ecommerce ₦ 2,500,000 +<br />
             Banking ₦ 6,800,000 +<br /> 
             Betting ₦ 8,500,000 +<br />
             
           </div>
         </div>
       </div>


       <div className="ListItem">
         
         
       <div className="ListContainer">
       <div className="ListTitle">Mobile App Development</div>
       <div className="ListParagraph">
             Android, IOS, Flutter<br />
             ( informative, School, Store, Dating, fintech, Church, Music, Charity, Business tool, health-care, Logistics &amp; more ) <br />
             Range <br />
             ₦ 800,000 - ₦ 85 Million

             
           </div>
         </div>
       </div>

    </div>

    <div className="SectionText">Project Start Up Fee is 70%. & 30% at delivery</div>
    <div className="SectionText">Web App Monthly Maintenance - <br />
    <span className="ListTo">₦ 125,000 / Month</span> <br />
(updating content pics n details, improving search keywords, optimizing website speed, updating security and plugins)</div>



<div className="SectionText">Social Media Maintenance - <br />
<span className="ListTo">₦ 200,000 / Month</span> <br />
(content creation, 1 wide range ads per week, reels on instagram, tiktok, twitter, facebook and linkedin)</div>
  </div> 



            </div>

            <div id="stack">
            <div className="Section">
            
     
            <br />
                   <div className="SectionTitle">My Stacks</div>
           <div className="SectionText">
             I work with a range of stacks in the web app and mobile development space from front end to back end
           </div>
           <div className="List">
       
                                       <div className="ListItem">
                                           <SiAdobexd color='white'  size='3rem'/>
                                           <SiAdobephotoshop  color='white' size='3rem'/>
                                           <SiAdobeillustrator color='white'  size='3rem'/>
                                           
                                           
                                           <div className="ListContainer">
                                           <div className="ListTitle">UI-UX Design</div>
                                           <div className="ListParagraph">
                                               Experienced with <br />
                                               Photoshop, Illustrator, Figma, XD <br />
                                               Coreldraw, Canva.
                                           </div>
                                           </div>
                                       </div>
       
                                       <div className="ListItem">
                                           <DiReact color='white' size='3rem'/>
                                           <DiWordpress color='white' size='3rem'/>
                                           <DiPhp color='white' size='3rem'/>
                                           
                                           <div className="ListContainer">
                                           <div className="ListTitle">Front-End</div>
                                           <div className="ListParagraph">
                                               Experienced with <br />
                                               React-js,Next js, Nuxt js, Php, Wordpress <br />
                                               Kotlin, Flutter, Next-js, JS, Bootstrap. 
                                           </div>
                                           </div>
                                       </div>
       
                                       <div className="ListItem">
                <DiGitBranch color='white'size='3rem'/>
                <DiFirebase color='white' size='3rem'/>
                <DiNodejsSmall color='white' size='3rem'/>
                
                <div className="ListContainer">
                <div className="ListTitle">Back-End</div>
                <div className="ListParagraph">
                    Experienced with <br />
                    Node-js, laravel, MongoDB, Firebase, SQL <br />
                     AWS, Cpanel, Git, Python 
                  </div>
                </div>
              </div>
           </div>
           
         </div>

            </div>
            <div>

            </div>

            <div id="contact">

            <div className="Section">
            <div className="FooterWrapper"> 
          
          <div className="ContactList" style={{fontSize:'25px'}}>Hello &amp; Welcome </div>
          <div className="ContactText"> You eager to get a project done ? </div>
          
          <div className="ContactList"><ol>
  <li><span>*</span> Web-app </li>
  <li><span>*</span> Mobile App </li>
  <li><span>*</span> Logo</li>
  <li><span>*</span> Data Analytics</li>
</ol></div>

<div className="ContactList"><ol>
  <li><span>*</span> 3D/Product Design </li>
  <li><span>*</span> Tech Support</li>
</ol></div>

          
      <div className="ContactText">Get in Touch (Monday - Saturday) 8:30 am - 7:30 pm GMT +1 </div>
      <div className="ContactText">Ajah, Lagos, Nigeria</div>

      <div class="LinkList">
        <div className="LinkColumn">
          <div className="LinkTitle">Call</div> 
          <a className="LinkItem" href="tel:234-810-916-6320"><FiPhoneCall size="2rem" /></a>
        </div>
        <div className="LinkColumn">
        <div className="LinkTitle">Email</div>
          <a className="LinkItem" href="mailto:jollofdudu@gmail.com">
            jollofdudu@gmail.com
          </a>
        </div>
        
      </div>
      <div className="SocialIconsContainer">
        <div className="CompanyContainer">
          <div className="Slogan"> © Jaydevelops 2024</div>
        </div>
        <div className="SocialContainer">
        <a className="SocialIcons"  href="https://flutterwave.com/pay/jaydevelops" rel="noreferrer" target="_blank">
            <FaAmazonPay size="2rem" color="white" />
          </a>
          <a className="SocialIcons" href="https://www.youtube.com/channel/UCCqxPm0IbkL_zg3Ugr8lstQ" rel="noreferrer" target="_blank">
            <AiOutlineYoutube size="2rem" color="white" />
          </a>
          <a className="SocialIcons" href="https://wa.me/2348109166320" rel="noreferrer" target="_blank">
            <IoLogoWhatsapp size="2rem" color="white" />
          </a>
        </div>
      </div>
      
    </div>  
              </div>

           


            </div>


 
 
</div>

</div>


</React.Fragment>  

    );
  }
}
  

export default Hero;

