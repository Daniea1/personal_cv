import React from 'react';
import styles from './style';
import {Navbar, Business, Clients, CTA, Stats, Footer, Testimonials, Hero,} from "./Components";

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
                    <Business />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer />
                </div >
            </div >

        </div >
    );
}

export default App;