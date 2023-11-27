"use client"
import Image from 'next/image';
import './Skills.scss';
import React, { useContext, useState } from 'react';
import {TEC_LANGS} from '@/utils/tec-langs-info';
import { LangContext } from '@/context/langContext/LangContext';
import { PageInfo } from '@/utils/language-info';

export default function SkillsSection() {
    const {lang} = useContext(LangContext);
    const selectedLang: 'EN' | 'ES' = lang;
    const {skills_sect} = PageInfo[selectedLang];
    
    return (
        <div className='skills_section container_sect' id="skills_section">
            <div className='section_container skills_container flex flex-col lg:flex-row'>
                <section className='tecSkills_sect'>
                    <h1 className='text-center lg:text-left'>{skills_sect.sections.techSkills.tittle}:</h1>

                    <div className='tecnologies_section'>
                        {TEC_LANGS.map((elem) => (
                            <div className='lbl_tag'
                            key={`pLang_${elem.key}`}>
                                <div className='img_container'>
                                    <Image
                                    src={`/assets/programming_lang/${elem.key}.svg`}
                                    alt={`pLang_${elem.label}`}
                                    width={0}
                                    height={0}
                                    />
                                </div>
                                <span>{elem.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='softSkills_sect'>
                    <h1 className='text-center lg:text-left'>
                        {skills_sect.sections.softSkills.tittle}:
                    </h1>

                    <SoftSkillsSection softSkills={skills_sect.sections.softSkills.softSkills} />
                </section>
            </div>
        </div>
    );
}

function SoftSkillsSection({softSkills}: any) {
    const [isOpen, setIsOpen] = useState(new Array(softSkills.length).fill(false));
  
    const toggleOpenState = (index: number) => {
      const newIsOpen = [...isOpen];
      newIsOpen[index] = !newIsOpen[index];
      setIsOpen(newIsOpen);
    };

    return (
        <ul className='softSkills_container'>
            {softSkills.map((elem: any, index: number) => (
                <li key={`softSkill_${elem.key}`}
                onClick={() => toggleOpenState(index)}>
                    <h2>
                        {elem.title}
                        <i className={`fi ${isOpen[index] ? 'fi-br-angle-small-up' : 'fi-br-angle-small-down'}`}></i>
                    </h2>
                    {isOpen[index] && <p>{elem.content}</p>}
                </li>
            ))}
        </ul>
    );
}