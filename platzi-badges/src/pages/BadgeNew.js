import React, { Fragment } from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Tsubasa"
                lastName="Kuray"
                twitter="andzapata1"
                jobTitle="Fullstack software engineer"
                avatarURL="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png"
              />
            </div>

            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeNew;
