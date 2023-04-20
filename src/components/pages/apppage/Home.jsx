import React, { useState, useEffect } from "react";
import Tracks from "./Tracks";
import axios from "axios";

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getdata");
        setTracks(response.data.tracks.data);
        setAlbums(response.data.albums.data)
        setPlaylists(response.data.playlists.data)
        setPodcasts(response.data.podcasts.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchTracks();
  }, []);

  return (
    <div className="flex flex-col gap-y-6">
      
      <Tracks title="Trending Tracks" tracks={tracks} />
      <Tracks title="Trending Albums" tracks={albums} />
      <Tracks title="Trending Playlists" tracks={playlists} />
      <Tracks title="Trending Podcasts" tracks={podcasts} />
    </div>
  );
};

export default Home;









const PLAYLISTS = [
  { name: "Beast Mode", image: "/playlists/beast mode.jpg" },
  { name: "ESL CS:GO Playlist", image: "/playlists/ESL.jpg" },
];
