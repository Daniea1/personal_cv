import styles from "../style";
import {socialMedia} from "./infoArray";
// @ts-ignore
import DJLogo from '../assets/DJLogo.png'; // Import the image

const Footer = () => (
    <section className = {`${styles.flexCenter} ${styles.paddingY} flex-col`} >
        <div className ="w-full flex justify-between items-center
         md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]" >
            <div>
                <img
                    src = {DJLogo}
                    alt = "DJLogo"
                    className = "w-[266px] h-[72.14px] object-contain"
                />

            </div>
            <p className = "font-poppins font-normal text-center text-[18px] leading-[27px] text-white" >
                Copyright Ⓒ 2024 Danieal Johnbaskar. All Rights Reserved.
            </p >

            <div className = "flex flex-row md:mt-0 mt-6" >
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
        </div >
    </section >
);

export default Footer;