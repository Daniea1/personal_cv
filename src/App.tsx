import React from 'react';
import styles from './style';
import {Navbar, Business, CTA, Stats, Footer, Hero, Competence} from "./Components";

function App() {
    return (
        <div className = "bg-black w-full overflow-hidden" >
            <div className = {`${styles.paddingX} ${styles.flexCenter}`} >
                <div className = {`${styles.boxWidth}`} >
                    <Navbar />
                </div >
            </div >

            <div className = {`bg-black ${styles.flexStart}`} >
                <div className = {`bg-black ${styles.boxWidth}`} >
                    <Hero />
                </div >
            </div >

            <div className = {`bg-black ${styles.paddingX} ${styles.flexStart}`} >
                <div className = {`bg-black ${styles.boxWidth}`} >
                    <Stats />
                    <Competence/>
                    <Business />
                    <CTA />
                    <Footer />
                </div >
            </div >

        </div >
    );
}

export default App;
