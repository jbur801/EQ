import React from "react";

import LandingPage from "../components/landingPage/LandingPage";
import Lobby from "../components/lobby/Lobby";
import Game from "../components/thing/Game";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import Root from "../components/root/Root";
import CreateLobby from "../components/UserNavigation/CreateLobby";
import JoinLobby from "../components/UserNavigation/JoinLobby";
import KysPage from "../components/kysPage/KysPage";

export default function Routes() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<LandingPage />}>
  //       <Route path="*" element={<h2>xd????</h2>} />
  //       <Route path="lobby:lobbyCode" element={<Lobby />} />
  //       <Route path="game:lobbyCode" element={<Game />} />
  //     </Route>
  //   )
  // );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <KysPage />,
    },
    {
      path: "/1",
      element: <Root />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "lobby/:lobbyId",
          element: <Lobby />,
        },
        {
          path: "game/:lobbyId",
          element: <Game />,
        },
        {
          path: "createlobby",
          element: <CreateLobby />,
        },
        {
          path: "joinlobby",
          element: <JoinLobby />,
        },
        {
          index: true,
          element: <LandingPage />,
          // element: <h2>testing</h2>,
        },
      ],
    },
  ]);

  // const routing = useRoutes(routes);
  //   const router = (
  //     <BrowserRouter>
  //       <Route path="/" element={<LandingPage />} />
  //       <Route path="/lobby:lobbyCode" element={<Lobby />} />
  //       <Route path="/game:lobbyCode" element={<Game />} />
  //     </BrowserRouter>
  //   );
  return <RouterProvider router={router} />;
}
