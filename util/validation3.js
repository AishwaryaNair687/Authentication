import * as Yup from 'yup';
export const validateforgot =  Yup.object().shape({
    email: Yup.string('Please enter a valid Email or Phone Number')
    .trim()
    .email('Invalid Email')
    .required('*Required'),
    otp: Yup.string('Please enter a valid OTP')
    .trim()
    .min(6, '*Invalid OTP...')
    .matches(/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,"Invalid number")
   .required('*Required'),
   })