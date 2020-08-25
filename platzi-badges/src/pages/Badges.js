import React, { Component, Fragment } from "react";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

class Badges extends Component {
  constructor(props) {
    super(props);
    console.log("1. Constructor()");

    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: [],
      },
    };
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results),
        },
        nextPage: this.state.nextPage + 1,
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
      this.fetchCharacters();
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
      return `Error: ${this.state.error.message}`;
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
              {this.state.loading && (
                <div className="loader">
                  <Loader />
                </div>
              )}
              {!this.state.loading && (
                <button
                  className="btn btn-success"
                  onClick={() => this.fetchCharacters()}
                >
                  Load More!
                </button>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Badges;
