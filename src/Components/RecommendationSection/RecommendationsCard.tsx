import React from "react";
import { recommendationsData } from "../infoArray";
import { FaStar } from "react-icons/fa";
import { customColors } from "../../style";

const RecommendationsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
            {recommendationsData.map((item, index) => (
                <div
                    key={item.id}
                    className={`col-span-1 p-5 shadow-xl rounded-lg dark:border-none border-[1px] border-gray-800
                     transition-transform transform hover:scale-105 hover:shadow-2xl dark:bg-white h-fit flex flex-col justify-between
                     ${
                        index === 1 ? customColors.gradientDarkBlueNoDarkMode : ''
                     }
                    
                    ${
                        index === 1 ? 'py-6' : ''
                    }`}
                >
                    <div>
                        <div className="flex justify-center mt-4 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-2xl" />
                            ))}
                        </div>
                    </div>
                    <div className={`text-center mb-8 h-36 overflow-auto ${
                        index === 0 ? 'text-white dark:text-black' :
                        index === 1 ? 'text-white' :
                            index === 2 ? 'text-white dark:text-black' : ''
                    }`}>
                        {item.text}
                    </div>
                    <div className="mb-4">
                        <div className={`text-center font-semibold ${
                            index === 0 ? customColors.gradientDarkBlueTextNoDarkMode :
                            index === 1 ? 'text-white' :
                                index === 2 ? customColors.gradientDarkBlueTextNoDarkMode : ''
                        }`}>
                            {item.name}
                        </div>
                        <div className={`text-center ${
                            index === 0 ? 'text-white dark:text-black' :
                            index === 1 ? 'text-white' :
                                index === 2 ? 'text-white dark:text-black' : ''
                        }`}>
                            {item.position}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecommendationsCard;
