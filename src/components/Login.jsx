import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const handlehome = () => [
        navigate('/home')
    ]
    return (
        <>
            <div className='sm: bg-background-0 sm: w-full sm: h-screen lg:bg-background-0 lg:w-full lg:h-screen lg:px-96 lg:py-96'>
                <button className=' lg:text-button-0' onClick={handlehome} >Go Home</button>
            </div>
        </>
    )
}

export default Login