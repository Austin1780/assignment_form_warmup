import React, { Component } from "react";
import ControlledForm from "../components/ControlledForm";
import { validateForm } from "../helpers";
import serialize from "form-serialize";
import SerializedForm from "../components/SerializedForm";

class ControlledFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
      errors: {},
      status: true,
      exampleEmail: "",
      examplePassword: "",
      exampleURL: ""
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    switch (e.target.name) {
      case "exampleEmail":
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.exampleEmail)) {
          this.setState({ status: false });
        } else {
          this.setState({ status: true });
        }
        break;
      case "examplePassword":
        if (
          this.state.examplePassword.length < 12 &&
          this.state.examplePassword.length > 0
        ) {
          this.setState({ status: false });
        } else {
          this.setState({ status: true });
        }
        break;
      case "exampleURL":
        let res = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        if (!res.test(this.state.exampleURL)) {
          this.setState({ status: false });
        } else {
          this.setState({ status: true });
        }
        break;
      default:
        break;
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = serialize(form, { hash: true });
    console.log(data);
    const errors = validateForm(data);

    if (errors) {
      this.setState({ errors });
    } else {
      console.log(data);
      this.formSuccess(form);
    }
  };

  formSuccess = () => {
    this.setState(
      {
        success: true,
        errors: {},
        exampleEmail: "",
        examplePassword: "",
        exampleURL: ""
      },
      () => console.log("Success!")
    );
  };

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        {...this.state}
      />
    );
  }
}

export default ControlledFormContainer;
