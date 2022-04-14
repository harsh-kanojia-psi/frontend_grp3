import { useState } from "react";
import { useForm } from "react-hook-form";
import '../../css/MyDetails.css';
import Sidebar from "../Sidebar";
import Template from "../Template";
import axios from 'axios'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AboutMe from "./AboutMe";
import logo from '../../css/picture_69.jpeg';

export default function MyDetails() {
  // console.log(props.formfields)
  const[color,setcolor]=useState("Black");
  
  const { register, handleSubmit } = useForm();
  //const [details, setDetails] = useState("");
    
    
    
    const customFunction = (d) => {
    sessionStorage.setItem("mydetails", JSON.stringify(d))
    const data = JSON.parse(sessionStorage.getItem('mydetails'))
    console.log(sessionStorage.key(0))
    console.log(data)
    const name = data.name;
    const exp = data.experience;
    const roles = data.role;
    sessionStorage.setItem("name",name);
    sessionStorage.setItem("exp",exp);
    sessionStorage.setItem("role",roles);
    document.querySelector(".nameHead").innerHTML = name;
    document.querySelector(".expLabel").innerHTML = exp;
    document.querySelector(".roleLabel").innerHTML = roles.join(" | ");
    console.log(d);

    axios.post('http://localhost:8080/mydetails', {

      name: d.name,

      role: d.role,

      exp: d.experience,

      userid: 3

    }).then(res => {
      console.log(res.data);
     

      sessionStorage.setItem("profileid",res.data);



    })
    
  }
  return (
    <>
      <Sidebar />
      
      <div className="buttons">
      
				<button className="button1" >Cancel</button>
				<button className="button2" onClick={handleSubmit((data) => customFunction(data))}>Save</button>
				<NavLink to="/AboutMe">
           <button className="arrow" ><FaArrowRight/></button>
	   	  </NavLink>
    	</div>
      
      <div className="bottomSection"/>
<div className="circle">
     {/* <img src={logo} alt="null"/> */}
  </div> 
      <div className="allform">
        <form onSubmit={handleSubmit((data) => customFunction(data))}>
          <img src={logo} alt="null"/>
          <div className="labelinput">
            <label className="label" for="name">Name:</label>
            <input className="input1" {...register("name")} placeholder="Your name" name="name" id="name" required />
            <input type="color" className="color" id="exampleColorInput" value="#563d7c" />
          </div>

          <div className="labelinput">
            <label className="label" for="role">Role <span className='infoicon'>&#9432;</span></label>
            <select className="select" name="role" id="role" {...register("role")} multiple>
              <option value="" >Add Role</option>
              <option value="business analyst">Business Analyst</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="qa">QA</option>
            </select>
          </div>

          <div className="labelinput">
            <label className="label" for="experience">Experience:</label>
            <input className="input2" {...register("experience")} placeholder="Total Experience" name="experience" id="experience" required/>
          </div>

          <div className="submit">
            <input className="save" type="submit" name="mydetails" value="Save" />
          </div>
        </form>
      </div>
    
      <Template />
    </>
  );
}
