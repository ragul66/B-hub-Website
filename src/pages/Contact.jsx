
import Marquee from 'react-fast-marquee'
import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <>
            <div className='bg-background-0 h-screen w-screen'>
                <div className='bg-background-0 text-textcolor-0 font-primary'>
                    <Navbar />
                    <Marquee speed={300}
                        className="  text-[350px] z-1">
                        <h1>GetInTouch</h1>
                    </Marquee>

                    <div className='z-50 '>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact