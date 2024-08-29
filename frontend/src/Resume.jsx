import React, { useState } from 'react'

const Resume = () => {

    const [education] = useState([
        {
            id: 1,
            name: 'College',
            year: '2022-2026',
            desc: 'I am currently pursuing my B.Tech 3rd year Artificial intelligence and Data science at Kongunadu college of engineering and technology.(* with 9.35 CGPA)',
        },
        {
            id: 2,
            name: 'Higher Secondary',
            year: '2021-2022',
            desc: 'I did my Higher Secondary at Desia Matriculation Hr sec school, Vellore (with 79%)'
        },
        {
            id: 3,
            name: 'Secondary',
            year: '2019-2020',
            desc: 'I did my Secondary at Desia Matriculation Hr sec scchool, Vellore (with 86.8%)'
        }
    ])
  return (
    <div className='about-me'>
        <div className="about-container">
            <h1 className='edu-head'><span>Educ</span>ation</h1>
            <hr className='line'/>
            { education.map((educat) => <div className="education" key={educat.id}>
                <h2>{educat.name}</h2>
                <div className='year'>
                    <p>{educat.year}</p>
                </div>
                <p>{educat.desc}</p>
            </div>)}
            <hr className='line'/>

            <div className="skills-language">
                <div className="skills">
                    <h1 className='edu-head'>Ski<span>lls</span></h1>
                    <div className="skill one">
                        <h4>HTML</h4>
                        <div className="progress"><span></span></div>
                    </div>
                    <div className="skill two">
                        <h4>CSS</h4>
                        <div className="progress"><span></span></div>
                    </div>
                    <div className="skill three">
                        <h4>REACTJS</h4>
                        <div className="progress"><span></span></div>
                    </div>
                    <div className="skill four">
                        <h4>PYTHON</h4>
                        <div className="progress"><span></span></div>
                    </div>
                    <div className="skill five">
                        <h4>JAVA</h4>
                        <div className="progress"><span></span></div>
                    </div>
                </div>
                <div className="languages">
                    <h1 className='edu-head'>Lang<span>uages</span></h1>
                    <div className="lang">
                        <div className="language">
                            <h4>Tamil</h4>
                            <div className="loading-containerr">
                                <div className="loading-spinner"></div>
                            </div>
                        </div>
                        <div className="language">
                            <h4>English</h4>
                            <div className="loading-containerr">
                                <div className="loading-spinner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume