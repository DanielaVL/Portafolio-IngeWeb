import React from "react";
import InfoItem from "./InfoItem";

interface EducationProps {
  institution: string; // Nombre de la institución educativa
  role: string; // Rol o título obtenido
  startDate: string; // Fecha de inicio
  endDate: string; // Fecha de finalización
  certificationTitle: string; // Título de la certificación obtenida
  description: string; // Descripción de la educación
}

// Componente funcional Education
const Education = ({
  institution,
  role,
  startDate,
  endDate,
  certificationTitle,
  description,
}: EducationProps) => {
  let date = startDate + " - " + endDate;   // Construcción del rango de fechas

  // Renderizado del componente Education
  return (
    // Contenedor principal de la educación
    <div className="flex mb-8 bg-white rounded-lg shadow-lg py-5 hover:scale-105 transition-transform duration-300 ease-in-out">
      
      {/* Columna de la izquierda: información de la institución y fechas */}
      <div className="p-4 mr-6 w-1/2">
        <h3 className="from-neutral-50 text-2xl ml-3">{institution}</h3> {/* Nombre de la institución */}
        {/* Detalles de la educación */}
        <div className="p-3 mr-8"> 
          {/* Componente InfoItem para mostrar el rol y las fechas */}
          <InfoItem index="edu" label={role} value={date.toString()} />
        </div>
      </div>

      {/* Columna de la derecha: título de certificación y descripción */}
      <div className="w-full mt-2">
        <h4 className="from-neutral-50 text-2xl mb-6">{certificationTitle}</h4> {/* Título de certificación */}
        <p className="text-gray-600 text-lg">{description}</p> {/* Descripción de la educación */}
      </div>
    </div>
  );
};

export default Education;