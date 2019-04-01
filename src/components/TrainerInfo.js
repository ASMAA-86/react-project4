import React, { Component } from "react";
//import UpdateProfile from "./UpdateProfile";
class TrainerInfo extends Component {
  render() {
    return (
          <div className="pt-5 mt-5 profileStyle">
            <p>{this.props.user.name}</p>
            <p>{this.props.user.email} </p>
            <p>{this.props.user.phone} </p>
            <p>{this.props.user.address} </p>
            <p>{this.props.user.car} </p>
            <p>{this.props.user.cost} </p>
            <p>{this.props.user.avalable} </p>
            </div>
    );
  }
}

export default TrainerInfo;
