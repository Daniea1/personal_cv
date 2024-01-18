import React, {useState, useEffect} from 'react';
import {customColor} from "../style";

interface Props {
    width: string;
}

const ThemeSwitcher = ({ width }: Props) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', String(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <button
            onClick = {toggleDarkMode}
            className = {`px-4 py-2 rounded-full w-${width}
             ${darkMode ? `${customColor.gradientGrey}` : 'bg-gray-800'}
              ${darkMode ? 'text-black' : 'text-white'}
               transition-colors duration-200`} >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button >
    );
};

export default ThemeSwitcher;