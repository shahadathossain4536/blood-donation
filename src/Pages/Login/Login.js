import React from "react";
import auth from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);

  return (
    <div className="flex justify-center items-center my-auto">
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
          <p>Click the button to listen on Spotiwhy app.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
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
