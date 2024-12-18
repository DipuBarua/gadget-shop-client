import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form"
import GoogleLogIn from "../components/socialLogIn/GoogleLogIn";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
    const { CreateUser } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => {

        const email = data.email;
        const role = data.role;
        const status = role === "buyer" ? "approved" : "pending";
        const wishlist = [];

        const userData = {
            email, role, status, wishlist
        }
        // console.log(userData);

        CreateUser(data.email, data.password)
            .then(() => {
                axios.post(`https://gadget-shop-server-beta.vercel.app/users`, userData)
                    .then(
                        res => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                Swal.fire({
                                    title: "Success!",
                                    text: "Account Created!",
                                    icon: "success"
                                });
                                navigate('/')
                            }
                        }
                    )
                    .catch(err => console.log(err, 'server faced a problem'))
            })
            .catch(err => console.log(err, "firebase faced a problem!"));
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam magnam minus dolorem recusandae ipsam provident soluta architecto, nam sed? Earum?
                    </p>
                </div>

                {/* Register form  */}
                <div className="card bg-base-100 md:w-1/3 shrink-0 shadow-2xl">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="your name"
                                className="input input-bordered"
                                {...register("name", { required: true })}
                            />
                        </div>

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
                                {...register("password", { required: true, minLength: 6 })}
                            />
                            {errors.password?.type === "required" && <p className=" text-red-500">password required.</p>}
                            {errors.password?.type === "minLength" && <p className=" text-red-500">password must have at least 6 characters!</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">ConfirmPassword</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm password"
                                className="input input-bordered"
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => {
                                        if (watch('password') !== value)
                                            return "passwords do not matched."
                                    }
                                })}
                            />
                            {errors.confirmPassword && <p className=" text-red-500">Both password must matched.</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select
                                className=" select select-bordered"
                                {...register("role", { required: true })}
                                defaultValue={'buyer'}
                            >
                                <option value={"buyer"}>Buyer</option>
                                <option value={"seller"}>Seller</option>
                            </select>
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-secondary">Register</button>
                        </div>

                        <GoogleLogIn></GoogleLogIn>

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