import { Fragment, useState } from "react";

declare global {
  var showAlert: any;
}

const GlobalErrorDialogBox = () => {
  const [errorState, setErrorState] = useState(false);
  const [errors, setErrors] = useState();

  const showAlert = (argErrors: any) => {
    setErrorState(true);
    setErrors(argErrors);
  };

  global.showAlert = showAlert;

  return (
    <Fragment>
      {/* <ErrorDialog
        errors={errors}
        errorState={errorState}
        setErrorState={setErrorState}
      /> */}
      ;
    </Fragment>
  );
};

export default GlobalErrorDialogBox;
