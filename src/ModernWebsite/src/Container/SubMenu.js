import React , {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fork from '../Assets/decent gut=y.jpeg';
import './SubMenu.css'

function Submenu(props) {
    return ( 
        <div style={{ marginBottom:'1rem'}}>
            
            <img src={fork} alt='spoon' className='subMenu__spoon_img'/> 

        </div>
     );
}

export default Submenu;