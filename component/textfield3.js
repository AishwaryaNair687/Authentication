import React from 'react'
import Error from "../component/elements/error";
import { useField } from "formik";

export default function textfield2( {
    name, nameplaceholder, type="text",...props
}) {
   const[field,meta]=useField(name)
   console.log(field,meta)
   
    return (
        <div class="mb-2 ">
        <input {...field} {...props} className={` ${
            meta.error && meta.touched ? " border-red-500 border-opacity-50 " : ""  } shadow appearance-none text-gray-700 border bg-gray-50 rounded py-2 px-4 w-full py-2 px-4  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline `} name={name} type={type} placeholder={nameplaceholder} />
<Error  name={name} />

        
</div>
    )
}
