

const Services = () => {
    const data = [
        {
            Heading: `Hello Services`
        },
        {
            Heading: `Hello Services`
        }
    ]
    return (

        <>
            <div className='sm: bg-background-0 sm: w-full sm: h-screen  lg:bg-background-0 lg:w-full lg:h-screen '>
                <div className=" sm: font-primary sm: text-[25px] sm: text-textcolor-0 sm: -mt-80 sm: text-center lg:font-primary lg:text-[50px] lg:text-textcolor-0 lg:-mt-32 lg:text-center" >Services</div>
                <div>
                    <div>
                        {data.map((d) => {
                            <div className="lg:font-primary lg:text-textcolor-0">
                                <p>{d.Heading}</p>
                            </div>
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services