
import Carousel from "../components/Carousel"
import Services from "../components/Services"
import TopNavbar from "../components/TopNavbar"
import Whatsapp from "../components/Whatsapp"



const Home = () => {
    return (
        <>
            <div className='sm: bg-background-0 sm: w-full sm: h-max  lg:bg-background-0 lg:w-full lg:h-max '>
                <TopNavbar />
                <Services />
                <Whatsapp />
                <Carousel />
            </div>
        </>
    )
}

export default Home