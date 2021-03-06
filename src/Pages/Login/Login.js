import React from "react";
import auth from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center my-7 lg:my-auto px-2 ">
      <div class="card lg:card-side bg-base-100 shadow-xl lg:w-1/2">
        <figure>
          <img
            className=""
            src="https://api.lorem.space/image/album?w=400&h=400"
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-5xl">Login</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* email */}
              <div class="w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text-alt text-red-600">
                    {errors.email?.type === "required" && "Email is required"}
                  </span>
                </label>
              </div>
              {/* email */}
              {/* password */}
              <div class="w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="password"
                  placeholder="Password"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text-alt text-red-600">
                    {errors.email?.type === "required" &&
                      "Password is required"}
                  </span>
                </label>
              </div>
              {/* password */}

              <input />
              {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
              <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
              <input
                className="btn w-full max-w-xs my-4"
                value="Login"
                type="submit"
              />
            </form>
            <p className="text-center">
              <small>
                No account ?
                <Link className="text-green-700 ml-1" to="/register">
                  Create account
                </Link>
              </small>
            </p>
            <p class="divider"> OR</p>
          </div>

          <div className="flex justify-around">
            <button
              onClick={() => signInWithFacebook()}
              className="btn btn-outline"
            >
              Facebook
            </button>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline"
            >
              Google
            </button>
            <button
              onClick={() => signInWithGithub()}
              className="btn btn-outline"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
<h2>Login</h2>;
