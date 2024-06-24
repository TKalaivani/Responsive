import React from 'react'
import img1 from '../images/img1.jpeg'
import post2 from '../images/post2.jpeg'
import post3 from '../images/nature3.webp'
import post1 from '../images/post1.jpeg'
import { CiMenuKebab } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";



const Posts = () => {

    const data=[
        {
             "cardimage":post1,
             "logoimage":img1,
             "title":"What if famous brands had regular fonts? Meet RegulaBrands!",
             "commands":"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
             "profile":img1,
             "name":"Sarah West",
        },
        {
            "cardimage":post2,
             "logoimage":img1,
             "title":"What if famous brands had regular fonts? Meet RegulaBrands!",
             "commands":"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
             "profile":img1,
             "name":"Sarah West",
        },
        {
            "cardimage":post3,
             "logoimage":img1,
             "title":"What if famous brands had regular fonts? Meet RegulaBrands!",
             "commands":"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
             "profile":img1,
             "name":"Sarah West",
        }
]
return (
 <>
  <div className='row'>
    
     {  data.map((data,id)=>(

         <div className='col-md-12 mt-3'>
           <div class="card">
              <img class="card-img-top" src={data.cardimage} alt="Card image cap" />
               <div class="card-body">
                  <h5 class="card-title text-start"><img src={data.logoimage} width={20} height={20} /> Article</h5>

                  <div className='d-flex justify-content-between'>
                      <div>
                          <p class="card-text text-start h6">
                              {data.title}
                          </p>
                      </div>
                      <div>
                          <button className='btn mb-3 mt-0 '> <p className='h4 '>...</p></button>
                      </div>
                  </div>
                  <p class="card-text text-start text-muted"> {data.commands}</p>
              </div>

              <div className="d-flex justify-content-between">

                  <div className='d-flex justify-content-between mt-2'>
                      <img src={img1} alt="..." width={30} height={30} class="rounded-circle ms-2 mb-2" />
                      <p className="ms-2">{data.name} </p>
                  </div>

                  <div className='d-flex justify-content-between me-2'>

                      <p className='mt-2'><IoEyeOutline /> 1.4K views</p>

                      <button className='mb-2 ms-2 border-0'><IoShareSocial /> </button>
                      {/* <a href="#" class="card-link">Another link</a>
    <a href="#" class="card-link">Another link</a> */}

                  </div>
              </div>
       </div>             
   </div>
        ))
            
        }
      
   </div>
      
</>
  )
}

export default Posts;