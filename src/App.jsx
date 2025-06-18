import About from './About';
import './App.css';
import Contact from './Contact';
import MenuBar from './MenuBar';
import Resume from './Resume';
import { Route, Routes } from 'react-router-dom';
import Works from './Works';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import back from './images/background.mp4';

function App() {
  const [showMenu, setMenuShow] = useState(
    localStorage.getItem('showMenu') === 'true'
  );
  const [menu, setMenu] = useState(
    localStorage.getItem('menu') === 'true'
  );
  const [closemenu, setCloseMenu] = useState(
    localStorage.getItem('closeMenu') === 'true'
  );
  const [showSplash, setShowSplash] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const welcomeMessage = "Welcome to my Portfolio. Discover who I am and what I create.";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 970) {
        setMenuShow(true);
        setMenu(false);
        localStorage.setItem('showMenu', 'true');
        localStorage.setItem('menu', 'false');
      } else {
        setMenu(true);
        setMenuShow(false);
        setCloseMenu(false);
        localStorage.setItem('showMenu', 'false');
        localStorage.setItem('menu', 'true');
        localStorage.setItem('closeMenu', 'false');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < welcomeMessage.length) {
        setDisplayText(welcomeMessage.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        
        setTimeout(() => {
          setShowSplash(false);
        }, 3000);
      }
    }, 50);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(typingInterval);
    };
  }, []);

  const handleShow = () => {
    setMenu(true);
    setMenuShow(false);
    setCloseMenu(true);
    localStorage.setItem('menu', 'true');
    localStorage.setItem('showMenu', 'false');
    localStorage.setItem('closeMenu', 'true');
  }

  const handleHide = () => {
    setMenu(false);
    setMenuShow(true);
    setCloseMenu(false);
    localStorage.setItem('menu', 'false');
    localStorage.setItem('showMenu', 'true');
    localStorage.setItem('closeMenu', 'false');
  }

  return (
    <div className="App">
      {showSplash && (
        <div className={`splash-screen ${isTypingComplete ? 'fade-out' : ''}`}>
          <div className="splash-content">
            <h1>RAKESH V</h1>
            <div className="typewriter-container">
              <p className="typewriter-text">{displayText}</p>
              <span className={`cursor ${isTypingComplete ? 'hidden' : ''}`}>|</span>
            </div>
          </div>
        </div>
      )}
      
      {menu && <MenuBar closemenu={closemenu} handleHide={handleHide} setMenu={setMenu} setMenuShow={setMenuShow} />}
      <video autoPlay loop muted playsInline className='background-clip'>
        <source src={back} type='video/mp4'/>
      </video>
      <div className='all-container'>
        {showMenu && <FontAwesomeIcon icon={faBars} className='fabar' onClick={handleShow} />}
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/works' element={<Works />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;