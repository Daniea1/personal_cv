import React from 'react';
import styles from '../style';
import {Business, ContactFormular, Stats, Footer, HeroSection, Competence, Projects} from "../Components";
import BackToTopButton from "../Components/NavbarSection/BackToTopButton";
import Recommendations from "../Components/RecommendationSection/Recommendations";

function HomePage() {
    return (
        <div className = "bg-black dark:bg-gray-50 w-full overflow-hidden" >
            <div className = {`bg-black dark:bg-gray-50 ${styles.flexStart} lg:my-[50px] mb-24 sm:mb-20 md:mb-10`} >
                <div className = {`bg-black dark:bg-gray-50 ${styles.boxWidth}`} >
                    <HeroSection />
                </div >
            </div >

            <div className="relative z-1">
                <div className="absolute top-[-80px] w-full">
                    <Stats />
                </div>
            </div>

            <div className = {`bg-black dark:dark:bg-gray-50 ${styles.paddingX} ${styles.flexStart}`} >
                <div className = {`bg-black dark:dark:bg-gray-50 ${styles.boxWidth}`} >
                    <Competence/>
                    <Business />
                    <Recommendations/>
                </div >
            </div >

            <div className = {`bg-black dark:bg-gray-50 ${styles.paddingX} ${styles.flexStart}`} >
                <div className = {`bg-black dark:bg-gray-50 ${styles.boxWidth}`} >
                    {/*<Projects/>*/}
                    <ContactFormular />
                    <Footer />
                </div >
            </div >

            <BackToTopButton/>
        </div >
    );
}

export default HomePage;
