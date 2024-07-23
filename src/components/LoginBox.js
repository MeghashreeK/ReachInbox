import React from 'react'
import googleLogo from '../images/googleLogo.png'
const LoginBox = () => {
    return (
        <div className='flex flex-col gap-[48px] w-[460px] h-[312px] rounded-[17px] border border-[#343A40] pt-[24px] pr-[40px] pb-[40px] pl-[40px] bg-[linear-gradient(138.97deg,_#111214_5.16%,_#121212_105.18%)]'>


            <div className='flex flex-col w-[380px] h-[103px] gap-[24px]' >
                <div className='flex flex-col w-[380px] h-[103px] gap-[32px]'>
                    <div className='flex flex-col w-[380px] h-[103px] gap-[24px]'>
                        <p className='text-white text-center w-[380px] h-[31px] font-semibold text-[20px] leading-[31px]'>Create a new account</p>
                        <div className='flex w-[380px] h-[48px] gap-[16px]'>
                            <div className='flex text-center w-[380px] h-[31px] gap-[10px] rounded-[4px] justify-center items-center border border-[#707172] p-[20px] cursor-pointer'>
                                <div className='flex justify-center items-center h-[32px] gap-[12px]'>
                                    <div className='w-[23.5px] h-[32px] relative'>
                                        <img className='w-[16px] h-[21px] absolute top-[5px] left-[7.75px]' src={googleLogo} alt="G" />
                                    </div>
                                    <p className='text-[#CCCCCC] w-[145px] h-[27px] leading-[26.1px] tracking-[-0.3px]'>Sign Up with Google</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center w-[380px] h-[97px] gap-[24px] justify-center'>

                <div className='flex w-[195px] h-[48px]'>
                    <button className='flex w-[195px] h-[48px] rounded-[4px] pt-[13px] pb-[13px] pr-[35px] pl-[35px] gap-[10px] bg-[linear-gradient(to_right,_rgba(75,_99,_221,_1),_rgba(5,_36,_191,_0.99))]' >
                        <p className=' w-[125px] h-[22px] text-white font-semibold text-[14px] leading-[21.7px]'>Create an Account</p>
                    </button>
                </div>
                <div className='flex items-center justify-center w-[380px] h-[25px] gap-[13px]'>
                    <div className='flex w-[248px] h-[25px] gap-[4px]'>
                       <p className='w-[190px] h-[25px] leading-[24.8px] text-center text-[#909296]'>Already have an account?</p>
                       <p className='w-[50px] h-[25px] leading-[24.8px] text-center text-[#C1C2C5]'>Sign In</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LoginBox
