// import Routes from "../routes";

import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Routes from "../routes";
const routes = {
  path: "/",
  element: <div>Hello world!</div>,
};
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<h1> hello</h1>} />
    //   </Routes>
    // </BrowserRouter>
    <Routes />
  );
}

export default App;
