import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar";
import "../../css/WorkExp.css";
import Template from "../Template";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
// function WorkExp() {
//   // console.log(props.formfields)
//   const { register, handleSubmit } = useForm();
  // const [data, setData] = useState("");

//   const customFunction = (d) => {
//     sessionStorage.setItem("workexp", JSON.stringify(d));
//     const data = JSON.parse(sessionStorage.getItem("workexp"));
//     console.log(sessionStorage.key(0));
//     console.log(data);
//     sessionStorage.setItem("clientdesc", data.clientdesc);
//     sessionStorage.setItem("country", data.country);
//     sessionStorage.setItem("projname", data.projname);
//     sessionStorage.setItem("workexprole", data.workexprole);
//     sessionStorage.setItem("duration_start", data.duration_start);
//     sessionStorage.setItem("duration_end", data.duration_end);
//     sessionStorage.setItem("businesssolution", data.businesssolution);
//     sessionStorage.setItem("techstack", data.techstack);
//     sessionStorage.setItem("projres", data.projres);

//     const clientdesc = data.clientdesc;
//     const country = data.country;
//     const projname = data.projname;
//     const workexprole = data.workexprole;
//     const duration_start = data.duration_start;
//     const duration_end = data.duration_end;
//     const businesssolution = data.businesssolution;
//     const techstack = data.techstack;
//     const projres = data.projres;

//     document.querySelector(".workHistoryText").innerHTML = clientdesc;
//     document.querySelector(".workHistoryText").innerHTML = country;
//     document.querySelector(".workHistoryText").innerHTML = projname;
//     document.querySelector(".workHistoryText").innerHTML = workexprole;
//     document.querySelector(".workHistoryText").innerHTML = duration_start;
//     document.querySelector(".workHistoryText").innerHTML = duration_end;
//     document.querySelector(".workHistoryText").innerHTML = businesssolution;
//     document.querySelector(".workHistoryText").innerHTML = techstack;
//     document.querySelector(".workHistoryText").innerHTML = projres;

//     const profileid = sessionStorage.getItem("profileid");

//     let workexps = [];

//     let size = Object.keys(d).length;

//     console.log(size);
//     console.log(d);

//     axios
//       .post("http://localhost:8080/workexp", [
//         {
//           clientdesg: d.clientdesc,

//           country: d.country,

//           projname: d.projname,

//           role: d.workexprole,

//           startdate: d.duration_start,

//           enddate: d.duration_end,

//           busisol: d.businesssolution,

//           techstack: d.techstack,

//           projresp: [d.projres],

//           userid: 2,

//           profileid: profileid,
//         },
//       ])
//       .then((res) => {
//         console.log(res.data);
//       });
//   };
//   const addBulletPoint = () => {
//     const inp = document.createElement("input");

//     inp.setAttribute("type", "text");

//     inp.setAttribute("name", "projres[]");

//     inp.setAttribute("placeholder", "Write in bulleted list");

//     inp.setAttribute("object", "{...register(projres[])}");

//     inp.setAttribute("class", "worktext8");

//     document.querySelector(".worklabelinputexp").append(inp);
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className="buttons">
//         <button className="button1">Cancel</button>
//         <button
//           className="button2"
//           onClick={handleSubmit((data) => customFunction(data))}
//         >
//           Save
//         </button>
//         <button className="arrow">
//           <FaArrowRight />
//         </button>
//       </div>
//       <div className="workallform">
//         <h6 className="workheading">
//           Work Experience <span className="infoicon">&#9432;</span>
//         </h6>
//         <form onSubmit={handleSubmit((data) => customFunction(data))}>
//           <div className="workExperiences">
//             <div className="wordExpDiv">
//               <div className="worklabelinput">
//                 <label className="worklabel1" for="clientdesc">
//                   Client Description:
//                 </label>
//                 <input
//                   className="workinput1"
//                   {...register("clientdesc")}
//                   placeholder="Client Description"
//                   name="clientdesc"
//                   id="clientdesc"
//                 />
//               </div>

//               <div className="worklabelinput">
//                 <label className="worklabel2" for="country">
//                   Country:
//                 </label>
//                 <input
//                   className="workinput2"
//                   {...register("country")}
//                   placeholder="Country"
//                   name="country"
//                   id="country"
//                 />
//               </div>

//               <div className="worklabelinput">
//                 <label className="worklabel3" for="projname">
//                   Project Name:
//                 </label>
//                 <input
//                   className="workinput3"
//                   {...register("projname")}
//                   placeholder="Project Name"
//                   name="projname"
//                   id="projname"
//                 />
//               </div>

