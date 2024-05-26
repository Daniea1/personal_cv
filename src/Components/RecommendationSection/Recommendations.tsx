import React from 'react';
import {customColor} from "../../style";
import RecommendationsCard from "./RecommendationsCard";
const Recommendations = () => {
    return (
        <section id = "Projects" >
            <div className = "grid justify-items-center mb-24" >
                <div className = {` font-poppins font-semibold xs:text-[25px] text-[40px] 
                xs:leading-[26px] leading[21px] ${customColor.gradientBlue} uppercase mb-5 mt-5`} >
                    udtalelser
                </div >
                <div className = {` font-poppins xs:text-[12.5px] text-[20px] 
                xs:leading-[26px] leading[21px] text-gray-300 uppercase text-center mb-6`} >
                    Disse er de udtalelse, jeg har erhvervet mig gennem diverse arbejdspladser.
                </div >
                <div  >
                    <RecommendationsCard/>
                </div >
            </div >
        </section >
    )
};

export default Recommendations;