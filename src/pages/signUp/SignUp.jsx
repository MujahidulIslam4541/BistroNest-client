import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SignInWithSocial from '../../components/signinWithSocial/SignInWithGoogle';
import signInImage from '../../assets/others/authentication2.png';
import signInBgImage from '../../assets/others/authentication.png';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // এখানে তোমার signup logic বসাতে পারো
    };

    useEffect(() => {
        if (errors.name) {
            toast.error("Name is required");
        }

        if (errors.email) {
            toast.error("Email is required");
        }

        if (errors.password) {
            if (errors.password.type === "required") {
                toast.error("Password is required");
            } else if (errors.password.type === "minLength") {
                toast.error(errors.password.message);
            } 
        }
    }, [errors]);

    return (
        <div>
            <div
                className="h-full bg-cover bg-center bg-fixed flex items-center justify-center px-4 py-10"
                style={{
                    backgroundImage: `url(${signInBgImage})`,
                }}
            >
                <div
                    className="flex flex-col lg:flex-row items-center w-full max-w-6xl rounded-xl bg-white/80 backdrop-blur-sm shadow-2xl"
                    style={{
                        backgroundImage: `url(${signInBgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: "40px",
                    }}
                >
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                        <img src={signInImage} alt="Sign In Illustration" className="max-w-full" />
                    </div>

                    {/* Right Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-1/2 max-w-md">
                        <fieldset className="space-y-4">
                            <h2 className="text-2xl font-semibold text-center mb-4">Please Sign Up</h2>

                            <div>
                                <label className="label">Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    className="input w-full bg-white"
                                    placeholder="Type here"
                                />
                            </div>

                            <div>
                                <label className="label">Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="input w-full bg-white"
                                    placeholder="Type here"
                                />
                            </div>

                            <div>
                                <label className="label">Password</label>
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters",
                                        }
                                    })}
                                    type="password"
                                    className="input w-full bg-white"
                                    placeholder="Enter your password"
                                />
                            </div>

                            <button type="submit" className="btn w-full bg-[#DBB884] hover:bg-[#c8a75f] text-white">
                                Sign Up
                            </button>

                            <div className="text-center mt-4">
                                <Link to="/signIn" className="text-[#DBB884] hover:underline">
                                    New Here? Create a new Account
                                </Link>
                                <div className="divider">OR Sign Up With</div>
                                <SignInWithSocial />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
