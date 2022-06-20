import React, {Component} from "react";
// import {useNavigate} from 'react-router-dom'
import Color from "../HOC/Color";
import {connect} from "react-redux";

// import {withRouter} from "react-router";

class Home extends Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         console.log("check ")
    //     }, 3000)
    // }
    handleDeleteUser = (user) => {
        console.log("check handle delete user", user);
        this.props.deleteUserRedux(user)
    };
    handleAddItem = () =>{
        this.props.addUserRedux()
    }

    render() {
        console.log("check props redux: ", this.props.dataRedux);
        let listUsers = this.props.dataRedux;
        return (
            <div>
                <p>Home</p>
                <div>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name}
                                <button
                                    onClick={() => this.handleDeleteUser(item)}
                                >
                                    x
                                </button>
                            </div>
                        );
                    })}
                    <button onClick={() =>this.handleAddItem()}>add</button>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        deleteUserRedux : (userDelete) => dispatch({type: "DELETE_USER", payload: userDelete}),
        addUserRedux: () => dispatch({type: "ADD_USER"}),
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Color(Home));
