import {
    people01,
    people02,
    people03,
    facebook,
    instagram,
    linkedin,
    airbnb,
    binance,
    coinbase,
    dropbox,
    send,
    shield,
    star
} from "../assets";
import Accordion from "../Components/Accordion";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "competence",
        title: "Kompetencer",
    },
    {
        id: "clients",
        title: "Clients",
    },
];

export const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Løsningsorienteret",
        content:
            "Jeg er dygtig til at analysere og nedbryde problemer i håndterbare komponenter" +
            " og udvikle effektive løsninger."
    },
    {
        id: "feature-2",
        icon: shield,
        title: "Holdspiller",
        content:
            "jeg trives i samarbejdsmiljøer og bidrager effektivt til tværfaglige teams med" +
            " stærke kommunikationsevner og forpligtelse til positivt teamdynamik.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Fleksibel",
        content:
            "Jeg omfavner en vækstmindset og er hurtig til at mestre nye sprog," +
            " rammer og værktøjer for at sikre tilpasning til skiftende projektbehov.",
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: people03,
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

export const clients = [
    {
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
];

export const AccordionData = [
    {
        title: 'Java',
        text: 'I have experience working with Java, a high-level, class-based, object-oriented programming language designed for building scalable and reliable applications.',
    },
    {
        title: 'HTML & CSS',
        text: 'I am familiar with HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets), using them to create well-structured and visually appealing web pages.',
    },
    {
        title: 'JavaScript & TypeScript',
        text: 'I have hands-on experience with JavaScript and TypeScript, leveraging their capabilities to create dynamic and robust web applications.',
    },
    {
        title: 'React',
        text: 'I am proficient in React, a JavaScript library for building user interfaces. I have utilized React to develop responsive and interactive single-page applications.',
    },
    {
        title: 'React Native',
        text: 'I have experience with React Native, using it to build cross-platform mobile applications. It allows me to leverage my React skills for mobile development.',
    },
    {
        title: 'MongoDB',
        text: 'I have worked with MongoDB, a NoSQL database program. My experience includes designing flexible data models for scalable and high-performance applications.',
    },
    {
        title: 'PostgreSQL',
        text: 'I have experience with PostgreSQL, a powerful open-source relational database system. I have utilized it to design and manage relational databases for various applications.',
    },
    {
        title: 'Firebase',
        text: 'I am familiar with Firebase, a platform developed by Google for creating mobile and web applications. I have utilized Firebase for various features such as authentication, real-time database, and hosting.',
    },
];
