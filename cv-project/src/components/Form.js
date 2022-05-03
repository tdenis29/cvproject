import React, { Component } from 'react';
import EducationForm from './EducationForm';
import PersonalForm from './PersonalForm';
import WorkForm from './WorkForm';
class Form extends Component {

   
    render(){
        const { step } = this.props.state
     
        // eslint-disable-next-line default-case
        switch(step){
            case 1: 
                return(
                    <div className='form_container'>
                        <PersonalForm
                            props={this.props}
                        />
                    </div>
            )
            case 2: 
                return(
                    <div className='form_container'>
                        <EducationForm
                            props={this.props}
                        />
                    </div>
            )
            case 3: 
            return (
                <div className='form_container'>
                    <WorkForm
                        props={this.props}
                    />
                </div>
            )
        } 
        // return (
            // <div className='form_container'>
            //     <PersonalForm
            //         props={this.props}
            //     />
            // </div>
        // )
    }
}

export default Form 