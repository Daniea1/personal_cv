import React from 'react';
import {useState} from "react";
import {close, menu} from '../assets';
import {navLinks} from "./infoArray";
import {DJLogo} from "../assets";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (

        //logo in navbar
        <nav className = "w-full flex py-6 justify-between items-center navbar" >
            <img src = {DJLogo} alt = "DJLogo" className = "w-[250px] h-[62px]" />

            {/*The responsive menu large screen*/}
            <ul className = "list-none, sm:flex hidden justify-end items-center flex-1" >
                {navLinks.map((nav, index) => (
                    <li key = {nav.id}
                        className = {`font-poppins font-normal cursor-pointer hover:bg-gray-700
                        active:bg-gray-800 rounded-lg text-[16px] px-2 
                        ${index === navLinks.length - 1 ? `mr-0` : `mr-10`} text-white`} >
                        <a href = {`#${nav.id}`} >
                            {nav.title}
                        </a >

                    </li >
                ))}
            </ul >

            {/*The responsive menu phone*/}
            <div className = "sm:hidden flex flex-1 justify-end items-center" >
                <img
                    src = {toggle ? close : menu}
                    alt = "menu"
                    className = "w-[28px] h-[28px] object-contain"
                    onClick = {() => setToggle((prev) => !prev)}
                />

                <div
                    className = {`${toggle ? 'flex' : 'hidden'}
                     p-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black
                      absolute top-20 right-0 mx-4 my-2
                      min-w-[140px] rounded-xl sidebar`} >

                    <ul className = "list-none, flex flex-col justify-end items-center flex-1" >
                        {navLinks.map((nav, index) => (
                            <li key = {nav.id}
                                className = {`font-poppins font-normal cursor-pointer
                                hover:bg-gray-600 rounded-lg text-[16px] px-2 
                                ${index === navLinks.length - 1 ? `mr-0` : `mb-4`} text-white`} >
                                <a href = {`#${nav.id}`} onClick = {() => setToggle((prev) => !prev)} >
                                    {nav.title}
                                </a >

                            </li >
                        ))}
                    </ul >

                </div >

            </div >
        </nav >
    )
};

export default Navbar;