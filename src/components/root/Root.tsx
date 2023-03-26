import { Link, Outlet } from "react-router-dom";
import AppNavBar from "./AppNavBar";

export default function Root() {
  return (
    <>
      <AppNavBar />
      <div id="detail" style={{ width: "100%", height: "90vh" }}>
        <Outlet />
      </div>
    </>
  );
}
