import { LangContext } from '@/context/langContext/LangContext';
import './PersonalInfo.scss';
import { useContext } from 'react';
import { PageInfo } from '@/utils/language-info';

export default function PersonalInfo() {
    const {lang} = useContext(LangContext);
    const selectedLang: 'EN' | 'ES' = lang;
    const {contact_sect} = PageInfo[selectedLang];

    return (
        <div className='personal_info_card'>
            <div className='img_container'>
                <img src="https://as1.ftcdn.net/v2/jpg/05/74/26/68/1000_F_574266873_vhv00QksxhRPgy0cEeWTE15ImuhTEu7e.jpg" alt="" />
            </div>
            <div className='info_container'>
                <section className='description_sect'>
                    <div className='header_sect'>
                        <h1>Haru Tejada</h1>
                        <h2>Humberto Tejada Espinoza</h2>
                    </div>

                    <p>{contact_sect.description}</p>

                    <div className='social_sect'>
                        <a href="https://www.linkedin.com/in/humberto-g-tejada-espinoza-b0155a138/" target='_blank'>
                            <i className="fi fi-brands-linkedin"></i>
                        </a>
                        <a href="https://github.com/humtej1204" target='_blank'>
                            <i className="fi fi-brands-github"></i>
                            </a>
                        <a href="https://api.whatsapp.com/send?phone=940683605" target='_blank'>
                            <i className="fi fi-brands-whatsapp"></i>
                        </a>
                    </div>
                </section>
                <section className='contact_sect'>
                    <div className='contact_data'>
                        {contact_sect?.personalData.map((elem) => (
                            <div key={elem.key} className='contact_item'>
                                <h3>{elem.label}:</h3>
                                <i className={`fi fi-rr-${elem.icon}`}></i>
                                <span>{elem.data}</span>
                            </div>
                        ))}
                    </div>

                    <div className='langs_data'>
                        <h3>{contact_sect?.langData.tittle}:</h3>
                        <i className="fi fi-rr-language"></i>

                        <div className='langs_items'>
                            {contact_sect?.langData.langs.map((elem) => (
                                <div className='langs_item' key={elem.key}>
                                    <img src={`/assets/${elem.key}.png`} alt={`${elem.key}_icon`} />
                                    <span>{elem.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='action_btns'>
                        <a className='btn'
                        href={`/assets/files/Humberto_Tejada-${selectedLang}.pdf`}
                        download={`Humberto_Tejada.pdf`}>
                            {contact_sect.buttons[0]}
                        </a>
                        <a className='btn'
                        href="mailto:humtej1204@gmail.com">
                            {contact_sect.buttons[1]}
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}