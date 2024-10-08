import { Link, Outlet } from "react-router-dom";
import AppNavBar from "./AppNavBar";

export default function Root() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow:'none' }} >
      <AppNavBar />
      <div id="detail" style={{ width: "100%", height: "90%" }}>
        <Outlet />
      </div>
    </div>
  );
}
