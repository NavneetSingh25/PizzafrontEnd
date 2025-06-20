function Footer(){
    return(
    <footer className="bg-gradient-to-r from-amber-50 to-orange-300 text-gray-700 py-4 ">
      <div className="container mx-auto flex flex-col items-center px-5 py-3">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="flex space-x-8">
          <a
            href="pizza@gmail.com"
            className="flex  space-x-2 hover:text-red-400"
          >
            <div className="w-6 h-6" >
                📧 
            </div>
            <span>Email</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-pink-500"
          >
            
            <span>Instagram</span>
          </a>
        </div>

        <p className="mt-6 text-sm text-neutral-400">
          © {new Date().getFullYear()} Pizza App. All rights reserved.
        </p>
      </div>
    </footer>

    );
}

export default Footer;