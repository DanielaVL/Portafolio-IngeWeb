import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, SetStateAction, forwardRef } from "react";
import { FaGithub } from "react-icons/fa";

interface CalculatorDialogProps {
  open: boolean; // Estado para controlar la apertura del diálogo
  setCalculatorDialogOpen: Dispatch<SetStateAction<boolean>>; // Función para actualizar el estado del diálogo
}

// Componente de transición para el diálogo
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

// Componente funcional CalculatorDialog
const CalculatorDialog = ({
  open,
  setCalculatorDialogOpen,
}: CalculatorDialogProps) => {

  // Renderizado del componente CalculatorDialog
  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={(event, reason) => {
        if (reason == "backdropClick") {
          setCalculatorDialogOpen(false);
        }
      }}
    >
      {/* Título del diálogo */}
      <DialogTitle
        className="text-customPurple text-center"
        style={{ fontWeight: "bold", fontSize: "3.75rem", lineHeight: "1" }}
      >
        Calculadora EasyMath
      </DialogTitle>
      <DialogContent>
        <div className="flex justify-between text-lg mx-auto items-center">

          {/* Descripción del proyecto */}
          <span className="">
          Este proyecto es una calculadora web que permite realizar operaciones básicas como suma, resta, 
          multiplicación y división. Ya no hay excusas para aprender matemáticas de una manera muy divertida. 
          ¡Inténtalo y disfruta!
          </span>

          {/* Imagen asociada al proyecto */}
          <img
            src="../../../../images/calculadora.jpg"
            alt="Imagen"
            className="w-80 mx-auto"
          />
        </div>

        {/* Enlace al repositorio del proyecto en GitHub */}
        <a
          href="https://github.comhttps://github.com/Ingenieria-Web-M-J/taller-html-daniela-vasquez-londono"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-2xl text-customPurpleLight flex items-center justify-center">
            <FaGithub></FaGithub> {/* Icono de GitHub */}
            <span className="pl-2">Ir al repositorio</span> {/* Texto del enlace */}
          </span>
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default CalculatorDialog;