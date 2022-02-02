import React, { useState } from "react";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";





export const Note = () => {
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState([]);

  const submitComment = (e) => {
    e.preventDefault();
    const newComment = { comment: comment };
    setAllComment([newComment]);
  };
  return (
  <div>


    <div className="container">
      <form  onSubmit={submitComment} class="row g-3">
      <h2 id="feedback"><u>Feedback</u></h2>
        <div  class="col-auto">
          <label for="inputPassword2" class="visually-hidden"></label>
          <input
            className="text-center"
            type="text"
            id="inputPassword2"
            class="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a Note for me..."
          />
        </div>
        <div className="text-center" class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Add Note
          </button>
        </div>
        <div className="loved">
          <h3>Loved My Profile????</h3>
          <p>Share some love by clicking on the button below...</p>
          <div className="heart">
          <button style={{color:"red"}} type= "button"onClick={(()=>setCount(count+1))}><BsHeartFill/> {count}</button>
          </div>

        </div>
      </form>
      <div>
      </div>
        {allComment.map((curCom) => {
          return (
            <div className="showDataStyles">
              <p>{curCom.comment}</p>
            </div>
          );
        })}
      </div>
      <div
       classNmae="text-center"
        class="card text-dark bg-warning mb-3"
        style={{ maxWidth: "70rem" ,height: "30rem"}}>
      <h2 id="contact"><u>Contact</u></h2>

          

        <div class="card-header">
         <div><a href="#home">Home</a></div> 
          <div><a href="#about">About</a></div>
         <div> <a href="#why-code">WhyCode</a></div>
          <div><a href="#skills">Skills</a></div>
          <div><a href="#projects">Projects</a></div>
         <div> <a href="#experience">Experience</a></div>
          <div><a href="#feedback">Feedback</a></div>
          <div><a href="#contact">Contact</a></div>
        </div>
        <div class="card-body">
          <h5 class="card-title">jyotichaurasia647@gmail.com</h5>
          <p class="card-text">
          
              <div className="mt-10">
              <a href="https://www.linkedin.com/in/jyoti96chaurasia/"className="mx-3">
                <GrLinkedin/>
              </a>
            
              <a href="https://github.com/jyoti96chaurasia"className="mx-3">
                <BsGithub/>
              </a>
              <a href= "7800600943" className="mx-3">
                <FiPhoneCall/>
              </a>
            </div>
            <div>
              Made in India by Jyoti Chaurasia.
            </div>


          </p>
        </div>
      </div>
    </div>
  );
};