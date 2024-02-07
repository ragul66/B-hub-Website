
import Contactbox from '../components/Contactbox'
import Header from '../components/Header'

const Contact = () => {
    return (
        <>
            <div className='flex flex-row'>
                <div className="bg-background-0 w-full h-screen text-textcolor-0 font-primary">
                    <Header />
                    <Contactbox />
                </div>
            </div>
        </>
    )
}

export default Contact