const style = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-semibold text-center md:text-start xs:text-[48px] text-[40px] text-white dark:text-black xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-center md:text-start text-white dark:text-black text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};

export const layout = {
    section: `flex md:flex-row flex-col ${style.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${style.paddingY}`,

    sectionImgReverse: `flex-1 flex ${style.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${style.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${style.flexStart} flex-col`,
};

export const customColor = {
    gradientDarkBlueTitleNoDarkMode: "bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text",
    gradientDarkBlueTextNoDarkMode: "dark:bg-gradient-to-r from-indigo-500 to-blue-500 dark:text-transparent dark:bg-clip-text text-white",
    gradientDarkBlueNoDarkMode: "bg-gradient-to-r from-indigo-500 via-indigo-500 to-blue-500 dark:from-white dark:via-white dark:to-white",
    gradientDarkBlueBanner: "bg-gradient-to-r from-indigo-500 via-indigo-500 to-blue-500",
    buttonGradientDarkBlue: "bg-gradient-to-r from-indigo-500 to-blue-500 hover:to-blue-500 hover:from-indigo-500 active:opacity-80",
    cardHover: "hover:bg-gray-700 dark:hover:bg-gray-200",
};

export default style;