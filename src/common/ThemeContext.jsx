import React, {createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext)

const getInitialTheme = () => {
    return localStorage.getItem('app-theme') || 'light';
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect (() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}