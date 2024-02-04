import Header from "./Header"


const TopNavbar = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className='sm: bg-background-0 sm: w-full sm: h-screen  lg:bg-background-0 lg:w-full lg:h-screen '>
                <div className='sm: text-textcolor-0 sm: font-primary sm: text-[25px] sm: p-[22px]  lg:text-[100px] lg:font-primary lg:text-textcolor-0 lg:p-52'>
                    <p className="sm: align-middle sm: hover:align-top sm: mt-24 lg:align-middle  lg:hover:align-top lg:mt-7">B-Hub Consultancy & Services</p>
                    <p className="sm: text-[11px] sm: text-center lg:text-[20px] lg:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus harum quae veniam laudantium totam quaerat, magnam expedita assumenda natus nisi. Dignissimos sint asperiores dolorum nesciunt voluptates dolor odit qui.</p>
                </div>
            </div>

        </>
    )
}

export default TopNavbar