import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const PORs = () => {
  return (
    <div
      id="Resume"
      className="mx-12 mt-60 pb-10 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Positions of Responsibility(PORs)
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">Web Developer at Dining IITH</code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />•  Helped <b className="text-blue_vs">Dining IITH</b> (college body for maintaining dining-related things) maintain the data in the database with the actual data and avoid any discrepancy between the user and the system.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1.5/4">
            <code className="text-yellow_vs">Placement Coordinator (Office of Career Services, IIT Hyderabad)</code>
          </div>
          <div className="w-2.5/4">
            <code className="text-sm">
              <br />•  Working as a direct point of contact between students and the companies so that the hiring process is smooth. 
            </code>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default PORs;
