import React from "react";
import { projectData } from "../infoArray";
import { customColors } from "../../style";
import { motion } from 'framer-motion';

const ProjectsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectData.map((item, index) => (
                <div key={item.title} className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className={`px-5 py-5 w-[270px] h-[470px] flex flex-col items-center justify-between dark:border-none border-[1px] border-gray-800
                    shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl`}>
                        <div className="flex flex-col items-center justify-center h-1/2">
                            <img
                                src={`${item.projectPicture}`}
                                alt={item.title}
                                className="max-h-40 object-contain mb-4"
                            />
                            <h2 className={`text-lg font-semibold text-center ${customColors.gradientDarkBlueTitleNoDarkMode} dark:text-black`}>
                                {item.title}
                            </h2>
                        </div>
                        <div className="flex flex-col items-center mt-2 text-white dark:text-black max-h-32 overflow-y-auto h-1/4">
                            {item.description}
                        </div>
                        <div className="flex items-center mt-2 text-white dark:text-black h-1/4">
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <button
                                    type="button"
                                    className={`py-2 px-3 ${customColors.buttonGradientDarkBlue} font-poppins font-medium text-[14px] text-white outline-none rounded-xl`}
                                >
                                    <a href={item.kildeKode} target="_blank" rel="noopener noreferrer">
                                        {index === 0 ? 'Kildekolde' : index === 1 ? 'Hjemmeside' : 'Kilde kode'}
                                    </a>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsCard;
