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
  subtitle: "and I'm a Full Stack Software Engineer",
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'DN-yellow.png',
  paragraphOne:
    'Hey! My name is Desiree, and I am a full-stack software engineer based in New York City. I am engaged by technology as a tool to allow for positive change in the world.',
  paragraphTwo:
    'I am a recent graduate of the Grace Hopper Program at FullStack Academy, where we focused on the fundamentals of the "NERD" Stack (Node, Express, React/Redux, and Sequelize Databases.)',
  paragraphThree:
    'Before switching my path into Tech, I earned a Masters in History, worked in Higher Education, and most recently in transportation at the MTA.',
  paragraphFour:
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
    info:
      'Model of the Earth with clouds, and Moon. Earth fades from day to night.  Users can change the speed and direction of orbits and rotations.',
    info2: 'Made with Three.js and animated with Greensock',
    url: 'https://globex-dn.netlify.app/',
    repo: 'https://github.com/Anzu4/GlobeX', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ComicSans.png',
    title: 'Comic Sans',
    info:
      'Web app that allows users to create their own coimics by dragging elements, applying a template and adding text',
    info2: 'Created with fabric.js',
    url: 'http://comicsans-app.herokuapp.com/#/editor',
    repo: 'https://github.com/comic-sans-app/web-app/', // if no repo, the button will not show up
  },
];

//SKILLS DATA
export const skillsData = [
  { id: nanoid(), stack: 'frontEnd', title: 'html5', img: 'html.png' },
  { id: nanoid(), stack: 'frontEnd', title: 'css3', img: 'css.png' },
  { id: nanoid(), stack: 'frontEnd', title: 'Fabric.js', img: 'fabric.png' },
  { id: nanoid(), stack: 'frontEnd', title: 'React', img: 'react.png' },
  { id: nanoid(), stack: 'frontEnd', title: 'Redux', img: 'redux.png' },
  { id: nanoid(), stack: 'frontEnd', title: 'Three.js', img: 'threejs.png' },
  { id: nanoid(), stack: 'backEnd', title: 'Express', img: 'express.png' },
  { id: nanoid(), stack: 'backEnd', title: 'Node.js', img: 'node.png' },
  { id: nanoid(), stack: 'backEnd', title: 'PostgreSQL', img: 'postgresql.png' },
  { id: nanoid(), stack: 'backEnd', title: 'Sequelize', img: 'sequelize.png' },
  { id: nanoid(), stack: 'tools', title: 'JavaScript', img: 'javascript.png' },
  { id: nanoid(), stack: 'tools', title: 'git and Github', img: 'git.png' },
  { id: nanoid(), stack: 'tools', title: 'Webpack and Babel', img: 'webpack.png' },
  { id: nanoid(), stack: 'tools', title: 'Mocha', img: 'mocha.png' },
  { id: nanoid(), stack: 'tools', title: 'Chai', img: 'chai.png' },
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
    //   url: 'desiree.m.nelson4@gmail.com',
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
    {
      id: nanoid(),
      name: 'user',
      url:
        'https://docs.google.com/document/d/e/2PACX-1vQGbqZ0z-obwi77TcVVRMGitCEmAzUgjWdlAy31UJzeLlDAfVwEZg3ymi-XxjHwFmqUWk1Ts-e9Dg1L/pub',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
