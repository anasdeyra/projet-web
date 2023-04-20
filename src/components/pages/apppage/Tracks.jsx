import React, { useState } from "react";
import { MdPlayCircleFilled as PlayIcon } from "react-icons/md";
import "./appStyles.css";

const Tracks = ({ title, playlists }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <h1 className="font-bold tracking-widest text-2xl">{title}</h1>
      <div className="grid grid-cols-3 gap-x-4 mt-5 gap-y-4">
        {playlists.map(({ name, image }, i) => {
          const [liked, setLiked] = useState(true);
          const [play, setPlay] = useState(false);
          return (
            <div
              key={i}
              className="track bg-neutral-900 hover:bg-neutral-800 transition-colors h-24 rounded-lg flex justify-between  items-center gap-x-4 cursor-pointer"
            >
              <img
                className="h-full  aspect-square object-cover rounded-l-lg"
                src={image}
              />
              <span className="grow text-white font-medium">{name}</span>
              <PlayIcon
                id="play"
                title="play"
                className="play scale-0 mr-3"
                size={56}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tracks;
