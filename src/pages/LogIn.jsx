import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import GoogleLogIn from "../components/socialLogIn/GoogleLogIn";

const LogIn = () => {
    const { LogIn } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const logInSubmit = (data) => {
        LogIn(data.email, data.password)
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>


                <div className="card bg-base-100 md:w-1/3 shrink-0 shadow-2xl">

                    <form onSubmit={handleSubmit(logInSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="your email"
                                className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className=" text-red-500">Something went wrong!</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="input input-bordered"
                                {...register("password", { required: true, minLength: 5 })}
                            />
                            {errors.password?.type === "required" && <p className=" text-red-500">password required.</p>}
                            {errors.password?.type === "minLength" && <p className=" text-red-500">password must have at least 5 characters!</p>}
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                        <GoogleLogIn></GoogleLogIn>

                        <div className=" my-2 text-center items-center">
                            <span>Are you registered? </span>
                            <Link to={'/signup'} className=" text-blue-500 underline">SignUp</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;