import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
          <i className={props.icon}></i> {props.title}
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

Navbar.defaultProps = {
  title: 'Github Finder Application',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;
