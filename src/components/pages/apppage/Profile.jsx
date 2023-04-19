import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {AiOutlineDown} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
const Profile = () => {
    const [clicked,setClicked] = useState(false)
   
    const handleClick = ()=>{
           setClicked(!clicked)
    }
    useEffect(()=>{
        let menu = document.getElementById('menu')
        if(clicked==true){
            menu.classList.add('bg-neutral-200')
            menu.classList.remove('bg-neutral-500')
        } else{
            menu.classList.add('bg-neutral-500')
            menu.classList.remove('bg-neutral-200')
        }
    },[clicked])
    return (
        <Menu  as="div"  className="relative inline-block text-left">
          <div>
            <Menu.Button onClick={handleClick} id="menu" className="flex items-center h-8 w-[7rem] justify-center gap-x-1.5 rounded-2xl bg-neutral-500 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition ease-in-out delay-100     hover:bg-neutral-200">
              <CgProfile size={25}/>
              <span className='text-[0.8rem]'>
              HAMA
              </span>
              
              <AiOutlineDown size={25} />
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Profile
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
                      Edit
                    </a>
                  )}
                </Menu.Item>
              </div>
             
           
             
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-white',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Logout
                    </a>
                  )}
                </Menu.Item>
              
            </Menu.Items>
          </Transition>
        </Menu>
      )
}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default Profile