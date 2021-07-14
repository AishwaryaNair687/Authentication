import * as Yup from 'yup';
export const validatesignup =  Yup.object().shape({
    firstName: Yup.string('Please enter a valid Name')
    .trim()
    .max(40,'Name too long...')
	.matches(/^[a-z A-Z]+$/,"Invalid first name")
    .required('Required'),
    lastName: Yup.string('Please enter a valid Name')
    .trim()
    .max(40,'Name too long...')
    .matches(/^[a-z A-Z]+$/,"Invalid last name")
    .required('Required'),
    phoneno: Yup.string('Please enter a valid Name')
    .trim()
    .max(12,'Name too long...')
    .matches(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,"Invalid number")
    .required('Required'),
    email: Yup.string('Please enter a valid Email')
    .trim()
    .email('Invalid Email')
    .required('Required'),
    password: Yup.string('Please enter a valid Password')
    .trim()
    .min(8, 'Too Short...Minimum 8 characters required')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, "Password Must contain number & uppercase letters")
     .required('Required'),
    confirmPassword: Yup.string('Please enter a valid Password')
    .trim()
    .oneOf([Yup.ref('password'),null],'Password must match...')
    .required('Required'),
    termsflag: Yup.boolean()
.oneOf([true],"You must accept the terms and condition ")})