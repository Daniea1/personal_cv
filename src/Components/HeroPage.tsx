import React from "react";
import styles, {customColor} from "../style";
import {robot} from "../assets";

const HeroPage = () => {

    // Discount banner
    return (
        <section id = "home" className = {`flex md:flex-row flex-col ${styles.paddingY}`} >
            <div className = {`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} >
                <div
                    className = {`flex flex-row items-center py-[6px] px-4 ${customColor.gradientGrey} rounded-[10px] mb-2 text-white`} >
                    <p className = {`${styles.paragraph} ml-2`} >
                        <span className = "text-white dark:text-black" >3rd semester Software engineering Student at SDU</span >
                    </p >
                </div >

                {/*The Big title*/}
                <div className = "flex flex-row justify-between items-center w-full" >
                    <h1 className = "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white dark:text-black ss:leading-[100.8px] leading-[75px]" >
                        Hej, mit navn er <br className = "sm:block hidden" />{" "}
                        <span className ={`${customColor.gradientBlue}`} >
                            Danieal Johnbaskar</span >{" "}
                    </h1 >
                </div >

                {/*The small paragraph*/}
                <p className = {`${styles.paragraph} max-w-[470px] mt-5 text-gray-400 dark:text-black`} >
                    Jeg er en 21-årig softwareingeniør, som i øjeblikket
                     studerer Software engineering på Syddansk Universitet
                    og er på nuværende tidspunkt på 3. semester.
                </p >
            </div >

            {/*The picture on the right*/}
            <div className = {`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
                <img src = {robot} alt = "billing" className = "w-[100%] h-[100%]" />
            </div >
        </section >
    );
};

export default HeroPage;