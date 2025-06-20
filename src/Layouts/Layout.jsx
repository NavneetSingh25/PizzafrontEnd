import logo from '../assets/Images/Pizza2.png'
import Footer from '../Components/Footer';

function Layout({children}){
    return(
        <div>
            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">
                <div className="flex items-center justify-center">
                    <p>Pizza App</p>
                    <img src={logo} alt="logo" className='h-12 w-12 rounded-lg' />
                    
                </div>

                <div className='hidden md:block'>
                    <ul className='gap-4 flex'>
                        <li className='hover:text-[#FF9910]'>
                            {' '}
                            <p>Menu {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9910]'>
                            {' '}
                            <p>Services {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9910]'>
                            {' '}
                            <p>About  {' '}</p>
                        </li>

                    </ul>
                </div>

            </nav>


            {children}


            <Footer/>
        </div>
    );
}

export default Layout;