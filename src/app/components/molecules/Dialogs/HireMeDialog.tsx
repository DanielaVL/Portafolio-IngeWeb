import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, SetStateAction, forwardRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface HireMeDialogProps {
  open: boolean;
  setHireMeDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const HireMeDialog = ({ open, setHireMeDialogOpen }: HireMeDialogProps) => {
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
      <DialogTitle
        className="text-center"
        style={{ fontWeight: "bold", fontSize: "3rem", lineHeight: "1" }}
      >
        ¡Wow! Gracias por tu interés.
      </DialogTitle>
      <DialogContent>
        <div className="text-2xl text-customPurpleLight py-5">
          <a
            href="https://wa.me/573206100477"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center">
              <FaWhatsapp></FaWhatsapp>
              <span className="pl-2">¡Hablemos!</span>
            </span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HireMeDialog;