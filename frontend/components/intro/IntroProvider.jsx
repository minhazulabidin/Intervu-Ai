"use client";

import { createContext, useContext, useEffect, useState } from "react";

const IntroContext = createContext();

export function IntroProvider({ children }) {
    const [introFinished, setIntroFinished] = useState(false);
    console.log(introFinished)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroFinished(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <IntroContext.Provider value={{ introFinished, setIntroFinished }}>
            {children}
        </IntroContext.Provider>
    );
}

export const useIntro = () => useContext(IntroContext);