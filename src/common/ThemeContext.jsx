import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const useThemeContext = () => useContext(ThemeContext)

const getInitialTheme = () => {
    return localStorage.getItem('app-theme') || 'light';
}

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {theme, toggleTheme}

    return (
        <ThemeContext.Provider value={ value }>
            {children}
        </ThemeContext.Provider>
    )
}

export { useThemeContext, ThemeContextProvider }