import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar";
import "../../css/AboutMe.css";
import Template from "../Template";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

function AboutMe() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const aboutMeList = [];
   
  
 

  const customFunction = (d) => {
    console.log(d);
    sessionStorage.setItem("aboutme", JSON.stringify(d));
    const data = JSON.parse(sessionStorage.getItem("aboutme"));
    // console.log(sessionStorage.key(0));
    // console.log(data);
    sessionStorage.setItem("abtt", d.about);
    sessionStorage.setItem("point", d.points);
    const aboutPara = data.about;
    const aboutpoints = data.points;

    // const elem = "<li>"+aboutpoints+"</li>";
    document.querySelector(".aboutMeText").innerHTML = aboutPara;
    document.querySelector(".aboutMepoints").innerHTML = aboutpoints;
    const aboutMeList = [];

    const ele = document.querySelectorAll(".abouttext2");

    console.log(ele);
    ele.forEach(e => {

      aboutMeList.push(e.value);

    })
    console.log(aboutMeList);
    const profileid = sessionStorage.getItem('profileid');

    console.log(d);

    axios.put(`http://localhost:8080/mydetails/aboutme/${profileid}`, {

      aboutme: d.about,

      sub_about_me: aboutMeList

    }).then(res => {

      console.log(res.data);

    })}



    // const ele = document.querySelectorAll(".abouttext2");
    // console.log(ele)
    // ele.forEach((e) => {
    //   aboutMeList.push(e.value);
    // });
    

    // const profileid = sessionStorage.getItem("profileid");

    // axios
    //   .put(`http://localhost:8080/mydetails/aboutme/${profileid}`, {
    //     aboutme: d.about,

    //     sub_about_me: aboutMeList
    //   })
    //   .then((res) => {
    //     console.log([d.points]);

    //     console.log(res.data);
      
    
    
  
  const addBulletPoint = (e) => {
    // const inp = document.createElement("input");

    // inp.setAttribute("type", "text");

    // inp.setAttribute("name", "points[]");

    // inp.setAttribute("placeholder", "Write in bulleted list");

    // inp.setAttribute("object", "{...register(about)}");

    // inp.setAttribute("class", "abouttext2");

    // document.querySelector(".aboutinputlabel").append(inp);

    const clonedElement = e.target.parentElement.previousElementSibling.children[0].cloneNode();
    e.target.parentElement.previousElementSibling.appendChild(clonedElement);
    
  };
  
     

     
  return (
    <>
      <div>
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
      </div>
      <Sidebar />
      <div className="aboutallform">
        <form
          id="about"
          name="aboutMe"
          onSubmit={handleSubmit((data) => customFunction(data))}
        >
          <div className="aboutinputlabel1">
            <label className="aboutlabel1" for="aboutme">
              About Me <span className="infoicon">&#9432;</span>
            </label>
            <textarea
              className="abouttext1"
              {...register("about")}
              id="about"
              name="about"
              placeholder="Write something about yourself"
              cols="30"
              rows="10"
              onChange={handleSubmit((data) => customFunction(data))}
            ></textarea>
          </div>

          <div className="workExperiences">
            <div className="wordExpDiv">
              <div className="aboutinputlabel">
                <input
                  className="abouttext2"
                  {...register("points[]")}
                  type="text"
                  name="points[]"
                  placeholder="Write in bullet list"
                />
              </div>
              <div className="q">
                <button type="button" className="btn" onClick={addBulletPoint}>
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="aboutsubmit">
            <input
              className="aboutsave"
              type="submit"
              name="aboutme"
              value="Save"
            />
          </div>
        </form>
      </div>
      <Template />
    </>
  );
}

export default AboutMe;




