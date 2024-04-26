import React, {useState} from 'react';
import {accordionData} from "../infoArray";
import styles, {customColor} from "../../style";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [showLogos, setShowLogos] = useState(Array(accordionData.length).fill(true));

    const handleClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

        // Check if the screen width is less than or equal to the small screen breakpoint
        if (window.innerWidth <= 1024) {
            setShowLogos((prevLogos) => {
                // Create a shallow copy of the previous showLogos state array
                const newLogos = [...prevLogos];
                // Changes the boolean value at the specified index in the copied array
                newLogos[index] = !newLogos[index];
                // Return the updated array, which will be set as the new state for showLogos
                return newLogos;
            });
        }
    };


    return (
        <div className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
            {accordionData.map((item, index) => (
                <div key = {index} className = "col-span-1" >
                    <div className = {`px-5 py-6 rounded-[20px] w-[75px] h-[75px]
                    lg:px-5 lg:py-12 lg:w-[135px] lg:h-[135px] grid justify-items-center
                     ${customColor.gradientGrey}`} onClick = {() => handleClick(index)} >
                        <div className = "flex items-center justify-between cursor-pointer" >
                            {showLogos[index] && (
                            <div className = {`w-[32px] h-[32px] rounded-full ${styles.flexCenter}`} >
                                <img src = {item.icon} alt = "icon" className = "w-[100%] h-[100%] object-contain" />
                            </div >)}
                        </div >
                        {activeIndex === index && (
                            <div className = "mt-2 text-white dark:text-black max-h-32 overflow-y-auto" >
                                {item.text}
                            </div >
                        )}
                    </div >
                </div >
            ))}
        </div >
    );
};

export default Accordion;