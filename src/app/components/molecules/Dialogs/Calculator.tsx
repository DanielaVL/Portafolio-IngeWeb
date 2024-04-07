import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, SetStateAction, forwardRef } from "react";
import { FaGithub } from "react-icons/fa";

interface CalculatorDialogProps {
  open: boolean;
  setCalculatorDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CalculatorDialog = ({
  open,
  setCalculatorDialogOpen,
}: CalculatorDialogProps) => {
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
      <DialogTitle
        className="text-customPurple text-center"
        style={{ fontWeight: "bold", fontSize: "3.75rem", lineHeight: "1" }}
      >
        Calculator
      </DialogTitle>
      <DialogContent>
        <div className="flex justify-between text-lg mx-auto items-center">
          <span className="">
            Calculadora creada en el curso de ingeniería web.
          </span>
          <img
            src="./images/pruebaImagen.jpg"
            alt="GIF"
            className="w-80 mx-auto"
          />
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-2xl text-customPurpleLight flex items-center justify-center">
            <FaGithub></FaGithub>
            <span className="pl-2">Ir al repositorio</span>
          </span>
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default CalculatorDialog;