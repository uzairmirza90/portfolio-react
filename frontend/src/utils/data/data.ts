import {
  NavMenuItemInterface,
  IntroductionInterface,
  SkillInterface,
  ProjectsInterface,
} from "../interfaces/interfaces";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
import cpp from "../../assets/images/cpp.png";
import git from "../../assets/images/git.png";
import mu5 from "../../assets/images/mu5.png";
import node from "../../assets/images/node.png";
import sass from "../../assets/images/sass.png";
import typescript from "../../assets/images/typescript.png";
import sql from "../../assets/images/sql.png";
import mongoDB from "../../assets/images/mongodb.jpeg";
import express from "../../assets/images/express.png";
import php from "../../assets/images/php.png";
import restapi from "../../assets/images/restapi.png";
import angular from "../../assets/images/angular.png";
import nextjs from "../../assets/images/nextjs.png";
import convocationImg from "../../assets/images/convocation.jpg";
import ecommerceWebsite from "../../assets/images/ecommercewebsite.png";
import eventOrganizer from "../../assets/images/eventOrganizer.png";
import weatherApp from "../../assets/images/weather.png";
import foodRecipe from "../../assets/images/foodrecipereact.png";
import portfoliowebsite from "../../assets/images/portfoliowebsite.png";
import notfound from "../../assets/images/notfound.jpeg";
import covid19rc from "../../assets/images/covid19rc.png";
import loginauthrc from "../../assets/images/loginauthrc.png";
import notesapprc from "../../assets/images/notesapprc.png";
import instagramrc from "../../assets/images/instagramrc.png";
import foodreciperc from "../../assets/images/foodreciperc.png";
import twitterrc from "../../assets/images/twitterrc.png";
import drumsjs from "../../assets/images/drumsjs.png";
import authpagejs from "../../assets/images/authpagejs.png";
import bankingjs from "../../assets/images/bankingjs.png";
import dicerolljs from "../../assets/images/dicerolljs.png";
import fortniteapijs from "../../assets/images/forniteapijs.png";
import googleclonejs from "../../assets/images/googleclonejs.png";
import guessinggamejs from "../../assets/images/guessinggamejs.png";
import notesjs from "../../assets/images/notesjs.png";
import piggamejs from "../../assets/images/piggamejs.png";
import simonjs from "../../assets/images/simonjs.png";
import todolistjs from "../../assets/images/todolistjs.png";
import workoutjs from "../../assets/images/workoutjs.png";
import angulardashboard from "../../assets/images/angulardashboard.png";
import prixite from "../../assets/images/prixite.png";
import bloodbank from "../../assets/images/bloodbank.png";
import github from "../../assets/images/github.webp";
import instagram from "../../assets/images/instagram.jpeg";
import facebook from "../../assets/images/facebook.webp";
import linkdein from "../../assets/images/linkdein.png";
import patreon from "../../assets/images/patreon.png";
import buymeacoffee from "../../assets/images/buymeacoffee.png";
import youtube from "../../assets/images/youtube.png";
import gmail from "../../assets/images/gmail.png";


//  Nav Menu Items
export const Nav_Menu: NavMenuItemInterface[] = [
  { text: "Home", path: "/" },
  { text: "Projects", path: "/projects" },
  { text: "APIs", path: "/apis" },
  { text: "Videos", path: "/videos" },
  { text: "About", path: "/about" },
];

//  Introduction Container
export const introduction: IntroductionInterface = {
  name: "Uzair Jamil",
  designation: "Software Engineer 👨🏻‍💻",
  description: `I'm a professional Full-Stack Web App / Mobile App Developer based in Pakistan.`,
};

//  Skills
export const skills: SkillInterface[] = [
  { image: html, text: "HTML", rating: 100 },
  { image: css, text: "CSS", rating: 90 },
  { image: javascript, text: "JavaScript", rating: 95 },
  { image: react, text: "React", rating: 95 },
  { image: redux, text: "Redux", rating: 80 },
  { image: nextjs, text: "Next JS", rating: 80 },
  { image: cpp, text: "C++", rating: 70 },
  { image: git, text: "Git & Github", rating: 70 },
  { image: mu5, text: "Material UI", rating: 80 },
  { image: node, text: "Node JS", rating: 50 },
  { image: sass, text: "Sass", rating: 90 },
  { image: typescript, text: "Typescript", rating: 80 },
  { image: react, text: "React Native", rating: 90 },
  { image: express, text: "Express JS", rating: 60 },
  { image: mongoDB, text: "MongoDB", rating: 80 },
  { image: restapi, text: "Rest API", rating: 70 },
  { image: php, text: "PHP", rating: 80 },
  { image: sql, text: "SQL", rating: 50 },
];

