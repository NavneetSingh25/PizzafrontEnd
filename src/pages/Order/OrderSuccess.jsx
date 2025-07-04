import { useNavigate } from 'react-router-dom';
import order from '../../assets/Images/order.png'
import Layout from '../../Layouts/Layout';
function OrderSuccess() {
    const navigate=useNavigate();
    return (
    <Layout>
        <div className="flex flex-col justify-center items-center bg-cyan-50 py-18 px-4 text-center">
            <img
            src={order}
            alt="Order Successful"
            className="w-[400px] h-[300px] mt-4 object-contain mb-6"
            />
            <h1 className="text-3xl font-semibold text-green-700 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 font-semibold max-w-md mb-2">
            Thank you for your purchase. Your delicious food is being prepared and will reach you soon!
            </p>
            <button 
        onClick={()=>navigate('/')}
        className='bg-yellow-500 text-white px-4 py-2 rounded first-line:mt-2 mb-4'>
            Go Back Home
        </button>
        </div>
        </Layout>
    );
}

export default OrderSuccess;