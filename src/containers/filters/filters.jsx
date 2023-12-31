import React from "react";
import './filters.css';
import { FilterCard } from "../../components";

const Filter = () => {
    return (
        <div className="filter-bg">
            <div className="filter-heading">
                <div className="text">Welcome to the</div>
                <div className="filter-row">
                    <div className="text">top</div>
                    <div className="gradient-text">games</div>
                </div>
            </div>
            <div className="filter-row">
                buttons
            </div>

            <div className="filter-row">
                <FilterCard img={''} subsubtext={''} subtext={''} ></FilterCard>
                <FilterCard img={''} subsubtext={''} subtext={''} ></FilterCard>
                <FilterCard img={''} subsubtext={''} subtext={''} > </FilterCard>
            </div>

            <div className="filter-row">
                <FilterCard img={''} subsubtext={''} subtext={''} />
                <FilterCard img={''} subsubtext={''} subtext={''} />
                <FilterCard img={''} subsubtext={''} subtext={''} />
            </div>



        </div>
    );
}

export default Filter;

/** */