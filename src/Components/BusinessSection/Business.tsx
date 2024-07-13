import React from 'react';
import {reasons} from "../infoArray";
import styles, {customColors, layout} from "../../style";
import FeatureCard from "./FeatureCard";
import {motion} from 'framer-motion';

const Business = () => {

    const scrollToContactFormular = () => {
        // Find the element with the id "Kontakt"
        const kontaktElement = document.getElementById("Kontakt");

        // Check if the element is found
        if (kontaktElement) {
            kontaktElement.scrollIntoView({
                behavior: "smooth",
                block: "start", // You can change this to "center" or "end" based on your preference
            });
        }
    };

    return (
        <section id = "" className = {`${layout.section}`} >
            <div className = {`flex-1 flex justify-center items-center md:items-start flex-col`} >
                <h2 className = {`${styles.heading2}`} >
                    3 årsager til <br className="lg:block hidden" />{" "}
                    <span className={`${customColors.gradientDarkBlueTitleNoDarkMode}`}>
                            at du bør ansætte mig
                    </span>{" "}
                </h2 >
                <p className = {`${styles.paragraph} max-w-[470px] my-5`} >
                    Jeg ser frem til at kunne bringe mine kompetencer og engagement
                    til dit team og bidrage til virksomhedens succes.
                </p >
                <motion.div whileHover = {{scale: 1.05}} >
                    <button
                        type = "button"
                        className = {`py-2 px-3 ${customColors.buttonGradientDarkBlue}
                    font-poppins font-medium text-[18px] text-white
                    outline-none rounded-xl ${styles}`}
                        onClick = {scrollToContactFormular} >
                        Send e-mail
                    </button >
                </motion.div >
            </div >

            <div className = {`${layout.sectionImg} flex-col`} >
                {reasons.map((feature, index) => (
                    <FeatureCard key = {feature.id}{...feature} index = {index} />
                ))}

            </div >
        </section >
    )
};

export default Business;