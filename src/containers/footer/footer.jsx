import React from "react";
import './footer.css';
import backgroundImage from '../../assets/footer_image.jpeg';
import star from '../../assets/star.svg';
import rectangle from '../../assets/rectangle.png';


const Footer = () => {
    return (
        <div className="footer-bg">

        
            <div className="banner-bar-row">

                <div className="banner-bar-text">Game Spanning</div>

                <img src={star} alt="star" />
                <div className="banner-bar-text">Action - Packed</div>
                <img src={star} alt="star" />
                <div className="banner-bar-text">Mind Bending</div>
                <img src={star} alt="star" />
                <div className="banner-bar-text">collection og games</div>
            </div>
            <img src={backgroundImage} alt="img" />

        </div>
    );
}

export default Footer;