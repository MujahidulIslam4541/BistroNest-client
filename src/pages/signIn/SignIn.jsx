import { Link } from 'react-router-dom'
import signInImage from '../../assets/others/authentication2.png'
import signInBgImage from '../../assets/others/authentication.png'
import SignInWithSocial from '../../components/signinWithSocial/SignInWithGoogle';

const SignIn = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex items-center justify-center px-4 overflow-hidden"
            style={{
                backgroundImage: `url(${signInBgImage})`,
            }}
        >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full max-w-6xl">
                {/* Left Image Section */}
                <div className="w-full lg:w-1/2 text-center">
                    <img src={signInImage} alt="Sign In Illustration" className="max-w-full" />
                </div>

                {/* Right Form Section */}
                <form className="w-full lg:w-1/2 max-w-md">
                    <fieldset className="space-y-4">
                        <h2 className="text-2xl font-semibold text-center mb-4">Please Sign In</h2>

                        <div>
                            <label className="label">Email</label>
                            <input type="email" className="input w-full bg-white" placeholder="Type here" />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input type="password" className="input w-full bg-white" placeholder="Enter your password" />
                        </div>

                        <div>
                            <input type="text" className="input w-full bg-white" placeholder="Captcha" />
                        </div>

                        <div>
                            <h2 className='text-blue-600'>Reload Captcha</h2>
                            <input type="text" className="input w-full bg-white" placeholder="Type here" />
                        </div>

                        <button type="submit" className="btn w-full bg-[#DBB884] hover:bg-[#c8a75f] text-white">
                            Login
                        </button>

                        <div className="text-center mt-4">
                            <Link to="/register" className="text-[#DBB884] hover:underline">
                                New Here? Create a new Account
                            </Link>
                            <div className='divider'>OR Sign In With</div>
                            <div>
                                <SignInWithSocial />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
