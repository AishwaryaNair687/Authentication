import React from 'react'
import { useField } from "formik";
import Error from "../elements/error";
export default function textfield({
    name, nameplaceholder, type="text",...props
}) {
   const[field,meta]=useField(name)
   console.log(field,meta)
   
    return (
        <div class="mb-2 ">
               <input {...field} {...props} className={` ${
            meta.error && meta.touched ? "border-red-500 border-opacity-40" : ""  } shadow appearance-none text-gray-700 border bg-gray-50 rounded py-2 px-4 w-full py-2 px-4  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline `} name={name} type={type} placeholder={nameplaceholder} />

       <Error name={name} />
</div>
    )
}
