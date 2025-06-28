import { useState } from "react";
import SignUp from "./pages/sign-up";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
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

    // setTimeout(() => console.log(globalFormState), 3000)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp onClickHandler={onSignupNextClickHandler} />} />
        {/* <Route path="/more-info" element={<MoreInfo />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
