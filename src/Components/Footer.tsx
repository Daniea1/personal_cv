import React from "react";
import styles from "../style";
import {socialMedia, socialMediaDark} from "./infoArray";
import {DJLogo, DJLogoDark} from "../assets";

const Footer = () => {

    const handleLinkClick = () => {
        window.open('https://www.youtube.com/watch?v=QfvDXSOohn0&t=58s', '_blank');
    };

    return (
        <section className = {`${styles.flexCenter} ${styles.paddingY} flex-col`} >
            <div className ="w-full flex justify-between items-center
         md:flex-row flex-col pt-0 border-t-[1px] border-t-[#3F3E45]" >
                {/*When the dark mode is active, the hidden class is applied, which sets the display: none, making the element invisible*/}
                <div className="block dark:hidden">
                    <img src = {DJLogo} alt = "DJLogo" className = "w-[266px] h-[72.14px] object-contain" />
                </div>
                {/*When the dark mode is active, the block class is applied, which sets the display property to block, making the element visible*/}
                <div className="hidden dark:block">
                    <img src = {DJLogoDark} alt = "DJLogo" className = "w-[266px] h-[72.14px] object-contain" />
                </div>

                <p className = "font-poppins font-normal text-center text-[18px] leading-[27px] text-white dark:text-black mr-0 md:mr-12 lg:mr-24" >
                    Copyright Ⓒ 2024 Danieal Johnbaskar - All Rights Reserved.
                </p >

                <div className = "flex dark:hidden flex-row md:mt-0 mt-6" >
                    {socialMedia.map((social, index) => (
                        <img
                            key = {social.id}
                            src = {social.icon}
                            alt = {social.id}
                            className = {`w-[21px] h-[21px] object-contain cursor-pointer ${
                                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                            onClick = {() => window.open(social.link)}
                        />
                    ))}
                </div >

                <div className="hidden dark:flex flex-row md:mt-0 mt-6">
                    {socialMediaDark.map((social, index) => (
                        <img
                            key = {social.id}
                            src = {social.icon}
                            alt = {social.id}
                            className = {`w-[21px] h-[21px] object-contain cursor-pointer ${
                                index !== socialMediaDark.length - 1 ? "mr-6" : "mr-0"
                            }`}
                            onClick = {() => window.open(social.link)}
                        />
                    ))}
                </div >
            </div >
            <a
                className="text-sm font-medium underline dark:text-gray-500 text-white
                 mr-0 md:ml-20 lg:mr-0 mt-2 md:mt-[-10px] lg:mt-[-20px]"
                onClick={handleLinkClick}
            >
                Hosted by - ART-Marketing.dk
            </a>

        </section >
    )
}

export default Footer;