import React from "react";
import PropTypes from 'prop-types';


const Navbar = (props) => {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="http://localhost:3000/" className="brand-logo">
          <i className={props.icon}></i> {props.title}
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="http://localhost:3000/">Sass</a>
            </li>
            <li>
              <a href="http://localhost:3000/">Components</a>
            </li>
            <li>
              <a href="http://localhost:3000/">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;
