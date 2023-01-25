// import Routes from "../routes";

import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
const routes = {
  path: "/",
  element: <div>Hello world!</div>,
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1> hello</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
