'use client'
import { useContext } from 'react';
import './Hero.scss';
import { PopupContext } from '@/context/PopupContext/PopupContext';
import PersonalInfo from '@/components/dialogs/PersonalInfo';
import { LangContext } from '@/context/langContext/LangContext';
import { PageInfo } from '@/utils/language-info';

export default function Hero() {
  const {openPopup} = useContext(PopupContext);
  const {lang} = useContext(LangContext);
  const selectedLang: 'EN' | 'ES' = lang;
  const {hero_sect} = PageInfo[selectedLang];
  
  const handleOpenPopup = () => {
    openPopup(<PersonalInfo />);
  };

  return (
    <section id="hero_section" className='banner_hero'>
      <div className='banner_container flex flex-col lg:flex-row'>
        <div className='info_sect flex flex-col justify-center items-center lg:justify-start lg:items-start'>
          <h1>{hero_sect.tittle}</h1>
          <h2>{hero_sect.subTittle}</h2>
          <h3>{hero_sect.jobTittle}</h3>

          <button onClick={handleOpenPopup}>
            {hero_sect.button}
          </button>
        </div>
        
        <div className='img_container'>
          <img src="https://as1.ftcdn.net/v2/jpg/05/74/26/68/1000_F_574266873_vhv00QksxhRPgy0cEeWTE15ImuhTEu7e.jpg" alt="" />
        </div>
      </div>
      <div className='floating_btn hidden lg:inline'>
        <i className="fi fi-br-chevron-double-down"></i>
      </div>
    </section>
  );
}
  