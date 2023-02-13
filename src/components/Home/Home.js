import React from 'react';
import './Home.css';
import Logo from '../../assets/Logo.svg';
import Logo1 from '../../assets/Logo1.svg';
import { useNavigate } from 'react-router-dom'      



function Home() {
    const navigate = useNavigate()
    return ( 
        <div className='app-home'>
            <div className='app-home-header'>
                <img className='app-home-header-logo' alt='logo' src={Logo} />
            </div>
            <div className='app-home-body'>
                <button onClick={() => navigate("/aboutme")} className='app-home-button'>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
                <img className='app-home-body-logo1' alt='logo1' src={Logo1}/>
            </div>
        </div>
     );
}

export default Home;