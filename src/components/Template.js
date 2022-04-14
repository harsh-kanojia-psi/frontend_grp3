import React from 'react'
import '../css/Template.css'
import logo from '../css/picture_69.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
function Template() {
	let name = sessionStorage.getItem("name")
	let role = sessionStorage.getItem("role")
	let exp = sessionStorage.getItem("exp")

	let abtme = sessionStorage.getItem("abtt")
	let point = sessionStorage.getItem("point")
	
	let skill = sessionStorage.getItem("skills")
	
	let a =sessionStorage.getItem("clientdesc")
    let b =sessionStorage.getItem("country")
    let c =sessionStorage.getItem("projname")
	let d =sessionStorage.getItem("workexprole")
    let e1 =sessionStorage.getItem("duration_start")
    let e2 =sessionStorage.getItem("duration_end")
    let f =sessionStorage.getItem("businesssolution")
    let g =sessionStorage.getItem("techstack")	
	let h =sessionStorage.getItem("projres")
	let q=sessionStorage.getItem("ski");

	return (

    <section className="template">
		<div className="userInfoDiv">
			
        <img src={logo} alt="null"/>
      
			<div className="nameInfo">
				<h1 className="nameHead">{name} </h1>
				<label className="roleLabel" for="name" > Role: {role}</label>
				<label className="expLabel" for="name">Experience: {exp}</label>
			</div>
		</div>
		<div className="resumeDetailsDiv">
			<div className="aboutMeDiv">
				<h5 className="resumeHeadings">About Me</h5>
				<hr/>
				<p class="text-start" className="aboutMeText">{abtme}</p>
				<p className="aboutMepoints">{point}</p>
			</div>
			<div className="workHistoryDiv">
				<h5 className="resumeHeadings">Work History</h5>
				<hr/>
				<p className="workHistoryText">{a}&nbsp; &nbsp; &nbsp; &nbsp; <FontAwesomeIcon icon={faFlag}/> {b}</p>
				<p className="workHistoryText">{c} </p>
				<p className="workHistoryText"> {d}</p>
				<p className="workHistoryText">{e1}</p>
				<p className="workHistoryText">{e2}</p>
				<p className="workHistoryText">{f}</p>
				<p className="workHistoryText">{g}</p>
				<p className="workHistoryText">{h}</p>
			</div>
			<div className="skillsDiv">
				<h5 className="resumeHeadings">Skills & Proficiencies</h5>
				<hr/>
				<p className="skillsText">
					{q}

				</p>
			</div>
			
			<div className="certificationDiv">
				<h5 className="resumeHeadings">Certification & Volunteer Work</h5>
				<hr/>
				<p className="certificationText"> </p>
			</div>
			<div className="educationalDiv">
				<h5 className="resumeHeadings">Educational Background</h5>
				<hr/>
				<p className="educationText"></p>
			
			</div>
		</div>
		</section>
	)
}
export default Template