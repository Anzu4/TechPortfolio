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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
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
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
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
    {
      id: nanoid(),
      name: 'envelope-o',
      url: '',
    },
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
    {
      id: nanoid(),
      name: 'user',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
