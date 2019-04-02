import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";
class CreateProfile extends Component {

    state = {
        users: []
    };

    handlePostRequest(user){
        //determine apiurl + get the user by id
      let url = `${apiUrl}/api/user`;;
      //test
     // console.log('new form data is ', user);
      fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ user })
      })
        .then(res => res.json())
        .then(data => {
          //console.log('response is ', data)
          this.props.changeActivePage("Profile");
        })
        .catch(e => console.log(e));
    };
    
    handleCreateRequest(user){
        //determine apiurl + get the user by id
      let url = `${apiUrl}/api/user`;;
      //test
     // console.log('new form data is ', user);
      fetch(url, {
        method: "CREATE",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ user:user })
      })
        .then(res => res.json())
        .then(data => {
          //console.log('response is ', data)
          this.props.changeActivePage("home");
        })
        .catch(e => console.log(e));
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.handleCreateRequest(this.state.formData);
      };
    
      handleChange = ({ currentTarget }) => {
        const formData = { ...this.state.formData };
        formData[currentTarget.name] = currentTarget.value;
        this.setState({ formData });
      };
    
      render() {
        return (
         
    
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            
          
        );
      }
    






}

export default CreateProfile;