import './Private.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import valid from '../../assets/Valid.svg';
import error from '../../assets/Error.svg';


function Private(props) {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [validName, setValidName] = useState (false);
    const [lastname, setLastname] = useState('');
    const [validLastname, setValidLastname] = useState (false);
    const [file, setFile] = useState('');
    const [aboutme, setAboutme] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState (false);
    const [phone, setPhone] = useState('');
    const [validPhone, setValidPhone] = useState (false);

    const [privateinfo, setPrivateinfo] = useState({name : props.storageInfo.name, lastname : props.storageInfo.lastname, photo : props.storageInfo.photo, aboutme : props.storageInfo.aboutme, email : props.storageInfo.email, phone : props.storageInfo.phone});
    
    useEffect(() => {
        let updated = {};
        updated = {private : privateinfo};
         props.setCvinfo(cvinfo => ({
            ...cvinfo,
            ...updated
        }));
    }, [privateinfo]);

    const handleName = event => {
        let name = event.target.value.replace(/[^ა-ჰ]/gi, '');
        let updatedValue = {};
        updatedValue = {name : event.target.value};
        setPrivateinfo(privateinfo => ({
             ...privateinfo,
             ...updatedValue
        }));
        if(event.target.value.length>2 && (event.target.value === name)){
            setValidName(true);
        } else {
            setValidName(false);
        }
        setName(event.target.value);
    };

    const handleLastname = event => {
        let name = event.target.value.replace(/[^ა-ჰ]/gi, '');
        let updatedValue = {};
        updatedValue = {lastname : event.target.value};
        setPrivateinfo(privateinfo => ({
             ...privateinfo,
             ...updatedValue
        }));
        if(event.target.value.length>2 && (event.target.value === name)){
            setValidLastname(true);
        } else {
            setValidLastname(false);
        }
        setLastname(event.target.value);
    };

    const handleFile = event => {
        let updatedValue = {};
        updatedValue = {photo : URL.createObjectURL(event.target.files[0])};
        setPrivateinfo(privateinfo => ({
             ...privateinfo,
             ...updatedValue
        }));
        setFile(URL.createObjectURL(event.target.files[0]));
    };

    const handleAboutme = event => {
        let updatedValue = {};
        updatedValue = {aboutme : event.target.value};
        setPrivateinfo(privateinfo => ({
             ...privateinfo,
             ...updatedValue
        }));
        setAboutme(event.target.value);
    }

    const handleEmail = event => {
        let updatedValue = {};
        updatedValue = {email : event.target.value};
        setPrivateinfo(privateinfo => ({
             ...privateinfo,
             ...updatedValue
        }));
        if(event.target.value.endsWith("@redberry.ge")){
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
        setEmail(event.target.value);
    };

    const handlePhone = event => {
        let updatedValue = {};
        updatedValue = {phone : event.target.value};
        setPrivateinfo(privateinfo => ({
             ...privateinfo,
             ...updatedValue
        }));
        if(event.target.value.length === 17 && event.target.value.startsWith("+995 ") 
            && event.target.value.slice(8,9)===" " && event.target.value.slice(11,12)===" "
            && event.target.value.slice(14,15)===" " 
            && event.target.value.replace(/\D/g, '').length === 12){
            setValidPhone(true);
        } else {
            setValidPhone(false);
        }
    
        setPhone(event.target.value);
    };
    return ( 
        <div className="app-form-private-container">
            <div className="app-form-private-nameAndSur">
                <div className="app-form-private-cont">
                    <label className="app-form-label">სახელი</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value = {props.storageInfo.name ? props.storageInfo.name : name}
                        onChange={handleName}
                        className="app-form-input"
                    />
                    {
                        validName ? <img className='app-form-valid' alt='valid' src={valid}/> : <img className='app-form-error' alt='error' src={error} />
                    }
                </div>
                <div className="app-form-private-cont">
                    <label className="app-form-label">გვარი</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value = {props.storageInfo.lastname ? props.storageInfo.lastname : lastname}
                        onChange={handleLastname}
                        className="app-form-input"
                    />
                    {
                        validLastname ? <img className='app-form-valid' alt='valid' src={valid}/> : <img className='app-form-error' alt='error' src={error} />
                    }
                </div>
            </div>
            <div className="app-form-private-photo">
                <label className="app-form-label">პირადი ფოტოს ატვირთვა</label>
                <input onChange={handleFile} type="file" id="files" className="hidden"/>
                <label className="app-form-private-photobutton" htmlFor="files">ატვირთვა</label>
            </div>
            <div className="app-form-private-aboutMe">
                <label className="app-form-label">ჩემ შესახებ (არასავალდებულო)</label>
                <textarea className="app-form-textarea" value = {props.storageInfo.aboutme ? props.storageInfo.aboutme : aboutme} onChange={handleAboutme}>
                    
                </textarea>
            </div>
                <div className="app-form-private-cont--big">
                    <label className="app-form-label">ელ.ფოსტა</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value = {props.storageInfo.email ? props.storageInfo.email : email}
                        onChange={handleEmail}
                        className="app-form-input app-form-input--big"
                    />
                    {
                        validEmail ? <img className='app-form-valid' alt='valid' src={valid}/> : <img className='app-form-error' alt='error' src={error} />
                    }
                </div>
                <div className="app-form-private-cont--big">
                    <label className="app-form-label">მობილურის ნომერი</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        value = {props.storageInfo.phone ? props.storageInfo.phone : phone}
                        onChange={handlePhone}
                        className="app-form-input app-form-input--big"
                    />
                    {
                        validPhone ? <img className='app-form-valid' alt='valid' src={valid}/> : <img className='app-form-error' alt='error' src={error} />
                    }
                </div>
                <div className='app-form-buttons'>
                    <button onClick={() => navigate("/experience")} className='app-form-button'>შემდეგი</button>
                </div>
        </div>
     );
}

export default Private;