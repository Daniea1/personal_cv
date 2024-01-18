import React, { useState } from 'react';
import { accordionData } from "../infoArray";
import {customColor} from "../../style";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {accordionData.map((item, index) => (
                <div key={index} className="col-span-1">
                    <div className={`px-5 py-6 rounded-[20px] w-[150px] h-[150px]
                    lg:px-5 lg:py-12 lg:w-[270px] lg:h-[270px] grid justify-items-center
                     ${customColor.gradientGrey}`} onClick={() => handleClick(index)}>
                        <div className="flex items-center justify-between cursor-pointer" >
                            <h2 className={`text-lg font-semibold ${customColor.gradientBlue} dark:bg-gradient-to-r dark:from-rose-100 dark:to-teal-100`}>
                                {item.title}
                            </h2>
                        </div>
                        {activeIndex === index && (
                            <div className="mt-2 text-white dark:text-black max-h-32 overflow-y-auto">
                                {item.text}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
