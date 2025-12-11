import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-primary font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form
                className="fieldset"
                onSubmit={handleSubmit(handleRegister)}
              >
                {/* email field here  */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email field cannot be emty</p>
                )}

                {/* image url field here  */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Paste photo url here"
                  {...register("image")}
                />
                {errors.image?.type === "required" && (
                  <p className="text-red-500">Email field cannot be emty</p>
                )}

                {/* password field here  */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
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
