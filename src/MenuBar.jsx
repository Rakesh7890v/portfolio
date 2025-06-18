<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import rocky from './images/rakesh.jpeg';
import resume from './images/Rakesh_Resume.pdf';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ closemenu, handleHide, setMenu, setMenuShow }) => {

    const handleClick = () => {
        if (closemenu) {
            setMenu(false);
            setMenuShow(true);
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.setAttribute('download', 'Rakesh_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    const tags = [
        'Front-End Developer',
        'Programmer',
        'Gen-AI Enthusiast',
    ];
    const [currentTagIndex, setCurrentTagIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {
        if (letterIndex < tags[currentTagIndex].length) {
            const timeoutId = setTimeout(() => {
                setDisplayText((prev) => prev + tags[currentTagIndex][letterIndex]);
                setLetterIndex(letterIndex + 1);
            }, 100);
            return () => clearTimeout(timeoutId);
        } else {
            const timeoutId = setTimeout(() => {
                setCurrentTagIndex((prevIndex) => (prevIndex + 1) % tags.length);
                setDisplayText('');
                setLetterIndex(0);
            }, 1500);
            return () => clearTimeout(timeoutId);
        }
    }, [letterIndex, currentTagIndex]);

    return (
        <div>
            <div className={`${closemenu ? 'off-menu' : 'menu-container'}`}>
                {closemenu && <FontAwesomeIcon icon={faTimes} className='facross' onClick={handleHide} />}
                <div className="photo-section">
                    <img src={rocky} alt="profile" />
                    <h1>Rakesh <span>V</span></h1>
                </div>
                <div className='anime'>
                    <p>{displayText}</p>
                </div>
                <div className="menu-section">
                    <hr />
                    <div className="menus">
                        <h2 onClick={handleClick}><Link to='/' className='link'>About me</Link></h2>
                    </div>
                    <hr />
                    <div className="menus">
                        <h2 onClick={handleClick}><Link to='/resume' className='link'>Resume</Link></h2>
                    </div>
                    <hr />
                    <div className="menus">
                        <h2 onClick={handleClick}><Link to='/works' className='link'>Projects</Link></h2>
                    </div>
                    <hr />
                    <div className="menus">
                        <h2 onClick={handleClick}><Link to='/contact' className='link'>Contact</Link></h2>
                    </div>
                    <hr />
                </div>
                <div className="resume-container">
                    <h2 onClick={handleDownload}>Download CV</h2>
                </div>
            </div>
        </div>
    )
}

export default MenuBar;
=======
import React, { useState, useEffect } from 'react';
import rocky from './images/rakesh.jpeg';
import resume from './images/Rakesh_Resume.pdf';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ closemenu, handleHide, setMenu, setMenuShow }) => {

    const handleClick = () => {
        if (closemenu) {
            setMenu(false);
            setMenuShow(true);
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.setAttribute('download', 'Rakesh_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    const tags = [
        'Front-End Developer',
        'Programmer',
        'Gen-AI Enthusiast',
    ];
    const [currentTagIndex, setCurrentTagIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {
        if (letterIndex < tags[currentTagIndex].length) {
            const timeoutId = setTimeout(() => {
                setDisplayText((prev) => prev + tags[currentTagIndex][letterIndex]);
                setLetterIndex(letterIndex + 1);
            }, 100);
            return () => clearTimeout(timeoutId);
        } else {
            const timeoutId = setTimeout(() => {
                setCurrentTagIndex((prevIndex) => (prevIndex + 1) % tags.length);
                setDisplayText('');
                setLetterIndex(0);
            }, 1500);
            return () => clearTimeout(timeoutId);
        }
    }, [letterIndex, currentTagIndex]);

    return (
        <div>
            <div className={`${closemenu ? 'off-menu' : 'menu-container'}`}>
                {closemenu && <FontAwesomeIcon icon={faTimes} className='facross' onClick={handleHide} />}
                <div className="photo-section">
                    <img src={rocky} alt="profile" />
                    <h1>Rakesh <span>V</span></h1>
                </div>
                <div className='anime'>
                    <p>{displayText}</p>
                </div>
                <div className="menu-section">
                    <hr />
                    <div className="menus">
                        <h2 onClick={handleClick}><Link to='/' className='link'>About me</Link></h2>
                    </div>
                    <hr />
                    <div className="menus">
                        <h2 onClick={handleClick}><Link to='/resume' className='link'>Resume</Link></h2>
                    </div>
                    <hr />
                    <div className="menus">
                        <h2 onClick={handleClick}><Link to='/works' className='link'>Works</Link></h2>
                    </div>
                    <hr />
                    <div className="menus">
                        <h2 onClick={handleClick}><Link to='/contact' className='link'>Contact</Link></h2>
                    </div>
                    <hr />
                </div>
                <div className="resume-container">
                    <h2 onClick={handleDownload}>Download CV</h2>
                </div>
            </div>
        </div>
    )
}

export default MenuBar;
>>>>>>> 6b5128419d266a280e7b941509a59252a1abfc26
