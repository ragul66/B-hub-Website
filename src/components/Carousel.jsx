
import webd from "../assets/webd.jpg"
import adminimg from "../assets/adminimg.png"
import mediaimg from "../assets/mediaimg.webp"
import contentimg from "../assets/contentimg.jpg"
// const Carousel = () => {
//     return (
//         <>
//             <div className='sm: bg-background-0 sm: w-full sm: h-max  lg:bg-background-0 lg:w-full lg:h-max '>
//                 <div className=" sm: text-textcolor-0 sm: font-primary sm: text-[25px] lg:text-textcolor-0 lg:font-primary lg:text-center lg:mt-48 lg:text-[50px]">Projects</div>
//             </div>
//         </>
//     )
// }

// export default Carousel


import { useState, useEffect } from 'react';
// import './Carousel.css'; // Import your CSS file for styling

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { webd },
        { adminimg },
        { mediaimg },
        { contentimg }
        // Add more image URLs as needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel-container sm: bg-background-0 sm: w-full sm: h-max  lg:bg-background-0 lg:w-full lg:h-screen">
            <button onClick={handlePrev} className="prev-button">Previous</button>
            <div className="image-container">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <button onClick={handleNext} className="next-button">Next</button>
        </div>
    );
};

export default Carousel;
