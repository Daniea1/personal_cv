import React from "react";
import {ProjectData} from "../infoArray";
import {customColor} from "../../style";

const ProjectsCard = () => {
    return (
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" >
            {ProjectData.map((item) => (
                <div className = "col-span-1 md:col-span-1 lg:col-span-1" >
                    <div className = {`px-5 py-5 rounded-[20px] w-[270px] h-[470px] grid justify-items-center
                     ${customColor.cardsBackground}`} >
                        <div className = "flex items-center justify-between cursor-pointer" >
                            <img src = {`${item.projectPicture}`} />
                        </div >
                        <div className = "flex items-center justify-between cursor-pointer" >
                            <h2 className = {`text-lg font-semibold ${customColor.gradientBlue}`} >
                                {item.title}
                            </h2 >
                        </div >
                        <div className = "flex items-center mt-2 text-white max-h-32 overflow-y-auto" >
                            {item.description}
                        </div >
                        <div className = "flex items-center mt-2 text-white" >
                            <button
                                type = "button"
                                className = {`py-4 px-6 ${customColor.buttonGradientBlue} font-poppins font-medium
                                 text-[18px] text-white outline-none rounded-xl`} >
                                <a href = {`${item.kildeKode}`} >
                                    Kilde kode
                                </a >
                            </button >
                        </div >
                    </div >
                </div >
            ))}
        </div >
    );
};

export default ProjectsCard;