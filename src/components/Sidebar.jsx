import React from "react";
import { Link } from "react-router-dom";
import { SidebarStyles } from "../styles/sidebarStyles";
const Sidebar = () => {
  return (
    <SidebarStyles>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`about`}>About</Link>
            </li>
            <li>
              <Link to={`contact`}>Contact</Link>
            </li>
           
            <li>
              <Link to={`posts`}>Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </SidebarStyles>
  );
};

export default Sidebar;
