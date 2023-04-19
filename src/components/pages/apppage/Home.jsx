import React , {useEffect} from 'react'
import playlists from '../../../playlist.json'
import Tracks from './Tracks'
const Home = () => {
  useEffect(()=>{
    document.title ="App"
  },[])
  return (
    <>
        <div className=' flex flex-col gap-y-6   '>
            <Tracks title="Your favourite Playlists" playlists={playlists}/>
            <Tracks title="TOP HITS 2023" playlists={playlists}/>
            <Tracks title="TOP HITS 2023" playlists={playlists}/>
            <Tracks title="TOP HITS 2023" playlists={playlists}/>
            <Tracks title="TOP HITS 2023" playlists={playlists}/>
        </div>
      
        </>
  )
}

export default Home