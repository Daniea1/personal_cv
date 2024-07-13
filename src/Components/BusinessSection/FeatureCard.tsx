import React from 'react';
import {reasons} from "../infoArray";
import styles, {customColors} from "../../style";

const FeatureCard = ({icon, title, content, index}: { icon: string; title: string; content: string; index: number }) => (
    <div className = {`flex flex-row p-6 rounded-[20px] 
    ${index !== reasons.length - 1 ? "mb-6" : "mb-9"} ${customColors.cardHover}`} >
        {/*For future references when needing to fit picture inside element*/}
        <div className = {`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`} >
            <img src = {icon} alt = "icon" className = "w-[50%] h-[50%] object-contain" />
        </div >
        <div className = "flex-1 flex flex-col ml-3" >
            <h4 className = "font-poppins font-semibold text-white dark:text-black text-[18px] leading-[23px]" >
                {title}
            </h4 >
            <p className = "font-poppins text-white dark:text-black text-[16px] leading-[24px]" >
                {content}
            </p >
        </div >
    </div >
)

export default FeatureCard;