import React from 'react';
import styles from './style';
import {Navbar, Business, ContactFormular, Stats, Footer, HeroPage, Competence, Projects} from "./Components";
import BackToTopButton from "./Components/NavbarSection/BackToTopButton";
import Sidebar from "./Components/NavbarSection/Sidebar";
import Recommendations from "./Components/RecommendationSection/Recommendations";

function App() {
    return (
        <div className = "bg-black dark:bg-gray-50 w-full overflow-hidden" >
            <div className = {`${styles.paddingX} ${styles.flexCenter}`} >
                    <Navbar />
            </div >

            <div className = {`bg-black dark:bg-gray-50 ${styles.flexStart} lg:my-[50px] mb-24 sm:mb-20 md:mb-10`} >
                <div className = {`bg-black dark:bg-gray-50 ${styles.boxWidth}`} >
                    <HeroPage />
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
                    <Projects/>
                    <ContactFormular />
                    <Footer />
                </div >
            </div >

            <div className="max-sm:hidden">
                <BackToTopButton/>
                <Sidebar/>
            </div>
        </div >
    );
}

export default App;
