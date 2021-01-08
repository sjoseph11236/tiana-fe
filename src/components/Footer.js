import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="clearfix container">
          <div id="row-footer">
            <div className="col-sm-8 site-info">
              © 2020    
              <a href="#!"> Tiana Lino</a>
              <div className="footer-menu-bar">
                <ul id="menu-right" className="menu">
                  <li id="menu-item-2324" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-2324">
                    <Link to="/">
                      <a>Home</a> 
                    </Link>
                  </li>
                  <li id="menu-item-5844" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5844">
                    <Link to="/aboutMe">
                      <a>About Me</a>
                    </Link> 
                  </li>
                  <li id="menu-item-5844" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5844">
                    <Link to="/beauty">
                      <a>Beauty</a>
                    </Link> 
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 site-credit">
              <a href="https://www.linkedin.com/in/sayeed-joseph-3b95b9179/" target="_blank" rel="noopener">
                Site built by 
                <span> Sayeed Joseph</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
