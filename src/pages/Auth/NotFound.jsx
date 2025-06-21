import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-orange-100 to-yellow-200">
      <h1 className="text-9xl font-extrabold text-orange-500 drop-shadow-lg mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you're looking for doesn’t exist or has been moved. But don't worry—we’ll help you get back on track.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition duration-200"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;