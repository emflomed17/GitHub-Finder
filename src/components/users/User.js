import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from '../repos/Repos';
import { Link } from "react-router-dom";
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);


    const {
      name,
      avatar_url,
      //location,
      bio,
      //blog,
      //login,
     // html_url,
      followers,
      following,
      //public_repos,
     // public_gists,
      hireable
    } = user;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="waves-effect waves-light btn">
          Back to search
        </Link>
        Hireable: {""}
        {hireable ? (
          <i className="fas fa-check" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src={avatar_url} alt="avatar"/>
                <span className="card-title">{name}</span>
                <a href="http://localhost:3000/" className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="large material-icons">add</i>
                </a>
              </div>
              <div className="card-content">
                <ul>
                    <li>{bio}</li>
                    <li>followers: { followers }</li>
                    <li>following: { following }</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Repos repos={repos}/>
      </Fragment>
    );
}


export default User;
