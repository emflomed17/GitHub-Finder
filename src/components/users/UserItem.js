import React from "react";

 const UserItem = ({user: { login, avatar_url, html_url } }) => {
    return (
      <div className="row">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s4">
              <img src={avatar_url} alt="" class="circle responsive-img"/>
            </div>
            <div class="col s8">
              <span class="black-text">
                <a href={html_url}>{login}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}



export default UserItem;
