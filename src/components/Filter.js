// import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch,useSelector } from "react-redux";
import { bookActions } from "../redux/reducers/bookReducer";

function Filter() {
  const dispatch = useDispatch();
  const userInput=useSelector(state=>state.filterInput)

  const handleGenreChange = (event) => {
    dispatch(bookActions.searchBookInput(event.target.value))
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(bookActions.searchBookInput(''));
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(bookActions.searchBookInput(""));
    }
  };

  return (
    <div className="w-[100%] flex h-24 justify-center items-center    bg-slate-500  ">
      <div className="   flex justify-center items-center font-thin  md:font-semibold text-white ">
        <div className="flex">
        <div className="flex  justify-center px-1 text-base   items-center bg-slate-50 focus-within:bg-white">
          <BiSearch className="text-gray-400 mr-2" />
          <input
            
            value={userInput}
            placeholder="Search for category and author..."
            onChange={handleGenreChange}
            onKeyDown={handleKeyDown}
            className="text-slate-500 bg-transparent  text-xs w-44 md:w-60 border-none focus:outline-none"
          />
        </div>
        <button
          className="flex items-center px-1 py-1  bg-blue-500 text-white  shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleClick}
        >
          <BiSearch className="mr-2" />
          Search
        </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
