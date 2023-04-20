import React, { useState } from "react";
import { CiPlay1, CiPause1, CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { BsSkipBackward, BsSkipForward } from "react-icons/bs";
import { MdVolumeDownAlt, MdVolumeUp, MdVolumeOff } from "react-icons/md";
const MusicPLayer = () => {
  const [play, setPlay] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [ronce, setRonce] = useState(false);
  const [volume, setVolume] = useState(50);

  return (
    <div
      id="musicplayer"
      className="w-full bg-neutral-900 fixed bottom-0 border-t-neutral-700 border-t z-[4000] p-4 flex items-center justify-between "
    >
      <div>
        <img
          className=" h-16 rounded-lg "
          src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="flex flex-col gap-y-4 items-center ">
        <ul className="flex gap-x-[4rem] items-center list-none  ">
          <li className=" active:scale-[0.97]">
            <BsSkipBackward size={30} />
          </li>
          <li
            className=" active:scale-[0.97]"
            onClick={() => {
              setPlay(!play);
            }}
          >
            {play ? <CiPause1 size={35} /> : <CiPlay1 size={35} />}
          </li>
          <li className=" active:scale-[0.97]">
            <BsSkipForward size={30} />
          </li>
        </ul>
        <span className="flex gap-x-3 items-center">
          <span className="text-xs ">00:50</span>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue={31}
            className="accent-emerald-500 w-[30rem] transparent h-1 cursor-pointer appearance-none rounded-full border-transparent bg-neutral-200"
          />
          <span className="text-xs ">02:37</span>
        </span>
      </div>

      <span className="pr-10 flex items-center gap-x-3">
        <span
          onClick={() => {
            if (volume === 0) {
              setVolume(50);
            } else {
              setVolume(0);
            }
          }}
        >
          {volume === 0 ? <MdVolumeOff size={18} /> : <MdVolumeUp size={18} />}
        </span>{" "}
        <input
          type="range"
          min="0"
          max="100"
          className="transparent accent-emerald-500 h-1 w-[5rem] cursor-pointer appearance-none rounded-full border-transparent bg-neutral-200"
          onChange={(e) => {
            setVolume(e.currentTarget.value);
          }}
        />
      </span>
    </div>
  );
};

export default MusicPLayer;
