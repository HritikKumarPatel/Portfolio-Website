import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const KaggleLogo = require("../assets/logos/KaggleLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");
const GmailLogo = require("../assets/logos/GmailLogo.png");
const Gmail_Logo_64px = require("../assets/logos/Gmail_Logo_64px.png");
const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const PythonLogo = require("../assets/logos/PythonLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const Gmail_Logo_32px = require("../assets/logos/Gmail_Logo_32px.png");
const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);
  const [showData, SetShowData] = useState(true);


  const WebList = () => (
    <div>
      
      <a target="_blank" href="https://breaking-bad-casting.netlify.app">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={JsLogo}
            alt="TS Icon"
            className="w-5 mr-1  ml-5 text-yellow_vs"
          />
          <p>Breaking API</p>
        </div>
      </a>
      <a target="_blank" href="https://infobase-rooms.netlify.app">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={JsLogo}
            alt="JS Icon"
            className="w-5 mr-1  ml-5 text-yellow_vs"
          />
          <p>HomeFind Helper</p>
        </div>
      </a>
      
    </div>
  );

  const DataList = () => (
    <div>
      <a target="_blank" href="https://github.com/HritikKumarPatel/User-Database-System">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={PythonLogo}
            alt="JS Icon"
            className="w-5 mr-1  ml-5 text-yellow_vs"
          />
          <p>User Database System</p>
        </div>
      </a>
      
      
      <a target="_blank" href="https://github.com/HritikKumarPatel/Price-predictor">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60">
          <img
            src={PythonLogo}
            alt="JS Icon"
            className="w-5 mr-1  ml-5 text-yellow_vs"
          />
          <p>House Price Predictor</p>
        </div>
      </a>
    </div>
  );


  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Web</p>
            </div>
            {showWebList ? <WebList /> : null}
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowData(!showData)}
            >
              {showData ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Data Science and Python</p>
            </div>
            {showData ? <DataList /> : null}

          </>
        ) : null}





        
        {/* <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowInternList(!showInternList)}
        >
          {showInternList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Interships</p>
        </div> */}
        {/* {showInternList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Web</p>
            </div>
            {showWebList ? <WebList /> : null}
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowData(!showData)}
            >
              {showData ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Data Science and Python</p>
            </div>
            {showData ? <DataList /> : null}

          </>
        ) : null} */}


        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a target="_blank" href="https://github.com/HritikKumarPatel">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="scale-50 hover:scale-75 ease-in duration-150 text-yellow_vs "
              />
            </a>
            <a target="_blank" href="mailto:hritikpatel4775@gmail.com">
              <img
                src={MailLogo}
                alt="Linkedin Logo"
                className="scale-50 hover:scale-75 ease-in duration-150 text-yellow_vs "
              />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/hritik-kumar-patel-656201210/">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="scale-50 hover:scale-75 ease-in duration-150 text-yellow_vs "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
