import React, {useEffect, useState} from "react";
import {mailIcon, mailIconDark, reverseSidebarArrow, sidebarArrow} from "../assets";
import styles, {customColor} from "../style";
import {sidebar, socialMedia, socialMediaDark} from "./infoArray";
export const Sidebar = () => {
        const [isVisible, setIsVisible] = useState(false);
        const [sidebarOut, setSidebarOut] = useState(false);

        useEffect(() => {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 100 && window.scrollY < 2778) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            })
        }, []);

    const scrollToContactFormular = () => {
        // Find the element with the id "Kontakt"
        const kontaktElement = document.getElementById("Kontakt");

        // Check if the element is found
        if (kontaktElement) {
            kontaktElement.scrollIntoView({
                behavior: "smooth",
                block: "start", // You can change this to "center" or "end" based on your preference
            });
        }
    };

        return (
            //the sidebar button
            <div className = "fixed top-1/2 right-2 transform -translate-y-1/2" >
                {isVisible && !sidebarOut && (
                    <div className = {`rounded-full ${customColor.buttonGradientBlue} h-[30px] w-[30px]
                    text-white text-2xl ${styles.flexCenter}`}
                         onClick = {() => setSidebarOut(true)} >
                        <img src = {sidebarArrow} alt = "sidebarArrow"
                             className = "w-[50%] h-[50%] object-contain" />
                    </div >
                )}

                {/*The red button when sidebar is taken out*/}
                {sidebarOut && (
                    <div className = "grid-cols-2" >
                        <button className = {`rounded-full bg-red-500 h-[30px] w-[30px]
                                text-white text-2xl ${styles.flexCenter}`}
                                onClick = {() => setSidebarOut(false)} >
                            <img src = {reverseSidebarArrow} alt = "sidebarArrow"
                                 className = "w-[50%] h-[50%] object-contain" />
                        </button >

                        {/*The sidebar when taken out*/}
                        <div className = {`p-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-5
                             border border-gray-700 dark:border-gray-200
                             fixed top-1/2 right-5 transform -translate-y-1/2
                             mx-4 my-2 min-w-[100px] rounded-xl`} >

                            {/*The different elements inside the sidebar when background is dark*/}
                            <div className = {`flex dark:hidden flex-col ${styles.flexCenter} gap-4 my-4`} >
                                {socialMedia.map((sidebar) => (
                                    <img
                                        key = {sidebar.id}
                                        src = {sidebar.icon}
                                        alt = {sidebar.id}
                                        className = {`w-[21px] h-[21px] object-contain cursor-pointer`}
                                        onClick = {() => window.open(sidebar.link)}
                                    />
                                ))}
                                <div
                                    className = {`h-[21px] w-[21px] ${styles.flexCenter}`}
                                    onClick = {scrollToContactFormular} >
                                    <img src = {mailIcon} alt = "mailIcon"
                                         className = "w-[100%] h-[100%] object-contain" />
                                </div >
                            </div >

                            {/*The different elements inside the sidebar when background is dark*/}
                            <div className = {`hidden dark:flex flex-col ${styles.flexCenter} gap-4 my-4`} >
                                {socialMediaDark.map((sidebar) => (
                                    <img
                                        key = {sidebar.id}
                                        src = {sidebar.icon}
                                        alt = {sidebar.id}
                                        className = {`w-[21px] h-[21px] object-contain cursor-pointer`}
                                        onClick = {() => window.open(sidebar.link)}
                                    />
                                ))}
                                <div
                                    className = {`h-[21px] w-[21px] ${styles.flexCenter}`}
                                    onClick = {scrollToContactFormular} >
                                    <img src = {mailIconDark} alt = "mailIconDark"
                                         className = "w-[100%] h-[100%] object-contain" />
                                </div >
                            </div >

                        </div >
                    </div >
                )}
            </div >
        );

    }
;

export default Sidebar;

// Button with '<' icon, when click expands and show multiple function such as
// Dark mode, social link, send email
