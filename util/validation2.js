import * as Yup from 'yup';
export const validatesignin =  Yup.object().shape({
    email: Yup.string('Please enter a valid Email')
    .trim()
    .email('Invalid Email')
    .required('*Required'),
    password: Yup.string('Please enter a valid Password')
    .trim()
    .min(8, '*Invalid Password...Password minimum length is 8.')
   .required('*Required'),
   })