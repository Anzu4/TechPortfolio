import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Desiree Nelson', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Tech Portfolio', // e.g: Welcome to my website
};
// HERO DATA
export const heroData = {
  title: 'Hello! My name is ',
  name: 'Desiree Nelson.',
  subtitle: 'Full Stack Software Engineer',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'Avatar-Maker.png',
  paragraphOne:
    'Hey! My name is Desiree, and I am a full-stack software engineer based in New York City. I am engaged by technology as a tool to allow for positive change in the world. <Expand more>',
  paragraphTwo:
    'I am a recent graduate of the Grace Hopper Program at FullStack Academy, where we focused on the fundementals of the "NERD" Stack (Node, Express, React/Redux, and Sequelize Databases.) \n Before switching my path into Tech, I earned a Masters in History, and worked in Higher Education, and most recently transportation at the MTA.',
  paragraphThree:
    "When I'm not coding, I can be found experimenting with fermentation, gaming, reading, or spoiling my cats.",
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vQGbqZ0z-obwi77TcVVRMGitCEmAzUgjWdlAy31UJzeLlDAfVwEZg3ymi-XxjHwFmqUWk1Ts-e9Dg1L/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Globex.png',
    title: 'GlobeX',
    info: 'Model made with three js and animated with greensock',
    info2: '',
    url: 'https://blissful-jang-1365eb.netlify.app/',
    repo: 'https://github.com/Anzu4/GlobeX', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ComicSans.png',
    title: 'Comic Sans',
    info:
      'Web app that allows users to create their own coimics by dragging elements, applying a template and adding text',
    info2: 'Created using fabric.js',
    url: 'http://comicsans-app.herokuapp.com/#/editor',
    repo: 'https://github.com/comic-sans-app/web-app/', // if no repo, the button will not show up
  },
];

//SKILLS DATA
export const skillsData = [
  { id: nanoid(), title: 'JavaScript', img: 'javascript.png' },
  { id: nanoid(), title: 'html5', img: 'html.png' },
  { id: nanoid(), title: 'css', img: '' },
  { id: nanoid(), title: '', img: '' },
  { id: nanoid(), title: '', img: '' },
  { id: nanoid(), title: '', img: '' },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'desiree.m.nelson4@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'envelope-o',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/desiree-nelson/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Anzu4',
    },
    // {
    //   id: nanoid(),
    //   name: 'user',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
