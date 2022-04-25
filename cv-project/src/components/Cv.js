/* eslint-disable no-useless-constructor */
import React, { Component } from "react";


class Cv extends Component{
    constructor(props){
        super(props)
    }
    render(props){
    const { firstName, lastName, phoneNumber, email, address, city, province } = this.props.state
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
                               {address === "" || undefined ? "1234 5th Ave" : address},  { city=== "" || undefined ? "Calgary" : city} , 
                               {province === "" || undefined ? "AB" : province} 
                            </p>
                            <span></span>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default Cv