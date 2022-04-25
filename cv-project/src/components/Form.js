import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
class Form extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
   
    render(){
        return (
            <div className='form_container'>
                <PersonalForm
                    props={this.props}
                />
            </div>
        )
    }
}

export default Form 