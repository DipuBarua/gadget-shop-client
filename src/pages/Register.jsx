import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam magnam minus dolorem recusandae ipsam provident soluta architecto, nam sed? Earum?
                    </p>
                </div>


                <div className="card bg-base-100 w-1/3 shrink-0 shadow-2xl">
                    <form className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="your name"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="your email"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="input input-bordered"
                                required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register</button>
                        </div>

                        <div className=" my-2 text-center items-center">
                            <span>Already Sign Up! </span>
                            <Link to={'/login'} className=" text-blue-500 underline">Log In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;