import React from "react";
import styles, { customColor } from "../../style";
import { ProfilePicOne } from "../../assets";

const HeroPage = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            {/* The picture on the right for larger screens and on top for small screens */}
            <div className={`flex-1 flex ${styles.flexCenter} my-10 relative order-1 md:order-2`}>
                <img src={ProfilePicOne} alt="ProfilePicOne" className="w-[60%] sm:w-[60%] h-auto rounded-full object-cover" />
            </div>

            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 order-2 md:order-1 ${styles.flexCenter} md:${styles.flexStart}`}>
                <div className={`flex flex-row items-center py-[6px] px-4 ${customColor.gradientGrey} rounded-[10px] mb-2 text-white`}>
                    <p className={`${styles.paragraph} ml-2 text-center md:text-left`}>
                        <span className="text-white">4th semester Software engineering Student at SDU</span>
                    </p>
                </div>

                {/* The Big title */}
                <div className="flex flex-col justify-between lg:items-center md:items-start w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white dark:text-black ss:leading-[100.8px] leading-[75px] text-center md:text-left">
                        Hej, mit navn er <br className="lg:block hidden" />{" "}
                        <span className={`${customColor.gradientBlue}`}>
                            Danieal Johnbaskar
                        </span>{" "}
                    </h1>
                </div>

                {/* The small paragraph */}
                <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-400 dark:text-black text-center md:text-left`}>
                    Jeg er en 21-årig softwareingeniør, som i øjeblikket studerer Software engineering på Syddansk Universitet og er på nuværende tidspunkt på 4. semester.
                </p>
            </div>
        </section>
    );
};

export default HeroPage;
