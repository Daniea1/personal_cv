import React from 'react';
import styles from './style';
import {Navbar, Business, ContactFormular, Stats, Footer, FrontPage, Competence, Projects} from "./Components";
import BackToTopButton from "./Components/BackToTopButton";

function App() {
    return (
        <div className = "bg-black dark:bg-white w-full overflow-hidden" >
            <div className = {`${styles.paddingX} ${styles.flexCenter}`} >
                <div className = {`${styles.boxWidth}`} >
                    <Navbar />
                </div >
            </div >

            <div className = {`bg-black dark:bg-white ${styles.flexStart}`} >
                <div className = {`bg-black dark:bg-white ${styles.boxWidth}`} >
                    <FrontPage />
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
        </div >
    );
}

export default App;
