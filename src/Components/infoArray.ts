import {
    facebook,
    instagram,
    linkedin,
    send,
    shield,
    star,
    personalWebsite
} from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "competence",
        title: "Kompetencer",
    },
    {
        id: "Projects",
        title: "Projekter",
    },
    {
        id: "Kontakt",
        title: "Kontakt",
    },
];

export const reasons = [
    {
        id: "reasons-1",
        icon: star,
        title: "Løsningsorienteret",
        content:
            "Jeg er dygtig til at analysere og nedbryde problemer i håndterbare komponenter" +
            " og udvikle effektive løsninger."
    },
    {
        id: "reasons-2",
        icon: shield,
        title: "Holdspiller",
        content:
            "jeg trives i samarbejdsmiljøer og bidrager effektivt til tværfaglige teams med" +
            " stærke kommunikationsevner og forpligtelse til positivt teamdynamik.",
    },
    {
        id: "reasons-3",
        icon: send,
        title: "Fleksibel",
        content:
            "Jeg omfavner en vækstmindset og er hurtig til at mestre nye sprog," +
            " rammer og værktøjer for at sikre tilpasning til skiftende projektbehov.",
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "Antal Træninger I fitness i år",
        value: "220+",
    },
    {
        id: "stats-2",
        title: "Antal Bøger Læst",
        value: "11+",
    },
    {
        id: "stats-3",
        title: "Timer brugt på at finde et ';'",
        value: "Infinite",
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: facebook,
        link: "https://www.facebook.com/profile.php?id=100004485585330",
    },
    {
        id: "social-media-2",
        icon: instagram,
        link: "https://www.instagram.com/danieal__j/",
    },
    {
        id: "social-media-3",
        icon: linkedin,
        link: "https://www.linkedin.com/in/danieal-johnbaskar",
    },
];

export const AccordionData = [
    {
        title: 'Java',
        text: 'Jeg har erfaring med at arbejde med Java, et højt niveau, klassificeret, objektorienteret programmeringssprog designet til at opbygge skalerbare og pålidelige applikationer.',
    },
    {
        title: 'HTML & CSS',
        text: 'Jeg er fortrolig med HTML (Hypertext Markup Language) og CSS (Cascading Style Sheets), og bruger dem til at skabe velformaterede og visuelt tiltalende websider.',
    },
    {
        title: 'JavaScript & TypeScript',
        text: 'Jeg har praktisk erfaring med JavaScript og TypeScript og udnytter deres evner til at skabe dynamiske og robuste webapplikationer.',
    },
    {
        title: 'React',
        text: 'Jeg er dygtig i React, et JavaScript-bibliotek til opbygning af brugergrænseflader. Jeg har anvendt React til at udvikle responsive og interaktive single-page-applikationer.',
    },
    {
        title: 'MongoDB',
        text: 'Jeg har arbejdet med MongoDB, et NoSQL-databaseprogram. Min erfaring inkluderer design af fleksible datamodeller til skalerbare og højtydende applikationer.',
    },
    {
        title: 'PostgreSQL',
        text: 'Jeg har erfaring med PostgreSQL, et kraftfuldt open-source relationsdatabase system. Jeg har anvendt det til at designe og administrere relationelle databaser til forskellige applikationer.',
    },
    {
        title: 'Firebase',
        text: 'Jeg er fortrolig med Firebase, en platform udviklet af Google til at skabe mobile og webapplikationer. Jeg har brugt Firebase til forskellige funktioner som godkendelse, realtidsdatabase og hosting.',
    },
];


export const ProjectData = [
    {
        projectPicture: personalWebsite,
        title: 'Personlig hjemmeside',
        description: "Min egen hjemmeside brugt til at fremvise mine projekter og færdigheder.",
        kildeKode:"https://github.com/Daniea1/personal_cv",
    },
];
