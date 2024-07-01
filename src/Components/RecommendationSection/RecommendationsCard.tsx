import React from "react";
import { recommendationsData } from "../infoArray";
import { FaStar } from "react-icons/fa";
import { customColor } from "../../style";

const RecommendationsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
            {recommendationsData.map((item, index) => (
                <div
                    key={item.id}
                    className={`col-span-1 p-5 shadow-lg rounded-lg dark:border-none border-[1px] border-gray-800
                     transition-transform transform hover:scale-105 hover:shadow-2xl dark:bg-white h-fit flex flex-col justify-between ${
                        index === 1 ? customColor.gradientDarkBlue :
                            index === 2 ? 'bg-white' : ''
                    }`}
                >
                    <div>
                        <div className="flex justify-center mt-4 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-2xl" />
                            ))}
                        </div>
                    </div>
                    <div className={`text-center mb-8 h-48 overflow-auto ${
                        index === 0 ? 'text-white dark:text-black' :
                        index === 1 ? 'text-white' :
                            index === 2 ? 'text-black' : 'text-white dark:text-black'
                    }`}>
                        {item.text}
                    </div>
                    <div className="mb-4">
                        <div className={`text-center font-semibold ${
                            index === 0 ? customColor.gradientDarkBlueTextNoDarkMode :
                            index === 1 ? 'text-white' :
                            index === 2 ? 'bg-gradient-to-b from-indigo-600 to-blue-600 text-transparent bg-clip-text' : ''
                        }`}>
                            {item.name}
                        </div>
                        <div className={`text-center ${
                            index === 0 ? 'text-white dark:text-black' :
                            index === 1 ? 'text-white' :
                                index === 2 ? 'text-black' : 'dark:text-gray-500 text-white'
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
