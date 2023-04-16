import React from 'react'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import {FaMoneyBillWave} from 'react-icons/fa'
import OurValues from './OurValues'
import OurTeam from './OurTeam'
const OurMission = () => {
  return (
    <div className='mt-[8rem]'>
        <h1 className='text-[35px] font-bold'>Our Mission</h1>
        <div className='flex mt-5 p-1'>
            <div className='flex-[2] flex flex-col
                gap-y-4
                 text-[23px]
                  font-normal
                   self-center
             '>
                <h1>
                Mission: At <span className=' font-bold text-transparent bg-clip-text  bg-gradient-to-l from-emerald-700 to-green-500'>Spotify
                    </span>, we believe that music has the power to connect people, inspire creativity, and bring joy to everyday life. Our mission is to create a platform that empowers music lovers to discover, share, and enjoy music like never before.
                    </h1>  
                    <h1>
                    We are dedicated to providing a seamless and personalized experience that makes it easy for users to explore new artists, genres, and playlists, while also providing tools for artists and creators to share their work with the world
                    </h1>
                    <h1>
                    Whether you're a music aficionado or a casual listener, our mission is to help you find the perfect soundtrack for every moment
                    </h1>
            </div>
            <div className='flex-[1]'>
               <Statistic/>
            </div>
            
            </div>
            <img className=' object-cover mt-20 rounded-2xl h-[512px] w-full'
            src='https://images.pexels.com/photos/1756665/pexels-photo-1756665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <OurValues/>
            <OurTeam/>
    </div>
  )
}

export default OurMission
 const Statistic = () => {
    return (
      <div className="  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-2 ">
          <div className="text-center">
            <div className="flex items-center justify-center w-15 h-15 mx-auto mb-3 rounded-full  bg-gradient-to-l from-emerald-700 to-green-500 sm:w-12 sm:h-12">
                <FiUsers  className='text-emerald-500' color='white' size={40}/>
        
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              1M
            </h6>
            <p className="mb-2 font-bold text-md">Users</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full    bg-gradient-to-l from-emerald-700 to-green-500 sm:w-12 sm:h-12">
                <AiOutlineCloudDownload className='white'  size={40}/>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              1.3M
            </h6>
            <p className="mb-2 font-bold text-md">Downloads</p>
            
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 bg-gradient-to-l from-emerald-700 to-green-500 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <FaMoneyBillWave className='text-emerald-500' color='white' size={40}/>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">11M</h6>
            <p className="mb-2 font-bold text-md">Earnings</p>
           
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto bg-gradient-to-l from-emerald-700 to-green-500 mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <FaMoneyBillWave className='text-emerald-500' color='white' size={40}/>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">11M</h6>
            <p className="mb-2 font-bold text-md">Earnings</p>
           
          </div>
          
        
        </div>
      </div>
    );
  };