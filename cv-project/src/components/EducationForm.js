import React, { Component } from "react";

class EducationForm extends Component {
  

    render(){
        
        const { handleChange,handleAdd, state: {newWorkExperience : {degreeTitle, school, from, to}}} = this.props.props
        console.log(this.props.props.state)
        return (
        <>
           <p className='asH1'>Education</p> 
            <form onSubmit={handleAdd}>

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
        </>
        )
    }
}

export default EducationForm