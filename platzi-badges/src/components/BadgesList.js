import React, { Component } from "react";
import { Link } from "react-router-dom";

class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div className="container text-center">
          <h1>
            There's no badges yet. Want to add one?
          </h1>
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
      )
    }
    
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="card bg-dark text-white mb-3 shadow p-2 mb-3 h-25">
                <div className="row no-gutters d-flex justify-content-center">
                  <div className="col-md-2 d-flex align-items-center">
                    <img
                      src={badge.avatarUrl}
                      alt="Profile pick"
                      className="card-img rounded-circle"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body py-0">
                      <div className="card-title">
                        <p className="card-title font-weight-bolder">
                          <i className="fa fa-user px-2" aria-hidden="true"></i>
                          {badge.firstName} {badge.lastName}
                          <i
                            className="fa fa-briefcase px-2"
                            aria-hidden="true"
                          ></i>
                          {badge.jobTitle}
                        </p>
                      </div>
                      <p className="card-text">
                        <small className="text-muted">
                          <i class="fa fa-twitter fa-x" aria-hidden="true"></i>
                          <a
                            class="px-2 text-white text-decoration-none"
                            href={`https://twitter.com/${badge.twitter}`}
                          >
                            @{badge.twitter}
                          </a>
                        </small>
                        <small className="text-muted">
                          <i class="fa fa-envelope fa-x" aria-hidden="true"></i>
                          <a
                            class="px-2 text-white text-decoration-none"
                            href={`mailto:${badge.email}`}
                          >
                            {badge.email}
                          </a>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
