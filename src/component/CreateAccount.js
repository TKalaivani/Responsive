import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import createAccount from '../images/createAccount.png'
const CreateAccount = () => {

  return (
    <div className='row'>
        <div className='col-md-6'>
        <form>
                <div class="d-flex flex-direction column">
                    <input type="text" class="form-control"  placeholder='First Name'  style={{backgroundColor:"#F7F8FA" , borderColor:"D9D9DB", color:"black", borderRadius:"0"}}/>
                    <input type="text" class="form-control"  placeholder='Last Name'  style={{backgroundColor:"#F7F8FA" , borderColor:"D9D9DB", color:"black", borderRadius:"0"}}/>
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control"  placeholder='Email'  style={{backgroundColor:"#F7F8FA" , borderColor:"D9D9DB", color:"black", borderRadius:"0"}}/>

                    <input type="password" class="form-control" placeholder='Password' style={{backgroundColor:"#F7F8FA" , borderColor:"D9D9DB", color:"black", borderRadius:"0"}}/>
                    <input type="password" class="form-control" placeholder='Confirm Password' style={{backgroundColor:"#F7F8FA" , borderColor:"D9D9DB", color:"black", borderRadius:"0"}}/>

                </div>
                
                <button class="btn btn-primary form-control" style={{borderRadius:"20px"}}>  Create Account</button>
                <button class="btn  form-control mt-3 mb-2"  style={{ borderColor: "#D9D9DB"}}> <FaFacebook className='ms-3 me-1 text-primary' /> Sign up with Facebook</button>
                <button class="btn  form-control" style={{borderColor:"#D9D9DB"}} ><FcGoogle className='me-2'/>Sign up with Google</button>

        </form>
                
        </div>

        <div className='col-md-6 '>

            <div className='d-flex flex-direction row'>
                 <p>Already have an account ? <Link style={{textDecoration: 'none'}} data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Sign In</Link></p>

            </div>
         
            <div className='row'>
                <img src={createAccount} alt="Create account"  />
                <p>By signing up, you agree to our Terms & conditions, Privacy policy </p>
            </div>
         </div>

           
        {/* </div> */}
        
    </div>
  )
}

export default CreateAccount