import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const name = localStorage.getItem("name");

const Navbar = () => {
 
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Welcome {name}
          </a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;