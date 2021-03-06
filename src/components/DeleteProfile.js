import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";

class DeleteProfile extends Component {
//No need for state cuz it is only delete
    handleDeleteRequest = (user) => {
        //determine apiurl + get the user by id
    let url = `${apiUrl}/api/user/${getUser().id}`;
    //test
    // console.log('new form data is ', user);
    fetch(url, {
        //change the method to delete
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: {
        "Content-type": "application/json"
        },
    })
        .then(res => res.json())
        .then(data => {
            //console.log('response is ', data)
            this.props.onSignout()
            this.props.changeActivePage("sign-up");
 
        })
        .catch(e => console.log(e));
    };

  render() {
    return (
     
          //onClick event call function handleDeleteReques
          <button onClick={this.handleDeleteRequest} className="btn btn-primary">
            Delete
          </button>
        
      
    );
  }

}

export default DeleteProfile;