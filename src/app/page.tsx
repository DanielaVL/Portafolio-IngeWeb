// Componente principal de la aplicación, que representa la página principal del sitio web

import React from "react";
import Head from "next/head";
import SidebarLeft from "./components/molecules/Sidebar/SidebarLeft";
import MainContent from "./components/organisms/MainContent";
import SidebarRight from "./components/molecules/Sidebar/SidebarRight";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaKey,
} from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { FaGlobe, FaMobileAlt, FaBrain, FaCodeBranch, FaTools } from "react-icons/fa";

const Home = () => {
  const personalInfo = {
    name: "Daniela Vásquez Londoño",
    role: "Estudiante",
    age: 25,
    residence: "Medellín, Colombia",
    email: "danivl2393@gmail.com",
    nationality: "Colombiana",
    profileDescription:
      "Estudiante de Ingeniería de Sistemas en la Universidad de Antioquia. Apasionada por la tecnología y el desarrollo de software. Me considero una persona proactiva, responsable y comprometida con mi formación académica y profesional. Me gusta aprender cosas nuevas y enfrentar desafíos que me permitan crecer y mejorar mis habilidades. Siempre tengo la mejor disposición para la realización de mis labores, así como para resolver problemas y lograr las metas propuestas por la organización y mi equipo de trabajo.",
    languages: [
      { label: "Español", level: 100 },
      { label: "Inglés", level: 40 },
    ],
    programming: [
      { label: "HTML", level: 100 },
      { label: "JavaScript", level: 80 },
      { label: "CSS", level: 75 },
      { label: "Python", level: 65 },
      { label: "Java", level: 54 },
      { label: "Kotlin", level: 42 },
    ],
    skills: [
      { label: "Páginas web" },
      { label: "Aplicaciones móviles" },
      { label: "Pruebas unitarias" },
    ],
    links: [
      { url: "https://github.com/DanielaVL", 
        icon: FaGithub,
      },
      {
        url: "https://www.linkedin.com/in/danielavásquezl/",
        icon: FaLinkedin,
      },
      {
        url: "https://www.instagram.com/danivl_23/",
        icon: FaInstagram,
      },
      {
        url: "https://www.facebook.com/putoelqueloleajajaequisde/",
        icon: FaFacebook,
      },
    ],
    knowledgeDescription:
      "Mis conocimientos se resumen en los principios fundamentales de metodologías ágiles, especialmente en Scrum, junto con un dominio sólido de Git y Github. Además, tengo experiencia en el desarrollo de páginas web y aplicaciones móviles, así como un entendimiento básico de los conceptos de machine learning. También estoy familiarizada con prácticas como el despliegue continuo (CI/CD) y la realización de pruebas unitarias en SonarCloud para garantizar la calidad del código.",
    knowledge: [
      {
        icon: DiScrum,
        title: "Metodologías ágiles - Scrum",
        description: "Experiencia en la implementación de metodologías ágiles, con énfasis en Scrum, para la gestión eficiente de proyectos y equipos de desarrollo.",
      },
      {
        icon: FaGithub,
        title: "Git y GitHub",
        description: "Control de versiones y colaboración en proyectos.",
      },
      {
        icon: FaGlobe,
        title: "Desarrollo de páginas web",
        description: "Experiencia en la creación y desarrollo de sitios web con enfoque en la usabilidad y la experiencia del usuario."
      },
      {
        icon: FaMobileAlt,
        title: "Desarrollo de aplicaciones móviles para Android",
        description: "Experiencia en el desarrollo de aplicaciones móviles para la plataforma Android."
      },
      {
        icon: FaBrain,
        title: "Machine Learning",
        description: "Conocimientos fundamentales en machine learning, incluyendo algoritmos de aprendizaje supervisado y no supervisado, técnicas de preprocesamiento de datos y evaluación de modelos para la generación de insights y la toma de decisiones inteligentes."
      },
      {
        icon: FaCodeBranch,
        title: "Despliegue continuo (CI/CD)",
        description: "Experiencia en la implementación de pipelines de integración continua y despliegue continuo (CI/CD) utilizando herramientas como GitHub Actions, para automatizar el proceso de entrega de software y garantizar la calidad y estabilidad del producto final."
      },
      {
        icon: FaTools,
        title: "Pruebas unitarias con SonarCloud",
        description: "Pruebas unitarias exhaustivas integradas en el flujo de trabajo de desarrollo utilizando SonarCloud, una plataforma de análisis estático de código que identifica y corrige problemas de calidad del código."
      },
    ],
    educationDescription:
      "Mi educación tecnológica abarca todos los semestres que he cursado en mi pregrado, durante los cuales he obtenido certificaciones en redes y he participado en diversos cursos sobre lenguajes de programación y otras herramientas fundamentales.",
    educationInfo: [
      {
        institution: "Universidad de Antioquia",
        role: "Estudiante",
        startDate: "Ago 2018",
        endDate: "Actualidad",
        certificationTitle: "Ingeniería de Sistemas",
        description:
          "El título de Ingeniera de Sistemas en la Universidad de Antioquia certifica la formación en diseño, desarrollo y gestión de sistemas de información y tecnologías de la información.",
      },
      {
        institution: "SENA -CEFIT",
        role: "Asistente Administrativa",
        startDate: "Ene 2014",
        endDate: "Dic 2015",
        certificationTitle: "Técnica en Asistencia Administrativa",
        description:
          "Esta técnica cubre una amplia gama de temas, incluyendo gestión de documentos, atención al cliente, organización de eventos y manejo de agendas. Además, se adquiere experiencia práctica en la elaboración de nóminas y el manejo de procesos relacionados con la gestión de recursos humanos.",
      },
      {
        institution: "Institución Educativa La Paz",
        role: "Estudiante",
        startDate: "Ene 2004",
        endDate: "Dic 2015",
        certificationTitle: "Bachiller académico",
        description:
          "El título de Bachiller académico certifica la finalización de la educación secundaria y la competencia en diversas materias académicas, preparando a los estudiantes para la educación superior o el empleo.",
      },
    ],
    projectsDescription:
      "Mi portafolio cuenta con todos los proyectos que he realizado a lo largo de mi vida universitaria, en los cuales he adquirido conocimientos en diferentes lenguajes de programación y metodologías de desarrollo.",
    projects: [
      {
        image: "../../images/calculadora.jpg",
        title: "Calculadora EasyMath",
        description:
          "Esta calculadora web permite realizar operaciones básicas.",
        dialog: "CalculatorDialog",
      },
      {
        image: "../../images/hv.jpg",
        title: "Hoja de vida",
        description:
          "Esta hoja de vida ha sido desarrollada con tecnologías como React, Next.js y Tailwind CSS como parte del proyecto del curso de Ingeniería Web. Representa mi primera experiencia trabajando con estas tecnologías.",
        url: "https://portafolio-daniela-vasquez.vercel.app/",
      },
      {
        image: "../../images/empresarial.jpg",
        title: "Uber - CodeF@ctory2023",
        description:
          "Aplicación empresarial para la gestión de socios en Uber desarrollada en Java.",
        url: "https://github.com/DanielaVL/uber-lab",
      },
      {
        image: "../../images/otros.jpg",
        title: "Y más...",
        description:
          "Se crea esta sección para fines de generar un scroll horizontal. Pero, por motivos de organización de los proyectos, no se desglosan más de estos y se te invita a indagarlos en GitHub.",
        url: "https://github.com/DanielaVL",
      },
    ],
  };

  return (
    <div className="bg-gray-200 flex">
      <SidebarLeft {...personalInfo} />
      <div className="w-11 ml-[25%]"></div>
      <MainContent {...personalInfo} />
      <div className="w-11 mr-[8.333333%]"></div>
      <SidebarRight {...personalInfo} />
      <Head>
        <title>Hoja de vida</title>
      </Head>
    </div>
  );
};

export default Home;