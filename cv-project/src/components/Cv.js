/* eslint-disable no-useless-constructor */
import React from "react";


export default function Cv (props){
 
    const { firstName, lastName, phoneNumber, email, address, city, province, objective, edit } = this.props.state
    const {handleMouseOver, handleMouseLeave, handleInitEdit, handleRemoveItem} = this.props

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
                       { edit === false ? <button id="initEduEdit" onClick={handleInitEdit} className="editButton">Edit</button> : <button id="initEduEdit" onClick={handleInitEdit} className="editButton" disabled={true}>Edit</button>}
                      {edit === false ? <button onClick={handleRemoveItem} className="removeButton">Remove</button> : <button className="removeButton" diasbaled={true}>Remove</button>}
                    </div>
                </li>
            )
        })
        const workExperienceElements = this.props.state.workExperience.map(item => {
            return (
                <li className="workblock" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} id={item.id} key={item.id}>
                <div className="workblock-head">
                    <p className="jobTitle">{item.jobTitle}</p>
                    <p className="companyName">{item.companyName}</p>
                </div>
                <div className="workblock-body">
                    <p className="from">{item.from}</p>
                    <p className="to">{item.to}</p>
                    <p className="summary">{item.summary}</p>
                </div>
              
                <div className="li-button-container">
                    {edit === false ? <button id="initWorkEdit" onClick={handleInitEdit} className="editButton">Edit</button> :
                     <button id="initWorkEdit" onClick={handleInitEdit} className="editButton" disabled="true">Edit</button>  }
                    {edit === false ? <button onClick={handleRemoveItem} className="removeButton">Remove</button> : <button className="removeButton" diasbaled={true}>Remove</button>}
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
                    <p className="asH3 bold">Objective</p>
                    <p className="objective">{objective}</p>
                </div>

                <div className="cv_education-container">
                    <p className="asH3 bold">Education</p>
                    <ul className="cv_education-blockContainer">
                        {eduExperienceElements}
                    </ul>
                </div>

                <div className="cv_work-container">
                    <p className="asH3 bold">Work Experience</p>
                    <ul className="cv_workexperience-blockContainer">
                        {workExperienceElements}
                    </ul>
                </div>
            </div>
        )
    }
