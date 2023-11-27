'use client'
import '@/app/page.scss';
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Hero from "@/components/sections/hero/Hero";
import SkillsSection from "@/components/sections/skills/Skills";
import ProyectsSection from "@/components/sections/proyects/Proyects";
import { ThemeContext } from '@/context/thermeContext/ThermeContext';
import { useContext } from 'react';
import { PopupProvider } from '@/context/PopupContext/PopupContext';

export default function Home() {
  const {theme} = useContext(ThemeContext);

  return (
    <main className='flex flex-col lg:flex-row'
    data-theme={(theme === 'dark') ? 'dark' : 'light'}>
      
      <PopupProvider>
        <Header />
        <Sidebar />
        
        <div className="main_container">
          <Hero />
          <SkillsSection />
          <ProyectsSection />
        </div>
      </PopupProvider>
    </main>
  );
}
