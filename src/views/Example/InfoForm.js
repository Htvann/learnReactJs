import React from "react";

class InfoForm extends React.Component {
  render() {
    //   let Fname = this.props.Fname;
    //   let Lname = this.props.Lname;
    let { Fname, Lname, arrJobs } = this.props;
    console.log(">>> check props: ", this.props);
    return (
      <>
        <div className="Jobs-list">
          {arrJobs.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} - { item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default InfoForm;
