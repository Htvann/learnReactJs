import React, {Component} from 'react';
// import {useNavigate} from 'react-router-dom'
import Color from "../HOC/Color";

// import {withRouter} from "react-router";

class Home extends Component {
    componentDidMount() {
        setTimeout(() => {

        }, 3000)
    }

    render() {
        console.log("check props: ", this.props)
        return (<div>
            <p>Home</p>
        </div>);
    }
}

export default Color(Home);