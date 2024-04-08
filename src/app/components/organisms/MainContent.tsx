import React from "react";
import Button from "../atoms/Button";
import Knowledge from "./Knowledge";
import Education from "./Education";
import PortfolioItem from "./PortfolioItem";

interface MainContentProps {
  name: string; // Nombre del usuario
  role: string; // Rol del usuario
  profileDescription: string; // Descripción del perfil del usuario
  knowledgeDescription: string; // Descripción de los conocimientos del usuario
  knowledge: { icon: React.ElementType; title: string; description: string }[]; // Lista de conocimientos del usuario
  educationDescription: string; // Descripción de la educación del usuario
  educationInfo: {
    institution: string;
    role: string;
    startDate: string;
    endDate: string;
    certificationTitle: string;
    description: string;
  }[]; // Información sobre la educación del usuario
  projectsDescription: string; // Descripción de los proyectos del usuario
  projects: {
    title: string;
    description: string;
    image: string;
    url?: string;
    dialog?: string;
  }[]; // Lista de proyectos del usuario
}

// Componente funcional MainContent
const MainContent = ({
  name,
  role,
  profileDescription,
  knowledgeDescription,
  knowledge,
  educationDescription,
  educationInfo,
  projectsDescription,
  projects,
}: MainContentProps) => {
  
  // Función para dividir un array en grupos de tamaño específico
  const chunkArray = (array: any[], chunkSize: number) => {
    const groups = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      groups.push(array.slice(i, i + chunkSize));
    }
    return groups;
  };

  // División de la lista de conocimientos en grupos de 3
  const KnowledgeGroups = chunkArray(knowledge, 3);

  // Renderizado del componente MainContent
  return (
    // Contenedor principal del contenido principal
    <div className="w-4/5">

      {/* Sección del banner */}
      <div className="banner rounded-lg flex bg-white">
        <div className="banner-text w-3/4 mt-20 ml-11 mr-5">
          <h1 className="text-5xl font-bold">
            <p>Soy {name}</p>
            <p className="text-customPurple mt-2">{role}</p>
          </h1>
          <p className="text-lg mt-6 mr-90 text-gray-600">
            {profileDescription}
          </p>
          <Button label="Contratar"/>
        </div>
        <div className="w-1/4 mt-28 mr-12">
          <img
            src="../../../../images/foto-full.jpg"
            alt="Mi foto"
            className="object-cover w-auto h-auto"
          />
        </div>
      </div>

      {/* Sección de conocimientos */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold">Mis conocimientos</h2>
        <p className="text-lg mt-3 mb-10 ml-40 mr-40 text-gray-600 ">
          {knowledgeDescription}
        </p>
      </div>
      {/* Grupos de conocimientos */}
      {KnowledgeGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="grid grid-cols-3 gap-4 mt-4">
          {group.map((feature, index) => (
            <div key={index} className="col-span-1">
              <Knowledge
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      ))}

      {/* Sección de educación */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold">Educación</h2>
        <p className="text-lg mt-3 mb-10 ml-40 mr-40 text-gray-600 ">
          {educationDescription}
        </p>
      </div>
      <div className="education-container mt-8">
        {educationInfo.map((education, index) => (
          <Education key={index} {...education} />
        ))}
      </div>
      {/* Contenedor de la educación */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold">Portafolio</h2>
        <p className="text-lg mt-3 mb-10 ml-40 mr-40 text-gray-600 ">
          {projectsDescription}
        </p>
      </div>

      {/* Sección de portafolio */}
      <div className="w-[1170px] mt-10 mx-auto">
        <div className="flex overflow-x-auto">
          <div className="flex gap-6">
            {projects.map((project, index) => (
              <PortfolioItem
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
                dialog={project.dialog}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="bg-white text-gray-600 mb-5 mt-12 text-center">
        <p>&copy; Daniela Vásquez Londoño - 2024</p>
      </div>
    </div>
  );
};

export default MainContent;