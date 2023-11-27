'use client'
import { createContext, useCallback, useState } from "react"

const LangContext = createContext<any>('ES');

function LangProvider({children}: any) {
    const [lang, setLang] = useState<'ES'|'EN'>('ES');

    const setPageLang = useCallback((lang: 'ES'|'EN') => {
        localStorage.setItem('lang', lang);
        setLang(lang);
    }, [])

    return (
        <LangContext.Provider value={{ lang, setPageLang }}>
            {children}
        </LangContext.Provider>
    )
}

export { LangContext, LangProvider };