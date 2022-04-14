import React from 'react';
import Sidebar from "../Sidebar";
import '../../css/Achievement.css'
import Template from "../Template";

function Achievement(props) {
    return (
        <>
            <Sidebar />
            <div className='allform'>
                <h1>Achievement</h1>
            </div>
            <Template />
        </>
    );
}

export default Achievement;