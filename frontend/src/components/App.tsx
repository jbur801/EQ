// import Routes from "../routes";
import { Authenticator } from "@aws-amplify/ui-react";
import Routes from "../routes";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<h1> hello</h1>} />
    //   </Routes>
    // </BrowserRouter>
    <Authenticator.Provider>
      <Routes />
    </Authenticator.Provider>
  );
}

export default App;
