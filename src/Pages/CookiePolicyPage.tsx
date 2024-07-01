import React from 'react';
import styles from '../style';
import BackToTopButton from "../Components/NavbarSection/BackToTopButton";
import Sidebar from "../Components/NavbarSection/Sidebar";
import Footer from "../Components/Footer";
import Privatlivspolitik from "../Components/CookiePolicy/Privatlivspolitik";

function CookiePolicyPage() {
    return (
        <div className = "bg-black dark:bg-gray-50 w-full" >
            <div className = {`bg-black dark:bg-gray-50 ${styles.flexStart} lg:my-[50px] mb-24 sm:mb-20 md:mb-10`} >
                <div className = {`bg-black dark:bg-gray-50 ${styles.boxWidth} h-screen`} >
                    <Privatlivspolitik />
                    <Footer />
                </div >
            </div >
            <BackToTopButton/>
            <div className="max-sm:hidden">
                <Sidebar/>
            </div>
        </div >
    );
}

export default CookiePolicyPage;
