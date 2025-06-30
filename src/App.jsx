import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router";

import SignUp from "./pages/sign-up";
import MoreInfo from "./pages/more-info";
import Confirmation from "./pages/confirmation";
import Error from "./pages/error";
import Success from "./pages/success";

const ROUTE_PATHS = {
  SIGNUP: '/',
  MORE_INFO: '/more-info',
  CONFIRMATION: '/confirmation',
  SUCCESS: '/success',
  ERROR: '/error'
};

const initialState = {
  name: "",
  email: "",
  password: "",
  color: "",
  terms: false
};

const App = () => {
  const navigate = useNavigate();
  const [globalFormState, setGlobalFormState] = useState(initialState);

  // SIGN UP
  const onSignupNextClickHandler = ({name, email, password}) => {
    console.log({name, email, password});
    
    setGlobalFormState(prev => ({...prev, name, email, password}));

    navigate(ROUTE_PATHS.MORE_INFO)
  }

  // MORE INFO
  const onMoreInfoNextClickHandler = ({ color, terms }) => {
    console.log({color , terms});
    
    setGlobalFormState(prev => ({...prev, color, terms}));
    
    setTimeout(() => console.log(globalFormState), 3000)

    navigate(ROUTE_PATHS.CONFIRMATION)
  }

  const onMoreInfoBackClickHandler = () => {
    navigate(ROUTE_PATHS.SIGNUP);
  }

  // CONFIRMATION
  const onConfirmationBackClickHandler = () => {
    navigate(ROUTE_PATHS.MORE_INFO);
  }

  const onConfirmationSubmitClickHandler = () => {
    // navigate(ROUTE_PATHS.MORE_INFO);
    console.log(globalFormState);

    // navigate(ROUTE_PATHS.ERROR);
    navigate(ROUTE_PATHS.SUCCESS);
  }

  const onErrorRestartHandler = () => {
    setGlobalFormState(initialState);
    navigate(ROUTE_PATHS.SIGNUP);
  }

  return (
    <Routes>
      <Route index element={<SignUp onClickHandler={onSignupNextClickHandler} />} />
      <Route path={ROUTE_PATHS.MORE_INFO} element={<MoreInfo backHandler={onMoreInfoBackClickHandler} nextHandler={onMoreInfoNextClickHandler} />} />
      <Route path={ROUTE_PATHS.CONFIRMATION} element={<Confirmation userData={globalFormState} backHandler={onConfirmationBackClickHandler} submitHandler={onConfirmationSubmitClickHandler} />} />
      <Route path="/success" element={<Success onRestart={onErrorRestartHandler} />} />
      <Route path="/error" element={<Error onRestart={onErrorRestartHandler} />} />
    </Routes>
  );
};

export default App;
