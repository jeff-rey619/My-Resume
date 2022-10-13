import React , {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faHotel,
    faXmarkCircle
    
  } from "@fortawesome/free-solid-svg-icons";
  import './navbar.css'
  import Logo from '../../Assets/logo.jpg';
  import  ReactDOM  from 'react-dom';


function Navbar() {
    const [toggle , setToggle]= useState(false);

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
{/* <img src={Logo} alt="App Logo" /> */}
        </div>
        <ul className='app__navbar-links'>
<li className='p__opensans'><a href='#home'> Profile</a></li>
<li className='p__opensans'><a href='#about'> Education</a></li>
<li className='p__opensans'><a href='#menu'> Skills</a></li>
<li className='p__opensans'><a href='#award'> Experience</a></li>
<li className='p__opensans'><a href='#contact'> Contact</a></li>
        </ul>
       
       <div className='app__navbar-smallscreen'>
   <FontAwesomeIcon fontSize={27} icon={faBars} onClick={()=>{ setToggle(true)}} />
   {toggle&& (
        ReactDOM.createPortal(<div className='app__navbar-smallscreen_overlay flex__center '>
        <FontAwesomeIcon className='overlay__close' fontSize={27} icon={faXmarkCircle} onClick={()=>{setToggle(false)}} />
        <ul className='app__navbar-smallscreen-links'>
     <li className='p__opensans'><a href='#home'> Home</a></li>
     <li className='p__opensans'><a href='#about'> About</a></li>
     <li className='p__opensans'><a href='#menu'> Menu</a></li>
     <li className='p__opensans'><a href='#award'> Award</a></li>
     <li className='p__opensans'><a href='#contact'> Contact</a></li>
             </ul>
        </div> , document.getElementById('Website-OverLay'))
   
   )}
   
 
       </div>
    </nav>
  )
}

export default Navbar