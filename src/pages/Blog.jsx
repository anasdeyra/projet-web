import React from 'react'
import data from "../data.json"
import {AiOutlineHeart}  from "react-icons/ai"
import {FcLike} from "react-icons/fc"
export const Blog = () => {
  return (
    <div className='w-full '>
        <h1 className='text-center font-sans  text-5xl  font-bold'>Blog</h1>
        <div className='flex flex-col gap-y-3 mt-7'>
                {data.map((props,i)=>(
                    <Article {...props} key={i}/>
                ))}
        </div>
    </div>
  )
} 

const Article = ({title  , article , likes , date , isLiked}) => {
  return (
    <div className='bg-white text-black text-bold p-3 cursor-pointer rounded-xl transition-all  active:scale-[0.99]'>
        <h2 className='text-lg'>{title.toUpperCase()}</h2>
        <h6 className=' text-xs'>{date}</h6>
        
        <h5 className=' text-sm  '>{article.substring(0, 200)}...</h5>
        <span className='flex items-center gap-x-1'>{(isLiked)? <FcLike size={25}/> : <AiOutlineHeart size={25}/>}{likes}</span>
    </div>
  )
}
