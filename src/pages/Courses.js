import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Courses = () => {
  return (
    <div
      id="Resume"
      className="mx-12 mt-60 pb-10 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Courses
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        
       
        





        

        <div className="flex flex-col pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">Computer Science</code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />• Introduction to Computing    
              <br />• Data Structures and Algorithms
              <br />• Computational Physics 
            </code>
          </div>
        </div>
        <div className="flex flex-col pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">Data Science and Machine Learning</code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />•  Convex Optimization
              <br />•  Introduction to AI and ML
              <br />•  Regression Analysis
              <br />•  Artifcial Intelligence
              <br />•  Data Analytics
            </code>
          </div>
        </div>

        <div className="flex flex-col pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">Mathematics and Statistics</code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />•  Matrix Analysis
              <br />•  Differential Equations
              <br />•  Probability
              <br />•  Vector Calculus
            </code>
          </div>
        </div>



        <div className="flex flex-col pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">Creative</code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />•  Indian Classical Music
              <br />•  Anthropology and Media
              <br />•  Intro to Creative Writing
            </code>
          </div>
        </div>

        <div className="flex flex-col pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">Entrepreneurship </code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />•  Entrepreneurship Opportunities in Climate Change
              <br />•  HR and Leadership
              <br />•  Introductory Economics
            </code>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Courses;
