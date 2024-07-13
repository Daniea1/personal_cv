import React from 'react';
import { motion } from 'framer-motion';
import { accordionData } from "../infoArray";
import styles from "../../style";

const Accordion = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {accordionData.map((item, index) => (
                <div key={index} className="col-span-1">
                    <div className={`lg:px-5 lg:py-12 px-0 py-0 rounded-[20px] w-[75px] h-[75px]
                     lg:w-[135px] lg:h-[135px] grid justify-items-center`}>
                        <motion.div whileHover={{ scale: 1.5 }}>
                            <div className="flex items-center justify-center cursor-pointer">
                                <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
                                    <img src={item.icon} alt="icon" className="w-[100%] h-[100%] object-contain" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
