import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-100 to-orange-300 text-gray-700 py-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-orange-600">Contact Us</h2>
          <p className="mb-2">📧 <a href="mailto:pizza@gmail.com" className="hover:text-red-600">pizza@gmail.com</a></p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-orange-600">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/menu" className="hover:text-orange-500">Menu</Link></li>
            <li><Link to="/services" className="hover:text-orange-500">Services</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link to="/cart" className="hover:text-orange-500">Your Cart</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-orange-600">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">📷</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">🐦</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">📘</a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pizza App. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;