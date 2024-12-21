import React, { useState } from "react";

const Navbar = () => {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <div
        className="bg-gray-800 text-white p-4 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)} // Mouse enters top div
        onMouseLeave={() => setIsHovered(false)} // Mouse leaves top div
      >
        <a href="#">Products</a>
      </div>

      {/* The bottom div with links */}
      {isHovered && (
        <div
          className="absolute top-full left-0 bg-gray-700 text-white p-4 border border-gray-600"
          onMouseEnter={() => setIsHovered(true)} // Mouse enters bottom div
          onMouseLeave={() => setIsHovered(false)} // Mouse leaves bottom div
        >
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
