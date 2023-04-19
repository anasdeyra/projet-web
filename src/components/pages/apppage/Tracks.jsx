import React , {useState} from 'react'
import {AiOutlineMore} from 'react-icons/ai'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FiHeart } from "react-icons/fi";
import {SlControlPlay} from 'react-icons/sl'
const Tracks = ({title , playlists}) => {
        const [clicked,setClicked] = useState(false)
       
        const handleClick = ()=>{
               setClicked(!clicked)
        }
        
       
  return (
    <div>
            <h1 className='font-bold tracking-widest text-gray-200'>{title}</h1>
             <div className='grid grid-cols-3 gap-x-4 mt-5 gap-y-4'>
             {playlists.map((item,i)=>{
                  const [liked, setLiked] = useState(true);
                  const [play, setPlay] = useState(false);
                        return <div key={i} className=' bg-neutral-900 h-[5rem] grid-flow-col-dense rounded-xl flex justify-between  items-center gap-x-5 cursor-pointer'>
                                <img className='w-[30%] h-full rounded-xl'
                                 src='https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
                            <span className='w-full'>{item}</span>
                                <span  className=' w-full text relative -z-1 flex justify-end gap-2 items-center '>
                                <span onClick={()=>{
                                        setPlay(!play)
                                }}>
                                        {play ? <SlControlPlay title='play'  className='active:scale-[0.95] text-emerald-500' size={20} /> : <SlControlPlay title='play'  className='active:scale-[0.95] ' size={20} />}
                                </span>
                                <span>
                                {liked ? (
              <FiHeart title='like'
                onClick={() => {
                  setLiked(false);
                }}
                className=" active:scale-[0.95] "
                radius={20}
                size={20}
              />
            ) : (
              <FiHeart title='unlike'
                onClick={() => {
                  setLiked(true);
                }}
                fill="#10b981"
                className=" active:scale-[0.95] text-emerald-500"
                size={20}
              />
            )}
                                </span>
                                
                                <Menu title='options'  as="div"  className=" active:scale-[0.95] relative inline-block text-left">
          <div>
            <Menu.Button onClick={handleClick} id="options" className=" rounded-lg flex items-center bg- justify-center gap-x-1.5 ">
            <AiOutlineMore size={25}/>
             
            </Menu.Button>
          </div>
    
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-[5500]   bg mt-2 w-56 origin-top-right rounded-md bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Add to playlist
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      share
                    </a>
                  )}
                </Menu.Item>
              
                
              
            </Menu.Items>
          </Transition>
        </Menu>
                                </span>
                            </div>
                    })}
            </div> 
            </div>
  )
}
function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
export default Tracks