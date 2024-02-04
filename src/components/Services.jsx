
// import Webd from "../assets/webd.jpg"

const Services = () => {

    const data = [
        {
            Heading: `Hello Services`,
            img: "src/assets/webd.jpg"
        }

    ]
    return (

        <>
            <div className='sm: bg-background-0 sm: w-full sm: h-screen  lg:bg-background-0 lg:w-full lg:h-screen '>
                <div className=" sm: font-primary sm: text-[25px] sm: text-textcolor-0 sm: -mt-80 sm: text-center lg:font-primary lg:text-[50px] lg:text-textcolor-0 lg:-mt-32 lg:text-center" >Services</div>
                <div>
                    <div>
                        {data.map((d) => (
                            <div className="lg:font-primary lg:text-textcolor-0">
                                <img className="lg:rounded-3xl lg:w-[500px] lg:mt-12" src={d.img} alt="image" />
                                <p className="lg:text-right">{d.Heading}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services