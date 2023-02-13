import React from 'react';
import './CV.css';
import Button from '../../assets/CVButton.svg';

function CV(props) {
    return ( 
        <div className='app-CV'>
            <div className='app-CV-cont'>
                <div className='app-CV-aboutme'>
                    <h1 className='app-CV-aboutme-name'>{props.cvinfo.private.name+" "+props.cvinfo.private.lastname}</h1>
                    <div className='app-CV-aboutme-contact'>
                        <span>{props.cvinfo.private.email}</span>
                        <span>{props.cvinfo.private.phone}</span>
                    </div>
                    <div className='app-CV-aboutme-info'>
                        <h3 className='app-CV-header'>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h3>
                        <p className='app-CV-par'>{props.cvinfo.private.aboutme}</p>
                    </div>
                    <img className='app-CV-aboutme-photo' src={props.cvinfo.private.photo}/>
                </div>
                <div className='app-CV-experience'>
                    <h3 className='app-CV-header'>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h3>
                    {
                        props.cvinfo.experience.map((experience) => {
                            return  <div key={experience.startDate} className='app-CV-experience-cont'>
                                        <h4 className='app-CV-subtitle'>{experience.position+', '+experience.employer}</h4>
                                        <p className='app-CV-date'>{experience.startDate+" - "+experience.endDate}</p>
                                        <p className='app-CV-par-big'>{experience.experienceInfo}</p>
                                    </div>   
                        })
                    }
                </div>
                
                <div className='app-CV-education'>
                    <h3 className='app-CV-header'>ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h3>
                    {
                        props.cvinfo.education.map((education) => {
                            return  <div key={education.date} className='app-CV-experience-cont'>
                                        <h4 className='app-CV-subtitle'>{education.uni +", "+ education.quality}</h4>
                                        <p className='app-CV-date'>{education.date}</p>
                                        <p className='app-CV-par-big'>{education.educationInfo}</p>
                                    </div>   
                        })
                    }
                </div>
            </div>
            <img className='app-CV-button' alt='button' src={Button}/>
        </div>
     );
}

export default CV;