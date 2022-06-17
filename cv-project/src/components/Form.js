/* eslint-disable default-case */
import React from 'react';
import EducationForm from './EducationForm';
import PersonalForm from './PersonalForm';
import WorkForm from './WorkForm';

export default function Form (props) {

    const {step} = props
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

    }

