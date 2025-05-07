import { TAGS } from "../data/skillsData";


export const IMAGES = {

    SUDOKU1: {
        name: "SUDOKU1",
        src: "/projects/sudoku/web/juego.png",
    },
    SUDOKU2: {
        name: "SUDOKU2",
        src: "/projects/sudoku/web/reto.png",
    },
    SUDOKU3: {
        name: "SUDOKU3",
        src: "/projects/sudoku/web/sinpistas.png",
    },
    FORMULAUNO1: {
        name: "FORMULAUNO1",
        src: "/projects/f1/web/inicio.png",
    },
    FORMULAUNO2: {
        name: "FORMULAUNO2",
        src: "/projects/f1/web/crearpiloto.png",
    },
    FORMULAUNO3: {
        name: "FORMULAUNO3",
        src: "/projects/f1/web/nuevapartida.png",
    },
    FORMULAUNO4: {
        name: "FORMULAUNO4",
        src: "/projects/f1/web/mundialpilotos.png",
    },
    CIBER1: {
        name: "CIBER1",
        src: "/projects/defensor_ciberespacio/ciber1.jpg",
    },
    CIBER2: {
        name: "CIBER2",
        src: "/projects/defensor_ciberespacio/ciber2.jpg",
    },
    CIBER3: {
        name: "CIBER3",
        src: "/projects/defensor_ciberespacio/ciber3.jpg",
    },
    RITMOS1: {
        name: "RITMOS1",
        src: "/projects/ritmos/ritmos1.jpg",
    },
    RITMOS2: {
        name: "RITMOS2",
        src: "/projects/ritmos/ritmos2.jpg",
    },
    RITMOS3: {
        name: "RITMOS3",
        src: "/projects/ritmos/ritmos3.jpg",
    },
    OTROS1: {
        name: "OTROS1",
        src: "/projects/otros/otros1.jpg",
    },
    OTROS2: {
        name: "OTROS2",
        src: "/projects/otros/otros2.jpg",
    },
    OTROS3: {
        name: "OTROS3",
        src: "/projects/otros/otros3.jpg",
    },
}
    


