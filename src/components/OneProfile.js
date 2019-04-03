import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";
class OneProfile extends Component {



    render() {
        return (
            <div>
            <p>Phone:{this.props.user.phone} </p>
            <p>Address:{this.props.user.address} </p>
            <p>Car:{`${this.props.user.car}`} </p>
            <p>Cost:{this.props.user.cost} </p>
            <p>Avalable:{this.props.user.avalable} </p>
            <button onClick={() => this.props.setActiveTrainer(null)}>back</button> 

            </div>
        )}
}
    export default OneProfile;