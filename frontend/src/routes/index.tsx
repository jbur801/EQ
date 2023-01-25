import React from "react";

import LandingPage from "../components/landingPage/LandingPage";
import Lobby from "../components/lobby/Lobby";
import Game from "../components/thing/Game";
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";

export default function Routes() {
  //   const router = createBrowserRouter(
  //     createRoutesFromElements(
  //       <Route path="/" element={<LandingPage />}>
  //         <Route path="lobby:lobbyCode" element={<Lobby />} />
  //         <Route path="game:lobbyCode" element={<Game />} />
  //       </Route>
  //     )
  //   );
  console.log("here i am");
  //   const router = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <div>Hello world!</div>,
  //       //   element: <LandingPage />,
  //       //   loader: rootLoader,
  //       //   children: [
  //       //     {
  //       //       path: "lobby:lobbyCode",
  //       //       element: <Lobby />,
  //       //       //   loader: teamLoader,
  //       //     },
  //       //   ],
  //     },
  //   ]);
  const routes = {
    path: "/",
    element: <div>Hello world!</div>,
  };
  const routing = useRoutes([routes]);
  //   const router = (
  //     <BrowserRouter>
  //       <Route path="/" element={<LandingPage />} />
  //       <Route path="/lobby:lobbyCode" element={<Lobby />} />
  //       <Route path="/game:lobbyCode" element={<Game />} />
  //     </BrowserRouter>
  //   );
  return routing;
}
