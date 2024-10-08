// import Routes from "../routes";
import { Authenticator } from "@aws-amplify/ui-react";
import Routes from "../routes";
import { AuthenticatedUserContext } from "./Auth/AuthenticatedUserContext";
import { User } from "../API";
import { useState } from "react";
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<h1> hello</h1>} />
    //   </Routes>
    // </BrowserRouter>
    <div id='app' style={{width:'100%',height:'100%', overflow:'hidden'}}>

    <Authenticator.Provider>
      <Routes />
    </Authenticator.Provider>
          
    </div>
  );
}

export default App;
