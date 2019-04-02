import React, { Component } from "react";
import UpdateProfile from "./UpdateProfile";
import { getUser } from "../services/AuthService";
import DeleteProfile from "./DeleteProfile";
class TrainerInfo extends Component {
  render() {
    let button;
    if (getUser() !== null && getUser().id === this.props.user.id) {
      button = (
        <div>
          <button onClick={()=> this.props.changeActivePage('updateProfile')}>Edit</button>
          <DeleteProfile changeActivePage={this.props.changeActivePage} onSignout={this.props.onSignout}/>
        </div>
      )
    } else {
      button = "";
    }

    
    return (
          <div className="pt-5 mt-5 profileStyle InfoContainer col-sm-3 col-md-6 col-lg-4">
            <p>{this.props.user.name}</p>
            <p>{this.props.user.email} </p>
            <p>{this.props.user.phone} </p>
            <p>{this.props.user.address} </p>
            <p>{this.props.user.car} </p>
            <p>{this.props.user.cost} </p>
            <p>{this.props.user.avalable} </p>
            {button}

            </div>
    );
  }
}

export default TrainerInfo;
