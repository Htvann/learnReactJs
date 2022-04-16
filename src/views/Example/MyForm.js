import React from "react";
import ExProp from "./ExProp";
import InfoForm from "./InfoForm";
class MyForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    arrJobs: [
      { id: "abc", title: "developer", salary: "500" },
      { id: "def", title: "tester", salary: "100" },
      { id: "ghi", title: "boss", salary: "5000" },
    ],
  };
  changeFname = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  changeLname = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            onChange={(event) => this.changeFname(event)}
            value={this.state.firstname}
          />
          <br></br>
          <label htmlFor="lname">Last name:</label>
          <input
            type="text"
            onChange={(event) => this.changeLname(event)}
            value={this.state.lastname}
          />
          <br></br>
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>

        <ExProp name={"one"} age={"23"} />
        <InfoForm
          Fname={this.state.firstname}
          Lname={this.state.lastname}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyForm;
