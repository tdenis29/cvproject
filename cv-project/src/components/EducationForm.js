import React, { Component } from "react";

class EducationForm extends Component {
  

    render(){
        
        const { handleChange,handleAdd,handleSubmit,handleBack,handleEdit,  state: {newEduExperience : {degreeTitle, school, from, to}}} = this.props.props
        const {edit} = this.props.props.state
        return (
        <>
           <p className='asH1 form'>Education</p> 
            <form onSubmit={handleAdd} id="educationForm">

                <input
                    type="text"
                    placeholder="Degree title"
                    onChange={handleChange}
                    value={degreeTitle || ""}
                    name="degreeTitle"
                />

                <input
                    type="text"
                    placeholder="School"
                    onChange={handleChange}
                    value={school || ""}
                    name="school"
                />

                <input
                    type="date"
                    placeholder="From"
                    onChange={handleChange}
                    value={from || ""}
                    name="from"
                />

                <input
                    type="date"
                    placeholder="To"
                    onChange={handleChange}
                    value={to || ""}
                    name="to"
                />
            {edit ? <button type="button" onClick={handleEdit}>Confirm Edit</button> : <button>Add</button> } 
            <div className="button-container">
                {edit ? <button disabled={true}>Back</button> :<button onClick={handleBack}>Back</button>}
                {edit ? <button disabled={true}>Next</button> :<button onClick={handleSubmit}>Next</button>}
            </div>
            </form>
       
        </>
        )
    }
}

export default EducationForm