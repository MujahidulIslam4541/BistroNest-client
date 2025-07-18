import { Link } from 'react-router-dom';
import signInImage from '../../assets/others/authentication2.png';
import signInBgImage from '../../assets/others/authentication.png';
import SignInWithSocial from '../../components/signinWithSocial/SignInWithGoogle';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

const SignIn = () => {
    const captchaRef = useRef(null)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const UserCaptchaValue = captchaRef.current.value;


        if (validateCaptcha(UserCaptchaValue)) {
            alert('Captcha Matched');
        }

        else {
           return toast.error('Captcha does not match');
        }
    }

    return (
        <div
            className="h-full bg-cover bg-center bg-fixed flex items-center justify-center px-4 py-10"
            style={{
                backgroundImage: `url(${signInBgImage})`,
            }}
        >
            {/* Content Box */}
            <div
                className="flex flex-col  lg:flex-row items-center w-full max-w-6xl rounded-xl bg-white/80 backdrop-blur-sm shadow-2xl"
                style={{
                    backgroundImage: `url(${signInBgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: "40px",
                }}
            >
                {/* Left Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                    <img src={signInImage} alt="Sign In Illustration" className="max-w-full" />
                </div>

                {/* Right Form Section */}
                <form onSubmit={handleSignIn} className="w-full lg:w-1/2 max-w-md">
                    <fieldset className="space-y-4">
                        <h2 className="text-2xl font-semibold text-center mb-4">Please Sign In</h2>

                        <div>
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input w-full bg-white" placeholder="Type here" />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input w-full bg-white" placeholder="Enter your password" />
                        </div>




                        <div>
                            <LoadCanvasTemplate />
                            <input ref={captchaRef} type="text" name='captcha' className="input w-full bg-white" placeholder="Type the captcha above"  onBlur={handleValidateCaptcha}/>

                        </div>

                        <button type="submit" className="btn w-full bg-[#DBB884] hover:bg-[#c8a75f] text-white">
                            Sign In
                        </button>

                        <div className="text-center mt-4">
                            <Link to="/signUp" className="text-[#DBB884] hover:underline">
                                New Here? Create a new Account
                            </Link>
                            <div className="divider">OR Sign In With</div>
                            <SignInWithSocial />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
