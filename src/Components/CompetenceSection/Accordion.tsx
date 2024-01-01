import React, { useState } from 'react';
import { AccordionData } from "../infoArray";
import {customColor} from "../../style";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AccordionData.map((item, index) => (
                <div key={index} className="col-span-1 md:col-span-1 lg:col-span-1">
                    <div className={`px-5 py-12 rounded-[20px] w-[270px] h-[270px] grid justify-items-center
                     ${customColor.cardsBackground}`} onClick={() => handleClick(index)}>
                        <div className="flex items-center justify-between cursor-pointer" >
                            <h2 className={`text-lg font-semibold ${customColor.gradientBlue}`}>
                                {item.title}
                            </h2>
                        </div>
                        {activeIndex === index && (
                            <div className="mt-2 text-white max-h-32 overflow-y-auto">
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
