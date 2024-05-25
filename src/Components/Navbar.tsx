import React, {useEffect, useState} from 'react';
import {close, closeDark, menu, menuDark} from '../assets';
import {navLinks} from "./infoArray";
import ThemeSwitcher from "./ThemeSwitcher";
import {customColor} from "../style";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isBlurry, setIsBlurry] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // if (window.scrollY > 1 && window.scrollY < 2778) {
            if (window.scrollY > 1 ) {
                setIsBlurry(true)
            } else {
                setIsBlurry(false)
            }
        })
    }, []);

    return (

        //logo in navbar
        <nav className={`fixed top-5 z-10 flex py-0 max-h-[65px] w-fit xl:px-[20px] l:px-[20px] md:px-[20px] px-[20px] rounded-full
             ${isBlurry ? 'bg-white backdrop-filter backdrop-blur-lg bg-opacity-5' : ''}`}>

            {/*The responsive menu large screen*/}
            <ul className = "list-none, sm:flex hidden justify-center items-center flex-1" >
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
