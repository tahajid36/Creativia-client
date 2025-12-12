import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const { signup, setUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
    signup(data.email, data.password, data.photoURL).then((result) => {
      console.log(result.user);
      setUser(result.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your are registered succesfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="mx-auto w-7/11">
          <div className="text-center">
            <h1 className="text-5xl text-primary font-bold">Register now!</h1>
            <p className="py-6">
              Join a global community of creators and innovators. Create your
              account today to start competing in world-class contests,
              sharpening your professional skills, and winning prizes that
              matter.
            </p>
          </div>
          <div className="card bg-base-100 w-full mx-auto max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <form
                className="fieldset"
                onSubmit={handleSubmit(handleRegister)}
              >
                {/* email field here  */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email field cannot be emty</p>
                )}

                {/* name field here  */}
                <label className="label">Username</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter your name here"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Username field cannot be emty</p>
                )}

                {/* image url field here  */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Paste photo url here"
                  {...register("image", { required: true })}
                />
                {errors.image?.type === "required" && (
                  <p className="text-red-500">Email field cannot be emty</p>
                )}

                {/* password field here  */}
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
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
