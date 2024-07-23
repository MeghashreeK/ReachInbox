import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LoginBox from './LoginBox'

const Login = () => {
  return (
    <div className='flex flex-col justify-between bg-black w-screen h-screen items-center'>
        <Header/>
        <LoginBox/>
        <Footer/>
    </div>
  )
}

export default Login