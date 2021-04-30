import '../CSS/navbar.css'
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import Logo from "../../images/logo.jpg"


function Navbar(){

     const [isOpen, setisOpen] =useState(false);


     function handleClick() {
    setisOpen(!isOpen);
  }
    
    return (
      <>
        <nav className="flex items-center navb  pd-10">
          <Link to="/home">
            <img src={Logo} alt="logo" className="px-10 py-5"></img>
          </Link>
          <button
            type="button"
            className="block md:hidden absolute right-6"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>

          <div className=" absolute hidden md:block  right-10 text-xl">
            <ul className="block md:flex  list-none flex-row">
              <Link
                to="/"
                className="hover:scale-110 transition text-black duration-500 ease-in-out transform hover:-translate-y-1"
              >
                <li>
                  <i class="fas fa-backward"></i> INTRO
                </li>
              </Link>
              <Link
                to="/home"
                activeClassName="active"
                onlyActiveOnIndex
                className="hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1"
              >
                <li> HOME</li>
              </Link>
              <Link
                to="/project"
                activeClassName="active"
                onlyActiveOnIndex
                className="hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1"
              >
                <li> PROJECT</li>
              </Link>
              <Link
                to="/curr"
                activeClassName="active"
                onlyActiveOnIndex
                className="hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1"
              >
                <li> ACHIEVEMENTS</li>
              </Link>
            </ul>
          </div>
        </nav>

        {isOpen ? (
          <div className="  w-screen flex py-2 px-6 justify-start items-center navb text-xl">
            <ul className="block md:flex nav-pills  list-none flex-row">
              <Link
                exact
                to="/"
                className="hover:scale-110 transition text-black duration-500 ease-in-out transform hover:-translate-y-1"
              >
                <li>
                  <i class="fas fa-backward"></i> INTRO
                </li>
              </Link>
              <Link
                exact
                to="/home"
                className="hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1"
              >
                <li> HOME</li>
              </Link>
              <Link
                exact
                to="/project"
                className="hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1"
              >
                <li> PROJECT</li>
              </Link>
              <Link
                exact
                to="/curr"
                className="hover:scale-110 transition duration-500 ease-in-out transform hover:-translate-y-1"
              >
                <li> ACHIEVEMENTS</li>
              </Link>
            </ul>
          </div>
        ) : null}
      </>
    );
}

export default Navbar