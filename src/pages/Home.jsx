import { IconArrowrightShort } from "../Components/Icons/IconArrowRightShort";
import Pizza3 from "../assets/Images/Pizza3.png"
import image from "../assets/Images/cook.png"
import { IconPatchedChecked } from "../Components/Icons/IconPatchedCheck";

function Home(){
    return(
        <div>
            {/*hero section*/}
            <section 
                className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300 ">
                    <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                        <div className="flex justify-center text-4xl md:justify-normal">
                            <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">Enjoy the slice {' '}</h1>
                            <h1>😋</h1>
                        </div>

                        <p className="pb-4 text-[#687280]">
                        The pizza app lets you order your favourite pizza from the comfort of your home.
                        Enjoy the best pizza in town with just a few clicks.
                        </p>
                        <button className=" flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group ">
                            Order now
                            <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                                <IconArrowrightShort/>
                            </span>
                        </button>

                    </div>

                    <div className="ml-20">
                        <img 
                        src={Pizza3}
                        alt="PizzaImage"
                        className="w-72 h-72 object-cover rounded-full mx-auto"
                        />
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
                    width={300}
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

                    </div>

                </div>
            
        </section>

        </div>
    );
}

export default Home;