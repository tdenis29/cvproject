import React, { Component } from "react";

class WorkForm extends Component{

    render() {
        const { handleChange,handleAdd,handleBack, handleSubmit,handleEdit, state: {newWorkExperience : {companyName, jobTitle, from, to, summary}}} = this.props.props
        const {edit} = this.props.props.state
        return (
            <>
            <p className='asH1 form'>Work Experience</p> 
             <form id="workForm" onSubmit={handleAdd}>
                 <input
                     type="text"
                     placeholder="Company Name"
                     onChange={handleChange}
                     value={companyName || ""}
                     name="companyName"
                 />
 
                 <input
                     type="text"
                     placeholder="Job Title"
                     onChange={handleChange}
                     value={jobTitle || ""}
                     name="jobTitle"
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
                <textarea
                    placeholder="Summary of work experience"
                    name="summary"
                    value={summary || ""}
                    onChange={handleChange}
                    rows="6"
                >

                </textarea>
            {edit ? <button type="button" onClick={handleEdit}>Confirm Edit</button> : <button>Add</button> } 
             <div className="button-container">
                {edit ? <button type="button" disabled={true}>Back</button>: <button type="button" onClick={handleBack}>Back</button> }
                {edit ? <button type="button" disabled={true}>Next</button>: <button type="button" onClick={handleSubmit}>Next</button>}
            </div>
             </form>
           
         
         </>
        )
    }

}

export default WorkForm