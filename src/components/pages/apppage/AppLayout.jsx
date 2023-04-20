import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import MusicPLayer from "./MusicPLayer";
import Profile from "./Profile";
import { GoSearch } from "react-icons/go";
const AppLayout = ({ children }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
    const handleSearch = ()=>{
              navigate(`/app/search?q=${search}`)
    } 
    console.log(search)
  return (
    <div className="flex ">
      <div className="flex-1">
        <div className="flex-1 h-screen w-[220px] bg-neutral-900 p-4 z-[3000] fixed ">
          <Sidebar />
        </div>
      </div>
      <div className="flex-[5] mb-[7rem]">
        <div className="flex justify-between px-8 mt-8">
          <div className=" p-1 flex items-center gap-x-3 rounded-full bg-neutral-800 ">
            <input
              onChange={(e) => {
                setSearch(e.currentTarget.value);
              }}
              placeholder="Search"
              className=" p-2 input h-[2rem] w-[25rem] text-sm  placeholder:text-neutral-500 border-none  bg-transparent   focus:outline-none"
            />
            <GoSearch onClick={handleSearch} className="w-10 cursor-pointer" size={22} />
          </div>
          <Profile />
        </div>
        <div className="mt-8 px-8">{children}</div>
      </div>
      <MusicPLayer />
    </div>
  );
};

export default AppLayout;
