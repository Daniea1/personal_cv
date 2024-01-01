import React from 'react';
import {customColor} from "../../style";
import Accordion from "./Accordion";

const Competence = () => {
    return (
        <section id = "competence">
            <div className = "grid justify-items-center" >
                <div className = {` font-poppins font-semibold xs:text-[25px] text-[40px] 
                xs:leading-[26px] leading[21px] ${customColor.gradientBlue} uppercase mb-5 mt-10`} >
                    Færdigheder
                </div >
                <div >
                    <Accordion />
                </div >
            </div >
        </section >
    )
};

export default Competence;