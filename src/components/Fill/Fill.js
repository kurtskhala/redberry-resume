import React from 'react';
import './Fill.css';
import Left from '../../assets/Left.svg';
import { useNavigate } from 'react-router-dom'      


function Fill(props) {
    const navigate = useNavigate()
    const handleClick = () => {
        window.localStorage.removeItem('cvinfo');
        navigate("/");
        let updated = {private : {
            name : '', lastname : '', photo : '', aboutme : '', email : '', phone : ''
          },
          experience : [
            {position : '', employer : '', startDate : '', endDate : '', experienceInfo : ''}
          ],
          education : [
            {uni : '', quality : '', date : '', educationInfo : ''}
          ]};
         props.setCvinfo(cvinfo => ({
            ...updated
        }));
    }
    return ( 
        <div className='app-fill'>
            <div className='app-fill-left'>
                <img onClick={handleClick} className='app-fill-left-sym' alt='left' src={Left} />
            </div>
            <div className='app-fill-right'>
                <div className='app-fill-header'>
                    <span className='app-fill-header-info'>{props.header}</span>
                    <span className='app-fill-header-page'>{props.page}</span>
                </div>
                <div className='app-fill-form'>
                    {props.comp}
                </div>
            </div>
        </div>
     );
}

export default Fill;