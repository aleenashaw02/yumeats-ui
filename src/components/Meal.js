import React from "react";
import { mealData } from "../data/data";
const Meal = () => {
    return (
        <div className="max-width-[1520px] px-4 py-12 m-auto">
            <h3 className="text-center font-bold text-3xl text-orange-700">Meals</h3>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap:6">
                {
                    mealData.map((i) => (
                        <div key={i.id} className="border-none hover:scale-105 duration-300 m-2" s>
                            <img src={i.image}
                                className="w-full h-[200px] object-cover rounded-lg" />
                            <h1>{i.name}</h1>
                            <h2>{i.price}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}
export default Meal