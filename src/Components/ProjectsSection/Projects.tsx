import React from 'react';
import {customColor} from "../../style";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <section id = "Projects" >
            <div className = "grid justify-items-center" >
                <div className = {` font-poppins font-semibold xs:text-[25px] text-[40px] 
                xs:leading-[26px] leading[21px] ${customColor.gradientBlue} uppercase mb-5 mt-5`} >
                    Projekter
                </div >
                <div className = {` font-poppins xs:text-[12.5px] text-[20px] 
                xs:leading-[26px] leading[21px] text-gray-300 uppercase text-center mb-6`} >
                    Disse er de projekter jeg har udarbejdet i min fritid.
                </div >
                <div  >
                    <ProjectsCard/>
                </div >
            </div >
        </section >
    )
};

export default Projects;