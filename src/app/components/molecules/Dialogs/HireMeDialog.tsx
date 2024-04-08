import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, SetStateAction, forwardRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface HireMeDialogProps {
  open: boolean; // Estado para controlar la apertura del diálogo
  setHireMeDialogOpen: Dispatch<SetStateAction<boolean>>; // Función para actualizar el estado del diálogo
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

// Componente funcional HireMeDialog
const HireMeDialog = ({ open, setHireMeDialogOpen }: HireMeDialogProps) => {

  // Renderizado del componente HireMeDialog
  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={(event, reason) => {
        if (reason == "backdropClick") {
          setHireMeDialogOpen(false);
        }
      }}
    >
      {/* Título del diálogo */}
      <DialogTitle
        className="text-center"
        style={{ fontWeight: "bold", fontSize: "3rem", lineHeight: "1" }}
      >
        ¡Wow! Gracias por tu interés.
      </DialogTitle>

      {/* Contenido del diálogo */}
      <DialogContent>
        <div className="text-2xl text-customPurpleLight py-5">

          {/* Enlace para contactar a través de WhatsApp */}
          <a
            href="https://wa.me/573206100477"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center">
              <FaWhatsapp></FaWhatsapp> {/* Icono de WhatsApp */}
              <span className="pl-2">¡Hablemos!</span> {/* Texto del enlace */}
            </span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HireMeDialog;