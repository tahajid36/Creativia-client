import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Login = () => {
  const {setUser, signIn} = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) =>{
    console.log(data)
    signIn(data.email, data.password)
    .then(result=>{
      console.log(result.user)
      setUser(result.user)
      navigate('/')
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your are logged in succesfully",
        showConfirmButton: false,
        timer: 1500
      });
    })

  }
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-primary">Welcome back to Creativia!</h1>
            <p className="py-6">
            Ready to claim your next victory? Log in to manage your creative projects, check leaderboard standings, and explore new high-stakes challenges.
            </p>
          </div>
          <div className="card bg-base-100 mx-auto w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body ">
              <form className="fieldset" onSubmit={handleSubmit(handleLogin)}>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email field can't be emty</p>
                )}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password field can't be emty</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must've 8+ char mix of letters, numbers and
                    symbols.
                  </p>
                )}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
