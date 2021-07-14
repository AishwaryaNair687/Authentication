import React from 'react'
import Photo from "../photo";
import {Formik, Form} from 'formik';
import Textfield3 from "../textfield3"
import {forgot as initialdata3} from "../../util/initialdata3";
import { validateforgot as validation3 } from "../../util/validation3";
export default function forgotform() {
    const onSubmit = () =>{
        console.log("hi")
    }
    const onSend = (email) =>{
      if (email==""){
    
      }
      console.log("hi")
  }
      return (
          <Formik initialValues={ initialdata3} validationSchema={validation3}>
         { formik =>{ 
          const{
              values, handleChange, handleBlur,submitForm={onSubmit}
  
          }=formik
          
    return (
      <div className="flex flex-wrap h-screen w-full items-center justify-center">
      <div className="flex-1 flex justify-center   items-center md:min-h-screen h-4/6 w-full bg-blue-700 " >
          <div className="  ">
              <div> <Photo className="w-80 md:w-full"/></div>

          
      
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="flex-1 flex justify-center item-center w-full">
            <div className="w-11/12 md:w-2/5 ">
              <div className="h-1/12 md:h-4">
              </div>
              
              
              <h1 className="  text-4xl mt-2 md:mt-0 md:text-3xl text-gray-800 font-bold"> Forget Password</h1>
              <h3 className="">Want to login?  <a href="#" className="text-blue-500">  Login!</a></h3>
                <form class="mt-12">
                    <br/>
                   
                <Textfield3  name="email" nameplaceholder="Email" type="email"/>
               <div className="flex justify-end "> <button onClick={onSend} class="bg-blue-700 hover:bg-blue-900  w-2/5 h-3/5 text-white justify-right font-bold  rounded  focus:outline-none focus:shadow-outline" type="button">
                      Send OTP
</button></div>
<div className="mt-4">
                <Textfield3 name="otp" nameplaceholder="Enter OTP" type="text"/>
                </div>
                <h6 className="text-sm">Didn't recieve OTP?
                 <a href="#" className="text-blue-500 "> Click here</a> to resend OTP</h6>       <div class="flex items-center justify-center">
                   
                    <button onClick={submitForm} class="bg-blue-700 hover:bg-blue-900 mt-6 w-2/5 h-2/5 text-white font-bold py-2 px-4 rounded py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                        Next
</button>
                  </div>
                  
                  
                  <br />
                  
                  <br />
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      
    )

}}
</Formik>
      )
}
