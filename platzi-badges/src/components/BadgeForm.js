import React, { Fragment } from "react";

class BadgeForm extends React.Component {
  state = {
    jobTitle: 'Designer',
  };

  handleChange = (e) => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value});
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = (e) => {
    console.log("Button was clicked");
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form was submited");
    console.log(this.state);
  }

  render() {
    return (
      <Fragment>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.state.jobTitle}
              onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
              onChange={this.handleChange} />
          </div>

          <button
            className="btn btn-primary"
            onClick={this.handleClick}>Save
          </button>
        </form>
      </Fragment>
    );
  }
}

export default BadgeForm;
