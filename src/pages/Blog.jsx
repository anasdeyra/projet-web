import React from 'react'
import data from "../data.json"
import {FiHeart , FiSave , FiShare}  from "react-icons/fi"
export const Blog = () => {
  return (
    <div className='w-full '>
        <h1 className='text-center font-sans  text-5xl  font-bold'>Blog</h1>
        <div className='flex gap-x-5 mt-20 flex-wrap'>
                {data.map((props,i)=>(
                    <Article {...props} key={i}/>
                ))}
        </div>
    </div>
  )
} 

const Article = ({title  , article ,  date , isLiked , auteur}) => {
  return (
    <div className='bg-neutral-900  max-w-[320px]  text-white text-bold    cursor-pointer rounded-xl transition-all active:scale-[0.99]  '>
        <img className='rounded-lg' alt='article image' src='https://www.impactplus.com/hs-fs/hubfs/blog-files/blog%20layout%20best%20practices.jpg?length=1200&name=blog%20layout%20best%20practices.jpg'  />
        <h2 className='text-lg mt-4 pl-2 font-bold' >{title.toUpperCase()}</h2>
        <h6 className=' text-xs pl-2 text-gray-300 font-normal'>{date}</h6>
        
        <h5 className=' text-[15px] tracking-normal font-light text-gray-300  p-2'>{article.substring(0, 100)}...</h5>
        <div className='flex text-[13px] p-3 justify-between items-center'>
             <div className='flex items-center gap-x-3'> 
                <img className=' rounded-3xl' src='https://i.pravatar.cc/30' />
                <h5 className='text-[13px] font-medium first-letter:uppercase'>{auteur}</h5>
             </div>
            <ul className=' list-none flex gap-x-3 gap-y-3'>
                <li className="option bg-slate-300 p-1 rounded-md active:scale-[0.9]">{isLiked? <FiHeart className=' text-emerald-500'   radius={20}  size={20}/> : <FiHeart fill='#10b981' className=' text-emerald-500'  size={20}/>}</li>
                <li className="option bg-slate-300 p-1 rounded-md active:scale-[0.9]"><FiShare  className=' text-emerald-500'   size={20}/></li>
                <li className="option bg-slate-300 p-1 rounded-md active:scale-[0.9]"><FiSave   className=' text-emerald-500'   size={20}/></li>
            </ul>
        </div>
        
    </div>
  )
}
