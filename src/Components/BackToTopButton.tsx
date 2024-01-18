import React, {useEffect, useState} from "react";
import {customColor} from "../style";

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
        <div className="fixed bottom-4 right-4">
            {backToTop && (
                <button onClick={scrollUp}
                className={`rounded-full ${customColor.buttonGradientBlue} h-[50px] w-[50px]
                 text-white text-2xl flex items-center justify-center`} >
                    ^
                </button >
            )}
        </div >
    );
};

export default BackToTopButton;