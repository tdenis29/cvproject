import React, { Component } from "react";

class PersonalForm extends Component {

    render () {
    const { handleChange,handleSubmit, state: {firstName, lastName, phoneNumber, email, address, city, province, objective}} = this.props.props

       return (
        <>
        <p className='asH1 form'>Personal Details</p>
        <form id="personalForm" className='personalForm'>
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
            <textarea
            name="objective"
            value={objective}
            onChange={handleChange}
            rows="6"
            placeholder="Objective"
            >
            </textarea>  
            <button type="button" onClick={handleSubmit}>Next</button>
     </form>
  
     </>
       )
    }
}
export default PersonalForm