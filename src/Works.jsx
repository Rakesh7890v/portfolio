import React, { useState } from 'react';
import todo from './images/todo.png';
import fruit from './images/fruit.png';
import finance from './images/finance.png';
import bus from './images/bus.png';
import work from './images/work.png';
import ses from './images/ses.png';
import ammai from './images/ammai.png';
import mock from './images/mock.png';
import canteen from './images/canteen.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';

const Works = () => {

    const [projects, setProjects] = useState([
        {
            id: 1,
            image: canteen,
            name: 'Agent Based Canteen Management System',
            tech: 'LangChain, Gemini, ReactJs, Python and Flask',
            desc: "We created two different agents one for users to place orders in the college canteen, and another for inventory management. Everything is automated through these agents, and they can handle all related tasks efficiently.",
            view: 'https://www.youtube.com/watch?v=a2uTcFvW-Tg',
            code: '',
            expanded: false
        },
        {
            id: 2,
            image: mock,
            name: 'AI Driven Mock Interview',
            tech: 'LangChain, Gemini, ReactJs, CV, Python and Flask',
            desc: "The AI can conduct interviews based on the content mentioned in the candidate’s resume. It also detects facial expressions and provides appropriate feedback for each response.",
            view: 'https://www.youtube.com/watch?v=5RTYtdIotU0&feature=youtu.be',
            code: '',
            expanded: false
        },
        {
            id: 3,
            image: ses,
            name: 'Smart Education System',
            tech: 'ReactJs, NodeJs, ExpressJs, Python, LangChain and GeminiAI API',
            desc: 'The Out Smart Education System project integrates AI-driven learning with personalized assessments to enhance student engagement and understanding. It includes a Mock Interview feature that analyzes resumes and conducts AI-driven HR interviews, providing real-time feedback. This system helps students improve their communication skills and technical knowledge, preparing them for real-world job opportunities.',
            view: 'https://www.youtube.com/watch?v=CcfI1-OWbqM',
            code:'https://github.com/Rakesh20456/Smart_Education_System/',
            expanded: false
        },
        {
            id: 4,
            image: ammai,
            name: 'Ammaiyappa Agency',
            tech: 'ReactJS, NodeJS, ExpressJS and MongoDB',
            desc: 'Developed a dynamic e-commerce platform for Ammaiyappa Agency, enabling the owner to efficiently manage products including chocolates, cool drinks, and magazines through a secure login system.',
            view: 'https://ammaiyappa-agency.vercel.app/',
            code:'https://github.com/Rakesh7890v/Ammaiyappa-Agency',
            expanded: false
        },
        {
            id: 5,
            image: work,
            name: 'Employee Managment',
            tech: 'ReactJs',
            desc: 'Companies may have many information like project, employee details so we need to maintain the details in a efficient way. We can store the employee details and manager send the message to administart for adding, deleting, updating the employee and project details.',
            view: 'https://work-hub-system.netlify.app/',
            code:'https://github.com/Rakesh7890v/Work-Hub',
            expanded: false
        },
        {
            id: 6,
            image: finance,
            name: 'Finance Managment',
            tech: 'ReactJs',
            desc: 'Saving is necessary but we cant manage our saving. This website will ask your salary and expenses then make a calculation and show the progress of your saving based on your expense then show reccomendation to improve your savings.',
            view: 'https://financialgrowth.netlify.app/',
            code:'https://github.com/Rakesh7890v/Financial-growth',
            expanded: false
        },
        
        {
            id: 7,
            image: bus,
            name: 'Bus ticket Booking',
            tech: 'ReactJs',
            desc: 'Travelling is one of the good thing and public transport is reduce the pollution. Our website will helpful to book the ticket and choose the bus based on the timing and date then choose the seat and make a payment.',
            view: 'https://bus-tickets-booking.netlify.app/',
            code:'https://github.com/Rakesh7890v/Bus-ticket',
            expanded: false
        },
        {
            id: 8,
            image: fruit,
            name: 'Fruit-shop',
            tech: 'ReactJs',
            desc: 'Fruit Shop, where fresh fruits meet convenience! Explore our selection, add to cart, and securely check out for a delightful fruit experience.',
            view: 'https://fresh-carts.netlify.app/',
            code:'https://github.com/Rakesh7890v/Fresh-carts',
            expanded: false
        }
    ])

    const toggleExpand = (projectId) => {
        setProjects(prevProjects =>
            prevProjects.map(project =>
                project.id === projectId ? { ...project, expanded: !project.expanded } : project
            )
        );
    };

  return (
    <div className='about-me'>
        <div className="about-container">
            <h1><span>Proj</span>ects</h1>
            <hr className='line' />

        {projects.map((project) => <div className="project" key={project.id}>
                <div className="project-left">
                    <img src={project.image} alt="todo" />
                    <div>{project.name}</div>
                </div>
                <div className="project-right">
                    <div className="tech">
                        <h5>TECH STACK:</h5>
                        <p>{project.tech}</p>
                    </div>
                    <div className="description">
                        {project.expanded ? (
                            <p>{project.desc}</p>
                        ) : (
                            <p>{project.desc.slice(0, 100)}...</p>
                        )}
                    </div>
                    <p className='expand' onClick={() => toggleExpand(project.id)}>
                        {project.expanded ? 'Less' : 'More'}
                    </p>
                    <div className="link-see">
                        <a href={project.view} target='_blank' className='link' rel="noopener noreferrer">
                            View
                            <FontAwesomeIcon icon={faEye} className='icon'/>
                        </a>
                        <a  href={project.code} target='_black' className='link' rel="noopener noreferrer">
                            Code
                            <FontAwesomeIcon icon={faCode} className='icon'/>
                        </a>
                    </div>
                </div>
            </div> )}
        </div>
    </div>
  )
}

export default Works