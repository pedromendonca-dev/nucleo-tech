import react from '../assets/icons/courses/react.svg';
import typescript from '../assets/icons/courses/typescript.svg';
import javascript from '../assets/icons/courses/javascript.svg';
import html from '../assets/icons/courses/html.svg';
// import css from '../assets/icons/courses/css.svg';
import java from '../assets/icons/courses/java.svg';
import python from '../assets/icons/courses/python.svg';

export const courses = [
  {
    icon: react,
    nome: 'React.js', 
    author: 'Pedro Mendonça',
    describe: "Curso de React.js Avançado",
    rate: 4.5,
    url:"/cursoreact"
  },

  {
    icon: java,
    nome: 'Java',
    author: 'Allan Keven',
    describe: "Curso de Java Intermediario",
    rate: 4.7,
    url:"/cursojava"
  },

  {
    icon: html,
    nome: 'HTML e CSS',
    author: 'Mayra Leticia',
    describe: "Curso de HTML e Css Intermediario",
    rate: 4.5,
    url:"/cursohtmlcss"
  },

  {
    icon: typescript,
    nome: 'Typescript',
    author: 'Caio Gomes',
    describe: "Curso de Typescript Intermediario",
    rate: 4.2,
    url:"/cursotypescript"
  },

  {
    icon: javascript,
    nome: 'Javascript',
    author: 'Caio Gomes',
    describe: "Curso de Javascript Intermediario",
    rate: 4.0,
    url:"/cursojavascript"
  }, 
  
  {
    icon: python,
    nome: 'Python',
    author: 'Lucas Melo',
    describe: "Curso de Python Intermediario",
    rate: 4.0,
    url:"/cursopython"
  }
  
  
  
];

export default courses;