import React from 'react';
import {reasons} from "../infoArray";
import styles, {customColor, layout} from "../../style";
import FeatureCard from "./FeatureCard";

const Business = () => {

    const scrollToContactFormular = () => {
        window.location.href = "#Kontakt";
    };

    return (
        <section id = "" className = {`${layout.section}`} >
            <div className = {`${layout.sectionInfo}`} >
                <h2 className = {`${styles.heading2}`} >
                    3 årsager til, <br className = "sm:block hidden" /> at du bør ansætte mig.
                </h2 >
                <p className = {`${styles.paragraph} max-w-[470px] my-5`} >
                    Jeg ser frem til at kunne bringe mine kompetencer og engagement
                    til dit team og bidrage til virksomhedens succes.
                </p >
                <button
                    type = "button"
                    className = {`py-2 px-3 ${customColor.buttonGradientBlue}
                    font-poppins font-medium text-[18px] text-white
                    outline-none rounded-xl ${styles}`}
                    onClick={scrollToContactFormular}>
                    Send e-mail
                </button >
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