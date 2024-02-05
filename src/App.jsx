import React from "react";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import SignupComponent from "./components/SignupComponent/SignupComponent";
import { RequestPickupComponent } from "./components/RequestPickupComponent/RequestPickupComponent";

const App = () => {
  return (
    <React.Fragment>
      <LoginComponent />
      {/* <SignupComponent /> */}
      <RequestPickupComponent />
    </React.Fragment>
  );
};

export default App;
