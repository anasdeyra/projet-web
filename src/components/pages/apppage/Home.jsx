import React from "react";
import Tracks from "./Tracks";

const Home = () => {
  return (
    <div className=" flex flex-col gap-y-16  my-16 ">
      <Tracks title="Your Favourite Playlists" playlists={PLAYLISTS1} />
      <Tracks title="Top Hits 2023" playlists={PLAYLISTS2} />
      <Tracks title="Your Top Mixes" playlists={PLAYLISTS3} />
    </div>
  );
};

export default Home;

const PLAYLISTS1 = [
  { name: "Beast Mode", image: "/playlists/beast mode.jpg" },
  { name: "ESL CS:GO Playlist", image: "/playlists/ESL.jpg" },
  { name: "This Is Pop Smoke", image: "/playlists/pop smoke.jpg" },
  { name: "Rap Caviar", image: "/playlists/rap caviar.jpg" },
  { name: "Lyfë", image: "/playlists/out the way.jpg" },
];
const PLAYLISTS2 = [
  { name: "as it was", image: "/playlists/as it was.jpg" },
  { name: "Eyes Closed", image: "/playlists/eyes.png" },
  { name: "bad habits", image: "/playlists/bad habits.jpg" },
  { name: "go", image: "/playlists/go.jpg" },
  { name: "heat waves", image: "/playlists/heat waves.jpg" },
  {
    name: "running up that hill",
    image: "/playlists/running up that hill.jpg",
  },
];
const PLAYLISTS3 = [
  { name: "Yeat Mix", image: "/playlists/yeat mix.jpg" },
  { name: "2010's Mix", image: "/playlists/2010 mix.jpg" },
  { name: "Hip Hop Mix", image: "/playlists/hip hop mix.jpg" },
  { name: "House Mix", image: "/playlists/house mix.jpg" },
  { name: "KANKAN Mix", image: "/playlists/kankan mix.jpg" },
];