export const PROJECTS = [
    {
        title: {
          es: "Sudoku",
          en: "Sudoku",
          ca: "Sudoku",
        },
        description: {
          es: "Juego del Sudoku para Android realizado con MAUI, C# y XAML. " +
              "Consigue estrellas desbloqueando paneles para acceder a los nuevos niveles.",
          en: "Sudoku game for Android developed with MAUI, C#, and XAML. " +
              "Earn stars by unlocking panels to access new levels.",
          ca: "Joc del Sudoku per a Android realitzat amb MAUI, C# i XAML. " +
              "Guanya estrelles desbloquejant panells per accedir als nous nivells."
        },
        tags: [
            { tag: TAGS.Android, level: 100 },
            { tag: TAGS.CSHARP, level: 100 },
            { tag: TAGS.Net, level: 100 },
        ],
        link: "/obras",
        github: "--Pegar link github",
        images: [IMAGES.SUDOKU1, IMAGES.SUDOKU2, IMAGES.SUDOKU3],
        
    },
    {
        title: {
          es: "Simulador F1",
          en: "F1 Simulator",
          ca: "Simulador F1",
        },
        description: {
          es: "Simulador de la temporada 2024 de F1, realizado con MAUI, C#, XAML y SQLite. " +
              "Crea tu personaje, entra en un equipo de F1 y consigue resultados. Mejora para " +
              "cambiar de equipo y conseguir mejores resultados.",
          en: "F1 2024 season simulator developed with MAUI, C#, XAML, and SQLite. " +
              "Create your character, join an F1 team, and achieve results. Improve to " +
              "switch teams and get better results.",
          ca: "Simulador de la temporada 2024 de F1, fet amb MAUI, C#, XAML i SQLite. " +
              "Crea el teu personatge, uneix-te a un equip de F1 i aconsegueix resultats. Millora " +
              "per canviar d'equip i obtenir millors resultats."
        },
        tags: [
            { tag: TAGS.Android, level: 100 },
            { tag: TAGS.CSHARP, level: 100 },
            { tag: TAGS.Net, level: 100 },
            { tag: TAGS.SQLite, level: 80 },
        ],
        link: "/obras",
        github: "--Pegar link github",
        images: [IMAGES.FORMULAUNO1, IMAGES.FORMULAUNO2, IMAGES.FORMULAUNO4],
    },
    {
        title: {
          es: "Máquina de ritmos",
          en: "Drum Machine",
          ca: "Màquina de ritmes",
        },
        description: {
          es: "Máquina de ritmos funcional basado en proyecto freeCodeCamp.",
          en: "Functional drum machine based on a freeCodeCamp project.",
          ca: "Màquina de ritmes funcional basada en un projecte de freeCodeCamp."
        },
        tags: [
            { tag: TAGS.CSS, level: 100 },
            { tag: TAGS.JS, level: 100 },
            { tag: TAGS.HTML, level: 60 },
        ],
        link: "https://codepen.io/Godoy21/full/azbJEEY",
        github: "--Pegar link github",
        images: [IMAGES.RITMOS1, IMAGES.RITMOS2]
    },

    {
        title: {
          es: "Defensor del ciberespacio",
          en: "Space Defender",
          ca: "Defensor del ciberespai",
        },
        description: {
          es: "Juego corto de rol en modo texto basado en proyecto freeCodeCamp.",
          en: "Short text-based RPG game based on a freeCodeCamp project.",
          ca: "Joc curt de rol en mode text basat en un projecte de freeCodeCamp."
        },
        tags: [
            
            { tag: TAGS.JS, level: 100 },
            { tag: TAGS.CSS, level: 90 },
            { tag: TAGS.HTML, level: 60 },
        ],
        link: "https://codepen.io/Godoy21/full/jEOygEb",
        github: "--Pegar link github",
        images: [IMAGES.CIBER1, IMAGES.CIBER2, IMAGES.CIBER3],
    },
    {
        title: {
          es: "Otros proyectos",
          en: "Other projects",
          ca: "Altres projectes",
        },
        
        description: {
          es: "Otros proyectos basados en freeCodeCamp: Calculadora, " +
              "Piedra, Papel o Tijera, Generador de frases aleatorias y más.",
          en: "Other projects based on freeCodeCamp: Calculator, " +
              "Rock, Paper, Scissors, Random Quote Generator, and more.",
          ca: "Altres projectes basats en freeCodeCamp: Calculadora, " +
              "Pedra, Paper, Tisores, Generador de frases aleatòries i més."
        },
        tags: [
            { tag: TAGS.HTML, level: 90 },
            { tag: TAGS.CSS, level: 90 },
            { tag: TAGS.JS, level: 90 },
        ],
        link: "https://codepen.io/Godoy21/pens/popular",
        github: "--Pegar link github",
        images: [IMAGES.OTROS3, IMAGES.OTROS2, IMAGES.OTROS1],
    },
    
    {
        title: {
          es: "¡Éste portfolio!",
          en: "This portfolio!",
          ca: "Aquest portfolio!",
        },
        description: {
          es: "Este portfolio ha sido desarrollado con Astro y Tailwind.",
          en: "This portfolio was developed with Astro and Tailwind.",
          ca: "Aquest portfolio ha estat desenvolupat amb Astro i Tailwind."
        },
        tags: [
            { tag: TAGS.ASTRO, level: 95 },
            { tag: TAGS.TAILWIND, level: 95 },
            { tag: TAGS.HTML, level: 20 },
            { tag: TAGS.CSS, level: 20 },
            { tag: TAGS.JS, level: 10 },
        ],
        link: "/#top",
        github: "--Pegar link github",
        images: [],
    },
]