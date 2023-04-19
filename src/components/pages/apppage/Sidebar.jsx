import React ,{useEffect, useState} from 'react'
import {FiHome ,FiHeart ,FiSearch} from 'react-icons/fi'
import {GoDiffAdded} from 'react-icons/go'
import {BiLibrary} from 'react-icons/bi'
import {IoMdClose ,IoIosAdd} from'react-icons/io'
import {AiOutlineDelete} from 'react-icons/ai'
import playlists from '../../../playlist.json'
const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [lists, setPlaylist] = useState(playlists);
    const handleCreate = ()=>{
            setPlaylist((e)=>(
                [...e,name]
            ))
            setShowModal(false)
    }
    useEffect(()=>{
      let main = document.getElementById('main');
      if (window.location.pathname.startsWith('/app')) {
        main.classList.remove('max-w-[1366px]');
      } else {
       main.classList.add('max-w-[1366px]');
      }
     
    },[])
    useEffect(()=>{
            if(showModal){
                document.body.style.overflow ='hidden'
            }else{
                document.body.style.overflow ='auto'
            }
            
    },[showModal])
    
  return (
    <>
  
        <h1 className=' text-[3rem] text-transparent bg-clip-text  bg-gradient-to-l from-emerald-700 to-green-500'>Spotify</h1>
        <ul className=' list-none mt-6  flex  flex-col gap-y-3'>
            <li className='flex gap-x-2 items-center text-[1.2rem] cursor-pointer font-medium     active:scale-[0.98]'> <span><FiHome   size={25}/></span>Home</li>
            <li className='flex gap-x-2 items-center text-[1.2rem] cursor-pointer font-medium active:scale-[0.98] '> <span><FiSearch size={25}/></span>Search</li>
            <li className='flex gap-x-2 items-center text-[1.2rem] cursor-pointer font-medium active:scale-[0.98]'> <span><BiLibrary size={25}/></span>Library</li>
            </ul>
        <ul className='mt-8 flex flex-col gap-y-2'>
            <li  onClick={()=>{
                setShowModal(true)
            }}  className='flex  gap-x-2 items-center  text-[1rem] cursor-pointer  font-light  active:scale-[0.98]'> <span> <GoDiffAdded    size={25}/></span>create a playlist</li>
            <li className='flex gap-x-2 items-center  text-[1rem] cursor-pointer   font-light active:scale-[0.98]'> <span><FiHeart  className=" text-emerald-500" size={25}/></span>Liked songs</li>
        </ul>
        <span className='flex justify-center'>
        <hr className='mt-5 w-[12rem] opacity-[0.5] brightness-[0.5]' />
        </span>
        <ul className='flex flex-col gap-y-1 p-3'>
            {lists.map((list,i)=>{
                return <li className='font-extralight flex justify-between items-center cursor-pointer active:scale-[0.98] ' key={i}>
                        <span>
                      {list}
                        </span>
                        <span>
                        <AiOutlineDelete onClick={()=>{
                          setPlaylist(lists.filter((e)=>(
                            e!=list
                          )))
                        }}  radius={20}  size={20}/>
                        </span>
                </li>
            })}
        </ul>
        {showModal ? (
        <>
    
          <div className="flex justify-center top-0 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[2000] backdrop-blur-sm      ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-800 h-[15rem] ">
                <div className="flex items-center  justify-between p-5 border-b border-solid  w-[30rem] ">
                  <h3 className="text-lg  text-gray-100 font-semibold ">Create a playlist</h3>
                  <button
                    className="bg white"
                    onClick={() => setShowModal(false)}
                  >
                   <IoMdClose size={30}/>
                  </button>
                 </div>
        <div   className='p-5 flex flex-col
                gap-y-3
    ' >  
            <label
              
              className="block text-sm font-medium leading-6 text-neutral-100"
            >
              Name :
            </label>
            
              <input
              onChange={(e)=>{
                setName(e.target.value)
              }}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="bg-neutral-900   block w-[25rem] rounded-md border-0 px-3.5 py-2 text-neutral-100 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
              />
            
          </div>
                <button onClick={handleCreate} className='  mr-10 flex h-10 gap-x-1 items-center self-end font-light bg-gradient-to-bl hover:bg-green-500 from-emerald-700 to-green-500 px-5 py-2 rounded-full transition-all active:scale-[0.98]'>
                    <span>
                        <IoIosAdd size={30}/>
                    </span>
                    Create
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
     </>
  )
}

export default Sidebar
