import React, { useEffect, useState } from 'react'
import AppLayout from './AppLayout'
import axios from 'axios'
import Tracks from './Tracks'

const Liked = () => {
    const  [data, seData] = useState([])
    const getdata = async ()=>{
        const user = JSON.parse(window.sessionStorage.getItem('auth')) 
                const res = await axios.post('http://localhost:5000/api/user/likedsongs',{username : user.username})
                seData(res.data)
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <AppLayout>
    <Tracks title ="Liked Songs" tracks={data} />  
    </AppLayout>
   
  )
}

export default Liked