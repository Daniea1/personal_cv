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
    gradientDarkBlueTitleNoDarkMode: "bg-gradient-to-b from-indigo-600 to-blue-600 text-transparent bg-clip-text",
    gradientDarkBlueTextNoDarkMode: "dark:bg-gradient-to-b from-indigo-600 to-blue-600 dark:text-transparent dark:bg-clip-text text-white",
    gradientDarkBlueNoDarkMode: "bg-gradient-to-b from-indigo-600 via-indigo-600 to-blue-600 dark:from-white dark:via-white dark:to-white",
    gradientDarkBlue: "bg-gradient-to-b from-indigo-600 via-indigo-600 to-blue-600",
    gradientDarkBlueBanner: "bg-gradient-to-b from-indigo-600 via-indigo-600 to-blue-600",
    buttonGradientDarkBlue: "bg-gradient-to-b from-indigo-600 to-blue-600 hover:to-blue-600 hover:from-indigo-600 active:opacity-80",
    cardHover: "hover:bg-gray-700 dark:hover:bg-gray-200",
};

export const customColorPalette = {
    mainColor: "",
    secondColor: "",
    thirdColor: "",
};

export default style;