import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: '',
        salary: ''
    }
  handleChangeTitleJob = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };
  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) =>{
      event.preventDefault()
      console.log('>>>> check stage:', this.state)
  }

  render() {
    //   console.log('>>>check: ', this.state)
    return (
      <form>
        <label htmlFor="fname">Job:</label>
        <input
          type="text"
          value={this.state.titleJob}
          onChange={(event) => this.handleChangeTitleJob(event)}
        />
        <br />
        <label htmlFor="lname">Salary:</label>
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br />
        <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
        <br />
      </form>
    );
  }
}
export default AddComponent;
