import React, { Component } from "react";
import UpdateProfile from "./UpdateProfile";
import { getUser } from "../services/AuthService";
import DeleteProfile from "./DeleteProfile";
import img from "../img/download.jpeg";

class TrainerInfo extends Component {
  state = { liked: false };
  
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
          <div className="pt-5 mt-5 profileStyle InfoContainer col-sm-3 col-md-6 col-lg-4 ">
          <img className = "navImg" src={img}  alt="Driver"/>
            <p>Name:{ this.props.user.name}</p>
            <p>Email:{this.props.user.email} </p>
            {button}
            <button onClick={() => this.props.setActiveTrainer(this.props.user)}>more</button> 

            </div>





    )};


    


          }

  
    



export default TrainerInfo;

