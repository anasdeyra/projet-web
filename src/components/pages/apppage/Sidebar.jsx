import React, { useEffect, useState } from "react";
import { FiHome, FiHeart, FiSearch } from "react-icons/fi";
import { MdAddCircle as PlusIcon } from "react-icons/md";
import { BiLibrary } from "react-icons/bi";
import { IoMdClose, IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [lists, setPlaylist] = useState(["Hello", "Addelle"]);
  const handleCreate = () => {
    setPlaylist((e) => [...e, name]);
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <>
     <Link to='/app'><h1 className=" text-3xl mt-4 font-bold text-transparent bg-clip-text  bg-gradient-to-l from-emerald-700 to-green-500">
        Spotify
      </h1>
     </Link> 
      <ul className=" list-none mt-12  flex  flex-col gap-y-2">
        <Link to='/app'> <li className="flex gap-x-2 items-center cursor-pointer">
          {" "}
          <span className="p-1">
            <FiHome size={20} />
          </span>
          Home
        </li>
        </Link>
       
        <Link to='/app/search'> 
        <li className="flex gap-x-2 items-center cursor-pointer  ">
          {" "}
          <span className="p-1">
            <FiSearch size={20} />
          </span>
          Search
        </li>
        </Link>
       <Link to="/app/library">
       <li className="flex gap-x-2 items-center cursor-pointer">
          {" "}
          <span className="p-1">
            <BiLibrary size={20} />
          </span>
          Library
        </li>
       </Link>
       
      </ul>
      <ul className="mt-8 flex flex-col gap-y-2">
        <li
          onClick={() => {
            setShowModal(true);
          }}
          className="flex  gap-x-2 items-center cursor-pointer   "
        >
          {" "}
          <span className="p-1 bg-gradient-to-tr from-purple-700 to-pink-600 rounded-sm">
            {" "}
            <PlusIcon size={20} />
          </span>
          Create Playlist
        </li>
        <li className="flex gap-x-2 items-center cursor-pointer  ">
          {" "}
          <span className="p-1 bg-gradient-to-tr from-emerald-700 to-green-500 rounded-sm">
            <FiHeart fill="white" size={20} />
          </span>
          Liked songs
        </li>
      </ul>

      <ul className="flex flex-col gap-y-2 border-t pt-4 border-t-neutral-700 mt-8">
        <h3 className="font-semibold text-lg mb-2">My Playlists</h3>
        {lists.map((list, i) => {
          return (
            <li
              className="text-sm font-light flex justify-between items-center cursor-pointer active:scale-[0.98] "
              key={i}
            >
              <span>{list}</span>
            </li>
          );
        })}
      </ul>
      {showModal ? (
        <>
          <div className="flex justify-center top-0 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[2000] backdrop-blur-sm      ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-800 h-[15rem] ">
                <div className="flex items-center  justify-between p-5 border-b border-solid  w-[30rem] ">
                  <h3 className="text-lg  text-gray-100 font-semibold ">
                    Create a playlist
                  </h3>
                  <button
                    className="bg white"
                    onClick={() => setShowModal(false)}
                  >
                    <IoMdClose size={30} />
                  </button>
                </div>
                <div className="flex flex-col">
                  <div
                    className="p-5 flex flex-col
                gap-y-1
    "
                  >
                    <label className="block text-sm font-medium leading-6 text-neutral-100">
                      Name
                    </label>

                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="bg-neutral-900 block rounded-md border-0 px-3.5 py-2 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <button
                    onClick={handleCreate}
                    className="  mr-5 flex h-10 gap-x-1 items-center self-end font-medium bg-gradient-to-bl hover:bg-green-500 from-emerald-700 to-green-500 pr-5 pl-4 py-2 rounded-md transition-all active:scale-[0.98]"
                  >
                    <span>
                      <IoIosAdd size={30} />
                    </span>
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Sidebar;
