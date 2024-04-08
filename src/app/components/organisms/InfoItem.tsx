import React from "react";

interface InfoItemProps {
  index?: string; // Índice opcional para identificar el tipo de información
  label: string; // Etiqueta del elemento de información
  value: string; // Valor del elemento de información
  color?: string; // Color opcional para personalizar el estilo
}

// Componente funcional InfoItem
const InfoItem = ({ index, label, value }: InfoItemProps) => {
  // Renderizado del componente InfoItem
  return (
    // Contenedor de la etiqueta y el valor
    <div className="flex justify-between items-center">

      {/* Etiqueta del elemento */}
      <span className={`font-bold ${index === "edu" ? "text-lg" : ""}`}>{label}</span>

      {/* Valor del elemento */}
      <span
        className={
          index === "edu"
            ? "rounded text-sm bg-customPurpleLight text-white px-2 py-1 w-2/3 text-center"
            : "text-black"
        }
      >
        {value}
      </span>
    </div>
  );
};

export default InfoItem;