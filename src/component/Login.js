import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import login from '../images/login.avif'
const Login = () => {
  return (
    <div className='row'>
        <div className='col-md-6'>
        <form>
                <div className='text-start mb-2'>
                    <h3>Sign In</h3>

                </div>
              
                <div class="mb-3 ">
                    <input type="email" class="form-control"  placeholder='Email'  style={{backgroundColor:"#F7F8FA" , borderColor:"D9D9DB", color:"black", borderRadius:"0"}}/>

                    <input type="password" class="form-control" placeholder='Password' style={{backgroundColor:"#F7F8FA" , borderColor:"D9D9DB", color:"black", borderRadius:"0"}}/>

                </div>
                
                <button class="btn btn-primary form-control" style={{borderRadius:"20px"}}>  Sign In</button>
                <button class="btn  form-control mt-3 mb-2"  style={{ borderColor: "#D9D9DB"}}> <FaFacebook className='ms-3 me-1 text-primary' /> Sign up with Facebook</button>
                <button class="btn  form-control" style={{borderColor:"#D9D9DB"}} ><FcGoogle className='me-2'/>Sign up with Google</button>
                 <h6 className='mt-2'>Forgot Password ?</h6>       
        </form>
                
        </div>

        <div className='col-md-6 '>

            <div className='d-flex flex-direction row'>
                 <p data-bs-toggle="modal" data-bs-target="#staticBackdrop">Dont't have an account ? <Link style={{textDecoration: 'none'}}  >Create new for free</Link></p>

            </div>
         
            <div className='row'>
                <img src={login} alt="Create account"  />
            </div>
         </div>

           
        {/* </div> */}
        
    </div>
  )
}

export default Login
