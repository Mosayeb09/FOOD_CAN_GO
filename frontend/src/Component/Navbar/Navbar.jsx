import './Navbar.css'
import { assets } from './../../assets/assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({setshowForm}) => {
    const [menu,setMenu] = useState(' ')
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className="logo" />
            <ul className="navbar-menu">
                <Link to={'/'} onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu('Menu')} className={menu==="Menu"?'active':''} >Menu</a>
                <a href='#app-download' onClick={()=>setMenu('Mobile-App')} className={menu==='Mobile-App'?'active':''} > Mobile-App </a>
                <a href='#footer' onClick={()=>setMenu('Contact us')} className={menu==='Contact us'?'active':''}>Contact us</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot">
                        {/* <img src= alt="" /> */}
                    </div>

                </div>
                <button onClick={()=>setshowForm(true)}>Sign in</button>

            </div>
            
        </div>
    );
};

export default Navbar;