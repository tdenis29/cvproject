/* eslint-disable no-useless-constructor */
import React, { Component } from "react";


class Cv extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
    const { firstName, lastName, phoneNumber, email, address, city, province, objective } = this.props.state
    const {handleMouseOver, handleMouseLeave, handleInitEdit} = this.props

    const eduExperienceElements = this.props.state.eduExperience.map(item => {
            return (
                <li className="educationblock" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} id={item.id} key={item.id}>
                    <div className="educationblock-head">
                        <p className="degree">{item.degreeTitle}</p>
                        <p className="school">{item.school}</p>
                    </div>
                    <div className="educationblock-body">
                        <p className="from">{item.from}</p>
                        <p className="to">{item.to}</p>
                    </div>
                    <div className="li-button-container">
                        <button onClick={handleInitEdit} className="editButton">Edit</button>
                        <button className="removeButton">Remove</button>
                    </div>
                </li>
            )
        })
   
         return (
            <div className="cv_container">
                <header>
                    <div className="cv_header--left">
                        <p className="asH1">{firstName === "" || undefined ? "John" : firstName}</p>
                        <p className="asH1-bold">{lastName === "" || undefined ? "Doe" : lastName}</p>
                    </div>

                    <div className="cv_header--right">
                        <div className="cv_contact">
                            <p>{phoneNumber === "" || undefined ? "1-555-555-5555" : phoneNumber}</p>
                            <p>{email === "" || undefined ? "email@email.com" : email}</p>
                            <p>
                               {address === "" || undefined ? "1234 5th Ave" : address},  { city=== "" || undefined ? "Calgary" : city}, 
                               {province === "" || undefined ? " AB" : province} 
                            </p>
                        </div>
                    </div>
                </header>
                <div className="cv_objective-container">
                    <p className="asH3">Objective</p>
                    <p className="objective">{objective}</p>
                </div>

                <div className="cv_education-container">
                    <p className="asH3">Education</p>
                    <ul className="cv_education-blockContainer">
                        {eduExperienceElements}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Cv