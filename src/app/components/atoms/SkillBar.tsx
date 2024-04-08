import React from "react";

interface SkillBarProps {
  label: string; // Etiqueta para la habilidad
  level: number; // Nivel de la habilidad (porcentaje)
  color?: string; // Color de la barra (opcional)
}

// Definición del componente funcional SkillBar
const SkillBar = ({ label, level, color }: SkillBarProps) => {
  const barStyle: React.CSSProperties = {   // Estilo para la barra de habilidad
    width: `${level}%`,
    backgroundColor: color || "#6a0dad",
  };

  // Renderizado del componente SkillBar
  return (
    <div className="mt-1">

      {/* Contenedor de la etiqueta de la habilidad y el nivel */}
      <div className="flex justify-between items-center text-gray-500">
        <div className="text-base">{label}</div>
        <div className="text-base">{level}%</div>
      </div>

      {/* Barra de habilidad */}
      <div className="bg-gray-300 h-2 mt-1 rounded-full">
        <div style={barStyle} className="h-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default SkillBar;