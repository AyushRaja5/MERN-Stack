import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaNodeJs
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import {SiPython,SiReact,SiMongodb,SiHtml5,SiCss3,SiJavascript,SiMysql,SiPowerbi,SiTableau} from 'react-icons/si';
import {LuBrainCircuit} from 'react-icons/lu'
import {TbBrandCpp,TbCode,TbReportAnalytics} from 'react-icons/tb'

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-7.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import lpu from './assets/LPU.png';
import cps from './assets/cps.jpg'

import video1 from '../../../homieapp/homie/linkedIn.mp4'
import video2 from '../../../travel/linkedInVideo.mp4'
import video3 from '../../../../LatentView Courses/SharkTank/sharkTank.mp4'


export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav_icon'/>,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav_icon' />,
    path: '/about',
  },
  {
    id: 6,
    name: 'Skills',
    icon: <TbCode className='nav_icon' />,
    path: '/skills',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav_icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav_icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Ayush',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Raja',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Chas, Bokaro',
  },

  {
    id: 7,
    title: 'Mobile : ',
    description: '+91-9304709806',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'ayushraja2022@gmail.com',
  },

  {
    id: 9,
    title: 'Github : ',
    description: 'AyushRaja5',
  },
  {
    id: 10,
    title: 'LinkedIn : ',
    description: 'ayush-raja-415a53214',
  },
  {
    id: 11,
    title: 'Langages : ',
    description: 'English, Hindi, Bhojpuri'
  },
];

export const stats = [
  {
    id: 1,
    no:2,
    title: 'Years of Experience',
  },

  {
    id: 2,
    no: 10,
    title: 'Completed Projects',
  },

  {
    id: 3,
    no: 20,
    title: 'Online Courses',
  },

  {
    id: 4,
    no: 15,
    title: ' Technical Webinars',
  },
];

export const resume = [


  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2023',
    title: 'Bachelors of Engineering Degree <br/> <span> Lovely Professional University, Phagwara </span>',
    desc: 'I gained a strong foundation in engineering principles and honed my problem-solving skills through practical projects, preparing me for a successful career in the field.',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Higher Secondary Education<br/> <span>Science</span> <br/> <span> Crescent Public School, Bokaro </span>',
    desc: 'I absorbed foundational scientific knowledge in higher secondary education while nurturing teamwork and discipline through active participation in volleyball.',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Matriculation <br/> <span> Crescent Public School, Chas </span>',
    desc: 'Matriculation education provided core skills; playing volleyball and hosting events enriched teamwork, leadership, and organizational abilities.',
  },
];

export const skills = [
  {
    id: 1,
    logo:<SiHtml5 font-size='30px'/>,
    title: 'Html',
    percentage: 80,
  },

  {
    id: 2,
    logo: <SiJavascript font-size='30px'/>,
    title: 'Javascript',
    percentage: 60,
  },

  {
    id: 3,
    logo : <SiCss3 font-size='30px'/>,
    title: 'Css',
    percentage: 70,
  },

  {
    id: 4,
    logo : <SiReact font-size='30px'/>,
    title: 'React Js',
    percentage: 60,
  },

  {
    id: 5,
    logo:<FaNodeJs font-size='30px'/>,
    title: 'Node Js',
    percentage: 55,
  },

  {
    id: 6,
    logo:<SiMongodb font-size='30px'/>,
    title: 'Mongo Db',
    percentage: 36,
  },

  {
    id: 7,
    logo: <TbBrandCpp font-size='30px'/>,
    title: 'C++',
    percentage: 65,
  },

  {
    id: 8,
    logo: <TbCode font-size='40px'/>,
    title: 'DSA',
    percentage: 60,
  },
  {
    id: 9,
    logo: <SiPython font-size='30px'/>,
    title: 'Python',
    percentage: 55,
  },

  {
    id:10,
    logo: <LuBrainCircuit font-size='30px'/>,
    title: 'AI & ML',
    percentage: 45,
  },
  {
    id: 11,
    logo: <SiMysql font-size='30px'/>,
    title: 'My SQL',
    percentage: 55,
  },

  {
    id: 12,
    logo: <SiPowerbi font-size='30px'/>,
    title: 'Power Bi',
    percentage: 85,
  },
  {
    id: 13,
    logo: <SiTableau font-size='30px'/>,
    title: 'Tableau',
    percentage: 73,
  },

  {
    id: 14,
    logo: <TbReportAnalytics font-size='30px'/>,
    title: 'Data Analytics',
    percentage: 80,
  },

];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    vd : video1,
    title: 'Homie MERN Web App',
    site : 'https://homieayush.netlify.app/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web App',
      },
      {
        icon: <FiUser />,
        title: 'Date : ',
        desc: '2021',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js, AOS, CSS, SwiperSlide',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'homieayush Web App',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    vd: video3,
    site:'https://github.com/AyushRaja5/Power-BI/blob/main/Shark%20Tank%20India.pbix',
    title: 'Power BI dashBoard',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Shark Tank S1 Analytical Dashboard',
      },
      {
        icon: <FiUser />,
        title: 'Date : ',
        desc: '2023',
      },
      {
        icon: <FaCode />,
        title: 'Software : ',
        desc: 'Power BI, Excel, Dax Lang.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Shark Tank India Dashboard',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    vd: video2,
    site:'https://travelingayush.netlify.app/',
    title: 'MERN Web App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Traveling Desitination App',
      },
      {
        icon: <FiUser />,
        title: 'Year : ',
        desc: '2023',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJs, AOS, CSS, NodeJs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Traveling Web App',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    site: 'https://github.com/AyushRaja5/Power-BI/blob/main/Amazon%20Profile.png',
    title: 'Power BI Dash Board',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Amazon Sales DashBoard',
      },
      {
        icon: <FiUser />,
        title: 'Year : ',
        desc: '2023',
      },
      {
        icon: <FaCode />,
        title: 'Software : ',
        desc: 'Power BI, Excel, Dax Lang.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Amazon Dash Board',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    site:'https://ayushrajaportfolio.netlify.app/',
    title: 'Portfolio Web App',
    details: [
      {
        title: 'Project : ',
        desc: 'MERN Portfolio App',
      },
      {
        title: 'Year : ',
        desc: '2023',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS, CSS AOS',
      },
      {
        title: 'Preview : ',
        desc: 'Ayush Raja Portfolio',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    site:'https://github.com/AyushRaja5/Machine-Learning',
    title: 'Car Number Plate Extracter',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Extract Cars Number in real time',
      },
      {
        icon: <FiUser />,
        title: 'Year : ',
        desc: '2022',
      },
      {
        icon: <FaCode />,
        title: 'Tools : ',
        desc: ' Tesseract, OCR, Python Lang.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'ML Car Number Plate',
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    site:'https://github.com/AyushRaja5/',
    title: 'Bluetooth Car',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Car operated by bluetooth via mobile phone',
      },
      {
        icon: <FiUser />,
        title: 'Year : ',
        desc: '2019',
      },
      {
        icon: <FaCode />,
        title: 'Tools : ',
        desc: 'Bluetooth HC05, L293D, Arduino, C Lang.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Car built by bluetooth & arduino to operate via mobile phone.',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
