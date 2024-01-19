import React, {useEffect, useState} from 'react';
import {close, closeDark, DJLogoDark, menu, menuDark, DJLogo} from '../assets';
import {navLinks} from "./infoArray";
import ThemeSwitcher from "./ThemeSwitcher";
import {customColor} from "../style";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isBlurry, setIsBlurry] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1 && window.scrollY < 2778) {
                setIsBlurry(true)
            } else {
                setIsBlurry(false)
            }
        })
    }, []);

    return (

        //logo in navbar
        <nav className={`flex py-6 justify-between items-center max-h-[65px] xl:px-[160px] md:px-[80px]
             ${isBlurry ? 'bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 border-b border-b-gray-700 dark:border-b-gray-200' : ''}`}>
            <div className = "block dark:hidden" >
                <img src = {DJLogo} alt = "DJLogo" className = "sm:w-[200px] lg:w-[250px] h-[62px]" />
            </div >
            <div className = "hidden dark:block" >
                <img src = {DJLogoDark} alt = "DJLogo" className = "sm:w-[200px] lg:w-[250px] h-[62px]" />
            </div >

            {/*The responsive menu large screen*/}
            <ul className = "list-none, sm:flex hidden justify-end items-center flex-1" >
                {navLinks.map((nav) => (
                    <li key = {nav.id}
                        className = {`font-poppins font-normal cursor-pointer hover:bg-gray-700
                        active:bg-gray-800 dark:hover:bg-gray-200 dark:active:bg-gray-300
                        rounded-lg text-[16px] px-2 mr-10 text-white dark:text-black`} >
                        <a href = {`#${nav.id}`} >
                            {nav.title}
                        </a >

                    </li >
                ))}
                <ThemeSwitcher />
            </ul >


            {/*The responsive menu phone*/}
            <div className = "sm:hidden flex flex-1 justify-end items-center" >
                <div className = "block dark:hidden" >
                    <img
                        src = {toggle ? close : menu}
                        alt = "menu"
                        className = "w-[28px] h-[28px] object-contain mr-2"
                        onClick = {() => setToggle((prev) => !prev)}
                    />
                </div >

                <div className = "hidden dark:block" >
                    <img
                        src = {toggle ? closeDark : menuDark}
                        alt = "menu"
                        className = "w-[28px] h-[28px] object-contain mr-2"
                        onClick = {() => setToggle((prev) => !prev)}
                    />
                </div >

                <div
                    className = {`${toggle ? 'flex' : 'hidden'} p-6 ${customColor.gradientGrey}
                     absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} >

                    <ul className = "list-none, flex flex-col justify-end items-center flex-1" >
                        {navLinks.map((nav, index) => (
                            <li key = {nav.id}
                                className = {`font-poppins font-normal cursor-pointer
                                hover:bg-gray-600 dark:hover:bg-gray-200 rounded-lg text-[16px] px-2 
                                ${index === navLinks.length - 1 ? `mr-0` : `mb-4`} text-white dark:text-black`} >
                                <a href = {`#${nav.id}`} onClick = {() => setToggle((prev) => !prev)} >
                                    {nav.title}
                                </a >

                            </li >
                        ))}
                    </ul >
                </div >
                <ThemeSwitcher />
            </div >
        </nav >
    )
};

export default Navbar;


//notes for future development
//You can use the principles of the scrollToTopButton
//and making the navbar backround blurry and add the shadow at the button
//as well as giving it a fixed postition at the top