import React from "react";
class ChildComponent extends React.Component {
  //key:value
  state = {
    firstName: "",
    lastName: "",
    showJob: false,
  };
  /* 
    JSX => return block
    fragment
    */
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check data input: ", this.state);
  };
  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };
  handleOnClickDelete = (job) =>{
    console.log("check item: ", job)
    this.props.deleteJob(job)
  }
  //re-render
  render() {
    console.log(">>> check props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    //key:value
    let  showJob  = this.state.showJob;
    let check = showJob === true ? "showJob = true" : "showJob = false";
    let { arrJobs } = this.props;
    console.log("check:", check);
    return (
      <>
        {showJob === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {
                //map
                arrJobs.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary} <><button onClick={() => this.handleOnClickDelete(item)}>x</button></>
                    </div>
                  );
                })
              }
            </div>
            <button onClick={() => this.handleShowHide()}>Hide</button>
          </>
        )}
      </>
    );
  }
}
export default ChildComponent;
