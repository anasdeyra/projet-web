import React ,  {useState , useEffect} from 'react'
import AppLayout from '../components/pages/apppage/AppLayout'
import axios from 'axios'
import { MdPlayCircleFilled as PlayIcon } from "react-icons/md";
import { useSearchParams } from 'react-router-dom'
const Search = () => {
  const [search , setSearch]=useSearchParams()
   const [results , setRes]=useState([])
async function getsea(){
  try{
    const res = await axios.get('http://localhost:5000/api/search',{ 
      params: { q: search.get('q') }
    })
   setRes(res.data)
   console.log(res.data)
  }catch(e){
      console.log(e.message)
  }
}
    
    
    
   useEffect(()=>{
  getsea()
},[search])

  return (
    <AppLayout>
      <h1 className='text-[1.5rem] font-light'>Search for {search.get('q')}</h1>
        <div className='grid grid-cols-3 gap-x-4 mt-5 gap-y-4'>   
          { results && 
        
            results.map((e,i)=>{
            return (
              <div
              key={i}
              className="track bg-neutral-900 hover:bg-neutral-800 transition-colors h-24 rounded-lg flex justify-between  items-center gap-x-4 cursor-pointer"
            >
              <img
                className="h-full  aspect-square object-cover rounded-l-lg"
                src={`https://e-cdns-images.dzcdn.net/images/cover/${e.md5_image}/250x250.jpg`}
              />
              <span className="grow text-white font-medium">{e.title}</span>
              <PlayIcon
                id="play"
                title="play"
                className="play scale-0 mr-3"
                size={56}
              />
            </div>
            )
          })}
          
            </div>
    </AppLayout>
  )
}

export default Search