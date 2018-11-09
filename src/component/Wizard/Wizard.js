import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from "react-redux";
import {updateName,updateAddress,updateCity,updateState,updateZipcode} from "../../ducks/reducer"

class Wizard extends Component {
    constructor(props){
    super(props);
    this.state= {
        name:'',
        address:'',
        city:'',
        state:'',
        zipcode:0
    }
    this.handleChange = this.handleChange.bind(this)
    this.sendToReducer=this.sendToReducer.bind(this)
    }

    sendToReducer() {
        let { updateName, updateAddress, updateCity, updateState, updateZipcode } = this.props;
        updateName(this.state.name);
        updateAddress(this.state.updateAddress);
        updateCity(this.state.updateCity);
        updateState(this.state.updateState);
        updateZipcode(this.state.updateZipcode);
      }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    
  render() {
    return (
        <div className="wrapper">
        <form>
          <h3>Name:</h3>
          <input value={this.state.name} name="name" placeholder="Enter Name" onChange={e => this.handleChange(e)} />
          <h3>Address:</h3>
          <input value={this.state.address} name="address" placeholder="Enter Address" onChange={e => this.handleChange(e)} />
          <h3>City  :</h3>
          <input value={this.state.city}name="city" placeholder="Enter City" onChange={e => this.handleChange(e)} />
          <h3>State:</h3>
          <input value={this.state.state} name="state" placeholder="Enter State" onChange={e => this.handleChange(e)} />
          <h3>Zipcode:</h3>
          <input value={this.state.zipcode} name="zipcode" placeholder="Enter Zipcode" onChange={e => this.handleChange(e)} />
          <div className="buttons">
          <Link to='/'><button>Cancel</button></Link>
            <Link to='/Wizard2'><button>Next</button></Link>
            <button onClick={() => this.sendToReducer()}>SUBMIT</button>
          </div>
        </form>
        </div>
      )
    }
  }
 
  const mapStateToProps = state => state;
  export default connect( mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZipcode } ) (Wizard);