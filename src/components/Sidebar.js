import React from "react";

const Sidebar = ({ handleClick, search }) => {
  const style = (search && "transform scale-105 underline") || "";
  return (
    <div className=" w:2/5 sm:w-1/3 lg:w-1/6 bg-green-200 ">
      <aside>
        <ul className="flex flex-wrap sm:block w-full pt-20">
          <li
            className=""
            onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
          >
            <button className="list-item">Dogs</button>
          </li>
          <li
            className=""
            onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
          >
            <button className="list-item">Cats</button>
          </li>
          <li
            className=""
            onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
          >
            <button className="list-item">Computers</button>
          </li>
          <li
            className=""
            onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
          >
            <button className="list-item">Universe</button>
          </li>
          <li
            className=""
            onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
          >
            <button className="list-item">House</button>
          </li>
          <li
            className=""
            onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
          >
            <button className="list-item">Nature</button>
          </li>
          <li
            className=""
            onClick={(e) => handleClick(e.target.innerText.toLowerCase())}
          >
            <button className={` ${style} list-item`}>Custom search</button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
