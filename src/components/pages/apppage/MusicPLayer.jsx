import React, {  useState } from 'react'
import {CiPlay1 ,CiPause1 , CiVolumeHigh ,CiVolumeMute ,CiShuffle} from 'react-icons/ci'
import {BsSkipBackward , BsSkipForward ,BsRepeat , BsRepeat1} from 'react-icons/bs'
const MusicPLayer = () => {
    const [play , setPlay] = useState(false)
    const [shuffle , setShuffle] = useState(false)
    const [repeat , setRepeat] = useState(false)
    const [ronce , setRonce] = useState(false)
    const [volume , setVolume] = useState(50)
   
  return (
    <div className='w-full   flex items-center justify-between '>
        <img  className=' h-[6.2rem] rounded-lg  p-1' src='https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div className='flex flex-col gap-y-4 items-center '>
        <span className='flex gap-x-3 items-center'>
        <input   type="range" min="0" max="100" value="50" className=" slider w-[30rem] transparent h-[0.3rem] cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"  />
        <span className='text-[12px]' >
            00:50
        </span>
        </span>
        
        <ul className='flex gap-x-[4rem] items-center list-none  '>
        
        <ul className='flex gap-x-4'>
            <li><CiShuffle color={shuffle ? "green" :""} onClick={()=>{
                setShuffle(!shuffle)
                setRonce(false)
                 setRepeat(false)
            }}  size={20}/></li>
            <li><BsRepeat color={repeat ? "green" :""} onClick={()=>{
                setRepeat(!repeat)
                setShuffle(false)
                setRonce(false)
            }}  size={20}/></li>
            <li><BsRepeat1 color={ronce ? "green" :""} onClick={()=>{
                setShuffle(false)
                setRepeat(false)
                setRonce(!ronce)
            }}  size={20}/></li>
        </ul>
        <li className=' active:scale-[0.97]' ><BsSkipBackward size={30}/></li>
        <li className=' active:scale-[0.97]' onClick={()=>{
            setPlay(!play)
        }}>{
            play ? <CiPause1  size={35}/> : <CiPlay1  size={35}/>
        }</li>
        <li className=' active:scale-[0.97]'><BsSkipForward size={30}/></li>
    </ul>
        </div>
    
 <span className='pr-10 flex items-center gap-x-3'>
 <input  type="range" min="0" max="100" value={volume} className="transparent h-1.5 w-[5rem] cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"  onChange={(e)=>{
    setVolume(e.currentTarget.value)
 }} /> 
 <span onClick={()=>{
    if(volume===0){
        setVolume(50)
    }else{
        setVolume(0)
    }
 }}>
 {volume===0 ? <CiVolumeMute  size={25} /> : <CiVolumeHigh  size={25} />}
 </span>

 </span>
    </div>
  )
}

export default MusicPLayer