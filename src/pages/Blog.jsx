import React from "react";
import data from "../data.json";
import { FiHeart, FiSave, FiShare2 } from "react-icons/fi";
import { useState } from "react";

export const Blog = () => {
  return (
    <div className="mt-24 text-center">
      <h1 className="text-5xl font-bold">Tune In: Spotify Blog</h1>
      <h2 className="text-2xl mt-4  mx-auto font-medium">
        From Indie to Mainstream, Discover the Latest Music Trends and Get
        Exclusive Insights into the Industry with Spotify Blog
      </h2>
      <div className="flex gap-x-5 mt-20 flex-wrap justify-center">
        {data.map((props, i) => (
          <Article {...props} key={i} />
        ))}{" "}
      </div>
    </div>
  );
};

const Article = ({ title, article, date, isLiked, auteur, image }) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <div className="bg-neutral-900 text-start max-w-[320px]  text-white text-bold rounded-xl  ">
      <img
        className="rounded-lg cursor-pointer hover:scale-105 transition-all object-cover h-52 w-full"
        alt="article image"
        src={image}
      />
      <h2 className="text-lg mt-4 px-4 font-bold">{title.toUpperCase()}</h2>
      <h6 className=" text-xs px-4 text-gray-300 font-normal">{date}</h6>

      <h5 className=" text-md tracking-normal font-light text-gray-300  px-4 mt-3">
        {article.substring(0, 100)}...
      </h5>
      <div className="flex text-sm px-4 my-4 mt-6 justify-between items-center">
        <div className="flex items-center gap-x-2">
          <img className=" rounded-3xl" src="https://i.pravatar.cc/30" />
          <h5 className="text-sm font-medium first-letter:uppercase">
            {auteur}
          </h5>
        </div>
        <ul className=" list-none flex gap-x-3 gap-y-3">
          <li className="option  p-1 rounded-md active:scale-[0.9] cursor-pointer transition-all">
            {liked ? (
              <FiHeart
                onClick={() => {
                  setLiked(false);
                }}
                className=" text-emerald-500"
                radius={20}
                size={20}
              />
            ) : (
              <FiHeart
                onClick={() => {
                  setLiked(true);
                }}
                fill="#10b981"
                className=" text-emerald-500"
                size={20}
              />
            )}
          </li>
          <li className="option  p-1 rounded-md active:scale-[0.9] cursor-pointer transition-all">
            <FiShare2 className=" text-emerald-500" size={20} />
          </li>
          <li className="option  p-1 rounded-md active:scale-[0.9] cursor-pointer transition-all">
            <FiSave className=" text-emerald-500" size={20} />
          </li>
        </ul>
      </div>
    </div>
  );
};
