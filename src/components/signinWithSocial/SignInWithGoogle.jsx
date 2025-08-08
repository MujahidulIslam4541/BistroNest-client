import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import UseContext from '../../hooks/useContext'
import useAxiosOpen from '../../hooks/useAxiosOpen'
import { useNavigate } from 'react-router-dom'

const SignInWithSocial = () => {
  const navigate=useNavigate()
  const { googleSignIn } = UseContext()
  const axiosPublic = useAxiosOpen()
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user)
        const userinfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }
        axiosPublic.post('/user', userinfo)
          .then(res => {
            console.log(res.data)
            navigate('/')
          })
      })
  }
  return (
    <div className='flex gap-4 justify-center items-center'>
      <button onClick={handleGoogleSignIn}><FcGoogle size={25} /></button>
      <FaFacebook size={25}></FaFacebook>
    </div>
  )
}


export default SignInWithSocial
