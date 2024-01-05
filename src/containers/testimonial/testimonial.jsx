import React from "react";
import './testimonial.css';
import icons from '../../assets/icons.svg';
import { NormalBanner, TestimonialCard } from "../../components";
import avatar1 from '../../assets/testimonial_1.png';
import avatar2 from '../../assets/testimonial_2.png';


const Testimonial = () => {
    return (
        <div className="testimonial-bg">

            <div className="space-height"></div>
            <div className="row">
                <div className="column">
                    <NormalBanner />
                </div>
            </div>

            <div className="space-height"></div>
            <div className="testimonial-row">
                <TestimonialCard img={avatar1} name={'Arlene McCoy'} subtext={"McDonald's"} text={'One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.'} />
                <div className="space-width"></div>
                <TestimonialCard img={avatar2} name={'Kathryn Murphy'} subtext={"General Electric"} text={"Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming"} />
            </div>
            <div className="space-height-40h"></div>
            <div className="row">
                <div className="bottom-icons">
                    <img src={icons} alt="icons" />
                </div>

            </div>

        </div>
    );
}

export default Testimonial;