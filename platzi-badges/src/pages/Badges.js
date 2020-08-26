import React, { Component, Fragment } from "react";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import api from "../api";
import PageError from "../components/PageError";

class Badges extends Component {
  constructor(props) {
    super(props);
    console.log("1. Constructor()");

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();

      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };

  componentDidMount() {
    console.log("3. ComponentDidMount()");
    this.timeOutId = setTimeout(() => {
      this.fetchData();
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount");
    clearTimeout(this.timeOutId);
  }

  render() {
    if (this.state.error) {
      return <PageError error={this.state.error}/>;
    }

    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                src={confLogo}
                alt="Conf logo"
                className="Badges_conf-logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Badges;
