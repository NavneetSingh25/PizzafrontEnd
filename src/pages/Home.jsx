import { IconArrowrightShort } from "../Components/Icons/IconArrowRightShort";
import Pizza3 from "../assets/Images/Pizza3.png"
import image from "../assets/Images/Cook.png"
import { IconPatchedChecked } from "../Components/Icons/IconPatchedCheck";
import Food from "../assets/Images/food.png"
import pickup from "../assets/Images/pickup.png"
import enjoy from "../assets/Images/enjoy.png"
import basil from "../assets/Images/basil.png"
import Layout from'../Layouts/Layout'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import { Link, useNavigate } from "react-router-dom";

function Home(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {productData}=useSelector((state)=>state.product);
    
    useEffect(()=>{
        dispatch(getAllProducts());
    },[])
    const topThreeProducts = productData
    .filter(item => item.inStock)
    .slice(0, 3);

    return(
        <Layout>
        <div>
            {/*hero section*/}
            <section 
                className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300 ">
                    <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                        <div className="flex justify-center text-4xl md:justify-normal">
                            <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text opacity-0 translate-y-0 animate-fade-in">Enjoy the slice {' '}</h1>
                            <h1>😋</h1>
                        </div>

                        <p className="pb-4 text-[#4B5563] text-sm sm:text-base leading-relaxed">
                        <span className="font-semibold text-[#FF860D]">Artisian-Crafted.Algorithm Approved {' '} </span>
                        Every Pizza at <span className="font-bold text-orange-500">Crustique</span> is a blend of tradition and tech- hand-stretched dough,locally sourced ingredients and smart flavours designed to delight.
                        </p>
                        <button onClick={()=>navigate('/menu')} className=" flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group hover:scale-10 transition-all shadow-md hover:shadow-lg ">
                            Order now
                            <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                                <IconArrowrightShort/>
                            </span>
                        </button>


                    </div>


                    <img
                    src={basil}
                    className="absolute top-[10%] left-[55%] w-6 h-6 animate-float blur-[0.3px]"
                    alt="basil"
                    />
                    <div className="ml-20 relative">
                        <img 
                        src={Pizza3}
                        alt="PizzaImage"
                        className="w-72 h-72 object-cover rounded-full mx-auto "
                        />
                        <div className="absolute top-0 left-1/2 w-10 h-20 -translate-x-1/2 animate-steam opacity-40">
                            <div className="w-full h-full bg-white rounded-full filter blur-md opacity-40" />
                        </div>
                    </div>
            </section>

        {/*services section*/}

        <section 
            className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300">
                <div className="container flex flex-col md:flex-row">
                    <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
                    <img 
                    src={image} 
                    alt="CookImage"
                    width={500}
                    className=" rounded-lg "
                    />
                    </div>

                    <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
                        <div className="flex flex-col items-start lg:items-start">
                        <div>
                            <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                                Cooked by the best <br /> chefs in the world.
                            </h2>
                            <p className="text-base leading-relaxed text-[#6B7280]">
                                There are many benefits regarding to that but the main ones are:
                            </p>
                        </div>
                    </div>

                    <div className="w-full p-1">
                        <div className="flex items-center h-full p-2 text-2xl rounded">
                            <IconPatchedChecked className="text-[#f38339] w-10 h-10 mr-4"/>
                            <span className="font-bold title-font">Perfect Taste</span>
                        </div>
                    </div>

                    <div className="w-full p-1">
                        <div className="flex items-center h-full p-2 text-2xl rounded">
                            <IconPatchedChecked className="text-[#f38339] w-10 h-10 mr-4"/>
                            <span className="font-bold title-font">Prepared Quickly</span>
                        </div>
                    </div>

                    <div className="w-full p-1">
                        <div className="flex items-center h-full p-2 text-2xl rounded">
                            <IconPatchedChecked className="text-[#f38339] w-10 h-10 mr-4"/>
                            <span className="font-bold title-font">Food Hygiene Guaranteed</span>
                        </div>
                    </div>

                    <div className="px-5 py-4 mx-auto">
                        <div className="flex justify-center py-4">
                            <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
                        </div>
                        <div className="flex flex-wrap space-y-6 md:space-y-0">
                            <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                <img src={Food} alt="order food" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                    Order Food 
                                </h2>
                                <p className="text-base leading-relaxed">
                                    As easy as 1,2,3.just select your pizza and dplace order.
                                </p>
                            </div>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                <img src={pickup} alt="order food" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                    Pickup Food
                                </h2>
                                <p className="text-base leading-relaxed">
                                    Pick up your order from the nearest store or get it delivered to your doorsteps.
                                </p>
                            </div>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                <img src={enjoy} alt="order food" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                Enjoy Food  
                                </h2>
                                <p className="text-base leading-relaxed">
                                    As soon as you get your food,enjoy it with your loved ones.
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>

                    </div>

                </div>
            
        </section>

        <section className="py-10 px-6 bg-gradient-to-r from-orange-50 to-orange-300">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

            {/* Google Maps Embed */}
            <div className="w-full md:w-1/2 h-[300px]">
            <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7104792713484!2d85.3750614153627!3d23.994242184482885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4202fd7b5182b%3A0x28b55c36413b9f1!2sHazaribag%2C%20Jharkhand%20825101!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
            ></iframe>
            </div>

            {/* Description */}
            <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text mb-4">
                Find us in the heart of Hazaribag
            </h2>
            <p className="text-[#475569] mb-3">
                Located in the bustling city center, our outlet delivers piping hot pizzas right from the oven to your doorstep.
                Whether you dine in or order online, you’re always within reach of great taste.
            </p>
            <p className="text-[#475569]">
                Open daily from <span className="font-semibold text-orange-600">10 AM to 11 PM</span> — come drop by or just fire up the app and we’ll come to you!
            </p>
            </div>

        </div>
        </section>

        <div className="mx-auto px-4 bg-gradient-to-r from-cyan-50 to-cyan-100 py-6">
        <div className="flex flex-wrap justify-center gap-6">
            {topThreeProducts.map(item => (
            <div key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <Link to={`/product/${item._id}`}>
                <div className="overflow-hidden border rounded-lg shadow-sm hover:shadow-md transition">
                    <img
                    src={item.productImage}
                    alt={item.productName}
                    className="object-cover w-full h-48 rounded-t-lg"
                    />
                    <div className="p-4 bg-white">
                    <p className="text-sm text-orange-500 font-medium uppercase tracking-wider">
                        {item.category}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {item.productName}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                        {item.description}
                    </p>
                    <p className="text-lg font-bold text-orange-600">${item.price}</p>
                    </div>
                </div>
                </Link>
            </div>
            ))}
        </div>
        </div>
        

        </div>
        </Layout>
    );
}

export default Home;

