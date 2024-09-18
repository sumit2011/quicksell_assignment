
import React from "react";
import { useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "./card";
import "./dashboard.css"; // Keep most of the styling here

import  Backlog  from "../icons/icons_FEtask/Backlog.svg";
import  InProgress  from "../icons/icons_FEtask/in-progress.svg";
import  Todo  from "../icons/icons_FEtask/To-do.svg";
import  Done  from "../icons/icons_FEtask/Done.svg";
import Cancel from "../icons/icons_FEtask/Cancelled.svg";

import NoPriority from "../icons/icons_FEtask/No-priority.svg";
import Urgent from "../icons/icons_FEtask/SVG - Urgent Priority colour.svg";
import High from "../icons/icons_FEtask/Img - High Priority.svg";
import Medium from "../icons/icons_FEtask/Img - Medium Priority.svg";
import Low from "../icons/icons_FEtask/Img - Low Priority.svg";

import ThreeDot from "../icons/icons_FEtask/3 dot menu.svg";
import AddBt from "../icons/icons_FEtask/add.svg";


const getIconForStatus = (title) => {
  switch (title) {
    case "Backlog":
      return <img src={Backlog} alt="Backlog Icon" className="icon" />;
    case "Todo":
      return <img src={Todo} alt="Todo" className="icon" />;
    case "In progress":
      return <img src={InProgress} alt="InProgress" className="icon" />;
    case "Done":
      return <img src={Done} alt="Done" className="icon" />;
    default:
      return <img src={Cancel} alt="Canceled" className="icon" />;
  }
};


const getIconForPriority = (title) => {
  switch (title) {
    case "No priority":
      return <img src={NoPriority} alt="Done" className="icon" />;
    case "Urgent":
      return <img src={Urgent} alt="Done" className="icon" />;
    case "High":
      return <img src={High} alt="Done" className="icon" />;
    case "Medium":
      return <img src={Medium} alt="Done" className="icon" />;
    case "Low":
      return <img src={Low} alt="Done" className="icon" />;
    default:
      return <img src={Cancel} alt="Canceled" className="icon" />;
  }
};




const DashBoard = () => {
  const isStatus = localStorage.getItem("group") === "status";
  const isPriority = localStorage.getItem("group") === "priority";
  const { selectedData, user } = useSelector((state) => state.SelectDataReducer);

  return (
    selectedData && (
      <div className="dashContainer">
        {selectedData.map((group, index) => {
          return (
            <div key={index} className="dashCardContainer">
              <div className="dashCardHeading">
                <div className="leftView">
                  {user ? (
                    <div className="user-title">
                      {/* {getIconForUsers(group[index].title)} */}
                    </div>
                  ) 
                  : isStatus ? (
                    <div className="iconContainer">
                      {getIconForStatus(group[index].title)}
                    </div>
                  ) 
                  : isPriority ? (
                    <div className="priorityTag">
                      {getIconForPriority(group[index].title)}
                    </div>
                  ) : null}
                  <span>{group[index].title} &nbsp;{group[index].value.length}</span>
                </div>
                <div className="rightView">
                <img src={AddBt} alt="add button" className="icon" /><img src={ThreeDot} alt="Canceled" className="icon" />
                </div>
              </div>
              <div className="dashList">
                {group[index].value.map((item) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    tag={item.tag}
                    status={item.status}
                    priority={item.priority}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DashBoard;
