import React, { Component } from "react";

class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.results.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="card bg-dark text-white mb-3 shadow p-2 mb-3 h-25">
                <div className="row no-gutters d-flex justify-content-center">
                  <div className="col-md-2 d-flex align-items-center">
                    <img
                      src={badge.image}
                      alt="Profile pick"
                      className="card-img rounded-circle"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body py-0">
                      <div className="card-title">
                        <p className="card-title font-weight-bolder">
                          <i className="fa fa-user px-2" aria-hidden="true"></i>
                          {badge.name}
                          <i
                            className="fa fa-briefcase px-2"
                            aria-hidden="true"
                          ></i>
                          {badge.species}
                        </p>
                      </div>
                      <p className="card-text">
                        <small className="text-muted">
                          <i
                            className="fa fa-twitter fa-x px-2"
                            aria-hidden="true"
                          ></i>
                          {badge.status}
                        </small>
                        <small className="text-muted">
                          <i
                            className="fa fa-envelope fa-x px-2"
                            aria-hidden="true"
                          ></i>
                          {badge.origin.name}
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
