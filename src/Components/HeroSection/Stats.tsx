import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../infoArray';
import styles, { customColor } from "../../style";

const Stats = () => (
    // Stats banner
    <motion.section className={`${styles.flexCenter} grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:mx-12`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        {stats.map((stat) => (
            <motion.div key={stat.id} className="flex justify-center items-center flex-col m-3" whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)' }}>
                <motion.div className={`w-full ${customColor.gradientGreyNoDarkMode} shadow-lg rounded-lg flex items-center justify-center flex-col h-32`} whileHover={{ scale: 1.1 }}>
                    <h4 className="font-poppins font-semibold text-[40px] leading-[53px] text-white dark:text-black">
                        {stat.value}
                    </h4>
                    <p className={`text-center font-poppins font-semibold text-[25px] leading-[26px] ${customColor.gradientBlue} uppercase mt-3`}>
                        {stat.title}
                    </p>
                </motion.div>
            </motion.div>
        ))}
    </motion.section>
);

export default Stats;
