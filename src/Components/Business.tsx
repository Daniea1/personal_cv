import React from 'react';
import {features} from "../constants";
import styles, {layout} from "../style";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

const Business = () => {
    return (
        <section id = "features" className = {`${layout.section}`} >
            <div className = {`${layout.sectionInfo}`} >
                <h2 className = {`${styles.heading2}`} >
                    3 årsager til, <br className = "sm:block hidden" /> at du bør ansætte mig.
                </h2 >
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Jeg ser frem til at kunne bringe mine kompetencer og engagement
                    til dit team og bidrage til virksomhedens succes.
                </p >
                <Button styles="mt-10"/>
            </div >

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) =>(
                    <FeatureCard key={feature.id}{...feature} index={index}/>
                    ))}

            </div>
        </section >
    )
};

export default Business;