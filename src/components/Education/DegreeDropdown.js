import React from "react";
import "./DegreeDropdown.css";
import downArrow from "../../assets/downarrow.png";

const DegreeDropdown = ({ handleChange, classname, degree, degreeList, handleOpening, dropDown }) => {
    const renderedOptions = degreeList.map((item) => {
        return (
            <div key={item.id} className="dropdown-menu-item" onClick={() => { handleChange(item.title) }}>
                {item.title}
            </div>
        )
    })

    return (
        <div>
            <div className={`dropdown-wrapper  ${classname}`} onClick={handleOpening} >
                <div className="degree-input"> {degree}</div>
                <img src={downArrow} alt="dropdown arrow" />
            </div>
            <div className={`dropdown-menu ${!dropDown ? "" : "hidden"}`}>{renderedOptions}</div>
        </div>
    )
}

export default DegreeDropdown;