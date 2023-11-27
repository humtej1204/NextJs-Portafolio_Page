import {SOFT_SKILLS_EN, SOFT_SKILLS_ES} from './soft-skills-info';
import {PROJECTS_LIST} from './projects-info';

export const PageInfo = {
    EN: {
        aside: {
            nav: [
                {key: 'hero_section', label: 'About me'},
                {key: 'skills_section', label: 'Skills'},
                {key: 'projects_section', label: 'Projects'},
            ]
        },
        hero_sect: {
            tittle: 'Hi! I\'m Haru Tejada,',
            subTittle: 'Web Developer',
            jobTittle: 'Full Stack Developer',
            button: 'Contact me'
        },
        contact_sect: {
            description: "My focus on proactivity, a passion for continuous learning, and a dedication to continuous improvement are the pillars that define me as a valuable asset to any team. My commitment to the company's success is based on my desire to apply not only my skills but also my past experiences to overcome challenges and achieve ambitious goals. I understand that the path to achieving the company's objectives is intrinsically linked to my personal goals of growth and self-improvement. I am ready to contribute my knowledge and competencies strategically, working in collaboration with my teammates to achieve not only the organization's success but also my own continuous growth and development.",
            personalData: [
                {
                    key: 'email', label: 'Email',
                    data: 'humtej1204@gmail.com', icon: 'envelope'
                }, {
                    key: 'cel', label: 'Cellphone',
                    data: '+51 940683605', icon: 'mobile-notch'
                }, {key: 'ubication', label: 'Ubication',
                    data: 'Lima - Peru', icon: 'earth-americas'
                }
            ],
            langData: {
                tittle: 'Languages',
                langs: [
                    {key: 'EN', label: 'English'},
                    {key: 'ES', label: 'Spanish'}
                ]
            },
            buttons: ['CV', 'Send Email']
        },
        skills_sect: {
            sections: {
                techSkills: {
                    tittle: "Technical Skills"
                },
                softSkills: {
                    tittle: "Soft Skills",
                    softSkills: SOFT_SKILLS_EN
                }
            }
        },
        projects_sect: {
            tittle: 'Projects',
            projects: PROJECTS_LIST
        },
        footer: {}
    },
    ES: {
        aside: {
            nav: [
                {key: 'hero_section', label: 'Sobre mi'},
                {key: 'skills_section', label: 'Habilidades'},
                {key: 'projects_section', label: 'Proyectos'},
            ]
        },
        hero_sect: {
            tittle: 'Hola! Soy Haru Tejada,',
            subTittle: 'Desarrollador Web',
            jobTittle: 'Desarrollador Full Stack',
            button: 'Contactame'
        },
        contact_sect: {
            description: 'Mi enfoque en la proactividad, la pasión por el aprendizaje constante y la dedicación a la mejora continua son los pilares que me definen como un activo valioso para cualquier equipo. Mi compromiso con el éxito de la empresa se basa en mi deseo de aplicar no solo mis habilidades, sino también mis experiencias pasadas, para superar desafíos y alcanzar metas ambiciosas. Entiendo que el camino hacia el logro de los objetivos de la empresa está intrínsecamente ligado a mis objetivos personales de crecimiento y superación. Estoy listo para aportar mis conocimientos y competencias de manera estratégica, trabajando en colaboración con mis compañeros de equipo para lograr no solo el éxito de la organización, sino también mi propio crecimiento y desarrollo continuo.',
            personalData: [
                {
                    key: 'email', label: 'Correo',
                    data: 'humtej1204@gmail.com', icon: 'envelope'
                }, {
                    key: 'cel', label: 'Celular',
                    data: '+51 940683605', icon: 'mobile-notch'
                }, {key: 'ubication', label: 'Ubicación',
                    data: 'Lima - Peru', icon: 'earth-americas'
                }
            ],
            langData: {
                tittle: 'Idiomas',
                langs: [
                    {key: 'EN', label: 'Ingles'},
                    {key: 'ES', label: 'Español'}
                ]
            },
            buttons: ['CV', 'Enviar Correo']
        },
        skills_sect: {
            sections: {
                techSkills: {
                    tittle: 'Habilidades Tecnicas'
                },
                softSkills: {
                    tittle: 'Habilidades blandas',
                    softSkills: SOFT_SKILLS_ES
                }
            }
        },
        projects_sect: {
            tittle: 'Proyectos',
            projects: PROJECTS_LIST
        },
        footer: {}
    }
}