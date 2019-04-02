import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";
import TrainerInfo from "./TrainerInfo";
import OneProfile from "./OneProfile";
class Home extends Component {
    state = {
        users: [],
        activeTrainer: null 
    };


    setActiveTrainer = activeTrainer => {
        this.setState({ activeTrainer });
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
            <TrainerInfo user={user} onSignout={this.props.onSignout} setActiveTrainer={this.setActiveTrainer}/>
        ))
      return (
        <div>
            { this.state.activeTrainer ?
                 <OneProfile user={this.state.activeTrainer} setActiveTrainer={this.setActiveTrainer} /> :  
                 users}
        </div>
      )
    }
}
      
export default Home;






    






   
     