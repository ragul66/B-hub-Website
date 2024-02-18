import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ring from '../assets/ring.svg'
import now from '../assets/now.svg'

const Pricing = () => {
    return (
        <>
            <Navbar />
            <div className='bg-background-0 h-screen w-screen flex justify-center items-center'>
                <div className='text-textcolor-0 font-primary text-[150px] '>
                    <h1 className='-mt-20'>Prices & Services</h1>
                </div>
            </div>

            <div className='text-background-0 bg-textcolor-0 h-max w-screen font-primary  flex flex-row rounded-t-[100px] -mt-40'>
                <div className='text-[300px] -space-y-32 mt-12 ml-10'>
                    <h1>Ready</h1>
                    <h1>to</h1>
                    <h1>Grind</h1>
                    <h1>The</h1>
                    <h1>Market</h1>
                </div>

                <div className='App h-screen w-48  flex  justify-center items-center mt-96 hover:translate-x-6 transition-all'>
                    <img className='transition-all' src={ring} />
                    <img className='-ml-[105px]' src={now} />
                </div>

            </div>
            <div className='-mt-28'>
                <Footer />
            </div>
        </>
    )
}

export default Pricing