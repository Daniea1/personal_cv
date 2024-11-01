import {
    facebook,
    instagram,
    linkedin,
    send,
    shield,
    star,
    personalWebsite,
    instagramDark,
    facebookDark,
    linkedinDark,
    javaLogo,
    reactLogo,
    HtmlCssLogo,
    typeScriptLogo,
    mongoDBLogo,
    postgressLogo,
    JavascriptLogo,
    pythonLogo,
    samplePDF1, samplePDF2, StephanWebsite,
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
            "Jeg er dygtig til at analysere og nedbryde problemer i håndterbare størrelser" +
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
            "Jeg omfavner en growth-mindset og er hurtig til at lære nye sprog, frameworks og værktøjer. " +
            "At bruge en weekend på at nørde mig igennem en 10+ timers YouTube-video er intet problem for mig.",
    },
];

export const stats = [
    {
        id: "stats-1",
        title: "Træninger I fitness i år",
        value: "189+",
    },
    {
        id: "stats-2",
        title: "Kilometer løbet i år",
        value: "275+",
        //68km MapMyRun
    },
    {
        id: "stats-3",
        title: "Bøger Læst",
        value: "12+",
    },
    {
        id: "stats-4",
        title: "Timer på finde bugs",
        value: "∞",
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
export const socialMediaDark = [
    {
        id: "social-media-1",
        icon: facebookDark,
        link: "https://www.facebook.com/profile.php?id=100004485585330",
    },
    {
        id: "social-media-2",
        icon: instagramDark,
        link: "https://www.instagram.com/danieal__j/",
    },
    {
        id: "social-media-3",
        icon: linkedinDark,
        link: "https://www.linkedin.com/in/danieal-johnbaskar",
    },
];

export const accordionData = [
    {
        icon: javaLogo,
        title: 'Java',
        text: 'Jeg er igennem mit studie blevet fortrolig med at arbejde med Java, et objektorienteret programmerings-sprog designet til at opbygge skalerbare og pålidelige applikationer.',
    },
    {
        icon: pythonLogo,
        title: 'Python',
        text: 'Jeg er igennem mit studie blevet fortrolig med at arbejde med Python. Python er et alsidigt, højniveau programmeringssprog kendt for dets læsbarhed og brugervenlighed, hvilket gør det velegnet til forskellige anvendelser.',

    },
    {
        icon: HtmlCssLogo,
        title: 'HTML & CSS',
        text: 'Jeg er igennem mit studie blevet fortrolig med at arbejde med HTML og CSS til at skabe visuelt tiltalende websider.',
    },
    {
        icon: typeScriptLogo,
        title: 'JavaScript & TypeScript',
        text: 'Jeg er igennem mit studie blevet fortrolig med at arbejde med JavaScript og TypeScript  til at skabe dynamiske og robuste webapplikationer.',
    },
    {
        icon: reactLogo,
        title: 'React',
        text: 'Jeg har i min egen fritid lært at kode i React, et JavaScript bibliotek til opbygning af bruger-grænseflader. Jeg har bl.a. anvendt React til at udvikle et responsive og interaktive single-page hjemmeside (denne hjemmeside).',
    },
    {
        icon: mongoDBLogo,
        title: 'MongoDB',
        text: 'Jeg har igennem mit studie arbejdet med MongoDB, et NoSQL-databaseprogram. Jeg har anvendt det til at designe og administrere document-based databaser til forskellige projekter her på universitet.',
    },
    {
        icon: postgressLogo,
        title: 'PostgreSQL',
        text: 'Jeg har igennem mit studie arbejdet med PostgreSQL, et  open-source relationsdatabase system. Jeg har anvendt det til at designe og administrere relationelle databaser til forskellige projekter her på universitet.',
    },
    {
        icon: JavascriptLogo,
        title: 'Firebase',
        text: 'Jeg har i min egen fritid blevet fortrolig med Firebase, en platform udviklet af Google til at skabe mobile og webapplikationer. Jeg har brugt Firebase til forskellige features som login gennem google konto og database.',
    },
];

export const projectData = [
    {
        projectPicture: personalWebsite,
        title: 'Personlig hjemmeside',
        description: "Min egen hjemmeside brugt til at fremvise mine projekter og færdigheder.",
        kildeKode: "https://github.com/Daniea1/personal_cv",
    },
    // {
    //     projectPicture: StephanWebsite,
    //     title: 'Stephans køreskole',
    //     description: "En fuld funktionel hjemmeside som jeg selv har kodet for Stephans køreskole.",
    //     kildeKode: "https://stephanskoreskole.dk",
    // },
];

export const sidebar = [
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
// infoArray.js
export const recommendationsData = [
    {
        id: 1,
        text: "Jeg har haft fornøjelsen at kende Danieal Johnbaskar siden september 2022, hvor Danieal startede på uddannelsen til Civilingeniør i Software Engineering, og hvor han deltog i mit kursus i computersystemer.\n" +
            "Siden har Danieal fungeret som instruktor for efterfølgende studerende i samme fag. Her har Danieal vist sig som faglig kompetent samtidig med, at han har har en god dialog med de yngre studerende. Danieal har været god til at guidet de studerende gennem kursets faglige indhold, ligesom har har sparret med de studernde i personlige og studimæssige forhold.\n" +
            "Jeg anbefaler gerne Danieal som en seriøs samarbejdspartner.",
        name: "Morten Hansen",
        position: "Lektor/Ingeniør, Mærsk Mc-Kinney Møller Instituttet",
        anbefalingPDF: samplePDF1
    },
    {
        id: 2,
        text: "I am writing to recommend Danieal Johnbaskar wholeheartedly, who has served as an instructor in my Data Management database course at the University of Southern Denmark." +
            " During his tenure, Danieal has demonstrated an exceptional level of commitment and proficiency that has significantly contributed to the success of the course and the development of our students.\n" +
            "Danieal's proactive attitude and initiative to assist students both inside and outside the classroom are commendable. His approachability and willingness to provide additional support have fostered a positive learning environment." +
            " His dedication to ensuring student success, reflected in his prompt addressing of queries and facilitation of complex concept understanding, is a testament to his passion for education.\n" +
            "Furthermore, Danieal's foundational knowledge in Data Management and related technologies is not only exemplary but also up-to-date." +
            " His deep understanding of the subject matter, coupled with his commitment to staying abreast of the latest developments, allows him to deliver content effectively and inspire confidence in his students." +
            " His ability to convey complex information in an accessible manner has been a significant asset to the course, and I am confident that he will continue to excel in any academic or professional endeavor he undertakes.",
        name: "Jakob Hviid",
        position: " PhD, Assistant Professor, University of Southern Denmark Software Engineering Section",
        anbefalingPDF: samplePDF2
    },
    {
        id: 3,
        text: "Danieal er en gennemtænkende person, der grundigt overvejer sine planer og beslutninger." +
            " Han holder hovedet koldt og går til opgaven med hovedet højt.",
        name: "Martin Andersen Primdahl",
        position: "Butikschef, Netto",
    },
];




