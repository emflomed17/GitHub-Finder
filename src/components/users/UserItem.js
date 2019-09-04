import React from "react";
import { Link } from 'react-router-dom';

 const UserItem = ({user: { login, avatar_url, html_url } }) => {
    return (
      <div className="row">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4">
              <img src={avatar_url} alt={login} className="circle responsive-img"/>
            </div>
            <div className="col s8">
              <span className="black-text">
                <Link to={`/user/${login}`}>{login}</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}



export default UserItem;
