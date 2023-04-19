import React, { useState , useEffect  } from 'react'
import Sidebar from './Sidebar'
import MusicPLayer from './MusicPLayer'
import Profile from './Profile'
import {GoSearch} from 'react-icons/go'
const AppLayout = ({children}) => {
  const [search, setSearch] = useState("")
  useEffect(()=>{
    document.title ="Search"
  },[])
  return (
    <div className='flex '>
      <div className='flex-1'>
        <div className='flex-1 h-screen  bg-neutral-900 p-4 z-[3000] fixed '>
        <Sidebar/>
        </div>
        </div>
       <div className='flex-[5] mb-[7rem]'>
       <div className='flex justify-between pr-[4rem] mt-5'>
       <div className='ml-[3rem] p-1 flex items-center gap-x-3 bg-neutral-800 rounded-2xl'>
        
        <input onClick={(e)=>{
          setSearch(e.currentTarget.value)
        }} placeholder='Search' className=' p-2 input h-[2rem] w-[25rem] text-sm font-light   border-none  bg-neutral-800   focus:outline-none' />
        <GoSearch className='w-10 cursor-pointer' size={22}/>
       </div>
             <Profile/>
    </div>
    <div className='mt-[3rem] pl-[3rem]'>
    {children}
      </div>
        
        </div>
        <div id='musicplayer' className='fixed top-[85%] h-full left-0 bg-neutral-800 w-full z-[4000] '>
<MusicPLayer/>
        </div>
    </div>
  )
}

export default AppLayout