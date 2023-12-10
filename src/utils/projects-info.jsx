export const PROJECTS_LIST = (lang) => {
    return [
        {
            key: 'pokedex',
            name: 'Pokedex',
            description: PROJECTS_DATA[lang].pokedex.description,
            tecnologies: ['angular', 'html', 'sass', 'typescript'],
            deployed_web: 'https://www.google.com',
            repo: '',
        }, {
            key: 'school_web',
            name: 'School Web Page',
            description: PROJECTS_DATA[lang].school_web.description,
            tecnologies: ['react', 'html', 'sass', 'javascript'],
            deployed_web: 'https://www.google.com',
            repo: '',
        }, {
            key: 'github_consumer',
            name: "Github - Commits & Repos' Explorer",
            description: PROJECTS_DATA[lang].github_consumer.description,
            tecnologies: ['angular', 'nestjs', 'html', 'sass', 'typescript'],
            deployed_web: 'https://www.google.com',
            repo: '',
        }, {
            key: 'portfolio_maker',
            name: 'Web Developer Portfolio Maker',
            description: PROJECTS_DATA[lang].portfolio_maker.description,
            tecnologies: ['nextjs', 'html', 'sass', 'typescript'],
            deployed_web: 'https://www.google.com',
            repo: '',
        },
    ]
}

const PROJECTS_DATA = {
    EN: {
        pokedex: {
            description: 'Interface to consume the data of all the pokemon provided by https://pokeapi.co/, also using a registration and login, the trainer can see the list and information of the pokemon he caught.',
        },
        school_web: {
            description: 'The project seeks to improve the visibility and efficiency of the school in the digital age. As well as help communicate effectively with the community, attract new students and keep everyone well informed.',
        },
        github_consumer: {
            description: 'Discover and explore GitHub repositories, track commits and branches with ease. Get detailed information about your favorite projects in a single intuitive interface.',
        },
        portfolio_maker: {
            description: 'Enter your information and view the design for your own personal page, which you can use as a portfolio so that everyone can see your information and experience in your developed projects.',
        },
    },
    ES: {
        pokedex: {
            description: 'Interfaz para poder consumir los datos de todos los pokemons proporcionada por https://pokeapi.co/, ademas usando un registro e inicio de sesion, el entrenador puede ver la lista e informacion de los pokemons que atrapo.',
        },
        school_web: {
            description: 'El proyecto busca mejorar la visibilidad y la eficiencia del colegio en la era digital. Asi como tambien ayudar a comunicarse de manera efectiva con la comunidad, atraer nuevos estudiantes y mantener a todos bien informados.',
        },
        github_consumer: {
            description: 'Descubre y explora repositorios de GitHub, rastrea commits y ramas con facilidad. Obtén información detallada de tus proyectos favoritos en una sola interfaz intuitiva.',
        },
        portfolio_maker: {
            description: 'Ingresa tu información y visualiza el diseño para tu propia pagina personal, que podras utilizar como portafolio para que todos vean tu informacion y experiencia en tus proyectos desarrollados.',
        },
    }
}