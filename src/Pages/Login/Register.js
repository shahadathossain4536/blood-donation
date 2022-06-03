import React from "react";
import auth from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
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
          <h2 class="card-title text-5xl">Register</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <div class="w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="Name"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text-alt text-red-600">
                    {errors.email?.type === "required" && "Name is required"}
                  </span>
                </label>
              </div>
              {/* name */}
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
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text-alt text-red-600">
                    {errors.password?.type === "required" &&
                      "Password is required"}
                  </span>
                </label>
              </div>
              {/* password */}
              {/*confirm  password */}
              <div class="w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("confirmPassword", { required: true })}
                  type="password"
                  placeholder="Confirm Password"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text-alt text-red-600">
                    {errors.confirmPassword?.type === "required" &&
                      "Confirm is required"}
                  </span>
                </label>
              </div>
              {/*confirm password */}
              {/*phone */}
              <div class="w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  placeholder="Phone Number"
                  class="input input-bordered w-full max-w-xs"
                />
                <label class="label">
                  <span class="label-text-alt text-red-600">
                    {errors.phone?.type === "required" &&
                      "Phone Number is required"}
                  </span>
                </label>
              </div>
              {/*phone */}

              {/* <input /> */}
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
                already have a account
                <Link className="text-green-700 ml-1" to="/login">
                  login
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

export default Register;
