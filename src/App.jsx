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

    return () => {
      window.removeEventListener('resize', handleResize);
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