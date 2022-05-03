import React, { Component } from "react";

class WorkForm extends Component{

    render() {
        const { handleChange,handleAdd,handleBack, handleSubmit, state: {newWorkExperience : {companyName, jobTitle, from, to, summary}}} = this.props.props
        return (
            <>
            <p className='asH1'>Work Experience</p> 
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
                     placeholder="school"
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
                >

                </textarea>
             <button type="button">Add</button>
             </form>
             <div className="button-container">
                <button onClick={handleBack}>Back</button>
                <button onClick={handleSubmit}>Next</button>
            </div>
         
         </>
        )
    }

}

export default WorkForm