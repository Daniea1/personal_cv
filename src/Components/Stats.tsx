import React from 'react';
import {stats} from './infoArray';
import styles, {customColor} from "../style";


const Stats = () => (

    // Stats banner
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 m-6`} >
        {stats.map((stat)=>(
            <div key={stat.id} className={`flex-1 flex 
            justify-center items-center flex-row m-3`}>
                <h4 className="font-poppins
                font-semibold xs:text-[40px] text-[40px] xs:leading-[53px]
                 leading[43px] text-white">
                    {stat.value}
                </h4>
                <p className={`text-center font-poppins
                font-semibold xs:text-[20px] text-[25px] xs:leading-[26px]
                 leading[21px] ${customColor.gradientBlue} uppercase ml-3`}>
                    {stat.title}</p>
            </div>
        ))}
    </section >
)

export default Stats;