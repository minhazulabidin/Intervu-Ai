"use client";

import { createContext, useContext, useEffect, useState } from "react";

const IntroContext = createContext();

export function IntroProvider({ children }) {
  const [introFinished, setIntroFinished] = useState(false);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);

      // small delay so layout shift doesn't break animations
      setTimeout(() => {
        setAppReady(true);
      }, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <IntroContext.Provider value={{ introFinished, setIntroFinished, appReady }}>
      {children}
    </IntroContext.Provider>
  );
}

export const useIntro = () => useContext(IntroContext);