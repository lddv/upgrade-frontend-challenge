import { useState } from "react";
import SignUp from "./pages/sign-up";
import MoreInfo from "./pages/more-info";
import { Route, Routes, useNavigate } from "react-router";

const ROUTE_PATHS = {
  SIGNUP: '/',
  MORE_INFO: '/more-info'
}

const App = () => {
  const navigate = useNavigate();
  const [globalFormState, setGlobalFormState] = useState({
    "name": "",
    "email": "",
    "password": "",
    "color": "",
    "terms": false
  });

  const onSignupNextClickHandler = ({name, email, password}) => {
    console.log({name, email, password});
    
    setGlobalFormState(prev => ({...prev, name, email, password}));

    navigate(ROUTE_PATHS.MORE_INFO)
  }
  
  const onMoreInfoNextClickHandler = ({ color, terms }) => {
    console.log({color , terms});
    
    setGlobalFormState(prev => ({...prev, color, terms}));
    
    setTimeout(() => console.log(globalFormState), 3000)
  }

  const onMoreInfoBackClickHandler = () => {
    navigate(ROUTE_PATHS.SIGNUP);
  }

  return (
    <Routes>
      <Route index element={<SignUp onClickHandler={onSignupNextClickHandler} />} />
      <Route path={ROUTE_PATHS.MORE_INFO} element={<MoreInfo backHandler={onMoreInfoBackClickHandler} nextHandler={onMoreInfoNextClickHandler} />} />
      {/* <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/error" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default App;
