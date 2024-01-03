import React from 'react';
import {customColor} from "../../style";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <section id = "Projects" >
            <div className = "grid justify-items-center" >
                <div className = {` font-poppins font-semibold xs:text-[25px] text-[40px] 
                xs:leading-[26px] leading[21px] ${customColor.gradientBlue} uppercase mb-5`} >
                    Projekter
                </div >
                <div  >
                    <ProjectsCard/>
                </div >
            </div >
        </section >
    )
};

export default Projects;