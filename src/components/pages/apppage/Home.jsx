import React from "react";
import Tracks from "./Tracks";

const Home = () => {
  return (
    <div className=" flex flex-col gap-y-16  my-16 ">
      <Tracks title="Your Favourite Playlists" playlists={PLAYLISTS} />
      <Tracks title="Top Hits 2023" playlists={PLAYLISTS} />
    </div>
  );
};

export default Home;

const PLAYLISTS = [
  { name: "Beast Mode", image: "/playlists/beast mode.jpg" },
  { name: "ESL CS:GO Playlist", image: "/playlists/ESL.jpg" },
];
