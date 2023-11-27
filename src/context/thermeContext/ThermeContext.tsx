'use client'
import { createContext, useState } from "react"

const ThemeContext = createContext<any>('light');

function ThemeProvider({children}: any) {
    const [theme, setTheme] = useState<'light'|'dark'>('light');

    const setPageTheme = (theme: 'light'|'dark') => {
        localStorage.setItem('theme', theme);
        setTheme(theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, setPageTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };