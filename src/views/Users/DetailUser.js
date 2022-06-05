import React, { Component } from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

class DetailUser extends Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        // if (this.props.params) {
            let id = this.props.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        // }
    }
    handleBackButton = () =>{
        let navigate = this.props.navigation;
        navigate(`/user/`)
    }


    render() {
        let {user} = this.state;
        return(
            <>
                <div>User's name: {user.first_name} - {user.last_name}</div>
                <div>User's email: {user.email}</div>
                <div>
                    <img src={user.avatar} />
                </div>
                <div>
                    <button type="button" onClick={() => this.handleBackButton()}>Back</button>
                </div>
            </>
        )
    }
}

export default (props) => <DetailUser {...props} params={useParams()} navigation={useNavigate()}/>;
