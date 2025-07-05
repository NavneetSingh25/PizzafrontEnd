import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/Images/Pizza2.png'
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Slices/AuthSlice';
import Cart from '../assets/Images/Cart.svg'
import { useEffect } from 'react';
import { getCartDetails } from '../Redux/Slices/CartSlice';

function Layout({children}){
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
    const cartData=useSelector((state)=>state.carts.cartsData);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    async function handleLogout(e) {
        e.preventDefault();
        dispatch(logout());
    }

    async function fetchCartDetails() {
        const response=await dispatch(getCartDetails());
    }

    useEffect(()=>{
        if(isLoggedIn){
            fetchCartDetails();
        }
    },[])
    
    return(
        <div className='flex flex-col min-h-screen'>
            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">
                <div onClick={()=>navigate('/')} className="flex items-center justify-center">
                    <p>Pizza App</p>
                    <img src={logo} alt="logo" className='h-12 w-12 rounded-lg' />
                    
                </div>

                <div className="hidden md:block">
                <ul className="gap-6 flex">
                    <li className="hover:text-[#FF9910]">
                    <Link to="/menu">Menu</Link>
                    </li>
                    <li className="hover:text-[#FF9910]">
                    <Link to="/services">Services</Link>
                    </li>
                    <li className="hover:text-[#FF9910]">
                    <Link to="/about">About</Link>
                    </li>
                </ul>
                </div>
                <div>
                    <ul className='flex gap-4'>
                        <li className='hover:text-[#c57c2893]'>
                            {isLoggedIn ? (<Link onClick={handleLogout}>
                                Logout
                            </Link>):(<Link to='/auth/login'>
                                Login
                            </Link>)}
                        </li>
                        {
                            isLoggedIn && (
                                <Link to={'/cart'}>
                                    <li>
                                        <img src={Cart} alt="Cart" className='w-8 h-8 inline'/>
                                        {''}
                                        <p className='text-black inline'>{cartData?.items?.length}</p>
                                    </li>
                                </Link>
                            )
                        }
                    </ul>
                </div>

            </nav>

            <main className='flex-grow'>
                {children}
            </main>
            


            <Footer/>
        </div>
    );
}

export default Layout;