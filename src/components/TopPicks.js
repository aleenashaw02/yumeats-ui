import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { topPicks } from "../data/data";

const TopPicks = () => {
    return (
        <div>
            <h3 className="text-center font-bold text-3xl text-orange-700">Top Picks</h3>
            <div className="hidden lg:flex max-w-[1520px] p-2 m-auto">
                <Splide options={{ perPage: 4, gap: '0.5rem', drag: 'free' }}>
                    {topPicks.map((items) => {
                        return (
                            <SplideSlide key={items.id}>
                                <div className="rounded-3xl relative">
                                    <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                                        <p className=" p-2 font-bold">{items.title}</p>
                                        <p className="px-2">{items.price}</p>
                                        <button className="border-dotted text-white border-white absolute bottom-4 mx-2">Add to cart</button>
                                    </div>
                                    <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                                        src={items.img}
                                        alt={items.title} />
                                </div>
                            </SplideSlide>
                        )
                    })}
                </Splide>

            </div>
        </div>
    )
}
export default TopPicks