import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Projects = () => {
  return (
    <div
      id="Resume"
      className="mx-12 mt-60 pb-10 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Projects
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        
       
        





        

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">User Database System</code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />• Developed a <b className="text-blue_vs"></b>console-based application for user management that can store information about users.    
              <br />• This project stores data in <b className="text-blue_vs">MySQL</b> and utilizes <b className="text-blue_vs">Python</b> to create a connection between the user and the database on the local workstation.
              <br />• <b className="text-lightblue_vs"><a target="_blank" href="https://github.com/HritikKumarPatel/User-Database-System">Github Link</a></b>
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">Breaking API</code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />•  In this project, we are fetching information about the cast of a very popular show <b className="text-blue_vs">Breaking Bad</b>.
              <br />•  <b className="text-blue_vs">Axios</b>, <b className="text-blue_vs">ReactJS</b>, and <b className="text-blue_vs">CSS</b> were used.
              <br />• <b className="text-lightblue_vs"><a target="_blank" href="https://github.com/HritikKumarPatel/Breaking-Api">Github Link</a></b>
              <br />• <b className="text-lightblue_vs"><a target="_blank" href="https://breaking-bad-casting.netlify.app">Project Demo Link</a></b>
            </code>
          </div>
        </div>

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">HomeFind Helper</code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />•  We can flter houses acc. to features like rent price, no. of rooms, furnish type, max area, purpose(for rent or sale), etc.
              <br />•  <b className="text-blue_vs">NextJS</b>, <b className="text-blue_vs">ReactJS</b>, <b className="text-blue_vs">RapidAPI</b>, <b className="text-blue_vs">JavaScript</b>, and <b className="text-blue_vs">CSS</b> were used.
              <br />• <b className="text-lightblue_vs"><a target="_blank" href="https://github.com/HritikKumarPatel/InfoBase-Hotel-Rooms">Github Link</a></b>
              <br />• <b className="text-lightblue_vs"><a target="_blank" href="https://infobase-rooms.netlify.app">Project Demo Link</a></b>
            </code>
          </div>
        </div>


        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">House Price Predictor</code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />•  I have built a Price Predictor, which tells us the price of any area with the help of 13 attributes given about that area. 
              <br />•  I have compared the output of three regression models:- <b className="text-blue_vs">Linear Regression</b>, <b className="text-blue_vs">Random Forest Regression</b>, and <b className="text-blue_vs">Decision Tree regression</b>, and returned the best result for our fnal answer.
              <br />•  <b className="text-blue_vs">Jupyter Notebook</b>, and <b className="text-blue_vs">Python</b> were used.
              <br />•  <b className="text-lightblue_vs"><a target="_blank" href="https://github.com/HritikKumarPatel/Price-predictor">Github Link</a></b>.
            </code>
          </div>
        </div>




      </div>
    </div>
  );
};

export default Projects;
