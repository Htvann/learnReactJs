import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

class DetailUser extends Component {
    async componentDidMount() {
        let id = this.props.params;
        console.log(id);
        let res = await axios.get(`https://reqres.in/api/users/${id}`);
        console.log(id);
        console.log("check res: ", res.data.data);
    }

    render() {
        return <div>hello from detail user</div>;
    }
}

export default (props) => <DetailUser {...props} params={useParams()} />;