//  Qualification Data
export const qualification = {
  title: `Bachelor's in Computer Science`,
  year: "2016-2020",
  cgpa: 3.34,
  image: convocationImg,
};

// Crypto Api Table Header Data
export const cryptoApiHeader: string[] = [
  "Name",
  "Symbol",
  "Price",
  "Rank",
  "High",
  "Low",
  "Last Update",
  "Cir. Supply",
  "Total Supply",
  "Ath",
  "Atl",
];

// Projects Tab Data
export const projectsTab: ProjectsInterface[] = [
  {
    tabImage: react,
    label: "React",
    projects: [
      {
        image: ecommerceWebsite,
        title: "Full-Stack E-commerce Website",
        description:
          "Full-Stack E-commerce App in which user can see shopping list items. User can see specific product detail with dynamic route. User can filter specific type of shopping items. User can add items to cart and buy them in checkout page with Stripe Payment Gateway.",
        technologies: ["React | Redux | Stripe | Node | Express"],
      },
      {
        image: eventOrganizer,
        title: "Event Organizer Web App",
        description:
          "Event Organizer App in which Authenticated User can add new event, Edit event, Delete Event with protected route that means only authorized user can see the event with Admin Panel Design.",
        technologies: ["React | Redux | Firebase"],
      },
      {
        image: portfoliowebsite,
        title: "Portfolio Website",
        description: "Portfilio Website is basically you are using right now.",
        technologies: ["React | Node | Express | MongoDB | Material UI"],
      },
      {
        image: weatherApp,
        title: "Weather App",
        description:
          "Weather App in which user can see weather details like temperature, humidity, pressure, visibility of any country or city by search. This project is using weather api from Rapid API service.",
        technologies: ["React | Rapid API"],
      },
      {
        image: foodRecipe,
        title: "Food Recipe Search App",
        description:
          "Food Recipe Search App in which user search and filter through bunch of recipes. Also user can search specific number of recipes. It uses an Food Recipe API by Edamam API service.",
        technologies: ["React | Edamam API"],
      },
      {
        image: notfound,
        title: "Task Tracker",
        description:
          "Task Tracker in which user can add tasks as well differentiate between completed and non-completed tasks as per the requirement. All CRUD operations can be applied to the task as well.",
        technologies: ["React | Material UI"],
      },
    ],
  },
  {
    tabImage: react,
    label: "React Native",
    projects: [
      {
        image: covid19rc,
        title: "Covid-19 Tracker",
        description:
          "Covid-19 Tracker App in which user can see live stats of Covid-19 coming from third party API by Rapid API service. User can search stats by country name and active cases, new cases, deaths, recovered type of data will be shown to the user. ",
        technologies: [
          "React Native | UI Kitten | Country Flag Api | React Navigation",
        ],
      },
      {
        image: notesapprc,
        title: "Full-Stack Notes App",
        description:
          "In this app user can add new note, delete note, edit note and search note from all notes. User can delete specific note and delete all notes by one as well. And then that deleted notes goes to undo component. And then from Undo component user can get back that note or all notes to main home component. Bin Functionality added as well.",
        technologies: ["React Native | UI Kitten | React Navigation"],
      },
      {
        image: foodreciperc,
        title: "Recipe Search App",
        description:
          "Recipe Search App in which user search and filter through bunch of recipes. Also user can search specific number of recipes. It uses an Food Recipe API by Edamam API service.",
        technologies: ["React Native | Edamam API | React Navigation"],
      },
      {
        image: loginauthrc,
        title: "Login Authentication App with Firebase",
        description:
          "Login Authentication in which user can sign and sign up using firebase cloud service and protected route have been applied according the user credientials.",
        technologies: ["React Native | Firebase | React Navigation"],
      },
      {
        image: instagramrc,
        title: "Instagram UI Clone",
        description:
          "Instagram UI Clone is basically clone of original Instagram Mobile App.",
        technologies: ["React Native | UI Kitten"],
      },
      {
        image: twitterrc,
        title: "Twitter UI Clone",
        description:
          "This project is basically the clone of original Twitter Mobile App.",
        technologies: ["React Native | UI Kitten"],
      },
    ],
  },
  {
    tabImage: javascript,
    label: "Javascript",
    projects: [
      {
        image: fortniteapijs,
        title: "Fortnite Api Project",
        description:
          "This project uses external fortnite api to render data in the UI as user need with CRUD Operations as well.",
        technologies: ["HTML | CSS | Javascript | Fortnite API"],
      },
      {
        image: notesjs,
        title: "Notes App",
        description:
          "This project is simple notes app with CRUD operations with beatifull UI.",
        technologies: ["HTML | CSS | Javascript"],
      },
      {
        image: piggamejs,
        title: "Pig Game",
        description:
          "This project is a game in which two players can play and if one of the player get higher score using dice will be a winner.",
        technologies: ["HTML | CSS | Javascript"],
      },
      {
        image: todolistjs,
        title: "Todo List",
        description:
          "This project is a Todo List App in which user can add todos, delete them, mark them as completed. If user mark todo as completed, so completed todo goes to completed section shown in the right side of the image.",
        technologies: ["HTML | CSS | Javascript"],
      },
      {
        image: bankingjs,
        title: "Banking Web App",
        description:
          "This project is a banking web app in which user can login by pin code and make transactions wit other user. User can also see history of transactions with date user made. ",
        technologies: ["HTML | CSS | Javascript"],
      },
      {
        image: dicerolljs,
        title: "Dice Roll Game",
        description:
          "This project is a game like we roll the dice in Ludo. If dice number is greated than other user's dice, that user will be winner. If both the dices values are equal, game will be draw.",
        technologies: ["HTML | CSS | Javascript | Bootstrap"],
      },
      {
        image: drumsjs,
        title: "Drums",
        description:
          "This project is like user can play drums and make sound with it.",
        technologies: ["HTML | CSS | Javascript"],
      },
      {
        image: googleclonejs,
        title: "Google Clone",
        description:
          "This project is a clone of Google with completed reponsiveness. Also dark mode implemented as well using local storage and switch button.",
        technologies: ["HTML | CSS | Javascript"],
      },
      {
        image: authpagejs,
        title: "Auth Page",
        description:
          "In this project there are two two pages like sign in page and sign up page. User can switch between these pages.",
        technologies: ["HTML | CSS | Javascript"],
      },
      {
        image: guessinggamejs,
        title: "Guessing Game",
        description:
          "In this project user have to guess the number which is given by app and if the number is correct, score will be incremented.",
        technologies: ["HTML | CSS | Javascript"],
      },
      {
        image: simonjs,
        title: "Simon Game",
        description:
          "In this project user have to remember the squence of blinking buttons and everytime the buttons blinks, user have to click on that button according to previous sequence. If sequence is not correct, game will be over.",
        technologies: ["HTML | CSS | Javascript"],
      },
    ],
  },
  {
    tabImage: angular,
    label: "Angular",
    projects: [
      {
        image: angulardashboard,
        title: "Admin Panel Dashboard with Real Time Data",
        description:
          "In this project authenticated user can see live data like Prefixes, Transite, Routes, Analytics coming from backend server apis and differentiate between them. Data can be shown using Chart JS.",
        technologies: [
          "Angular | Node | Express | Angular Material | Chart JS",
        ],
      },
    ],
  },
  {
    tabImage: nextjs,
    label: "Next JS",
    projects: [
      {
        image: prixite,
        title: "Corporate Prixite Website",
        description:
          "This project is basically corporate website i built for the prixite company using Next JS.",
        technologies: ["Next JS | Material UI | Typescript"],
      },
    ],
  },
  {
    tabImage: php,
    label: "PHP",
    projects: [
      {
        image: bloodbank,
        title: "Blood Bank Management System (FYP)",
        description:
          "This project is my final year project of my graduation in which user can login and signup. User can donate blood. User can see all donors in different cities. User can see the details related to donation.",
        technologies: [
          "HTML | CSS | Javascript | Bootstrap | JQuery | PHP | MySQL",
        ],
      },
    ],
  },
  {
    tabImage: cpp,
    label: "C++",
    projects: [
      {
        image: notfound,
        title: "Caculator App",
        description:
          "This app is a calculator with all mathematical operations like addition, subtraction, multiplication and division.",
        technologies: ["C++"],
      },
      {
        image: notfound,
        title: "Car Parking System",
        description:
          "In this project there is a car parking system. Car Ticket will be assigned if car is parked. Manager can see list of cars and if parking hall is full, no car will be parked then.",
        technologies: ["C++"],
      },
      {
        image: notfound,
        title: "Restaurant Order Management System",
        description:
          "In this project the manager of restaurant handles the orders of customers with menu items and delierved them with bill receipt.",
        technologies: ["C++"],
      },
      {
        image: notfound,
        title: "Tic Toe Game",
        description: "This project is a usual Tic Toe Game.",
        technologies: ["C++"],
      },
    ],
  },
];

