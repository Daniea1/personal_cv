import React from 'react';
import styles from './style';
import {Navbar, Business, ContactFormular, Stats, Footer, HeroPage, Competence, Projects} from "./Components";
import BackToTopButton from "./Components/BackToTopButton";
import Sidebar from "./Components/Sidebar";

function App() {
    return (
        <div className = "bg-black dark:bg-white w-full overflow-hidden" >
            <div className = {`${styles.paddingX} ${styles.flexCenter}`} >
                    <Navbar />
            </div >

            <div className = {`bg-black dark:bg-white ${styles.flexStart} mt-[50px]`} >
                <div className = {`bg-black dark:bg-white ${styles.boxWidth}`} >
                    <HeroPage />
                </div >
            </div >

            <div className = {`bg-black dark:bg-white ${styles.paddingX} ${styles.flexStart}`} >
                <div className = {`bg-black dark:bg-white ${styles.boxWidth}`} >
                    <Stats />
                    <Competence/>
                    <Business />
                    <Projects/>
                    <ContactFormular />
                    <Footer />
                </div >
            </div >
            <BackToTopButton/>
            <Sidebar/>
        </div >
    );
}

export default App;
