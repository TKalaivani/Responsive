import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

import { CiCircleAlert } from "react-icons/ci";
import { AiTwotoneLike } from "react-icons/ai";
import img1 from '../images/img1.jpeg'
import { Link } from 'react-router-dom';
import './Suggestion.css'

export const Sugestion = () => {
    const data=[
        {
            "profile":img1,
             "name":"Activism" 
        },
        {
            "profile":img1,
             "name":"MBA" 
        },
        {
            "profile":img1,
             "name":"Philosophy" 
        },

    ]
  return (
    <>
        <div className='location-input '>
            <span className='location-icon'><IoLocationOutline /></span>
            <input type='text' className='form-control' placeholder='Enter your location' />
            <span><IoCloseSharp /></span>
        </div>


        <div className='d-flex flex-direction column mt-3'>
         <CiCircleAlert className='mt-1' /> <p className='text-muted text-justify ms-2'> Your location will help us serve better and extend a personalised experience.</p>
        </div>

        <div className='d-flex flex-direction column'>
            <AiTwotoneLike  className='mt-1'/>
            <p className='ms-2'>RECOMMENDED GROUPS</p>

        </div>

        { data.map((data)=>(

             <div className='d-flex justify-content-between' >
                <div className='d-flex flex-direction column mt-3'>
                    <img src={data.profile} className='rounded-circle' width={30} height={30}/>
                    <p className='ms-3'>{data.name}</p>
                </div>

                <div>
                    <button className='border-0 rounded'>Follow</button>
                </div>
              </div>

        ))
           
        }
        
            

       
    </>

  )
}
