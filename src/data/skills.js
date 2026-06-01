import {
  SiHtml5, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress,
  SiPython, SiCplusplus,
  SiGit, SiGithub, SiFigma, SiPostman
} from 'react-icons/si';
import { FaJava, FaHtml5 as FaHtmlIcon, FaCss3Alt } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

export const skillCategories = [
  {
    title: 'Frontend',
    description: 'Building responsive, accessible user interfaces',
    skills: [
      { name: 'HTML', icon: FaHtmlIcon, level: 90, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, level: 85, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, level: 80, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, level: 75, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80, color: '#06B6D4' },
    ],
  },
  {
    title: 'Programming',
    description: 'Problem solving and algorithmic thinking',
    skills: [
      { name: 'Python', icon: SiPython, level: 85, color: '#3776AB' },
      { name: 'C++', icon: SiCplusplus, level: 70, color: '#00599C' },
      { name: 'Java', icon: FaJava, level: 65, color: '#ED8B00' },
    ],
  },
  {
    title: 'Backend',
    description: 'Server-side development and APIs',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 70, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, level: 65, color: '#333333' },
      { name: 'REST APIs', icon: TbApi, level: 70, color: '#6366F1' },
    ],
  },
  {
    title: 'Tools',
    description: 'Development workflow and collaboration',
    skills: [
      { name: 'Git', icon: SiGit, level: 80, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, level: 85, color: '#181717' },
      { name: 'VS Code', icon: VscVscode, level: 90, color: '#007ACC' },
      { name: 'Figma', icon: SiFigma, level: 55, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, level: 65, color: '#FF6C37' },
    ],
  },
];
