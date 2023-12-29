import styles, {customColor} from "../style";
import {discount, robot} from "../assets";
import React from "react";

const Hero = () => {

    // Discount banner
    return (
        <section id = "home" className = {`flex md:flex-row flex-col ${styles.paddingY}`} >
            <div className = {`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} >
                <div
                    className = "flex flex-row items-center py-[6px] px-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-[10px] mb-2 text-white" >
                    <img src = {discount} alt = "discount" className = "w-[32px] h-[32px]" />
                    <p className = {`${styles.paragraph} ml-2`} >
                        <span className = "text-white" >20%</span > Discount For{" "}
                        <span className = "text-white" >1 Month</span > Account
                    </p >
                </div >

                {/*The Big title*/}
                <div className = "flex flex-row justify-between items-center w-full" >
                    <h1 className = "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]" >
                        Hej, mit navn er <br className = "sm:block hidden" />{" "}
                        <span className ={`${customColor.gradientBlue}`} >
                            Danieal Johnbaskar</span >{" "}
                    </h1 >
                </div >

                {/*The small paragraph*/}
                <p className = {`${styles.paragraph} max-w-[470px] mt-5 text-gray-400`} >
                    Jeg er en 21-årig softwareingeniør, som i øjeblikket
                     studerer Software engineering på Syddansk Universitet
                    og er på nuværende tidspunkt på 3. semester.
                </p >
            </div >

            {/*The picture on the right*/}
            <div className = {`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
                <img src = {robot} alt = "billing" className = "w-[100%] h-[100%] relative z-[5]" />
            </div >
        </section >
    );
};

export default Hero;