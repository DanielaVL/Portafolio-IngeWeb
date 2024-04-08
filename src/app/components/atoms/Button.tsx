'use client'
import React from "react";
import HireMeDialog from "../molecules/Dialogs/HireMeDialog";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

// Definición de la interfaz para las propiedades del componente Button
interface ButtonProps {
  label: string;
}

// Definición del componente funcional Button
const Button = ({ label }: ButtonProps) => {
  const [HireMeDialogOpen, setHireMeDialogOpen] = useState<boolean>(false); // Estado local para controlar la apertura del diálogo

  const handleHireMeClick = () => {   // Función para manejar el click en el botón y abrir el diálogo
    setHireMeDialogOpen(true);
  };

  // Renderizado del componente Button
  return (
    <button
      className="relative bg-customPurple mt-6 hover:bg-customPurpleLight text-white font-thin h-14 w-56 rounded text-2xl focus:outline-none focus:shadow-outline hover:scale-105 transition-transform duration-300 ease-in-out"
      onClickCapture={handleHireMeClick}
      style={{ backgroundColor: '#6a0dad' }}
    >
      <HireMeDialog
        open={HireMeDialogOpen}
        setHireMeDialogOpen={setHireMeDialogOpen}
      />
      <div className="flex items-center justify-center">
        {label}
        <FaArrowRight className="ml-6" />
      </div>
    </button>
  );
};

export default Button;