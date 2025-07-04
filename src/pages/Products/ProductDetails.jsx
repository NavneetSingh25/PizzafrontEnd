import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Redux/Slices/ProductSlice";
import { addProductToCart, getCartDetails, removeProductFromCart } from "../../Redux/Slices/CartSlice";
import Layout from "../../Layouts/Layout";

function ProductDetails() {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const dispatch = useDispatch();
    const [isInCart,setIsInCart]=useState(false);
    
    async function fetchProductDetails() {
        const details = await dispatch(getProductDetails(productId));
        setProductDetails(details?.payload?.data?.data);
    }

    async function handleCart() {
        const response=await dispatch(addProductToCart(productId));
        if(response?.payload?.data?.success){
            setIsInCart(true),
            dispatch(getCartDetails());
        }
    }

    async function handleRemove() {
        const response=await dispatch(removeProductFromCart(productId));
        if(response?.payload?.data?.success){
            setIsInCart(false),
            dispatch(getProductDetails(productId));
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    const {
        productImage,
        productName,
        description,
        price,
        category,
        rating = 4,
        reviews = 4,
        } = productDetails;

    return (
        <Layout>
        <div className="flex flex-col md:flex-row gap-10 px-6 py-8 bg-orange-50 min-h-screen">
        {/* Image section */}
        <div className="md:w-1/2 flex justify-center items-start">
            <img
            src={productImage}
            alt={productName}
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-orange-600">{productName}</h1>
            <p className="text-sm font-medium text-green-600 bg-green-100 inline-block px-2 py-1 rounded">
            {category}
            </p>
            <p className="text-gray-700">{description}</p>
            <div className="flex pt-5">
                <span className="text-2xl font-semibold text-gray-800">₹ {price}</span>
                {isInCart? (
                    <button onClick={()=>{handleRemove(productId)}}
                    className="flex px-6 py-6 ml-auto text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600">
                        Remove From Cart
                    </button>
                ):(
                    <button onClick={handleCart} className="flex px-6 py-6 ml-auto text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600">
                        Add To Cart
                    </button>
                )
                }
            </div>
            
            <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
                <span key={i}>
                {i < rating ? "★" : "☆"}
                </span>
            ))}
            <span className="text-gray-600 text-sm">({reviews} reviews)</span>
            </div>




            
            <div className="mt-6">
            <p className="text-sm text-gray-500">Share this:</p>
            <div className="flex gap-3 mt-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">Facebook</button>
                <button className="bg-sky-400 text-white px-3 py-1 rounded text-sm hover:bg-sky-500">Twitter</button>
                <button className="bg-pink-500 text-white px-3 py-1 rounded text-sm hover:bg-pink-600">Instagram</button>
            </div>
            </div>
        </div>
        </div>
        </Layout>
    );
}

export default ProductDetails;