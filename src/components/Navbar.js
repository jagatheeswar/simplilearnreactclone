import React, {useState} from 'react';
import '../styles/Navbar.css';
import logoPath from '../images/Group 3.svg';

const Navbar= (props) => {
    const isWindowLarge= () => {
        if(window.innerHeight <= 700)
            return false;
        return true;
    }
    const [navListState, showNavList]= useState(false);
    const chooseClsName= ()=>{
        if(!isWindowLarge())
            return (navListState) ? 'blockdisplay' : 'hideEle';
        return '';
    }

    return (
        <div className= 'navbar'>
            <div className= 'title'>
                <img className= 'logo' src= {logoPath} />
                <button  className= 'toggleBtn' onClick= {() => showNavList(!navListState)}><b>≡</b></button>
            </div>

            <div className= {`btns ${chooseClsName()}`}>
                <button className= 'loginBtn'>Login</button>
                <button className= 'loginBtn'>Login</button>
                <button className= 'registerBtn'>Register</button>
            </div>
        </div>
    );
}

export default Navbar;