import React from 'react'
import Pic from './pic.js'
import {Formik, Form} from 'formik';
import { signinini as Initialdata } from "../util/initialdata2";
import { validatesignin as Validation } from "../util/validation2";
import Textfield2 from "./elements/textfield2";
import { useMediaQuery } from 'react-responsive';
export default function elements() {
  const ismobile = useMediaQuery({
    query:"(max-width:1163px)"
})
    const onSubmit = () =>{
        console.log("hi")
    }
    return (
        <Formik initialValues={ Initialdata} validationSchema={Validation}>
       { formik =>{ 
        const{
            values, handleChange, handleBlur,submitForm={onSubmit}
            

        }=formik
   
    return (
        
 <div className="flex flex-wrap h-screen w-full items-center justify-center">
            <div className="flex-1 flex justify-center   items-center md:min-h-screen h-5/6 w-full bg-blue-700 " >
                <div className="  ">
                    <div> <Pic className="w-80 md:w-full"/></div>
                    <br />
                    <div className="flex justify-center items-center md:m-3">

                        <button className="bg-white hover:bg-gray-400 border border-gray-400 w-3/6 md:w-2/5 h-1/6 md:1/6 items-center justify-center text-blue-500 text-xl font-bold rounded-full inline-flex items-center">
                            Sign Up
</button>
                    </div>
                </div>
            </div>
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="flex-1 flex justify-center item-center w-full">
            <div className="w-11/12 md:w-2/5 ">
              <div className="h-1/12 md:h-4">
              </div>
              
              
              <h1 className="  text-4xl mt-3 md:mt-0 md:text-4xl text-gray-800 font-bold"> Sign In</h1>
              <h3 className="">New user?  <a href="#" className="text-blue-500">  Create an account!</a></h3>
              <br />
                <form class="">
                <Textfield2  name="email" nameplaceholder="Email" type="email"/>
                <Textfield2 name="password" nameplaceholder="Password" type="password"/>
                  <div class="flex items-center justify-between">
                    <a class="inline-block align-baseline font-bold text-lg text-blue-400 hover:text-blue-900" href="#">
                      Forgot Password?
</a>
                    <button onClick={submitForm} class="bg-blue-500 hover:bg-blue-900  w-2/5 h-2/5 text-white font-bold py-2 px-4 rounded-full py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                      Login
</button>
                  </div>
                  <div class="flex mt-5 items-center text-center">
                    <hr class="border-gray-400 border-4 w-full rounded-md"></hr>
                    <label class="block font-medium text-base text-gray-800 w-full">
                      <b>Or</b>
                    </label>
                    <hr class="border-gray-400 border-4 w-full rounded-md"></hr>
                  </div>
                  <br />
                  <div>                                                                                                                                           
                    <button class="bg-white hover:bg-gray-400 border border-gray-400 w-full items-center justify-center text-gray-800 font-bold rounded py-2 px-4 inline-flex items-center">
                      <svg width="30" height="18" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>

                      <span>Sign in with Google</span>
                    </button>
                  </div>
                  <br />
                  <div className="text-center">
                    <button class="bg-white hover:bg-gray-400 border border-gray-400 w-full items-center justify-center text-gray-800 font-bold  rounded py-2 px-4 inline-flex items-center">
                      <svg
                        width="30" height="18"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 455.73 455.73"
                      >
                        <path
                          d="M0 0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893 35.582-79.475 79.475-79.475h62.025v64.622h-44.382c-13.947 0-25.254 11.307-25.254 25.254v49.953h68.521l-9.47 71.864h-59.051V455.73H455.73V0H0z"
                          fill="#3a559f"
                        />
                      </svg>
                      <span>Sign in with Facebook</span>
                    </button>
                  </div>
                  <br />
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      
    
  )
}
   
}
</Formik>)
}
    


