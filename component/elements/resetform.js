import React from 'react'
import Photo from "../photo";
import { Formik, Form } from 'formik';
import Textfield4 from "../elements/textfield4"
import { reset as initialdata4 } from "../../util/initialdata4";
import { validatereset as validation4 } from "../../util/validation4";
export default function resetform() {
  const onSubmit = () => {
    console.log("hi")
  }
  return (
    <Formik initialValues={initialdata4} validationSchema={validation4}>
      { formik => {
        const {
          values, handleChange, handleBlur, submitForm = { onSubmit }

        } = formik
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


                  <h1 className="  text-4xl mt-3 md:mt-0 md:text-4xl text-gray-800 font-bold"> Reset Password</h1>
                  <form class="mt-12">
                    <br />

                    <Textfield4 name="newpassword" nameplaceholder="New Password" type="password" />

                    <div className="mt-4">
                      <Textfield4 name="confirmpass" nameplaceholder="Confirm Password" type="text" />
                    </div>
                    <div class="flex items-center justify-center">

                      <button onClick={submitForm} class="bg-blue-700 hover:bg-blue-900 mt-6 w-3/5 h-2/5 text-white font-bold py-2 px-4 rounded py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                        Change Password
</button>
                    </div>
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
