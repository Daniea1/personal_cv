import React, {useState, useEffect} from 'react';
import {darkModeIcon, lightModeIcon} from "../assets";

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Effect hook to check the initial dark mode state from localStorage
    useEffect(() => {
        // Retrieve the dark mode state from localStorage
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        // Set the dark mode state based on the retrieved value
        setDarkMode(isDarkMode);
    }, []);

    // Effect hook to update the document class and localStorage when dark mode changes
    useEffect(() => {
        // Toggle the 'dark' class on the <html> element based on the dark mode state
        document.documentElement.classList.toggle('dark', darkMode);
        // Update the dark mode state in localStorage
        localStorage.setItem('darkMode', String(darkMode));
    }, [darkMode]);

    // Function to toggle/change the dark mode state
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <button
            onClick = {toggleDarkMode}
            className = {`px-4 py-2 rounded-full w-[50px] h-[50px]
               transition-colors duration-200`}
        >
            {darkMode ? (
                <img src = {lightModeIcon} alt = "lightModeIcon" className = "w-[100%] h-[100%] object-contain" />
            ) : (
                <img src = {darkModeIcon} alt = "darkModeIcon" className = "w-[100%] h-[100%] object-contain" />
            )}
        </button >
    );
};

export default ThemeSwitcher;
