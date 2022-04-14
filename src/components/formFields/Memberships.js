import React from 'react';
import Sidebar from "../Sidebar";
import '../../css/Memberships.css'
import Template from "../Template";

function Memberships(props) {
    return (
        <>
            <Sidebar />
            <div className='allform'>
                <h1>Memberships</h1>
            </div>
            <Template />
        </>
    );
}

export default Memberships;