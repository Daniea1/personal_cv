import React from 'react';
import { stats } from '../infoArray';
import styles, { customColor } from "../../style";

const Stats = () => (
    // Stats banner
    <section className={`${styles.flexCenter} grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:mx-12`}>
        {stats.map((stat) => (
            <div key={stat.id} className="flex justify-center items-center flex-col m-3">
                <div className={`w-full ${customColor.gradientGreyNoDarkMode} dark:bg-white shadow-lg rounded-lg flex items-center justify-center flex-col h-48 transition-transform transform hover:scale-105 hover:shadow-2xl`}>
                    <h4 className="font-poppins font-semibold text-[40px] leading-[53px] text-white dark:text-black">
                        {stat.value}
                    </h4>
                    <p className={`text-center font-poppins font-semibold text-[25px] leading-[26px] ${customColor.gradientBlue} uppercase mt-3`}>
                        {stat.title}
                    </p>
                </div>
            </div>
        ))}
    </section>
);

export default Stats;
