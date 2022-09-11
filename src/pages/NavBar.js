import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { CogIcon, XIcon } from "@heroicons/react/solid";

const JSIcon = require("../assets/icons/JSIcon.png");

const Container = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

const ActiveContainer = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

const NavBar = ({ showPage, setShowPage }) => {
  const [hidePage, setHidePage] = useState([]);

  return (
    <div className="flex flex-row h-full">
      {showPage === "home" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("home");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Home.js
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("home");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Home.js
        </Container>
      )}
      {hidePage.includes("about") ? null : showPage === "about" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("about");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          About.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "about"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("about");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          About.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "about"]);
            }}
          />
        </Container>
      )}


    {hidePage.includes("work") ? null : showPage === "work" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("work");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Work_Experience.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "about"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("work");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Work_Experience.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "work"]);
            }}
          />
        </Container>
      )}



{hidePage.includes("projects") ? null : showPage === "projects" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("projects");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Projects.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "about"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("projects");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Projects.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "projects"]);
            }}
          />
        </Container>
      )}




   

      {hidePage.includes("skills") ? null : showPage === "skills" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("skills");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Skills.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "skills"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("skills");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Skills.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "skills"]);
            }}
          />
        </Container>
      )}


      
      {hidePage.includes("courses") ? null : showPage === "courses" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("courses");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Courses.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "courses"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("courses");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          Courses.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "courses"]);
              console.log(hidePage);
            }}
          />
        </Container>
      )}



{hidePage.includes("pors") ? null : showPage === "pors" ? (
        <ActiveContainer
          onClick={() => {
            setShowPage("pors");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          PORs.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "pors"]);
            }}
          />
        </ActiveContainer>
      ) : (
        <Container
          onClick={() => {
            setShowPage("pors");
          }}
        >
          <img
            src={JSIcon}
            alt="JS Icon"
            className="w-7 mr-1  text-yellow_vs"
          />
          PORs.js
          <XIcon
            className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
            onClick={(e) => {
              e.stopPropagation();
              setShowPage("home");
              setHidePage(prevState=>[...prevState, "pors"]);
            }}
          />
        </Container>
      )}


      
    </div>
  );
};
export default NavBar;
