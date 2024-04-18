import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { MainStyles } from "../styles/mainStyles";

export default function Root() {
  return (
    <MainStyles>
      <div className="main-wrapper flex-row">
        <Sidebar />
        {/* all the other elements */}
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </MainStyles>
  );
}
