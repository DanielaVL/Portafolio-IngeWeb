import React from "react";
import { MdStarOutline } from "react-icons/md";

interface SkillBadgeProps {
  label: string; // Etiqueta para la insignia de habilidad
}

// Definición del componente funcional SkillBadge
const SkillBadge = ({ label }: SkillBadgeProps) => {

  // Renderizado del componente SkillBadge
  return (
    <div className="flex items-center">

      {/* Icono de estrella */}
      <MdStarOutline size={24} color="#6a0dad" />

      {/* Texto de la etiqueta de la habilidad */}
      <span className="text-base text-black ml-2 mt-2">{label}</span>
    </div>
  );
};

export default SkillBadge;