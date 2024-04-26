import React from "react";

const Delivery = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <h3 className="text-center font-bold text-3xl text-orange-700">Quick Delivery</h3>
            <div className="w-[1520] grid md:grid-cols-2">
                <img className="mx-auto w-[550px] my-4" src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" />
                <div className="my-4 flex flex-col justify-center">
                    <p className="text-orange-500 font-bold">Get The App</p>
                    <p className="font-bold text-[30px]">Limitless Convenience on-demand</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
                        voluptate reprehenderit dolore autem cum ullam sed odit
                        perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?
                    </p>
                    <button className="flex justify-start my-8 bg-black w-[100px] text-white text-center p-2.5 rounded-xl">Get Started</button>
                </div>
            </div>

        </div>
    )
}
export default Delivery