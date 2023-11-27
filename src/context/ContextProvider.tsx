import { LangProvider } from './langContext/LangContext';
import { ThemeProvider } from './thermeContext/ThermeContext';

export function AppContextProvider({children}: any) {
    return (
        <LangProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </LangProvider>
    );
}