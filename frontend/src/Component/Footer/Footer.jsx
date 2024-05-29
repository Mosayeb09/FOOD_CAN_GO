import { assets } from '../../assets/assets';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non ullam fuga, assumenda asperiores minima nobis quam voluptatem, facilis tenetur veniam sequi eaque maiores perferendis esse nemo rerum ducimus dignissimos.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>


                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+8801621318409</li>
                        <li>mosayebhossain09@gmail.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className='footer-copyRight'>Copyright 2024 © Tomato.com - All rights reserved.</p>

        </div>
    );
};

export default Footer;