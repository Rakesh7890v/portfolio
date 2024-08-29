import React from 'react';
import html from './images/html.png';
import css from './images/css.png';
import react from './images/react.png';
import java from './images/java.png';

const About = () => {
  return (
    <div className='about-me'>
        <div className="about-container">
            <div className="about-section">
              <h1><span>About</span> Me</h1>
              <hr className='line'/>
              <p>Hi, I'm Rakesh! I'm a passionate engineer currently pursuing my B.Tech in AI & DS at KNCET. I specialize in front-end development and generative AI, where I enjoy blending creativity with technical skills to build impactful solutions.</p>
            </div>
            <div className='my-works'>
               <h1><span>My</span> Works</h1>
               <hr className='line'/>
               <div className="working">
                    <div className="work1"> 
                            <div className="works">
                              <div className="works-head">
                                <img src={html} alt="HTML" />
                                <h2>HTML</h2>
                              </div>
                              <p>I can create organized web content that looks good and is easy to use.</p>
                            </div>
                            <div className="works">
                              <div className="works-head">
                                <img src={css} alt="CSS" />
                                <h2>CSS</h2>
                              </div>
                              <p>I make websites look great by styling them in various ways.</p>
                            </div>
                    </div> 
                    <div className="work2">
                            <div className="works">
                              <div className="works-head">
                                <img src={react} alt="React" />
                                <h2>ReactJS</h2>
                              </div>  
                              <p>I build websites that can dynamically respond to user interactions, making them more engaging and user-friendly.</p>
                            </div>
                            <div className="works">
                              <div className="works-head">
                                <img src={java} alt="Java" />
                                <h2>Java</h2>
                              </div>
                              <p>I solve problems to enhance my logical and programming skills, and I create AWT software applications.</p>
                            </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;