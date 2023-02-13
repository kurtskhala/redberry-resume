import '../Private/Private.css';
import '../Experience/Experience.css';
import './Education.css';
import DegreeDropdown from './DegreeDropdown';
import { useState, useEffect } from 'react';
import valid from '../../assets/Valid.svg';
import error from '../../assets/Error.svg';

import axios from "axios";


function EducationBox(props) {
    const [uni, setUni] = useState('');
    const [validUni, setValidUni] = useState (false);
    const [quality, setQuality] = useState('');
    const [date, setDate] = useState('');
    const [educationInfo, setEducationInfo] = useState('');

    const [degree, setDegree] = useState("აირჩიეთ ხარისხი");

    const [degreeStyle, setDegreeStyle] = useState("plain");
    const [dropDown, setDropDown] = useState("false");

    const [degrees, setDegrees] = useState([]);


    const handleDropDown = () => {
        setDropDown(!dropDown);
    }


    const getData = async () => {
        const { data } = await axios.get(`https://resume.redberryinternship.ge/api/degrees`);
        setDegrees(data);
    };
    useEffect(() => {
        getData();
    }, []);

    const handleDegreeChange = (degree) => {
        setDegree(degree);
        setDegreeStyle("valid");
        setDropDown(!dropDown);

    }

    const [educationbox, setEducationbox] = useState({uni : props.storageInfo[0].uni, quality : props.storageInfo[0].quality, date : props.storageInfo[0].date, educationInfo : props.storageInfo[0].educationInfo});
    useEffect(() => {
        props.setEducation(educationbox);
    }, [educationbox]);

    const handleUni = event => {
        let updatedValue = {};
        updatedValue = {uni : event.target.value};
        setEducationbox(educationbox => ({
             ...educationbox,
             ...updatedValue
        }));
        if(event.target.value.length>2){
            setValidUni(true);
        } else {
            setValidUni(false);
        }
        setUni(event.target.value);
    };

    const handleQuality = event => {
        let updatedValue = {};
        updatedValue = {quality : event.target.value};
        setEducationbox(educationbox => ({
            ...educationbox,
            ...updatedValue
       }));
        setQuality(event.target.value);
    };

    const handleDate = event => {
        let updatedValue = {};
        updatedValue = {date : event.target.value};
        setEducationbox(educationbox => ({
            ...educationbox,
            ...updatedValue
       }));
        setDate(event.target.value);
    };

    const handleEducationinfo = event => {
        let updatedValue = {};
        updatedValue = {educationInfo : event.target.value};
        setEducationbox(educationbox => ({
            ...educationbox,
            ...updatedValue
       }));
        setEducationInfo(event.target.value);
    };
    return ( 
        <div className='app-form-experiencebox'>
            <div className="app-form-private-nameAndSur">
                <div className="app-form-experience-cont">
                    <label className="app-form-label">სასწავლებელი</label>
                    <input
                        type="text"
                        name="uni"
                        id="uni"
                        value = {props.storageInfo[0].uni ? props.storageInfo[0].uni : uni}
                        onChange={handleUni}
                        className="app-form-input app-form-input--big"
                    />
                    {
                        validUni ? <img className='app-form-valid' alt='valid' src={valid}/> : <img className='app-form-error' alt='error' src={error} />
                    }
                </div>
            </div>
            <div className="app-form-private-date">
                <div className="app-form-private-cont">
                    <label className="app-form-label" htmlFor="quality">ხარისხი</label>
                    <DegreeDropdown
                                handleChange={handleDegreeChange}
                                classname={degreeStyle}
                                degree={degree}
                                degreeList={degrees}
                                handleOpening={handleDropDown}
                                dropDown={dropDown} />
                    
                </div>
                <div className="app-form-private-cont">
                    <label className="app-form-label">დამთავრების რიცხვი</label>
                    <input
                        type="date"
                        name="lastname"
                        id="lastname"
                        value = {props.storageInfo[0].date ? props.storageInfo[0].date : date}
                        onChange={handleDate}
                        className="app-form-input"
                    />
                </div>
            </div>
                <div className="app-form-education-info">
                    <label className="app-form-label">აღწერა</label>
                    <textarea className="app-form-textarea-education" value = {props.storageInfo[0].educationInfo ? props.storageInfo[0].educationInfo : educationInfo} onChange={handleEducationinfo}>
                        
                    </textarea>
                </div>
        </div>
     );
}

export default EducationBox;