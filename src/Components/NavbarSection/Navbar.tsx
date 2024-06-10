import React, {useEffect, useState} from 'react';
import {close, closeDark, DJLogo, DJLogoDark, menu, menuDark} from "../../assets";
import {navLinks} from "../infoArray";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isBlurry, setIsBlurry] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1) {
                setIsBlurry(true)
            } else {
                setIsBlurry(false)
            }
        })
    }, []);

    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setToggle(false);
    };

    return (
        <nav className={`fixed top-0 z-10 flex h-72 max-h-[75px] w-full dark:bg-white shadow-lg
        ${isBlurry ? 'bg-white backdrop-filter backdrop-blur-lg bg-opacity-5 w-full' : ''}
         px-[20px]`}>

            {/* The responsive menu large screen */}
            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
                <div className="xl:mr-96 lg:mr-72 md:mr-12 sm:mr-8">
                    <div className="block dark:hidden">
                        <img src={DJLogo} alt="DJLogo" className="sm:w-[200px] lg:w-[250px] h-[62px]" />
                    </div>
                    <div className="hidden dark:block">
                        <img src={DJLogoDark} alt="DJLogo" className="sm:w-[200px] lg:w-[250px] h-[62px]" />
                    </div>
                </div>
                {navLinks.map((nav) => (
                    <li key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px]
                         px-2 md:mr-10 sm:mr-0 text-white dark:text-black`}>
                        <a href={`#${nav.id}`}
                           className="hover:border-b-2 hover:border-white dark:hover:border-black"
                           onClick={(e) => {
                               e.preventDefault();
                               handleNavClick(nav.id);
                           }}>
                            {nav.title}
                        </a>
                    </li>
                ))}
                <ThemeSwitcher />
            </ul>

            {/* The responsive menu phone */}
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <div className="block dark:hidden">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain mr-2"
                        onClick={() => setToggle((prev) => !prev)}
                    />
                </div>

                <div className="hidden dark:block">
                    <img
                        src={toggle ? closeDark : menuDark}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain mr-2"
                        onClick={() => setToggle((prev) => !prev)}
                    />
                </div>

                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 dark:bg-white bg-black
                     absolute top-0 right-0 w-screen min-h-screen`}>

                    <ul className="flex flex-col items-center flex-1">
                        <div className="block dark:hidden mb-12">
                            <img
                                src={toggle ? close : menu}
                                alt="menu"
                                className="w-[28px] h-[28px] object-contain"
                                onClick={() => setToggle((prev) => !prev)}
                            />
                        </div>

                        <div className="hidden dark:block mb-6">
                            <img
                                src={toggle ? closeDark : menuDark}
                                alt="menu"
                                className="w-[28px] h-[28px] object-contain"
                                onClick={() => setToggle((prev) => !prev)}
                            />
                        </div>

                        {navLinks.map((nav) => (
                            <li key={nav.id}
                                className={`font-normal cursor-pointer text-[32px] text-white dark:text-black
                                 px-2 mb-6 hover:border-b-2 hover:border-white dark:hover:border-black`}>
                                <a href={`#${nav.id}`} onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(nav.id);
                                }}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <ThemeSwitcher />
            </div>
        </nav>
    )
};

export default Navbar;
