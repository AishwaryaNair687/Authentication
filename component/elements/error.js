import React from 'react'
import { ErrorMessage, useField } from "formik";
export default function error({
    name
}) {
   const[field,meta]=useField(name)
   console.log(field,meta)
   
    return (
        <div>
        <ErrorMessage component="div" name={field.name} className=" text-xs text-red-600  "/>
        <div className="border-red-300">

        </div>
        </div>
    )
}
