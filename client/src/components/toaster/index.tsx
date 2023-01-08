import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { handleToasterVisibility } from "../../reducers/ToasterSlice";

type Props = {
  toasterText: string;
  severity: any;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedToaster({ toasterText, severity }: Props) {
  const ToasterVisibility = useSelector(
    (state: any) => state.toaster.isToasterOpen
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handleToasterVisibility(false));
  };

  return (
    <>
      <Snackbar
        open={ToasterVisibility}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {toasterText}
        </Alert>
      </Snackbar>
    </>
  );
}
