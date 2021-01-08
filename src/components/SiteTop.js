import React from 'react';
import { Link } from 'react-router-dom'

const SiteTop = () => {
  return (
    <>
      <div className="site-top">
        <div className="clearfix container">
          <nav id="main_menu_under_header" className="site-menu">
            <div className="clearfix menu-bar">
              <ul id="menu-main-menu" className="menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + '/'}>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/aboutMe"}>
                    <a>About Me</a>
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/beauty"}>
                    <a>Beauty</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}


export default SiteTop;
