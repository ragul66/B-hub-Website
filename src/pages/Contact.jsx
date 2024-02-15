
import Contactbox from '../components/Contactbox'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <>
            <div className='bg-background-0 text-textcolor-0 font-primary'>
                <Navbar />
                <div className='flex flex-row'>
                    <div className="w-full h-screen ">
                        <Contactbox />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Contact