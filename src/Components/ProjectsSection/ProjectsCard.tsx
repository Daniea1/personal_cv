import React from "react";
import { projectData } from "../infoArray";
import { customColor } from "../../style";

const ProjectsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectData.map((item) => (
                <div key={item.title} className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className={`px-5 py-5 rounded-[20px] w-[270px] h-[470px] grid justify-items-center
                    ${customColor.gradientGreyNoDarkMode} shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl`}>
                        <div className="flex items-center justify-between cursor-pointer">
                            <img src={`${item.projectPicture}`} alt={item.title} />
                        </div>
                        <div className="flex items-center justify-between cursor-pointer">
                            <h2 className={`text-lg font-semibold ${customColor.gradientBlue} dark:text-black`}>
                                {item.title}
                            </h2>
                        </div>
                        <div className="flex items-center mt-2 text-white dark:text-black max-h-32 overflow-y-auto">
                            {item.description}
                        </div>
                        <div className="flex items-center mt-2 text-white dark:text-black">
                            <button
                                type="button"
                                className={`py-2 px-3 ${customColor.buttonGradientBlue} font-poppins font-medium text-[14px] text-white outline-none rounded-xl`}
                            >
                                <a href={item.kildeKode} target="_blank" rel="noopener noreferrer">
                                    Kilde kode
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsCard;