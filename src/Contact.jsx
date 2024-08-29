import React from 'react';
import geek from './images/geek.png';
import leet from './images/leet.png';
import linkedin from './images/linkedin.png';
import git from './images/git.png';

const Contact = () => {
  return (
    <div className='about-me'>
        <div className="about-container">
            <div className="location">
                <h1><span>Loca</span>tion</h1>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248904.09058075584!2d78.9535258242531!3d12.8995918674971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbedda6917d262b5e!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1708184437115!5m2!1sen!2sin" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className="details-links">
                <div className="details">
                    <h1><span>Det</span>ails</h1>
                    <hr className='line'/>
                    <div className="detail">
                        <p><span>Name:</span> Rakesh V</p>
                        <p><span>Email:</span> rishirakesh587@gmail.com</p>
                        <p><span>Address:</span> Vellore, Tamil Nadu</p>
                        <p><span>Phone: </span> +91 8608615266</p>
                    </div>
                </div>

                <div className="links">
                    <h1><span>Lin</span>ks</h1>
                    <hr className='line' />
                    <div className="platforms">
                        <div className="plat-first">
                            <div className="platform">
                                <img src={git} alt="github" />
                                <h4><a href='https://github.com/Rakesh7890v' target='_blank' rel="noopener noreferrer" className='link'>Github</a></h4>
                            </div>
                            <div className="platform">
                                <img src={linkedin} alt="linkedin" />
                                <h4><a href='https://www.linkedin.com/in/rakeshrishi/' target='_blank' rel="noopener noreferrer" className='link'>LinkedIn</a></h4>
                            </div>
                        </div>
                        <div className="plat-second">
                            <div className="platform">
                                <img src={leet} alt="leet" />
                                <h4><a href='https://leetcode.com/u/wWkqhOUKdO/' target='_blank' rel="noopener noreferrer" className='link'>LeetCode</a></h4>
                            </div>
                            <div className="platform">
                                <img src={geek} alt="geeks" />
                                <h4><a href='https://www.geeksforgeeks.org/user/rishirakcmx7/' target='_blank' rel="noopener noreferrer" className='link'>GeeksForGeeks</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Contact;