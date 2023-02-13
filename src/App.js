import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import CV from './components/CV/CV';
import Fill from './components/Fill/Fill';
import Education from './components/Education/Education.js';
import Experience from './components/Experience/Experience';
import Private from './components/Private/Private';
import { useEffect, useState } from 'react';


function App() {
  const [cvinfo, setCvinfo] = useState({private : {name : '', lastname : '', photo : '', aboutme : '', email : '', phone : ''},experience : [{position : '', employer : '', startDate : '', endDate : '', experienceInfo : ''}],education : [{uni : '', quality : '', date : '', educationInfo : ''}]});
  const [storageInfo, setStorageinfo] = useState({cvinfo:{private : {
    name : '', lastname : '', photo : '', aboutme : '', email : '', phone : ''
  },
  experience : [
    {position : '', employer : '', startDate : '', endDate : '', experienceInfo : ''}
  ],
  education : [
    {uni : '', quality : '', date : '', educationInfo : ''}
  ]}});
  useEffect(() => {
    window.localStorage.setItem('cvinfo', JSON.stringify(cvinfo));

    if(window.localStorage.getItem('cvinfo')){
      setStorageinfo({cvinfo: JSON.parse(window.localStorage.getItem('cvinfo'))});
    }
  }, [cvinfo]);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutme' element={<><Fill setCvinfo={setCvinfo} header="ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ" page="1/3" comp={<Private storageInfo={storageInfo.cvinfo.private} setCvinfo={setCvinfo}/>} /> <CV cvinfo={storageInfo.cvinfo}/></>}></Route>
        <Route path='/experience' element={<><Fill setCvinfo={setCvinfo} header="ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ" page="2/3" comp={<Experience storageInfo={storageInfo.cvinfo.experience} setCvinfo={setCvinfo} />} /> <CV cvinfo={storageInfo.cvinfo}/></>}></Route>
        <Route path='/education' element={<><Fill setCvinfo={setCvinfo} header="ᲒᲐᲜᲐᲗᲚᲔᲑᲐ" page="3/3" comp={<Education storageInfo={storageInfo.cvinfo.education} cvinfo={cvinfo} setCvinfo={setCvinfo} />} /> <CV cvinfo={storageInfo.cvinfo}/></>}></Route>
        <Route path='/cv' element={<CV cvinfo={cvinfo} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
