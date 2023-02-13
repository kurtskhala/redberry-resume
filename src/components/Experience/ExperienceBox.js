import '../Private/Private.css';
import './Experience.css';
import { useEffect, useState } from 'react';
import valid from '../../assets/Valid.svg';
import error from '../../assets/Error.svg';


function ExperienceBox(props) {
    const [position, setPosition] = useState('');
    const [validPosition, setValidPosition] = useState (false);
    const [employer, setEmployer] = useState('');
    const [validEmployer, setValidEmployer] = useState (false);
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [experienceinfo, setExperienceinfo] = useState('');

    const [experiencebox, setExperiencebox] = useState({position : props.storageInfo[0].position, employer : props.storageInfo[0].employer, startDate : props.storageInfo[0].startDate, endDate : props.storageInfo[0].endDate, experienceInfo : props.storageInfo[0].experienceInfo});
    useEffect(() => {
        props.setExperience(experiencebox);
    }, [experiencebox]);

    const handlePosition = event => {
        let updatedValue = {};
        updatedValue = {position : event.target.value};
        setExperiencebox(experiencebox => ({
             ...experiencebox,
             ...updatedValue
        }));
        if(event.target.value.length>2){
            setValidPosition(true);
        } else {
            setValidPosition(false);
        }
        setPosition(event.target.value);
    };

    const handleEmployer = event => {
        let updatedValue = {};
        updatedValue = {employer : event.target.value};
        setExperiencebox(experiencebox => ({
             ...experiencebox,
             ...updatedValue
        }));
        if(event.target.value.length>2){
            setValidEmployer(true);
        } else {
            setValidEmployer(false);
        }
        setEmployer(event.target.value);
    };

    const handleStartdate = event => {
        let updatedValue = {};
        updatedValue = {startDate : event.target.value};
        setExperiencebox(experiencebox => ({
             ...experiencebox,
             ...updatedValue
        }));
        setStartdate(event.target.value);
    };

    const handleEnddate = event => {
        let updatedValue = {};
        updatedValue = {endDate : event.target.value};
        setExperiencebox(experiencebox => ({
             ...experiencebox,
             ...updatedValue
        }));
        setEnddate(event.target.value);
    };

    const handleExperienceinfo = event => {
        let updatedValue = {};
        updatedValue = {experienceInfo : event.target.value};
        setExperiencebox(experiencebox => ({
             ...experiencebox,
             ...updatedValue
        }));
        setExperienceinfo(event.target.value);
    };

    return ( 
        <div className='app-form-experiencebox'>
            <div className="app-form-private-nameAndSur">
                <div className="app-form-experience-cont">
                    <label className="app-form-label">თანამდებობა</label>
                    <input
                        type="text"
                        name="position"
                        id="position"
                        value = {props.storageInfo[0].position ? props.storageInfo[0].position : position}
                        onChange={handlePosition}
                        className="app-form-input app-form-input--big"
                    />
                    {
                        validPosition ? <img className='app-form-valid' alt='valid' src={valid}/> : <img className='app-form-error' alt='error' src={error} />
                    }
                </div>
            </div>
            <div className="app-form-private-cont--big">
                    <label className="app-form-label">დამსაქმებელი</label>
                    <input
                        type="text"
                        name="employer"
                        id="employer"
                        value = {props.storageInfo[0].employer ? props.storageInfo[0].employer : employer}
                        onChange={handleEmployer}
                        className="app-form-input app-form-input--big"
                    />
                    {
                        validEmployer ? <img className='app-form-valid' alt='valid' src={valid}/> : <img className='app-form-error' alt='error' src={error} />
                    }
            </div>
            <div className="app-form-private-date">
                <div className="app-form-private-cont">
                    <label className="app-form-label">დაწყების რიცხვი</label>
                    <input
                        type="date"
                        name="firstname"
                        id="firstname"
                        value = {props.storageInfo[0].startDate ? props.storageInfo[0].startDate : startdate}
                        onChange={handleStartdate}
                        className="app-form-input"
                    />
                </div>
                <div className="app-form-private-cont">
                    <label className="app-form-label">დამთავრების რიცხვი</label>
                    <input
                        type="date"
                        name="lastname"
                        id="lastname"
                        value = {props.storageInfo[0].endDate ? props.storageInfo[0].endDate : enddate}
                        onChange={handleEnddate}
                        className="app-form-input"
                    />
                </div>
            </div>
            <div className="app-form-experience-info">
                <label className="app-form-label">აღწერა</label>
                <textarea className="app-form-textarea" value={props.storageInfo[0].experienceInfo} onChange={handleExperienceinfo}>
                    
                </textarea>
            </div>
        </div>
     );
}

export default ExperienceBox;