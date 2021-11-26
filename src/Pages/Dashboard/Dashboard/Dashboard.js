
import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <nav className="sidebar">
      <div className="custom_menu">
        <button type="button" className="btn btn_collapse ">
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <h2>PSTU PGS</h2>
      <ul className="list-unstyled components mb-5">
        <li className="active">
          <NavLink to="/">
            <span className="fa fa-home mr-2"></span> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/userlist">
            <span className="fa fa-user mr-3"></span> User List
          </NavLink>
        </li>
        <li>
          <NavLink to="/add_news">
            <i class="far fa-plus-square"></i> Add News
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Dashboard;
