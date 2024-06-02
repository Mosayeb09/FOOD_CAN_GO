import { useState } from 'react';
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setshowForm}) => {
    const [currentstate,setcurrentstate]=useState('Sign Up')
    return (
        <div className='loginpopup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentstate}</h2>
                    <img onClick={()=>setshowForm(false)} src={assets.cross_icon} alt="" />
                </div>
            </form>
        </div>
    );
};

export default LoginPopup;