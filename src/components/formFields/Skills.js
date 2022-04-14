import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar";
import "../../css/Skills.css";
import Template from "../Template";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import axios from "axios";
function Skills() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const customFunction = (d) => {
	 
    	sessionStorage.setItem("skills", JSON.stringify(d));
    	const data = JSON.parse(sessionStorage.getItem('skills'))
    	// console.log(sessionStorage.key(0))
    	console.log(data)
        const aboutPara=data.skill;
		console.log(aboutPara);
        document.querySelector(".skillsText").innerHTML=aboutPara;
       sessionStorage.setItem("skills",data.Skills)
       const skill = data.skills;

    let l1 = [];

    let l2 = [];

    let l3 = [];

    let skills = d.skill;
	
    skills.forEach((element) => {
      let arr = element.split("#");

      l1.push(arr[0]);

      l2.push(arr[1]);
    });

  

    for (let i = 0; i < l1.length; i++) {
      l3[i] = [];

      l3[i][0] = l1[i];

      l3[i][1] = l2[i];
	 

      
    }
    
	console.log(l3);
	sessionStorage.setItem("ski",l3);
	
    const profileid = sessionStorage.getItem("profileid");
    console.log(profileid);

    axios
      .put(`http://localhost:8080/resume/mydetails/category/${profileid}`, {
        category: l3
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <Sidebar />
      <div className="buttons">
        <button className="button1">Cancel</button>
        <button
          className="button2"
          onClick={handleSubmit((data) => customFunction(data))}
        >
          Save
        </button>
        <button className="arrow">
          <FaArrowRight />
        </button>
      </div>
      <div className="skillallform">
        <h6 className="skillheading">
          Skill & Proficiencies<span className="infoicon">&#9432;</span>
        </h6>
        <input class="search" type="text" placeholder="Search.."></input>
        <i className="searchicon">
          <FaSearch />
        </i>
        <form onSubmit={handleSubmit((data) => customFunction(data))}>
          <table border="1" className="skillTable">
            <thead>
              <tr>
                <th>Select</th>
                <th className="tablecol1">
                  Category <FaFilter />
                </th>
                <th className="tablecol2">
                  Skill <FaFilter />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key={0}>
                <td>
                  <input
                    {...register("skill")}
                    type="checkbox"
                    name="skill[]"
                    value="Business Analysis # Agile"
                  />
                </td>
                <td>Business Analysis</td>
                <td>Agile</td>
              </tr>
              <tr key={1}>
                <td>
                  <input
                    {...register("skill")}
                    type="checkbox"
                    name="skill[]"
                    value="Business Analysis # Business Requirement Doc"
                  />
                </td>
                <td>Business Analysis</td>
                <td>Business Requirement Doc</td>
              </tr>
              <tr key={2}>
                <td>
                  <input
                    {...register("skill")}
                    type="checkbox"
                    name="skill[]"
                    value="Business Analysis # Flow Diagrams"
                  />
                </td>
                <td>Business Analysis</td>
                <td>Flow Diagrams</td>
              </tr>
              <tr key={3}>
                <td>
                  <input
                    {...register("skill")}
                    type="checkbox"
                    name="skill[]"
                    value="Business Analysis#Wireframe"
                  />
                </td>
                <td>Business Analysis</td>
                <td>Wireframe</td>
              </tr>
              <tr key={4}>
                <td>
                  <input
                    {...register("skill")}
                    type="checkbox"
                    name="skill[]"
                    value="Business Analysis #Other"
                  />
                </td>
                <td>Business Analysis</td>
                <td>Other</td>
              </tr>
            </tbody>
          </table>

          <div className="skillsubmit">
            <input
              className="skillsave"
              type="submit"
              name="skills"
              value="Save"
            />
          </div>
        </form>
      </div>
      <Template />
    </>
  );
}

export default Skills;
