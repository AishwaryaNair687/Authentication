import React from 'react'
import Img from '../img'
import {Formik, Form} from 'formik';
import { signupini as Initialdata} from "../../util/initialdata";
import { validatesignup as Validation  } from "../../util/validation";
import Textfield from "../elements/textfield";
import Error from "../elements/error";
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
        return(
        <div className="flex flex-wrap flex-col-reverse md:flex-row w-screen ">

            <div className="flex-1 md:flex-1 flex-row items-center">
                <div className="flex justify-center item-center w-full">
                    <div className="md:w-12/12 w-4/5 ">
                        <div className="h-4">
                        </div>
                        <br />
                        <h1 className="  text-2xl md:mt-0 md:text-4xl text-gray-800 font-bold"> Sign Up</h1>
                        <h3 className="">Already Registered?  <a href="#" className="text-blue-500"> Sign In!</a></h3>
                        <br />
                        <div class=" " >
                            <form class="">
                                <div class="grid grid-flow-col grid-rows-1  gap-3">
                                    <Textfield name="firstName" nameplaceholder="First Name"/>

<Textfield name="lastName" nameplaceholder="Last Name"/>


                                </div>
   <Textfield name="email" nameplaceholder="Email" type="email"/>
   <Textfield name="phoneno" nameplaceholder="Phone Number"/>
                                <Textfield name="password" nameplaceholder="Password" type="password"/>
                                <Textfield name="confirmPassword" nameplaceholder="Confirm Password" type="password"/>
<input value={values.termsflag} onChange={handleChange} onBlur={handleBlur} type="checkbox" name="termsflag"/>
<span text-gray-400 text-md> I accept Terms and Condition  </span>
<Error name="termsflag"/>
                                <div className="flex justify-center items-center m-3">

                                    <button onClick={submitForm} class="bg-blue-500 hover:bg-blue-900 text-base w-2/5 h-2/6 text-white font-bold py-2 px-4 rounded-full py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                                        Register
</button>
                                </div>
                            </form>
                        </div>
                        <div className="flex mt-3 items-center text-center">

                            <hr className="border-gray-400 border-4 w-full rounded-md"></hr>
                            <label class="block font-medium text-base text-gray-800 text-2xl w-full">
                                <b>Or</b>
                            </label>
                            <hr class="border-gray-400 border-4 w-full rounded-md"></hr>
                        </div>

                        <div class="flex mt-2 grid grid-flow-col grid-rows-1  gap-3">
                            <div>
                                <button class="bg-white hover:bg-gray-400 border text-sm bg-gray-100 md:text-base border-gray-400 w-full items-center justify-center text-gray-800 font-bold py-2 px-2 rounded py-1 px-4 inline-flex items-center">
                                    <svg width="30" height="18" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>

                                    <span className="text-base">{`Sign up ${ismobile?"":`with Google`}`}</span>
                                </button>
                            </div>
                            <div className="text-center">
                                <button className="bg-white hover:bg-gray-400 bg-gray-100 text-xs md:text-base border border-gray-400 w-full items-center justify-center text-gray-800 font-bold py-2 px-4 rounded py-2 px-4 inline-flex items-center">
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
                                    <span className="text-lg">{`Sign up ${ismobile?"":`with Facebook`}`}</span>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="flex-1 flex justify-center   items-center md:min-h-screen h-1/5 w-full bg-blue-700 " >
                <div className="  ">
                    <div> <Img className="w-80 md:w-full"/></div>
                    <br />
                    <div className="flex justify-center items-center m-3">

                        <button className="bg-white hover:bg-gray-400 border border-gray-400 w-3/6 h-1/6 md:1/6 items-center justify-center text-blue-500 text-xl font-bold py-2 px-4 rounded-full py-2 px-4 inline-flex items-center">
                            Sign In
</button>
                    </div>
                </div>
            </div>
        </div>
           )
       }}
      </Formik>
           

        
         ) 
}
