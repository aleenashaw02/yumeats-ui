import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ?
            sliders.length - 1
            : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1
        const newIndex = isLastSlide ?
            0
            : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const moveToSlide = (sliderIndex) => {
        setCurrentIndex(sliderIndex)
    }
    return (
        <div className="max-w-[1520px] h-[450px] w-full relative p-4 group">
            <div className="w-full h-full bg-center bg-cover rounded-2xl duration-500"
                style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] left-5 rounded-full -translate-x-0 translate-y-[-50%] bg-orange-700 p-2 text-white ml-2 cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlider} />
            </div>
            <div className=" hidden group-hover:block absolute top-[50%] right-5 rounded-full -translate-x-0 translate-y-[-50%] bg-orange-700 p-2 text-white mr-2 cursor-pointer">
                <BsChevronCompactRight onClick={nextSlider} />
            </div>
            <div className="flex top-4 py-2 justify-center">
                {sliders.map((sliderItem, sliderIndex) => (
                    <div key={sliderIndex} onClick={() => moveToSlide(sliderIndex)} className="text-2xl cursor-pointer">
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Featured