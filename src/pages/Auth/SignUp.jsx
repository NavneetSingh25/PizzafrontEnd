import signup from '../../assets/Images/image.png';
function Signup(){
    return(
        <>
            <section className="text-gray-600 body-font">
                <div className="flex flex-wrap items-center h-screen px-10 py-6 mx-auto">
                    <div className="hidden pr-0 lg:w-3/5 md:w-1/2 md:pr-16  lg:pr-0 md:block ml-10">
                    <img src={signup} className='w-78 h-80 object-cover mx-5 ' alt="SignUp" />
                    </div>
                    <form className="flex flex-col w-full p-8 mt-10 bg-gray-100 lg:w-2/6 rounded-lg md:w-1/2 md:ml-auto md:mt-0 ">
                        <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">Sign Up</h2>
                        <div className="relative mb-4">
                            <label htmlFor="firstname" className="text-sm text-gray-600 leading-7">First Name</label>
                        <input type="text" id="firstname" name="first name" required minLength={5} placeholder='John' className="w-full px-3 py-1 text-base mt-2 leading-8 text-gray-700  transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none  focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 focus:outline-none" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="firstname" className="text-sm text-gray-600 leading-7">Email <span className='text-red-500'>*</span></label>
                        <input type="email" id="email" name="email" required  placeholder='John@example.com' className="w-full px-3 py-1 text-base mt-2 leading-8 text-gray-700  transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none  focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 focus:outline-none" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="mobile number" className="text-sm text-gray-600 leading-7">Mobile Number<span className='text-red-500'>*</span></label>
                        <input type="tel" id="mobile number" name="mobile number" required maxLength={12} placeholder='Enter 10 digit mobile number' className="w-full px-3 py-1 text-base mt-2 leading-8 text-gray-700  transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none  focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 focus:outline-none" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="passsword" className="text-sm text-gray-600 leading-7">Password<span className='text-red-500'>*</span></label>
                        <input type="password" id="password" name="password" required  placeholder='Enter your password' className="w-full px-3 py-1 text-base mt-2 leading-8 text-gray-700  transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-none  focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 focus:outline-none" />
                        </div>

                        <button className='w-full px-8 text-lg py-2 border-0 rounded focus:outline-none   text-white font-bold bg-yellow-500  hover:bg-yellow-600'>Create Account</button>

                        <p className='t-3 text-xs text-gray-500 '>Already have an account?
                            <a href="/login" className='text-yellow-500 '>Login</a>
                        </p>


                    </form>
                </div>
            </section>
        </>
    )
}

export default Signup;