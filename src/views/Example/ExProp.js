import React from "react";

class ExProp extends React.Component {
  render() {
    let name = this.props.name;
    let age = this.props.age;
    return (
      <div>
        child component name: {name} age: {age}
      </div>
    );
  }
}

export default ExProp;