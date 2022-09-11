import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="mx-12 mt-60 pb-20 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>




      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">B.Tech in Electrical Engineering</code>
            <br />
            <code className="text-sm text-lightblue_vs">
              Indian Institute of Technology, Hyderabad
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • 2019 - Present, 7.74 cgpa
            </code>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
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
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
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

        
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Internships</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Samsung R&D Delhi | SDE Intern</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Noida, India{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• July 2022 - August 2022</code>
            <br />
            <code className="text-sm">
              <br />• I was assigned to set up one-step and multistep form verifcation for users and sync the backend data provided by my
team members to the front end.
              <br />• Techniques used for form authentication were logical, JWT auth access, and Auth0. 
              <br />• The tools used were <b className="text-blue_vs">ReactJS</b>, <b className="text-blue_vs">NodeJS</b>, <b className="text-blue_vs">ExpressJS</b>, and <b className="text-blue_vs">Material UI</b>.
              
            </code>
            
          </div>
          
        </div>


        
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">NKGONLINE.COM | Web Developer Intern</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Remote{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Jan 2021 - April 2021</code>
            <br />
            <code className="text-sm">
              <br />• Designed web pages on Figma and Adobe XD.
              <br />• Then converted them to functional web pages using using <b className="text-blue_vs">HTML</b>, <b className="text-blue_vs">CSS</b>, and <b className="text-blue_vs">Javascript</b>.
              <br />• Got experience with <b className="text-blue_vs">WordPress</b> here.
              
            </code>
            
          </div>
          
        </div>



        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">STYX MEDIA LLC | Web Developer Intern </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Remote{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Feb 2021 - April 2021</code>
            <br />
            <code className="text-sm">
              <br />• Learned design sense here and developed web pages. 
              <br />• Gained a lot of knowledge regarding perfect color blending, text size of different titles and content, and their calligraphy for different elements present in the website.
              <br />• The tools used were <b className="text-blue_vs">HTML</b>, <b className="text-blue_vs">Javascript</b>, <b className="text-blue_vs">Elementor Page Builder</b>, and <b className="text-blue_vs">WordPress</b>.
              
            </code>
            
          </div>
          
        </div>

        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Scholastic Achievements</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br />• Jee Mains Rank - 2322, Jee Advanced Rank - 4775. 
              <br />• Secured rank of 114 of 89k+ participants in Round 1 of IICC - Innovate India Coding Championship organized by Coding Ninjas.
              <br />• Solved 200+ DSA questions on LeetCode(hri_pra) and 250+ DSA questions on InterviewBit(hritik-patel_214).
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
