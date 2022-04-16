import React from "react";
import MyComponet from "./MyComponet";

class MyForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
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
    console.log(this.state )
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
        <MyComponet name ={'one'}/>
        <MyComponet name ={'two'}/>
        <MyComponet name ={'three'}/>
      </>
    );
  }
}

export default MyForm;
