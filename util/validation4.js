import * as Yup from 'yup';
export const validatereset =  Yup.object().shape({
    
    newpassword: Yup.string('Please enter a valid Password')
    .trim()
    .min(8, '*Invalid Password...Password minimum length is 8.')
   .required('*Required'),
   confirmpass: Yup.string('Please enter a valid Password')
    .trim()
    .oneOf([Yup.ref('newpassword'),null],'Password must match...')
    .required('Required'),
   })
