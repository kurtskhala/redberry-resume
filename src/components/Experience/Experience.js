import '../Private/Private.css';
import './Experience.css';
import { useNavigate } from 'react-router-dom';
import ExperienceBox from './ExperienceBox';
import { useEffect, useState } from 'react';



function Experience(props) {
    const navigate = useNavigate();
    const [experiencebox, setexperiencebox] = useState([]);
    const [experience, setExperience] = useState({});
    useEffect(() => {
        let updated = {};
            updated = {experience : [experience]};
             props.setCvinfo(cvinfo => ({
                ...cvinfo,
                ...updated
        }));
    }, [experience]);
    
    const onAddBtnClick = event => {
        setexperiencebox(experiencebox.concat(<ExperienceBox storageInfo={props.storageInfo} setExperience={setExperience} />));
    };
    return ( 
        <div className='app-form-private'>
            <ExperienceBox storageInfo={props.storageInfo} setExperience={setExperience}/>
            {experiencebox}
            <div className='app-form-experience-additional'>
                <div className='app-form-moreExp'>
                    <button onClick={onAddBtnClick} className='app-form-moreExp-button'>მეტი გამოცდილების დამატება</button>
                </div>
                <div className='app-form-buttons-two'>
                    <button onClick={() => navigate("/aboutme")} className='app-form-button'>უკან</button>
                    <button onClick={() => navigate("/education")} className='app-form-button'>შემდეგი</button>
                </div>
            </div>
        </div>
     );
}

export default Experience;