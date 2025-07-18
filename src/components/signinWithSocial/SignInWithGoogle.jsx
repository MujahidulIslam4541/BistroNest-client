import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SignInWithSocial = () => {
  return (
    <div className='flex gap-4 justify-center items-center'>
      <FcGoogle size={25}/>
      <FaFacebook size={25}></FaFacebook>
    </div>
  )
}

export default SignInWithSocial
