import React , {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHotel,
  faXmarkCircle,
  
  
} from "@fortawesome/free-solid-svg-icons";

import { FaBeer , FaHtml5 , FaCss3 , FaReact, FaJs } from 'react-icons/fa';
import { Image } from '../../Assets/Food_Header.jpg';
import './header.css'
import Submenu from '../SubMenu';
import fork from '../../Assets/decent gut=y.jpeg';
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  
{ url: 'https://www.bing.com/images/search?view=detailV2&ccid=5or%2FQ%2Fua&id=798251EDFD497BC501D529226E9248C195C6E01D&thid=OIP.5or_Q_ual-arU2WZUjYPagHaE8&mediaurl=https%3A%2F%2Fwww.lifewire.com%2Fthmb%2FHTG1aEU0s81Pi9s8vbTar3NljOU%3D%2F5398x3599%2Ffilters%3Afill(auto%2C1)%2Fhttps-on-internet-search-bar-603713203-5a4bee8ac7822d0037292dde.jpg&exph=3599&expw=5398&q=image+url&simid=608031000107700723&form=IRPRST&ck=938FBAE398A5E2FA608C15E7FBD8DB60&selectedindex=3&ajaxhist=0&ajaxserp=0&vt=0&sim=11' },
{ url: 'https://www.bing.com/images/search?view=detailV2&ccid=5or%2FQ%2Fua&id=798251EDFD497BC501D529226E9248C195C6E01D&thid=OIP.5or_Q_ual-arU2WZUjYPagHaE8&mediaurl=https%3A%2F%2Fwww.lifewire.com%2Fthmb%2FHTG1aEU0s81Pi9s8vbTar3NljOU%3D%2F5398x3599%2Ffilters%3Afill(auto%2C1)%2Fhttps-on-internet-search-bar-603713203-5a4bee8ac7822d0037292dde.jpg&exph=3599&expw=5398&q=image+url&simid=608031000107700723&form=IRPRST&ck=938FBAE398A5E2FA608C15E7FBD8DB60&selectedindex=3&ajaxhist=0&ajaxserp=0&vt=0&sim=11' },
{ url: 'https://www.bing.com/images/search?view=detailV2&ccid=5or%2FQ%2Fua&id=798251EDFD497BC501D529226E9248C195C6E01D&thid=OIP.5or_Q_ual-arU2WZUjYPagHaE8&mediaurl=https%3A%2F%2Fwww.lifewire.com%2Fthmb%2FHTG1aEU0s81Pi9s8vbTar3NljOU%3D%2F5398x3599%2Ffilters%3Afill(auto%2C1)%2Fhttps-on-internet-search-bar-603713203-5a4bee8ac7822d0037292dde.jpg&exph=3599&expw=5398&q=image+url&simid=608031000107700723&form=IRPRST&ck=938FBAE398A5E2FA608C15E7FBD8DB60&selectedindex=3&ajaxhist=0&ajaxserp=0&vt=0&sim=11' },


];

function Header() {
  return (
    <>
    <div className='app__header app__wrapper section__padding '  id='home'>
      <div className='app__wrapper_info'>
      <img src={fork} alt='spoon' className='subMenu__spoon_img'/> 
   <div>   <h1 className='app__header-h1'>
  GEFFREY . J
   </h1>
   <h3 className='app__header-h3'>
   I’m currently a student , pursuing my bsc .cs degree who has a  love for web developing and passion for technology. Currently done my internships as a frontend developer.
Outside of work I am a musician and a
 chef . A firm believer that anything can be achieved with a little more focus on the detail and a spark of creative magic.

   </h3>
   </div>

      </div>

      <div className='app__wrapper_img'>

      </div>
      </div>

      <div className='app__header app__wrapper section__padding ' id='about' >
      <div className='app__wrapper_about_info'>
        <div>      <SimpleImageSlider
        width={300}
        height={450}
        images={images}
        showBullets={true}
        showNavs={true}
      />
</div>

<div>   <h1 className='app__about-h1'>
 Education
   </h1>
   <h3 className='app__about-h3'>
    <b>
   Montfort .Mat .Hr .Sec .School (Butt Road, St.Thomas Mount)
   </b>
   <div>
   [ LKG – 12 Th ]
   </div>

   <div className='app__about__inner-h3'>
    <b> Patrician College Of Arts & Science </b>
    <div>
    Pursuing my Bsc.Computer Science 
    </div>
   </div>

   </h3>
   </div>

      </div>
      </div >

      <div  className='app__header app__wrapper-menu section__padding ' id='menu' >
     

<div className='app__wrapper_menu_info'>
<div className='app__wrapper_menu_Skills'>
      <h1 className='app__about_Skills-h1'>
    Skills
    </h1>
  </div>


  <div className='app__menu_item'>
  
  <FaHtml5 style={{fontSize:'100'}} />
  <h3 className='app__menu_item-h3'>HTML - 5</h3>
  </div>
  <div className='app__menu_itemtwo'>
  
  <FaCss3 style={{fontSize:'100'}} />
  <h3 className='app__menu_item-h3'>CSS - 3</h3>
  </div>
  <div className='app__menu_itemthree'>
  
  <FaJs style={{fontSize:'100'}} />
  <h3 className='app__menu_item-h3'>Javascript</h3>
  </div>
  <div className='app__menu_itemfour'>
  
  <FaReact style={{fontSize:'100'}} />
  <h3 className='app__menu_item-h3'>React . JS</h3>
</div>

</div>
      </div>

      <div className='app__header app__wrapper award-section__padding ' id='award'>
      <div className='app__wrapper_award_info'>
      <h1 className='app__award_Skills-h1'>
    Experience
    </h1>

      </div>
      </div>

      </>
  )
}

export default Header