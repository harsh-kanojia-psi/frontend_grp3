import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
//import App from './App';
import Home from './components/Home';
import MyDetails from './components/formFields/MyDetails';
import AboutMe from './components/formFields/AboutMe';
import Skills from './components/formFields/Skills';
import WorkExp from './components/formFields/WorkExp';
import Education from './components/formFields/Education';
import Achievement from './components/formFields/Achievement';
import Memberships from './components/formFields/Memberships';

if(typeof(Storage) === `undefined`){
  <h2>Your Browser Does Not Support Session Storage</h2>
}
else{
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mydetails" element={<MyDetails />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="skills" element={<Skills />} />
        <Route path="workexp" element={<WorkExp />} />
        <Route path="education" element={<Education />} />
        <Route path="achievements" element={<Achievement />} />
        <Route path="memberships" element={<Memberships />} />
      </Routes>
    </BrowserRouter>,
    //<React.StrictMode>
    //  <App />
    //</React.StrictMode>,
    document.getElementById('root')
  );
}
