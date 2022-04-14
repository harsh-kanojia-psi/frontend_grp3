import React, {useState} from 'react';
import $ from 'jquery';
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import {Outlet} from 'react-router-dom';
import Template from './Template';
import '../css/Home.css'

function Home() {

    const formfields = {};
	
	return (
		
		<div className="resumeBuilder">
			
			<div className='boxes'>
				<div className='box1'>
					<Sidebar formfields = {formfields} />
				</div>

				<div className='box2'>
					<main className="mainsection" formfields = {formfields} >
						{<Outlet formfields = {formfields} />}
					</main>
				</div>

				<div className='box3'>
					<Template formfields = {formfields} />
				</div>
			</div>
			
		</div>
	)
}

export default Home