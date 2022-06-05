import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

class ListUser extends React.Component {
    state = {
        listUsers: [],
    };

    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=1");
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : [],
        });
        console.log("check res", res.data.data);
    }
    handleShowDetail = (user) =>{
        console.log("check user: ", user.id)
        let navigation = this.props.navigation;
        navigation(`/user/${user.id}`);
    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">All users</div>
                <div className="list-user-content">
                    {
                        listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id} onClick={()=>this.handleShowDetail(item)}>
                                    {index + 1} - {item.first_name}
                                    {item.last_name}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default (props) => <ListUser {...props} navigation={useNavigate()} />
