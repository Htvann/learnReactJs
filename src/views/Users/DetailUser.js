import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

class DetailUser extends Component {
    async componentDidMount() {
        if (this.props.params) {
            let id = this.props.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            console.log(res.data);
        }
    }

    render() {
        return <div>hello from detail user</div>;
    }
}

export default (props) => <DetailUser {...props} params={useParams()} />;
