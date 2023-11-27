'use client'
import './Header.scss';
import Toggle from '../toggle/Toggle';
import { useCallback, useContext, useEffect } from 'react';
import { LangContext } from '@/context/langContext/LangContext';
import { ThemeContext } from '@/context/thermeContext/ThermeContext';

export default function Header() {
  const {lang, setPageLang} = useContext(LangContext);
  const {theme, setPageTheme} = useContext(ThemeContext);

  const handleLangData = useCallback((data: 'EN'|'ES') => {
    setPageLang(data);
  }, [setPageLang]);

  const handleThemeData = useCallback((data: 'light'|'dark') => {
    setPageTheme(data);
  }, [setPageTheme]);

  useEffect(() => {
      const localLang: 'EN'|'ES'|null = localStorage.getItem('lang') as 'EN'|'ES';

      if (localLang) {
          handleLangData(localLang);
      }
  }, [handleLangData]);

  useEffect(() => {
      const localTheme: 'light'|'dark'|null = localStorage.getItem('theme') as 'light'|'dark';

      if (localTheme) {
          handleThemeData(localTheme);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          handleThemeData('dark');
          localStorage.setItem('theme', 'dark');
      } else {
        handleThemeData('light');
        localStorage.setItem('theme', 'light');
      }
  }, [theme, handleThemeData]);

  return (
    <header className='lg:absolute'>
      <div className='mobile_header flex lg:hidden'>
        <img src={`/assets/LOGO.svg`} />

        <button>
          <i className="fi fi-br-menu-burger"></i>
        </button>
      </div>
      <div className='desktop_header hidden lg:flex'>
        <div className='toggle_item'>
          <img src={'/assets/EN.png'} alt="EN_Image" />
          <Toggle values={['EN', 'ES']}
          getValue={handleLangData}
          setValue={lang}
          />
          <img src={'/assets/ES.png'} alt="ES_Image" />
        </div>
        <hr />
        <div className='toggle_item'>
          <i className="fi fi-br-sun"></i>
          <Toggle values={['light', 'dark']}
          getValue={handleThemeData}
          setValue={theme}
          />
          <i className="fi fi-br-moon"></i>
        </div>
      </div>
    </header>
  );
}
  