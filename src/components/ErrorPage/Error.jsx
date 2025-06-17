import { Link } from 'react-router-dom'
import ErrorImage from '../../assets/error-404-concept-illustration_114360-1811.avif'

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center  text-center p-6">
            <img
                src={ErrorImage}
                alt="Page Not Found"
                className="w-full max-w-md mb-6"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-6">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300">
                    ⬅ Back to Home
                </button>
            </Link>
        </div>
    )
}

export default Error
