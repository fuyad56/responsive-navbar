import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const App = () => {
  const [menu, setMenu] = useState(false);

  const handleShuffle = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-[#F1EFEF] shadow-lg">
      <div className="flex justify-between items-center py-4 md:mx-[150px] mx-[75px]">
        <div className="text-2xl font-bold cursor-pointer md:4xl">
          <h1>Doctors Portal</h1>
        </div>

        <ul className="hidden md:flex justify-between items-center w-[400px] text-md font-medium">
          <li>Home</li>
          <li>Services</li>
          <li>Carrier</li>
          <li>About</li>
        </ul>

        <ul className="hidden md:flex justify-between items-center w-[170px] text-md font-medium">
          <li className="border py-1 px-3 bg-[#7D7C7C] text-gray-100 rounded hover:rounded-full transition-color duration-100">
            Contact
          </li>
          <li className="border py-1 px-3 bg-[#7D7C7C] text-gray-100 rounded hover:rounded-full transition-color duration-100">
            Login
          </li>
        </ul>

        <ul>
          <li onClick={handleShuffle} className="block md:hidden text-xl">
            {!menu ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faXmark} />
            )}

            {menu && (
              <div className="fixed left-[250px] top-[250px] shadow-xl rounded-xl py-6 px-24 text-center border duration-500 ease-in-out">
                <ul className="flex flex-col justify-between items-center h-[250px]">
                  <li className="border-b-2" >Home</li>
                  <li className="border-b-2" >Services</li>
                  <li className="border-b-2" >Carrier</li>
                  <li className="border-b-2" >About</li>
                  <li className="border py-1 px-3 bg-[#7D7C7C] text-gray-100 rounded  hover:rounded-full transition-color duration-100">
                    Contact
                  </li>
                  <li className="border py-1 px-3 bg-[#7D7C7C] text-gray-100 rounded  hover:rounded-full transition-color duration-100">
                    Login
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default App;
