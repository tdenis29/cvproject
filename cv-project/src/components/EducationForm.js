import React, { Component } from "react";

class EducationForm extends Component {
  

    render(){
        
        const { handleChange,handleAdd,handleSubmit,handleBack,  state: {newEduExperience : {degreeTitle, school, from, to}}} = this.props.props
        console.log(this.props.props.state)
        return (
        <>
           <p className='asH1'>Education</p> 
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
                    placeholder="school"
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
             
            <button>Add</button>
            </form>
            <div className="button-container">
                <button onClick={handleBack}>Back</button>
                <button onClick={handleSubmit}>Next</button>
            </div>
        </>
        )
    }
}

export default EducationForm