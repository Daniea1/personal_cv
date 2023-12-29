import React from 'react';
import {customColor} from "../style";

const Button = ({ styles }: { styles: string }) => {
    return (
        <button
            type="button"
            className={`py-4 px-6 ${customColor.buttonGradientBlue}
            font-poppins font-medium text-[18px] text-white
            outline-none ${styles}`} >
            Get Started
        </button>
    );
};

export default Button;
