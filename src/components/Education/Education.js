import '../Private/Private.css';
import '../Experience/Experience.css';
import './Education.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EducationBox from './EducationBox';     
import { useState, useEffect } from 'react';

function Education(props) {
    const navigate = useNavigate();
    const [educationbox, setEducationbox] = useState([]);
    const [education, setEducation] = useState({});
    useEffect(() => {
        let updated = {};
            updated = {education : [education]};
             props.setCvinfo(cvinfo => ({
                ...cvinfo,
                ...updated
        }));
    }, [education]);
    
    const onAddBtnClick = event => {
        setEducationbox(educationbox.concat(<EducationBox storageInfo={props.storageInfo} setEducation={setEducation}/>));
    };

    console.log(props.cvinfo);

    const handleFinish = () => {
        const article = {
            name: props.cvinfo.private.name,
            surname: props.cvinfo.private.lastname,
            email: props.cvinfo.private.email,
            phone_number: props.cvinfo.private.phone,
            experiences: [
              {
                position: props.cvinfo.experience[0].position,
                employer: props.cvinfo.experience[0].employer,
                start_date: props.cvinfo.experience[0].startDate,
                due_date: props.cvinfo.experience[0].endDate,
                description: props.cvinfo.experience[0].experienceInfo
              }
            ],
            educations: [
              {
                institute: props.cvinfo.education[0].uni,
                degree: props.cvinfo.education[0].quality,
                due_date: props.cvinfo.education[0].date,
                description: props.cvinfo.education[0].educationInfo
              }
            ],
            image: props.cvinfo.private.photo,
            about_me: props.cvinfo.private.aboutme
          }
        axios.post('https://resume.redberryinternship.ge/api/cvs', article)
        .then(response => console.log(response));
        navigate("/cv");
        console.log(article);
    }
    return ( 
        <div className='app-form-private'>
            <EducationBox storageInfo={props.storageInfo} setEducation={setEducation}/>
            {educationbox}
            <div className='app-form-experience-additional'>
                <div className='app-form-moreExp'>
                    <button onClick={onAddBtnClick} className='app-form-moreExp-button'>სხვა სასწავლებლის დამატება</button>
                </div>
                <div className='app-form-buttons-last'>
                    <button onClick={() => navigate("/experience")} className='app-form-button'>უკან</button>
                    <button onClick={handleFinish} className='app-form-button'>დასრულება</button>
                </div>
            </div>
        </div>
     );
}

export default Education;