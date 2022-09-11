import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";



const About = () => {
  return (
    <div
      id="About"
      className="mx-12 pb-10 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>

        




      <div className="pt-7 text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-col">
          <div className="pb-3 w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="pb-3 w-3/4">
            <code className="text-blue_vs">B.Tech in Electrical Engineering</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Indian Institute of Technology, Hyderabad
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2019 - Present, 7.74 cgpa
            </code>
          </div>
        </div>
        <div className="flex flex-row">
          
          <div className="pb-3 w-3/4">
            <code className="text-blue_vs">Intermediate</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Delhi Public School, Varanasi (C.B.S.E)
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2018 - 2019, 95.2%
            </code>
          </div>
        </div>
        <div className="flex flex-row">
          
          <div className="w-3/4">
            <code className="text-blue_vs">High School</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Delhi Public School, Varanasi (C.B.S.E)
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2016 - 2017, 10 cgpa
            </code>
          </div>
        </div>

        
        


       




        <div className="flex flex-col pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Achievements</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• <b className="text-blue_vs">Jee Mains</b> <b className="text-lightblue_vs">Rank</b> - <b className="text-brown_vs">2322</b>, <b className="text-blue_vs">Jee Advanced</b> <b className="text-lightblue_vs">Rank</b> - <b className="text-brown_vs">4775</b>. 
              <br />• Secured rank of <b className="text-brown_vs">114</b> out of <b className="text-brown_vs">89k+</b> participants in Round 1 of <b className="text-lightblue_vs">IICC - Innovate India Coding Championship</b> organized by <b className="text-blue_vs">Coding Ninjas</b>.
              <br />• Solved <b className="text-brown_vs">200+</b> <b className="text-lightblue_vs">DSA questions</b> on <b className="text-blue_vs"><a target="_blank" href="https://leetcode.com/hri_pra/">LeetCode</a></b> and <b className="text-brown_vs">250+</b> <b className="text-lightblue_vs">DSA questions</b> on <b className="text-blue_vs">InterviewBit</b>.
            </code>
          </div>
        </div>

        <div className="flex flex-col pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">Hobbies and Extracurricular Activities</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Participated in different drives like <b className="text-blue_vs">Plantation Drives</b> and <b className="text-blue_vs">Clean India Drives</b> organized by NSS in our college.
              <br />•  I love to play <b className="text-blue_vs">guitar</b> in my leisure time. <b className="text-blue_vs"></b>Swimming is my favorite sport, followed by <b className="text-blue_vs">cricket</b> and <b className="text-blue_vs">basketball</b>.
            </code>
          </div>
        </div>


      </div>
      </div>
    </div>
  );
};

export default About;
