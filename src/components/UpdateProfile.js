import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { getUser } from "../services/AuthService";
class UpdateProfile extends Component {
  state = {
    formData: {
        email: "",
        name: "",
        phone:"" ,
        address: "",
        car: "",
        cost: "",
        avalable: "" 
    },
    err: null
  };

  //axios
  //To handle the update request
  handleUpdateRequest(user){
      //determine apiurl + get the user by id
    let url = `${apiUrl}/user/${getUser().id}`;
    //test
   // console.log('new form data is ', user);
    fetch(url, {
      method: "PATCH",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ user: user })
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
    this.handleUpdateRequest(this.state.formData);
  };

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };


  render() {
    return (
      <div className="pt-5 mt-5">
        <h1>Update Profile</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              className="form-control"
              type="string"
              onChange={this.handleChange}
            />
            <label>Name</label>
            <input
              name="name"
              type="string"
              className="form-control"
              onChange={this.handleChange}
            />
            
            <label>Phone</label>
            <input
              name="phone"
              type="string"
              className="form-control"
              onChange={this.handleChange}
            />
            
            <label>Address</label>
            <input
              name="address"
              type="string"
              className="form-control"
              onChange={this.handleChange}
            />

           
            <label>Car</label>
           
            <div className="form-check displayDiv">
            <label className="displayDiv">
            <input
              type="radio"
              name="react-tips"
              value="Yes"
              checked={true}
              className="form-check-input"
            />
            Yes
            </label>
            
            <label className="displayDiv">
            <input
              type="radio"
              name="react-tips"
              value="No"
              className="form-check-input"
            />
            No
         </label>
         </div>
          
            
            

             <label>Cost</label>
            <input
              name="cost"
              type="double"
              className="form-control"
              onChange={this.handleChange}
            />

            <label>Avalable</label>
            <input
              name="avalable"
              type="string"
              className="form-control"
              onChange={this.handleChange}
            />

          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }


 







}


export default UpdateProfile;
