import webd from "../assets/webd.jpg"
const Services = () => {

    return (

        <>
            <div className='sm: bg-background-0 sm: w-full sm: h-screen  lg:bg-background-0 lg:w-full lg:h-screen '>
                <div className=" sm: font-primary sm: text-[25px] sm: text-textcolor-0 sm: -mt-80 sm: text-center lg:font-primary lg:text-[50px] lg:text-textcolor-0 lg:-mt-48 lg:text-center" >Services</div>

                <div>
                    <img className="lg:w-[500px] lg:rounded-3xl lg:ml-[900px] lg:mt-12" src={webd} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0 lg:-mt-44 lg:ml-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsa asperiores beatae dolore sequi distinctio qui <br />sapiente temporibus! Aspernatur expedita commodi nulla tempora itaque quia<br /> quas quod delectus labore amet!</p>
                </div>

                <div>
                    <img className="lg:w-[500px] lg:rounded-3xl lg:mt-48" src={webd} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0"></p>
                </div>

                <div>
                    <img className="lg:w-[500px] rounded-3xl" src={webd} alt="image" />
                    <p className="lg:font-primary lg:text-textcolor-0">Hello Services</p>
                </div>

            </div>
        </>
    )
}

export default Services