//               <div className="worklabelinput">
//                 <label className="worklabel4" for="workexprole">
//                   Role:
//                 </label>
//                 <select
//                   className="workselect4"
//                   name="workexprole"
//                   id="workexprole"
//                   {...register("workexprole")}
//                   multiple
//                 >
//                   <option value="">Add Role</option>
//                   <option value="business analyst">Business Analyst</option>
//                   <option value="developer">Developer</option>
//                   <option value="designer">Designer</option>
//                   <option value="qa">QA</option>
//                 </select>
//               </div>

//               <div className="worklabelinput">
//                 <label className="worklabel5" for="duration">
//                   Duration:
//                 </label>
//                 <input
//                   type="date"
//                   className="workinput5"
//                   {...register("duration_start")}
//                   placeholder="Duration"
//                   name="duration_start"
//                   id="duration_start"
//                 />
//                 <input
//                   type="date"
//                   className="workinput55"
//                   {...register("duration_end")}
//                   placeholder="Duration"
//                   name="duration_end"
//                   id="duration_end"
//                 />
//               </div>

//               <div className="worklabelinput">
//                 <label className="worklabel6" for="businesssolution">
//                   Business Solution:
//                 </label>
//                 <textarea
//                   className="worktext6"
//                   {...register("businesssolution")}
//                   name="businesssolution"
//                   placeholder="Describe business solution here..."
//                   id="businesssolution"
//                   cols="30"
//                   rows="3"
//                 ></textarea>
//               </div>

//               <div className="worklabelinput">
//                 <label className="worklabel7" for="techstack">
//                   Technology Stack:
//                 </label>
//                 <select
//                   className="workselect7"
//                   name="techstack"
//                   id="techstack"
//                   {...register("techstack")}
//                   multiple
//                 >
//                   <option value="">Add Technology</option>
//                   <option value="python">Python</option>
//                   <option value="reactjs">Reack JS</option>
//                   <option value="javar">JAVA</option>
//                   <option value="c++">C++</option>
//                 </select>
//               </div>

//               <div className="worklabelinputexp">
//                 <label className="worklabel8" for="projres">
//                   Project Responsibility:
//                 </label>
				
// 				  <div className="rr">
//                 <input
//                   className="worktext8"
//                   {...register("projres[]")}
//                   type="text"
//                   id="projres"
//                   name="projres[]"
//                   placeholder="Write in bulleted list"
//                 />
              
			 
			  
// 			  <div className="q">
//                 <button type="button" className="btn" onClick={addBulletPoint}>
//                   +
//                 </button>
//               </div>
//               </div>
// 			  </div>
//             </div>
//           </div>

//           <div className="worksubmit">
//             <input
//               className="worksave"
//               type="submit"
//               name="workexp"
//               value="Save"
//             />
//           </div>
//         </form>
//       </div>
//       <Template />
//     </>
//   );
// }

// export default WorkExp;
// {import React from 'react'
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import '../../css/formFieldsCss/WorkExp.css'
// import axios from 'axios';

