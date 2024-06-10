import React from "react";
import { recommendationsData } from "../infoArray";
import { FaStar } from "react-icons/fa";
import {customColor} from "../../style";

const RecommendationsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
            {recommendationsData.map((item) => (
                <div
                    key={item.id}
                    className={`col-span-1 p-5 shadow-lg rounded-lg dark:border-none border-[1px] border-gray-800
                     transition-transform transform hover:scale-105 hover:shadow-2xl dark:bg-white
                     h-fit flex flex-col justify-between`}
                >
                    <div>
                        <div className="flex justify-center mt-12 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-400 text-2xl" />
                            ))}
                        </div>
                        <div className="text-center mb-8 text-white dark:text-black h-48 overflow-auto">
                            {item.text}
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className={`text-center font-semibold ${customColor.gradientDarkBlueTitleNoDarkMode} dark:text-black`}>
                            {item.name}
                        </div>
                        <div className="text-center text-gray-500">
                            {item.position}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecommendationsCard;
