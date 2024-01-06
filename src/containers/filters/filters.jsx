import React from "react";
import './filters.css';
import { FilterCard } from "../../components";
import img1 from '../../assets/filter_1.jpeg';
import img2 from '../../assets/filter_2.jpeg';
import img3 from '../../assets/filter_3.jpeg';
import img4 from '../../assets/filter_4.jpeg';
import img5 from '../../assets/filter_5.jpeg';
import img6 from '../../assets/filter_6.jpeg';
import avatar1 from '../../assets/avatar_1.png';
import avatar2 from '../../assets/avatar_2.png';
import avatar3 from '../../assets/avatar_3.png';
import avatar4 from '../../assets/avatar_4.png';
import avatar5 from '../../assets/avatar_5.png';
import avatar6 from '../../assets/avatar_6.png';
import colorbutton from "../../assets/long-button-2.png";
import clearbutton from "../../assets/long-clear.png";

const Filter = () => {

    return (
        <div className="filter-bg">
            <div className="space-86h"></div>
            <div className="filter-heading">
                <div className="text">Welcome to the</div>
                <div className="filter-row">
                    <div className="text">top</div>
                    <div className="space-20w"></div>
                    <div className="gradient-text">games</div>
                </div>
            </div>

            <div className="filter-row">


                <div className="button-container">
                    <img src={colorbutton} alt="colorbtn" />
                    <div className="overlay">
                        NEWEST GAMES
                    </div>
                </div>


                <div className="button-container">
                    <img src={clearbutton} alt="clearbtn" />
                    <div className="overlay">
                        LATEST GAMES
                    </div>
                </div>


                <div className="button-container">
                    <img src={clearbutton} alt="clearbtn" />
                    <div className="overlay">
                        FIGHT GAMES
                    </div>
                </div>


                <div className="button-container">
                    <img src={clearbutton} alt="clearbtn" />
                    <div className="overlay">
                        SPORT GAMES
                    </div>
                </div>

            </div>
            <div className="space-86h"></div>
            <div className="filter-row">
                <FilterCard img={avatar1} subsubtext={'Gillette'} subtext={'Cameron Williamson'} mainImg={img1} />
                <div className="space-27w"></div>
                <FilterCard img={avatar2} subsubtext={'Louis Vuitton'} subtext={'Dianne Russell'} mainImg={img2} />
                <div className="space-27w"></div>
                <FilterCard img={avatar3} subsubtext={'MasterCard'} subtext={'Jane Cooper'} mainImg={img3} />

            </div>
            <div className="space-86h"></div>
            <div className="filter-row">

                <FilterCard img={avatar4} subsubtext={'The Walt Disney Company'} subtext={'Cody Fisher'} mainImg={img4} />
                <div className="space-27w"></div>
                <FilterCard img={avatar5} subsubtext={'Gillette'} subtext={'Wade Warren'} mainImg={img5} />
                <div className="space-27w"></div>
                <FilterCard img={avatar6} subsubtext={"L'Oréal"} subtext={'Robert Fox'} mainImg={img6} />
            </div>



        </div>
    );
}

export default Filter;
