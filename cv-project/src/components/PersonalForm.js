import React, { Component } from "react";

class PersonalForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    render () {
    console.log(this.props)
    const { handleChange, state: {firstName, lastName, phoneNumber, email, address, city, province}} = this.props.props
       return (
           <>
        <p className='asH1'>Personal Details</p>
        <form className='personalForm'>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={lastName}
            />

            <input
                type="text"
                placeholder="Phone"
                onChange={handleChange}
                name="phoneNumber"
                value={phoneNumber}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={email}
            />
            <input
                type="text"
                placeholder="Street Address"
                onChange={handleChange}
                name="address"
                value={address}
            />
            <input
                type="text"
                placeholder="City"
                onChange={handleChange}
                name="city"
                value={city}
            /> 

            <input
                type="text"
                placeholder="Province"
                onChange={handleChange}
                name="province"
                value={province}
            /> 
            <div>
            <button type="Submit">Submit</button> 
            <button>Edit</button>
            </div>   
            
     </form>
     
     </>
       )
    }
}
export default PersonalForm