function WorkExp() {
	const { register, handleSubmit } = useForm();

	const customFunction = (d) => {

		// to convert projectResp which is in string to array list of string
		const projectRespString = document.querySelectorAll('.worktext8');
		const projectRespList = [];
		projectRespString.forEach((ele) => {
			projectRespList.push(ele.value);
		});
	
		sessionStorage.setItem("workexp", JSON.stringify(d))
		const data = JSON.parse(sessionStorage.getItem('workexp'))
		console.log(data)

		const clientDesc=data.clientDesc;
		const country=data.country;
		const projectName=data.projectName;
		const jobRole=data.jobRole;
		const duration=data.startDate + " to " + data.endDate;
		const businessSolution=data.businessSolution;
		const techStack=data.techStack;
		const projectResp=data.projectResp;

		document.querySelector(".resumeTemp .clientdesc").innerHTML="Client: "+ clientDesc + " &nbsp; &nbsp; &nbsp;";
		document.querySelector(".resumeTemp .country").innerHTML="&nbsp; &#127988 "+ country;
		document.querySelector(".resumeTemp .project").innerHTML="Project: "+ projectName;
		document.querySelector(".resumeTemp .jobRole").innerHTML="Role: "+ jobRole;
		document.querySelector(".resumeTemp .duration").innerHTML="Duration: "+ duration;
		document.querySelector(".resumeTemp .busSol").innerHTML="Business Solution: "+ businessSolution;	  
		document.querySelector(".resumeTemp .techStack").innerHTML="&#8226;"+ techStack;	  
		document.querySelector(".resumeTemp .projectResp").innerHTML=""+ projectResp;

		const profile_id = sessionStorage.getItem('profile_id');
		axios.post(`http://localhost:8080/resume/workexp/${profile_id}`,{
			clientDesc : data.clientDesc,
			country : data.country,
			projectName : data.projectName,
			jobRole : data.jobRole,
			startDate : data.startDate,
			endDate : data.endDate,
			businessSolution : data.businessSolution,
			techStack : data.techStack,
			projectResp : projectRespList
		})
		.then(res => {
			console.log(res);
			// console.log(res.data);
			alert("Details Saved Successfully!");
		});

	}

	const addWorkExp = (e) => {
		e.preventDefault();
		const allowedNodeNames = ['INPUT', 'TEXTAREA','SELECT'];
		const workExpDiv = e.target.previousElementSibling.children[0].cloneNode(true);
		Array.from(workExpDiv.children).forEach((current, index) => {
			if(current.nodeName === 'DIV'){
				Array.from(current.children).forEach((current) => {
					if(allowedNodeNames.includes(current.nodeName))
						current.value = '';
				})
			}				
		})		
		e.target.previousElementSibling.appendChild(workExpDiv);
	}

  return (
	<>
	<Sidebar />
		<form className="workallform" name='work' onSubmit={handleSubmit((data) => customFunction(data))}>

			<div className="workExperiences">
				<div className="wordExpDiv">

					<h6 className='workheading'>Work Experience <span className='infoicon'>&#9432;</span></h6>

					<div className='worklabelinput'>
						<label>Client Description</label>
						<input className="workinput1" {...register("clientDesc")}  name="clientDesc" id="clientDes"/>
					</div>
					
					<div className='worklabelinput'>
						<label>Country</label>
						<input className="workinput2" {...register("country")} name='country' id='country'></input>
					</div>
					
					<div className='worklabelinput'>
						<label>Project Name </label>
						<input className="workinput3" {...register("projectName")}  name="projectName" id="projectName" /> 
					</div>
					
					<div className='worklabelinput'>
						<label>Role</label>
						<select className="workselect4" name="jobRole[]" id="role" {...register("jobRole[]")} multiple size='2'>
							<option value="" disabled >Add Role...</option>
							<option value="Business Analyst">Business Analyst</option>
							<option value="Developer">Developer</option>
							<option value="Designer">Designer</option>
							<option value="QA">QA</option>
						</select> 
					</div>

					<div className="worklabelinput">
								<label className="worklabel5" htmlFor="duration">Duration:</label>
								<input type="date" className="workinput5" {...register("startDate")} placeholder="Duration" name="startDate" id="duration" />
								<input type="date" className="workinput55" {...register("endDate")} placeholder="Duration" name="endDate" id="duration" />
					</div>

					<div className='worklabelinput' id='buissol'>
						<label>Business Solution</label>
						<textarea className="worktext6" {...register('businessSolution')} name="businessSolution" placeholder="Describe Business Solution here... " id="buisness_sol" cols="35" rows="2" ></textarea> 	
					</div>

					
					<div className='worklabelinput'>
						<label>Technology Stack</label>
						<select className="workselect7" name="techStack" id="tech" {...register("techStack")} multiple size='2'>
							<option value="" disabled >Technology..</option>
							<option value="Python">Python</option>
							<option value="React JS">React JS</option>
							<option value="Java">Java</option>
							<option value="C++">C++</option>
						</select>
					</div>

					<div className='worklabelinput'>
						<label>Project Responsibilities</label>
						<textarea className="worktext8" type="text" {...register("projectResp")}  name="projectResp" id="projectResp" cols="35" rows="2" placeholder="Write in bulleted list" ></textarea> 
						<br></br>
					</div>
					{/* <input type="checkbox" name="hobby" value="sleeping">Sleeping</input>
					<input type="checkbox" name="hobby" value="eating">Eating</input> */}

				</div>
			</div>

			
			<a href="" className="addMoreWork" onClick = {addWorkExp}>&#43; Add More Work</a>

			<input className="workexpsave" type="submit" name="workexp" value="Save" id='btn'/>
    	</form>
		<button className="workexpcancel">Cancel</button>
		<button className="workexpsubmit">&rarr;</button>
		<Template />
	</>
	
  );
}

export default WorkExp;
