

import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { selectData } from "../Actions/DataAction";
import Menu from "../icons/icons_FEtask/Display.svg"

const NavBar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [group, setGroup] = useState(localStorage.getItem("group") || "status");
  const [order, setOrder] = useState(localStorage.getItem("order") || "priority");
  
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);

  const handleSelectChange = (e, isGroup) => {
    const value = e.target.value;
    if (isGroup) {
      setGroup(value);
      localStorage.setItem("group", value);
    } else {
      setOrder(value);
      localStorage.setItem("order", value);
    }
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const data = group === "user" ? { allTickets, allUser } : allTickets;
    dispatch(selectData(group, data, order));
  }, [group, order, allTickets, allUser, dispatch]);

  return (
    <div className="top-header" style={{ paddingLeft: "13px" }}>
      <button
        className="p-10 f-16 btn"
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <img src={Menu} alt="Canceled" className="icon" /> &nbsp; Display
      </button>
      
      {isDropdownVisible && (
        <div className="dropOnClick flex-gap-10 p-10">
          <div className="selectGroup flex-sb">
            <span className="label">Grouping</span>
            <select
              value={group}
              onChange={(e) => handleSelectChange(e, true)}
              className="selectStyle"
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          
          <div className="selectGroup flex-sb">
            <span className="label">Ordering</span>
            <select
              value={order}
              onChange={(e) => handleSelectChange(e, false)}
              className="selectStyle"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
