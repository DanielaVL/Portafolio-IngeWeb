'use client'
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import CalculatorDialog from "../molecules/Dialogs/CalculatorDialog";

interface PortfolioItemProps {
  title: string; // Título del proyecto
  description: string; // Descripción del proyecto
  image: string; // URL de la imagen del proyecto
  url?: string; // URL opcional para redireccionar al proyecto
  dialog?: string; // Tipo de diálogo asociado al proyecto (opcional)
}

// Componente funcional PortfolioItem
const PortfolioItem = ({
  title,
  description,
  image,
  url,
  dialog,
}: PortfolioItemProps) => {
  // Estado para controlar la apertura del diálogo de la calculadora
  const [CalculatorDialogOpen, setCalculatorDialogOpen] = useState<boolean>(false);

  // Función para manejar la apertura del diálogo de la calculadora
  const handleCalculatorDialog = () => {
    setCalculatorDialogOpen(true);
  };

  // Renderizado del componente PortfolioItem
  return (
    // Contenedor del elemento del portafolio
    <div className="bg-white rounded-lg w-96 shadow-lg">

      {/* Imagen del proyecto */}
      <div className="mb-4">
        <img
          src={image}
          alt="Imagen del proyecto"
          className="w-full h-auto rounded-t-xl"
        />
      </div>

      {/* Contenido del proyecto */}
      <div className="ml-8 mr-8 mt-8">
        <h3 className="from-neutral-50 text-2xl mb-6">{title}</h3>
        <p className="text-gray-600">{description}</p>
        
        {/* Enlace para saber más */}
        {(dialog === "CalculatorDialog" && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-customPurpleLight text-lg items-center justify-left mb-6"
            onClickCapture={handleCalculatorDialog}
          >
            {/* Renderizado condicional del diálogo de la calculadora */}
            {CalculatorDialogOpen && (
              <CalculatorDialog
                open={CalculatorDialogOpen}
                setCalculatorDialogOpen={setCalculatorDialogOpen}
              />
            )}
            Saber más <FaArrowRight className="ml-3" />
          </a>
        )) || (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-customPurpleLight text-lg items-center justify-left mb-6"
          >
            Saber más <FaArrowRight className="ml-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;