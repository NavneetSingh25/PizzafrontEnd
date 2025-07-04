import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layouts/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { placeOrder } from "../../Redux/Slices/OrderSlice";

function Order(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {cartsData}=useSelector((state)=>state.carts);

    const [details,setDetails]=useState({
        paymentMethod:'',
        address:''
    })

    function handleUserInput(e){
        const {name,value}=e.target;
        setDetails({
            ...details,
            [name]:value
        })
    }

    async function  handleFormSubmit(e){
        e.preventDefault();
        if(details.paymentMethod==='' || details.address===''){
            toast.error('please fill all the details');
            return;
        }

        const response=await dispatch(placeOrder(details));
        console.log('order',response);
        
        if(response?.payload?.data?.success){
            toast.success('Order Placed Successfully');
            navigate('/orders/success');
        }else{
            toast.error('something went wrong');
        }
    }

    useEffect(()=>{
        console.log(cartsData?.items?.reduce((acc,item)=>acc+item?.quantity*item?.product?.price,0));
    },[])
    return(
        <Layout>
            <section className="text-gray-600 body-font min-h-56">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Thanks for choosing us!{' '}
                        </h1>
                        <p className="lg:w-2/3 mx-auto  text-gray-600 text-2xl leading-relaxed">
                        Total Price - 
                        <span className=" text-2xl text-red-900">
                            ${cartsData?.items?.reduce((acc,item)=>acc+item?.quantity*item?.product?.price,0)}
                        </span>
                        </p>
                    </div>
                    <form onSubmit={handleFormSubmit} >
                        <div className="relative flex-grow w-full">
                            <label htmlFor="paymentMethod" className="leading-7 m-2 text-gray-600 text-2xl">
                                Payment Method
                            </label>
                            <select name="paymentMethod" 
                            required
                            onChange={handleUserInput}
                            className="p-2 border rounded-md w-full my-2 focus:outline-none focus:bg-gray-300  bg-white text-gray-700">
                                <option value="" disabled selected>Select</option>
                                <option value="CASH">Offline</option>
                                <option value="ONLINE">Online</option>
                            </select>
                        </div>
                        <div className="flex flex-grow relative">
                            <label htmlFor="address" className="leading-7  my-2 text-gray-600 text-2xl">
                                Address
                            </label>
                            <textarea name="address" required onChange={handleUserInput} 
                            placeholder="Enter your address here.."
                            className="p-2 w-full border rounded-md focus:outline-none focus:bg-gray-100  bg-white text-gray-700">
                            </textarea>
                        </div>
                        <button className="text-bold  bg-yellow-400 py-2 my-4 justify-center items-center border-0 px-6 focus:outline-none hover:bg-yellow-500 rounded text-2xl ">
                            Place Order
                        </button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Order;