// Youtube Channel Videos
export const channelVideos = [
  "https://www.youtube.com/embed/JnuzZg7FupE",
  "https://www.youtube.com/embed/lcKk19mZITY",
  "https://www.youtube.com/embed/xHtyqolFylo",
  "https://www.youtube.com/embed/Y4nk6-D4RKE",
  "https://www.youtube.com/embed/ZJqyd2QHcYQ",
  "https://www.youtube.com/embed/95SVAJQvZao",
  "https://www.youtube.com/embed/a06V_hpIaY8",
  "https://www.youtube.com/embed/jGWkrORVl6o",
  "https://www.youtube.com/embed/Pszpgmp1RM8",
  "https://www.youtube.com/embed/RLEwjt07mbw",
  "https://www.youtube.com/embed/UzKVvvW5BU8",
];

// About Us Page Data
export const aboutUsPage = {
  aboutPortfolio: {
    title: "About Portfolio",
    header: "This portfolio website built with the following technologies:",
    tech: {
      frontEndTitle: 'Front End',
      frontEnd: [
        {
          techName: "React",
        },
        {
          techName: "Typescript",
        },
        {
          techName: "Material UI",
        },
        {
          techName: "Crypto API",
        },
      ],
      backEndTitle: 'Back End',
      backEnd: [
        {
          techName: "Node",
        },
        {
          techName: "Express",
        },
        {
          techName: "MongoDB",
        },
      ],
    },
  },
  aboutMe: {
    title: 'About Me',
    experience: {
      heading:
        "Full-Stack Developer with 2 Years of professional experience in the industry.",
      details: [
        {
          desc: "React JS / Next JS for Frontend Development.",
        },
        {
          desc: "Redux for Global State Management.",
        },
        {
          desc: "Sass over CSS.",
        },
        {
          desc: "Hands-On Experience with JavaScript and TypeScript (preferably Typescript cause i love interfaces 😀).",
        },
        {
          desc: "Node and Express for the Server and REST Api Development but GraphQL makes it much easier 😀.",
        },
        {
          desc: "MongoDB for Database. Also worked on SQL. Also worked on Firebase as well.",
        },
        {
          desc: "Unit Testing with Jest.",
        },
        {
          desc: "Have experience of Git & Github as well.",
        },
        {
          desc: "Also Worked with DevOp Tech (CI/CD Pipeline using Github Actions via automation).",
        },
        {
          desc: "Deployed on Vercel, Netlify, Github Pages, Heroku.",
        },
        {
          desc: "Hands-on Experience with React Native for Mobile App Development (IOS & Android).",
        },
        {
          desc: "Capable of learning and working on any Programming Language / Framework.",
        },
      ],
    },
  },
};



// Contact Me Card Data 
export const contactMeSection = {
  contact: [
    {
      image: linkdein,
      title: 'Linkdein',
      detail: 'https://www.linkedin.com/in/uzair-jamil-24689588/'
    },
    {
      image: github,
      title: 'Github',
      detail: 'https://github.com/uzairmirza90'
    },
    {
      image: facebook,
      title: 'Facebook',
      detail: 'https://www.facebook.com/uzair.mirza.908'
    },
    {
      image: instagram,
      title: 'Instagram',
      detail: 'https://www.instagram.com/uzairmirzaaa/'
    },
    {
      image: patreon,
      title: 'Patreon',
      detail: 'https://www.patreon.com/uzairmirza'
    },
    {
      image: buymeacoffee,
      title: 'Buy Me A Coffee',
      detail: 'https://www.buymeacoffee.com/uzairmirza'
    },
    {
      image: youtube,
      title: 'Youtube',
      detail: 'https://www.youtube.com/channel/UC0Pr5OIYiUj66ploieEnUwg'
    },
    {
      image: gmail,
      title: 'Gmail',
      detail: 'mailto:uzairmirza90@gmail.com'
    },
  ]
}