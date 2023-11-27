import { useContext } from 'react';
import './Sidebar.scss';
import { LangContext } from '@/context/langContext/LangContext';
import { PageInfo } from '@/utils/language-info'

export default function Sidebar() {
    const {lang} = useContext(LangContext);
    const selectedLang: 'EN' | 'ES' = lang;
    const {aside} = PageInfo[selectedLang];

    return (
        <aside className='hidden lg:flex flex-col justify-between items-center'>
            <div className='logo_sect justify-center'>
                <img src={`/assets/LOGO.svg`} />
                <span>Haru Dev</span>
            </div>

            <ul>
                {aside?.nav.map((elem) => (
                    <a href={`#${elem.key}`} key={elem.key}>
                        <li>{elem.label}</li>
                    </a>
                ))}
            </ul>

            <div className='social_sect flex-col justify-between gap-6'>
                <a href="https://www.linkedin.com/in/humberto-g-tejada-espinoza-b0155a138/" target='_blank'>
                    <i className="fi fi-brands-linkedin"></i>
                </a>
                <a href="https://github.com/humtej1204" target='_blank'>
                    <i className="fi fi-brands-github"></i>
                    </a>
                <a href="https://medium.com/@humtej1204" target='_blank'>
                    <i className="fi fi-brands-medium"></i>
                </a>
            </div>
        </aside>
    );
  }
  