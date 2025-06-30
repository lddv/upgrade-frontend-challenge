import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router";

import SignUp from "./pages/sign-up/SignUp";
import MoreInfo from "./pages/more-info/MoreInfo";
import Confirmation from "./pages/confirmation/Confirmation";
import Error from "./pages/error/Error";
import Success from "./pages/success/Success";
import { ROUTE_PATHS } from "./routes";

const initialState = {
  name: "",
  email: "",
  password: "",
  color: "",
  terms: false
};

const App = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialState);

  // SIGN UP
  const onSignupNextClickHandler = ({name, email, password}) => {
    console.log({name, email, password});
    
    setFormState(prev => ({ ...prev, name, email, password }));
    navigate(ROUTE_PATHS.MORE_INFO)
  }

  // MORE INFO
  const onMoreInfoNextClickHandler = ({ color, terms }) => {
    setFormState(prev => ({ ...prev, color, terms }));
    
    setTimeout(() => console.log(formState), 3000)

    navigate(ROUTE_PATHS.CONFIRMATION)
  }

  const onMoreInfoBackClickHandler = () => {
    navigate(ROUTE_PATHS.SIGNUP);
  }

  // CONFIRMATION
  const onConfirmationBackClickHandler = () => {
    navigate(ROUTE_PATHS.MORE_INFO);
  }

  const onConfirmationSubmitClickHandlerSuccess = () => {
    navigate(ROUTE_PATHS.SUCCESS);
  }
  const onConfirmationSubmitClickHandlerError = () => {
    navigate(ROUTE_PATHS.ERROR);
  }

  const onErrorRestartHandler = () => {
    setFormState(initialState);
    navigate(ROUTE_PATHS.SIGNUP);
  }

  return (
    <Routes>
      <Route
        index
        element={
          <SignUp onClickHandler={onSignupNextClickHandler} userData={formState} />
        }
      />
      
      <Route path={ROUTE_PATHS.MORE_INFO} element={<MoreInfo userData={formState} backHandler={onMoreInfoBackClickHandler} nextHandler={onMoreInfoNextClickHandler} />} />
      
      <Route
        path={ROUTE_PATHS.CONFIRMATION}
        element={
          <Confirmation
            userData={formState}
            backHandler={onConfirmationBackClickHandler}
            submitHandler={{
              onError: onConfirmationSubmitClickHandlerError,
              onSuccess: onConfirmationSubmitClickHandlerSuccess,
            }}
          />}
        />
      <Route path={ROUTE_PATHS.SUCCESS} element={<Success onRestart={onErrorRestartHandler} />} />
      <Route path={ROUTE_PATHS.ERROR} element={<Error onRestart={onErrorRestartHandler} />} />
    </Routes>
  );
};

export default App;
