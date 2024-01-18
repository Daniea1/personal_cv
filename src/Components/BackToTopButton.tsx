import React, {useEffect, useState} from "react";
import styles, {customColor} from "../style";
import {backToTopArrow} from "../assets";

export const BackToTopButton = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, []);

    const scrollUp = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    };

    return (
        <div className="fixed bottom-4 left-4">
            {backToTop && (
                <button onClick={scrollUp}
                className={`rounded-full ${customColor.buttonGradientBlue} h-[40px] w-[40px]
                 text-white text-2xl ${styles.flexCenter}`} >
                    <img src = {backToTopArrow} alt = "backToTopButtonArrow"
                         className = "w-[50%] h-[50%] object-contain" />
                </button >
            )}
        </div >
    );
};

export default BackToTopButton;