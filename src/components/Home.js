import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";
import TrainerInfo from "./TrainerInfo";


class Home extends Component {
    state = {
        users: []
    };
    
    componentDidMount(){
        let url = `${apiUrl}/api/users`;
        fetch(url, {
            mode: "cors",
            credentials: "include",
            method: "GET",
            headers: {
            "Content-type": "application/json"
            },
        })
        .then(res => res.json())
        .then(data => {
            if (data.status > 299) 
                this.setState({ err: data.message});
            else {
                console.log(data.users)
                this.setState({users: data.users})
            }
        })
        .catch(e => console.log(e));
    }
    render(){
        const users = this.state.users.map(user => (
            <TrainerInfo user={user} />
        ))
      return (
        <div>
            {users}
        </div>
      )
    }
}
      
export default Home;






    






   
     