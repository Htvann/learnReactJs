import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "van",
    channel: "vean",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeChannel = (eventC) => {
    this.setState({
      channel: eventC.target.value,
    });
  };
  handleClickButton = () => {
    alert("ho thanh van");
  };
  render() {
    return (
      <>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          xin chao {this.state["name"]}
        </div>
        <div className="second">
          <input
            value={this.state.channel}
            type="text"
            onChange={(eventC) => this.handleOnChangeChannel(eventC)}
          ></input>
          day la channel cua minh: {this.state.channel}
        </div>
        <div className="third">
          <button onClick={() => this.handleClickButton()}>Click me</button>
        </div>
      </>
    );
  }
}

export default MyComponent;

// JSX => return block
// fragment
