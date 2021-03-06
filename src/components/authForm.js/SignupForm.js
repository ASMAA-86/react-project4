import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setUser } from "../../services/AuthService";

class SignupForm extends Component {
  state = {
    formData: {
      email: null,
      password: null,
      password_confirmation: null,
      name: null,
      phone: null,
      address: null,
      car: true,
      cost: null,
      avalable: null
    },
    err: null
  };

  handleLoginRequest = user => {
    
    let url = `${apiUrl}/sign-up`;
    console.log(user)
    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ credentials: user })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status > 299) 
          this.setState({ err: data.message});
        else {
          setUser(data);
          this.props.onSignin();
        }
      })
      .catch(e => console.log(e));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.handleLoginRequest(this.state.formData);
  };

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };

  render() {
    return (
      <div className="pt-5 mt-5">
        <h1>PLEASE SIGNUP</h1>
        {this.state.err ? (
          <div className="alert alert-warning"> {this.state.err} </div>
        ) : (
          ""
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>email </label>
            <input
              name="email"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>Name </label>
            <input
              name="name"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>Phone </label>
            <input
              name="phone"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>Address </label>
            <input
              name="address"
              className="form-control"
              onChange={this.handleChange}
            />

            <label>Car</label>
           
           <div className="form-check displayDiv">
           <label className="displayDiv">
           <input
             type="radio"
             name="car"
             value="true"
             defaultChecked
             onChange={this.handleChange}
             className="form-check-input"
           />
           Yes
           </label>
           
           <label className="displayDiv">
           <input
             type="radio"
             name="car"
             value="false"
             onChange={this.handleChange}
             className="form-check-input"
           />
           No
        </label>
        </div>
        
            <label>Cost </label>
            <input
              name="cost"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>Avalable </label>
            <input
            type="date"
              name="avalable"
              className="form-control"
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              name="password"
              className="form-control"
              type="password"
              onChange={this.handleChange}
            />

            <label>Password Confirmation</label>
            <input
              name="password_confirmation"
              className="form-control"
              type="password"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
