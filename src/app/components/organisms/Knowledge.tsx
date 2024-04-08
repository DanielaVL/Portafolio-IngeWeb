import React from "react";

interface KnowledgeProps {
  icon: React.ElementType; // Icono del conocimiento
  title: string; // Título del conocimiento
  description: string; // Descripción del conocimiento
}

// Componente funcional Knowledge
const Knowledge = ({ icon: Icon, title, description }: KnowledgeProps) => {
  // Renderizado del componente Knowledge
  return (
    // Contenedor principal del conocimiento
    <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:scale-105 transition-transform duration-300 ease-in-out" style={{ width: '375px', height: '410px' }}>
      <Icon className="text-8xl text-customPurple mb-2 mx-auto" /> {/* Icono del conocimiento */}
      <h3 className="text-2xl font-bold mt-5 mb-4">{title}</h3>{" "} {/* Título del conocimiento */}
      <p className="text-lg text-gray-500">{description}</p> {/* Descripción del conocimiento */}
    </div>
  );
};

export default Knowledge;