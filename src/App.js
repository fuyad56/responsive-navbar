import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShuffle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center mx-[100px] py-4">
      <div>
        <h1 className="text-4xl font-bold">Logo</h1>
      </div>

      <ul className="hidden md:flex justify-between items-center w-[600px] text-md font-medium">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/Carrier">Carrier</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>

      <button onClick={handleShuffle} className="text-xl">
        {isOpen ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} className="md:hidden" />
        )}

        {isOpen && (
          <ul
            className={
              isOpen
                ? "fixed left-0 top-20 w-[40%] text-md font-medium shadow-lg py-6 h-full border rounded-e-xl slide-in"
                : "slide-out w-0"
            }
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/Carrier">Carrier</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        )}
      </button>
    </nav>
  );
};

export default App;
